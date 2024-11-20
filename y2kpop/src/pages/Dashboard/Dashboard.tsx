import DisplayArtists from "../../components/DisplayArtists/DisplayArtists";
import DisplayLatest from "../../components/DisplayLatest/DisplayLatest";
import DisplayMerch from "../../components/DisplayMerch/DisplayMerch";
import DisplayPreorder from "../../components/DisplayPreorder/DisplayPreorder";
import DisplayThumbnails from "../../components/DisplayThumbnails/DisplayThumbnails";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <DisplayThumbnails />
      <DisplayLatest />
      <DisplayPreorder />
      <DisplayArtists />
      <DisplayMerch />
      <Footer />
    </>
  );
}
