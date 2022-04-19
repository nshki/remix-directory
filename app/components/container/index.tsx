import type { FC } from 'react'
import styles from './styles.css'

export const containerLinks = () => [
  { rel: 'stylesheet', href: styles }
]

export const Container: FC = ({ children }) => (
  <div className="container">
    {children}
  </div>
)
