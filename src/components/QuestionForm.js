import React, { useState } from "react";

function QuestionForm(props) {
  const [answerCount, setAnswerCount] = useState(props.answerCount || 4);

  const initialQuestion = (() => {
    const question = {
      prompt: "Example Question",
      correctIndex: 0,
    };
    Array(answerCount).fill(0).forEach((_, i) => {
      question[`answer${i + 1}`] = `Answer ${i + 1}`;
    });
    return question;
  })();
  const [formData, setFormData] = useState(initialQuestion);

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    const newQuestion = {
      prompt: formData.prompt,
      correctIndex: formData.correctIndex,
      answers: [],
    };
    for (let i = 1; i <= answerCount; i++) {
      newQuestion.answers.push(
        formData[`answer${i}`] || `Answer ${i}`
      );
    }

    console.log(newQuestion);
    props.onSubmit(newQuestion);

    setFormData(initialQuestion);
  };

  return (
    <section>
      <h1>New Question</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Prompt:
          <input
            type="text"
            name="prompt"
            value={formData.prompt}
            onChange={handleChange}
          />
        </label>
        {Array(answerCount).fill(0).map((_, i) => (
          <label key={i}>
            Answer {i + 1}:
            <input
              type="text"
              name={`answer${i + 1}`}
              value={formData[`answer${i + 1}`]}
              onChange={handleChange}
            />
          </label>
        ))}
        <label>
          Correct Answer:
          <select
            name="correctIndex"
            value={formData.correctIndex}
            onChange={handleChange}
          >
            {Array(answerCount).fill(0).map((_, i) => (
              <option key={i} value={i}>
                {formData[`answer${i + 1}`]}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Add Question</button>
      </form>
    </section>
  );
}

export default QuestionForm;
