import PDFImage from '../../../assets/pdf file image.png'
import { FaRegCalendarAlt,FaEllipsisH   } from "react-icons/fa";
import { BsRecordCircle,BsLink,BsCheck2All    } from "react-icons/bs";

export default function ReconcileRequest() {
    return (
        <div className="flex items-center gap-1.5">
            <img src={PDFImage} alt="" />
            <div className='rounded-xl border border-mainBorder shadow flex-1 p-2.5 lg:px-5 flex flex-col gap-2.5'>
                <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-1.5'>
                    <h3 className='text-xs font-medium text-darkColor'>Reconcile Request</h3>
                    <div className='flex lg:items-center  gap-1.5 lg:gap-2.5'>
                        <p className='text-10 lg:text-xs font-medium text-primaryColor flex items-center gap-1.5 '><FaRegCalendarAlt />Feb, 2022</p>
                        <button className='text-linkColor text-base '><BsLink /></button>
                        <button className='text-linkColor text-sm '><BsRecordCircle  /></button>
                        <button className='text-linkColor text-sm '><FaEllipsisH /></button>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <p className='text-10 lg:text-xs font-medium text-darkColor'>Request No</p>
                    <button className='rounded-xl py-0.5 px-1.5 text-white bg-todoColor flex items-center gap-1.5 lg:gap-2.5'>
                        <p className='text-10 font-medium'>In Progress</p>
                        <span className='block size-1.5 rounded-full bg-white'></span>
                    </button>
                </div>
                <div className='flex flex-col md:flex-row  items-center justify-between'>
                    <p className='text-xs font-medium text-darkColor flex items-center gap-1.5'>
                        <BsCheck2All className='text-5 font-bold'/> 
                        Confirmation
                    </p>
                    <div className='flex gap-1.5 items-center'>
                        <button className='rounded-[100px] border border-mainBorder bg-doneColor shadow py-1 font-bold text-xs px-1.5 lg:px-4 text-white'>Confirm</button>
                        <button className='rounded-[100px] border border-mainBorder bg-rejectColor shadow py-1 font-bold text-xs px-1.5 lg:px-4 text-white'>Reject</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
