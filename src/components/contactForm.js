import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xjvjebrj");
  if (state.succeeded) {
    return (
      <p className="text-sm md:text-base font-semibold text-gray-700">
        Thanks for joining!
      </p>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="border-2 border-gray-500 focus:border-indigo-500 focus:outline-none ring-0 mr-2 p-1 text-gray-700 font-mono"
        placeholder="example@email.com"
        id="email"
        type="email"
        name="email"
        required
      />
      <button
        className="bg-indigo-500 hover:bg-indigo-600 transform hover:scale-105 px-3 py-2 text-white"
        type="submit"
        disabled={state.submitting}
      >
        Join
      </button>

      <ValidationError prefix="Email" field="email" errors={state.errors} />
    </form>
  );
}

export default ContactForm;
