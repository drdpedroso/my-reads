import React from 'react'
import Button from '../Button'

const Book = props => {
  return (
    <div>
      {props.title}
      {props.status.map((s, key) => (
        <Button key={props.id + key}
          onClick={() => props.onClick(props.id, s)}
          selected={(props.shelf === s)}
          text={s}
        />
      ))}
    </div>
  )
}

export default Book
