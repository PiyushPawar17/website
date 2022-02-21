/* eslint-disable react/no-danger*/
import Document, { Html, Head, Main, NextScript } from 'next/document';

import { GA_TRACKING_ID } from '@lib/gtag';

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
						rel="stylesheet"
					/>
					<link href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap" rel="stylesheet" />

					<script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
					<script
						dangerouslySetInnerHTML={{
							__html: `
								window.dataLayer = window.dataLayer || [];
								function gtag() { dataLayer.push(arguments); }
								gtag('js', new Date());
								gtag('config', '${GA_TRACKING_ID}', {
									page_path: window.location.pathname,
								});
							`
						}}
					/>
				</Head>
				<body className="bg-body text-gray-100">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
