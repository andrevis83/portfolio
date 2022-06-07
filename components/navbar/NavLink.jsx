import Link from "next/link";
import PropTypes from 'prop-types'

import LetterAnimated from "../LetterAnimated";



const NavLink = ({ external = false, href, childrenClassName, childrenText, variants }) => {

    return (
        <Link  href={href} passHref scroll={false}>
            <a 
                href={href} 
                className={`${ childrenClassName ? childrenClassName : '' }`} 
                target={ external ? "_blank" : "_self"} 
                rel={'noreferrer'}
            >
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
    external: PropTypes.bool,
    href: PropTypes.string,
    childrenClassName: PropTypes.string,
    childrenText: PropTypes.string,
}

export default NavLink