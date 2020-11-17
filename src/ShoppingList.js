// By: Isaac Giuricich

// appends JSX to an array and then renders it
export default function ShoppingList(props) {
  let items = []
  for (let i = 0; i < props.list.length; i++) {
    items.push(
      <li key={i} id={i}>
        <p>{props.list[i]}</p>
        <img title="Delete Item" alt="delete" onClick={e => { props.onItemDeleted(e) }} src="close.svg"></img>
      </li>
    )
  }

  return (
    <ul id="list-body">
      {items}
    </ul>
  )
}