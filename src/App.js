import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText: "HTML is ?",
      answerOptions: [
        { answerText: "Programing Language", isCorrect: false },
        { answerText: "Scripting Language", isCorrect: false },
        { answerText: "Markup Language", isCorrect: true },
        { answerText: "Assembly Language", isCorrect: false },
      ],
    },
    {
      questionText: "CSS stands for ?",
      answerOptions: [
        { answerText: "Computer Style Sheets", isCorrect: false },
        { answerText: "Cascading Style Sheets", isCorrect: true },
        { answerText: "Creative Style System", isCorrect: false },
        { answerText: "Colorful Style Sheets", isCorrect: false },
      ],
    },
    {
      questionText: "What is React.js?",
      answerOptions: [
        { answerText: "A JavaScript library", isCorrect: true },
        { answerText: "A mobile development", isCorrect: false },
        { answerText: "A CSS preprocessor ", isCorrect: false },
        { answerText: "Database ", isCorrect: false },
      ],
    },
    {
      questionText: " Which of the following is a NoSQL database?",
      answerOptions: [
        { answerText: "Oracle", isCorrect: false },
        { answerText: "MongoDB", isCorrect: false },
        { answerText: "PostgreSQL", isCorrect: false },
        { answerText: "MySQL", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  //   const [btnclass, setbtnclass] = useState("");

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="container">
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
