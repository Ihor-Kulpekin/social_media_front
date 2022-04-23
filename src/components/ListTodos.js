import React from 'react';
import styled from "styled-components";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ListItem from "../moleculs/list-item/ListItem";

const ListTodosWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
  
  .container-add {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
  }
  
  .input {
    padding: 10px;
    width: 100%;
    max-width: 350px;
    margin-right: 30px;
    border: 1px solid dodgerblue;
  }
`

const ListTodos = ({todos, value, onChangeHandler, addTodo, deleteTodo}) => {
    return (
        <ListTodosWrapper>
            <div className="container-add">
                <input className="input" onChange={onChangeHandler} value={value}/>
                <AddCircleOutlineIcon onClick={addTodo}/>
            </div>
            {
                todos && todos.length? todos.map((item)=> <ListItem key={item._id} item={item} deleteTodo={()=>deleteTodo(item._id)}/>
                ): <div>NO ITEM</div>
            }
        </ListTodosWrapper>
    );
};

export default ListTodos;
