export interface ProfileCredentials {
  username: string;
  email: string;
  birthDate: string; // ISO date string
  avatar: FileList; // FileList object
  acceptTerms: boolean;
}
