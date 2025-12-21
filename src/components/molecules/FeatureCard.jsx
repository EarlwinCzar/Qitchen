import Card from '../atoms/Card';
import './FeatureCard.css';

/**
 * FeatureCard Molecule - Feature display card
 * Atomic Design: Molecule - Combines Card with structured content
 */
const FeatureCard = ({ icon, title, description, className = '' }) => {
  return (
    <Card className={`feature-card ${className}`}>
      <div className="feature-card__icon">{icon}</div>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__description">{description}</p>
    </Card>
  );
};

export default FeatureCard;
