const CardHeader = ({ element = 'h1', className, children }) => {
  const Element = element
  return (
    <Element className={`text-3xl text-center font-bold ${className}`}>
      {children}
    </Element>
  )
}

export default CardHeader
