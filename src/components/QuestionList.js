import React from "react";
import QuestionItem from "./QuestionItem.js";

function QuestionList({ questions, onDeleteQuestion, onEditQuestion }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question, i) => {
        return (
          <QuestionItem
            key={question.id}
            position={i + 1}
            question={question}
            onDeleteQuestion={onDeleteQuestion}
            onEditQuestion={onEditQuestion}
          />
        );
      })}</ul>
    </section>
  );
}

export default QuestionList;
