import { Link } from '@remix-run/react'
import styles from './styles.css'

export const headerLinks = () => [
  { rel: 'stylesheet', href: styles }
]

export const Header = () => (
  <header className="header">
    <Link to="/" className="header__logo">{`Remix Directory`}</Link>

    <ul className="header__items">
      <li className="header__item">
        <a
          className="header__link"
          href="https://github.com/nshki/remix-directory"
        >
          GitHub
        </a>
      </li>
    </ul>
  </header>
)
