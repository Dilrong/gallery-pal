import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * 테일윈드를 병합한다.
 * @param inputs 
 * @returns 
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

/**
 * 주소를 요약해서 반환한다.
 * @param address
 * @param startLength
 * @param endLength
 */
export const summarizeAddress = (
    address: string,
    startLength = 5,
    endLength = 6,
) => {
    if (!address) return "";
    return `${address.slice(0, startLength)}...${address.slice(-endLength)}`;
};