import { MainProgress_TP } from "../../Types";

export default function MainProgress({progress}:MainProgress_TP) {
    return (
        <div className="progress flex flex-col gap-1.5">
            <p className=" font-medium text-secondColor text-xs">{progress} completed</p>
            <div className={`h-2.5 w-full bg-thirdColor rounded-xl relative`}>
                <span style={{width: progress}}  className={` absolute left-0 top-0 h-full w-1/2 rounded-xl bg-primaryColor`}></span>
            </div>
        </div>
    )
}
