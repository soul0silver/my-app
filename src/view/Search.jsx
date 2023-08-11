import { Link } from "react-router-dom";
import data from "./product";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
const Search = ({ e }) => {
          const { setDetail } = useContext(AppContext);
          return (
                    <div style={{position:'fixed',top:'80px',left:'15%',borderRadius:'8px'}}>
                              <div className="result">
                                        {data.product.filter(p => p.name.toLowerCase().includes(e.toLowerCase())).map(p => (
                                                  <Link to={'/detail'} onClick={()=>setDetail(p)}>
                                                  <div className="res_item">
                                                            <div className="res_pic">
                                                                      <img src={p.img} alt="" />
                                                            </div>
                                                            <div className="res_content">
                                                                      <h6>{p.name}</h6>
                                                                      <h4>Price: $ { p.price}</h4>
                                                            </div>
                                                            </div>
                                                  </Link>
                                        ))}
                              </div>
                    </div>
          );

}
export default Search