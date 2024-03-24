import JobList from "./JobList";
import PaginationControls from "./PaginationControls";
import ResultsCount from "./ResultsCount";
import Sorting from "./SortingControls";

export default function Sidebar({ jobItems, loading, totalNumberOfResults, onChangePage, currentPage }) {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <ResultsCount totalNumberOfResults={totalNumberOfResults} />
        <Sorting />
      </div>
      <JobList jobItems={jobItems} loading={loading} />
      <PaginationControls onChangePage={onChangePage} currentPage={currentPage} />
    </div>
  );
}
