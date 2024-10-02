import MileStonesCard from "./MileStonesCard";

export default function MileStonesContent() {
    return (
        <div className="flex items-center flex-wrap gap-[12px]">
            <MileStonesCard />
            <MileStonesCard />
            <MileStonesCard />
            <MileStonesCard />
            <MileStonesCard />
        </div>
    )
}
