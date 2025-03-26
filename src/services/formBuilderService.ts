import { FormToSaveData } from '../@types/builder';
import { axiosInstance } from './axiosInstance';

export const saveForm = async (data: FormToSaveData): Promise<void> => {
  console.log('Enregistrement du formulaire ');
  await axiosInstance.post('/forms', data);
};
