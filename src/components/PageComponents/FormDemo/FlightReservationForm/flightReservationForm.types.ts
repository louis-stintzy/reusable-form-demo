import {
  airports,
  travelClasses,
  tripTypes,
} from './fligthReservationForm.constant';

// (typeof ...) extrait le type de l'objet
// (typeof ...)[number] extrait le type des objets
// (typeof ...)[number]['value'] extrait le type des valeurs des objets

export type TripTypeValue = (typeof tripTypes)[number]['value'];
export type AirportValue = (typeof airports)[number]['value'];
export type TravelClassValue = (typeof travelClasses)[number]['value'];

export interface FlightReservationCredentials {
  tripType: TripTypeValue;
  departureAirport: AirportValue;
  arrivalAirport: AirportValue;
  departureDate: string;
  returnDate?: string;
  adults: number;
  children: number;
  travelClass: TravelClassValue;
  useBluebiz: boolean;
}
