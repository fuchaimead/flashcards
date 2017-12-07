import React from 'react';

class CreateCard extends React.Component {
state = {question: '', answer: '', id: 4}

createCard = (e) => {
  e.preventDefault()
  const {question, answer, id} = this.state;
  this.setState({ id: id + 1})
  const card = {question, answer, id}
  if (card !== null) {
  this.props.createCard(card);  
  this.setState({ question: '', answer: ''});
  }
}

handleChange = (e) => {
  let {name, value } = e.target;
  this.setState({ [name]: value })
 
}

render(){
  const {question, answer} = this.state;
  return (
    <div> 
      <p> Add your own question </p>
    <form onSubmit={this.createCard}>
      <input name="question" value={question} placeholder="write a question" onChange={this.handleChange} />
      <input name="answer" value={answer} placeholder="write an answer" onChange={this.handleChange} />
      <button type="submit"> Create Card </button>
    </form>
    </div>
  )
  }
}

export default CreateCard