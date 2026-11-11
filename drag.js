// 拖拽功能：卡片在看板列之间拖动，自动保存到localStorage
const cards = document.querySelectorAll('.task-card');
const columns = document.querySelectorAll('.kanban-column');

cards.forEach(card => {
  card.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('cardId', card.dataset.id);
    setTimeout(()=>{
      card.style.opacity = '0.4';
    },0)
  })
  card.addEventListener('dragend', ()=>{
    card.style.opacity = '1';
  })
})

columns.forEach(col => {
  col.addEventListener('dragover', (e)=>{
    e.preventDefault();
  })
  col.addEventListener('drop', (e)=>{
    e.preventDefault();
    const cardId = e.dataTransfer.getData('cardId');
    const dragCard = document.querySelector(`[data-id="${cardId}"]`);
    col.appendChild(dragCard);
    saveBoardData();
  })
})

function saveBoardData(){
  const data = {};
  columns.forEach(col=>{
    const colId = col.dataset.status;
    const cardList = [];
    col.querySelectorAll('.task-card').forEach(card=>{
      cardList.push({
        id: card.dataset.id,
        title: card.innerText
      })
    })
    data[colId] = cardList;
  })
  localStorage.setItem('kanban', JSON.stringify(data));
}