import { useHistory } from 'react-router-dom'
import { Modal, Form, Input, Button } from 'antd'

function Login (){
    const history = useHistory()
    const handleCancel = () => {
        history.push('/')
    }
    const handleLogin = () => {
        history.push('/')
    }
    return ( 
        <Modal title="Login" visible={true} onCancel={handleCancel} footer={null}>
          <Form
                name="login" labelCol={{ span: 8}} wrapperCol={{ span: 16}} 
                onFinish={handleLogin}>
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

export default Login