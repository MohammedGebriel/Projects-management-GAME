import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';
import { FaBars } from "react-icons/fa";
import Navbar from '../../organisms/Navbar';
import { useParams } from 'react-router-dom';

export default function NavbarShow() {
    const [opened, { open, close }] = useDisclosure(false);
    const {id} = useParams()

    return (
        <div>
            <Drawer 
            opened={opened} 
            onClose={close} 
            title=""
            className='h-full'
            size="xs"
            id='notification-drawer'
            // position='right'
            >
                <Navbar nav_id={id} className='flex-col items-center border-none w-full' />
            </Drawer>
            <Button onClick={open}>
                <span className='text-mainColor text-6 mx-auto sm:ml-1.5 block lg:hidden'><FaBars/></span>
            </Button>

        </div>
    )
}
