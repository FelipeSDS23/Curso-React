import React from 'react'

type Props = {
    title: string
    content: string
    commentQty: number
    tags: string[]
    // 8 - enum
    category: Category
}

export enum Category {
  JS = "JavaScript",
  TS = "TypeScript",
  P = "Python",
}

const Destructuring = ({title, content, commentQty, tags, category}: Props) => {
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
        <h4>Categoria: {category}</h4>
    </div>
  )
}

export default Destructuring