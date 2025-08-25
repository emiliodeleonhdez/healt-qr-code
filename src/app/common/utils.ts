export const calcAge = (dob?: string | null): string => {
  if (!dob) return '—';
  const d = new Date(dob);
  if (Number.isNaN(d.getTime())) return '—';
  const now = new Date();
  let age = now.getFullYear() - d.getFullYear();
  const m = now.getMonth() - d.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < d.getDate())) age--;
  return String(age);
};

export const formatHumanDate = (
  isoDate: string,
  locale: string = 'es-MX',
  options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }
): string => {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate);
  if (!m) return isoDate;

  const [, y, mo, d] = m;
  const date = new Date(Date.UTC(+y, +mo - 1, +d));

  const day = new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);

  const monthName = new Intl.DateTimeFormat(locale, {
    month: 'long',
    timeZone: 'UTC',
  }).format(date);

  const Month = monthName.charAt(0).toUpperCase() + monthName.slice(1);

  return `${day} de ${Month} de ${y}`;
};
