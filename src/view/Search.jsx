import { Link } from "react-router-dom";
import data from "./product";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
const Search = ({ e }) => {
          const { setDetail } = useContext(AppContext);
          return (
                    <div className="reslist">
                              <div className="result">
                                        {data.product.filter(p => p.name.toLowerCase().includes(e.toLowerCase())).map(p => (
                                                  <Link to={'/detail'} onClick={()=>setDetail(p)}>
                                                  <div className="res_item">
                                                            <div className="res_pic">
                                                                      <img src={p.img} alt="" />
                                                            </div>
                                                            <div className="res_content">
                                                                      <p>{p.name}</p>
                                                                      <h6>Price: $ { p.price}</h6>
                                                            </div>
                                                            </div>
                                                  </Link>
                                        ))}
                              </div>
                    </div>
          );

}
export default Search