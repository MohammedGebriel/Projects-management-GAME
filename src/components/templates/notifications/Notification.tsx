import { FiBarChart2 } from "react-icons/fi";
import { FaInfo,FaCheck  } from "react-icons/fa6";
import { Notification_TP } from "../../../Types";

export default function Notification({title,description,status}:Notification_TP) {
    return (
        <div className={`rounded-xl   border p-2.5  flex flex-col gap-1.5 shadow-[1px_1px_10px_rgb(0,0,0,0.1)] border-mainBorder ${status === 'todo' ? 'bg-white' : status === 'inprogress' ? "bg-overlayInprogressColor" : status === 'done' ? 'bg-overlayDoneColor' : 'bg-white'}`}>
            <div className="flex  items-center gap-1.5">
                <span className={`flex  justify-center items-center size-5 text-sm  text-white rounded ${status === 'todo' ? 'bg-black' : status === 'inprogress' ? "bg-inprogressColor" : status === 'done' ? 'bg-doneColor' : 'bg-secondaryColor'}`}>
                    {status === 'inprogress' ? <FiBarChart2/> : status === 'todo' ? <FaInfo/> :status === 'done' ?<FaCheck />:<FaInfo/>}
                </span>
                <p className="text-mainColor font-semibold text-xs">{title}</p>
            </div>
            <p className="text-[10px] text-secondaryColor font-medium">
                {description}
            </p>    
        </div>
    )
}
