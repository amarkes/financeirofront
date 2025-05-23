import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "@/pages/sign-in/index";
import SignUp from "@/pages/sign-up/index";
import ProtectedRoute from '@/core/protected-routes/index';
import NotFound from '@/pages/not-found/index';
import DashboardPage from "./pages/dashboard/index";

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">

        <BrowserRouter>
          <Routes>
            {/* Rotas públicas */}
            <Route path="/login" element={<SignIn />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />

            {/* Rotas protegidas */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />

            {/* Rota para qualquer outra rota inexistente */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
