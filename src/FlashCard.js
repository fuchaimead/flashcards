import React from 'react';
import CreateCard from './CreateCard';

class FlashCard extends React.Component {
  state = {
    cards: [
      {question: 'What is React?', answer:'React is a library that makes it easy to design a UI that is data driven.' },
      {question:'What is state?', answer: 'State is reserved for data that can be changed over time.'}, 
      {question: 'What are props?', answer: 'Props are properties that are used to pass data from parent to children.'},
      {question:'Who uses React?', answer:'Facebook and many other websites. React was invented by a developer who worked at Facebook to render data as HTML elements.'}
    ],
    showing: [],
    isShowing: false,
  }

addCard = (card) => {
  this.setState({ cards: [...this.state.cards, card]})
}
  
showAnswer(i) {
  const {isShowing, showing} = this.state
  this.setState({ isShowing: !isShowing, showing: [i]})
}

deleteCard(i) {
  alert('Are you sure you want to delete?')
  const {cards} = this.state
  cards.splice(i, 1)
  this.setState({card: cards}) 
  
}

editCard(i){
  
}

createCard() {
 console.log("hello")
}


render(){
  const {isShowing, showing} = this.state
  return ( 
    <div>
      <CreateCard createCard={this.addCard} />
       {this.state.cards.map((card, i) => {
         if (isShowing && showing.includes(i)) {
           return(
            <div key={i} >
            <h4><strong>{card.question}</strong></h4>
            <p>{card.answer}</p>
            <button onClick={() => this.showAnswer(i)}>Close Answer</button>
            <button onClick={() => this.deleteCard(i)}> Delete </button>
             <button onClick={() => this.editCard(i)}> Edit </button>
            </div>
           )
         } else {
            return(
            <div key={i}>
            <h4><strong>{card.question}</strong></h4>
            <button onClick={() => this.showAnswer(i)}>Show Answer</button>
            <button onClick={() => this.deleteCard(i)} > Delete </button>
             <button onClick={() => this.editCard(i)}> Edit </button>
            </div>
          ) 
         }  
        
      })}
    </div>
   )
  }
}

export default FlashCard;