import { useNavigate } from "react-router-dom";
import { Routes } from "../../utils/routes-definition";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="title">Login page</h1>
      <div style={{ width: "100%", textAlign: "center", marginTop: "100px" }}>
        <button
          onClick={() => {
            localStorage.setItem(
              "authToken",
              "eyJraWQiOiJDOExGUUlJM0FFQ3N29pg"
            );
            navigate(Routes.DashboardRoute);
          }}
        >
          Login
        </button>
        <button
          onClick={() => {
            navigate(Routes.RegisterRoute);
          }}
        >
          Register
        </button>
      </div>
    </>
  );
};
export default Login;
