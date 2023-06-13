import MidBar from "../mid-bar/mid-bar";
import NavBar from "../nav-bar/nav-bar";
import TopBar from "../top_bar/top-bar";

const Header = () => {
  return (
    <header>
      <TopBar />
      <MidBar />
      <NavBar />
    </header>
  );
};

export default Header;
