import Bounded from '@/app/components/bounded';
import { Content } from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { FaGithub, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { ImArrowUpRight2 } from 'react-icons/im';
const icons = {
	GITHUB: <FaGithub />,
	LINKEDIN: <FaLinkedin />,
	INSTAGRAM: <FaInstagramSquare />,
};
/**
 * Props for `Contatos`.
 */
export type ContatosProps = SliceComponentProps<Content.ContatosSlice>;

/**
 * Component for "Contatos" Slices.
 */
const Contatos = ({ slice }: ContatosProps): JSX.Element => {
	return (
		<Bounded
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}>
			<PrismicRichText
				field={slice.primary.body}
				components={{
					heading2: ({ children }) => (
						<h2 className='uppercase text-4xl sm:text-7xl font-bold bg-gradient-to-b from-yellow-100 via-yellow-500 to-orange-700 bg-clip-text not-italic text-transparent'>
							{children}
						</h2>
					),
					heading3: ({ children }) => (
						<h3 className='mt-8 text-center text-balance text-2xl sm:text-4xl text-zinc-200 font-bold'>
							{children}
						</h3>
					),
					paragraph: ({ children }) => (
						<p className='text-zinc-400  text-sm sm:text-sm text-center text-balance'>
							{children}
						</p>
					),
				}}
			/>
			{slice.primary.links.map((item, index) => (
				<div
					key={index}
					className='mx-3 mt-4 w-full sm:w-96 gap-4'>
					<PrismicNextLink
						field={item.link}
						className=' w-full sm:w-96 gap-4  justify-between items-center focus:ring-offset-3 relative inline-flex h-fit  rounded-lg	 border border-zinc-100/20 bg-zinc-200/10 px-4 py-4 text-zinc-200 outline-none ring-yellow-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-yellow-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-yellow-200/40 hover:text-yellow-300 after:hover:bg-opacity-15 focus:ring-2'>
						{icons[item.linklabel as keyof typeof icons]}
						{item.icones}

						<ImArrowUpRight2 />
					</PrismicNextLink>
				</div>
			))}
		</Bounded>
	);
};

export default Contatos;
