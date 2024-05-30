
import { PacmanLoader } from 'react-spinners'

const Loader = ({loading}) => {

    const overRide = {
        margin: '100px auto ',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // height: '100vh',
    }
    
  return (
    <PacmanLoader
        color="#6d28d9" 
        cssOverride={overRide}
         loading={loading} 
    />
  )
}

export default Loader