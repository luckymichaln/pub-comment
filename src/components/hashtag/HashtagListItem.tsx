type HashtagListItemProps = {
  company: string;
  onClick: (company: string) => void;
};

export const HashtagListItem = ({ company, onClick }: HashtagListItemProps) => {
  return (
    <li>
      <button onClick={() => onClick(company)}>#{company}</button>
    </li>
  );
};
