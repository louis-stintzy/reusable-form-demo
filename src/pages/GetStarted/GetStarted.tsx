import CodeBlock from '../../components/PageComponents/GetStarted/CodeBlock/CodeBlock';
import Section from '../../components/PageComponents/GetStarted/Section/Section';
import { useEffect } from 'react';
import { NotebookPen } from 'lucide-react';

import './GetStarted.css';

function GetStarted() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="get-started-page__container">
      {/* <Navbar /> */}
      <div className="get-started-page__content">
        <div className="get-started-process__container">
          <h2 className="get-started-process__title">🚀 Getting Started</h2>
          <Section title="1️⃣ Initiate a Vite project">
            <div className="get-started-process__label-group">
              <div className="get-started-process__label-wrapper">
                <a
                  href="https://vite.dev/guide/#scaffolding-your-first-vite-project"
                  target="_blank"
                  rel="noreferrer"
                  className="get-started-process__label"
                >
                  <span className="get-started-process__label-span">Vite</span>
                </a>
              </div>
            </div>
            <CodeBlock>npm create vite@latest</CodeBlock>
            <p className="get-started-process__description">
              <NotebookPen size={16} /> Choose a React project with Typescript
            </p>
            <CodeBlock>cd your-project-name</CodeBlock>
          </Section>
          <Section title="2️⃣ Install the necessary dependencies">
            <div className="get-started-process__label-group">
              <div className="get-started-process__label-wrapper">
                <a
                  href="https://react-hook-form.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="get-started-process__label"
                >
                  <span className="get-started-process__label-span">
                    react-hook-form
                  </span>
                </a>
                <a
                  href="https://reactrouter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="get-started-process__label"
                >
                  <span className="get-started-process__label-span">
                    react-router-dom
                  </span>
                </a>
                <a
                  href="https://zod.dev/"
                  target="_blank"
                  rel="noreferrer"
                  className="get-started-process__label"
                >
                  <span className="get-started-process__label-span">zod</span>
                </a>
              </div>
            </div>
            <CodeBlock>
              npm install react-hook-form react-router-dom zod
            </CodeBlock>
          </Section>
          <Section title="3️⃣ Install ReusableForm">
            <CodeBlock>npm i @lstz/reusable-form</CodeBlock>
          </Section>
          <Section title="4️⃣ Run the project">
            <CodeBlock>npm run dev</CodeBlock>
          </Section>
          <Section title="5️⃣ Test your own ReusableForm ">
            <p className="get-started-process__description">
              <NotebookPen size={16} /> Copy and paste the following code into
              your project to test ReusableForm
            </p>
            <CodeBlock>{style}</CodeBlock>
            <CodeBlock>{exampleFormCode}</CodeBlock>
          </Section>
        </div>
      </div>
    </div>
  );
}

const style = `/* --- App.css --- */
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  background-color: #f4f4f4;
}

.app-title {
  margin-top: 15rem;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #4a90e2;
  text-align: center;
  margin-bottom: 20px;
}

.message-box {
  background-color: #4caf50;
  color: white;
  font-size: 18px;
  padding: 12px 20px;
  border-radius: 8px;
  margin-bottom: 15px;
  animation:
    fadeIn 0.5s ease-in-out, fadeOut 0.5s ease-in-out 2.5s forwards;
}

/* 🟢 Form */
.join-the-reusableform-fan-club-form__container {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  width: 100%;
  max-width: 400px;
}

.join-the-reusableform-fan-club-form__title {
  text-align: center;
  font-size: 20px;
  margin-bottom: 2.5rem;
  color: #333;
}

.join-the-reusableform-fan-club-form__input-container {
  margin-bottom: 15px;
}

.join-the-reusableform-fan-club-form__label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.join-the-reusableform-fan-club-form__input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

input[type="text"] {
  width: 100%;
}

.join-the-reusableform-fan-club-form__button {
  background: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.join-the-reusableform-fan-club-form__button:hover {
  background: #0056b3;
}

.join-the-reusableform-fan-club-form__error-container {
  margin: 1rem 0;
  height: 2rem;
}

.join-the-reusableform-fan-club-form__error {
  color: rgb(133, 34, 34);
  font-size: 1rem;
}

.join-the-reusableform-fan-club-form__link-container--success {
  background: #4caf50;
  color: white;
  font-size: 16px;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  margin-top: 15px;
}

.join-the-reusableform-fan-club-form__link-container--success {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}


@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeOut {
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
}
`;

const exampleFormCode = `// --- App.tsx ---
import { useState } from "react";
import { z } from "zod";
import { ReusableForm } from "@lstz/reusable-form";
import {
  FooterMessageData,
  FormConfig
} from "@lstz/reusable-form/dist/types";

import "./App.css";

type FormValues = {
  name: string;
  lovesReusableForm: boolean;
};

const formConfig: FormConfig<FormValues> = {
  title: "🚀 Join the ReusableForm Fan Club!",
  fields: [
    {
      id: "name",
      label: "Your Name",
      type: "text",
      placeholder: "Enter your name..."
    },
    {
      id: "lovesReusableForm",
      label: "I love ReusableForm",
      type: "checkbox"
    }
  ],
  submitButton: {
    loading: { type: "text", content: "Submitting..." },
    default: { type: "text", content: "Join Now" }
  },
  footerMessage: {
    type: 'default',
    text: '',
    linkText: '',
    linkTo: '',
  },
};

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  lovesReusableForm: z
    .boolean()
    .refine((val) => val, { message: "You must check this box!" })
});

export default function App() {
  const [footerMessage, setFooterMessage] =
    useState<FooterMessageData | undefined>(undefined);

  const handleSubmit = (data: FormValues) => {
  setFooterMessage({
    type: "success",
    text:
      \`🎉 \${data.name} has successfully joined the ReusableForm Fan Club!\`
  });
  setTimeout(() => setFooterMessage(undefined), 5000);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">
        🎉 Welcome to the ReusableForm Demo
      </h1>
      <ReusableForm
        isLoading={false}
        formConfig={formConfig}
        formSchema={formSchema}
        action={handleSubmit}
        footerMessage={footerMessage}
      />
    </div>
  );
};`.trim();

export default GetStarted;
