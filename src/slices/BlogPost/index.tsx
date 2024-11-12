import Bounded from '@/app/components/bounded';
import { Content } from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { FaArrowRight } from 'react-icons/fa';

/**
 * Props for `BlogPost`.
 */
export type BlogPostProps = SliceComponentProps<Content.BlogPostSlice>;

/**
 * Component for "BlogPost" Slices.
 */
const BlogPost = ({ slice }: BlogPostProps): JSX.Element => {
	return (
		<Bounded
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}>
			{slice.primary.post.map((item, index) => (
				// Render the item
				<div
					key={index}
					className='max-w-3xl mb-8'>
					<PrismicNextLink field={item.link}>
						<h1 className='font-bold text-4xl sm:text-4x text-zinc-200 mb-2'>
							{item.title}
						</h1>
					</PrismicNextLink>
					<PrismicRichText
						field={item.content}
						components={{
							paragraph: ({ children }) => (
								<p className='text-zinc-400 text-md mb-2'>{children}</p>
							),
						}}
					/>
					<p className='text-zinc-500	 mt-4 text-sm'>
						{new Intl.DateTimeFormat('pt-BR', {
							dateStyle: 'medium',
							timeZone: 'America/Sao_Paulo',
						}).format(new Date(item.puslishdate || ''))}
					</p>
					<PrismicNextLink
						field={item.link}
						className='flex w-fit items-center gap-2 text-lg text-yellow-500 mt-4 hover:underline'>
						Ler mais <FaArrowRight />
					</PrismicNextLink>
				</div>
			))}
		</Bounded>
	);
};

export default BlogPost;
