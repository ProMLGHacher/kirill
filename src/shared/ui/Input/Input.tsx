import React from 'react';
import styles from './Input.module.scss';
import { classNames } from '@/shared/utils/classNames/classNames';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({ prefixIcon, suffixIcon, ...props }) => {
  const inputClass = classNames(styles.input, {
    [styles.withPrefix]: !!prefixIcon,
    [styles.withSuffix]: !!suffixIcon
  });

  return (
    <div className={styles.inputWrapper}>
      {prefixIcon && <div className={styles.prefixIcon}>{prefixIcon}</div>}
      <input className={inputClass} {...props} />
      {suffixIcon && <div className={styles.suffixIcon}>{suffixIcon}</div>}
    </div>
  );
};

export default Input;
