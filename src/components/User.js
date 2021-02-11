import React, { memo } from 'react';
import { Link } from "react-router-dom";

function User({id, name}) {
    return (
        <div className="users-card">
            <Link to={{
                pathname: `/albums/${id}`,
                state: {
                    userId: id,
                    userName: name
                }
            }}>
                <div className="users-card__header">
                    {name}
                </div>
                <div className="users-card__footer">
                    Смотреть все альбомы автора
                </div>
            </Link>
        </div>
    );
}

export default memo(User);
