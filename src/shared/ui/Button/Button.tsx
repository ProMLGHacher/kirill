import { classNames } from '@/shared/utils/classNames/classNames';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'danger';
    rouded?: 'none' | 'sm' | 'xl' | 'full';
    full?: boolean
}

const Button: React.FC<ButtonProps> = (
    { variant = 'primary', full = false, rouded = 'sm', children, ...props }
) => {
    return (
        <button className={classNames(styles.button, [styles[variant], styles[rouded]], { [styles.fullWidth]: full })} {...props}>
            {children}
        </button>
    );
};

export default Button;
