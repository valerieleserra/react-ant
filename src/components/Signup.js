import { useHistory } from 'react-router-dom'
import firebase from 'firebase/app'
import 'firebase/auth'
import { Modal, Form, Input, Button } from 'antd'
import { firebaseConfig } from '../fbconfig'


function Signup ({ setUser }){
    const history = useHistory()
    const handleCancel = () => {
        history.push('/')
    }
    const handleSignup = ({ email , password }) => {
        if(!firebase.apps.length){
            firebase.initializeApp(firebaseConfig)
        }
        firebase.auth().createUserWithEmailAndPassword(email,password)
           .then(results => {
               setUser(results.user)
            history.push('/')
           })
           .catch(err => alert(err.message))
        
    }
    return ( 
        <Modal title="Signup" visible={true} onCancel={handleCancel} footer={null}>
          <Form
                name="signup" labelCol={{ span: 8}} wrapperCol={{ span: 16}} 
                onFinish={handleSignup}>
                    <Form.Item label="Email" name="email" 
                               rules={[ { required: true, message: 'Please enter your email'}]}>
                               {/* { type: 'email' , message: 'Please enter a valid email'} ]}> */}
                        <Input />
                    </Form.Item>
                    <Form.Item label="Password" name="password" 
                               rules={[ { required: true, message: 'Please enter your password'} ]}>
                        <Input.Password />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16}}>
                        <Button type="primary" htmlType="submit">Login</Button>
                    </Form.Item>
            </Form>
        </Modal>
    )
}

export default Signup