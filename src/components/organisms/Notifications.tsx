import { FaBell } from "react-icons/fa6";
import Notification from "../templates/notifications/Notification";
import CreateNotification from "../templates/notifications/CreateNotification";
type Notifications_TP = {
    className? : string,
}

export default function Notifications({className}:Notifications_TP) {
    return (
        <div className={`${className} sticky  top-0 w-300 h-screen !overflow-y-auto   p-5 pt-10 hidden xl:flex flex-col gap-2.5 bg-white`}>
            <div className="heading flex justify-between">
                <div className="text-textColor flex items-center gap-1.5">
                    <FaBell className=""/>
                    <p className="text-sm hidden lg:block">Notifications</p>
                </div>
                <button className=" bg-black size-4  flex justify-center items-center rounded">
                    {/* <FaPlus  className="text-[13px] text-white"/> */}
                    <CreateNotification />
                </button>
            </div>
            <Notification status='todo' title='Todo' description="Hello Phillip, let's see your progress in 2020, and fix it "/>
            <Notification status='inprogress' title='Inprogress' description="Hello Phillip, let's see your progress in 2020, and fix it "/>
            <Notification status='done' title='Done' description="Hello Phillip, let's see your progress in 2020, and fix it "/>
            <Notification status='todo' title='Todo' description="Hello Phillip, let's see your progress in 2020, and fix it "/>
            <Notification status='inprogress' title='Inprogress' description="Hello Phillip, let's see your progress in 2020, and fix it "/>
            <Notification status='done' title='Done' description="Hello Phillip, let's see your progress in 2020, and fix it "/>
            
{/*             
            <Notification status='done' title='Done' description="Hello Phillip, let's see your progress in 2020, and fix it "/>
            <Notification status='done' title='Done' description="Hello Phillip, let's see your progress in 2020, and fix it "/>
            <Notification status='done' title='Done' description="Hello Phillip, let's see your progress in 2020, and fix it "/>
            <Notification status='done' title='Done' description="Hello Phillip, let's see your progress in 2020, and fix it "/>
            <Notification status='done' title='Done' description="Hello Phillip, let's see your progress in 2020, and fix it "/>
            <Notification status='done' title='Done' description="Hello Phillip, let's see your progress in 2020, and fix it "/>
            <Notification status='done' title='Done' description="Hello Phillip, let's see your progress in 2020, and fix it "/>
             */}
            
        </div>
    )
}
