import React, { useEffect, useState } from 'react';
import '../Css/SmallCard.css';

const SmallCard = ({ link, name }) => {
  const [myData, setMyData] = useState(null);

  async function fetchCardData() {
    const CardData = await fetch(link);
    const JsonData = await CardData.json();
    setMyData(JsonData);
  }

  useEffect(() => {
    fetchCardData();
  }, []);

  useEffect(() => {
   // console.log({ myData });
  }, [myData]);


  return (
   
    myData && (
        <div className='head'>
      <div className="card">
        <h1 className="card-header">{myData?.name}</h1>
        <div className="ability-type-container">
          <div className="ability-container">
            <h2 className="sub-header">Abilities</h2>
            {myData?.abilities.map((item, index) => (
              <h3 key={index} className="ability-item">{item?.ability?.name}</h3>
            ))}
          </div>
          <div className="type-container">
            <h2 className="sub-header">Types</h2>
            {myData?.types.map((item, index) => (
              <h3 key={index} className="type-item">{item?.type?.name}</h3>
            ))}
          </div>
        </div>
        <div className="image-container">
          <img
            src={myData?.sprites?.other?.home?.front_default}
            alt={`${name} sprite`}
            className="card-image"
          />
        </div>
      </div>
      </div>
    )
  
  );
};


export default SmallCard;
