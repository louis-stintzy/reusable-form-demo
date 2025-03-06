# 📄 Documentation for the `ReusableForm` component

## 🚀 Introduction

This component is a reusable and configurable standard form using :

- [`react-hook-form`](https://react-hook-form.com/) for form handling,
- [`zod`](https://zod.dev/) for form validation,

## 📌 Expected props and types

The ReusableForm is based on :

- A configuration file (formConfig), defining the fields, title, button texts and footer
- A Zod validation schema (formSchema), guaranteeing that the data entered is correct
- Error handling based on react-hook-form and Zod

| **Prop**     | **Expected Type**                                              | **Description**                                                                      |
| ------------ | -------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `T`          | `FieldValues` (e.g, `LoginCredentials`, `RegisterCredentials`) | Type of form data (submitted values)                                                 |
| `formConfig` | `FormConfig<T>`                                                | Form configuration : title, fields (labels, type, placeholder...), button texts etc. |
| `formSchema` | `ZodSchema<T>`                                                 | `Zod` schema for field validation.                                                   |

## 🎨 Customizing styles

By default, the ReusableForm component does not apply any styles. Instead, it automatically generates CSS class names dynamically based on the title prop.

Each form gets a unique set of class names based on its title. The form title is converted into a standardized version to generate the CSS classes. The title is processed as follows:

```ts
export function formatTitle(title: string): string {
  return title
    .toLowerCase()
    .trim() // Removes leading and trailing spaces
    .normalize('NFD') // Normalizes accented characters
    .replace(/[\u0300-\u036f]/g, '') // Removes accents
    .replace(/\s+/g, '-') // Replaces spaces with hyphens
    .replace(/[^a-z0-9-]/g, ''); // Removes special characters
    .replace(/^-+|-+$/g, ''); // Deletes hyphens at beginning and end
}
```

For example :

"Sign Up" → sign-up → submission button class : `sign-up-form__button`

"➕ New post !" → new-post → submission button class : `new-post-form__button`

## 🏗️ List of generated CSS class names

| **Component**        | **Subcomponent**                                                             | **Generated Class Name**                          | **Example for "Sign up" form**              |
| -------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------- | ------------------------------------------- |
| **FormContainer**    | Outer container                                                              | `${formattedTitle}-form__container`               | `.sign-up-form__container {}`               |
| **FormContainer**    | Inner wrapper                                                                | `${formattedTitle}-form__wrapper`                 | `.sign-up-form__wrapper {}`                 |
| **FormTitle**        | Form title                                                                   | `${formattedTitle}-form__title`                   | `.sign-up-form__title {}`                   |
| **FormBase**         | `<form>` element                                                             | `${formattedTitle}-form__form`                    | `.sign-up-form__form {}`                    |
| **FormInput**        | Container for label & input                                                  | `${formattedTitle}-form__input-container`         | `.sign-up-form__input-wrapper {}`           |
| **FormInput**        | Label for input                                                              | `${formattedTitle}-form__label`                   | `.sign-up-form__label {}`                   |
| **FormInput**        | Input field                                                                  | `${formattedTitle}-form__input`                   | `.sign-up-form__input {}`                   |
| **FormInput**        | Container for input error message                                            | `${formattedTitle}-form__error-container`         | `.sign-up-form__error-container {}`         |
| **FormInput**        | Input error message text                                                     | `${formattedTitle}-form__error`                   | `.sign-up-form__error {}`                   |
| **FormSubmitButton** | Container for submit button                                                  | `${formattedTitle}-form__button-container`        | `.sign-up-form__button-container {}`        |
| **FormSubmitButton** | Wrapper for submit button                                                    | `${formattedTitle}-form__button-wrapper`          | `.sign-up-form__button-wrapper {}`          |
| **FormSubmitButton** | Submit button                                                                | `${formattedTitle}-form__button`                  | `.sign-up-form__button {}`                  |
| **FormFooter**       | Container for footer (optional)                                              | `${formattedTitle}-form__link-container--${type}` | `.sign-up-form__link-container--default {}` |
| **FormFooter**       | Message (optional, can define a message type: default, success, error, etc.) | `${formattedTitle}-form__link-message--${type}`   | `.sign-up-form__link-message--default {}`   |
| **FormFooter**       | Link available (optionnal)                                                   | `${formattedTitle}-form__link--${type}`           | `.sign-up-form__link--default {}`           |

## 🛠️ Example of use

### Defining data types

```ts
export interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
```

### Defining form configuration

```ts
export interface FormConfig<T extends FieldValues> {
  title: string;
  buttonText: {
    loading: string;
    default: string;
  };
  fields: FormField<T>[];
  footerLink?: {
    text?: string;
    linkText?: string;
    linkTo?: string;
  };
}
```

```ts
export const signupFormConfig: FormConfig<RegisterCredentials> = {
  title: 'Sign up',
  buttonText: {
    loading: 'Signing up...',
    default: 'Sign up',
  },
  fields: [
    {
      label: 'ENTER NAME',
      id: 'name',
      type: 'text',
      placeholder: 'Enter Name',
      autoComplete: 'given-name',
      required: true,
    },
    {
      label: 'ENTER EMAIL',
      id: 'email',
      type: 'email',
      placeholder: 'Enter Email',
      autoComplete: 'email',
      required: true,
    },
    {
      label: 'ENTER PASSWORD',
      id: 'password',
      type: 'password',
      placeholder: 'Enter Password',
      autoComplete: 'new-password',
      required: true,
    },
    {
      label: 'CONFIRM PASSWORD',
      id: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      required: true,
    },
  ],
  footerLink: {
    text: 'Already have an account ?',
    linkText: 'Login now',
    linkTo: '/login',
  },
};
```

### Defining the validation schema

```ts
export const signupFormSchema = z
  .object({
    name: z
      .string()
      .min(3, 'Name must contain at least 3 characters')
      .max(50, 'Name must contain at most 50 characters'),
    email: z.string().email('Please enter a valid email address'),
    password: z
      .string()
      .min(12, 'Password must contain at least 12 characters')
      .max(100, 'Password must contain at most 100 characters')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
      .regex(/\d/, 'Password must contain at least one number')
      .regex(
        /[@$!%*?&]/,
        'Password must contain at least one special character'
      ),
    confirmPassword: z
      .string()
      .min(12, 'Please confirm your password')
      .max(100),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
```

### ReusableForm integration

```tsx
import './SignupForm.style.css';

function SignupForm() {
  return (
    <ReusableForm<RegisterCredentials>
      formConfig={signupFormConfig}
      formSchema={signupFormSchema}
    />
  );
}

export default SignupForm;
```

### Defining your styles (CSS file)

```css
/* Title styling */
.sign-up-form__title {
}

/* Form styling */
.sign-up-form__form {
}

/* Input container styling */
.sign-up-form__input-container {
}
```

## 📅 Upcoming features

- **Tailwind CSS**

- **State Management (Store)**

- **Backend Integration**
