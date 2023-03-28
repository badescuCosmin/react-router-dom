import { useNavigate } from "react-router-dom";
import { Routes } from "../../utils/routes-definition";

//componenta trebuie sa fie definita exportata in acest fell pentru lazy loading
//https://reactrouter.com/en/main/route/lazy

export const Component = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1 className="title">Register</h1>
      <button
        onClick={() => {
          localStorage.setItem("authToken", "eyJraWQiOiJDOExGUUlJM0FFQ3N29pg");
          navigate(Routes.DashboardRoute);
        }}
      >
        Login
      </button>
    </div>
  );
};

// export default Register;
