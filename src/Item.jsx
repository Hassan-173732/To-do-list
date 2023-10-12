export default function Item({completed,id,title,toggleTodo,deleteItem}){
    return(
    <>
    <li key={id}>
      <label>
      <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
        />
      {title}
      </label>
      <button className="btn btn-danger" onClick={() => deleteItem(id)}>Delete</button>     
      </li>
    </>
    )

}