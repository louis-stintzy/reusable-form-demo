import { z } from 'zod';
import {
  airportsValuesTuple,
  travelClassesValuesTuple,
  tripTypesValuesTuple,
} from './fligthReservationForm.constant';

export const flightReservationFormSchema = z
  .object({
    tripType: z.enum(tripTypesValuesTuple),
    departureAirport: z.enum(airportsValuesTuple),
    arrivalAirport: z.enum(airportsValuesTuple),
    departureDate: z
      .string()
      .min(1, 'Veuillez saisir une date de départ.')
      .refine((date) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0); // On retire les heures pour comparer les dates (on remet à 00:00:00)
        const selectedDate = new Date(date);
        return selectedDate >= today;
      }, 'La date de départ doit être égale ou ultérieure à aujourd’hui.'),
    returnDate: z.string().optional(),
    adults: z.number().min(0, 'Nombre invalide.'),
    children: z.number().min(0, 'Nombre invalide.'),
    travelClass: z.enum(travelClassesValuesTuple),
    useBluebiz: z.boolean(),
  })
  // Vérification de la date de retour
  // si tripType === 'OneWay', returnDate est optionnel (pas besoin de vérification)
  // sinon si tripType === 'RoundTrip', returnDate est obligatoire (et devra être ultérieure à departureDate)
  // si RoundTrip (=pas OneWay) et pas de returnDate, on affiche une erreur
  .refine((data) => data.tripType === 'OneWay' || !!data.returnDate, {
    path: ['returnDate'],
    message: 'Veuillez choisir une date de retour pour un aller-retour.',
  })
  .refine(
    (data) => {
      if (data.tripType === 'OneWay') {
        return true; // pas de vérification pour One Way
      }
      if (!data.returnDate) {
        return false; // date de retour obligatoire pour Round Trip
      }
      const departure = new Date(data.departureDate);
      const retour = new Date(data.returnDate);

      departure.setHours(0, 0, 0, 0);
      retour.setHours(0, 0, 0, 0);

      return retour >= departure;
    },
    {
      message: 'La date de retour doit être ultérieure à la date de départ.',
      path: ['returnDate'],
    }
  )
  .refine((data) => data.adults + data.children > 0, {
    path: ['adults'],
    message: 'Au moins un passager requis.',
  })
  .refine((data) => data.departureAirport !== data.arrivalAirport, {
    path: ['arrivalAirport'],
    message: 'Veuillez choisir un aéroport différent de celui de départ.',
  });
