import ReusableForm from '../../../Common/ReusableForm/ReusableForm';
import { FlightReservationCredentials } from '../../../../@types/demo';
import { flightReservationFormConfig } from './flightReservationForm.config';
import { flightReservationFormSchema } from './flightReservationForm.schema';

import './FlightReservationForm.style.css';

function FlightReservationForm() {
  const handleFlightSearch = (data: FlightReservationCredentials) => {
    console.log('Recherche de vols :', data);
  };

  return (
    <ReusableForm<FlightReservationCredentials>
      isLoading={false}
      formConfig={flightReservationFormConfig}
      formSchema={flightReservationFormSchema}
      action={handleFlightSearch}
    />
  );
}

export default FlightReservationForm;
