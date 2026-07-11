import { createContext, useState } from 'react'
import 
export const NavbarContext = createContext()
export const NavbarcolorContext = createContext()

const NavContext = ({ children }) => {

    const [navOpen, setNavOpen] = useState('white')
    const [navOpen, setNavOpen] = useState(false)


    return (
        <div>
            <NavbarContext.Provider value={[navOpen, setNavOpen]}>
                <NavbarcolorContext.Provider value={[color, setColor]}>
                    {children}
                </NavbarcolorContext.Provider>
            </NavbarContext.Provider>
        </div>
    )
}
export default NavContext 