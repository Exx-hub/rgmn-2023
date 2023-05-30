import "animate.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";

import HomePage from "./pages/HomePage";

import GenerateWorkout from "./pages/GenerateWorkout";
import Workout from "./pages/Workout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/create",
    element: <GenerateWorkout />,
  },
  {
    path: "/workout",
    element: <Workout />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
