import { getJobs } from '@website/api-requests/job';
import { getUserLocationData } from '@website/api-requests/location';

export const getUserCountryCode = async () => {
  try {
    const userLocationResponse = await getUserLocationData();
    return userLocationResponse.data?.country?.toLowerCase() ?? 'ca';
  } catch {
    return 'ca';
  }
};

export const getUserJobs = async (countryCode: string, query: string = '') => {
  try {
    const jobsResponse = await getJobs(countryCode, query);
    return jobsResponse.data;
  } catch {
    return [];
  }
};
