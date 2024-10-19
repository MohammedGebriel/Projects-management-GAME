import { FaEllipsis  } from "react-icons/fa6";
import { Link } from "react-router-dom";
type statisticBox_TP = {
    name: string,
    first: string,
    second: string,
    link: string,
    icon: React.ReactNode,
}

export default function StatisticsBox({name,first,second,link,icon}:statisticBox_TP) {
    return (
        <div className=" rounded-xl border border-mainBorder p-2.5 flex-1 shadow flex flex-col gap-2.5">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-1.5">
                    <div className="size-5 text-xs bg-black text-white flex justify-center items-center">{icon}</div>
                    <p className="text-brandColor text-xs font-medium">{name}</p>
                </div>
                <FaEllipsis className="text-sm" />
            </div>
            <div className="flex justify-between items-center h-8">
                <p className="text-primaryColor text-sm">
                    <span className="text-brandColor text-2xl font-bold">{first}</span>
                    <span>{second}</span>
                </p>
                <Link to={link} className="link">See All</Link>
            </div>
        </div>
    )
}
