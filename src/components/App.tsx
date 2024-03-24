import { useEffect, useState } from "react";
import Background from "./Background";
import Container from "./Container";
import Footer from "./Footer";
import Header, { HeaderTop } from "./Header";
import BookmarksButton from "./BookmarksButton";
import Logo from "./Logo";
import SearchForm from "./SearchForm";
import { Toaster } from "react-hot-toast";
import { useActiveId, useDeBounce, useJobItem, useJobItems } from '../lib/hooks';

function App() {
  const [searchText, setSearchText] = useState("");


  const activeId = useActiveId();
  const deBouncedSearchText = useDeBounce(searchText, 500);

  const [jobItems, loading,] = useJobItems(deBouncedSearchText);

  const [jobItem, isLoading] = useJobItem(activeId);
  const [currentPage, setCurrentPage] = useState(1);
  const totalNumberOfResults = jobItems?.length;


  const handleChangePage = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setCurrentPage((prev) => prev + 1);

    }
    if (direction === 'prev') {
      setCurrentPage((prev) => prev - 1);
    }
  }



  const jobItemsSliced = jobItems?.slice((currentPage - 1) * 7, currentPage * 7);



  return (
    <>
      <Background />
      <Header className='header'>
        <HeaderTop>
          <Logo />
          <BookmarksButton />
        </HeaderTop>
        <SearchForm searchText={searchText} setSearchText={setSearchText} />
      </Header>
      <Container jobItems={jobItemsSliced} loading={loading} jobItem={jobItem} totalNumberOfResults={totalNumberOfResults}
        onChangePage={handleChangePage}
        currentPage={currentPage} />
      <Footer />
      <Toaster position="top-right" />
    </>
  );
}

export default App;
