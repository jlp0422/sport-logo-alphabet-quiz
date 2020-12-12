const DisplayCard = ({ children, borderColor }) => {
  return (
    <div
      className={`flex flex-col justify-around p-10 text-center items-center rounded-2xl border-2 shadow-lg border-${borderColor}-500 bg-gray-100 w-90vw sm:w-50vw h-60vh sm:h-50vh`}
    >
      {children}
    </div>
  )
}

export default DisplayCard
