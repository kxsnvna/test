import {
  addQuestion,
  addTest,
  deleteQuestion,
  deleteTest,
  editQuestion,
  editTest,
  getQuestions,
  getTests,
} from "./api";

import { toggleQuestionModal, toggleTestModal } from "./modal";
import { Question, Test } from "./type";

const tbodyTests = document.querySelector("#tests tbody");
const tbodyQuestions = document.querySelector("#questions tbody");
const btnAddTest = document.querySelector("#btn-add-test");
const btnTestSave = document.querySelector("#btn-test-save");
let idTest = 0;
const btnAddQuestin = document.querySelector("#btn-add-question");
const btnQuestionSave = document.querySelector("#btn-question-save");
let idQuestion = 0;

const testSelectFilter = document.querySelector(
  "#test-select-filter"
) as HTMLSelectElement;

const renderTests = async () => {
  try {
    const tests = await getTests();

    if (!tbodyTests) return;

    tbodyTests.innerHTML = ``;

    tests.map((test: Test, index: number) => {
      const tr = document.createElement("tr");

      tr.innerHTML = ` <td>${index + 1}</td> <td>${test.name}</td> <td>-</td> `;

      const td = document.createElement("td");
      const btnEdit = document.createElement("button");
      const btnDelete = document.createElement("button");

      btnEdit.className = "btn text-primary";
      btnEdit.innerHTML = `<i class="fa fa-pencil" aria-hidden="true"></i>`;

      btnDelete.className = "btn text-danger";
      btnDelete.innerHTML = `<i class="fas fa-trash"></i>';`;

      td.appendChild(btnEdit);
      td.appendChild(btnDelete);

      tr.appendChild(td);
      tbodyTests.appendChild(tr);

      btnEdit.onclick = () => {
        console.log("edit");
        toggleTestModal(true);
        idTest = test.id;

        // @ts-ignore

        const testForm = document.forms.testForm;

        testForm.name.value = test.name;
      };
      btnDelete.onclick = async () => {
        console.log("delete");

        try {
          await deleteTest(test.id);

          renderTests();
        } catch (error) {}
      };
    });
  } catch (error) {}
};

const renderQuestions = async () => {
  try {
    const questions = await getQuestions(testSelectFilter.value as string);
    if (!tbodyQuestions) return;

    tbodyQuestions.innerHTML = ``;

    questions.map((question: Question, index: number) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
  <td>${index + 1}</td>
  <td>${question.text}</td>
  <td>${question.trueAnswer}</td>`;

      const td = document.createElement("td");
      const btnEdit = document.createElement("button");
      const btnDelete = document.createElement("button");

      btnEdit.className = "btn text-primary";
      btnEdit.innerHTML = `<i class="fa fa-pencil" aria-hidden="true"></i>`;

      btnDelete.className = "btn text-danger";
      btnDelete.innerHTML = `<i class="fas fa-trash"></i>`;

      td.appendChild(btnEdit);
      td.appendChild(btnDelete);

      tr.appendChild(td);
      tbodyQuestions.appendChild(tr);

      btnEdit.onclick = async () => {
        console.log("edit");
        toggleQuestionModal(true);
        await renderTestSelect();
        idQuestion = question.id;
        // @ts-ignore
        const questionForm = document.forms.questionForm;
        console.log(questionForm);

        questionForm.testId.value = question.testId;

        questionForm.text.value = question.text;

        questionForm.a.value = question.a;

        questionForm.b.value = question.b;

        questionForm.c.value = question.c;

        questionForm.d.value = question.d;

        questionForm.trueAnswer.value = question.trueAnswer;
      };

      btnDelete.onclick = async () => {
        console.log("delete");

        try {
          await deleteQuestion(question.id);

          renderQuestions();
        } catch (error) {}
      };
    });
  } catch (error) {}
};

const renderTestSelect = async () => {
  //@ts-ignore

  const questionForm = document.forms.questionForm;

  try {
    const tests = await getTests();

    questionForm.testId.innerHTML = ``;

    tests.map((test: Test) => {
      questionForm.testId.innerHTML += `<option value="${test.id}">${test.name}</option>`;
    });
  } catch (error) {}
};

window.onload = async () => {
  renderTests();
  renderQuestions();

  btnAddTest?.addEventListener("click", () => {
    toggleTestModal(true);
  });

  btnAddQuestin?.addEventListener("click", async () => {
    toggleQuestionModal(true);
    renderTestSelect();
  });

  btnTestSave?.addEventListener("click", async () => {
    try {
      //@ts-ignore

      const testForm = document.forms.testForm;

      if (testForm) {
        var formData = new FormData(testForm);

        // @ts-ignore

        const data = Object.fromEntries(formData);

        console.log(data);

        if (idTest) {
          // @ts-ignore

          const res = await editTest(idTest, data);
        } else {
          // @ts-ignore

          const res = await addTest(data);
        }

        toggleTestModal(false);

        renderTests();
      }
    } catch (error) {}
  });

  btnQuestionSave?.addEventListener("click", async () => {
    try {
      //@ts-ignore

      const questionForm = document.forms.questionForm;

      if (questionForm) {
        var formData = new FormData(questionForm);

        // @ts-ignore
        const data = Object.fromEntries(formData);

        console.log(data);

        if (idQuestion) {
          // @ts-ignore

          const res = await editQuestion(idQuestion, data);
        } else {
          // @ts-ignore

          const res = await addQuestion(data);
        }

        toggleQuestionModal(false);
        renderQuestions();
      }
    } catch (error) {}
  });

  try {
    const tests = await getTests();

    tests.map((test: Test) => {
      if (testSelectFilter)
        testSelectFilter.innerHTML += `<option value="${test.id}">${test.name}</option>`;
    });
  } catch (error) {}

  testSelectFilter.onchange = () => {
    renderQuestions();
  };
};
