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
					<h3>{slice.primary.author}</h3>
				</div>
				<p>{slice.primary.publishdate}</p>
				<PrismicNextLink field={slice.primary.link}>Link</PrismicNextLink>
			</div>
		</Bounded>
	);
};

export default Post;
