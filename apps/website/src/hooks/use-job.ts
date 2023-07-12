import { useState } from 'react';

import useSWR from 'swr';

import {
  applyForJob,
  getJobDetails,
  getJobs,
  uploadResume,
} from '@website/api-requests/job';
import { IJob } from '@website/components/job-search/job-data';
import { IResumeUploadFormValues } from '@website/components/common/resume-upload-form';

export default function () {
  const [jobSearchQuery, setJobSearchQuery] = useState<string>();
  const [jobSearchCountryCode, setJobSearchCountryCode] = useState<string>();
  const [jobDescriptionUrl, setJobDescriptionUrl] = useState<string>();
  const [uploadingResume, setUploadingResume] = useState(false);
  const [resumeUploadResponse, setResumeUploadResponse] = useState<
    Record<'success' | 'error', boolean>
  >({ success: false, error: false });

  const {
    data: jobs,
    error: getJobsError,
    isLoading: isLoadingJobs,
    isValidating: isValidatingJobs,
  } = useSWR(jobSearchQuery, (q) => getJobs(jobSearchCountryCode ?? 'ca', q), {
    revalidateOnFocus: false,
  });

  const {
    data: jobDescription,
    error: getJobDescriptionError,
    isLoading: isLoadingJobDescription,
    isValidating: isValidatingJobDescription,
  } = useSWR(jobDescriptionUrl, (url) => getJobDetails(url), {
    revalidateOnFocus: false,
  });

  const fetchJobs = (countryCode: string, query: string) => {
    setJobSearchCountryCode(countryCode);

    const queryObjectWithoutJobIndex: string[] = [];
    const searchParams = new URLSearchParams(query);

    searchParams.forEach((v, k) => {
      if (k !== 'ji') queryObjectWithoutJobIndex.push(`${k}=${v}`);
    });

    setJobSearchQuery(queryObjectWithoutJobIndex.join('&'));
  };

  const getFullJobDescription = (url: string) => setJobDescriptionUrl(url);

  const getDescriptionRichtext = (jobDescriptionHTML: string) => {
    if (!jobDescriptionHTML) return;

    const parser = new DOMParser();
    const doc = parser.parseFromString(jobDescriptionHTML, 'text/html');

    let detailsHtml: HTMLCollectionOf<Element>;
    detailsHtml = doc.getElementsByClassName('adp-body');

    return detailsHtml[0]?.innerHTML;
  };

  const handleUploadResume = async (
    resumeUploadFormValues: IResumeUploadFormValues
  ) => {
    const { fullName, email, resume } = resumeUploadFormValues;

    try {
      setUploadingResume(true);
      await uploadResume({
        fullName,
        email,
        base64ResumeFile: resume.base64,
      });

      setResumeUploadResponse({ error: false, success: true });
    } catch (error) {
      setResumeUploadResponse({ error: true, success: false });
    }

    setTimeout(() => {
      setResumeUploadResponse({ error: false, success: false });
    }, 2000);

    setUploadingResume(false);
  };

  const handleJobApplication = async (
    resumeUploadFormValues: IResumeUploadFormValues,
    job: IJob
  ) => {
    const { fullName, email, resume } = resumeUploadFormValues;
    const {
      id,
      title,
      description: descriptionSnippet,
      location,
      redirect_url: url,
      company,
    } = job;

    try {
      setUploadingResume(true);
      await applyForJob({
        fullName,
        email,
        base64ResumeFile: resume.base64,
        job: {
          id,
          title,
          descriptionSnippet,
          location: location.display_name,
          url,
          company: company.display_name,
        },
      });

      setResumeUploadResponse({ error: false, success: true });
    } catch (error) {
      setResumeUploadResponse({ error: true, success: false });
    }

    setTimeout(() => {
      setResumeUploadResponse({ error: false, success: false });
    }, 2000);

    setUploadingResume(false);
  };

  return {
    isLoadingJobs: isLoadingJobs || isValidatingJobs,
    getJobsError,
    jobs: jobs?.data as IJob[],
    fetchJobs,
    jobDescription: getDescriptionRichtext(jobDescription?.data) as string,
    getJobDescriptionError,
    isLoadingJobDescription:
      isLoadingJobDescription || isValidatingJobDescription,
    getFullJobDescription,
    handleUploadResume,
    uploadingResume,
    resumeUploadResponse,
    handleJobApplication,
  };
}
