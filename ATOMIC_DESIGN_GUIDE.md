# Atomic Design Structure Examples

This boilerplate demonstrates effective use of **Atomic Design** principles with a complete implementation.

## 📚 Component Hierarchy

### **Atoms** (Basic Building Blocks)

Located in `src/components/atoms/`

- **Button.jsx** - Reusable button with variants (primary, secondary, outline) and sizes
- **Input.jsx** - Form input field with error states
- **Textarea.jsx** - Multi-line text input
- **Card.jsx** - Container component with elevation variants

**Key Principle:** Atoms are the smallest functional components that can't be broken down further while maintaining their purpose.

### **Molecules** (Simple Combinations)

Located in `src/components/molecules/`

- **FormField.jsx** - Combines Label + Input/Textarea + Error Message
- **ContactCard.jsx** - Card with icon, title, description, and action button
- **FeatureCard.jsx** - Card designed for feature display

**Key Principle:** Molecules combine atoms to create simple functional units.

### **Organisms** (Complex Components)

Located in `src/components/organisms/`

- **ContactForm.jsx** - Complete form using FormField molecules
- **FeaturesGrid.jsx** - Grid layout managing multiple FeatureCard molecules

**Key Principle:** Organisms are complex components that form distinct sections of an interface.

### **Pages** (Complete Views)

Located in `src/pages/`

- **Home/** - Landing page using FeaturesGrid organism and Button atoms
- **About/** - Information page using Card atoms
- **Contact/** - Full page using ContactCard molecules and form integration

**Key Principle:** Pages compose organisms, molecules, and atoms into complete user experiences.

## 🎯 Usage Examples

### Example 1: Building from Atoms Up

```jsx
// ATOM: Button component
<Button variant="primary" size="large">
  Click Me
</Button>

// MOLECULE: FormField uses Input atom
<FormField
  label="Email"
  name="email"
  type="email"
  value={value}
  onChange={handleChange}
/>

// ORGANISM: ContactForm uses FormField molecules
<ContactForm onSubmit={handleSubmit} />

// PAGE: Contact page uses ContactForm organism
<Contact />
```

### Example 2: Feature-Based Architecture

The `features/contact/` folder contains:

- **useContactForm.jsx** - Custom hook with form logic, validation, and state management

This demonstrates **separation of concerns**:

- **UI Logic**: In components
- **Business Logic**: In feature hooks
- **Reusability**: Hook can be used by multiple components

### Example 3: Composition Patterns

```jsx
// Flexible composition with Card atom
<Card variant="elevated" padding="large">
  <h2>Custom Content</h2>
  <p>Any content can go here</p>
  <Button>Action</Button>
</Card>

// Multiple molecules in an organism
<FeaturesGrid features={featuresData} />
// Internally renders multiple FeatureCard molecules
```

## 📂 Folder Benefits

1. **Scalability**: Easy to find and add components at the right level
2. **Reusability**: Lower-level components used throughout the app
3. **Maintainability**: Changes to atoms automatically cascade up
4. **Testing**: Each level can be tested independently
5. **Documentation**: Structure is self-documenting

## 🚀 Adding New Components

### Adding an Atom:

```
src/components/atoms/Badge.jsx
src/components/atoms/Badge.css
```

### Adding a Molecule:

```
src/components/molecules/UserCard.jsx (uses Avatar and Badge atoms)
src/components/molecules/UserCard.css
```

### Adding an Organism:

```
src/components/organisms/UserList.jsx (uses UserCard molecules)
src/components/organisms/UserList.css
```

### Adding a Feature:

```
src/features/users/
  ├── useUsers.jsx (data fetching hook)
  └── useUserFilters.jsx (filtering logic)
```

## 💡 Best Practices Demonstrated

1. **Props Interface**: Each component has clear, documented props
2. **Composition Over Configuration**: Components compose together naturally
3. **Single Responsibility**: Each component does one thing well
4. **Controlled Components**: Form inputs properly controlled with state
5. **Custom Hooks**: Business logic separated into reusable hooks
6. **CSS Scoping**: Each component has its own stylesheet
7. **Responsive Design**: Components adapt to different screen sizes

## 🔄 Data Flow Example

```
useContactForm (feature hook)
      ↓
  formData, handlers
      ↓
Contact Page
      ↓
  passes props to
      ↓
FormField (molecule)
      ↓
  renders
      ↓
Input/Textarea (atoms)
```

This structure makes it easy to:

- Track where state lives
- Understand component dependencies
- Reuse components in different contexts
- Test components in isolation
- Scale your application

## 🎨 Theming & Styling

Components use CSS custom properties (variables) defined in `src/styles/index.css` for:

- Colors
- Spacing
- Typography
- Shadows

This allows for easy theme customization while maintaining consistency.
