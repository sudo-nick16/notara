import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

type LayoutProps = {}

const Layout:React.FC<LayoutProps> = () => {
    return (
        <div className="flex flex-col backdrop-blur-sm bg-white/50 rounded-xl w-[300px] overflow-hidden shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            <Navbar />
            <div className='p-2'>
                <Outlet />
            </div>
        </div>
    )
}
 
export default Layout;
