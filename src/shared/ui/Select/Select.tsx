import { useState } from 'react';
import styles from './Select.module.scss';

type Option<T> = {
  value: T;
  label: string;
};

type SelectProps<T> = {
  options: Option<T>[];
  onSelect?: (value: T) => void;
  placeholder?: string;
  width?: string
};

const Select = <T,>({ width, options, onSelect, placeholder = "Select an option" }: SelectProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option<T>>();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: Option<T>) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelect) {
      onSelect(option.value);
    }
  };

  const handleBlur = () => {
    console.log('blur');
    
      if (isOpen) {
        setIsOpen(false)
      }
  }

  return (
    <div style={{ width }} className={styles.select}>
      <button className={styles.selectToggle} onClick={handleToggle} tabIndex={0} onBlur={handleBlur}>
        {selectedOption ? selectedOption.label : placeholder}
        <svg className={`${styles.arrow} ${isOpen ? styles.open : ''}`} width="13" height="23" viewBox="0 0 13 23" fill="none">
          <path d="M9.54524 11.1543L0.849607 19.85C0.309979 20.3896 0.309978 21.2645 0.849605 21.8042C1.38923 22.3438 2.26415 22.3438 2.80378 21.8042L12.2909 12.317C12.9331 11.6749 12.9331 10.6338 12.2909 9.99165L2.80378 0.504529C2.26415 -0.0350981 1.38924 -0.0350982 0.84961 0.504529C0.309981 1.04416 0.309981 1.91907 0.849609 2.4587L9.54524 11.1543Z" fill="#ccc" />
        </svg>
      </button>
      <div className={`${styles.menuWrapper} ${isOpen ? styles.open : ''}`}>
        <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
          {options.map((option) => (
            <div key={JSON.stringify(option.value)} className={styles.menuItem} onMouseDown={e => e.preventDefault()} onClick={() => handleSelect(option)}>
              {option.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Select;
