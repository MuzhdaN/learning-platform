

const Card = ({children, bg = 'bg-gray-100 '}) => {
  return (
    <div className={`${bg} p-7 shadow-lg rounded-lg`}>
        {children}
    </div>
  )
}

export default Card