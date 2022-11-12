import Logobar from "../Components/Logobar";
import NavFrame from "../Components/NavFrame";
import ContentAbout from "../Components/Content";
import "./Aboutus.css";

function Aboutus() {
  return (
    <>
      <Logobar />
      <NavFrame title="About Us" />
      <ContentAbout />
    </>
  );
}

export default Aboutus;
