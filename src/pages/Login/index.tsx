import { useState } from 'react'
import { UserOutlined, KeyOutlined, FacebookOutlined, GoogleOutlined, TwitterOutlined } from '@ant-design/icons'
import { LogInImg, RegisterImg }  from "@assets/login"
import { Wrapper, FormContainerWrapper, PanelsContainerWrapper } from './styles'

const LoginPage = () => {
    const [isSignIn, setIsSignIn] = useState('signin');
    
    const onClickSignUp = () => {
        setIsSignIn("")
    };
    const onClickSignIn = () => setIsSignIn("signin");

    return (
        <Wrapper className={isSignIn ? "sign-in-mode" : "sign-up-mode"}>
          <FormContainerWrapper>
            <div className="signin-signup">
              <form action="#" className="sign-in-form">
                <h2 className="title">Sign in</h2>
                <div className="input-field">
                  <UserOutlined />
                  <input type="text" autoComplete="off" name="username" placeholder="Username" />
                </div>
                <div className="input-field">
                  <KeyOutlined />
                  <input autoComplete="off" name="pass" type="text" placeholder="Password" />
                </div>
                <input type="submit" value="Login" className="btn solid" />
                <p className="social-text">Or Sign in with social platform</p>
                <div className="social-media">
                  <a href="" className="social-icon">
                    <FacebookOutlined />
                  </a>
                  <a href="" className="social-icon">
                    <GoogleOutlined />
                  </a>
                  <a href="" className="social-icon">
                    <TwitterOutlined />
                  </a>
                </div>
              </form>
              <form action="#" className="sign-up-form">
                <h2 className="title">Sign up</h2>
                <div className="input-field">
                  <UserOutlined />
                  <input type="text" autoComplete="off" name="username" placeholder="Username" />
                </div>
                <div className="input-field">
                  <KeyOutlined />
                  <input autoComplete="off" name="email" type="text" placeholder="Email" />
                </div>
                <div className="input-field">
                  <KeyOutlined />
                  <input autoComplete="off" name="pass" type="text" placeholder="Password" />
                </div>
                <input type="submit" value="Login" className="btn solid" />
                <p className="social-text">Or Sign up with social platform</p>
                <div className="social-media">
                  <a href="" className="social-icon">
                    <FacebookOutlined />
                  </a>
                  <a href="" className="social-icon">
                    <GoogleOutlined />
                  </a>
                  <a href="" className="social-icon">
                    <TwitterOutlined />
                  </a>
                </div>
              </form>
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
                <button className="btn transparent" id="sign-up-btn" onClick={onClickSignUp}>Sign up</button>
                <LogInImg className='image'/>
              </div>
            </div>
            <div className="panel right-panel">
              <div className="content">
                <h3>One of us?</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit aliquid quisquam nihil cumque error, tenetur quae excepturi
                  facilis. Nesciunt, molestiae? 
                </p>
                <button className="btn transparent" id="sign-in-btn" onClick={onClickSignIn}>Sign in</button>
                <RegisterImg className='image'/>
              </div>
            </div>
          </PanelsContainerWrapper>
        </Wrapper>
      )
}

export default LoginPage
