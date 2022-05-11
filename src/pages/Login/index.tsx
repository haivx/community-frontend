import { useState } from 'react'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useNavigate } from "react-router-dom";
import { Alert } from "@common/components"
import { LogInImg, RegisterImg } from '@assets/login'
import { useAuth } from "@common/hooks"
import { Wrapper, FormContainerWrapper, PanelsContainerWrapper } from './styles'

const LoginPage = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState('signin')
  const [loading, setLoading] = useState(false)

  const onClickSignUp = () => setIsSignIn('')

  const onClickSignIn = () => setIsSignIn('signin')

  const onFinish = async (values: any) => {
    try {
      setLoading(true)
      await auth.signIn(values)
      navigate("/admin", { replace: true });
    } catch(error) {
      Alert({
        message: error,
        type: "error"
      });
    } finally {
      setLoading(false)
    }
  }

  return (
    <Wrapper className={isSignIn ? 'sign-in-mode' : 'sign-up-mode'}>
      <FormContainerWrapper>
        <div className="signin-signup">
          <Form name="normal_login" className="sign-in-form" onFinish={onFinish}>
            <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]}>
              <Input autoComplete="false" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
              <Input
                autoComplete="new-password"
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button" loading={loading}>
                Sign In
              </Button>
            </Form.Item>
          </Form>
          <Form name="normal_login" className="sign-up-form" onFinish={onFinish}>
            <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]}>
              <Input autoComplete="false" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
              <Input
                autoComplete="new-password"
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button" loading={loading}>
                Sign up
              </Button>
            </Form.Item>
          </Form>
        </div>
      </FormContainerWrapper>
      <PanelsContainerWrapper>
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit aliquid quisquam nihil cumque error, tenetur quae excepturi
              facilis. Nesciunt, molestiae?
            </p>
            <button className="btn transparent" id="sign-up-btn" onClick={onClickSignUp}>
              Sign up
            </button>
            <LogInImg className="image" />
          </div>
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit aliquid quisquam nihil cumque error, tenetur quae excepturi
              facilis. Nesciunt, molestiae?
            </p>
            <button className="btn transparent" id="sign-in-btn" onClick={onClickSignIn}>
              Sign in
            </button>
            <RegisterImg className="image" />
          </div>
        </div>
      </PanelsContainerWrapper>
    </Wrapper>
  )
}

export default LoginPage
