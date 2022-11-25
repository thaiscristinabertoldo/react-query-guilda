import { axiosInstance } from './api';
import { saveToken } from './local-storage';

const URL_LOGIN = '/login';
const URL_REGISTER = '/register';

type Params = {
  email: string;
  password: string;
};

type Response = {
  accessToken: string;
  user: {
    id: number;
    email: string;
  };
};

export const login = async (data: Params): Promise<Response> => {
  try {
    const response = await axiosInstance.post<Response>(URL_LOGIN, data);

    saveToken(response.data.accessToken);

    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.data ?? error);
  }
};

export const register = async (data: Params): Promise<Response> => {
  try {
    const response = await axiosInstance.post<Response>(URL_REGISTER, data);

    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.data ?? error);
  }
};
