import { FaThLarge } from "react-icons/fa";
import { FaFilter, FaPlus } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa6";

export default function MaterialsHeader() {
    return (
        <div className="flex flex-col lg:flex-row gap-[10px] lg:items-center justify-between">
            <div>
                <div className="flex gap-[10px] lg:gap-[15px] items-center">
                    <button className="w-[30px] h-[30px]  flex justify-center items-center rounded bg-white border border-[#33333318] shadow"><FaFilter/></button>
                    <button className="w-[30px] h-[30px]  flex justify-center items-center rounded bg-white border border-[#33333318] shadow"><FaThLarge/></button>
                    <button className="rounded-[6px] py-[5px] px-[10px] bg-[#478FB4] font-medium text-[14px] flex items-center gap-[5px] text-white shadow-[0px_2px_5px_0px_rgba(34, 100, 229, 0.12)]  shadow-[0px_0px_0px_1px_rgba(34, 100, 229, 1)]">
                        <FaTrash/>
                        <span>0 Selected</span>
                    </button>
                </div>
            </div>
            <div>
                <div className="flex gap-[10px] lg:gap-[15px] items-center flex-wrap">
                        <button className="rounded-[6px] py-[5px] px-[10px] bg-[#478FB4] font-medium text-[11px] lg:text-[14px] flex items-center gap-[5px] text-white shadow-[0px_2px_5px_0px_rgba(34, 100, 229, 0.12)]  shadow-[0px_0px_0px_1px_rgba(34, 100, 229, 1)]">
                            <FaPlus/>
                            <span>Orders</span>
                        </button>
                        <button className="rounded-[6px] py-[5px] px-[10px] bg-[#478FB4] font-medium text-[11px] lg:text-[14px] flex items-center gap-[5px] text-white shadow-[0px_2px_5px_0px_rgba(34, 100, 229, 0.12)]  shadow-[0px_0px_0px_1px_rgba(34, 100, 229, 1)]">
                            <FaPlus/>
                            <span>Swap</span>
                        </button>
                        <button className="rounded-[6px] py-[5px] px-[10px] bg-[#478FB4] font-medium text-[11px] lg:text-[14px] flex items-center gap-[5px] text-white shadow-[0px_2px_5px_0px_rgba(34, 100, 229, 0.12)]  shadow-[0px_0px_0px_1px_rgba(34, 100, 229, 1)]">
                            <FaPlus/>
                            <span>Deduct</span>
                        </button>
                        <button className="rounded-[6px] py-[5px] px-[10px] bg-[#478FB4] font-medium text-[11px] lg:text-[14px] flex items-center gap-[5px] text-white shadow-[0px_2px_5px_0px_rgba(34, 100, 229, 0.12)]  shadow-[0px_0px_0px_1px_rgba(34, 100, 229, 1)]">
                            <FaPlus/>
                            <span>Returns</span>
                        </button>
                    </div>
                </div>
        </div>
    )
}
