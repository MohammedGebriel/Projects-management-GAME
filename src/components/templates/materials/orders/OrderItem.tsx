import { BsLink, BsRecordCircle } from "react-icons/bs";
import { FaEllipsisH, FaRegCalendarAlt ,FaQrcode   } from "react-icons/fa";
import { RiFileList2Line } from "react-icons/ri";
import { FaFileLines, FaUser } from "react-icons/fa6";
import Recipient from '../../../../assets/recipient.png'
import CardDetails from "../../../atoms/CardDetails";
export default function OrderItem() {
    return (
        <div className="card">
            <div className="flex justify-between">
                <div className="flex gap-1.5 text-brandColor items-center">
                    <FaFileLines className="text-base"/>
                    <p className="font-medium text-10 lg:text-base text-darkColor">Order</p>
                </div>
                <div className="flex items-center gap-1.5 lg:gap-2.5">
                    <p className='text-10 lg:text-xs font-medium text-textColor flex items-center gap-1.5 '><FaRegCalendarAlt />Feb, 2022</p>
                </div>
            </div>
            
            <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-darkColor">Order Title</p>
                <div className="flex items-center gap-2.5">
                    <button className='text-linkColor text-lg '><BsLink /></button>
                    <button className='text-linkColor text-base '><FaEllipsisH /></button> 
                    <button className='text-linkColor text-base '><BsRecordCircle  /></button>
                </div>
            </div>

            <p className="text-sm text-secondColor">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id dui mi. Fusce varius bibendum ante, non lacinia. Fall usasc ce variu slorem ipsum dolor sit amet
            </p>
            <CardDetails icon={<RiFileList2Line/>} name='Quantity'  button_content='4000' first='Units' second='Bags'/>
            <CardDetails icon={<FaQrcode/>} name='Item Code'  button_content='4387525' first='Item' second='023'/>
            
            <div className="flex flex-col sm:flex-row gap-2.5 justify-between items-center">
                <div className="flex items-center gap-2.5">
                    <FaUser  className="text-brandColor text-lg"/>
                    <span className="font-medium text-sm text-darkColor">Recipient</span>
                </div>
                <div className="flex items-center gap-2.5">
                    <img src={Recipient} alt="" />
                </div>
            </div> 
        </div>
    )
}
