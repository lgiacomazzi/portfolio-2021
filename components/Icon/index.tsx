import ArrowRight from './arrow-right.svg';
import ArrowLeft from './arrow-left.svg';
import LinkedIn from './linked-in.svg';
import MenuBuguer from './menu-burger.svg';
import ExternalLink from './external-link.svg';
import ScrollDown from "./scroll-down.svg"

const colorTypes = {
    "text-primary": "var(--text-primary)",
    "text-interactive": "var(--text-interactive)",
};

const iconTypes = {
    "arrow-right": ArrowRight,
    "arrow-left": ArrowLeft,
    "linked-in": LinkedIn,
    "menu-burger": MenuBuguer,
    "external-link": ExternalLink,
    "scroll-down": ScrollDown,
};

interface IconProps {
    icon: string;
    size?: number;
    color?: string;
}

const IconComponent = ({ icon, size, color }: IconProps) => {
    let Icon = iconTypes[icon];
    let Color = colorTypes[color];
    return <Icon width={size} height={size} fill={Color} />;
};

export default IconComponent;