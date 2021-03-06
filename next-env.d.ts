/// <reference types="next" />
/// <reference types="next/types/global" />

declare module 'mdx-prism';

declare module 'comma-number' {
	export default function (inputNumber: number, optionalSeparator?: string, optionalDecimalChar?: string): string;
}

interface Window {
	gtag: (config: string, measurementId: string, params: object) => void;
}
