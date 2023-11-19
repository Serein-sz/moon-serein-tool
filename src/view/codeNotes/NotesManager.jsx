import styled from 'styled-components';

import { FileFilled, FolderFilled } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';

const SideBarMenu = styled.div`
  width: 15rem;
  background-color: #fafafa;
`;
const NotesManager = () => {
  const items = [{ key: '1', icon: <FileFilled />, label: '函数式组件' }];
  const [dragging, setDragging] = useState(false);

  const handleDragEnter = event => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDragOver = event => {
    event.preventDefault();
  };

  const handleDrop = event => {
    event.preventDefault();
    setDragging(false);

    // 处理上传逻辑
    const files = Array.from(event.dataTransfer.files);
    // 执行上传操作或其他处理
    console.log(files);
  };
  return (
    <SideBarMenu
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <Menu
        defaultSelectedKeys={['1']}
        mode="inline"
        items={items}
        style={{ backgroundColor: '#fafafa' }}
      />
    </SideBarMenu>
  );
};
export default NotesManager;
