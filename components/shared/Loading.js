import { motion } from 'framer-motion'

const loadingContainerVariants = {
  start: {
    transition: { staggerChildren: 0.2 }
  },
  end: {
    transition: { staggerChildren: 0.2 }
  }
}

const loadingCircleVariants = {
  start: { y: '0%' },
  end: { y: '100%' }
}

const loadingCircleTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: 'easeInOut'
}

const Loading = ({ loadingDotColor }) => {
  const renderDot = () => (
    <motion.span
      className='block bg-black rounded-full w-8 xs:w-10 h-8 xs:h-10'
      style={{ backgroundColor: loadingDotColor }}
      variants={loadingCircleVariants}
      transition={loadingCircleTransition}
    />
  )
  return (
    <motion.div
      className='flex justify-evenly xs:justify-around items-center w-full h-full min-h-180 xs:w-225 xs:h-280'
      variants={loadingContainerVariants}
      initial='start'
      animate='end'
    >
      {renderDot()}
      {renderDot()}
      {renderDot()}
    </motion.div>
  )
}

export default Loading
