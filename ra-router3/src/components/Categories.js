import { Link, Outlet } from 'react-router-dom'

export default function Categories() {
    return (
        <div>
            <h1>Categories</h1>
            <ul>
                <li>
                    <Link to={'Technologie'}>Categorie : Technologie</Link>
                </li>
                <li>
                    <Link to={'Cuisine'}>Categorie : Cuisine</Link>
                </li>
                <li>
                    <Link to={'Voyages'}>Categorie : Voyages</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}