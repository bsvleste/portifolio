import Bounded from '@/app/components/bounded';
import { Content } from '@prismicio/client';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';

/**
 * Props for `Info`.
 */
export type InfoProps = SliceComponentProps<Content.InfoSlice>;

/**
 * Component for "Info" Slices.
 */
const Info = ({ slice }: InfoProps): JSX.Element => {
	return (
		<Bounded
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}>
			<h2 className=' text-center uppercase text-4xl sm:text-7xl font-bold bg-gradient-to-b from-yellow-100 via-yellow-500 to-orange-700 bg-clip-text not-italic text-transparent'>
				{slice.primary.title}
			</h2>
			<PrismicRichText
				field={slice.primary.description}
				components={{
					paragraph: ({ children }) => (
						<p className='mt-8 text-start text-balance text-zinc-200 text-sm sm:text-2xl'>
							{children}
						</p>
					),
				}}
			/>
		</Bounded>
	);
};

export default Info;
