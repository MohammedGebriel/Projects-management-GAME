type CardDetails_TP = {
    name: string,
    button_content: string,
    first: string,
    second: string,
    icon: React.ReactNode,
}

export default function CardDetails({icon,name,button_content,first,second}:CardDetails_TP) {
    return (
        <div className="flex flex-col sm:flex-row gap-2.5 justify-between items-center">
            <div className="flex items-center gap-2.5">
                <span className="text-[#09242E] text-lg">
                    {icon}
                </span>
                <span className="font-medium text-sm text-darkColor">{name}</span>
            </div>
            <div className="flex items-center gap-2.5 min-w-[160px] justify-between">
                <button className="rounded-md border border-mainBorder shadow px-1.5 w-20">{button_content}</button>
                <p className="text-xs font-bold text-darkColor">{first}</p>
                <p className="text-xs  text-linkColor">{second}</p>
            </div>
        </div>
    )
}
