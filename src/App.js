import "./App.css";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";

const SpinnerOfDoom = () => {
  return <h1 style={{ fontSize: "20px" }}>Loading,........</h1>;
};

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
