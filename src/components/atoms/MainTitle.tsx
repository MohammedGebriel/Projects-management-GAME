import { MainTitle_TP } from "../../Types";

export default function MainTitle({title,className}:MainTitle_TP) {
    return (
        <h1 className={`${className} font-semibold text-2xl leading-10 text-brandColor`}>{title}</h1>
    )
}
