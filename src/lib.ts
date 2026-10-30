export const formatPrice = (currency: string, amount: number) =>
  `${currency}${amount.toLocaleString("en-IN")}`;

export const whatsappLink = (number: string, message: string) =>
  `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

export const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const ordinal = (value: number) => {
  const lastTwo = value % 100;
  if (lastTwo >= 11 && lastTwo <= 13) return `${value}th`;
  const suffix = { 1: "st", 2: "nd", 3: "rd" }[value % 10] ?? "th";
  return `${value}${suffix}`;
};

/** Which anniversary is coming up (or is today) for a "YYYY-MM-DD" wedding date. */
export const upcomingAnniversary = (weddingDate: string, now = new Date()) => {
  const [year, month, day] = weddingDate.split("-").map(Number);
  if (!year || !month || !day) return null;

  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  if (new Date(year, month - 1, day) > today) return null;

  const alreadyPassed = new Date(today.getFullYear(), month - 1, day) < today;
  const count = today.getFullYear() - year + (alreadyPassed ? 1 : 0);
  return count > 0 ? count : null;
};
