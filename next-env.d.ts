/// <reference types="next" />
/// <reference types="next/types/global" />

interface Window {
	gtag: (config: string, measurementId: string, params: object) => void;
}
