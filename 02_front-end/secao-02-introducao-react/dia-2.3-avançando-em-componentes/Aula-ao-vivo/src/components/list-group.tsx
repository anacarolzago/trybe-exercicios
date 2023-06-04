type ListGroupProps = {
  list: string[]
};

function ListGroup({ list }: ListGroupProps) {
  return (
    <ul className="list-group">
      {list.map((item) => (
        <li className="list-group-item" key={ item }>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default ListGroup;
