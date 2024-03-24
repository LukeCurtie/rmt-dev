import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

type PaginationControlsProps = {
  onChangePage: (direction: 'next' | 'prev') => void;
  currentPage: number;
}

type PaginationButtonProps = {
  direction: 'next' | 'prev';
  onClick: () => void;
  page: number;
}

const PaginationButton: React.FC<PaginationButtonProps> = ({ direction, onClick, page }) => {
  const isNext = direction === 'next';
  return (
    <button onClick={onClick} className={`pagination__button pagination__button--${direction}`}>
      {isNext ? `Page ${page}` : <ArrowLeftIcon />}
      {isNext ? <ArrowRightIcon /> : `Page ${page}`}
    </button>
  );
}

const PaginationControls: React.FC<PaginationControlsProps> = ({ onChangePage, currentPage }) => {
  return (
    <section className="pagination">
      {currentPage > 1 && <PaginationButton direction='prev' onClick={() => onChangePage('prev')} page={currentPage - 1} />}
      <PaginationButton direction='next' onClick={() => onChangePage('next')} page={currentPage + 1} />
    </section>
  );
}

export default PaginationControls;
