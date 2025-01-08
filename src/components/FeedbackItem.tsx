import { TriangleUpIcon } from "@radix-ui/react-icons";

export type FeedbackItem = {
  upvoteCount: number;
  badgeLetter: string;
  company: string;
  text: string;
  daysAgo: number;
  id: number;
};

type FeedbackItemProps = {
  feedbackItem: FeedbackItem;
};

export const FeedbackItem = ({ feedbackItem }: FeedbackItemProps) => {
  return (
    <li className="feedback">
      <button>
        <TriangleUpIcon />
        <span>{feedbackItem.upvoteCount}</span>
      </button>

      <div>
        <p>{feedbackItem.badgeLetter}</p>
      </div>

      <div>
        <p>{feedbackItem.company}</p>
        <div>{feedbackItem.text}</div>
      </div>

      <p>{`${feedbackItem.daysAgo}d`}</p>
    </li>
  );
};
