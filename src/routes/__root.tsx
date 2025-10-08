import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NavBar from '../NavBar'

const queryClient = new QueryClient();

const RootLayout = () => (
  <>
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
  </>
)

export const Route = createRootRoute({ component: RootLayout })