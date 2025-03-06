/**
 * Formatage d'une chaîne de caractères pour un usage dans les classNames
 *
 * - Convertit en minuscules
 * - Supprime les accents
 * - Remplace les espaces par des tirets
 * - Supprime les caractères spéciaux
 *
 * @param {string} title - Le titre à formater
 * @returns {string} - Titre formaté prêt pour être utilisé en className
 *
 * @example
 * formatTitle("Sign Up") // "sign-up"
 * "Sign Up" → "sign-up"
 *
 */

export function formatTitle(title: string): string {
  return title
    .toLowerCase()
    .trim() // supprime les espaces au début et à la fin
    .normalize('NFD') // normalise les caractères accentués
    .replace(/[\u0300-\u036f]/g, '') // supprime les accents
    .replace(/\s+/g, '-') // remplace les espaces par des tirets
    .replace(/[^a-z0-9-]/g, '') // supprime les caractères spéciaux
    .replace(/^-+|-+$/g, ''); // supprime les tirets au début et à la fin
}
