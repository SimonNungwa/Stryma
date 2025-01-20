import MobileNav from "../component/MobileNav";
import RecentSongs from "../carousels/RecentSongs.jsx";
import Recommended from "../carousels/Recommended.jsx";

const Home = () => {
    return (
        <div className="p-4">
            <h1 className="text-center">Home Page</h1>

            {/* carousels */}
            <section>
                <RecentSongs />
                <Recommended />
            </section>
            <MobileNav />
        </div>
    );
};

export default Home;
