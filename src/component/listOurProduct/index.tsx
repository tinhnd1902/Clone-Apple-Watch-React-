import React from 'react';
import './index.css'
import anh1 from "../../assets/images/product-1.jpg";
import anh2 from "../../assets/images/product-2.jpg";
import anh3 from "../../assets/images/product-3.jpg";
import anh4 from "../../assets/images/product-4.jpg";

const ListOurProduct = () => {

  const listOurProduct = [
    {
      tagImg: anh1,
      tagH4: "Olimus Blue",
      tagh5: "$188.00",
      tagA: "Order Now",
      tagI: "fas fa-long-arrow-alt-right"
    },
    {
      tagImg: anh2,
      tagH4: "Olimus Blue",
      tagh5: "$188.00",
      tagA: "Order Now",
      tagI: "fas fa-long-arrow-alt-right"
    },
    {
      tagImg: anh3,
      tagH4: "Olimus Blue",
      tagh5: "$188.00",
      tagA: "Order Now",
      tagI: "fas fa-long-arrow-alt-right"
    },
    {
      tagImg: anh4,
      tagH4: "Olimus Blue",
      tagh5: "$188.00",
      tagA: "Order Now",
      tagI: "fas fa-long-arrow-alt-right"
    },
    {
      tagImg: anh3,
      tagH4: "Olimus Blue",
      tagh5: "$188.00",
      tagA: "Order Now",
      tagI: "fas fa-long-arrow-alt-right"
    },
    {
      tagImg: anh1,
      tagH4: "Olimus Blue",
      tagh5: "$188.00",
      tagA: "Order Now",
      tagI: "fas fa-long-arrow-alt-right"
    },
  ]

  return (
    <div className='single'>
      {
        listOurProduct.map((lists, index) => {
          return (
            <div className="singleContent" key={index}>
              <img src={lists.tagImg} alt="error Images" />
              <div className="subContent">
                <h4>{lists.tagH4}</h4>
                <h5>{lists.tagh5}</h5>
                <a href="">{lists.tagA} <i className={lists.tagI}></i></a>
              </div>
            </div>
          );
        })
      }
    </div>
  )
}

export default ListOurProduct
