import { useContactForm } from '../../features/contact/useContactForm';
import ContactCard from '../../components/molecules/ContactCard';
import FormField from '../../components/molecules/FormField';
import Card from '../../components/atoms/Card';
import Button from '../../components/atoms/Button';
import './Contact.css';

/**
 * Contact Page - Full contact page with form and info cards
 * Demonstrates organism usage and feature hook integration
 */
const Contact = () => {
  const {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    handleChange,
    handleBlur,
    handleSubmit
  } = useContactForm();

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      description: 'contact@example.com',
      actionLabel: 'Send Email',
      onAction: () => window.location.href = 'mailto:contact@example.com'
    },
    {
      icon: '📞',
      title: 'Phone',
      description: '+1 (555) 123-4567',
      actionLabel: 'Call Us',
      onAction: () => window.location.href = 'tel:+15551234567'
    },
    {
      icon: '📍',
      title: 'Office',
      description: '123 Main St, City, State 12345',
      actionLabel: 'Get Directions',
      onAction: () => window.open('https://maps.google.com', '_blank')
    }
  ];

  return (
    <div className="contact">
      <div className="contact__header">
        <h1 className="contact__title">Get In Touch</h1>
        <p className="contact__subtitle">
          Have a question or want to work together? We'd love to hear from you.
        </p>
      </div>

      <div className="contact__methods">
        {contactMethods.map((method, index) => (
          <ContactCard key={index} {...method} />
        ))}
      </div>

      <div className="contact__form-container">
        <Card variant="elevated" padding="large" className="contact__form-card">
          <h2 className="contact__form-title">Send us a message</h2>
          <p className="contact__form-subtitle">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
          
          {submitStatus && (
            <div className={`contact__alert contact__alert--${submitStatus.type}`}>
              {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact__form">
            <FormField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.name}
              placeholder="John Doe"
              required
            />
            
            <FormField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email}
              placeholder="john@example.com"
              required
            />
            
            <FormField
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.subject}
              placeholder="How can we help?"
              required
            />
            
            <FormField
              label="Message"
              name="message"
              as="textarea"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.message}
              placeholder="Tell us more about your inquiry..."
              required
            />
            
            <div className="contact__form-actions">
              <Button 
                type="submit" 
                size="large" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
