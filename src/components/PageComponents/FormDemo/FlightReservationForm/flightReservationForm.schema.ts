import { z } from 'zod';

export const flightReservationFormSchema = z
  .object({
    tripType: z.enum(['Aller-retour', 'Aller simple']),
    departureAirport: z.string().min(1, 'Veuillez saisir une ville de départ.'),
    arrivalAirport: z.string().min(1, "Veuillez saisir une ville d'arrivée."),
    departureDate: z.string(),
    returnDate: z.string().optional(),
    adults: z.number().min(1, 'Au moins 1 adulte requis.'),
    children: z.number().min(0, 'Nombre invalide.'),
    travelClass: z.enum(['Economy', 'Premium', 'Business', 'La Première']),
    useBluebiz: z.boolean(),
  })
  .refine((data) => data.tripType === 'Aller simple' || !!data.returnDate, {
    path: ['returnDate'],
    message: 'Veuillez choisir une date de retour pour un aller-retour.',
  });
