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
        <section className={ `${ className ? className : ''} relative mx-auto px-6 md:px-8 lg:px-12 overflow-hidden` } style={{ minHeight: height }}>   
            <div className=" max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">  
                { children }
            </div>
        </section> 
    )
}

Section.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    fixedHeight: PropTypes.bool
}

export default Section
