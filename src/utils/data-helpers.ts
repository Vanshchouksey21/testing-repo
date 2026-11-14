export interface LiveUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface ApiResponse<T> {
  page?: number;
  per_page?: number;
  total?: number;
  total_pages?: number;
  data: T;
}

/**
 * Validates whether an email has a standard valid format.
 */
export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== "string") return false;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email.trim());
}

/**
 * Formats user's full name from first and last name components.
 */
export function formatFullName(firstName?: string, lastName?: string): string {
  const first = (firstName || "").trim();
  const last = (lastName || "").trim();
  if (!first && !last) return "Anonymous User";
  return `${first} ${last}`.trim();
}

/**
 * Extracts numeric price from currency strings (e.g., "£51.77" or "$25.50" -> 51.77).
 */
export function parsePrice(priceStr: string): number {
  if (!priceStr || typeof priceStr !== "string") return 0;
  const clean = priceStr.replace(/[^0-9.]/g, "");
  const num = parseFloat(clean);
  return isNaN(num) ? 0 : Math.round(num * 100) / 100;
}

