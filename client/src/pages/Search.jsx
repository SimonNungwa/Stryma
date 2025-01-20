import MobileNav from "../component/MobileNav";
import SearchBar from "../component/SearchBar.jsx";
import Categories from "../component/Categories.jsx";

const Search = () => {
    return (
        <div className="p-4 ">
            <SearchBar />
            <Categories />
            <MobileNav />
        </div>
    );
};

export default Search;
