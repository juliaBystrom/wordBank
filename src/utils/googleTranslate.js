const apiKey = process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY;
export const googleTranslate = require("google-translate")(
  "ask Kristopher for code"
);
console.log(apiKey);
