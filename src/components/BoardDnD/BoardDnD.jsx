import React, { useState } from 'react';
import './BoardDnD.css';
import Cards from '../Cards/Cards.jsx'
import Toolbar from '../Toolbar/Toolbar.jsx'

const BoardDnD = ({ addCard, clearCards }) => {

  //в cardsList записываем ответ на запрос get от API, задания со всеми параметрами
  const [cardsList, setCardsList] = useState(
    [{ title: 'первое задание', id: 111, order: 2 },
    { title: 'второе задание', id: 222, order: 3 },
    { title: 'третье задание', id: 333, order: 4 },
    { title: 'четвёртое задание', id: 444, order: 1 },
    ])
  // карта которая захвачена для переноса
  const [currentCard, setCurrentCard] = useState(null)

  // События, возникающие в перемещаемом объекте (исходный элемент):
  // ondragstart – возникает, когда пользователь начинает перемещать элемент
  // ondrag – возникает во время перемещения элемента
  // ondragend - возникает, когда пользователь заканчивает перемещать элемент
  
  // События, возникающие в объекте-приемнике:
  // ondragenter - возникает, когда перемещаемый элемент входит в принимающий объект
  // ondragover - возникает, когда перемещаемый элемент проходит над принимающим объектом
  // ondragleave - возникает, когда перемещаемый элемент покидает принимающий объект
  // ondrop - возникает, когда пользователь отпускает перемещаемый элемент
  function dragEndHandler(e) {
    e.currentTarget.classList.remove('boardDnD__card_OverHandler')
    e.target.classList.remove('boardDnD__card_OverHandler')
  }

  function dragOverHandler(e) {
    e.preventDefault();
    e.currentTarget.classList.add('boardDnD__card_OverHandler')
  }

  function dragStartHandler(e, card) {
    setCurrentCard(card)
    e.currentTarget.classList.add('boardDnD__card_dragStart')
  }

  function dropHandler(e, card) {
    e.preventDefault()
    setCardsList(cardsList.map(c => {
      console.log(c)
      if (c.id === card.id) {
        return { ...c, order: currentCard.order }
      }
      if (c.id === currentCard.id) {
        return { ...c, order: card.order }
      }
      return c
    }))
    e.currentTarget.classList.remove('boardDnD__card_OverHandler')
  }
  //функция сортировки применяемая для упорядочивания карт для отрисовки после перетпскивания
  const sortCard = (a, b) => {
    if (a.order > b.order) {
      return 1
    } else {
      return -1
    }
  }

  return (<div className='boardDnD'>
    {cardsList.sort(sortCard).map(card => <div className={`boardDnD__card `} //сначала сортируем карты по порядку (order), затем перебираем массив для отрисовки карточек
      draggable={true}
      onDragEnd={(e) => dragEndHandler(e)}
      onDragLeave={(e) => dragEndHandler(e)}
      onDragOver={(e) => dragOverHandler(e)}
      onDragStart={(e) => dragStartHandler(e, card)}
      onDrop={(e) => dropHandler(e, card)}>
      <h3 className='boardDnD__card-title'>{card.title}</h3>
    </div>)}
  </div>)


  //на потом!!!
  //   return (
  //     <div className="boardDnD">
  //       <div className="boardDnD__column boardDnD__column_left">
  //         <Toolbar addCard={addCard} clearCards={clearCards} />
  //       </div>
  //       <div className="boardDnD__column boardDnD__column_center">
  //         <Cards cards={[
  //           { title: 'первое dasdsadfsafsdafsdafdsaf задание', id: 111 },
  //           { title: 'второе задание', id: 222 },
  //         ]} title='Выполнить' />
  //       </div>
  //       <div className="boardDnD__column">
  //         <Cards cards={[
  //           { title: 'первое ujnjdjt задание', id: 111 },
  //           { title: 'второе зfghfhfhgf gfdgdgdg адание', id: 222 },
  //         ]} title='Готово' />
  //       </div>
  //     </div>
  //   );
};

export default BoardDnD;

