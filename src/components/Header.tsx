import { FeedbackForm } from "./FeedbackForm";
import { Logo } from "./Logo";
import { PageHeader } from "./PageHeader";
import { Pattern } from "./Pattern";

export const Header = () => {
  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeader />
      <FeedbackForm />
    </header>
  );
};
