import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NavBar from "../NavBar";

const queryClient = new QueryClient();

const RootLayout = () => (
  <div className="rootContainer">
    <header>
      <nav>
        <NavBar />
      </nav>
    </header>
    <main>
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>

      <TanStackRouterDevtools />
    </main>

    <footer>
      <p>Copyright Isaac and Marc &copy; 2025</p>
    </footer>
  </div>
);

export const Route = createRootRoute({ component: RootLayout });
