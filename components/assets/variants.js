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
  
const variantCtaLetters = {
    initial: { letterSpacing: '0.1em', opacity: 0 },
    animate: i => ({ 
        letterSpacing: ['0.1em', '0.5em', '0.1em'],
        opacity: 1,
        transition:{ 
            default: {
              duration: 0.75, 
              delay: 2 + (i * 0.05)
            },
        }
    })
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

const variantsNavlinks = (delay = -1) => {

    return {
        initial: { y: -16, opacity: 0 },
        animate: i => ({ 
            y: 0,
            opacity: 1, 
            transition:{ 
                default: {
                    duration: 0.5, 
                    delay: delay < 0 ?  3 + (i * 0.05) : delay + (i * 0.05)
                },
            }
        })
    }
}

const variantsProjectImage = {
    initial: { scale: 0.85 },
    animate: {
        scale: 1.15,
        transition: {
            delay: 0.5,
            duration: 1.5,
            ease: "easeOut"
        }
    }
}

const variantsProjectSlide = (delay = 0.5) => {
    return  {
        initial: { y: 0 },
        animate: {
            y: '100%',
            transition: {
                delay: delay,
                duration: 1,
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
    variantsProjectImage,
    variantsProjectSlide
}
  