import CodeBlock from '../../components/PageComponents/GetStarted/CodeBlock/CodeBlock';
import Section from '../../components/PageComponents/GetStarted/Section/Section';
import Navbar from '../../components/PageComponents/LandingPage/Navbar/Navbar';
import { NotebookPen } from 'lucide-react';

import './GetStarted.css';

function GetStarted() {
  return (
    <div className="get-started-page__container">
      <Navbar />
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

const style = `/* ./App.css */
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f4f4f4;
  padding: 20px;
}

.app-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #4a90e2;
  text-align: center;
}

.message-box {
  background-color: #4caf50;
  color: white;
  font-size: 18px;
  padding: 12px 20px;
  border-radius: 8px;
  margin-bottom: 15px;
  animation: fadeIn 0.5s ease-in-out, fadeOut 0.5s ease-in-out 2.5s forwards;
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

const exampleFormCode = `// ./App.tsx
import React, { useState } from "react";
import { z } from "zod";
import { ReusableForm } from "@lstz/reusable-form";
import "./App.css";

type FormValues = {
  name: string;
  lovesReusableForm: boolean;
};

const formConfig = {
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
  }
};

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  lovesReusableForm: z
    .boolean()
    .refine((val) => val, { message: "You must check this box!" })
});

export default function App() {
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = (data: FormValues) => {
    setMessage(\`🎉 \${data.name} loves ReusableForm !\`);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">
        🎉 Welcome to the ReusableForm Demo
      </h1>
      {message && <div className="message-box">{message}</div>}
      <ReusableForm
        isLoading={false}
        formConfig={formConfig}
        formSchema={formSchema}
        action={handleSubmit}
      />
    </div>
  );
};`.trim();

export default GetStarted;
