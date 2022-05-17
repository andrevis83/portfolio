import {useState, useEffect} from "react"
import PropTypes from 'prop-types'


const Section = ({children, className = null, fixedHeight = false}) => {

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
        <section className={ `${ className ? className : ''} relative container mx-auto px-6 md:px-0 overflow-hidden` } style={{ minHeight: height }}>     
            { children }
        </section> 
    )
}

Section.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    fixedHeight: PropTypes.bool
}

export default Section
