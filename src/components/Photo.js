import React from 'react';

function Photo({id, title, url, thumbnailUrl}) {

    const getBigPicture = (evt) => {
        evt.preventDefault();

        const thisItem = evt.currentTarget.parentElement;

        let src = thisItem.getAttribute('href');
        console.log(thisItem);
        // let nextPicture = thisItem.parentElement.nextElementSibling.querySelector('a').getAttribute('href');

        const modalImage = document.createElement('div');
        modalImage.classList.add('photos__overlay');
        let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        let height = window.innerHeight;
        let width = window.innerWidth;
        modalImage.style = `width: ${width}px;height:${height}px;min-height:100vh;top:${posTop}px;opacity:0;`;
        document.querySelector('.photos').insertAdjacentElement('afterend', modalImage);
        const imageWrap = document.createElement('div');
        imageWrap.classList.add('photos__image-wrap');
        modalImage.insertAdjacentElement('afterbegin', imageWrap);
        imageWrap.style =`height: ${height}px;padding:20px;`;
        const image = document.createElement('img');
        image.setAttribute('src', src);
        imageWrap.insertAdjacentElement('afterbegin', image);
        image.style = `opacity:0;`;
        document.querySelector('body').style.overflow = 'hidden';
        modalImage.addEventListener('click', (evt) => {
            modalImage.remove();
            document.querySelector('body').style.overflow = 'unset';
        });
        setTimeout(() => {
            modalImage.style = `width: ${width}px;height:${height}px;top:${posTop}px;opacity:1;transition:0.4s;`;
            setTimeout(() => {
                image.style = `opacity:1;transition:0.4s;height:100%`
            }, 150)
        }, 100);


        let move = null;

        image.addEventListener("touchstart", function (evt) {
            move = evt;
        });
        image.addEventListener("touchmove", function (evt) {
            let y = evt.touches[0].pageY - move.touches[0].pageY;
            // let x = evt.touches[0].pageX - move.touches[0].pageX;
            image.style.top = `${y}px`;
            if (y < -124) {
                modalImage.style.opacity = '0';
                setTimeout(() => {
                    modalImage.remove();
                    document.querySelector('body').style.overflow = 'unset';
                }, 200);
            } else if (y > 115) {
                modalImage.style.opacity = '0';
                setTimeout(() => {
                    modalImage.remove();
                    document.querySelector('body').style.overflow = 'unset';
                }, 200);
            }
            // image.style.left = `${x}px`;
        });
        image.addEventListener("touched", function (evt) {
            move = null;
        });
    };

    return (
        <div className="photos__item">
            <span>{title}</span>
            <a href={url}>
                <img src={thumbnailUrl && thumbnailUrl} alt={title} onClick={getBigPicture}/>
            </a>
        </div>
    );
}

export default Photo;
