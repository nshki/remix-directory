import styles from './styles.css'

export const footerLinks = () => [
  { rel: 'stylesheet', href: styles }
]

export const Footer = () => (
  <footer className="footer">
    <p>
      {`Made with ❤ by `}
      <a href="https://nshki.com">{`Nishiki Liu`}</a>
    </p>
  </footer>
)
