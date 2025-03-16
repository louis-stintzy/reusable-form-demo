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

export const airports: {
  value: string;
  label: string;
}[] = [
  {
    value: 'CDG',
    label: 'Paris Charles de Gaulle (CDG), France',
  },
  { value: 'ORY', label: 'Paris Orly (ORY), France' },
  { value: 'NCE', label: 'Nice Côte d’Azur (NCE), France' },
  { value: 'MRS', label: 'Marseille Provence (MRS), France' },
  { value: 'LYS', label: 'Lyon Saint-Exupéry (LYS), France' },
  { value: 'TLS', label: 'Toulouse-Blagnac (TLS), France' },
  {
    value: 'BSL-MLH',
    label: 'EuroAirport Basel-Mulhouse-Freiburg (BSL-MLH), France',
  },
  { value: 'GVA', label: 'Genève Aéroport (GVA), Suisse' },
  { value: 'ZRH', label: 'Zurich Airport (ZRH), Suisse' },
  { value: 'BRU', label: 'Bruxelles-National (BRU), Belgique' },
  { value: 'AMS', label: 'Amsterdam-Schiphol (AMS), Pays-Bas' },
  { value: 'LHR', label: 'Londres-Heathrow (LHR), Royaume-Uni' },
  { value: 'JFK', label: 'New York - John F. Kennedy (JFK), États-Unis' },
  { value: 'LAX', label: 'Los Angeles International (LAX), États-Unis' },
  { value: 'NRT', label: 'Tokyo - Narita (NRT), Japon' },
  { value: 'PEK', label: 'Pékin-Capitale (PEK), Chine' },
  { value: 'DXB', label: 'Dubai International (DXB), Émirats arabes unis' },
  { value: 'DOH', label: 'Hamad International (DOH), Qatar' },
  { value: 'SIN', label: 'Changi (SIN), Singapour' },
  { value: 'SYD', label: 'Kingsford Smith Sydney Airport (SYD), Australie' },
  { value: 'AKL', label: 'Auckland Airport (AKL), Nouvelle-Zélande' },
  { value: 'CPT', label: 'Le Cap (CPT), Afrique du Sud' },
  { value: 'CMN', label: 'Mohammed V de Casablanca(CMN), Maroc' },
  { value: 'RAK', label: 'Marrakech-Menara (RAK), Maroc' },
  {
    value: 'YUL',
    label: 'Montreal-Trudeau International Airport (YUL), Canada',
  },
  { value: 'YYZ', label: 'Toronto Pearson (YYZ), Canada' },
  { value: 'TNR', label: 'Aéroport d’Antananarivo-Ivato (TNR), Madagascar' },
  { value: 'RUN', label: 'Roland Garros (RUN), La Réunion' },
  { value: 'ANM', label: 'Aéroport d’Antsirabato (ANM), Madagascar' },
];

export const airportsValuesTuple = airports.map((airport) => airport.value) as [
  string,
  ...string[],
];
