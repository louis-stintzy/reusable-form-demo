import { FormPublicData } from '../store/slices/savedFormsSlice';
import { axiosInstance } from './axiosInstance';

export const getFormsByTitle = async (
  title: string,
  visibility: 'private' | 'public'
): Promise<FormPublicData[]> => {
  const response = await axiosInstance.get<FormPublicData[]>(
    `/forms?title=${title}&visibility=${visibility}`
  );
  return response.data;
};

export const getFormsByUserId = async (
  userId: number
): Promise<FormPublicData[]> => {
  const response = await axiosInstance.get<FormPublicData[]>(
    `/forms?userId=${userId}`
  );
  return response.data;
};

export const getPublicForms = async (): Promise<FormPublicData[]> => {
  const response = await axiosInstance.get<FormPublicData[]>(
    '/forms?visibility=public'
  );
  return response.data;
};

export const getForm = async (id: number): Promise<FormPublicData> => {
  const response = await axiosInstance.get<FormPublicData>(`/forms/${id}`);
  return response.data;
};
