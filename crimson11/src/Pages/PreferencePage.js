import Logobar from "../Components/Logobar";
import Checkbox from "../Components/Checkbox";
import NavFrame from "../Components/NavFrame";
function PreferencePage() {
  return (
    <>
      <Logobar />
      <NavFrame title="Choose your favourite topics" />
      <Checkbox />
    </>
  );
}
export default PreferencePage;
