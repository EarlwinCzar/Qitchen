import './Textarea.css';

/**
 * Textarea Atom - Basic textarea component
 * Atomic Design: Atom - Single textarea element
 */
const Textarea = ({ 
  name,
  value,
  placeholder,
  onChange,
  onBlur,
  error,
  rows = 4,
  disabled = false,
  className = '',
  ...props 
}) => {
  return (
    <textarea
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      rows={rows}
      disabled={disabled}
      className={`textarea ${error ? 'textarea--error' : ''} ${className}`}
      {...props}
    />
  );
};

export default Textarea;
