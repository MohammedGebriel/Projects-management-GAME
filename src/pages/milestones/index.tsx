
import { FaChevronLeft, FaChevronRight ,FaFlag, FaFolder } from "react-icons/fa6";
import { SectionHeader } from "../../components/atoms";
import MainHeader from "../../components/molecules/MainHeader";
import MileStonesFilter from "../../components/templates/milestones/MileStonesFilter";
import MileStonesContent from "../../components/templates/milestones/MileStonesContent";
import MileStonesChecklists from "../../components/templates/milestones/MileStonesChecklists";
import MileStonesTasks from "../../components/templates/milestones/MileStonesTasks";
import CreateMileStone from "../../components/templates/milestones/CreateMileStone";
import CreateMileStoneCheckList from "../../components/templates/milestones/CreateMileStoneChecklist";
import CreateMileStoneTask from "../../components/templates/milestones/CreateMileStoneTask";

export default function MileStones() {
    return (
        <div className="page">
            <MainHeader />
            <MileStonesFilter />
            <div className="flex flex-col gap-4">
            <SectionHeader icon={<FaFlag  />} header="Milestones">
                    <div className="flex gap-2.5 items-center">
                        <button className="items-prev-button ">
                            <FaChevronLeft  />
                        </button>
                        <button className="items-next-button">
                            <FaChevronRight />
                        </button>
                        {/* <button className="flex justify-center items-center w-[18px] h-[18px] text-[10px] text-white bg-[#000] rounded-[6px]"><FaPlus/></button> */}
                        <CreateMileStone />
                    </div>
            </SectionHeader>
            <MileStonesContent />
            
            
            <SectionHeader icon={<FaFolder />} header="(Milestones) CheckLists">
                    <div className="flex gap-2.5 items-center">
                        <button className="items-prev-button">
                            <FaChevronLeft  />
                        </button>
                        <button className="items-next-button">
                            <FaChevronRight />
                        </button>
                        {/* <button className="flex justify-center items-center w-[18px] h-[18px] text-[10px] text-white bg-[#000] rounded-[6px]"><FaPlus/></button> */}
                        <CreateMileStoneCheckList />
                    </div>
            </SectionHeader>
            <MileStonesChecklists />
            
            <SectionHeader icon={<FaFolder />} header="(Milestones) Tasks">
                    <div className="flex gap-2.5 items-center">
                        <button className="items-prev-button">
                            <FaChevronLeft  />
                        </button>
                        <button className="items-next-button">
                            <FaChevronRight />
                        </button>
                        {/* <button className="flex justify-center items-center w-[18px] h-[18px] text-[10px] text-white bg-[#000] rounded-[6px]"><FaPlus/></button> */}
                        <CreateMileStoneTask />
                    </div>
            </SectionHeader>
            <MileStonesTasks />
            </div>
        </div>
    )
}
