import { Link } from 'react-router'

const TopNavbar = () => {
  return (
    <nav className='bg-sky-950 text-sky-100 flex justify-center gap-8'>
      <Link to="/">Home</Link>
      <Link to="/marketplace">Products</Link>
      <Link to="/users">Users</Link>
      <Link to="/contacts">Contacts</Link>
    </nav>
  )
}

export default TopNavbar