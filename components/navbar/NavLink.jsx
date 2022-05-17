import Link from "next/link";
import PropTypes from 'prop-types'

import LetterAnimated from "../LetterAnimated";



const NavLink = ({ href, childrenClassName, childrenText, variants }) => {

    return (
        <Link href={href} passHref >
            <a href={href} className={`${ childrenClassName ? childrenClassName : '' }`} >
                <LetterAnimated 
                    className={ childrenClassName ? childrenClassName : '' } 
                    text={ childrenText ? childrenText : '' } 
                    variants = {variants}
                />
            </a>
        </Link>
    )
}

NavLink.propTypes = {
    href: PropTypes.string,
    childrenClassName: PropTypes.string,
    childrenText: PropTypes.string,
}

export default NavLink