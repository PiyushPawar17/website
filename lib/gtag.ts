export const GA_TRACKING_ID = 'UA-180358905-1';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
	window.gtag('config', GA_TRACKING_ID, {
		page_path: url
	});
};

interface GTagEvent {
	action: string;
	category: string;
	label: string;
	value: number;
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTagEvent) => {
	window.gtag('event', action, {
		event_category: category,
		event_label: label,
		value: value
	});
};