import React from 'react';
import styled from "styled-components";
import DeleteIcon from '@material-ui/icons/Delete';

const ListItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  
  .name {
    margin-right: 50px;
  }
`

const ListItem = ({item, deleteTodo}) => {
    return (
        <ListItemWrapper>
            <div className="name">
                {item.name}
            </div>
            <div onClick={deleteTodo}>
                <DeleteIcon/>
            </div>
        </ListItemWrapper>
    );
};

export default ListItem;
