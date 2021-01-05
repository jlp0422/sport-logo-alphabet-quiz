import Head from 'next/head'

const Layout = ({ children, primaryColor = '', secondaryColor, tertiaryColor }) => {
  // length > 5 means it has actual rgb values
  const [mainStyles, footerStyles] = primaryColor.length > 5
    ? [
        { backgroundColor: primaryColor },
        {
          backgroundColor: secondaryColor,
          color: primaryColor,
          borderColor: tertiaryColor
        }
      ]
    : [{}, {}]

  return (
    <div
      className='mx-auto flex flex-col justify-center items-center min-h-screen bg-green-900'
      style={mainStyles}
    >
      <Head>
        <title>Sport Logo Alphabet Quiz</title>
        {/* <link rel='icon' href='/favicon.ico' /> */}
      </Head>
      {children}
      {/* <footer
        className='absolute bottom-0 w-full h-12 flex justify-center items-center border-t border-solid border-gray-400 text-gray-400 bg-green-900'
        style={footerStyles}
      >
        Built by Jeremy Philipson
      </footer> */}
    </div>
  )
}

export default Layout
