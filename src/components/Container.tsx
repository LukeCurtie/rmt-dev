import JobItemContent from "./JobItemContent";
import Sidebar from "./Sidebar";

export default function Container({ jobItems, loading, jobItem, totalNumberOfResults, onChangePage, currentPage }) {
  return <div className="container">
    <Sidebar jobItems={jobItems} loading={loading} totalNumberOfResults={totalNumberOfResults}
      onChangePage={onChangePage}
      currentPage={currentPage} />

    <JobItemContent jobItem={jobItem} />
  </div>;
}
