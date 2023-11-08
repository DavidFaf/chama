import { Avatar, Button} from '@mui/material'

import googlelogo from '../../assets/svg/google.svg'

const GoogleButton = () => {
  return (
    <Button color='secondary' size='large' variant='contained' startIcon={<Avatar sx={{height:"20px", width:"20px", marginRight:'20px'}} src={googlelogo}/>} sx={{marginY:2}}>Continue with Google</Button>
  )
}

export default GoogleButton