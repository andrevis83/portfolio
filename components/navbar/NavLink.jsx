import Link from "next/link";
import PropTypes from 'prop-types'

import LetterAnimated from "./LetterAnimated";

const NavLink = props => {

    const { href, childrenClassName, childrenText } = props

    return (
        <Link href={href} passHref >
            <LetterAnimated 
                className={ childrenClassName ? childrenClassName : '' } 
                text={ childrenText ? childrenText : '' } 
            />
        </Link>
    )
}

NavLink.propTypes = {
    href: PropTypes.string,
    childrenClassName: PropTypes.string,
    childrenText: PropTypes.string,
}

export default NavLink