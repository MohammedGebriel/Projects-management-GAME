import { SectionHeader } from "../../../atoms";
import { Link } from "react-router-dom";
import { FaFilter, FaRepeat } from "react-icons/fa6";
import MaterialsLinksMenu from "../MaterialsLinksMenu";
import SwapItem from "./SwapItem";
import CreateSwap from "../CreateSwap";

export default function SwapsContent() {
    return (
        <div className=" flex flex-col gap-4">
            <div className="deduct-header flex flex-col lg:flex-row gap-2.5 lg:items-center justify-between">
                <div>
                    <div className="flex gap-2.5 lg:gap-4 items-center">
                        <button className="size-8 flex justify-center items-center rounded bg-white border border-secondColor shadow"><FaFilter/></button>
                        <MaterialsLinksMenu />
                    </div>
                </div>
                <div>
                    <div className="flex gap-2.5 lg:gap-4 items-center flex-wrap">
                        {/* <SwapButton /> */}
                        <CreateSwap />
                    </div>
                </div>
            </div>

            <div className="content flex flex-col gap-2.5">
                <SectionHeader icon={<FaRepeat />} header="Swaps">
                    <div className="flex gap-2.5">
                        <Link to='/' className="link">See All</Link>
                    </div>
                </SectionHeader>
                <div className="grid lg:grid-cols-2 gap-5">
                    <SwapItem />
                    <SwapItem />
                    <SwapItem />
                    <SwapItem />
                    <SwapItem />
                    <SwapItem />
                    <SwapItem />
                </div>
            </div>
        </div>
    )
}
