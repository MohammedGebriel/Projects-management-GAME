import { FaXmark,FaCloudArrowUp,FaRegCircleXmark    } from "react-icons/fa6";
import ExcelImg from '../../../assets/excel.png'
export default function FileUpload() {
    return (
        <div className="card">
            <input className="hidden" type="file" name="" id="file" placeholder="" />
            <label htmlFor="file" className=" cursor-pointer flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="font-bold text-sm text-darkColor">Project Excel File Upload</h2>
                        <p className="text-10 text-primaryColor">Add your documents here, and you can upload up to 5 files max</p>
                    </div>
                    <FaXmark className="text-lg"/>
                </div>
                <div className="border border-milestoneProgress border-dashed py-2.5 px-5 rounded-md flex items-center gap-4">
                    <FaCloudArrowUp  className="text-milestoneProgress text-lg"/>
                    <div className="font-semibold text-xs">
                        <p>Drag your file(s) or <span className="text-milestoneProgress">browse</span></p>
                        <p className="text-10 text-primaryColor">Max 25 MB files are allowed</p>
                    </div>
                </div>
                <p className="text-darkColor font-bold text-xs">Upload from Device</p>
                <div className="border py-1.5 px-5 border-mainBorder rounded-md flex flex-col">
                    <div className="flex items-center gap-2.5">
                        <img src={ExcelImg} alt="" />
                        <div className="flex-1">
                            <h3 className="font-semibold text-xs text-darkColor">Project File.xlsx</h3>
                            <p className="text-primaryColor text-xs">500kb</p>
                        </div>
                        <FaRegCircleXmark className="bg-mainBorder text-textColor rounded-xl"/>
                    </div>

                    <div className="progress flex items-center gap-1.5">
                        <div className={`h-2 w-full bg-thirdColor rounded-xl relative`}>
                            <span style={{width: '50%'}}  className={` absolute left-0 top-0 h-full w-1/2 rounded-xl bg-milestoneProgress`}></span>
                        </div>
                        <p className=" font-medium text-secondColor text-xs">50%</p>
                    </div>
                </div>
            </label>
        </div>
    )
}
