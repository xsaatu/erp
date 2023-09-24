import { Link, router } from "@inertiajs/react"

export default function Navbar() {
    return (
        <nav className="w-full">
            <div className="container text-lg m-5 shadow-md">
                <div className="grid grid-cols-2 m-3">
                    <div>
                        <Link href={route("dashboard")} as="button">Dashboard</Link>
                    </div>
                    <div>
                        <Link href={route("monitor")} as="button">Monitor</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}