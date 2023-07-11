import { axiosRequest } from '@packages/utils/axios';

export const getJobs = async (countryCode: string, query: string = '') =>
  await axiosRequest.get(
    `${process.env.NEXT_PUBLIC_ONRION_SERVER_URL}/job/search/${countryCode}?${query}`
  );

export const getJobDetails = async (url: string) =>
  await axiosRequest.post(
    `${process.env.NEXT_PUBLIC_ONRION_SERVER_URL}/job/details`,
    { url }
  );

export const uploadResume = async (data: {
  fullName: string;
  email: string;
  base64ResumeFile: string;
}) =>
  await axiosRequest.post(
    `${process.env.NEXT_PUBLIC_ONRION_SERVER_URL}/job/upload-resume`,
    data
  );
