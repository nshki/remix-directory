import type { ChangeEventHandler } from 'react'
import { useState } from 'react'
import { LinksFunction } from '@remix-run/node'
import { Container, containerLinks } from '~/components/container'
import { Header, headerLinks } from '~/components/header'
import { Hero, heroLinks } from '~/components/hero'
import { StackGrid, stackGridLinks } from '~/components/stack-grid'
import { Footer, footerLinks } from '~/components/footer'

import { stacks } from '../../content/stacks.json'

export const links: LinksFunction = () => [
  ...containerLinks(),
  ...headerLinks(),
  ...heroLinks(),
  ...stackGridLinks(),
  ...footerLinks()
]

export default function Index () {
  let [searchTerm, setSearchTerm] = useState('')
  let onSearchTermChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchTerm(event.target.value.toLowerCase())
  }

  // Apply a really trivial filtering mechanism for stacks for now. If this
  // project starts housing a much larger number of stacks, we can revisit!
  let filteredStacks = stacks.filter((stack) => {
    let { name, description, tags } = stack
    let hasNameMatch = name.toLowerCase().includes(searchTerm)
    let hasDescriptionMatch = description.toLowerCase().includes(searchTerm)
    let hasTagMatch = tags.includes(searchTerm)
    return hasNameMatch || hasDescriptionMatch || hasTagMatch
  })

  return (
    <Container>
      <Header />

      <main>
        <Hero onSearchTermChange={onSearchTermChange} />
        <StackGrid stacks={filteredStacks} />
      </main>

      <Footer />
    </Container>
  )
}
