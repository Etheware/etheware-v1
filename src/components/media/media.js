import React from 'react';
import '../media/data'


const InfoSection = ({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headline,
    darkText,
    description,
    buttonLabel,
    img,
    alt,
    primary,
    dark,
    dark2
}) => {
    return (
        <>
            <div className="info__container" lightBg={lightBg} id={id}>
                <div className="info__wrapper">
                    <div className="info__row" imgStart={imgStart}>
                        <div className="column1">
                            <div className="text__wrapper">
                                <div className="topline">{topLine}</div>
                                <div className="heading" lightText={lightText}>{headline}</div>
                                <div className="subtitle" darkText={darkText}>{description}</div>
                                <div className="button__wrap">
                                    <button to='/contact'>
                                        {buttonLabel}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="column2">
                            <div className="img__wrap">
                                <img src={img} alt={alt} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InfoSection;
