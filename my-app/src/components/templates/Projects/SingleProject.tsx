import { FaEllipsis   } from "react-icons/fa6";
import { Link } from "react-router-dom";

type SingleProject_TP = {
    id :number,
    project_name: string,
    project_description: string,
    status: string,
    progress: string
}

export default function SingleProject({id,project_name,project_description,status,progress}:SingleProject_TP) {
    return (
        <div className="py-[10px] px-[20px] flex flex-col gap-[10px] rounded-r-[10px] rounded-bl-[10px] border border-[#DBEDF5] shadow">
            <div>
                <div className="flex items-center justify-between font-[Jakarta Sans]">
                    <Link to={`projects/${id}/overview`}>
                        <p className="font-semibold text-[#26252B]">{project_name}</p>
                    </Link>
                    <button className="text-[14px]"><FaEllipsis/></button>
                </div>
                <p className="text-[12px] font-medium text-[#91969B] opacity-70">{project_description}</p>
            </div>
            <div className="text-[12px] text-[#91969B] flex items-center justify-between">
                <p className=" ">Apr 2, 2023</p>
                <p>Contract No.</p>
            </div>
            <div className="grid grid-cols-3 gap-[5px]">
                <div className="flex flex-col">
                    <p className="text-[#4A4646] font-bold text-[10px]">Start</p>
                    <p className="text-[#91969B] text-[8px]">May 20, 2020</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-[#4A4646] font-bold text-[10px]">End</p>
                    <p className="text-[#91969B] text-[8px]">May 20, 2020</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-[#4A4646] font-bold text-[10px]">Deadline</p>
                    <p className="text-[#91969B] text-[8px]">May 20, 2020</p>
                </div>
            </div>
            <div className="flex items-center gap-[20px]">
                <div className="progress w-[60%] flex flex-col gap-[5px]">
                    <p className=" font-medium text-[#4A4646] text-[10px] lg:text-[12px]">{progress} completed</p>
                    <div className={`h-[10px] w-full bg-[#A0A0A033] rounded-[12px] relative`}>
                        <span style={{width:progress}} className={` absolute left-0 top-0 h-full  rounded-[12px] ${status === 'done'? 'bg-done': status === 'in progress' ? 'bg-[#9FA2B2]': status === 'todo' ? 'bg-[#478FB4]' : 'bg-[#A0A0A033]'}`}></span>
                    </div>
                </div>
                <div className="status w-[40%] flex flex-col ">
                    <p className=" font-medium text-[#4A4646] text-[14px]">Status</p>
                    <div className={` w-full  rounded-[12px] relative flex  items-center ${status === 'done'? 'bg-done': status === 'in progress' ? 'bg-[#9FA2B2]': status === 'todo' ? 'bg-[#478FB4]' : 'bg-[#A0A0A033]'}`}>
                        <span className={`absolute h-[5px] w-[5px] rounded-full bg-white right-[5px]`}></span>
                        <span className="text-[9px] px-[5px] text-white">{status}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
