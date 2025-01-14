import { useCallback, useEffect, useState } from "react";
import { Container } from "./components/Container";
import { FeedbackList } from "./components/FeedbackList";
import { HashtagList } from "./components/HashtagList";
import { Header } from "./components/Header";
import { API_URL } from "./lib/constans";
import { TFeedbackItem } from "./lib/types";

function App() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddToList = async (text: string) => {
    const companyName = text
      .split(" ")
      .find((word) => word.includes("#"))!
      .substring(1);

    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      text: text,
      upvoteCount: 0,
      daysAgo: 0,
      company: companyName,
      badgeLetter: companyName.substring(0, 1).toUpperCase(),
    };

    setFeedbackItems((prev) => [...prev, newItem]);

    await fetch(`${API_URL}/feedbacks`, {
      method: "POST",
      body: JSON.stringify(newItem),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  };

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
    <div className="app">
      <Container>
        <Header onAddToList={handleAddToList} />
        <FeedbackList
          feedbackItems={feedbackItems}
          isLoading={isLoading}
          errorMessage={errorMessage}
        />
      </Container>
      <HashtagList />
    </div>
  );
}

export default App;
