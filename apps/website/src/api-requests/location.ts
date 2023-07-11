import { AxiosAbortController, axiosRequest } from '@packages/utils/axios';

export const getUserLocationData = async () =>
  await axiosRequest.get(
    `${process.env.NEXT_PUBLIC_ONRION_SERVER_URL}/location/lookup`
  );

export const getCityPredictions = async (searchText: string) =>
  await axiosRequest.get(
    `${process.env.NEXT_PUBLIC_ONRION_SERVER_URL}/location/google-address-search?text=${searchText}&type=cities`,
    { signal: AxiosAbortController.get('getCityPredictions')?.signal }
  );
