export const baseURL = "https://8b4935b6767fe83c.mokky.dev/";

//@ts-ignore
export const api = axios.create({
  baseURL,
  timeout: 3000,
  headers: {
    "Content-Type": "aplication/json",
  },
});
export const getTests = async () => {
  const res = await api.get("tests");
  return res.data;
};
export const getQuestions = async (testId?: string) => {
  const res = await api.get(
    testId ? `questions?testId=${testId}` : "questions"
  );
  return res.data;
};

export const addTest = async (data: Record<string, any>) => {
  return await api.post("/tests", data);
};

export const editTest = async (id: number, data: Record<string, any>) => {
  return await api.patch(`/tests/${id}`, data);
};

export const deleteTest = async (id: number) => {
  return await api.delete(`/tests/${id}`);
};

export const addQuestion = async (data: Record<string, any>) => {
  return await api.post("/questions", data);
};

export const editQuestion = async (id: number, data: Record<string, any>) => {
  return await api.patch(`/questions/${id}`, data);
};

export const deleteQuestion = async (id: number) => {
  return await api.delete(`/questions/${id}`);
};
