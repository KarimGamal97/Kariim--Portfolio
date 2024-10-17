// plugins/email.js
import emailjs from "emailjs-com";

export default ({}, inject) => {
  inject("emailjs", emailjs);
};
