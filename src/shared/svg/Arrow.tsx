export type ArrowProps = {
    direction?: 'left' | 'right';
    size?: number;
    color?: string;
}

export const ArrowIcon = ({ color, direction = 'right', size = 24 }: ArrowProps) => {
    return <svg style={{ transform: `rotate(${direction === 'left' ? 0 : 180}deg)`, width: size, height: size }} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 17L9 12L14 7" stroke={color ?? 'currentColor'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

};

