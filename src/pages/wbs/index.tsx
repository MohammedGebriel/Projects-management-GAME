
import { FaFileAlt } from "react-icons/fa";
import { SectionHeader } from "../../components/atoms";
import MainHeader from "../../components/molecules/MainHeader";
import WBSFilter from "../../components/templates/wbs/WBSFilter";
import WBSContent from "../../components/templates/wbs/WBSContent";
import CreateWorkOrder from "../../components/templates/wbs/CreateWorkOrder";

export default function WBS() {
    return (
        <div className="page">
            <MainHeader />
            <WBSFilter />
            <div className="flex flex-col gap-2.5">
                <SectionHeader icon={<FaFileAlt />} header="Work Orders">
                    <div className="flex gap-2.5">
                        <CreateWorkOrder />
                    </div>
                </SectionHeader>
                <WBSContent />
            </div>
        </div>
    )
}
