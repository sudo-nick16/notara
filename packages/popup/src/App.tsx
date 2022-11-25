import React from 'react'

type NavItemProps = {
    className?: string;
    name: string;
    action: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
    name,
    action,
    className=""
}) => {
    return (
        <div onClick={action} className={`${className} px-4 py-2 w-full font-semibold shadow-slate-800 flex items-center justify-center rounded-3xl bg-white col-span-1`}>
            {name}
        </div>
    )
}


const App = () => {

  return (
    <div className="flex flex-col backdrop-blur-sm bg-white/50 rounded-xl w-[300px] overflow-hidden">
            <div className="grid grid-cols-2 gap-3 py-3 px-3 justify-between bg-white/40">
                <NavItem name="Notes" action={() => {}} />
                <NavItem name="Bookmarks" action={() => {}} />
            </div>
    </div>
  )
}

export default App
