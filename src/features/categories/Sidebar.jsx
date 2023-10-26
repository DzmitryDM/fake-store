import { NavLink } from 'react-router-dom'
import styles from './../../styles/Main.module.css'

function Sidebar({id,name}) {
	return (
		<nav>
			<NavLink
				to={`/products/${id}`}
				className={({ isActive }) =>
					isActive ? styles.active : styles.sidebar_color
				}
			>
				{name}
			</NavLink>
		</nav>
	)
}

export default Sidebar
