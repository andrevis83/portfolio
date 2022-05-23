const variantsHeroTitle = {
    initial: {
        y: '130%',
    },
    animate: i => ({
        y: 0,
        transition:{ duration: 0.75, delay: i * 0.05 }
    })
  }
  
const variantCtaContainer = {
    initial: { scaleX: 0 },
    animate: {
        originX: 0,
        scaleX: [0, 1.25, 1],
        transition: {
        delay: 2,
        duration: 1.5
        }
    }
}
  
const variantCtaLetters = (delay = 2, duration = 0.75) => {
    
    return { 
        initial: { letterSpacing: '0.1em', opacity: 0 },
        animate: i => ({ 
            letterSpacing: ['0.1em', '0.5em', '0.1em'],
            opacity: 1,
            transition:{ 
                default: {
                duration, 
                delay: delay + (i * 0.05)
                },
            }
        })
    }
}

const variantsLogo = {
    initial: { y: '120%' },
    animate: i => ({ 
        y: 0, 
        transition:{ 
            default: {duration: 0.5, delay: 2.25 + (i * 0.05)},
        }
    })
}

const variantsNavlinks = (delay = 3, duration = 0.5) => {

    return {
        initial: { y: -16, opacity: 0 },
        animate: i => ({ 
            y: 0,
            opacity: 1, 
            transition:{ 
                default: {
                    duration, 
                    delay: delay + (i * 0.05)
                },
            }
        }),
        exit: { y: -16, opacity: 0 }
    }
}

const variantsProjectSlide = (delay = 0.5,  duration = 0.5) => {
    return  {
        initial: { y: 0 },
        animate: {
            y: '100%',
            transition: {
                delay: delay,
                duration,
                ease: "easeOut"
            }
        }
    }
}
  

export {
    variantsHeroTitle, 
    variantCtaContainer, 
    variantCtaLetters,
    variantsLogo,
    variantsNavlinks,
    variantsProjectSlide
}
  