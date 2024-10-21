import Bounded from '@/app/components/bounded';
import { Content } from '@prismicio/client';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import Link from 'next/link';

/**
 * Props for `destaques`.
 */
export type DestaquesProps = SliceComponentProps<Content.MeusProjetosSlice>;

/**
 * Component for "destaques" Slices.
 */
const Destaques = ({ slice }: DestaquesProps): JSX.Element => {
	return (
		<Bounded
			className='-mt-20'
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}>
			<div className='mb-4 sm:mb-6'>
				<PrismicRichText
					field={slice.primary.title}
					components={{
						heading1: ({ children }) => (
							<h2 className='uppercase text-3xl sm:text-7xl font-bold bg-gradient-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent'>
								{children}
							</h2>
						),
					}}
				/>
			</div>
			<div
				//className='flex flex-col mt-10'
				className='grid gap-4 grid-cols-app'>
				{slice.primary.repeatprojetos.map((item, index) => {
					return (
						// Render the item
						<div
							key={index}
							className='cursor-pointer bg-zinc-200/10  relative overflow-hidden z-0 after:-z-10 after:content-[""] after:absolute after:inset-0  mt-16 flex justify-center items-start flex-col rounded-xl border-2  hover:border-yellow-500 hover:border-2 border-yellow-500/30 bg-gradient-to-b from-zinc-50/15 to-zinc-50/5  shadow-lg backdrop-blur-sm transition-all '>
							<div className=' lg:grid-cols-3  py-3 px-3  h-52 flex  flex-col  focus:ring-offset-3 relative   	   text-zinc-200 outline-none ring-yellow-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-yellow-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-yellow-200/40 hover:text-yellow-300 after:hover:bg-opacity-15 focus:ring-2  '>
								<PrismicRichText
									field={item.name}
									components={{
										heading2: ({ children }) => (
											<h2 className='text-start  font-bold text-2xl  sm:text-3xl text-balance  text-zinc-300'>
												{children}
											</h2>
										),
									}}
								/>
								<div className='flex  h-64 w-full justify-between  flex-col '>
									<PrismicRichText
										field={item.description}
										components={{
											paragraph: ({ children }) => (
												<p className='text-zinc-400 mt-4 text-sm'>{children}</p>
											),
										}}
									/>

									<div className='focus:ring-offset-3 relative inline-flex h-fit w-fit rounded-lg border border-zinc-400/20 bg-zinc-800 px-2 py-2 text-zinc-200 outline-none ring-yellow-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-yellow-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-yellow-200/40 hover:text-yellow-300 after:hover:bg-opacity-15 focus:ring-2'>
										<PrismicNextLink
											field={item.link}
											className='text-base'>
											{item.descriptionlink}
										</PrismicNextLink>
									</div>
								</div>
							</div>
							<div className=''>
								<PrismicNextImage
									field={item.imagem}
									className='rounded-b-xl -mb-4'
								/>
							</div>
						</div>
					);
				})}
			</div>
			<div className='flex justify-center mt-10'>
				<Link
					href='/projetos'
					className='focus:ring-offset-3 relative inline-flex h-fit w-fit rounded-lg	 border border-zinc-100/20 bg-zinc-200/10 px-4 py-4 text-zinc-200 outline-none ring-yellow-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-yellow-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-yellow-200/40 hover:text-yellow-300 after:hover:bg-opacity-15 focus:ring-2'>
					{slice.primary.labelgotomeusprojetos}
				</Link>
			</div>
		</Bounded>
	);
};

export default Destaques;
