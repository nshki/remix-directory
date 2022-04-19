import type { ChangeEventHandler, FC } from 'react'
import { Search, searchLinks } from '~/components/search'
import styles from './styles.css'

export const heroLinks = () => [
  { rel: 'stylesheet', href: styles },
  ...searchLinks()
]

interface HeroProps {
  onSearchTermChange: ChangeEventHandler
}

export const Hero: FC<HeroProps> = ({ onSearchTermChange }) => (
  <article className="hero">
    <h1 className="hero__heading">
      {`Find the `}
      <a href="https://remix.run/stacks">{`Remix stack`}</a>
      {` that works for you. Or `}
      <a href="https://github.com/nshki/remix-directory">add your own</a>
      {`.`}
    </h1>

    <Search
      placeholder="Search stacks"
      onSearchTermChange={onSearchTermChange}
    />
  </article>
)
