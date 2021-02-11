import React  from 'react';
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";

function Album({albumId, title, userId}) {
    const photoCount = useSelector(({ fetchData }) => fetchData.countPhoto);
    const albumCover = useSelector(({ fetchData }) => fetchData.albumCover);

    const addedProducts = Object.keys(albumCover).map((key) => {
        return albumCover[key].albumCover[0][0];
    });

    return (
        <div className="albums__item">
            <Link to={{
                pathname: `/photos/${albumId}`,
                state: {
                    albumId: albumId,
                    albumTitle: title,
                    userId: userId
                }
            }}>
                {
                    addedProducts.map((cover) => (
                        albumId === cover.albumId &&
                        <img key={cover.id} src={cover.thumbnailUrl} alt=""/>
                    ))
                }
                <p>{title} <span>({photoCount})</span></p>
            </Link>
        </div>
    );
}

export default Album;
