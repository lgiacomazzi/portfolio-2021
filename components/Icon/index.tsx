import ArrowRight from './arrow-right.svg';
import ArrowLeft from './arrow-left.svg';
import ArrowDown from './arrow-down.svg';
import LinkedIn from './linked-in.svg';
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
}

const IconComponent = ({ icon, size, color, ...props }: IconProps) => {
    let Icon = iconTypes[icon];
    let Color = colorTypes[color];
    return <Icon width={size} height={size} fill={Color} {...props} />;
};

export default IconComponent;