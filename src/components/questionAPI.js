export function getQuestions() {
  return fetch("http://localhost:4000/questions")
    .then((res) => res.json());
}

export function postQuestion(question) {
  return fetch("http://localhost:4000/questions", {
    method: "POST",
    body: JSON.stringify(question),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function deleteQuestion(id) {
  return fetch(`http://localhost:4000/questions/${id}`, {
    method: "DELETE",
  });
}

export function updateQuestion(question) {
  const updatedQuestion = { ...question };
  delete updatedQuestion.id;
  console.log('patch', updatedQuestion);

  return fetch(`http://localhost:4000/questions/${question.id}`, {
    method: "PATCH",
    body: JSON.stringify(updatedQuestion),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
