import Card from '../atoms/Card';
import Button from '../atoms/Button';
import FormField from '../molecules/FormField';
import './ContactForm.css';

/**
 * ContactForm Organism - Complete contact form with validation
 * Atomic Design: Organism - Complex component combining molecules and atoms
 * Uses the useContactForm hook from features/contact
 */
const ContactForm = ({ onSubmit, initialValues, isSubmitting = false }) => {
  return (
    <Card variant="elevated" padding="large" className="contact-form">
      <h2 className="contact-form__title">Send us a message</h2>
      <p className="contact-form__subtitle">
        We'd love to hear from you. Fill out the form below and we'll get back to you soon.
      </p>
      
      <form onSubmit={onSubmit} className="contact-form__form">
        <FormField
          label="Name"
          name="name"
          placeholder="John Doe"
          required
          {...initialValues?.name}
        />
        
        <FormField
          label="Email"
          name="email"
          type="email"
          placeholder="john@example.com"
          required
          {...initialValues?.email}
        />
        
        <FormField
          label="Subject"
          name="subject"
          placeholder="How can we help?"
          required
          {...initialValues?.subject}
        />
        
        <FormField
          label="Message"
          name="message"
          as="textarea"
          rows={6}
          placeholder="Tell us more about your inquiry..."
          required
          {...initialValues?.message}
        />
        
        <div className="contact-form__actions">
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
  );
};

export default ContactForm;
