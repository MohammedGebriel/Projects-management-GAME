import { UpdateTime_TP } from "../../Types";

export default function UpdateTime({update_time}:UpdateTime_TP) {
    return (
        <p className="text-brandColor leading-6 text-sm lg:text-lg">Last Update: {update_time}</p>
    )
}
