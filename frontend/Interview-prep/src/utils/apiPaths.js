export const BASE_URL = "http://localhost:8000";

export const API_PATHS ={
  AUTH: {
    REGISTER: "api/auth/register", //Signup
    LOGIN: "api/auth/login", // authenticate user nd return jwt token
    GET_PROFILE: "api/auth/profile", // get user profile
  },

  IMAGE:{
    UPLOAD_IMAGE: "api/auth/upload-image", // upload profile image
  },

  AI: {
    GENERATE_QUESTIONS: "api/ai/generate-questions", // generate interview questions using ai
    GENERATE_EXPLAINATION: "api/ai/generate-explaination", // generate explaination for a question using ai
  },

  SESSIONS: {
    CREATE: "api/sessions/create", // create a new interview session with questions
    GET_ALL: "api/sessions/my-sessions", // get all sessions for logged in user
    GET_ONE: (id) => `api/sessions/${id}`, // get session details with questions
    DELETE: (id) => `api/sessions/${id}`, // delete a session by id
  },

  QUESTION: {
    ADD_TO_SESSION: "api/questions/add", // add a question to a session
    PIN: (id) => `api/questions/${id}/pin`, // pin or unpin a question in a session
    UPDATE_NOTE: (id) => `api/questions/${id}/note`, // update note for a question
  },
};