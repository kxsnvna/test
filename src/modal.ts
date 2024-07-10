// @ts-ignore

export const testModal = new bootstrap.Modal("#testModal", {
  keyboard: false,
});

// @ts-ignore

export const questionModal = new bootstrap.Modal("#questionModal", {
  keyboard: false,
});

export const toggleTestModal = (open: boolean) => {
  if (open) testModal.show();
  else testModal.hide();
};

export const toggleQuestionModal = (open: boolean) => {
  if (open) questionModal.show();
  else questionModal.hide();
};
