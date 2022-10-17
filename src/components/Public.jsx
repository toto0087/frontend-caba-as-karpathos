import { Link } from 'react-router-dom'

const Public = () => {
  return (
    <section className='public'>
      <h1>Public</h1>
      <footer>
        <Link to="/login">Login de Clientes/Empleados</Link>
      </footer>
    </section>
  )
}

export default Public