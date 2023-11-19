import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './modules/loginSlice';
import { message } from 'antd';

// 将 Redux 状态保存到 localStorage
const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (e) {
    message.error('redux saveStateToLocalStorage is error :' + e);
  }
}

// 从 localStorage 加载 Redux 状态
const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined; // 如果状态不存在，返回 undefined
    }
    return JSON.parse(serializedState);
  } catch (e) {
    message.error('redux loadStateFromLocalStorage is error :' + e);
    return undefined; // 如果发生错误，返回 undefined
  }
}

const store = configureStore({
  reducer: {
    login: loginSlice
  },
  preloadedState: loadStateFromLocalStorage()
});

store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
})

export default store;