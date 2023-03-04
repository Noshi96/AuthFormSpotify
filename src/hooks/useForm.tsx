import { IRegisteredUserModel } from '@/modules/HomeModule/models/RegisteredUserModel';
import { useState } from 'react';

interface UseFormReturn {
  user: IRegisteredUserModel;
  onChangeInput: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onSubmitForm: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const useForm = (formState: IRegisteredUserModel): UseFormReturn => {
  const [user, setUser] = useState<IRegisteredUserModel>(formState);

  const onChangeInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setUser({ ...user, [name]: value });
  };

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('user', user);
  };

  return {
    user,
    onChangeInput,
    onSubmitForm,
  };
};
