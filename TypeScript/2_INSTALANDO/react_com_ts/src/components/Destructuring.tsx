import React from 'react'

type Props = {
    title: string
    content: string
    commentQty: number
    tags: string[]
}

const Destructuring = ({title, content, commentQty, tags}: Props) => {
  return (
    <div>
        <h1>{title}</h1>
        <p>{content}</p>
        <p>Quantidade de comentários: {commentQty}</p>
        <div>
            {tags.map(tag => (
                <span key={tag}>#{tag}</span>
            ))}
        </div>
    </div>
  )
}

export default Destructuring