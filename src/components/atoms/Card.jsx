import './Card.css';

/**
 * Card Atom - Basic card container
 * Atomic Design: Atom - Simple container element
 */
const Card = ({ 
  children, 
  variant = 'default',
  padding = 'medium',
  className = '',
  ...props 
}) => {
  return (
    <div 
      className={`card card--${variant} card--padding-${padding} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
