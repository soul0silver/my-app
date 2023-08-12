import { Link } from "react-router-dom";
import './Navbar.css';
import { useContext,  useState } from "react";
import { AppContext } from "../Context/AppContext";
import Search from "./Search";

const Navbar = () => {
          const [show, setShow] = useState(false);
          const { items, showcart, setShowcart, log, user,item,setUser } = useContext(AppContext);
          // const [user,setUser]=useState()
          // useEffect(() => {
          //           setUser(JSON.parse(window.localStorage.getItem('user')).name)
          // },[])
          const [text, setText] = useState('');
          const logout = () => {
                    setUser(pre => {
                              window.localStorage.removeItem('user');
                              return null;
                    })
          }
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

                                                  <div className="search" style={{position:'relative'}}>
                                                            <input type="text"  placeholder="find your flowers" onChange={(e) => setText(e.target.value)} />
                                                            <i class="fas fa-search" style={{color:'gray',marginLeft:'-22px'}}></i>
                                                  </div>
                                                  <div className="nav_link">
                                                            <Link to={'/flower'}>Flowers</Link>
                                                  </div>
                                                  <div className="nav_link">
                                                            <Link to={'/aboutus'}>Abouts us</Link>
                                                  </div>
                                        



                                        </div>
                                        <div className="navbar_right">
                                                  <div className="user_ic">
                                                           
                                                            <Link><i class="fas fa-user fa-lg"></i></Link>
                                                            <div className="linksub">
                                                            {(user === null) ?
                                                                                <div style={{ borderRadius: '8px', backgroundColor: 'black', padding: '3px', textAlign: 'center', height:'30px',lineHeight:'20px' }}><Link style={{ color: 'white', textAlign:'center'}}  to={'/login'}>Login</Link></div> :
                                                                                <div>
                                                                                          <div><span style={{ fontWeight: '500' }} >Hi, {user.lastname}</span></div>
                                                                                          <div style={{borderRadius:'8px',backgroundColor:'black',padding:'3px', textAlign: 'center', height:'30px',lineHeight:'20px' }}><Link style={{color:'white'}} to={'/'} onClick={logout}>Log out</Link></div>
                                                                                </div>
                                                                      }
                                                            </div>

                                                  </div>
                                                  <div>
                                                            <a className="cart_ic" onClick={() => setShowcart(!showcart)}><i class="fas fa-shopping-cart fa-lg"></i></a>{(items.length!==0)?<span className="notice">{items.length}</span>:null} 
                                                            
                                                  </div>
                                        </div>

                              </div>
                              {(text==='')? null : <Search e={text} />}
                    </div >

          );
}
export default Navbar