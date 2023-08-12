import user from './user';
import { Link } from 'react-router-dom';
import './StyleLogin.css'
import { useContext, useState } from 'react';
import { AppContext } from '../Context/AppContext';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { log,setLog } = useContext(AppContext);
    const handleSubmit = (e) => {
       
        var acc = {
            email:email,
            password: password
        }
        if (check_user(acc, user.user_info) >= 0) {
            window.localStorage.setItem('user', JSON.stringify(user.user_info[check_user(acc, user.user_info)]));
            setLog(true);
            console.log(log)
            
        }
        else alert('Email or password invalid');
    }
    function check_user(element, arr) {
        let count = -1;
        for (let i = 0; i < arr.length; i++) {
                  if (arr[i].email === element.email&&arr[i].password === element.password) {
                            count=i;
                      break;
                  }
        }
        return count;
};
   
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>LOG IN TO YOUR ACCOUNT</h1>
            <div className="for_login">
                
                <div className="login" >
                    <div className="detail-item">
                        <h2 style={{ fontWeight: '400', textAlign: 'center' }}>Already have an Account?</h2>
                    </div>
                    <form onSubmit={handleSubmit} method='post'  action={(log)? '':'/'}>

                        <div className="detail-item">
                            <label htmlFor="email">EMAIL*</label>
                            <input type="email" name='email' required id="email" onChange={(e)=>setEmail(e.target.value)} />
                        </div>
                        <div className="detail-item">
                            <label htmlFor="pass">PASSWORD*</label>
                            <input type="password" name="pass" id="pass" required  onChange={(e)=>setPassword(e.target.value)}/>

                        </div>
                        <div className="detail-item">
                            <input style={{ height: '33px',width:'100%' }} type='submit' value={'LOGIN'}/>
                        </div>
                        <div className="detail-item">
                            <Link to="/forget" style={{ textAlign: 'center' }}>FORGOT PASSWORD</Link>
                        </div>
                    </form>
                </div>

                <div className="create_account">
                    <div className="detail-item">
                        <h2 style={{ fontWeight: '400' }}>New to The Plant Palace?</h2>
                    </div>
                    <div className="detail-item">

                        <Link to="/Register"><button style={{ width: '100%', height: '33px' }} type="submit">CREATE NEW ACCOUNT</button></Link>

                    </div>
                </div>


            </div>
        </>
    );
}
export default Login;