import BookmarkIcon from "./BookmarkIcon";
import BookmarksButton from "./BookmarksButton";
import Logo from "./Logo";
import SearchForm from "./SearchForm";

export default function Header({ children}) {
  return (

    <header className="header">
       {children}

     </header>
  );
}


export function HeaderTop() {
  return (
    <div className="header__top">

    </div>
  );
}
