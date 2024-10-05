import { FaXmark,FaCloudArrowUp,FaRegCircleXmark    } from "react-icons/fa6";
import ExcelImg from '../../../assets/excel.png'
export default function FileUpload() {
    return (
        <div className="rounded-[10px] border border-[#DBEDF5] shadow py-[10px] px-[20px] flex flex-col gap-[5px]">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="font-bold text-[14px] text-[#0B0B0B]">Project Excel File Upload</h2>
                    <p className="text-[10px] text-[#6D6D6D]">Add your documents here, and you can upload up to 5 files max</p>
                </div>
                <FaXmark className="text-[18px]"/>
            </div>
            <div className="border border-[#1849D6] border-dashed py-[10px] px-[20px] rounded-[5px] flex items-center gap-[15px]">
                <FaCloudArrowUp  className="text-[#1849D6] text-[18px]"/>
                <div className="font-semibold text-[12px]">
                    <p>Drag your file(s) or <span className="text-[#1849D6]">browse</span></p>
                    <p className="text-[10px] text-[#6D6D6D]">Max 25 MB files are allowed</p>
                </div>
            </div>
            <p className="text-[#041116] font-bold text-[12px]">Upload from Device</p>
            <div className="border py-[5px] px-[20px] border-[#E7E7E7] rounded-[5px] flex flex-col">
                <div className="flex items-center gap-[10px]">
                    <img src={ExcelImg} alt="" />
                    <div className="flex-1">
                        <h3 className="font-semibold text-[12px] text-[#0B0B0B]">Project File.xlsx</h3>
                        <p className="text-[#6D6D6D] text-[12px]">500kb</p>
                    </div>
                    <FaRegCircleXmark className="bg-[#dbdbdb] text-[#858585] rounded-[10px]"/>
                </div>
                <div className="progress flex items-center gap-[5px]">
                    <div className={`h-[7px] w-full bg-[#A0A0A033] rounded-[12px] relative`}>
                        <span style={{width: '50%'}}  className={` absolute left-0 top-0 h-full w-[50%] rounded-[12px] bg-[#1849D6]`}></span>
                    </div>
                    <p className=" font-medium text-[#4A4646] text-[12px]">50%</p>
                </div>
            </div>  
        </div>
    )
}
