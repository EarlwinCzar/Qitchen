import Input from '../atoms/Input';
import Textarea from '../atoms/Textarea';
import './FormField.css';

/**
 * FormField Molecule - Combines Label + Input/Textarea + Error Message
 * Atomic Design: Molecule - Composed of multiple atoms working together
 */
const FormField = ({ 
  label,
  name,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  placeholder,
  required = false,
  disabled = false,
  as = 'input',
  rows,
  ...props 
}) => {
  const InputComponent = as === 'textarea' ? Textarea : Input;

  return (
    <div className="form-field">
      <label htmlFor={name} className="form-field__label">
        {label}
        {required && <span className="form-field__required">*</span>}
      </label>
      <InputComponent
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        error={error}
        disabled={disabled}
        rows={rows}
        {...props}
      />
      {error && <span className="form-field__error">{error}</span>}
    </div>
  );
};

export default FormField;
