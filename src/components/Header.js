import {
  ShoppingOutlined,
  UserOutlined,
  SearchOutlined,
  MenuOutlined
} from '@ant-design/icons';
import { Grid, Button, Dropdown, Image, Input, Layout, Select,Drawer  } from 'antd';
import React, { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LogoE from '../images/SHOP.CO1.png';
import { setUserLogin, setUserLogout } from '../store';
import LoginForm from './LoginForm';
import Banner from './Banner';
const { useBreakpoint } = Grid;
const { Header } = Layout;
const { Option } = Select;
const HeaderLayout = memo(() => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const is_user_login = useSelector((state) => state.is_user_login);
  const dispatch = useDispatch();
  const screens = useBreakpoint();

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };


  const onLogin = () => {
    setIsModalOpen(true)
  };
  const onLogout = () => {
    dispatch(setUserLogout(null));
  };

  const items = [
    {
      key: '1',
      label: (
        <div>
          Thông tin cá nhân
        </div>
      ),
    },
    {
      key: '2',
      label: (
        <div onClick={() => onLogout()}>
          Đăng xuất
        </div>
      ),
    },
  ]

  return (
    <div>
      <div className='header'>
        <div className="header_content">
          <div className="logo"><MenuOutlined style={{ fontSize: 20 }} onClick={showDrawer}/>&nbsp;<Image src={LogoE} width={"100%"} height={"100%"}></Image></div>
          {screens.xs || screens.sm && !screens.md ? "" :
            <>
              <div>Shop</div>
              <div>On sale</div>
              <div>New Arrivals</div>
              <div>Brands</div>
              <div className='search_input'>
                <Input
                  prefix={<SearchOutlined />}
                  bordered={false}
                  size='large'
                  placeholder='Tìm kiếm sản phẩm'
                  style={{
                    width: '100%',
                    backgroundColor: '#F0F0F0',
                    borderRadius: 20,
                  }}
                />
              </div>
            </>
          }
          <div style={{ display: 'flex',justifyContent:'center',alignItems:'center',fontSize:20 }}>
            <div style={{ cursor: 'pointer' }}><ShoppingOutlined /></div>
            <div style={{ padding: '0px 10px' }}>
              {
                is_user_login ?
                  <Dropdown
                    menu={{
                      items,
                    }}
                    placement="bottomLeft"
                  >
                    <div style={{ cursor: 'pointer' }}><UserOutlined /></div>
                  </Dropdown> : <div>
                    <Button onClick={onLogin}>Login</Button>
                  </div>
              }
            </div>
          </div>
        </div>
        <LoginForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        <Drawer title="Basic Drawer" onClose={onClose} open={open} placement={'left'} width={"60%"}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      </div>
      <Banner />
    </div>

  );
});
export default HeaderLayout;
