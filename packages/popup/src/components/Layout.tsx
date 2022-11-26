import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

type LayoutProps = {}

const Layout:React.FC<LayoutProps> = () => {
    return (
        <div className="flex flex-col backdrop-blur-sm bg-white/50 rounded-xl w-screen h-screen overflow-hidden">
            <Navbar />
            <div className='p-2 bg-white/30 flex-grow'>
                <Outlet />
            </div>
        </div>
    )
}
 
export default Layout;
