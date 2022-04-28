import react from "react"
import PropTypes from 'prop-types'

const LetterAnimated = react.forwardRef(({className, href, text}, ref) => {

    let lettersElem = [];
    let index = 0;

    for (const letter of text) {

        const delay =  125 * index + 'ms'

        lettersElem.push(
          <span 
            className="animate-wiggle" 
            key={ index }
            style={{ 'animationDelay': delay}}
          >
            { letter }
          </span>);
        index++;
    }

    return (
      <a href={href} className={`${ className ? className : '' }`}>
        <strong className="capitalize">
            {lettersElem}
        </strong>
      </a>
    )
  })

LetterAnimated.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  text: PropTypes.string,
}

export default LetterAnimated;
