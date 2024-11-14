import DisplayLatest from "../../components/DisplayLatest/DisplayLatest";
import DisplayThumbnails from "../../components/DisplayThumbnails/DisplayThumbnails";
import Navbar from "../../components/Navbar/Navbar";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <DisplayThumbnails />
      <DisplayLatest />
    </>
  );
}
