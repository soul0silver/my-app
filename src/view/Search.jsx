import { Link } from "react-router-dom";
import data from "./product";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
const Search = () => {
          const { setDetail,text, setText } = useContext(AppContext);
          const handleClick = (e) => {
                    setDetail(e);
                    setText('');
          }
          return (
                    <div className="reslist" >
                            
                              <div className="result" >
                                        {data.product.filter(p => p.name.toLowerCase().includes(text.toLowerCase())).map(p => (
                                                  <Link to={'/detail'} onClick={()=>handleClick(p)}>
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