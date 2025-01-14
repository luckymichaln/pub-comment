import { HashtagListItem } from "./HashtagListItem";

type HashtagListProps = {
  companyList: string[];
  handleSelectedCompany: (company: string) => void;
};

export const HashtagList = ({
  companyList,
  handleSelectedCompany,
}: HashtagListProps) => {
  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashtagListItem
          key={company}
          company={company}
          onClick={handleSelectedCompany}
        />
      ))}
    </ul>
  );
};
