import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coin from './Coin';
import analytik from "./imgs/analytik.png"
import anonym from "./imgs/anonym.png"
import bergbau from "./imgs/bergbau.png"
import bitcoin from "./imgs/bitcoin.png"
import brieftasche from "./imgs/brieftasche.png"
import schlüssel from "./imgs/digitaler-schlussel.png"

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false'
      )
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <div className="hero min-h-screen bg-base-200 flex flex-col">
      <div className="hero-content text-center">
        <div className="max-w-7xl flex items-center">
          <img src={bitcoin} alt="" className='h-24 w-24 p-5' />
          <h1 className="text-4xl font-bold py-10">TRACK YOUR CRYPTO CURRENCIES</h1>
          <img src={bitcoin} alt="" className='h-24 w-24 p-5' />
        </div>
      </div>

      <input type="text" placeholder="Type here" className="input w-full max-w-xs my-10 bg-neutral-content" onChange={handleChange}/>

      <div className="max-w-7xl overflow-x-auto">
        <table className="table ">
            {/* head */}
            <thead className=''>
            <tr className=''>
              <th className='font-bold text-xl text-white'>COIN</th>
              <th className='font-bold text-xl text-white'>PRICE</th>
              <th className='font-bold text-xl text-white' >24H</th>
              <th className='font-bold text-xl text-white xs:hidden md:flex'>MARKET CAP</th>
            </tr>
            </thead>
            <tbody>
            {/* row 1 */}
            {filteredCoins.map(coin => {
              return (
                <Coin
                  key={coin.id}
                  name={coin.name}
                  price={coin.current_price}
                  symbol={coin.symbol}
                  marketcap={coin.total_volume}
                  volume={coin.market_cap}
                  image={coin.image}
                  priceChange={coin.price_change_percentage_24h}
                />
              );
            })}
            </tbody>
        </table>
      </div>
    </div>
    </>
  );
}

export default App;
