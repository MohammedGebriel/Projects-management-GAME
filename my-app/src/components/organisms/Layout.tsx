import Notifications from "./Notifications";
import Sidebar from "./Sidebar";

type Layout_TP = {
    children: React.ReactNode
}

export default function Layout({children}:Layout_TP) {
    return (
        <div className="flex">
            <Sidebar />
            {children}
            <Notifications />
        </div>
    )
}
