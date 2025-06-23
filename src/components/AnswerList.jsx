import React, { useEffect, useRef } from 'react';
import { listStyle, scrollableContainerStyle, listItemStyle, headingStyle } from './styles/answerListStyles';

const AnswerList = ({ answers }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [answers]);
  return (
    <div>
      <h2 style={headingStyle}>Answers:</h2>
      <div style={scrollableContainerStyle}>
        <ul style={listStyle}>
          {answers.map((answer, index) => (
            <li key={index} style={listItemStyle}>
              <div><strong>English Translation:</strong> {answer.meaning}</div>
              <div><strong>Selected Māori Name:</strong> {answer.selected}
                {!answer.isCorrect && <span style={{ color: 'red' }}><b> (Incorrect)</b></span>}
                {answer.isCorrect && <span style={{ color: 'green' }}><b> (Correct)</b></span>}
              </div>
            </li>
          ))}
          <div ref={messagesEndRef} />
        </ul>
      </div>
    </div>
  );
};

export default AnswerList;