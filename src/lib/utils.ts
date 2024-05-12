import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function validateString(message: string, length: number) {
  return false;
}
export function getErrorMessage(error: unknown) {
  if (error instanceof Error) {
    return error.message;
  }
  return String(error);
}
