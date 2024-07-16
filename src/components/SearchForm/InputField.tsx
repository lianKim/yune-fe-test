import * as styles from './SearchForm.module.css';

interface InputFieldProps {
  inputName: string;
  labelText: string;
  placeholder?: string;
  inputMode?:
    | 'none'
    | 'text'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | 'search'
    | undefined;
}

export function InputField({
  inputName,
  labelText,
  placeholder,
  inputMode,
}: InputFieldProps) {
  return (
    <div className={styles.fieldContainer}>
      <label htmlFor={inputName}>{labelText}</label>
      <input
        type="text"
        id={inputName}
        name={inputName}
        placeholder={placeholder}
        inputMode={inputMode}
      />
    </div>
  );
}
