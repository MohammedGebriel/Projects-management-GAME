import { useEffect, useRef, useState } from "react"
import Notifications from "../../organisms/Notifications"
import { FaXmark } from "react-icons/fa6";
import { motion } from "framer-motion"

type ShowNotification_TP = {
    children: React.ReactNode
}   

export default function ShowNotification({children}:ShowNotification_TP) {
    const [showContent,setShowContent] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(()=> {
        const handleShowContent = (e:MouseEvent):void => {
            if(!ref.current || ref.current.contains(e.target as Node)){
                return
            }
            setShowContent(false)
        }
        window.addEventListener('mousedown',handleShowContent)
        window.addEventListener('touchstart',handleShowContent)
    },[])

    return (
        <>
            <button className=" xl:hidden " onClick={()=> setShowContent(true)}>
                {children}
            </button>
            {
                showContent &&
                    <div className="xl:hidden">
                        <div className="overlay absolute left-0 top-0 !min-h-full w-full bg-[#00000054] z-[10]"></div>
                        <motion.span
                            initial={{x : '300px' }}
                            animate={{x: '0px'}}
                            transition={{ duration: 0.5 }}
                            className="!absolute !flex !top-0 !right-0 z-[20] min-h-full  "
                        >
                            <Notifications ref={ref} className="!absolute !flex !top-0 !right-0 z-[20] min-h-full " />
                            <span onClick={()=> setShowContent(false)} className="!absolute !flex !top-[10px] !right-[20px] !z-[50] cursor-pointer text-[20px] text-[#91969b]"><FaXmark /></span>
                        </motion.span>
                    </div>
            }   
        </>
    )
}
