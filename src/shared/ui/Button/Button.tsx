import { classNames } from '@/shared/utils/classNames/classNames';
import styles from './Button.module.scss';
import { Loader } from '../Loader/Loader';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'danger'
    rouded?: 'none' | 'sm' | 'xl' | 'full'
    full?: boolean
    isPending?: boolean
    disabled?: boolean
}

const Button: React.FC<ButtonProps> = (
    { variant = 'primary', full = false, rouded = 'sm', children, isPending = false, disabled = false, ...props }
) => {
    return (
        <button
            disabled={disabled || isPending}
            className={
                classNames(styles.button, [styles[variant], styles[rouded]], { [styles.fullWidth]: full, [styles.loading]: isPending && !full })
            }
            {...props}
        >
            {isPending ? <Loader /> : children}
        </button>
    );
};

export default Button;
