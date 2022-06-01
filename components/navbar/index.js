import NavLink from "./NavLink";

import { variantsLogo, variantsNavlinks } from "../assets/variants";

const Navbar = () => {

    return (
        <nav className="fixed top-0 left-0 right-0 h-14 tracking-wide z-1000">
            <div className="container mx-auto px-6 md:px-8 py-2 md:py-0 h-full flex justify-between items-center md:text-xl lg:text-2xl">
                <div>
                    <NavLink 
                        href="/" 
                        childrenClassName="text-cyan-50" 
                        childrenText="Andrea Visentini" 
                        variants={variantsLogo}
                    />
    
                </div>
                <div className="flex">
                    <NavLink 
                        href="/works" 
                        childrenClassName="text-cyan-50" 
                        childrenText="Works" 
                        variants={variantsNavlinks()}
                    />                   
                </div>
            </div>
        </nav>
    )
}

export default Navbar;