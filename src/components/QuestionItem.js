function QuestionItem({ question, position, onDeleteQuestion, onEditQuestion }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDelete() {
    onDeleteQuestion(id);
  }

  function handleEdit(e) {
    e.preventDefault();
    const newQuestion = {
      ...question,
      correctIndex: e.target.value,
    };
    onEditQuestion(newQuestion);
  }

  return (
    <li>
      <h4>Question {position}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select
          defaultValue={correctIndex}
          name="correctIndex"
          onChange={handleEdit}>
          {options}
        </select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
