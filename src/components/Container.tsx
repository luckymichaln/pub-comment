import { FeedbackList } from "./FeedbackList";
import { Header } from "./Header";

export const Container = () => {
  return (
    <main className="container">
      <Header />
      <FeedbackList />
    </main>
  );
};
