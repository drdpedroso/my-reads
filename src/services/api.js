const BASE_URL = 'https://reactnd-books-api.udacity.com'

const getToken = () => {
  return String(Math.floor(Math.random() * 10E8)) // Generate random number (just a filler for a numeric token)
}

const headers = {
  'Accept': 'application/json',
  'Authorization': 'pedroso1234'
}

export const getAllBooks = () => (
  fetch(`${BASE_URL}/books`,
    { headers })
    .then(res => res.json())
    .then(data => data.books)
)

export const getBookById = id => (
  fetch(`${BASE_URL}/books/${id}`,
    { headers })
    .then(res => res.json())
    .then(data => data.book)
)

export const updateBookById = (id, shelf) =>
  fetch(`${BASE_URL}/books/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ shelf })
  }).then(res => res.json())

export const searchBook = (query, maxResults) =>
  fetch(`${BASE_URL}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query, maxResults })
  }).then(res => res.json())
    .then(data => data.books)
