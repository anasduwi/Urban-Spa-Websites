/** Penggabung class CSS sederhana (menggantikan clsx agar tanpa dependency). */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ');
}
