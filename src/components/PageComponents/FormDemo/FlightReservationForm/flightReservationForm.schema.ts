import { z } from 'zod';
import {
  travelClassesValuesTuple,
  tripTypesValuesTuple,
} from './fligthReservationForm.constant';

export const flightReservationFormSchema = z
  .object({
    tripType: z.enum(tripTypesValuesTuple),
    departureAirport: z.string().min(1, 'Veuillez saisir une ville de départ.'),
    arrivalAirport: z.string().min(1, "Veuillez saisir une ville d'arrivée."),
    departureDate: z
      .string()
      .min(1, 'Veuillez saisir une date de départ.')
      .refine((date) => {
        const today = new Date().toISOString().split('T')[0];
        return date >= today;
      }, 'La date de départ doit être ultérieure à aujourd’hui.'),
    returnDate: z.string().optional(),
    adults: z.number().min(1, 'Au moins 1 adulte requis.'),
    children: z.number().min(0, 'Nombre invalide.'),
    travelClass: z.enum(travelClassesValuesTuple),
    useBluebiz: z.boolean(),
  })
  .refine((data) => data.tripType === 'OneWay' || !!data.returnDate, {
    path: ['returnDate'],
    message: 'Veuillez choisir une date de retour pour un aller-retour.',
  });
