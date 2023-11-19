import { Calendar, Card, Col, List, Row, Statistic, Avatar, Space, Divider, Button } from 'antd';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { logout } from '../../store/modules/loginSlice';

const HeaderContainer = styled.div`
  width: 100%;
  margin: 10px;
  display: flex;
  gap: 10px;
`;

const CalenderContainer = styled.div`
  width: 30%;
  border: 1px solid #eee;
  border-radius: 8px;
`;

const onPanelChange = (value, mode) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};

const onChange = date => {
  console.log(date.format('YYYY-MM-DD'));
};

const FinancialManagement = () => {
  const dispatch = useDispatch();
  const currentIncome = 6500;
  const currentExpenses = 6500;
  const averageExpenses = 6500;
  const surplusAssets = 6500;
  const accumulationFund = 1600;
  const data = [
    {
      title: 'Ant Design Title 1'
    },
    {
      title: 'Ant Design Title 1'
    },
    {
      title: 'Ant Design Title 1'
    },
    {
      title: 'Ant Design Title 1'
    },
    {
      title: 'Ant Design Title 1'
    }
  ];
  return (
    <>
      <HeaderContainer>
        <CalenderContainer>
          <Calendar
            fullscreen={false}
            onPanelChange={onPanelChange}
            onChange={onChange}
          />
        </CalenderContainer>
        <Card>
          <Space direction="vertical" size={16}>
            <Row gutter={16}>
              <Col>
                <Statistic
                  title="本月收入"
                  value={currentIncome}
                  suffix="¥"
                ></Statistic>
              </Col>
              <Col>
                <Statistic
                  title="本月支出"
                  value={currentExpenses}
                  suffix="¥"
                ></Statistic>
              </Col>
              <Col>
                <Statistic
                  title="平均支出/月"
                  value={averageExpenses}
                  suffix="¥"
                ></Statistic>
              </Col>
              <Col>
                <Statistic
                  title="剩余资产"
                  value={surplusAssets}
                  suffix="¥"
                ></Statistic>
              </Col>
              <Col>
                <Statistic
                  title="公积金"
                  value={accumulationFund}
                  suffix="¥"
                ></Statistic>
              </Col>
            </Row>
            <Row>
              <List
                size="small"
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item, index) => (
                  <List.Item>{item.title}</List.Item>
                )}
              ></List>
            </Row>
          </Space>
        </Card>
      </HeaderContainer>
      <Button onClick={() => dispatch(logout())}>LOG OUT</Button>
    </>
  );
};
export default FinancialManagement;
