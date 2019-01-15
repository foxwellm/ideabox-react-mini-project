import React from 'react'

const IdeaCard = ({ name, description, id, removeIdea }) => (
  <div className="IdeaCard">
    <h1>{name}</h1>
    <p>{description}</p>
  <div className="remove-btn" onClick={() => removeIdea(id)}>Remove</div>
  </div>
)

export default IdeaCard;