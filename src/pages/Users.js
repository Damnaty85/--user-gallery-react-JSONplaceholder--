import React, { useEffect } from 'react';
import {useSelector, useDispatch} from "react-redux";
import User from "../components/User";
import { fetchUsers } from "../redux/actions/data";

function Users() {
    const dispatch = useDispatch();
    const users = useSelector(({ fetchData }) => fetchData.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div className="user__wrapper">
            <h1>Список авторов</h1>
            {
                users.map((obj) => (
                    <User key={obj.id} id={obj.id} name={obj.name}/>
                ))
            }
        </div>
    );
}

export default Users;
