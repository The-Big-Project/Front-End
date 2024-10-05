/** @format */

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/Auth&Login/LoginPage";
import ResetPasswordPage from "./pages/Auth&Login/ResetPasswordPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools/production";
import { Provider } from "react-redux";
import store from "./store";
import { signUp } from "./api/userApi";
import ProtectedRoute from "./pages/ProtectedRoute/ProtectedRoute";
import AppLayout from "./pages/AppLayout/AppLayout";
import Dashboard from "./components/Dashboard/Dashboard";
import Inventory from "./pages/Inventory/Inventory";

const routes = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
    caseSensitive: true,
    index: true,
  },
  {
    path: "/password",
    element: <ResetPasswordPage />,
  },
  {
    path: "/app",
    element: <ProtectedRoute />,
    children: [
      {
        element: <AppLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "inventory",
            element: <Inventory />,
          },
        ],
      },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <main>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <RouterProvider router={routes} />
        </QueryClientProvider>
      </Provider>
    </main>
  );
}

export default App;
