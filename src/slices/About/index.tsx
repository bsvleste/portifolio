import Bounded from '@/app/components/bounded';
import { Content } from '@prismicio/client';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import {
	FaGithub,
	FaHtml5,
	FaCss3Alt,
	FaReact,
	FaAngular,
	FaNodeJs,
} from 'react-icons/fa';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';
import { zinc } from 'tailwindcss/colors';
import { IoLogoJavascript } from 'react-icons/io';
import { PrismicNextImage } from '@prismicio/next';
const icons = {
	GITHUB: <FaGithub />,
	HTML: <FaHtml5 color='#E34F26' />,
	CSS: <FaCss3Alt color='#3996DB' />,
	JAVASCRIPT: <IoLogoJavascript color='#EABD5F' />,
	REACT: <FaReact color='#3996DB' />,
	ANGULAR: <FaAngular color='#E3646E' />,
	NODE: <FaNodeJs color='#82BC4F' />,
};
/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About = ({ slice }: AboutProps): JSX.Element => {
	return (
		<Bounded
			className='mt-20'
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}>
			<div className=''>
				<PrismicRichText
					field={slice.primary.body}
					components={{
						paragraph: ({ children }) => (
							<p className='text-center text-balance text-zinc-200 text-sm sm:text-5xl'>
								{children}
							</p>
						),
						strong: ({ children }) => (
							<em className=' font-bold bg-gradient-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent'>
								{children}
							</em>
						),
						heading1: ({ children }) => (
							<h1 className='text-center font-bold text-4xl sm:text-7xl text-balance  text-zinc-300'>
								{children}
							</h1>
						),
					}}
				/>
				<div className='mt-5 text-center text-balance text-[10px] sm:text-xl text-zinc-400'>
					<PrismicRichText field={slice.primary.description} />
				</div>
				<div className='gap-4 flex flex-wrap justify-center items-center border border-orange-400'>
					{slice.primary.icons.map((item, index) => (
						// Render the item
						<div
							key={index}
							className='mt-4 sm:mt-12 flex-row justify-center items-center text-[10px] sm:text-lg '>
							<div className='flex  justify-center items-center gap-1 py-2 px-2 bg-zinc-700 rounded-3xl'>
								{icons[item.icon as keyof typeof icons]}
								{item.icon}
							</div>
						</div>
					))}
				</div>
			</div>
			<div className='mt-4 sm:mt-24'>
				<MdKeyboardDoubleArrowDown
					size={45}
					color={zinc[500]}
				/>
			</div>
		</Bounded>
	);
};

export default About;
