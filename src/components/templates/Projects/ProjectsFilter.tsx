import { FaFilter } from "react-icons/fa6";
import {FaSearch,FaChevronLeft,FaChevronRight} from "react-icons/fa";
import { FaEllipsis   } from "react-icons/fa6";
export default function ProjectsFilter() {
    return(
        <div className="lg:px-2.5 flex lg:gap-24  justify-between">
            <div className="hidden lg:flex gap-4">
                <button className="size-7  flex justify-center items-center rounded bg-white border border-mainBorder shadow"><FaFilter/></button>
                {/* <button className="w-[30px] h-[30px]  flex justify-center items-center rounded bg-white border border-[#33333318] shadow"><FaThLarge/></button> */}
            </div>
            <div className="flex flex-1 gap-2.5 lg:gap-5 px-0 lg:px-2.5 items-center">
                <form action="" className="flex-1 relative">
                    <input className="w-full outline-none text-sm  h-9 rounded-lg py-1.5 px-5 border border-mainBorder shadow" type="text" placeholder="Search..." name="" id="" />
                    <button className=" absolute top-1/2 -translate-y-1/2 right-4 lg:text-5 text-secondaryColor">
                        <FaSearch />
                    </button>
                </form>
                {/* <button className="add h-[30px] w-[30px] rounded-full bg-[#478FB4] flex justify-center items-center text-white text-[14px]">
                    <FaPlus />
                </button> */}
                <button className="search-prev-button ">
                    <FaChevronLeft  />
                </button>
                <button className="search-next-button">
                    <FaChevronRight />
                </button>
                <button className="search-more-button">
                    <FaEllipsis />
                </button>

            </div>
        </div>
    )
}
