import MobileNav from "../component/MobileNav";
import LikedSongs from "./LikedSongs.jsx";
import Playlists from "./Playlists.jsx";

const Home = () => {
    return (
        <div className="p-4">
            <h1>Home Page</h1>
            <LikedSongs />
            <Playlists />
            <MobileNav />
        </div>
    );
};

export default Home;
