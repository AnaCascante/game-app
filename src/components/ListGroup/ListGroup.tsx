import { useState } from "react";
import "./ListGroup.css";
import styled from "styled-components";

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 0.5rem 1rem;
  background: ${(props) => (props.active ? "#0d6efd" : "none")};
`;

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <List className="list-group">
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
