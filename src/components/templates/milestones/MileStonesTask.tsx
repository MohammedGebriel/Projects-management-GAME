import { BsLink, BsRecordCircle } from "react-icons/bs";
import { FaEllipsisH, FaFileAlt, FaRegCalendarAlt } from "react-icons/fa";
import { FaCloud, FaQrcode } from "react-icons/fa6";
import { RiFileList2Line } from "react-icons/ri";
import CardDetails from "../../atoms/CardDetails";

export default function MileStonesTask() {
    return (
        <div className="card">
            <div className="header flex justify-between">
                <div className="flex gap-1.5 text-brandColor items-center">
                    <FaFileAlt className="text-base"/>
                    <p className="font-medium text-10 lg:text-base text-darkColor">Task Title</p>
                </div>
                <div className="flex items-center gap-1.5 lg:gap-2.5">
                    <p className='text-10 lg:text-xs font-medium text-textColor flex items-center gap-1.5 '><FaRegCalendarAlt />Feb, 2022</p>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-darkColor">Item Title</p>
                <div className="flex items-center gap-2.5">
                    <button className='text-linkColor text-lg '><BsLink /></button>
                    <button className='text-linkColor text-base '><BsRecordCircle  /></button>
                    <button className='text-linkColor text-base '><FaEllipsisH /></button>    
                </div>
            </div>
            <p className="text-sm text-secondColor">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id dui mi. Fusce varius bibendum ante, non lacinia. Fall usasc ce variu slorem ipsum dolor sit amet
            </p>
            <CardDetails icon={<RiFileList2Line/>} name='Quantity'  button_content='4000' first='Units' second='Bags'/>
            <CardDetails icon={<FaCloud/>} name='Completion Rate'  button_content='4' first='%' second=' '/>
            <CardDetails icon={<FaQrcode/>} name='Item Code'  button_content='4387525' first='Item' second='023'/>


        {/* 
            <div className="flex flex-col sm:flex-row gap-2.5 justify-between items-center">
                <div className="flex items-center gap-2.5">
                    <RiFileList2Line  className="text-[#09242E] text-[18px]"/>
                    <span className="font-medium text-sm text-darkColor">Quantity</span>
                </div>
                <div className="flex items-center gap-2.5 min-w-[160px] justify-between">
                    <button className="rounded-[5px] border border-[#DBEDF5] shadow px-[5px] w-[80px]">4000</button>
                    <p className="text-xs font-bold text-darkColor">Units</p>
                    <p className="text-xs  text-[#30637C]">Bags</p>
                </div>
            </div> 
            
            <div className="flex flex-col sm:flex-row gap-2.5 justify-between items-center">
                <div className="flex items-center gap-2.5">
                    <FaCloud   className="text-[#09242E] text-[18px]"/>
                    <span className="font-medium text-sm text-darkColor">Completion Rate</span>
                </div>
                <div className="flex items-center gap-2.5 min-w-[160px] ">
                    <button className="rounded-[5px] border border-[#DBEDF5] shadow px-[5px] w-[80px]">4</button>
                    <p className="text-xs  text-[#30637C]">%</p>
                </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2.5 justify-between items-center">
                <div className="flex items-center gap-2.5">
                    <FaQrcode   className="text-[#09242E] text-[18px]"/>
                    <span className="font-medium text-sm text-darkColor">Item Code</span>
                </div>
                <div className="flex items-center gap-2.5 min-w-[160px] justify-between">
                    <button className="rounded-[5px] border border-[#DBEDF5] shadow px-[5px] min-w-[80px]">4387525</button>
                    <p className="text-xs font-bold text-darkColor">Item</p>
                    <p className="text-xs  text-[#30637C]">023</p>
                </div>
            </div>
        */}

        </div>
    )
}
