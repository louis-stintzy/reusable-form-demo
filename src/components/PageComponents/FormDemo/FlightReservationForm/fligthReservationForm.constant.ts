export const travelClasses: [
  Record<'value' | 'label', string>,
  Record<'value' | 'label', string>,
  Record<'value' | 'label', string>,
  Record<'value' | 'label', string>,
] = [
  { value: 'Economy', label: 'Economy' },
  { value: 'Premium', label: 'Premium' },
  { value: 'Business', label: 'Business' },
  { value: 'LaPremiere', label: 'La Première' },
];

export const travelClassesValuesTuple = travelClasses.map(
  (travelClass) => travelClass.value
) as [string, ...string[]]; // as [string, string, string, string] // typage pour zod

export const tripTypes: [
  Record<'value' | 'label', string>,
  Record<'value' | 'label', string>,
] = [
  { value: 'RoundTrip', label: 'Aller-retour' },
  { value: 'OneWay', label: 'Aller simple' },
];

export const tripTypesValuesTuple = tripTypes.map(
  (tripType) => tripType.value
) as [string, string]; // typage pour zod
