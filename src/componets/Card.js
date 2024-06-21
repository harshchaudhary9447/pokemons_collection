import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SmallCard from './SmallCard';
import '../Css/Card.css'

const Card = () => {
  const data = useSelector((store) => store.cards);
  const [filterData, setFilterData] = useState(data?.CardDetail || []);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (data && data.CardDetail) {
      const filtered = data.CardDetail.filter((item) =>
        item.name.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilterData(filtered);
    }
  }, [data, inputValue]);

  console.log(data)
  return (
    data && (
      <div>
        <input className='input'
          placeholder='Search your Pokemon'
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <div
          style={{
            display: 'flex',
            alignItems:'center',
            flexWrap:'wrap',
            marginRight:'-150px',
            marginLeft:'50px'
          }}
        >
          {filterData.map((item) => (
            <SmallCard key={item.name} name={item.name} link={item.url} />
          ))}
        </div>
      </div>
    )
  );
};

export default Card;
