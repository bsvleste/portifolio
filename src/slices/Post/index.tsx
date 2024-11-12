import Bounded from '@/app/components/bounded';
import { Content } from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { FaArrowLeft } from 'react-icons/fa';

/**
 * Props for `Post`.
 */
export type PostProps = SliceComponentProps<Content.PostSlice>;

/**
 * Component for "Post" Slices.
 */
const Post = ({ slice }: PostProps): JSX.Element => {
	return (
		<Bounded
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}>
			<div className='max-w-3xl '>
				<p className='text-zinc-500 text-sm mb-4 '>
					Publicado em{' '}
					{new Intl.DateTimeFormat('pt-BR', {
						dateStyle: 'medium',
						timeZone: 'America/Sao_Paulo',
					}).format(new Date(slice.primary.publishdate || ''))}
				</p>
				<h1 className='text-6xl font-bold text-zinc-200 mb-6'>
					{slice.primary.title}
				</h1>
				<div className='flex flex-col gap-2'>
					<PrismicRichText
						field={slice.primary.content}
						components={{
							heading2: ({ children }) => (
								<h2 className='uppercase text-2xl font-bold '>{children}</h2>
							),
							paragraph: ({ children }) => (
								<p className='text-zinc-400 text-base text-balance leading-relaxed mb-4 '>
									{children}
								</p>
							),
							preformatted: ({ children }) => (
								<div className='bg-neutral-800 p-2 rounded-lg'>
									<code className=' text-zinc-200 font-mono px-1 py-0.5 rounded'>
										{children}
									</code>
								</div>
							),
						}}
					/>
				</div>
				<PrismicNextLink
					field={slice.primary.link}
					className='flex w-fit items-center gap-2 text-lg text-yellow-500 mt-4 hover:underline'>
					<FaArrowLeft /> Voltar
				</PrismicNextLink>
			</div>
		</Bounded>
	);
};

export default Post;
