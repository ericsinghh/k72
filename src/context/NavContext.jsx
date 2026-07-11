import { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const NavbarContext = createContext()
export const NavbarcolorContext = createContext()

const NavContext = ({ children }) => {

    const [navColor, setNavColor] = useState('white')
    const [navOpen, setNavOpen] = useState(false)

    const locate = useLocation().pathname
    useEffect(function () {
        if (locate == '/projects' || locate == '/agence') {
            setNavColor('black')
        } else {
            setNavColor('white')
        }
    }, [locate])

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