/**
 * Returns all meta tags associated with a page title.
 */
export function title (text: string) {
  return {
    title: text,
    'twitter:title': text
  }
}

/**
 * Returns all meta tags associated with a page description.
 */
export function description (text: string) {
  return {
    description: text,
    'og:description': text,
    'twitter:description': text
  }
}

/**
 * Returns all meta tags associated with a page image.
 */
export function image (url: string) {
  return {
    'og:image': url,
    'twitter:image': url
  }
}
