import React, { useMemo } from 'react';
import styles from './Input.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  editableIcon?: boolean;
}

const Input: React.FC<InputProps> = ({ prefixIcon, suffixIcon, editableIcon = false, ...props }) => {
  
  if (editableIcon) {
    suffixIcon = <img src="/pencil.svg" alt="edit" />
  }
  
  const inputClass = useMemo(() => classNames(styles.input, {
    [styles.withPrefix]: !!prefixIcon,
    [styles.withSuffix]: !!suffixIcon,
  }), [prefixIcon, suffixIcon, editableIcon])


  const style = useMemo(() => {
    return {
      ...props.style,
      width: undefined
    }
  }, [props])

  return (
    <div className={classNames(styles.inputWrapper, {
      [styles.editable]: editableIcon
    })} style={{ width: props.style?.width }}>
      {prefixIcon && <div className={styles.prefixIcon}>{prefixIcon}</div>}
      <input className={inputClass} {...props} style={style} />
      {suffixIcon && <div className={styles.suffixIcon}>{suffixIcon}</div>}
    </div>
  );
};

export default Input;
