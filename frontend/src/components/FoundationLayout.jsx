import { Outlet } from "react-router-dom";
// import Navigation from "../components/Navigation/Navigation";
import SongDetail from "../components/SongDetailsLyrics/SongDetails";

const FoundationLayout = () => {
  return (
    <div className="layout">
      {/* <Navigation /> */}
      <SongDetail />
      <Outlet />

      <footer> © 2025 </footer>
    </div>
  );
};

export default FoundationLayout;
