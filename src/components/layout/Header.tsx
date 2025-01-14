import { FeedbackForm } from "../feedback/FeedbackForm";
import { Logo } from "../Logo";
import { PageHeader } from "../PageHeader";
import { Pattern } from "../Pattern";

type HeaderProps = {
  onAddToList: (text: string) => void;
};

export const Header = ({ onAddToList }: HeaderProps) => {
  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeader />
      <FeedbackForm onAddToList={onAddToList} />
    </header>
  );
};
