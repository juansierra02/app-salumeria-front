import { useEffect } from 'react'
import { useAuthContext } from '../Auth/Auth'

function Logout() {
    const { logout } = useAuthContext()
    useEffect(() => logout())
    return null
}

export default Logout
