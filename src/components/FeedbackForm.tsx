import { FormEvent, useState } from "react";
import { MAX_CHARACTERS } from "../lib/constans";

type FeedbackFormProps = {
  onAddToList: (text: string) => void;
};

export const FeedbackForm = ({ onAddToList }: FeedbackFormProps) => {
  const [text, setText] = useState("");
  const charLeft = MAX_CHARACTERS - text.length;

  const handleOnChange = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = ev.target.value;
    if (newText.length > MAX_CHARACTERS) return;
    setText(ev.target.value);
  };

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    onAddToList(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <textarea
        name="feedback-textarea"
        id="feedback-textarea"
        onChange={handleOnChange}
        placeholder="Placeholder"
        spellCheck={false}
        value={text}
      />
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company
      </label>
      <div>
        <p className="u-italic">{charLeft}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
};
