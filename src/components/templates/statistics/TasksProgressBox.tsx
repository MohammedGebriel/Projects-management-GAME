import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

type TasksProgressBox_TP = {
    percentage: number,
    task_title: string,
}

export default function TasksProgressBox({percentage,task_title}:TasksProgressBox_TP) {
    return (
        <div className="progress-box">
            <CircularProgressbar className='w-3/5 h-4/5' value={percentage} text={`${percentage}%`} />
            <p className='font-semibold text-base text-darkColor'>{task_title}</p>
        </div>
    ) 
}
