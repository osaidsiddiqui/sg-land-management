import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./routes/__root";
import HomePage from "./routes/index";
import AboutPage from "./routes/about";
import ServicesPage from "./routes/services";
import GalleryPage from "./routes/gallery";
import ContactPage from "./routes/contact";
import FaqPage from "./routes/faq";
import NotFoundPage from "./routes/not-found";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "services",
        element: <ServicesPage />,
      },
      {
        path: "gallery",
        element: <GalleryPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "faq",
        element: <FaqPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
