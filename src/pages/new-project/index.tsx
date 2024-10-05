import { FaPen, FaRegCalendarCheck ,FaPaperclip,FaPencil,FaEllipsis ,FaPlus   } from "react-icons/fa6";
import { BsCheckCircle,BsAlarm,BsExclamationCircleFill   } from "react-icons/bs";
import SearchMapImage from '../../assets/Search Map.png'
import SectionHeader from '../../components/atoms/SectionHeader'
import FileUpload from "../../components/templates/new-project/FileUpload";
export default function NewProject() {
    return (
        <form className='flex-1 flex flex-col gap-[15px] border-[2px] bg-white border-[#EAEBF0] lg:mr-[10px]   p-[20px] '>
            <div>
                <div className="relative ">
                    <input type="text" className="w-[200px] outline-none font-semibold text-[#A1A1A1] text-[24px] pl-[25px]" placeholder="Project Title"/>
                    <FaPen className="absolute top-1/2 -translate-y-1/2 text-[#A1A1A1]"/>
                </div>
                <p className="text-[#09242E] font-medium text-[15px]">Welcome Jamal Al Sanaferi</p>
            </div>
            <div className="flex items-center flex-col-reverse sm:flex-row gap-[15px]">
                <div className="flex items-center gap-[25px]  text-[#667085] flex-1 ">
                    <BsAlarm/>
                    <FaRegCalendarCheck/>
                    <BsCheckCircle />
                    <FaPaperclip />
                </div>
                <div className="flex items-center gap-[20px] py-[5px] px-[10px]">
                    <button type="submit" className="py-[5px] px-[12.5px] flex items-center gap-[5px] bg-[#478FB4] rounded-[15px] font-medium text-[12px] text-white">
                        <FaPencil />
                        Submit
                    </button>
                    <FaEllipsis className="text-[#478FB4] text-[18px]"/>
                </div>
            </div>
            <div className="search-map">
                <img src={SearchMapImage} className="max-w-full min-h-[150px]" alt="" />
            </div>

            <div className="project-information flex flex-col gap-[20px]">
                <SectionHeader icon={<BsExclamationCircleFill  />} header="Project Information">
                        <div className="flex gap-[10px] items-center">
                            <button className="flex justify-center items-center w-[18px] h-[18px] text-[10px] text-white bg-[#000] rounded-[6px]"><FaPlus/></button>
                        </div>
                </SectionHeader>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[15px]">
                    <div className="flex flex-col gap-[3px] w-full">
                        <label htmlFor="production" className="font-medium text-[14px] text-[#09242E]">Production</label>
                        <select name="" id="production"  className="py-[10px] px-[10px] border border-[#DBEDF5] outline-none shadow text-[12px] text-[#A1A1A1]">
                            <option value="" selected>Select Here ..</option>
                            <option value="">HH</option>
                            <option value="">HH</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-[3px] w-full">
                        <label htmlFor="production" className="font-medium text-[14px] text-[#09242E]">District</label>
                        <select name="" id="production"  className="py-[10px] px-[10px] border border-[#DBEDF5] outline-none shadow text-[12px] text-[#A1A1A1]">
                            <option value="" selected>Select Here ..</option>
                            <option value="">HH</option>
                            <option value="">HH</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-[3px] w-full">
                        <label htmlFor="production" className="font-medium text-[14px] text-[#09242E]">Project Type</label>
                        <select name="" id="production"  className="py-[10px] px-[10px] border border-[#DBEDF5] outline-none shadow text-[12px] text-[#A1A1A1]">
                            <option value="" selected>Select Here ..</option>
                            <option value="">HH</option>
                            <option value="">HH</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-[3px] w-full">
                        <label htmlFor="production" className="font-medium text-[14px] text-[#09242E]">Sector Presidncy</label>
                        <select name="" id="production"  className="py-[10px] px-[10px] border border-[#DBEDF5] outline-none shadow text-[12px] text-[#A1A1A1]">
                            <option value="" selected>Select Here ..</option>
                            <option value="">HH</option>
                            <option value="">HH</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-[3px] w-full">
                        <label htmlFor="production" className="font-medium text-[14px] text-[#09242E]">Sector</label>
                        <select name="" id="production"  className="py-[10px] px-[10px] border border-[#DBEDF5] outline-none shadow text-[12px] text-[#A1A1A1]">
                            <option value="" selected>Select Here ..</option>
                            <option value="">HH</option>
                            <option value="">HH</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-[3px] w-full">
                        <label htmlFor="production" className="font-medium text-[14px] text-[#09242E]">Start Date</label>
                        <div className="relative">
                            <input type="text" placeholder="Type Here .." className="w-full py-[10px] px-[10px] border border-[#DBEDF5] outline-none shadow text-[12px] text-[#A1A1A1]"/>
                            <FaPen className="text-[#A1A1A1] absolute top-1/2 -translate-y-1/2 right-[10px] text-[14px]"/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[3px] w-full">
                        <label htmlFor="production" className="font-medium text-[14px] text-[#09242E]">Contractor Name </label>
                        <div className="relative">
                            <input type="text" placeholder="Type Here .." className="w-full py-[10px] px-[10px] border border-[#DBEDF5] outline-none shadow text-[12px] text-[#A1A1A1]"/>
                            <FaPen className="text-[#A1A1A1] absolute top-1/2 -translate-y-1/2 right-[10px] text-[14px]"/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[3px] w-full">
                        <label htmlFor="production" className="font-medium text-[14px] text-[#09242E]">Contract ID </label>
                        <div className="relative">
                            <input type="text" placeholder="Type Here .." className="w-full py-[10px] px-[10px] border border-[#DBEDF5] outline-none shadow text-[12px] text-[#A1A1A1]"/>
                            <FaPen className="text-[#A1A1A1] absolute top-1/2 -translate-y-1/2 right-[10px] text-[14px]"/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[3px] w-full">
                        <label htmlFor="production" className="font-medium text-[14px] text-[#09242E]">End Date</label>
                        <div className="relative">
                            <input type="text" placeholder="Type Here .." className="w-full py-[10px] px-[10px] border border-[#DBEDF5] outline-none shadow text-[12px] text-[#A1A1A1]"/>
                            <FaPen className="text-[#A1A1A1] absolute top-1/2 -translate-y-1/2 right-[10px] text-[14px]"/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-[3px] !w-full ">
                    <label htmlFor="production" className="font-medium text-[14px] text-[#09242E]">Scope of Work</label>
                    <div className="relative">
                        <textarea  placeholder="Type Here .." className="w-full resize-none h-[120px] py-[10px] px-[10px] border border-[#DBEDF5] outline-none shadow text-[12px] text-[#A1A1A1]"/>
                        <FaPen className="text-[#A1A1A1] absolute top-[20px] right-[10px] text-[14px]"/>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-[15px]">
                    <FileUpload />
                    <FileUpload />
                </div>
            </div>
        </form>
    )   
}
