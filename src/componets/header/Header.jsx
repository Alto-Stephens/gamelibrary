import Brand from "./Brand";
import MainNavigation from "./MainNavigation";
import "./header.css";

const Header = () => {
    return (
        <header className="main-header">
            <Brand />
            <MainNavigation />
        </header>
    );
};

export default Header;