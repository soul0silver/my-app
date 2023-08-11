import { Link } from "react-router-dom";
import './Navbar.css';
import { useContext,  useState } from "react";
import { AppContext } from "../Context/AppContext";
import Search from "./Search";

const Navbar = () => {
          const [show, setShow] = useState(false);
          const { items, showcart, setShowcart, log, user,item } = useContext(AppContext);
          // const [user,setUser]=useState()
          // useEffect(() => {
          //           setUser(JSON.parse(window.localStorage.getItem('user')).name)
          // },[])
          const [text, setText] = useState('');

          return (

                    <div className="navbar">
                              <div className="navbar_container">
                                        <div className="navbar_logo">
                                                  <button className={'nav_btn'}onClick={() => setShow(!show)}>
                                                            <i className="fas fa-bars" ></i>
                                                  </button>
                                                  <div className="logo">
                                                            <Link to={'/'}>G5 Plant Palace</Link>
                                                  </div>

                                        </div>
                                        <div className={(!show) ? "navbar_mid out" : "navbar_mid in"}>
                                                  <div style={{ with: '100%' }} ><button className="button_close" onClick={() => setShow(!show)}>X</button></div>

                                                  <div className="search">
                                                            <input type="text" placeholder="find your flowers" onChange={(e)=>setText(e.target.value)} />
                                                  </div>
                                                  <div className="nav_link">
                                                            <Link to={'/flower'}>Flowers</Link>
                                                  </div>
                                                  <div className="nav_link">
                                                            <Link to={'/aboutus'}>Abouts us</Link>
                                                  </div>
                                                  <div className="nav_link">
                                                            <Link>Help</Link>
                                                  </div>



                                        </div>
                                        <div className="navbar_right">
                                                  <div>
                                                            {(user === null) ?
                                                                      <Link className="yes" to={'/login'}><i class="fas fa-user fa-lg"></i></Link> :
                                                                      <span className="yes" style={{ fontWeight: '500' }} >Hi, {user.lastname }</span>
                                                            }
                                                            <Link className='no' to={'/login'}><i class="fas fa-user fa-lg"></i> <span className="icon_name">Login</span></Link>


                                                  </div>
                                                  <div>
                                                            <a onClick={() => setShowcart(!showcart)}><i class="fas fa-shopping-cart fa-lg"></i></a>{(items.length!==0)?<span className="notice">{items.length}</span>:null} 
                                                            
                                                  </div>
                                        </div>

                              </div>
                              {(text==='')? null : <Search e={text} />}
                    </div >

          );
}
export default Navbar