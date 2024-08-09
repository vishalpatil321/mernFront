import {Form, Input, message} from 'antd';
import axios from 'axios';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import { SiApplenews } from 'react-icons/si';

const Register = () => {
   const navigate = useNavigate();
   const handleRegister = async(values) => {
      try {
         const res = await axios.post('https://mernback-z2pd.onrender.com/api/registerUser',values);
         if(res.data.success){
            message.success(res.data.message);
            navigate('/');
         }
         else{
            message.error(res.data.message);
         };

      } catch (error) {
         message.error('Something went wrong.');
      }
   };

    return(
        <div className='register-container'>
      
            <span><h1 className='text-center'>Welcome To</h1><h3 className='text-center'><SiApplenews /> News App</h3></span>
       
         <Form className='form2' onFinish={handleRegister} layout='vertical'>
            <Form.Item label='' name='firstName' required>
               <Input type='text' placeholder='Enter your firstname' className='input'/>
            </Form.Item>
            <Form.Item label='' name='lastName' required >
               <Input type='text' placeholder='Enter your lastname' className='input'/>
            </Form.Item>
            <Form.Item label='' name='phone' required >
               <Input type='text' placeholder='Enter your phone' className='input'/>
            </Form.Item>
            <Form.Item label='' name='email' required >
               <Input type='email' placeholder='Enter your email' className='input'/>
            </Form.Item>
            <Form.Item label='' name='password' required >
               <Input type='password' placeholder='Enter your password' className='input'/>
            </Form.Item>
            <button className='btn btn-primary' type='submit'>Register</button>
         </Form>
        </div>
    );
};

export default Register;