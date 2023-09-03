import { Link, router } from "@inertiajs/react"

export default function Navbar() {
    return (
        <nav className="flex justify-center">
            <div className="container text-3xl">
                <Link href={route("login")} as="button">Login</Link>
            </div>
        </nav>
    )
}