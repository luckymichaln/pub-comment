import { useCallback, useEffect, useState } from "react";
import { FeedbackItem } from "./FeedbackItem";
import { API_URL } from "../lib/constans";
import { Spinner } from "./Spinner";
import { ErrorMessage } from "./ErrorMessage";

export const FeedbackList = () => {
  const [feedbackItems, setFeedbackItems] = useState<FeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchData = useCallback(async () => {
    setIsLoading(true);

    try {
      const result = await fetch(`${API_URL}/feedbacks`);
      if (!result.ok) {
        throw new Error();
      }

      const { feedbacks } = await result.json();
      setFeedbackItems(feedbacks);
      setIsLoading(false);
    } catch (error) {
      setErrorMessage("Something went wrong.");
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
