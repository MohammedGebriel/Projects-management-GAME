import PDFImage from '../../../assets/pdf file image.png'

export default function DependenciesFile() {
    return (
        <div className="flex items-center gap-2.5">
            <img src={PDFImage} alt="" />
            <div className='flex flex-col'>
                <h1 className='text-sixthColor font-bold text-xs'>Data-structures.xls</h1>
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
    )
}
