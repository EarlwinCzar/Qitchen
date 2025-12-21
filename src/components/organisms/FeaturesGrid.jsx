import FeatureCard from '../molecules/FeatureCard';
import './FeaturesGrid.css';

/**
 * FeaturesGrid Organism - Grid layout of feature cards
 * Atomic Design: Organism - Complex component managing multiple molecules
 */
const FeaturesGrid = ({ features }) => {
  return (
    <div className="features-grid">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

export default FeaturesGrid;
