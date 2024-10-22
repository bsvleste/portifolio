import './globals.css';
import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '@/prismicio';
import { Roboto } from 'next/font/google';
import Header from './components/header';

const roboto = Roboto({
	weight: ['400', '700'],
	subsets: ['latin'],
	variable: '--font-roboto',
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			className={roboto.variable}>
			<body>
				<Header />
				<main>{children}</main>
			</body>
			<PrismicPreview repositoryName={repositoryName} />
		</html>
	);
}
