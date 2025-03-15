import { FlightReservationCredentials } from '../../../../@types/demo';
import { FormConfig } from '../../../../@types/form';
import loader from '../../../../assets/loader-circle.svg';

export const flightReservationFormConfig: FormConfig<FlightReservationCredentials> =
  {
    title: 'Flight Reservation',
    fields: [
      {
        label: 'Type de voyage',
        id: 'tripType',
        type: 'select',
        required: true,
      },
      {
        label: 'Départ de',
        id: 'departureAirport',
        type: 'text',
        placeholder: 'Ville ou aéroport',
        required: true,
      },
      {
        label: 'Arrivée à',
        id: 'arrivalAirport',
        type: 'text',
        placeholder: 'Ville ou aéroport',
        required: true,
      },
      {
        label: 'Date de départ',
        id: 'departureDate',
        type: 'date',
        required: true,
      },
      {
        label: 'Date de retour',
        id: 'returnDate',
        type: 'date',
      },
      {
        label: 'Adultes',
        id: 'adults',
        type: 'number',
        min: 1,
        required: true,
      },
      {
        label: 'Enfants',
        id: 'children',
        type: 'number',
        min: 0,
        required: true,
      },
      {
        label: 'Classe de voyage',
        id: 'travelClass',
        type: 'select',
        required: true,
      },
      {
        label: "Je veux réserver avec bluebiz ou un accord d'entreprise",
        id: 'useBluebiz',
        type: 'checkbox',
      },
    ],
    submitButton: {
      loading: {
        type: 'image',
        content: loader,
      },
      default: {
        type: 'text',
        content: 'Rechercher les vols',
      },
    },
    footerMessage: {
      type: 'info',
      text: 'Réservez votre billet en toute sécurité.',
    },
  };
