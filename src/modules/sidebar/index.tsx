import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Link } from "preact-router";
import { linkMenu } from "./link";
import { useEffect, useState } from "preact/hooks";
import { KEYS_MENU } from "./constants";

const Sidebar = () => {
    const [isActive, setIsActive] = useState('');
    const [path, setPath] = useState('');

    const updatePath = () => {
        setPath(window.location.pathname)
    }

    useEffect(() => {
        updatePath();
        window.addEventListener('popstate', updatePath);
        return () => {
            window.removeEventListener('popstate', updatePath);
        }
    }, [isActive])

    const onClickMenuItem = (key: string) => {
        setIsActive(key);
    }

    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
            class={`h-100`}
        >
            <div className="demo-logo-vertical" />
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['4']}>
                {
                    linkMenu.map((item, _) => {
                        return (
                            <Menu.Item key={item.key} className={`${(path === '/' ? `/${KEYS_MENU.HOME}`: path).includes(item.key) ? 'bg-blue-500' : ''}`}>
                                <Link href={item.path} onClick={() => onClickMenuItem(item.key)}>
                                    <a class={`flex align-middle`}>
                                        <span className="nav-text">{item.name}</span>
                                    </a>
                                </Link>
                            </Menu.Item>
                        )
                    })
                }
            </Menu>
        </Sider>
    )
}

export default Sidebar;