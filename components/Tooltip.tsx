import Tippy from '@tippyjs/react';
import { Placement } from 'tippy.js';

interface TooltipProps {
	content: string;
	placement?: Placement;
}

const Tooltip: React.FC<TooltipProps> = ({ content, placement = 'top' }) => {
	const fileName = content
		.replace(/ /g, '-')
		.replace(/\./g, '-')
		.toLowerCase();

	return (
		<Tippy content={content} animation="shift-toward-subtle" placement={placement}>
			<img src={`/img/logos/${fileName}.svg`} alt={content} />
		</Tippy>
	);
};

export default Tooltip;
