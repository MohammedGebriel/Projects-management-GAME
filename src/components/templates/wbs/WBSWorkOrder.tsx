import { FaFileAlt } from "react-icons/fa";
import { FaEllipsis } from "react-icons/fa6";
import MainProgress from "../../atoms/MainProgress";

export default function WBSWorkOrder() {
    return (
        <div className="card">
            <div className="flex justify-between">
                <FaFileAlt className="text-sm" />
                <FaEllipsis />
            </div>

            <div className="grid grid-cols-3 gap-1.5">
                {/* Create Component Here */}
                <div className="flex flex-col">
                    <p className="text-secondColor font-bold text-xs">Start</p>
                    <p className="text-textColor text-8 sm:text-10">May 20, 2020</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-secondColor font-bold text-xs">End</p>
                    <p className="text-textColor text-8 sm:text-10">May 20, 2020</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-secondColor font-bold text-xs">Deadline</p>
                    <p className="text-textColor text-8 sm:text-10">May 20, 2020</p>
                </div>
            </div>
            
            <p className="font-semibold text-sm text-secondaryColor">Work Order Title. not just a short title but it could be long to describe the order</p>
            <p className="font-medium text-xs text-primaryColor">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id dui mi. Fusce varius bibendum ante, non lacinia. Fall usasc ce variu slorem ipsum dolor sit amet</p>
            <MainProgress progress="45%" />
        </div>
    )
}
