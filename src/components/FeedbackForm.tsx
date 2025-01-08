import { useState } from "react";
import { MAX_CHARACTERS } from "../lib/constans";

export const FeedbackForm = () => {
  const [text, setText] = useState("");
  const charLeft = MAX_CHARACTERS - text.length;

  const handleOnChange = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = ev.target.value;
    if (newText.length > MAX_CHARACTERS) return;
    setText(ev.target.value);
  };

  return (
    <form className="form">
      <textarea
        name="feedback-textarea"
        id="feedback-textarea"
        onChange={handleOnChange}
        placeholder="Placeholder"
        spellCheck={false}
      />
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company
      </label>
      <div className="">
        <p className="u-italic">{charLeft}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
};
