import axios from 'axios';

export const axiosRequest = axios.create({
  withCredentials: true,
});

const abortControllers: Partial<Record<string, AbortController>> = {};

export class AxiosAbortController {
  static get = (name: string) => abortControllers[name];

  static create = (name: string) => {
    if (abortControllers[name]) abortControllers?.[name]?.abort();

    abortControllers[name] = new AbortController();
  };
}
