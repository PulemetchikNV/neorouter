import { Link } from "react-router"

export const SIDEBAR_ITEMS = [
    {
        name: 'home',
        href: '/'
    },
    {
        name: 'about',
        href: '/about'
    },
    {
        name: 'Models',
        href: '/models'
    }
]

export const Sidebar = () => {
    return (
        <nav className="bg-background w-60 lg:block flex-shrink-0 fixed top-0 border-r-2 h-full pt-24 py-4 h-screen z-0">
            {SIDEBAR_ITEMS.map(({name, href}) => {
                return <Link 
                    className="px-2 py-1 w-full border border-transparent text-muted-foreground flex items-center justify-between hover:text-foreground hover:bg-muted/50 transition-colors false"
                    to={href}
                >
                    {name}
                </Link>
            })}
        </nav>
    )
}