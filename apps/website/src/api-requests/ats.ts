import { axiosRequest } from '@packages/utils/axios';

export const addToATSWaitList = async (email: string) =>
  await axiosRequest.post(
    `${process.env.NEXT_PUBLIC_ONRION_SERVER_URL}/ats/add-to-wait-list`,
    { email }
  );
