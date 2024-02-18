import BoardDnD from '../BoardDnD/BoardDnD.jsx';

function Main({ addCard, clearCards }) {


  return (
    <div className="main">
      <BoardDnD addCard={addCard} clearCards={clearCards} />
    </div>
  );
}

export default Main;








