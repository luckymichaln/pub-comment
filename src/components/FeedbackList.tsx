import { Spinner } from "./Spinner";
import { ErrorMessage } from "./ErrorMessage";
import { FeedbackItem } from "./FeedbackItem";
import { TFeedbackItem } from "../lib/types";

type FeedbackItemProps = {
  feedbackItems: TFeedbackItem[];
  isLoading: boolean;
  errorMessage: string;
};

export const FeedbackList = ({
  feedbackItems,
  isLoading,
  errorMessage,
}: FeedbackItemProps) => {
  return (
    <ul className="feedback-list">
      {isLoading ? <Spinner /> : null}

      {errorMessage ? <ErrorMessage message={errorMessage} /> : null}

      {feedbackItems.map((item) => {
        return <FeedbackItem key={item.id} feedbackItem={item} />;
      })}
    </ul>
  );
};
