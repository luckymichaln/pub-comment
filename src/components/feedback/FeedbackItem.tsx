import { TriangleUpIcon } from "@radix-ui/react-icons";
import { TFeedbackItem } from "../../lib/types";
import { MouseEvent, useState } from "react";

type FeedbackItemProps = {
  feedbackItem: TFeedbackItem;
};

export const FeedbackItem = ({ feedbackItem }: FeedbackItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [upvoteCount, setUpvoteCount] = useState(feedbackItem.upvoteCount);

  const handleUpvote = (ev: MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setUpvoteCount((prev) => ++prev);
    ev.currentTarget.disabled = true;
    ev.stopPropagation();
  };

  return (
    <li
      onClick={() => setIsOpen((prev) => !prev)}
      className={`feedback ${isOpen ? "feedback--expand" : ""}`}
    >
      <button
        onClick={(ev) =>
          handleUpvote(
            ev as unknown as MouseEvent<HTMLButtonElement, MouseEvent>
          )
        }
      >
        <TriangleUpIcon />
        <span>{upvoteCount}</span>
      </button>

      <div>
        <p>{feedbackItem.badgeLetter}</p>
      </div>

      <div>
        <p>{feedbackItem.company}</p>
        <div>{feedbackItem.text}</div>
      </div>

      <p>{feedbackItem.daysAgo === 0 ? "NEW" : `${feedbackItem.daysAgo}d`}</p>
    </li>
  );
};
