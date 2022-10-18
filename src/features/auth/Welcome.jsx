import { Link } from "react-router-dom"

const Welcome = () => {
  
  const date = new Date()
  const today = new Intl.DateTimeFormat("es-AR", { dateStyle: "full", timeStyle: "long"}).format(date)

  const content = (
    <section className="welcome">

      <p>{today}</p>

      <h1>Welcome!</h1>

      <p><Link to="/dash/bookings">Ver Reservas</Link></p>

      <p><Link to="/dash/users"></Link>Ver caracteristicas de usuarios</p>

    </section>
  )
  return content
}

export default Welcome