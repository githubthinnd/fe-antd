import { Layout, theme } from 'antd';
import Sidebar from '../sidebar';

const { Header, Content, Footer } = Layout;

interface IProps {
    component: () => any;
}
const MainLayout = (props: IProps) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout class={`h-100`}>
        <Sidebar/>
        <Layout>
            <Header style={{ padding: 0, background: colorBgContainer }} />
            <Content style={{ margin: '24px 16px 0' }}>
                {props.component}
            </Content>
            <Footer style={{ textAlign: 'center' }}>Copy right by Thinnd</Footer>
        </Layout>
        </Layout>
    )
}

export default MainLayout;