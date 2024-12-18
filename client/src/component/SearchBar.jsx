const SearchBar = () => {
    return (
        <>
            <form className="flex items-center justify-center  p-4">
                <input
                type="search"
                placeholder="Search music"
                className="border border-black rounded-full p-5 px-40 outline-none focus:outline-none absolute "/>
                <button
                type="submit"
                className="border border-black rounded-[50%] p-2 outline-none focus:outline-none relative left-[200px] bg-red-800 text-white">
                    S
                </button>
            </form>
        </>
    )
}

export default SearchBar;