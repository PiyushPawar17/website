import { AppProps } from 'next/app';

import '../sass/main.scss';

const App: React.FC<AppProps> = ({ Component, pageProps }) => <Component {...pageProps} />;

export default App;
