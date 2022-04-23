import React, {useEffect, useState} from 'react';
import {api} from "../api/api";
import {useDispatch, useSelector} from "react-redux";
import {logout, refreshToken} from "../actions/actions";
import Header from "../components/header/Header";
import decodeToken from "../utils/decodeToken";
import ListTodos from "../components/ListTodos";

const ProfilePage = () => {
    const {user} = useSelector((state)=>state.user)
    const dispatch = useDispatch();
    const [todos, setTodos] = useState();
    const [value, setValue] = useState('');
    const [error, setError] = useState('');
    const[refresh, setRefresh] = useState(false);
    const[added, setAdded] = useState(false);
    const[deleted, setDeleted] = useState(false);

    const getTodos = () => {
        const decodedUser = decodeToken(user.accessToken);
        if(Date.now() >= decodedUser.exp * 1000){
            setRefresh(true)
            api.refreshToken(user.refreshToken).then((response)=>{
                dispatch(refreshToken(response));
            }).finally(()=>{
                setRefresh(false)
            })
        }else {
            api.getTodos(user.accessToken).then((response)=>{
                if(response.error){
                    throw new Error(response.error)
                }
                setTodos(response)
            }).catch((error)=>{
                setError(error)
            })
        }
    }

    const logoutFunc = ()=>{
        dispatch(logout())
    }

    const onChangeHandler = (event) => {
     setValue(event.target.value);
    }

    const addTodo = async () => {
        if(value){
            setAdded(true)
            await api.addTodo(value, user.accessToken);
            setAdded(false)
        }
    }

    const deleteTodo = async (id) => {
        setDeleted(true)
        await api.deleteTodo(id, user.accessToken);
        setDeleted(false)
    }

    useEffect(getTodos,[refresh, added, deleted])

    return (
        <>
            <Header logoutFunc={logoutFunc} user={decodeToken(user.accessToken)}/>
            <ListTodos todos={todos} onChangeHandler={onChangeHandler} value={value} addTodo={addTodo} deleteTodo={deleteTodo}/>
        </>
    );
};

export default ProfilePage;
