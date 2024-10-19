import { FaThLarge } from "react-icons/fa";
import { FaFilter } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa6";
import CreateService from "./CreateService";

export default function ServicesHeader() {
    return (
        <div className="flex flex-col lg:flex-row gap-2.5 lg:items-center justify-between">
            <div>
                <div className="flex gap-2.5 lg:gap-4 items-center">
                    <button className="size-8  flex justify-center items-center rounded bg-white border border-mainBorder shadow"><FaFilter/></button>
                    <button className="size-8  flex justify-center items-center rounded bg-white border border-mainBorder shadow"><FaThLarge/></button>
                    <button className="rounded-md py-1.5 px-2.5 bg-linkColor font-medium text-sm flex items-center gap-1.5 text-white shadow-[0px_2px_5px_0px_rgba(34, 100, 229, 0.12)]  shadow-[0px_0px_0px_1px_rgba(34, 100, 229, 1)]">
                        <FaTrash/>
                        <span>0 Selected</span>
                    </button>
                </div>
            </div>
            <div>
                <div className="flex gap-2.5 lg:gap-4 items-center flex-wrap">
                    <CreateService />
                </div>
            </div>
        </div>
    )
}
