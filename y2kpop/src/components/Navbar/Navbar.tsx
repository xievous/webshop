import "./navbar.css";
import MegaMenu from "./MegaMenu";
import { menuData } from "../../assets/types/data";
export default function Navbar() {
  return (
    <>
      <>
        <MegaMenu items={menuData} />
      </>
    </>
  );
}
