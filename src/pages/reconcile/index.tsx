
import { Link } from "react-router-dom";
import { SectionHeader } from "../../components/atoms";
import MainHeader from "../../components/molecules/MainHeader";
import ReconcileFilter from "../../components/templates/reconcile/ReconcileFilter";
import { FaFileAlt } from "react-icons/fa";
import ReconcileContent from "../../components/templates/reconcile/ReconcileContent";
// import CreateReconcileRequest from "../../components/templates/reconcile/CreateReconcileRequest";

export default function Reconcile() {
    return (
        <div className=" page">
            <MainHeader />
            <ReconcileFilter />
            <div className="flex flex-col gap-2.5">
                <SectionHeader icon={<FaFileAlt />} header="Reconcile">
                    <div className="flex gap-2.5">
                        <Link to='/' className="link">See All</Link>
                        {/* <button className="flex justify-center items-center w-[18px] h-[18px] text-[10px] text-white bg-[#000] rounded-[6px]"><FaPlus/></button> */}
                        {/* <CreateReconcileRequest /> */}
                    </div>
                </SectionHeader>
                <ReconcileContent />
            </div>
        </div>
    )
}
