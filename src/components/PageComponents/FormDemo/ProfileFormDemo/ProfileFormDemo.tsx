import { ProfileCredentials } from '../../../../@types/demo';
import ReusableForm from '../../../Common/ReusableForm/ReusableForm';
import { profileFormConfig } from './profileFormDemo.config';
import { profileFormSchema } from './profileFormDemo.schema';

import './profileFormDemo.style.css';

function UserProfileForm() {
  const handleProfileSubmit = (data: ProfileCredentials) => {
    console.log('Profile submitted:', data);
  };

  return (
    <ReusableForm<ProfileCredentials>
      isLoading={false}
      formConfig={profileFormConfig}
      formSchema={profileFormSchema}
      action={handleProfileSubmit}
    />
  );
}

export default UserProfileForm;
