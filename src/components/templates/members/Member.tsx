import { BsFillPersonFill,BsBriefcaseFill,BsFillTelephoneFill   } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa6";
import { Member_TP } from '../../../Types';


export default function Member({image,name,job_description,email,phone}:Member_TP) {
    return (
        <div className="rounded-2xl border border-mainBorder shadow py-4 px-5 flex flex-col gap-2.5 ">
            <div className="image flex justify-center">
                <img src={image} alt="" className='rounded-full'/>
            </div>
            <div className="info flex flex-col gap-1.5 lg:flex-row">
                <div className='flex-1 flex flex-col gap-1.5 lg:border-r border-secondBrandColor lg:pr-1.5'>
                    <div className='flex gap-1.5 items-center'>
                        <BsFillPersonFill className='text-secondBrandColor'/>
                        <p className=' font-bold text-xs text-secondBrandColor'>{name}</p>
                    </div>
                    <div className='flex gap-1.5 items-center'>
                        <BsBriefcaseFill className='text-secondBrandColor'/>
                        <p className='  text-xs text-secondBrandColor'>{job_description}</p>
                    </div>
                </div>
                <div className='flex-1 flex flex-col gap-1.5 '>
                    <div className='flex gap-1.5 items-center'>
                        <FaEnvelope className='text-secondBrandColor'/>
                        <p className='  text-xs text-secondBrandColor'>{email}</p>
                    </div>
                    <div className='flex gap-1.5 items-center'>
                        <BsFillTelephoneFill className='text-secondBrandColor'/>
                        <p className='  text-xs text-secondBrandColor'>{phone}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
