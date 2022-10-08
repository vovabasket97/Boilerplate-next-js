import { accentColor, bgColor } from 'config/constans';
import Head from 'next/head';
import NextProgressBar from 'nextjs-progressbar';
import Favicons from './Favicons';

const HeadProvider = ({ children }) => {
	return (
		<>
			<NextProgressBar color={accentColor} startPosition={0.3} stopDelayMs={200} height={3} />
			<Head>
				<meta charSet='UTF-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />

				<Favicons />

				<meta name='theme-color' content={bgColor} />
				<meta name='msapplication-navbutton-color' content={bgColor} />
				<meta name='apple-mobile-web-app-status-bar-style' content={bgColor} />
			</Head>
			{children}
		</>
	);
};

export default HeadProvider;
