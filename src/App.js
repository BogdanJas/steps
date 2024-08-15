import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? `active` : null}>1</div>
            <div className={step >= 2 ? `active` : null}>2</div>
            <div className={step >= 3 ? `active` : null}>3</div>
          </div>

          <Message step={step}>{messages[step - 1]}</Message>

          <div className="buttons">
            <Button
              backgroundColor="#7950f2"
              color="#fff"
              handleOnClick={handlePrevious}
            >
              <span>👈</span> Previous
            </Button>
            <Button
              backgroundColor="#7950f2"
              color="#fff"
              handleOnClick={handleNext}
            >
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function Button({ backgroundColor, color, handleOnClick, children }) {
  return (
    <button
      style={{ backgroundColor: backgroundColor, color: color }}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
}

function Message({ step, children }) {
  return (
    <p className="message">
      <h3>Step {step}</h3>
      {children}
    </p>
  );
}
