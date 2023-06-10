import React from 'react'

function Storeitem({Image, name, Price, colors}) {
  return (
    <div className='storeitem'>
        <div className='itemImg' >
          <img src={Image} alt='' />
        </div>

        <div className='detail'>
          <h1> {name} </h1>
          <p>${Price}</p>
          <label htmlFor="color-select">Select Color:</label>
          <select id="color-select">
            {colors.map((color, index) => (
              <option key={index} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
    </div>
  )
}

export default Storeitem