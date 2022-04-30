import React, { useCallback, useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";
import { getQuestions, deleteQuestion, postQuestion, updateQuestion } from "./questionAPI.js";

function App() {
  const [page, setPage] = useState("List");
  const [questionList, setQuestionList] = useState([]);

  const updateQuestionList = useCallback(() => {
    getQuestions().then((questions) => {
      console.log(questions);
      setQuestionList(questions);
    });
  }, []);

  const handleUpdateQuestion = useCallback(
    (question) => {
      updateQuestion(question).then((response) => {
        console.log(response);
        updateQuestionList();
      });
    },
    [updateQuestionList]
  );

  const handleAddQuestion = useCallback(
    (question) => {
      postQuestion(question).then((newQuestion) => {
        console.log(newQuestion);
        updateQuestionList();
      });
    },
    [updateQuestionList]
  );

  const handleDeleteQuestion = useCallback(
    (id) => {
      deleteQuestion(id).then((response) => {
        console.log(response);
        updateQuestionList();
      });
    },
    [updateQuestionList]
  );

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
