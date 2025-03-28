# 📄 Documentation for the `ReusableForm` component

## 🚀 Introduction

This component is a reusable and configurable standard form using :

- [`react-hook-form`](https://react-hook-form.com/) for form handling,
- [`zod`](https://zod.dev/) for form validation,

## 📌 Expected props and types

The ReusableForm is based on :

- A `configuration file`, formConfig, defining the fields, title, button texts and footer
- A Zod `validation schema`, formSchema, guaranteeing that the data entered is correct
- `Error handling` based on `react-hook-form` and `Zod`
- `Dynamic submission handling` through the action function
- Optional `footer messages` to provide additional guidance or feedback to users

| **Prop**        | **Expected Type**                                              | **Description**                                                                      |
| --------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `T`             | `FieldValues` (e.g, `LoginCredentials`, `RegisterCredentials`) | Type of form data (submitted values)                                                 |
| `formConfig`    | `FormConfig<T>`                                                | Form configuration : title, fields (labels, type, placeholder...), button texts etc. |
| `formSchema`    | `ZodSchema<T>`                                                 | `Zod` schema for field validation.                                                   |
| `isLoading`     | `boolean`                                                      | Displays a loading state on the submit button                                        |
| `footerMessage` | `FooterMessageData` _(optional)_                               | Message displayed at the bottom of the form, with an optional link                   |
| `action`        | `(data: T) => void`                                            | Function called on form submission                                                   |

## 🚩 Handling Required Fields (`required`)

In the `ReusableForm`, `required` defined in form configuration fields **is not managed by `react-hook-form` directly**.

Validation of required fields is handled entirely by the **Zod schema**. The actual validation of submitted data **does not depend on the `required` prop, but only on the Zod** validation scheme.

The `required: true` option defined in the form configuration (`formConfig`) corresponds to the `required` attribute (see [HTML attribute: required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required))

## 🔎 Watching Field Values (`watch`) and 🛑 Field Desactivation

The `ReusableForm` component utilizes `watch` from **react-hook-form** to dynamically observe changes in form fields. This allows fields to be dynamically deactivated according to conditions based on other fields in the form.

### Example usage

In your form configuration, you can define conditional field disabling:

```typescript
options: {
  fieldsDesactivation: [
    // Disable "returnDate" if "tripType" is set to "OneWay"
    {
      field: 'returnDate', // the field to be deactivated.
      condition: {
        field: 'tripType', // field whose value is being monitored
        value: 'OneWay', // value triggering deactivation
      },
    },
  ],
},
```

This configuration will disable the field with id returnDate whenever the watched field tripType has the value "OneWay".

## ✅ Managing the `Submit Button`

The `submitButton` can dynamically display either text or an image.

### How to configure the submit button

In the form configuration, define the `submitButton` property as follows:

```ts
import loader from '../../../assets/loader-circle.svg';

submitButton: {
  loading: {
    type: 'image',
    content: loader,
  },
  default: {
    type: 'text',
    content: 'Log in',
  },
};
```

You can specify:

- type: **text** → A text label
- type: **image** → An image (local file or URL)

How does it behave ?

- When **isLoading = true**, the loading version of the button will be displayed.
- When **isLoading = false**, the default version of the button will be displayed.

## 💬 Managing the `FormFooter`

The `FormFooter` is an optional section of the `ReusableForm` that displays contextual messages (e.g., errors, success, or additional information) at the bottom of the form.

### Message types

- `default`
- `info`
- `success`
- `error`
- `none`

### How it works

- You can define footerMessage as follows :

  ```ts
  footerMessage: {
      type: 'default',
      text: "Don't have an account?",
      linkText: 'Sign up',
      linkTo: '/signup',
  },
  ```

- If you want to **reserve space** for a future message (a possible error or other information without defining a default message), you can set:

  ```ts
  footerMessage: {
    type: 'default',
    text: '',
    linkText: '',
    linkTo: '',
  }
  ```

- If you want to completely hide the footer (without reserving any space), set the type to 'none' as follows::

  ```ts
   footerMessage: {
     type: 'none',
     text: undefined,
     linkText: undefined,
     linkTo: undefined,
   }
  ```

With type 'none', `FormFooter` is explicitly hidden via `return null`.

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
| **FormInput**        | Container for label & input                                                  | `${formattedTitle}-form__input-container`         | `.sign-up-form__input-container {}`         |
| **FormInput**        | Label for input                                                              | `${formattedTitle}-form__label`                   | `.sign-up-form__label {}`                   |
| **FormInput**        | Input field                                                                  | `${formattedTitle}-form__input`                   | `.sign-up-form__input {}`                   |
| **FormInput**        | Checkbox input to turn it into a switch                                      | `${formattedTitle}-form__checkbox-switch`         | `.sign-up-form__checkbox-switch {}`         |
| **FormInput**        | Container for input error message                                            | `${formattedTitle}-form__error-container`         | `.sign-up-form__error-container {}`         |
| **FormInput**        | Input error message text                                                     | `${formattedTitle}-form__error`                   | `.sign-up-form__error {}`                   |
| **FormSubmitButton** | Container for submit button                                                  | `${formattedTitle}-form__button-container`        | `.sign-up-form__button-container {}`        |
| **FormSubmitButton** | Wrapper for submit button                                                    | `${formattedTitle}-form__button-wrapper`          | `.sign-up-form__button-wrapper {}`          |
| **FormSubmitButton** | Submit button                                                                | `${formattedTitle}-form__button`                  | `.sign-up-form__button {}`                  |
| **FormSubmitButton** | Button icon (when type is image, default state)                              | `${formattedTitle}-form__button-icon--default`    | `.sign-up-form__button-icon--default {}`    |
| **FormSubmitButton** | Button icon (when type is image, loading state)                              | `${formattedTitle}-form__button-icon--default`    | `.sign-up-form__button-icon--loading {}`    |
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
export interface ButtonContentData {
  type: 'text' | 'image';
  content: string;
}

export interface FooterMessageData {
  type: 'default' | 'error' | 'success' | 'info' | 'none';
  text?: string;
  linkText?: string;
  linkTo?: string;
}

export interface FormConfig<T extends FieldValues> {
  title: string;
  fields: FormField<T>[];
  submitButton: {
    loading: ButtonContentData;
    default: ButtonContentData;
  };
  footerMessage?: FooterMessageData;
}
```

```ts
export const signupFormConfig: FormConfig<RegisterCredentials> = {
  title: 'Sign up',
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
  submitButton: {
    loading: {
      type: 'image',
      content: loader,
    },
    default: {
      type: 'text',
      content: 'Sign up',
    },
  },
  footerMessage: {
    type: 'default',
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

- **Backend Integration**

- **Form generator**
