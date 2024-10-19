import { SectionHeader } from "../../../atoms";
import { Link } from "react-router-dom";
import DeductItem from "./DeductItem";
import { FaCircleMinus, FaFilter } from "react-icons/fa6";
// import DeductButton from "../DeductButton";
import MaterialsLinksMenu from "../MaterialsLinksMenu";
import CreateDeduct from "../CreateDeduct";

export default function DeductsContent() {
    return (
        <div className=" flex flex-col gap-4">
            <div className="deduct-header flex flex-col lg:flex-row gap-2.5 lg:items-center justify-between">
                <div>
                    <div className="flex gap-2.5 lg:gap-4 items-center">
                        <button className="size-8  flex justify-center items-center rounded bg-white border border-sixthColor shadow"><FaFilter/></button>
                        <MaterialsLinksMenu />
                    </div>
                </div>
                <div>
                    <div className="flex gap-2.5 lg:gap-4 items-center flex-wrap">
                            {/* <DeductButton /> */}
                            <CreateDeduct />
                    </div>
                </div>
            </div>

            <div className="content flex flex-col gap-2.5">
                <SectionHeader icon={<FaCircleMinus />} header="Deducts">
                    <div className="flex gap-2.5">
                        <Link to='/' className="link">See All</Link>
                    </div>
                </SectionHeader>
                <div className="grid lg:grid-cols-2 gap-5">
                    <DeductItem />
                    <DeductItem />
                    <DeductItem />
                    <DeductItem />
                    <DeductItem />
                    <DeductItem />
                    <DeductItem />
                    <DeductItem />
                </div>
            </div>
        </div>
    )
}
