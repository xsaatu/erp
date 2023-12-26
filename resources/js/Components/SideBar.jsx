import NavLink from "./NavLink";


export default function SideBar() {
    return <>
        <nav className="flex bg-slate-100 w-1/3 min-h-screen">
           <div className="container">
            <div className="row">
                <div className="col m-5">
                    <img src="" alt="INI GAMBAR" />
                </div>
            </div>
            <div className="row"> 
                <div className="col mt-24 text-center">
                    <NavLink href={route('dashboard')} >
                        <span className="text-lg">Dashboard</span>
                    </NavLink>
                </div>
                <div className="col mt-5 text-center">
                    <NavLink href={route('monitor')} >
                        <span className="text-lg">Monitor</span>
                    </NavLink>
                </div>
                <div className="col mt-5 text-center">
                    <NavLink href={route('plan')}>
                        <span className="text-lg">Plan Date</span>
                    </NavLink>
                </div>
                <div className="col mt-5 text-center">
                    <NavLink href={route('capacity')}>
                        <span className="text-lg">Capacity</span>
                    </NavLink>
                </div>
            </div>
           </div>
        </nav>
    </>
}