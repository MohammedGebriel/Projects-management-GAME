import { Checkbox } from '@mantine/core';

export default function MileStonesChecklist() {
    return (
        <div className='p-2.5 border border-mainBorder shadow rounded-xl'>
            <Checkbox
                label="Checklist"
                color="gray"
                variant="outline"
                className=' font-medium cursor-pointer'
            />
        </div>
    )
}
