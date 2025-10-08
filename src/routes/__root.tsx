import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import NavBar from '../NavBar'

const RootLayout = () => (
  <>
    <header>
        <nav>
            <NavBar />
        </nav>
    </header>
    <main>
        <Outlet />
        <TanStackRouterDevtools />
    </main>
    
    <footer>
        <p>Copyright Isaac and Marc &copy; 2025</p>
    </footer>
  </>
)

export const Route = createRootRoute({ component: RootLayout })