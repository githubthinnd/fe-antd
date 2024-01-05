import {
    AlipayOutlined,
    LockOutlined,
    MobileOutlined,
    TaobaoOutlined,
    UserOutlined,
    WeiboOutlined,
} from '@ant-design/icons';
import {
    LoginFormPage,
    ProConfigProvider,
    ProFormCaptcha,
    ProFormCheckbox,
    ProFormText,
} from '@ant-design/pro-components';
import { Button, Divider, Space, Tabs, message, theme } from 'antd';
import axios from 'axios';
import { CSSProperties, useState } from 'preact/compat';
import { ILogin } from './interfaces';
import { saveTokens, saveUserInfoToLocal } from '../../utils/func';
import { useAuth } from '../auth/AuthProvider';

type LoginType =  'account';
  
const Login = () => {
    const [loginType, setLoginType] = useState<LoginType>('account');
    const { token } = theme.useToken();

   const auth = useAuth();

    return (
      <div
        style={{
          backgroundColor: 'white',
          height: '100vh',
        }}
      >
        <LoginFormPage
          backgroundImageUrl="https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*y0ZTS6WLwvgAAAAAAAAAAAAADml6AQ/fmt.webp"
          logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
          backgroundVideoUrl="https://gw.alipayobjects.com/v/huamei_gcee1x/afts/video/jXRBRK_VAwoAAAAAAAAAAAAAK4eUAQBr"
          title="WH"
          containerStyle={{
            backgroundColor: 'rgba(255, 255, 255, 1)',
            backdropFilter: 'blur(4px)',
            borderRadius: 20,
            boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
          }}
          subTitle="Đăng nhập hệ thống"
          activityConfig={{}}
          actions={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <Divider plain>
                <span
                  style={{
                    color: token.colorTextPlaceholder,
                    fontWeight: 'normal',
                    fontSize: 14,
                  }}
                >
                  Other Methods
                </span>
              </Divider>
              <Space align="center" size={24}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    height: 40,
                    width: 40,
                    border: '1px solid ' + token.colorPrimaryBorder,
                    borderRadius: '50%',
                  }}
                >
                </div>
              </Space>
            </div>
          }
          submitter={{
            render(props, dom) {
              return (
                <Button onClick={() => {
                  const username = props.form?.getFieldValue('username')
                  const password = props.form?.getFieldValue('password')

                  auth.login(username, password);

                  // Xử lý login API
                }} className={`w-80`}>
                  Login
                </Button>
              )
            },
          }}
        >
 
          {loginType === 'account' && (
            <>
              <ProFormText
                name="username"
                fieldProps={{
                  size: 'large',
                  prefix: (
                    <UserOutlined
                      style={{
                        color: token.colorText,
                      }}
                      className={'prefixIcon'}
                    />
                  ),
                }}
                placeholder={'Username or Email'}
                rules={[
                  {
                    required: true,
                    message: 'Please enter your Username or Email',
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: 'large',
                  prefix: (
                    <LockOutlined
                      style={{
                        color: token.colorText,
                      }}
                      className={'prefixIcon'}
                    />
                  ),
                }}
                placeholder={'Password'}
                rules={[
                  {
                    required: true,
                    message: 'Please enter your Password',
                  },
                ]}
              />
            </>
          )}
         
          <div
            style={{
              marginBlockEnd: 24,
            }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
              Remember Me
            </ProFormCheckbox>
            <a
              style={{
                float: 'right',
              }}
            >
              Did you forgot your password
            </a>
          </div>
        </LoginFormPage>
      </div>
    );
};
  
export default () => {
    return (
        <ProConfigProvider>
            <Login />
        </ProConfigProvider>
    );
};