import { Project_TP } from "../Types";

export const allProjects:Project_TP[] = [
    {
        id:0,
        projectName: 'Project One',
        projectDescription: 'Description Project One',
        status: 'todo',
        progress: '0%'
    },
    {
        id:1,
        projectName: 'Project Two',
        projectDescription: 'Description Project Two',
        status: 'in progress',
        progress: '50%'
    },
    {
        id:2,
        projectName: 'Project Three',
        projectDescription: 'Description Project Three',
        status: 'done',
        progress: '100%'
    },
]