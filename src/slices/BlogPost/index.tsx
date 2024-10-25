import Bounded from '@/app/components/bounded';
import { Content } from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';

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
					className='max-w-3xl '>
					<h1 className='font-bold text-4xl sm:text-4x text-zinc-200 mb-2'>
						{item.title}
					</h1>
					<PrismicRichText
						field={item.content}
						components={{
							paragraph: ({ children }) => (
								<p className='text-zinc-400 text-md'>{children}</p>
							),
						}}
					/>
					<h3>{item.author}</h3>
					<p>{item.puslishdate}</p>
					<PrismicNextLink field={item.link}>Link</PrismicNextLink>
				</div>
			))}
		</Bounded>
	);
};

export default BlogPost;
