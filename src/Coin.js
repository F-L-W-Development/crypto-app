import React from 'react';

const Coin = ({
  name,
  price,
  marketcap,
  image,
  priceChange
}) => {
  return (
    <>
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                    </div>
                </div>
            </td>
            <td>
                ${price}
            </td>
            <td>
                {priceChange < 0 ? (<p className='w-full text-red font-medium '>{priceChange.toFixed(2)}%</p>) : (<p className='w-full text-green font-medium'>{priceChange.toFixed(2)}%</p>)}
            </td>
            <td className='xs:hidden md:flex'>
                <span className='font-bold'>Mkt Cap: </span> ${marketcap.toLocaleString()}
            </td>
        </tr>
    </>
  );
};

export default Coin;