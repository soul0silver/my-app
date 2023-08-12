import { useContext} from "react";
import { AppContext } from "../Context/AppContext";
import { Link } from "react-router-dom";
import './Detail.css'
const Detail = () => {
          const { detail, setItems, items,setShowcart } = useContext(AppContext);

          const addtoCart = () => {
                    console.log(check_arr(detail, items));
                    if (!check_arr(detail, items)) {
                              let o = {
                                        id: detail.id,
                                        name: detail.name,
                                        price: detail.price,
                                        size: detail.size,
                                        desc: detail.desc,
                                        Orientation: detail.Orientation,
                                        category: detail.category,
                                        status: detail.status,
                                        img: detail.img,
                                        stock: detail.stock,
                                        quantity: 1
                              }
                              setItems(pre => {
                                        const arr = [...items, o];

                                        window.localStorage.setItem('items', JSON.stringify(arr));
                                        return arr;
                              })
                    }

                    else {
                              for (let i = 0; i < items.length; i++) {
                                        if (items[i].id === detail.id) {
                                                  items[i].quantity = items[i].quantity + 1;
                                                  window.localStorage.setItem('items', JSON.stringify(items));
                                                  setItems(JSON.parse(window.localStorage.getItem('items')))
                                                  break;
                                        }

                              }
                    }
                    function check_arr(element, arr) {
                              let count = 0;
                              for (let i = 0; i < arr.length; i++) {
                                        if (arr[i].id === element.id) {
                                                  count++;
                                                  break
                                        }
                              }
                              return (count > 0) ? true : false
                    }

          }
          return (
                    <>
                              <div className="detail_prod">
                                        <div className="detail_prod_container">

                                                  <hr />
                                                  <div className="detail_item">
                                                            <div className="detail_item_container">
                                                                      <div className="item_pic">
                                                                                <div className="item_pic_container">
                                                                                          <img src={detail.img} alt="" />
                                                                                </div>
                                                                      </div>
                                                                      <div className="item_info">

                                                                                <div className="item_info_container">
                                                                                          <h4>{detail.name}</h4>
                                                                                          <div><p style={{ color: (detail.stock !== 'In Stock') ? 'rgb(47, 120, 21)' : 'red' }}>{detail.stock}</p> <p style={{ color: 'rgb(47, 120, 21)',fontSize:'18pt',width:'100%' }}>Price: $ {detail.price}</p></div>

                                                                                          <div ><label>Size:</label><label>{detail.size} cm</label></div>



                                                                                </div>

                                                                                <div className="buybtn">
                                                                                          <button onClick={()=>setShowcart(false)} style={{ width: '140px', marginRight: '10px', height: '60px', backgroundColor: 'black', color: 'white', fontWeight: '600' }}><Link style={{padding:'10px 3px',color:'white'}} to='/checkout' onClick={addtoCart}> BUY NOW</Link></button>
                                                                                          <button style={{ width: '50px', backgroundColor: 'black', color: 'white' }} onClick={addtoCart}><i class="fas fa-cart-plus fa-lg"></i></button>
                                                                                </div>
                                                                                <div className="item_info_container">
                                                                                          <h3>Description</h3>
                                                                                          <div>
                                                                                                    {detail.desc}
                                                                                          </div>
                                                                                </div>
                                                                      </div>
                                                            </div>
                                                  </div>


                                        </div>
                                        <div className="relative_prod">
                                                  <div className="relative_prod_container">

                                                  </div>
                                        </div>
                              </div>
                    </>
          );
}
export default Detail;