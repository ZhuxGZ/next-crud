import type { Metadata } from 'next';
import { Button } from './components';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'ZhuxGZ Blog',
	description: 'This a fullstack project by ZhuxGZ',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<header className="m-4 mr-0 ml-0 pb-4 flex items-center justify-center border-b-white border-b-2">
					<p className="text-3xl font-bold">ZhuxGZ Blog</p>
				</header>
				{children}
			</body>
		</html>
	);
}
