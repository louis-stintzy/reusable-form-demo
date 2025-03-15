export interface ProfileCredentials {
  username: string;
  email: string;
  birthDate: string; // ISO date string
  avatar: FileList; // FileList object
  acceptTerms: boolean;
}

export interface FlightReservationCredentials {
  tripType: 'Aller-retour' | 'Aller simple';
  departureAirport: string;
  arrivalAirport: string;
  departureDate: string;
  returnDate?: string;
  adults: number;
  children: number;
  travelClass: 'Economy' | 'Premium' | 'Business' | 'La Première';
  useBluebiz: boolean;
}
