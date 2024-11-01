import Bounded from '@/app/components/bounded';
import { Content } from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';

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
				<h1 className='text-6xl font-bold text-zinc-200 mb-6'>
					{slice.primary.title}
				</h1>
				<PrismicRichText
					field={slice.primary.content}
					components={{
						paragraph: ({ children }) => (
							<p className='text-zinc-400 text-md mb-2'>{children}</p>
						),
					}}
				/>
				<h3>{slice.primary.author}</h3>
				<p>{slice.primary.publishdate}</p>
				<PrismicNextLink field={slice.primary.link}>Link</PrismicNextLink>
			</div>
		</Bounded>
	);
};

export default Post;
