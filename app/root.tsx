import type { LinksFunction, MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react'
import { title, description, image } from './lib/meta'
import styles from '~/styles/base.css'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',
  ...title('Remix Directory'),
  ...description('Find the Remix stack that works for you.'),
  ...image('https://remix.directory/assets/og.png'),
  'twitter:card': 'summary_large_image'
})

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles }
]

export default function App () {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
