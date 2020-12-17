const CardHeader = ({ element = 'h1', className, children }) => {
  const Element = element
  const elementToSize = {
    h1: 'text-2xl xs:text-3xl',
    h2: 'text-2xl xs:text-2xl'
  }
  return (
    <Element
      className={`${elementToSize[element]} text-center font-bold ${className}`}
    >
      {children}
    </Element>
  )
}

export default CardHeader
