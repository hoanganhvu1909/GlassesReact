import React, { useState } from 'react';
import glassesData from '../Data/dataGlasses.json';
const Content = () => {
  const [glassesDisplay, setGlassesDisplay] = useState(null);
  const [glassesInfo, setGlassesInfo] = useState(null);

  const handleChooseGlasses = (item) => {
    setGlassesDisplay(item.url);
    setGlassesInfo(item);
  };

  const renderGlasses = () => {
    return glassesData.map((item) => (
      <div className="mx-4" key={item.id}>
        <div className="glassesItem" onClick={() => handleChooseGlasses(item)}>
          <img src={item.url} alt="glasses" width={'100%'} />
        </div>
      </div>
    ));
  };

  return (
    <div className="container mx-auto">
      <div className="models flex justify-evenly py-14">
        <div className="model left">
          <img src="./glassesImage/model.jpg" alt="model" />
          {glassesDisplay && (
            <div className="glassesDisplay">
              <img className="imgGlasses" src={glassesDisplay} alt="glasses" />
            </div>
          )}
          {glassesInfo && (
            <div className="glassesInfo">
              <h3>{glassesInfo?.name}</h3>
              <p>{glassesInfo?.desc}</p>
            </div>
          )}
        </div>
        <div className="model right">
          <img src="./glassesImage/model.jpg" alt="model" />
        </div>
      </div>
      <div className="glassesContainer container mx-auto max-w-5xl">
        <div className="flex flex-row">{renderGlasses()}</div>
      </div>
    </div>
  );
};

export default Content;
