import React, { useEffect, memo} from 'react';
import {useSelector, useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import Album from "../components/Album";
import {fetchAlbums, fetchPhotos} from "../redux/actions/data";

function Albums(props) {
    const userId = props.location.state.userId;
    const userName = props.location.state.userName;
    const dispatch = useDispatch();
    const albums = useSelector(({ fetchData }) => fetchData.albums);

    useEffect(() => {
        dispatch(fetchAlbums(userId));
    }, [userId, dispatch]);

    const fetchingAlbumCover = React.useCallback((id) => {
        dispatch(fetchPhotos(id));
    }, [dispatch]);

    return (
        <section className="albums">
            <h1>Список альбомов {userName}</h1>
            <Link to="/" className="link">Вернутся к спискам авторов</Link>
            <div className="albums__wrapper">
                {
                    albums.map((obj) => (
                        <Album
                            key={obj.id}
                            albumId={obj.id}
                            title={obj.title}
                            userId={userId}
                            fetchingAlbumCover={fetchingAlbumCover(obj.id)}
                        />
                    ))
                }
            </div>
        </section>
    );
}

export default memo(Albums);
