import React from 'react'
import { getAllBooks, updateBookById } from '../../services/api'
import styled from 'styled-components'
import Book from '../../components/Book'
import { DragSource } from 'react-dnd'

const Wrapper = styled.div`
  display: flex;
  padding: 20px;
`

const Column = styled.div`
  flex-direction: column;
  flex: 1;
`

export default class Shelf extends React.Component {
  updateBookStatus (id, status) {
    updateBookById(id, status).then(res => this.fetchBooks())
  }
  constructor () {
    super()
    this.state = {
      books: [],
      bookByStatus: {
        currentlyReading: [],
        read: [],
        wantToRead: []
      }
    }
    this.filterBooksByStatus = this.filterBooksByStatus.bind(this)
    this.fetchBooks = this.fetchBooks.bind(this)
    this.updateBookStatus = this.updateBookStatus.bind(this)
  }

  componentDidMount () {
    this.fetchBooks()
  }

  fetchBooks () {
    getAllBooks().then(books => this.setState({books}, () => {
      this.filterBooksByStatus('currentlyReading')
      this.filterBooksByStatus('read')
      this.filterBooksByStatus('wantToRead')
    }))
  }

  filterBooksByStatus (status) {
    const {bookByStatus, books} = this.state
    this.setState(prev => {
      const filteredBooks = books.filter(book => book.shelf === status)
      const newBooksByStatus = {
        ...prev.bookByStatus,
        [status]: filteredBooks
      }
      return {bookByStatus: newBooksByStatus}
    })
  }

  mountBooks () {
    const {bookByStatus} = this.state
    const keys = Object.keys(bookByStatus)
    return keys.map(key => (
      <Column>
        <h3>{key}</h3>
        {bookByStatus[key].map(book => (
          <Book key={book.id} {...book} status={keys} onClick={this.updateBookStatus} />
        ))}
      </Column>
    ))
  }

  render () {
    return (
      <Wrapper>
        {this.mountBooks()}
      </Wrapper>
    )
  }
}
