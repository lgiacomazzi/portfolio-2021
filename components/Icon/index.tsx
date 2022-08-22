import ArrowRight from './arrow-right.svg';
import ArrowLeft from './arrow-left.svg';
import ArrowDown from './arrow-down.svg';
import Close from './close.svg'
import LinkedIn from './linked-in.svg';
import GitHub from './github.svg'
import MenuBuguer from './menu-burger.svg';
import ExternalLink from './external-link.svg';
import ScrollDown from "./scroll-down.svg"
import Download from "./download.svg"

const colorTypes = {
    "text-primary": "var(--text-primary)",
    "text-interactive": "var(--text-interactive)",
};

const iconTypes = {
    "arrow-right": ArrowRight,
    "arrow-left": ArrowLeft,
    "arrow-down": ArrowDown,
    "github": GitHub,
    "close": Close,
    "linked-in": LinkedIn,
    "menu-burger": MenuBuguer,
    "external-link": ExternalLink,
    "scroll-down": ScrollDown,
    "download": Download,
};

interface IconProps {
    icon: string;
    size?: number;
    color?: string;
    viewBox?: string;
}

const IconComponent = ({ icon, size = 24, color, ...props }: IconProps) => {
    let Icon = iconTypes[icon];
    let Color = colorTypes[color];
    console.log(ScrollDown.props)
    return <Icon width={size} height={size} viewBox={`0 0 24 24`} fill={Color} {...props} />;
};

export default IconComponent;