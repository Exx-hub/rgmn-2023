import "animate.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";

import HomePage from "./pages/HomePage";

import GenerateWorkout from "./pages/GenerateWorkout";
import Workout from "./pages/Workouts";
import Start from "./pages/Start";
import Complete from "./pages/Complete";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/create",
    element: <GenerateWorkout />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/workouts",
    element: <Workout />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/start",
    element: <Start />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/complete",
    element: <Complete />,
    errorElement: <ErrorPage />,
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
