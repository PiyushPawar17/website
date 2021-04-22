import Tippy from '@tippyjs/react';
import { Placement } from 'tippy.js';

interface TooltipProps {
	content: string;
	placement?: Placement;
}

const Tooltip: React.FC<TooltipProps> = ({ content, placement = 'top' }) => {
	const fileName = content.replace(/ /g, '-').replace(/\./g, '-').toLowerCase();

	return (
		<Tippy content={content} animation="shift-toward-subtle" placement={placement} className="flex-shrink-0">
			<img
				src={`/static/logos/${fileName}.svg`}
				alt={content}
				className="inline-block h-6 xs:h-7 sm:h-9 md:h-7 lg:h-9 flex-shrink-0"
			/>
		</Tippy>
	);
};

export default Tooltip;
