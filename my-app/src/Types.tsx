export type Layout_TP = {
    children: React.ReactNode
}

export type GlobalProvider_TP = {
    children: React.ReactNode
}

export type SidebarPath_TP = {
    icon: React.ReactNode,
    title: string,
    count?: number,
    className? :string
    path: string
}

export type Notification_TP = {
    title: string,
    description: string,
    status: string,
}
export type MainTitle_TP = {
    title: string,
    className?: string,
}

export type UpdateTime_TP = {
    update_time: string,
}

export type CurrentProject_TP = {
    id?:number,
    projectName?: string,
    projectDescription?: string,
    status?: boolean,
    progress?: string,
}

export type Member_TP = {
    image: string,
    name: string,
    job_description: string,
    email: string,
    phone: string,
}

export type MainProgress_TP = {
    progress: string
}

export type Project_TP = {
    id: number,
    projectName: string,
    projectDescription: string,
    status: string,
    progress?: string 
}
