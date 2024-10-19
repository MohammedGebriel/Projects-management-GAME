import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

type StatisticsProgressBox_TP = {
    percentage: number,
    month: string,
}

export default function StatisticsProgressBox({percentage,month}:StatisticsProgressBox_TP) {
    return (
        <div className="progress-box">
            <CircularProgressbar className='w-3/5 h-4/5' value={percentage} text={`${percentage}%`} />
            <p className='font-semibold text-base text-darkColor'>{month}</p>
        </div>
    )
}
