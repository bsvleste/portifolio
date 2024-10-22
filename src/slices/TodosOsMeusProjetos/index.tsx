import { Content } from '@prismicio/client';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';

/**
 * Props for `TodosOsMeusProjetos`.
 */
export type TodosOsMeusProjetosProps =
	SliceComponentProps<Content.TodosOsMeusProjetosSlice>;

/**
 * Component for "TodosOsMeusProjetos" Slices.
 */
const TodosOsMeusProjetos = ({
	slice,
}: TodosOsMeusProjetosProps): JSX.Element => {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}>
			{slice.primary.projetos.map((item) => (
				// Render the item
				<>
					<PrismicNextImage
						field={item.imagem}
						alt={item.imagem.alt}
					/>
					<PrismicRichText field={item.description} />
					<PrismicNextLink field={item.link}>Link</PrismicNextLink>
				</>
			))}
		</section>
	);
};

export default TodosOsMeusProjetos;
