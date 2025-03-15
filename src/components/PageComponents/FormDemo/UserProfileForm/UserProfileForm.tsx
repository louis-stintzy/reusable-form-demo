import { ProfileCredentials } from '../../../../@types/demo';
import ReusableForm from '../../../Common/ReusableForm/ReusableForm';
import { userProfileFormConfig } from './userProfileForm.config';
import { userProfileFormSchema } from './userProfileForm.schema';

import './UserProfileForm.style.css';

function UserProfileForm() {
  const handleProfileSubmit = (data: ProfileCredentials) => {
    console.log('Profile submitted:', data);
  };

  return (
    <ReusableForm<ProfileCredentials>
      isLoading={false}
      formConfig={userProfileFormConfig}
      formSchema={userProfileFormSchema}
      action={handleProfileSubmit}
    />
  );
}

export default UserProfileForm;
