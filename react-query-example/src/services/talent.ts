import { TalentParam } from '../types';
import { axiosInstance } from './api';

const URL_TALENTS = '/talents';

type Response = {
  id: number;
  name: string;
  avatarUrl: string;
  education: string;
};

export const getTalents = async (): Promise<Response[]> => {
  try {
    const response = await axiosInstance.get<Response[]>(URL_TALENTS);

    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.data ?? error);
  }
};

export const getTalent = async ({ talentId }: { talentId: number }): Promise<Response> => {
  try {
    const response = await axiosInstance.get<Response>(`${URL_TALENTS}/${talentId}`);

    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.data ?? error);
  }
};

export const createTalent = async (data: TalentParam): Promise<Response> => {
  try {
    const response = await axiosInstance.post<Response>(`${URL_TALENTS}`, data);

    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.data ?? error);
  }
};

export const editTalent = async (data: TalentParam): Promise<Response> => {
  try {
    const response = await axiosInstance.put<Response>(`${URL_TALENTS}/${data.id}`, data);

    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.data ?? error);
  }
};
