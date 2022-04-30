import React, { useCallback, useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";
import { getQuestions, deleteQuestion, postQuestion } from "./questionAPI.js";

function App() {
  const [page, setPage] = useState("List");
  const [questionList, setQuestionList] = useState([]);

  const handleDeleteQuestion = useCallback(
    (id) => {
      deleteQuestion(id).then((response) => {
        console.log(response);
        setQuestionList(questionList.filter((question) => question.id !== id));
      });
    },
    [questionList]
  );

  const updateQuestionList = useCallback(() => {
    getQuestions().then((questions) => {
      console.log(questions);
      setQuestionList(questions);
    });
  }, []);

  function handleAddQuestion(question) {
    postQuestion(question).then((newQuestion) => {
      console.log(newQuestion);
      updateQuestionList();
    });
  }

  useEffect(() => {
    updateQuestionList();
  }, [updateQuestionList]);

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onSubmit={handleAddQuestion} /> : <QuestionList questions={questionList} onDeleteQuestion={handleDeleteQuestion} />}
    </main>
  );
}

export default App;
