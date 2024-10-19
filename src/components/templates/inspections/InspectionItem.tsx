import { BsLink, BsRecordCircle } from "react-icons/bs";
import { FaEllipsisH, FaFileAlt, FaRegCalendarAlt ,FaQrcode   } from "react-icons/fa";
import { RiFileList2Line } from "react-icons/ri";
import CardDetails from "../../atoms/CardDetails";

export default function InspectionItem() {
    return (
        <div className="card">
            <div className="flex justify-between">
                <div className="flex gap-1.5 text-brandColor items-center">
                    <FaFileAlt className="text-base"/>
                    <p className="font-medium text-10 lg:text-base text-darkColor">Inspection Item</p>
                </div>
                <div className="flex items-center gap-1.5 lg:gap-2.5">
                    <p className='text-10 lg:text-xs font-medium text-textColor flex items-center gap-1.5 '><FaRegCalendarAlt />Feb, 2022</p>
                    <button className='text-doneColor text-base '><BsRecordCircle  /></button>
                </div>
            </div>
            
            <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-darkColor">Item Title</p>
                <div className="flex items-center gap-2.5">
                    <button className='text-linkColor text-lg '><BsLink /></button>
                    <button className='text-linkColor text-base '><FaEllipsisH /></button>    
                </div>
            </div>

            <p className="text-sm text-secondColor">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id dui mi. Fusce varius bibendum ante, non lacinia. Fall usasc ce variu slorem ipsum dolor sit amet
            </p>
            <CardDetails icon={<RiFileList2Line/>} name='Quantity'  button_content='4000' first='Units' second='Bags'/>
            <CardDetails icon={<FaQrcode/>} name='Item Code'  button_content='4387525' first='Item' second='023'/>

        </div>
    )
}
