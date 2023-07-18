import { axiosRequest } from '@packages/utils/axios';

export const addToATSWaitList = async (email: string) =>
  await axiosRequest.post(
    `${process.env.NEXT_PUBLIC_ONRION_SERVER_URL}/message/add-to-wait-list`,
    { email }
  );

export const saveContactUsMessage = async (data: {
  fullName: string;
  email: string;
  message: string;
}) =>
  await axiosRequest.post(
    `${process.env.NEXT_PUBLIC_ONRION_SERVER_URL}/message/contact-us-message`,
    data
  );
