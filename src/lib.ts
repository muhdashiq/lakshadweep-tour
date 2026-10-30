export const formatPrice = (currency: string, amount: number) =>
  `${currency}${amount.toLocaleString("en-IN")}`;

export const whatsappLink = (number: string, message: string) =>
  `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

export const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`;
