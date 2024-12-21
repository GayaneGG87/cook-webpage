import React from 'react'

export const TitleComponent = (props) => {
    const {icon, title, description} = props
  return (
    <section>
        {icon}
    <div>
        <h3>{title}</h3>
        {description &&  <p>{description}</p>
        }
    </div>
    </section>
  )
}
