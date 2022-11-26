import React from 'react'
import { Link } from 'react-router-dom';

type NavbarProps = {
    className?: string
}

type NavItemProps = {
    className?: string;
    name: string;
    url: string;
    action: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
    name,
    action,
    url,
    className=""
}) => {
    return (
        <Link to={url}>
            <div onClick={action} className={`${className} cursor-pointer px-4 py-[0.3rem] w-full font-semibold shadow-[0_1px_8px_rgba(0,0,0,0.25)] flex items-center justify-center rounded-3xl bg-white col-span-1`}>
                {name}
            </div>
        </Link>
    )
}

const Navbar: React.FC<NavbarProps> = ({className=''}) => {
    return (
        <div className={`${className} grid grid-cols-2 gap-3 pt-4 pb-3 px-3 justify-between bg-white/40 shadow-gray-500`}>
            <NavItem name="Notes" url="/notes" action={() => {}} />
            <NavItem name="Bookmarks" url="/bookmarks" action={() => {}} />
        </div>
    )
}

export default Navbar;
