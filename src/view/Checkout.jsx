import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import './Checkout.css'
import data from "./product";
// Function component for the checkout page
function CheckoutPage() {

          const { items, setItems, user } = useContext(AppContext);
          const removeItem = (i) => {
                    setItems(items.filter((p, index) => p !== i))
          }
          const calculateTotal = () => {
                    return items.reduce((total, item) => total + item.price * item.quantity, 0);
          };
          const calTotal = (i) => {
                    return items[i].price * items[i].quantity;
          };
          const [customerInfo, setCustomerInfo] = useState({
                    firstName: "",
                    lastName: "",
                    email: "",
                    address: "",
          });
          const [paymentMethod, setPaymentMethod] = useState("creditCard");

          const handlePayment = () => {
                    // You can implement the actual payment processing logic here
                    // For this example, we'll just display a success message
                    alert("Payment successful!");
          };
          const setQuan = (e, i, value) => {
                    e.quantity = value;
                    items[i].quantity = value;
                    window.localStorage.setItem('items', JSON.stringify(items));
                    setItems(JSON.parse(window.localStorage.getItem('items')))

          }
          const handleSubmit = (e) => {
                    e.preventDefault();
                    alert('Payment successful!')                                                                                       
          }
          console.log(user)
          return (
                    <div className="checkout">
                              <div className="checkout_container">
                                        <h1 style={{ textAlign: 'center' }}>Checkout</h1>
                                        <div className="check_cart">
                                                  <div className="check_cart_container">
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
                                                                                                    <td className="td_quan"><input type="number" value={item.quantity} min={1} onChange={(e) => setQuan(item, i, e.target.value)} /></td>
                                                                                                    <td className="td_total">$ {calTotal(i)}</td>
                                                                                                    <td className="td_del" onClick={()=>removeItem(item)}><button>X</button></td>
                                                                                          </tr>
                                                                                ))}
                                                                      </tbody>

                                                            </table></div>
                                                  <div style={{ padding: '20px', display: 'flex' }}>

                                                            <div style={{ padding: '10px' }}><h3>Amount: </h3></div>
                                                            <div style={{ padding: '10px' }}><h3>$ {calculateTotal()}</h3></div>

                                                  </div>
                                                  

                                        </div>
                                        <form action="" onSubmit={handleSubmit}> 
                                                  <div className="check_cus">

                                                            <div className="cus_info">
                                                                      <h1>Customer Information</h1>
                                                                      <div>
                                                                                <label>First Name:</label>
                                                                                <input
                                                                                          type="text"
                                                                                          defaultValue={(user === null) ? '' : user.firstname}
                                                                                          onChange={(e) => setCustomerInfo({ ...customerInfo, firstName: e.target.value })}
                                                                                          required
                                                                                />
                                                                      </div>
                                                                      <div>
                                                                                <label>Last Name:</label>
                                                                                <input
                                                                                          type="text"
                                                                                          defaultValue={(user === null) ? '' : user.lastname}
                                                                                          onChange={(e) => setCustomerInfo({ ...customerInfo, lastName: e.target.value })}
                                                                                          required
                                                                                />
                                                                      </div>
                                                                      <div>
                                                                                <label>Email:</label>
                                                                                <input
                                                                                          type="email"
                                                                                          defaultValue={(user === null) ? '' : user.email}
                                                                                          onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                                                                                          required
                                                                                />
                                                                      </div>
                                                                      <div>
                                                                                <label>Address:</label>
                                                                                <input
                                                                                          type="text"
                                                                                          defaultValue={(user === null) ? '' : user.address}
                                                                                          onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                                                                                          required
                                                                                />
                                                                      </div>
                                                            </div>
                                                            <div className="payment">
                                                                      <h1>Payment Method</h1>
                                                                      <div>
                                                                                <label>
                                                                                          <input
                                                                                                    type="radio"
                                                                                                    value="creditCard"
                                                                                                    checked={paymentMethod === "creditCard"}
                                                                                                    onChange={() => setPaymentMethod("creditCard")}
                                                                                          />
                                                                                          Credit Card
                                                                                </label>
                                                                      </div>
                                                                      <div>
                                                                                <label>
                                                                                          <input
                                                                                                    type="radio"
                                                                                                    value="paypal"
                                                                                                    checked={paymentMethod === "paypal"} onChange={() => setPaymentMethod("paypal")}
                                                                                          />
                                                                                          PayPal
                                                                                </label>
                                                                      </div>
                                                                      <button type='submit' style={{width:'200px',height:'40px',backgroundColor:'black',color:"white"}}>Pay</button>
                                                            </div>

                                                  </div>
                                        </form>
                              </div>

                    </div>
          );
}

export default CheckoutPage;