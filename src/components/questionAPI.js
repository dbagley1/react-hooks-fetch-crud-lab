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

export function updateQuestion(id, question) {
  return fetch(`http://localhost:4000/questions/${id}`, {
    method: "PATCH",
    body: JSON.stringify(question),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
