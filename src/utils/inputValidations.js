export const name_validation = {
  name: "name",
  label: "name",
  type: "text",
  id: "name",
  placeholder: "Write Your Name ...",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    maxLength: {
      value: 30,
      message: "30 characters max",
    },
  },
};

export const desc_validation = {
  name: "description",
  label: "description",
  multiline: true,
  id: "description",
  placeholder: "Write Description ...",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    maxLength: {
      value: 200,
      message: "200 characters max",
    },
  },
};

export const password_validation = {
  name: "password",
  label: "password",
  type: "password",
  id: "password",
  placeholder: "Enter Your Password ...",
  validation: {
    required: {
      value: true,
      message: "required",
      autoComplete: "current_password",
    },
    minLength: {
      value: 6,
      message: "min 6 characters",
    },
  },
};

export const con_password_validation = {
  name: "con_password",
  label: "con_password",
  type: "password",
  id: "con_password",
  placeholder: "Confirm Your Password ...",
  validation: {
    required: {
      value: true,
      message: "required",
      autoComplete: "new_password",
    },
    minLength: {
      value: 6,
      message: "min 6 characters",
    },
  },
};

export const email_validation = {
  name: "email",
  label: "email address",
  type: "email",
  id: "email",
  placeholder: "Enter Your Email Address ...",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "not valid",
    },
  },
};
