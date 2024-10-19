type SectionHeader_TP = {
    icon: React.ReactNode,
    header: string,
    children?: React.ReactNode,
}
export default function SectionHeader({icon,header,children}:SectionHeader_TP) {
    return (
        <div className="flex justify-between">
            <div className="flex items-center gap-1.5 text-textColor">
                <span className="text-base">{icon}</span>
                <p className="text-xs">{header}</p>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}
