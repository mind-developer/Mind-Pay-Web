import styled from "styled-components";

export const Container = styled.section`
  background-color: rgb(46, 46, 46);
  position: fixed;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;

  img {
    width: 250px;
    margin-bottom: 30px;
  }

  form {
    width: 400px;

    .ant-form-item-explain,
    .ant-form-item-extra {
      color: #ff4d4f;
    }

    .ant-input-affix-wrapper {
      outline: none;

      & {
        border: 0;
        border-bottom: 1px white solid;
      }

      &,
      * {
        background-color: transparent;
        color: white;
      }

      &.ant-input-affix-wrapper-focused {
        box-shadow: none;
      }
    }

    .login-form-button {
      width: 100%;
      background: #dc1d45;
      border-color: #d81e3d;
      margin-top: 10px;
      border-radius: 5px;
    }
  }
`;
