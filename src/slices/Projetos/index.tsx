import Bounded from '@/app/components/bounded';
import { Content } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';

/**
 * Props for `Projetos`.
 */
export type ProjetosProps = SliceComponentProps<Content.ProjetosSlice>;

/**
 * Component for "Projetos" Slices.
 */
const Projetos = ({ slice }: ProjetosProps): JSX.Element => {
	return (
		<Bounded
			className=' '
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}>
			<PrismicRichText field={slice.primary.heading} />
			<PrismicNextImage field={slice.primary.imagem} />
			<PrismicRichText field={slice.primary.body} />
		</Bounded>
	);
};

export default Projetos;
