import type { ChangeEventHandler, FC } from 'react'
import { SearchSvg } from '~/components/svgs/search'
import styles from './styles.css'

export const searchLinks = () => [
  { rel: 'stylesheet', href: styles }
]

interface SearchProps {
  placeholder: string
  onSearchTermChange: ChangeEventHandler
}

export const Search: FC<SearchProps> = ({
  placeholder = 'Search',
  onSearchTermChange
}) => (
  <div className="search">
    <div className="search__icon">
      <SearchSvg />
    </div>

    <input
      className="search__input"
      type="search"
      placeholder={placeholder}
      onChange={onSearchTermChange}
    />
  </div>
)
