import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons';
import { useState } from 'react';
import styled from 'styled-components';
import { postApi } from '../utils/request';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../store/modules/loginSlice';
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  background-color: #ecf0f3;
  color: #a0a5a8;
`;

const Login = () => {
  const [switchCntClassList, setSwitchCntClassList] = useState(['switch']);
  const [switchCircleClassList, setSwitchCircleClassList] = useState([
    'switch_circle'
  ]);
  const [switchC1ClassList, setSwitchC1ClassList] = useState([
    'switch_container'
  ]);
  const [switchC2ClassList, setSwitchC2ClassList] = useState([
    'switch_container',
    'is-hidden'
  ]);
  const [aContainerClassList, setAContainerClassList] = useState([
    'container',
    'a-container'
  ]);
  const [bContainerClassList, setBContainerClassList] = useState([
    'container',
    'b-container'
  ]);

  const changeForm = () => {
    // 修改类名
    setSwitchCntClassList([...switchCntClassList, 'is-gx']);

    if (switchCntClassList.includes('is-txr')) {
      setSwitchCntClassList(
        switchCntClassList.filter(cName => cName !== 'is-txr')
      );
    } else {
      setSwitchCntClassList([...switchCntClassList, 'is-txr']);
    }

    if (switchCircleClassList.includes('is-txr')) {
      setSwitchCircleClassList(
        switchCircleClassList.filter(cName => cName !== 'is-txr')
      );
    } else {
      setSwitchCircleClassList([...switchCircleClassList, 'is-txr']);
    }

    if (switchC1ClassList.includes('is-hidden')) {
      setSwitchC1ClassList(
        switchC1ClassList.filter(cName => cName !== 'is-hidden')
      );
    } else {
      setSwitchC1ClassList([...switchC1ClassList, 'is-hidden']);
    }

    if (switchC2ClassList.includes('is-hidden')) {
      setSwitchC2ClassList(
        switchC2ClassList.filter(cName => cName !== 'is-hidden')
      );
    } else {
      setSwitchC2ClassList([...switchC2ClassList, 'is-hidden']);
    }

    if (aContainerClassList.includes('is-txl')) {
      setAContainerClassList(
        aContainerClassList.filter(cName => cName !== 'is-txl')
      );
    } else {
      setAContainerClassList([...aContainerClassList, 'is-txl']);
    }

    if (bContainerClassList.includes('is-txl')) {
      console.log(
        bContainerClassList.filter(
          cName => cName !== 'is-txl' && cName !== 'is-z'
        )
      );
      setBContainerClassList(
        bContainerClassList.filter(
          cName => cName !== 'is-txl' && cName !== 'is-z'
        )
      );
    } else {
      setBContainerClassList([...bContainerClassList, 'is-txl', 'is-z']);
    }
  };

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = e => setUsername(e.target.value);
  const handleEmailChange = e => setEmail(e.target.value);
  const handlePasswordChange = e => setPassword(e.target.value);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const signUp = async e => {
    e.preventDefault();
    const { data } = await postApi({ url: '/moon-auth-service/auth/sign-up', data: { email, password } })
  };

  const signIn = async e => {
    e.preventDefault();
    const { data } = await postApi({ url: '/moon-auth-service/auth/sign-in', data: { email, password } })
    dispatch(login({ token: data, username }));
    navigate('/');
  };

  return (
    <Container>
      <div className="shell">
        <div className={aContainerClassList.join(' ')} id="a-container">
          <form action="" method="" className="form" id="a-form">
            <h2 className="form_title title">登入账号</h2>
            <div className="form_icons">
              <GithubOutlined className="iconfont" />
              <WechatOutlined className="iconfont" />
              <QqOutlined className="iconfont" />
            </div>
            <span className="form_span">选择登录方式或电子邮箱登录</span>
            <input
              value={email}
              onChange={handleEmailChange}
              type="text"
              className="form_input"
              placeholder="Email"
            />
            <input
              value={password}
              onChange={handlePasswordChange}
              type="password"
              className="form_input"
              placeholder="Password"
            />
            <a className="form_link">忘记密码？</a>
            <button onClick={signIn} className="form_button button submit">
              SIGN IN
            </button>
          </form>
        </div>

        <div className={bContainerClassList.join(' ')} id="b-container">
          <form action="" method="" className="form" id="b-form">
            <h2 className="form_title title">创建账号</h2>
            <div className="form_icons">
              <GithubOutlined className="iconfont" />
              <WechatOutlined className="iconfont" />
              <QqOutlined className="iconfont" />
            </div>
            <span className="form_span">选择注册方式或电子邮箱注册</span>
            <input
              value={username}
              onChange={handleUsernameChange}
              type="text"
              className="form_input"
              placeholder="Name"
            />
            <input
              value={email}
              onChange={handleEmailChange}
              type="text"
              className="form_input"
              placeholder="Email"
            />
            <input
              value={password}
              onChange={handlePasswordChange}
              type="password"
              className="form_input"
              placeholder="Password"
            />
            <button onClick={signUp} className="form_button button submit">
              SIGN UP
            </button>
          </form>
        </div>

        <div className={switchCntClassList.join(' ')} id="switch-cnt">
          <div className={switchCircleClassList.join(' ')}></div>
          <div
            className={[...switchCircleClassList, 'switch_circle-t'].join(' ')}
          ></div>

          <div className={switchC1ClassList.join(' ')} id="switch-c1">
            <h2 className="switch_title title">Hello Friend！</h2>
            <p className="switch_description description">
              去注册一个账号，成为尊贵的粉丝会员，让我们踏入奇妙的旅途！
            </p>
            <button
              onClick={changeForm}
              className="switch_button button switch-btn"
            >
              SIGN UP
            </button>
          </div>

          <div className={switchC2ClassList.join(' ')} id="switch-c2">
            <h2 className="switch_title title">Welcome Back！</h2>
            <p className="switch_description description">
              已经有账号了嘛，去登入账号来进入奇妙世界吧！！！
            </p>
            <button
              onClick={changeForm}
              className="switch_button button switch-btn"
            >
              SIGN IN
            </button>
          </div>

          {/* <div className={switchC1ClassList.join(' ')} id="switch-c1">
            <h2 className="switch_title title">Welcome Back！</h2>
            <p className="switch_description description">
              已经有账号了嘛，去登入账号来进入奇妙世界吧！！！
            </p>
            <button onClick={changeForm} className="switch_button button switch-btn">SIGN IN</button>
          </div>

          <div className={switchC2ClassList.join(' ')} id="switch-c2">
            <h2 className="switch_title title">Hello Friend！</h2>
            <p className="switch_description description">
              去注册一个账号，成为尊贵的粉丝会员，让我们踏入奇妙的旅途！
            </p>
            <button onClick={changeForm} className="switch_button button switch-btn">SIGN UP</button>
          </div> */}
        </div>
      </div>
    </Container>
  );
};
export default Login;
