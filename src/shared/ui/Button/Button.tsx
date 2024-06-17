import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Button.module.scss';
import { Loader } from '../Loader/Loader';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'danger'
    rounded?: 'none' | 'sm' | 'xl' | 'full'
    outlined?: boolean
    full?: boolean
    isPending?: boolean
    disabled?: boolean
    className?: string
}

const Button: React.FC<ButtonProps> = (
    { variant = 'primary', outlined = false, full = false, rounded: rouded = 'sm', children, isPending = false, disabled = false, ...props }
) => {
    return (
        <button
            disabled={disabled || isPending}
            {...props}
            style={{ color: props.color, ...props.style, borderColor: props.color }}
            className={
                classNames(styles.button, [styles[variant], styles[rouded], props.className], { [styles.fullWidth]: full, [styles.outlined]: outlined, [styles.loading]: isPending && !full })
            }
        >
            {isPending ? <Loader /> : children}
        </button>
    );
};

export default Button;
