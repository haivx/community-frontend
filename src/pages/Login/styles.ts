import styled from '@emotion/styled'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    height: 2000px;
    width: 2000px;
    top: -10%;
    right: 48%;
    border-radius: 50%;
    transform: translateY(-50%);
    background-image: linear-gradient(-45deg, #4481eb 0%, #04befe 100%);
    transition: 1.8s ease-in-out;
    z-index: 6;
    transition: 1.8s ease-in-out;
  }
  &.sign-up-mode {
    &::before {
      transform: translate(100%, -50%);
      right: 52%;
    }

    .left-panel {
      pointer-events: none;
      .image,
      .content {
        transform: translate(-800px);
      }
    }
    .right-panel {
      pointer-events: all;
      .image,
      .content {
        transform: translate(0px);
      }
    }
    .sign-up-form {
      z-index: 2;
      opacity: 1;
    }
    .sign-in-form {
      z-index: 1;
      opacity: 0;
    }
    .signin-signup {
      left: 25%;
    }

    @media (max-width: 870px) {
      .sign-up-mode .signin-signup {
        left: 50%;
      }
    }
    @media (max-width: 870px) {

      &::before {
        bottom: 28%;
        left: 50%;
      }
    }
  }

  @media (max-width: 870px) {
    .signin-signup {
      width: 100%;
      top: 95%;
      transform: translate(-50%, -100%);
      transition: 1s 0.8s ease-in-out;
    }

    .signin-signup {
      left: 50%;
    }

    .panel {
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      padding: 2.5rem 8%;
      grid-column: 1 / 2;
    }

    .right-panel {
      grid-row: 3 / 4;
    }

    .left-panel {
      grid-row: 1 / 2;
    }

    .image {
      width: 200px;
      transition: transform 0.9s ease-in-out;
      transition-delay: 0.6s;
    }

    .panel .content {
      padding-right: 15%;
      transition: transform 0.9s ease-in-out;
      transition-delay: 0.8s;
    }

    .panel h3 {
      font-size: 1.2rem;
    }

    .panel p {
      font-size: 0.7rem;
      padding: 0.5rem 0;
    }

    .transparent {
      width: 110px;
      height: 35px;
      font-size: 0.7rem;
    }

    &::before {
      width: 1500px;
      height: 1500px;
      transform: translateX(-50%);
      left: 30%;
      bottom: 68%;
      right: initial;
      top: initial;
      transition: 2s ease-in-out;
    }

    .sign-up-mode {
      &::before {
        transform: translate(-50%, 100%);
        bottom: 32%;
        right: initial;
      }
    }

    .sign-up-mode .left-panel .image,
    .sign-up-mode .left-panel .content {
      transform: translateY(-300px);
    }

    .sign-up-mode .right-panel .image,
    .sign-up-mode .right-panel .content {
      transform: translateY(0px);
    }

    .right-panel .image,
    .right-panel .content {
      transform: translateY(300px);
    }

    .sign-up-mode .signin-signup {
      top: 5%;
      transform: translate(-50%, 0);
    }
  }
  @media (max-width: 570px) {
    padding: 1.5rem;
    form {
      padding: 0 1.5rem;
    }

    .image {
      display: none;
    }
    .panel .content {
      padding: 0.5rem 1rem;
    }

    &::before {
      bottom: 72%;
      left: 50%;
    }
  }
`

export const FormContainerWrapper = styled.div`
  @media (max-width: 870px) {
    min-height: 800px;
    height: 100vh;
  }
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  .signin-signup {
    position: absolute;
    top: 50%;
    left: 75%;
    transform: translate(-50%, -50%);
    width: 50%;
    display: grid;
    grid-template-columns: 1fr;
    z-index: 5;
  }

  form {
    padding: 0 5rem;
    overflow: hidden;
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    .ant-form-item {
      max-width: 600px;
    }
  }
  .sign-in-form {
    z-index: 2;
  }
  .sign-up-form {
    z-index: 1;
    opacity: 0;
  }
  .title {
    font-size: 2.2rem;
    color: #444;
    margin-bottom: 10px;
  }

  .input-field {
    max-width: 380px;
    width: 100%;
    height: 55px;
    background-color: #f0f0f0;
    margin: 10px 0;
    border-radius: 55px;
    display: grid;
    grid-template-columns: 15% 85%;
    padding: 0 0.4rem;
  }
  .input-field .anticon {
    text-align: center;
    line-height: 55px;
    color: #acacac;
    font-size: 1.1rem;
  }.anticon {
    text-align: center;
    line-height: 55px;
    color: #acacac;
    font-size: 1.1rem;
  }
  /* input {
    background: none;
    outline: none;
    border: none;
    line-height: 1;
    font-weight: 600;
    font-size: 1.1rem;
    color: #333;
    &::place-holder {
      color: #aaa;
      font-weight: 500;
    }
  } */
  .btn {
    width: 150px;
    height: 49px;
    border: none;
    outline: none;
    border-radius: 49px;
    cursor: pointer;
    background-color: #5995fd;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    transition: 0.5;
    &:hover {
      background-color: #3d84ed;
    }
  }
  .social-text {
    padding: 0.7rem 0;
    font-size: 1rem;
  }
  .social-media {
    display: flex;
    justify-content: center;
  }
  .social-icon {
    height: 46px;
    width: 46px;
    border: 1px solid #333;
    margin: 0 0.45rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #333;
    font-size: 1.1rem;
    border-radius: 50%;
    &:hover {
      color: #4481eb;
      border-color: #4481eb;
    }
  }
`

export const PanelsContainerWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  .panel {
    z-index: 7;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    p {
      font-size: 0.95rem;
      padding: 0.7rem 0;
    }
    h3 {
      font-weight: 600;
      line-height: 1;
      font-size: 1.5rem;
    }
    .content {
      color: #fff;
      transition: 0.9s 0.6s ease-in-out;
    }
  }
  .left-panel {
    padding: 3rem 17% 2rem 12%;
    pointer-events: all;
    .image {
      transition: 0.9s 0.6s ease-in-out;
    }
  }
  .right-panel {
    pointer-events: none;
    padding: 3rem 12% 2rem 17%;
    .content,
    .image {
      transform: translateX(800px);
    }
  }
  .image {
    width: 100%;
  }
  .transparent {
    background: none;
    margin: 0;
    border: 2px solid #ffff;
  }

  .btn {
    width: 150px;
    height: 49px;
    outline: none;
    border-radius: 49px;
    cursor: pointer;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    transition: 0.5;
    &:hover {
      background-color: #3d84ed;
    }
  }

  @media (max-width: 870px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1fr;
  }
`
