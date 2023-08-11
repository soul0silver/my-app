
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import './Product.css'
import data from "./product";
import { AppContext } from "../Context/AppContext";
const Flowers = (i) => {
     const { item, setDetail } = useContext(AppContext);
     const [prod, setProd] = useState([]);
     useEffect(() => {
          setProd(data.product)

     }, []);

     //Sắp xếp
     function compareValues(key, order) {
          return function (a, b) {
               if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                    // nếu không tồn tại
                    return 0;
               }

               const varA = (typeof a[key] === 'string') ?
                    a[key].toUpperCase() : a[key];
               const varB = (typeof b[key] === 'string') ?
                    b[key].toUpperCase() : b[key];

               let comparison = 0;
               if (varA > varB) { comparison = 1; }

               else if (varA < varB) { comparison = -1; }
               return (
                    (order === 'desc') ? (comparison * -1) : comparison
               );
          };
     };
     const [sort, setSort] = useState('');
     const reviewdetail = (p) => {
          setDetail(p)
     }

     return (
          <div className="product">
               <div className="product_container">
                    <div className="filter">
                         <div className="filter_container">
                              
                              <div className="filter_by" >
                                   <h3 style={{textAlign:'center'}}>SORT BY PRICE</h3>
                                   <div className="choice">
                                        <select style={{ width: '140px', height: '20px',marginTop:'5px' }} onChange={(e) => setSort(e.target.value)}>
                                             <option value=""></option>
                                             <option value="asc">Lowest to Highest</option>
                                             <option value="desc">Highest to Lowest</option>

                                        </select>
                                   </div>

                              </div>
                              <div className="filter_by">
                                   <h3 style={{textAlign:'center'}}>FILTTER BY SIZE</h3>
                                   <div className="filter_by_container">
                                   <div className="choice">
                                        <input type="radio" name="size" onChange={() => setProd(item)} />
                                        <label> All</label>
                                   </div>
                                   <div className="choice">
                                        <input type="radio" name="size" onChange={() => setProd(item.filter((p, i) => (p.size < 20 && p.size >= 11)))} />
                                        <label> 11-16</label>
                                   </div>
                                   <div className="choice">
                                        <input type="radio" name="size" onChange={() => setProd(item.filter((p, i) => (p.size < 11 && p.size >= 8)))} />
                                        <label> 8-11</label>
                                        </div>
                                   </div>

                              </div>



                         </div>
                    </div>

                    <div className="list_prod">
                         <div className="list_container">


                              <div className="list_main">
                                   <div className="list_main_container">
                                        {prod.sort(compareValues('price', sort)).map((p, i) => (
                                             <div key={i} className="product_item">
                                                  <div className="item_container">
                                                       <Link className="item" to={'/detail'} onClick={() => reviewdetail(p)}>
                                                            <div className="link_pic"><img src={p.img} alt="" /></div>
                                                            <div className="link_content">
                                                                 <h5>{p.name}</h5>
                                                                 <h4>$ {p.price}</h4></div>

                                                       </Link>
                                                  </div>
                                             </div>
                                        ))}
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

          </div>
     );
}
export default Flowers;