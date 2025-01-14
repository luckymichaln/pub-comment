import { useCallback, useEffect, useMemo, useState } from "react";
import { Container } from "./components/layout/Container";
import { FeedbackList } from "./components/feedback/FeedbackList";
import { HashtagList } from "./components/hashtag/HashtagList";
import { Header } from "./components/layout/Header";
import { API_URL } from "./lib/constans";
import { TFeedbackItem } from "./lib/types";

function App() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");

  const filteredFeedbackItems = useMemo(
    () =>
      selectedCompany
        ? feedbackItems.filter(
            (feedbackItem) => feedbackItem.company === selectedCompany
          )
        : feedbackItems,
    [feedbackItems, selectedCompany]
  );

  const companyList = useMemo(
    () =>
      feedbackItems
        .map((item) => item.company)
        .filter((company, index, arr) => arr.indexOf(company) === index),
    [feedbackItems]
  );

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

  const handleSelectedCompany = (company: string) => {
    setSelectedCompany(company);
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
          feedbackItems={filteredFeedbackItems}
          isLoading={isLoading}
          errorMessage={errorMessage}
        />
      </Container>
      <HashtagList
        companyList={companyList}
        handleSelectedCompany={handleSelectedCompany}
      />
    </div>
  );
}

export default App;
