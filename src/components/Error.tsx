type ErrorProps = {
  children: React.ReactNode
}

function Error({ children } : ErrorProps) {
  return (
    <p className="text-center my-4 bg-red-600 text-white font-bold p-3 uppercase text-sm rounded-md">{ children }</p>
  )
}

export default Error;