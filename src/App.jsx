import LoginPage from "./pages/LoginPages";
import DashboardPage from "./pages/dashboard/index";

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <DashboardPage />
      </main>
    </div>
  );
}

export default App;
