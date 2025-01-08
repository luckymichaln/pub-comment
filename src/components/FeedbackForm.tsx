export const FeedbackForm = () => {
  return (
    <form className="form">
      <textarea
        name="feedback-textarea"
        id="feedback-textarea"
        placeholder="Placeholder"
        spellCheck={false}
      />
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company
      </label>
      <div className="">
        <p className="u-italic">150</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
};
