import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, json, RouterProvider } from "react-router-dom";
import ErrorsPage from "./components/ErrorsPage.jsx";
import Home from "./components/Home.jsx";
import BookDetails from "./components/BookDetails.jsx";
import ReadList from "./components/Readlist.jsx";
import WishList from "./components/WishList.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorsPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Cards/:bookId",
        element: <BookDetails />,
        loader: async ({ params }) => {
          try {
            const res = await fetch("/bookData.json");
            if (!res.ok) throw new Error("Failed to load data");
            const books = await res.json();
            const id = parseInt(params.bookId);
            return books.find((book) => book.bookId === id) || null;
          } catch (err) {
            console.error(err);
            return null;
          }
        },
      },
      {
        path: "ReadList",
        element: <ReadList />,
        loader: async () => {
          try {
            const res = await fetch("/bookData.json");
            if (!res.ok) throw new Error("Failed to load data");
            const data = await res.json();
            return data;
          } catch (err) {
            console.log(err);
          }
        },
      },
      {
        path: "WishList",
        element: <WishList />,
        loader: async () => {
          const res = await fetch("/bookData.json");
          const books = await res.json;
          return books;
        },
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer
      position="top-center"
      autoClose={500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      transition:Bounce
    />
  </StrictMode>
);
