import Item from "./Item"

export default function ItemList({todoList, toggleTodo, deleteItem} ){
return(
    <>
    <ul className="list">
    {todoList.length == 0 && 'No To Dos'}
    {todoList.map(todo =>{
      return(
      <Item key={todo.id} completed={todo.isCompleted} id={todo.id} title={todo.title} toggleTodo={toggleTodo} deleteItem={deleteItem}/>
      )})}
    </ul>
    </>
)
}