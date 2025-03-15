export const travelClasses = [
  { value: 'Economy', label: 'Economy' },
  { value: 'Premium', label: 'Premium' },
  { value: 'Business', label: 'Business' },
  { value: 'LaPremiere', label: 'La Première' },
];

export const travelClassesValuesTuple = travelClasses.map(
  (travelClass) => travelClass.value
);

export const tripTypes = [
  { value: 'RoundTrip', label: 'Aller-retour' },
  { value: 'OneWay', label: 'Aller simple' },
];
