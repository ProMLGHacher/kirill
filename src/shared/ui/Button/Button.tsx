import { classNames } from '../../utils/classNames/classNames';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'success' | 'danger';
    full?: boolean
}

const Button: React.FC<ButtonProps> = (
    { variant = 'primary', full = false,  children, ...props }
) => {
    return (
        <button className={classNames(styles.button, [styles[variant]], { [styles.full]: full })} {...props}>
            {children}
        </button>
    );
};

export default Button;
