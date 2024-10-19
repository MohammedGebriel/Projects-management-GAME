import ProjectTitleImage from '../../../assets/Task Title.png'

export default function OverviewDetails() {
    return (
        <div className="details flex flex-col lg:flex-row  gap-5">
            <img className="hidden lg:block" src={ProjectTitleImage} alt="" />    
            <div className="flex flex-1  flex-col gap-1.5">
                <p className="text-sm text-fourthColor">Type:</p>
                <p className="text-sm text-fourthColor">Sector:</p>
                <p className="text-sm text-fourthColor">Sector Presidency:</p>
                <p className="text-sm text-fourthColor">Production:</p>
                <p className="text-sm text-fourthColor">Scope Of Work:</p>
                <p className="text-xs text-brandColor font-medium max-w-300 leading-4">
                pact. is a management system designed to help teams collaborate & manage their projects with ease. It offers powerful features such as task tracking, project organization, scheduling, & communication tools to keep teams organized.
                </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex  min-w-32 flex-col gap-5">
                    <p className="rounded-lg w-fit px-3 py-2 text-xs font-semibold flex justify-center items-center bg-fifthColor">Contract ID</p>
                    <div>
                        <p className="text-fourthColor text-xs font-semibold">Planned Amount</p>
                        <p className="font-bold text-sm text-brandColor ">3,030.00 L.E</p>
                    </div>
                    <div>
                        <p className="text-fourthColor text-xs font-semibold">Planned Amount</p>
                        <p className="font-bold text-sm text-brandColor ">3,030.00 L.E</p>
                    </div>
                </div>
                <div className="bg-fifthColor min-w-32 p-2.5 rounded-lg flex flex-col gap-1.5 max-h-fit">
                    <div>
                        <p className="text-xs text-fourthColor">Start Date</p>
                        <h3 className="font-semibold text-sm text-brandColor">03/05/2020</h3>
                    </div>
                    <div>
                        <p className="text-xs text-fourthColor">End Date</p>
                        <h3 className="font-semibold text-sm text-brandColor">03/05/2020</h3>
                    </div>
                    <div>
                        <p className="text-xs text-fourthColor">Deadline</p>
                        <h3 className="font-semibold text-sm text-brandColor">Within 10 Months</h3>
                    </div>
                    <div>
                        <p className="text-xs text-fourthColor">Actual Deadline</p>
                        <h3 className="font-semibold text-sm text-brandColor">--------------</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
