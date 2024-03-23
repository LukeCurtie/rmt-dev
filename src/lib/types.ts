
type JobItem = {
  badgeLetters: string;
  title: string;
  company: string;
  daysAgo: string;
  id: string;
};


type JobListProps = {
  jobItems: JobItem[];
  loading: boolean;
};



type jobItemExpanded = JobItem & {
  description: string;
  qualifications: string[];
  reviews: string[];
  duration: string
  location: string;
  salary: string;
  coverImgURL: string;
  companyURL: string;





}
