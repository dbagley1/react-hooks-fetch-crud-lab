import React, { useCallback, useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";
import { getQuestions, deleteQuestion, postQuestion, updateQuestion } from "./questionAPI.js";

function App() {
  const [page, setPage] = useState("List");
  const [questionList, setQuestionList] = useState([]);

  const updateQuestionList = useCallback(() => {
    console.log('updating list...');
    getQuestions().then((questions) => {
      console.log('get', questions);
      setQuestionList(questions);
    });
  }, []);

  const handleUpdateQuestion = useCallback(
    (question) => {
      console.log('update', question);
      updateQuestion(question).then((response) => {
        console.log(response);
        updateQuestionList();
      });
    },
    [updateQuestionList]
  );

  const handleAddQuestion = useCallback(
    (question) => {
      console.log('add', question);
      postQuestion(question).then((newQuestion) => {
        console.log(newQuestion);
        updateQuestionList();
      });
    },
    [updateQuestionList]
  );

  const handleDeleteQuestion = useCallback(
    (id) => {
      console.log('delete', id);
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
      {page === "Form" ? <QuestionForm onSubmit={handleAddQuestion} /> : <QuestionList questions={questionList} onDeleteQuestion={handleDeleteQuestion} onEditQuestion={handleUpdateQuestion} />}
    </main>
  );
}

export default App;
