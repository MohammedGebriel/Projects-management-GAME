import { FaFileAlt } from "react-icons/fa";
import { SectionHeader } from "../../components/atoms";
import MainHeader from "../../components/molecules/MainHeader";
import InspectionsFilter from "../../components/templates/inspections/InspectionsFilter";
import InspectionsContent from "../../components/templates/inspections/InspectionsContent";
// import CreateInspection from "../../components/templates/inspections/CreateInspection";

export default function Inspections() {
    return (
        <div className=" page">
            <MainHeader/>
            <InspectionsFilter />
            <div className="flex flex-col gap-2.5">
                <SectionHeader icon={<FaFileAlt />} header="Inspections Request">
                    <div className="flex gap-2.5">
                        {/* <button className="flex justify-center items-center w-[18px] h-[18px] text-[10px] text-white bg-[#000] rounded-[6px]"><FaPlus   /></button> */}
                        {/* <CreateInspection /> */}
                    </div>
                </SectionHeader>
                <InspectionsContent />
            </div>
        </div>
    )
}
