import backgroundMilestones from '../../../assets/background milestones.png'
import { BsCodeSlash } from "react-icons/bs";
import { RiShutDownLine } from "react-icons/ri";
import { FaEllipsisVertical, FaPen, FaTrash } from "react-icons/fa6";

export default function MileStonesCard() {
    return (
        <div className="flex-1 flex flex-col gap-1.5">
            <div 
                style={{
                    backgroundImage: `url(${backgroundMilestones})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}
                className="relative h-40 rounded-2xl p-2.5 flex flex-col justify-between"
            >
                <div className='flex justify-end'>
                    <button  className='rounded-xl p-0.5 px-1.5 w-fit bg-white text-xs text-secondColor '>10 days </button>
                </div>
                <p className='font-semibold text-white text-center flex items-center justify-center gap-2.5'><BsCodeSlash className='font-bold text-lg'/> UI Design</p>
                <div className="progress flex flex-col gap-0.5">
                    <p className=" font-medium text-white text-xs">Progress</p>
                    <div className={`h-1.5 w-full bg-milestoneProgress rounded-xl relative`}>
                        <span style={{width: '20%'}}  className={` absolute left-0 top-0 h-full w-1/2 rounded-xl bg-white`}></span>
                    </div>
                    <p className=" text-white text-xs text-right">20%</p>
                </div>
            </div>

            <div className="flex items-center justify-center gap-2.5">
                <button className='milestone-button'><RiShutDownLine /></button>
                <button className='milestone-button'><FaTrash /></button>
                <button className='milestone-button'><FaPen /></button>
                <button className='milestone-button bg-white text-[#478FB4]'><FaEllipsisVertical  /></button>
            </div>
        </div>
    )
}
