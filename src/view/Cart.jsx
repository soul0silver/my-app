import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { Link } from "react-router-dom";
const Cart = () => {
          const { showcart,setShowcart } = useContext(AppContext);
          const { items, setItems } = useContext(AppContext)
          const removeItem = (i) => {
                    setItems(items.filter((p, index) => p !== i))
          }
          const setQuan = (i, e) => {
                    items[i].quantity = e;
                    window.localStorage.setItem('items', JSON.stringify(items));
                    setItems(JSON.parse(window.localStorage.getItem('items')))
          }
          return (
                    <div className={(!showcart) ? 'cart hide' : 'cart show'}>
                              {
                                        (items.length === 0) ?
                                        <h4 style={{textAlign:'center',lineHeight:'20px'}}>Your cart is empty </h4> :
                                        <>
                                        <div className="cart_container">

                                        <table>
                                                                      <thead>
                                                                                <tr>
                                                                                          <th></th>
                                                                                          <th></th>
                                                                                          <th>Price</th>
                                                                                          <th>Quantity</th>
                                                                                          <th>Total</th>
                                                                                          <th></th>
                                                                                </tr>
                                                                                </thead>
                                                                                
                                                                      <tbody>
                                                                                {items.map((item, i) => (
                                                                                          <tr className={(i % 2 === 0) ? 'white' : 'gray'} key={item.id}>
                                                                                                    <td className="td_pic"> <img src={item.img} alt="" /></td>
                                                                                                    <td className="td_name">{item.name}</td>

                                                                                                    <td className="td_price">$ {item.price}</td>
                                                                                                    <td className="td_quan"><input type="number" value={item.quantity} min={1} onChange={(e) => setQuan( i, e.target.value)} /></td>
                                                                                                    <td className="td_total">$ {item.price*item.quantity}</td>
                                                                                                    <td className="td_del"><button onClick={()=>removeItem(item)}>X</button></td>
                                                                                          </tr>
                                                                                ))}
                                                                      </tbody>

                                                                      </table>
                                                            </div>
                                                  <div style={{ display: 'flex', width: '100%', alignItems: 'center', flexDirection: 'column' }}><button style={{height:'25px',width:'100px',backgroundColor:'black'}} ><Link style={{color:'white'}} to='/checkout' onClick={()=>setShowcart(!showcart)}>CHECKOUT</Link></button></div>

                              
                                        </>}
                    </div>
          );
}
export default Cart;