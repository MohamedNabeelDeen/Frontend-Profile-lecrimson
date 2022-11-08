/*Landing page with logo and login button*/
import { useNavigate } from "react-router-dom";

function Landingpage() {
  /*To navigate to loginpage from landing page*/
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/login`;
    navigate(path);
  };

  return (
    <div class="container">
      <div class="login_box">
        <img src={require("./logor.png")} alt="Company Logo" />

        <button class="login-btn" onClick={routeChange}>
          <b>Login</b>
        </button>
      </div>
    </div>
  );
}

export default Landingpage;
