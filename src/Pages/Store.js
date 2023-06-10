import React from 'react'
import { StoreList } from '../helper/StoreList'
import Storeitem from '../Components/Storeitem'
import "../Styles/Store.css"

function Store() {
  return (
    <div className='store' >
        <h1 className='storeTitle'> Our Collection </h1>
        <div className='storeList'>
            {StoreList.map((storeitem, key) => {
                return(
                    <Storeitem
                        key={key}
                        Image={storeitem.Image}
                        name={storeitem.name}
                        Price={storeitem.Price}
                        colors={storeitem.colors}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Store