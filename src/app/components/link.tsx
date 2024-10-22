'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type ActiveLinkProps = {
	href: string;
	span: string;
};

export default function ActiveLink({ href, span }: ActiveLinkProps) {
	const pathname = usePathname();
	return (
		<Link
			className='hover:text-amber-300 '
			href={href}>
			<span
				className={
					pathname === href
						? 'text-amber-300 underline decoration-amber-300 cursor-auto '
						: ''
				}>
				{span}
			</span>
		</Link>
	);
}
