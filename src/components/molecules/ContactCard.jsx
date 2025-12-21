import Card from '../atoms/Card';
import Button from '../atoms/Button';
import './ContactCard.css';

/**
 * ContactCard Molecule - Contact information display card
 * Atomic Design: Molecule - Combines Card, text, and Button atoms
 */
const ContactCard = ({ 
  icon, 
  title, 
  description, 
  actionLabel,
  onAction,
  className = '' 
}) => {
  return (
    <Card variant="elevated" className={`contact-card ${className}`}>
      <div className="contact-card__icon">{icon}</div>
      <h3 className="contact-card__title">{title}</h3>
      <p className="contact-card__description">{description}</p>
      {actionLabel && onAction && (
        <Button 
          variant="outline" 
          size="small" 
          onClick={onAction}
          className="contact-card__button"
        >
          {actionLabel}
        </Button>
      )}
    </Card>
  );
};

export default ContactCard;
