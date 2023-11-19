import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import store from './store';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN.js'
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn.js'
dayjs.locale('zh-cn')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);
