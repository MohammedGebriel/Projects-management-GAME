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
        <div className="py-2.5 px-5 flex flex-col gap-2.5 rounded-r-2.5 rounded-bl-2.5 border border-[#DBEDF5] shadow">
            <div>
                <div className="flex items-center justify-between font-[Jakarta Sans]">
                    <Link to={`projects/${id}/overview`}>
                        <p className="font-semibold text-[#26252B]">{project_name}</p>
                    </Link>
                    <button className="text-sm"><FaEllipsis/></button>
                </div>
                <p className="text-xs font-medium text-textColor opacity-70">{project_description}</p>
            </div>
            <div className="text-xs text-textColor flex items-center justify-between">
                <p className=" ">Apr 2, 2023</p>
                <p>Contract No.</p>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
                <div className="flex flex-col">
                    <p className="text-secondColor font-bold text-10">Start</p>
                    <p className="text-textColor text-8">May 20, 2020</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-secondColor font-bold text-10">End</p>
                    <p className="text-textColor text-8">May 20, 2020</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-secondColor font-bold text-10">Deadline</p>
                    <p className="text-textColor text-8">May 20, 2020</p>
                </div>
            </div>
            <div className="flex items-center gap-5">
                <div className="progress w-3/5 flex flex-col gap-1.5">
                    <p className=" font-medium text-secondColor text-10 lg:text-xs">{progress} completed</p>
                    <div className={`h-2.5 w-full bg-thirdColor rounded-xl relative`}>
                        <span style={{width:progress}} className={` absolute left-0 top-0 h-full  rounded-xl ${status === 'done'? 'bg-doneColor': status === 'in progress' ? 'bg-inprogressColor': status === 'todo' ? 'bg-todoColor' : 'bg-thirdColor'}`}></span>
                    </div>
                </div>
                <div className="status w-2/5 flex flex-col ">
                    <p className=" font-medium text-secondColor text-sm">Status</p>
                    <div className={`w-full rounded-xl relative flex  items-center ${status === 'done'? 'bg-doneColor': status === 'in progress' ? 'bg-inprogressColor': status === 'todo' ? 'bg-todoColor' : 'bg-thirdColor'}`}>
                        <span className={`absolute size-1.5 rounded-full bg-white right-1.5`}></span>
                        <span className="text-9 px-1.5 text-white">{status}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
