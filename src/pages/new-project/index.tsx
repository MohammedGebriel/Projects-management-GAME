import { FaPen, FaRegCalendarCheck ,FaPaperclip,FaPencil,FaEllipsis ,FaPlus   } from "react-icons/fa6";
import { BsCheckCircle,BsAlarm,BsExclamationCircleFill   } from "react-icons/bs";
import SearchMapImage from '../../assets/Search Map.png'
import SectionHeader from '../../components/atoms/SectionHeader'
import FileUpload from "../../components/templates/new-project/FileUpload";
export default function NewProject() {
    return (
        <form className='flex-1 page '>
            <div>
                <div className="relative ">
                    <input type="text" className="w-52 outline-none font-semibold text-primaryColor text-2xl pl-6" placeholder="Project Title"/>
                    <FaPen className="absolute top-1/2 -translate-y-1/2 text-primaryColor"/>
                </div>
                <p className="text-brandColor font-medium text-base">Welcome Jamal Al Sanaferi</p>
            </div>
            <div className="flex items-center flex-col-reverse sm:flex-row gap-4">
                <div className="flex items-center gap-6  text-fourthColor flex-1 ">
                    <BsAlarm/>
                    <FaRegCalendarCheck/>
                    <BsCheckCircle />
                    <FaPaperclip />
                </div>
                <div className="flex items-center gap-5 py-1.5 px-2.5">
                    <button type="submit" className="py-1.5 px-3 flex items-center gap-1.5 bg-linkColor rounded-2xl font-medium text-xs text-white">
                        <FaPencil />
                        Submit
                    </button>
                    <FaEllipsis className="text-linkColor text-lg"/>
                </div>
            </div>
            <div className="search-map w-full">
                <img src={SearchMapImage} className="w-full max-h-[150px]" alt="" />
            </div>
            <div className="project-information flex flex-col gap-5">
                <SectionHeader icon={<BsExclamationCircleFill  />} header="Project Information">
                        <div className="flex gap-2.5 items-center">
                            <button className="add-button"><FaPlus/></button>
                        </div>
                </SectionHeader>    
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="input-container">
                        <label htmlFor="production" className="input-label">Production</label>
                        <select name="" id="production"  className="input">
                            <option value="" selected>Select Here ..</option>
                            <option value="">HH</option>
                            <option value="">HH</option>
                        </select>
                    </div>
                    <div className="input-container">
                        <label htmlFor="production" className="input-label">District</label>
                        <select name="" id="production"  className="input">
                            <option value="" selected>Select Here ..</option>
                            <option value="">HH</option>
                            <option value="">HH</option>
                        </select>
                    </div>
                    <div className="input-container">
                        <label htmlFor="production" className="input-label">Project Type</label>
                        <select name="" id="production"  className="input">
                            <option value="" selected>Select Here ..</option>
                            <option value="">HH</option>
                            <option value="">HH</option>
                        </select>
                    </div>
                    <div className="input-container">
                        <label htmlFor="production" className="input-label">Sector Presidncy</label>
                        <select name="" id="production"  className="input">
                            <option value="" selected>Select Here ..</option>
                            <option value="">HH</option>
                            <option value="">HH</option>
                        </select>
                    </div>
                    <div className="input-container">
                        <label htmlFor="production" className="input-label">Sector</label>
                        <select name="" id="production"  className="input">
                            <option value="" selected>Select Here ..</option>
                            <option value="">HH</option>
                            <option value="">HH</option>
                        </select>
                    </div>
                    <div className="input-container">
                        <label htmlFor="production" className="input-label">Start Date</label>
                        <div className="relative">
                            <input type="text" placeholder="Type Here .." className="w-full input"/>
                            <FaPen className="input-text-icon"/>
                        </div>
                    </div>
                    <div className="input-container">
                        <label htmlFor="production" className="input-label">Contractor Name </label>
                        <div className="relative">
                            <input type="text" placeholder="Type Here .." className="w-full input"/>
                            <FaPen className="input-text-icon"/>
                        </div>
                    </div>
                    <div className="input-container">
                        <label htmlFor="production" className="input-label">Contract ID </label>
                        <div className="relative">
                            <input type="text" placeholder="Type Here .." className="w-full input"/>
                            <FaPen className="input-text-icon"/>
                        </div>
                    </div>
                    <div className="input-container">
                        <label htmlFor="production" className="input-label">End Date</label>
                        <div className="relative">
                            <input type="text" placeholder="Type Here .." className="w-full input"/>
                            <FaPen className="input-text-icon"/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-1 !w-full ">
                    <label htmlFor="production" className="input-label">Scope of Work</label>
                    <div className="relative">
                        <textarea  placeholder="Type Here .." className="w-full resize-none h-32 input"/>
                        <FaPen className="input-text-icon top-5 right-2.5"/>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-4">
                    <FileUpload />
                    <FileUpload />
                </div>
            </div>
        </form>
    )   
}
