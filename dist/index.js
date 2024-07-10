var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
System.register("api", [], function (exports_1, context_1) {
    "use strict";
    var baseURL, api, getTests, getQuestions, addTest, editTest, deleteTest, addQuestion, editQuestion, deleteQuestion;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("baseURL", baseURL = "https://8b4935b6767fe83c.mokky.dev/");
            //@ts-ignore
            exports_1("api", api = axios.create({
                baseURL: baseURL,
                timeout: 3000,
                headers: {
                    "Content-Type": "aplication/json",
                },
            }));
            exports_1("getTests", getTests = function () { return __awaiter(void 0, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, api.get("tests")];
                        case 1:
                            res = _a.sent();
                            return [2 /*return*/, res.data];
                    }
                });
            }); });
            exports_1("getQuestions", getQuestions = function (testId) { return __awaiter(void 0, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, api.get(testId ? "questions?testId=".concat(testId) : "questions")];
                        case 1:
                            res = _a.sent();
                            return [2 /*return*/, res.data];
                    }
                });
            }); });
            exports_1("addTest", addTest = function (data) { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, api.post("/tests", data)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); });
            exports_1("editTest", editTest = function (id, data) { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, api.patch("/tests/".concat(id), data)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); });
            exports_1("deleteTest", deleteTest = function (id) { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, api.delete("/tests/".concat(id))];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); });
            exports_1("addQuestion", addQuestion = function (data) { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, api.post("/questions", data)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); });
            exports_1("editQuestion", editQuestion = function (id, data) { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, api.patch("/questions/".concat(id), data)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); });
            exports_1("deleteQuestion", deleteQuestion = function (id) { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, api.delete("/questions/".concat(id))];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); });
        }
    };
});
// @ts-ignore
System.register("modal", [], function (exports_2, context_2) {
    "use strict";
    var testModal, questionModal, toggleTestModal, toggleQuestionModal;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            exports_2("testModal", testModal = new bootstrap.Modal("#testModal", {
                keyboard: false,
            }));
            // @ts-ignore
            exports_2("questionModal", questionModal = new bootstrap.Modal("#questionModal", {
                keyboard: false,
            }));
            exports_2("toggleTestModal", toggleTestModal = function (open) {
                if (open)
                    testModal.show();
                else
                    testModal.hide();
            });
            exports_2("toggleQuestionModal", toggleQuestionModal = function (open) {
                if (open)
                    questionModal.show();
                else
                    questionModal.hide();
            });
        }
    };
});
System.register("type", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("index", ["api", "modal"], function (exports_4, context_4) {
    "use strict";
    var api_1, modal_1, tbodyTests, tbodyQuestions, btnAddTest, btnTestSave, idTest, btnAddQuestin, btnQuestionSave, idQuestion, testSelectFilter, renderTests, renderQuestions, renderTestSelect;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [
            function (api_1_1) {
                api_1 = api_1_1;
            },
            function (modal_1_1) {
                modal_1 = modal_1_1;
            }
        ],
        execute: function () {
            tbodyTests = document.querySelector("#tests tbody");
            tbodyQuestions = document.querySelector("#questions tbody");
            btnAddTest = document.querySelector("#btn-add-test");
            btnTestSave = document.querySelector("#btn-test-save");
            idTest = 0;
            btnAddQuestin = document.querySelector("#btn-add-question");
            btnQuestionSave = document.querySelector("#btn-question-save");
            idQuestion = 0;
            testSelectFilter = document.querySelector("#test-select-filter");
            renderTests = function () { return __awaiter(void 0, void 0, void 0, function () {
                var tests, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, api_1.getTests()];
                        case 1:
                            tests = _a.sent();
                            if (!tbodyTests)
                                return [2 /*return*/];
                            tbodyTests.innerHTML = "";
                            tests.map(function (test, index) {
                                var tr = document.createElement("tr");
                                tr.innerHTML = " <td>".concat(index + 1, "</td> <td>").concat(test.name, "</td> <td>-</td> ");
                                var td = document.createElement("td");
                                var btnEdit = document.createElement("button");
                                var btnDelete = document.createElement("button");
                                btnEdit.className = "btn text-primary";
                                btnEdit.innerHTML = "<i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>";
                                btnDelete.className = "btn text-danger";
                                btnDelete.innerHTML = "<i class=\"fas fa-trash\"></i>';";
                                td.appendChild(btnEdit);
                                td.appendChild(btnDelete);
                                tr.appendChild(td);
                                tbodyTests.appendChild(tr);
                                btnEdit.onclick = function () {
                                    console.log("edit");
                                    modal_1.toggleTestModal(true);
                                    idTest = test.id;
                                    // @ts-ignore
                                    var testForm = document.forms.testForm;
                                    testForm.name.value = test.name;
                                };
                                btnDelete.onclick = function () { return __awaiter(void 0, void 0, void 0, function () {
                                    var error_2;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                console.log("delete");
                                                _a.label = 1;
                                            case 1:
                                                _a.trys.push([1, 3, , 4]);
                                                return [4 /*yield*/, api_1.deleteTest(test.id)];
                                            case 2:
                                                _a.sent();
                                                renderTests();
                                                return [3 /*break*/, 4];
                                            case 3:
                                                error_2 = _a.sent();
                                                return [3 /*break*/, 4];
                                            case 4: return [2 /*return*/];
                                        }
                                    });
                                }); };
                            });
                            return [3 /*break*/, 3];
                        case 2:
                            error_1 = _a.sent();
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); };
            renderQuestions = function () { return __awaiter(void 0, void 0, void 0, function () {
                var questions, error_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, api_1.getQuestions(testSelectFilter.value)];
                        case 1:
                            questions = _a.sent();
                            if (!tbodyQuestions)
                                return [2 /*return*/];
                            tbodyQuestions.innerHTML = "";
                            questions.map(function (question, index) {
                                var tr = document.createElement("tr");
                                tr.innerHTML = "\n  <td>".concat(index + 1, "</td>\n  <td>").concat(question.text, "</td>\n  <td>").concat(question.trueAnswer, "</td>");
                                var td = document.createElement("td");
                                var btnEdit = document.createElement("button");
                                var btnDelete = document.createElement("button");
                                btnEdit.className = "btn text-primary";
                                btnEdit.innerHTML = "<i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>";
                                btnDelete.className = "btn text-danger";
                                btnDelete.innerHTML = "<i class=\"fas fa-trash\"></i>";
                                td.appendChild(btnEdit);
                                td.appendChild(btnDelete);
                                tr.appendChild(td);
                                tbodyQuestions.appendChild(tr);
                                btnEdit.onclick = function () { return __awaiter(void 0, void 0, void 0, function () {
                                    var questionForm;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                console.log("edit");
                                                modal_1.toggleQuestionModal(true);
                                                return [4 /*yield*/, renderTestSelect()];
                                            case 1:
                                                _a.sent();
                                                idQuestion = question.id;
                                                questionForm = document.forms.questionForm;
                                                console.log(questionForm);
                                                questionForm.testId.value = question.testId;
                                                questionForm.text.value = question.text;
                                                questionForm.a.value = question.a;
                                                questionForm.b.value = question.b;
                                                questionForm.c.value = question.c;
                                                questionForm.d.value = question.d;
                                                questionForm.trueAnswer.value = question.trueAnswer;
                                                return [2 /*return*/];
                                        }
                                    });
                                }); };
                                btnDelete.onclick = function () { return __awaiter(void 0, void 0, void 0, function () {
                                    var error_4;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                console.log("delete");
                                                _a.label = 1;
                                            case 1:
                                                _a.trys.push([1, 3, , 4]);
                                                return [4 /*yield*/, api_1.deleteQuestion(question.id)];
                                            case 2:
                                                _a.sent();
                                                renderQuestions();
                                                return [3 /*break*/, 4];
                                            case 3:
                                                error_4 = _a.sent();
                                                return [3 /*break*/, 4];
                                            case 4: return [2 /*return*/];
                                        }
                                    });
                                }); };
                            });
                            return [3 /*break*/, 3];
                        case 2:
                            error_3 = _a.sent();
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); };
            renderTestSelect = function () { return __awaiter(void 0, void 0, void 0, function () {
                var questionForm, tests, error_5;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            questionForm = document.forms.questionForm;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, api_1.getTests()];
                        case 2:
                            tests = _a.sent();
                            questionForm.testId.innerHTML = "";
                            tests.map(function (test) {
                                questionForm.testId.innerHTML += "<option value=\"".concat(test.id, "\">").concat(test.name, "</option>");
                            });
                            return [3 /*break*/, 4];
                        case 3:
                            error_5 = _a.sent();
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); };
            window.onload = function () { return __awaiter(void 0, void 0, void 0, function () {
                var tests, error_6;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            renderTests();
                            renderQuestions();
                            btnAddTest === null || btnAddTest === void 0 ? void 0 : btnAddTest.addEventListener("click", function () {
                                modal_1.toggleTestModal(true);
                            });
                            btnAddQuestin === null || btnAddQuestin === void 0 ? void 0 : btnAddQuestin.addEventListener("click", function () { return __awaiter(void 0, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    modal_1.toggleQuestionModal(true);
                                    renderTestSelect();
                                    return [2 /*return*/];
                                });
                            }); });
                            btnTestSave === null || btnTestSave === void 0 ? void 0 : btnTestSave.addEventListener("click", function () { return __awaiter(void 0, void 0, void 0, function () {
                                var testForm, formData, data, res, res, error_7;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            _a.trys.push([0, 6, , 7]);
                                            testForm = document.forms.testForm;
                                            if (!testForm) return [3 /*break*/, 5];
                                            formData = new FormData(testForm);
                                            data = Object.fromEntries(formData);
                                            console.log(data);
                                            if (!idTest) return [3 /*break*/, 2];
                                            return [4 /*yield*/, api_1.editTest(idTest, data)];
                                        case 1:
                                            res = _a.sent();
                                            return [3 /*break*/, 4];
                                        case 2: return [4 /*yield*/, api_1.addTest(data)];
                                        case 3:
                                            res = _a.sent();
                                            _a.label = 4;
                                        case 4:
                                            modal_1.toggleTestModal(false);
                                            renderTests();
                                            _a.label = 5;
                                        case 5: return [3 /*break*/, 7];
                                        case 6:
                                            error_7 = _a.sent();
                                            return [3 /*break*/, 7];
                                        case 7: return [2 /*return*/];
                                    }
                                });
                            }); });
                            btnQuestionSave === null || btnQuestionSave === void 0 ? void 0 : btnQuestionSave.addEventListener("click", function () { return __awaiter(void 0, void 0, void 0, function () {
                                var questionForm, formData, data, res, res, error_8;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            _a.trys.push([0, 6, , 7]);
                                            questionForm = document.forms.questionForm;
                                            if (!questionForm) return [3 /*break*/, 5];
                                            formData = new FormData(questionForm);
                                            data = Object.fromEntries(formData);
                                            console.log(data);
                                            if (!idQuestion) return [3 /*break*/, 2];
                                            return [4 /*yield*/, api_1.editQuestion(idQuestion, data)];
                                        case 1:
                                            res = _a.sent();
                                            return [3 /*break*/, 4];
                                        case 2: return [4 /*yield*/, api_1.addQuestion(data)];
                                        case 3:
                                            res = _a.sent();
                                            _a.label = 4;
                                        case 4:
                                            modal_1.toggleQuestionModal(false);
                                            renderQuestions();
                                            _a.label = 5;
                                        case 5: return [3 /*break*/, 7];
                                        case 6:
                                            error_8 = _a.sent();
                                            return [3 /*break*/, 7];
                                        case 7: return [2 /*return*/];
                                    }
                                });
                            }); });
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, api_1.getTests()];
                        case 2:
                            tests = _a.sent();
                            tests.map(function (test) {
                                if (testSelectFilter)
                                    testSelectFilter.innerHTML += "<option value=\"".concat(test.id, "\">").concat(test.name, "</option>");
                            });
                            return [3 /*break*/, 4];
                        case 3:
                            error_6 = _a.sent();
                            return [3 /*break*/, 4];
                        case 4:
                            testSelectFilter.onchange = function () {
                                renderQuestions();
                            };
                            return [2 /*return*/];
                    }
                });
            }); };
        }
    };
});
