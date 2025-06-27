import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

import NotFoundPage from "./pages/NotFoundPage";
import DashboardPage from "./pages/DashboardPage";
import Dashboard from "./components/Dashboard";
import Product from "./components/Product";
import Settings from "./components/Settings";
import Tasks from "./components/Tasks";
import Category from "./components/Category";
import ProductForm from "./components/ProductForm";
import ProductDetails from "./components/ProductDetails";
import CreateCategory from "./components/CreateCategory";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<DashboardPage />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="products" element={<Product />} />
            <Route path="products/:id" element={<ProductDetails />} />
            <Route path="products/createProduct" element={<ProductForm />} />
            <Route path="category" element={<Category />} />
            <Route
              path="category/createCategory"
              element={<CreateCategory />}
            />
            <Route path="tasks" element={<Tasks />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#fff",
            color: "#374151",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
