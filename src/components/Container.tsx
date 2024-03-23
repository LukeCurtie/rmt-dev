import JobItemContent from "./JobItemContent";
import Sidebar from "./Sidebar";

export default function Container({ jobItems, loading, jobItem, totalNumberOfResults }) {
  return <div className="container">
    <Sidebar jobItems={jobItems} loading={loading} totalNumberOfResults={totalNumberOfResults} />
    <JobItemContent jobItem={jobItem} />
  </div>;
}
