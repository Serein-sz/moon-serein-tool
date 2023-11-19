import { AppleOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../store/modules/loginSlice';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    navigate('/code-notes')
  }, [])
  return (
    <>
      <Outlet></Outlet>
      <FloatButton onClick={() => dispatch(logout())} icon={<AppleOutlined />} />
    </>
  );
};
export default Home;
