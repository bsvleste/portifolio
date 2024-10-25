'use client';
import Image from 'next/image';
import Link from 'next/link';
import ActiveLink from './link';
import { usePathname } from 'next/navigation';
export default function Header() {
	const pathname = usePathname();

	return (
		<header className='px-4 first:pt-6 py-10 '>
			<div className='flex gap-10 mx-auto items-center  flex-col sm:flex-row w-full max-w-6xl '>
				<Image
					src='/bsvcode.png'
					alt='logo'
					width={300}
					height={300}
				/>
				<div className='flex gap-4 '>
					<ActiveLink
						href='/'
						span='Home'
					/>
					<ActiveLink
						href='/projetos'
						span='Projetos'
					/>
					<ActiveLink
						href='/blog'
						span='Blog'
					/>
				</div>
			</div>
		</header>
	);
}
