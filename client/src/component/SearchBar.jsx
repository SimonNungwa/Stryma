import { AiOutlineSearch, AiOutlineFilter } from "react-icons/ai";

const SearchBar = () => {
    return (
        <div className="flex items-center justify-center">
            <form className="flex items-center relative">
                {/* Search Input */}
                <input
                    type="search"
                    placeholder="Search music"
                    className="border border-gray-300 rounded-full pl-5 pr-16 py-2 w-[300px] md:w-[400px] outline-none focus:ring-2 focus:ring-red-800"
                />

                {/* Search Button */}
                <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-800 text-white rounded-full p-2"
                >
                    <AiOutlineSearch size={20} />
                </button>
            </form>

            {/* Filter Button */}
            <button
                type="button"
                className="ml-4 flex items-center bg-gray-200 border border-gray-300 rounded-full p-2 hover:bg-gray-300 transition-all"
            >
                <AiOutlineFilter size={20} className="text-gray-700" />
                <span className="ml-2 text-gray-700 font-medium hidden md:inline">Filter</span>
            </button>
        </div>
    );
};

export default SearchBar;
