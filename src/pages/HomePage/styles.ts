import styled from '@emotion/styled'

export const Header = styled.div``

export const Information = styled.div`
  position: relative;
  width: 100%;
  background-color: #fff;
  min-height: 100vh;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    height: 2000px;
    width: 2000px;
    top: -10%;
    right: 48%;
    transform: translateY(-50%);
    background-image: linear-gradient(-45deg, #4481eb 0%, #04befe 100%);
    transition: 1.8s ease-in-out;
    border-radius: 50%;
    z-index: 6;
  }
  /* width: 1000px ;
  positon: relative;
  .or {
    position: absolute;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    background-color: #999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) 
  }
  background-color: #f5f5f5f5;
  display: flex;
  margin: 50px auto;
  .left {
    width: 50%;
    padding: 45px;
    background: white;
  }
  .right {

    width: 50%;
  }
  .form-inner {
    border: 1px solid #eee;
  }
  .form-group {
    padding: 15px;
    label {
      display: inline-block;
      margin-bottom: 10px;
      font-size: 10px;
    }
    input {
      width: 100%;
      display: block;
      outline: none;
      border: 0;
      font-size: 16px;
      color: #333;
    }
    input::-webkit-input-placeholder {
      color: #ccc;
    }
  }
  .form-group:not(:last-of-type) {
    border-bottom: 1px solid #eee;
  }
  .remember {
    text-align: center;
    margin: 25px 0;
  }
  button {
    display: block;
    padding: 20px;
    color: white;
    width: 100%;
    text-transform: uppercase;
    font-size: 16px;
    text-align: center;
    outline: none;
    border: 0;
    border-radius: 2px;
    background-color: #f87253;
    cursor: pointer;
  } */
`
export const ImageAvatar = styled.div`
  max-width: 250px;
  border-radius: 90%;
  overflow: hidden;
  margin-left: 10px;
`
