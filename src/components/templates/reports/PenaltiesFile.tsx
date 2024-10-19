import PDFImage from '../../../assets/pdf file image.png'
import AvatarGroup from '../../../assets/Avatar group.png'
export default function PenaltiesFile() {
    return (
        <div>
            <div className="flex items-center  gap-2.5">
                <img src={PDFImage} className='size-9 md:siz-10' alt="" />
                <div className='flex flex-col'>
                    <h1 className='text-sixthColor font-bold text-11'>Data-structures.xls</h1>
                    <div className='flex items-center justify-between'>
                        <span className='text-primaryColor text-xs'>Type</span>
                        <span className='text-secondColor text-xs'>1.4 MB</span>
                    </div>
                </div>
                <div className='flex flex-col'>
                        <span className='text-xs font-semibold text-linkColor'>Download</span>
                        <span className='text-xs font-semibold text-linkColor'>Delete</span>
                    </div>
            </div>
            <div className='flex items-center gap-5'>
                <div className='flex  items-center gap-2.5'>
                    <span className='text-primaryColor text-sm'>Person:</span>
                    <img src={AvatarGroup} alt="" />
                </div>
                <div className='flex  items-center gap-2.5'>
                    <span className='text-primaryColor text-sm'>Qty : 4000</span>
                    <span className='text-xs text-secondColor'>Unit</span>
                </div>
            </div>
        </div>
    )
}

