import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import Photo from "../components/Photo";
import { fetchPhotos } from "../redux/actions/data";

function Photos(props) {
    const albumId = props.location.state.albumId;
    const userId = props.location.state.userId;
    const albumTitle = props.location.state.albumTitle;
    const dispatch = useDispatch();
    const photos = useSelector(({ fetchData }) => fetchData.photos);

    useEffect(() => {
        dispatch(fetchPhotos(albumId));
    }, [albumId, dispatch]);

    return (
        <section className="photos">
            <h1>Фото из альбома {albumTitle}</h1>
            <Link to={{
                pathname: `/albums/${userId}`,
                state: {
                    userId: userId,
                }
            }} className="link">вернуться к альбомам</Link>
            <div className="photos__wrapper">
                {
                    photos.map((obj) => (
                        <Photo
                            {...obj}
                            key={obj.id}
                        />
                    ))
                }
            </div>
        </section>
    );
}

export default Photos;
