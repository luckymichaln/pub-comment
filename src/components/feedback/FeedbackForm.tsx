import { FormEvent, useState } from "react";
import { MAX_CHARACTERS } from "../../lib/constans";

type FeedbackFormProps = {
  onAddToList: (text: string) => void;
};

export const FeedbackForm = ({ onAddToList }: FeedbackFormProps) => {
  const [text, setText] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isFormInvalid, setIsFormInvalid] = useState(false);
  const charLeft = MAX_CHARACTERS - text.length;

  const handleOnChange = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = ev.target.value;
    if (newText.length > MAX_CHARACTERS) return;
    setText(ev.target.value);
  };

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    if (text.includes("#") && text.length >= 5) {
      setIsFormValid(true);

      setTimeout(() => setIsFormValid(false), 500);
    } else {
      setIsFormInvalid(true);
      setTimeout(() => setIsFormInvalid(false), 500);
      return;
    }

    onAddToList(text);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`form ${isFormValid ? "form--valid" : ""} ${
        isFormInvalid ? "form--invalid" : ""
      }`}
    >
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
