export function capitalize(string: string) {
  return String(string[0]).toUpperCase() + String(string).slice(1).toLowerCase();
}

export function calculatePeriod(start_date: Date, end_date: Date, hideMonths?: boolean): string {
  const start = new Date(start_date);
  const end = new Date(end_date);
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const yearText = years > 0 ? `${years} year${years > 1 ? 's' : ''}` : '';
  const monthText = months > 0 ? `${months} month${months > 1 ? 's' : ''}` : '';

  if (yearText && monthText) return hideMonths ? yearText : `${yearText} ${monthText}`;
  if (yearText) return yearText;
  if (monthText) return monthText;

  return 'Less than a month';
}
