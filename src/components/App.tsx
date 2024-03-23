import { useEffect, useState } from "react";
import Background from "./Background";
import Container from "./Container";
import Footer from "./Footer";
import Header, { HeaderTop } from "./Header";
import BookmarksButton from "./BookmarksButton";
import Logo from "./Logo";
import SearchForm from "./SearchForm";
import { useActiveId, useDeBounce, useJobItem, useJobItems } from '../lib/hooks';

function App() {
  const [searchText, setSearchText] = useState("");


  const activeId = useActiveId();
  const deBouncedSearchText = useDeBounce(searchText, 500);

  const [jobItemsSliced, loading, totalNumberOfResults] = useJobItems(deBouncedSearchText);

  const [jobItem, isLoading] = useJobItem(activeId);

  // Use totalNumberOfResults and isLoading appropriately in your component.

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
      <Container jobItems={jobItemsSliced} loading={loading} jobItem={jobItem} totalNumberOfResults={totalNumberOfResults} />
      <Footer />
    </>
  );
}

export default App;
