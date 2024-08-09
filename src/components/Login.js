import {Form, Input, message} from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

const Login = () => {
   const navigate = useNavigate();
   const handleLogin = async(values) => {
      try {
         const res = await axios.post('https://mernback-z2pd.onrender.com/api/login-user',values);
         if(res.data.success){
            let data = {token:res.data.token,
                         name:res.data.data.firstName,
                        }
            message.success(res.data.message);
            localStorage.setItem('news-user',JSON.stringify(data));
            navigate('/news');
         } 
         else{
            message.error(res.data.message);
            navigate('/register');
         }

      } catch (error) {
         message.error('Something went wrong.');
      }
   };

    return(
        <div className='login-conatainer'>
         <h3>Get Awarness</h3>
         <Form layout='vertical' className='form' onFinish={handleLogin}>
            <Form.Item label='' name='email' required>
               <Input type='text' placeholder='Enter your registered email id' className='input'/>
            </Form.Item>
            <Form.Item label='' name='password' required>
               <Input type='password' placeholder='Enter your password' className='input'/>
            </Form.Item>
            <span><button className='btn btn-primary' type='submit'>Login</button> <Link to='/register'><button className='btn btn-dark'>You can register from here</button></Link></span>
         </Form>
        
        </div>
    );
};

export default Login;