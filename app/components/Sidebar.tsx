import { Link } from "react-router"

export const SIDEBAR_ITEMS = [
    {name: 'home', href: '/'},
    {name: 'about', href: '/about'}
]

export const Sidebar = () => {
    return (
        <nav className="w-60 lg:block flex-shrink-0 sticky top-28 border-r-2 h-full py-4">
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