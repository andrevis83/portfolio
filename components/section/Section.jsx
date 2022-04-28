import {useState, useEffect} from "react"
import PropTypes from 'prop-types'

import Lights from "./Lights"

const Section = props => {

    const {className = null, fixedHeight = false, text = null} = props

    const [height, setHeight] = useState('auto');

    useEffect( () => {
        
        if (fixedHeight) {

            setHeight(window.innerHeight);

            window.addEventListener('resize', () => setHeight(window.innerHeight))
        }

        return () => {
            if (fixedHeight) { window.removeEventListener('resize', () => setHeight('auto'))} 
        }

    }, [])

    return (
        <div className={ `${ className ? className : ''} relative container mx-auto flex items-center` } style={{ height: height }}>
             <Lights />  
            { text && 
                <div className="text-indigo-50 text-xl w-10/12 mx-auto relative">
                    {text}
                </div>
            }
        </div> 
        
    )
}

Section.propTypes = {
    className: PropTypes.string,
    fixedHeight: PropTypes.bool
}

export default Section
