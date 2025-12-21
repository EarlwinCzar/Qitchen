import './Input.css';

/**
 * Input Atom - Basic input field component
 * Atomic Design: Atom - Single input element
 */
const Input = ({ 
  type = 'text',
  name,
  value,
  placeholder,
  onChange,
  onBlur,
  error,
  disabled = false,
  className = '',
  ...props 
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      disabled={disabled}
      className={`input ${error ? 'input--error' : ''} ${className}`}
      {...props}
    />
  );
};

export default Input;
