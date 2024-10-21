import { type Content, isFilled } from '@prismicio/client';
import { PrismicNextLink, PrismicNextImage } from '@prismicio/next';
import { SliceComponentProps, PrismicRichText } from '@prismicio/react';

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps): JSX.Element => {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className='es-bounded es-fullpage-hero'>
			<div></div>
		</section>
	);
};

export default Hero;
