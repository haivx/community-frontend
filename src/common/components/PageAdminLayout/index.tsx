import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useNavigate } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { EditOutlined, CopyOutlined, SettingOutlined, TeamOutlined, SnippetsOutlined } from '@ant-design/icons'
import { Wrapper } from './styles'

const { Header, Content, Footer, Sider } = Layout

interface PageAdminLayoutProps {
  children: React.ReactNode
  title?: string
}

const PageAdminLayout = ({ children, title }: PageAdminLayoutProps) => {
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false)
  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed)
  }

  const onClickMenu = ({ key }: { key: string }) => {
    navigate(key)
  }
  //@ts-ignore
  const helmet = <Helmet><title>{title}</title></Helmet>
  return (
    <Wrapper>
      {helmet}
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            onClick={onClickMenu}
            items={
              [
                {
                  key: '1',
                  icon: <SnippetsOutlined />,
                  label: 'Posts',
                  children: [
                    {
                      key: '/admin/list-post',
                      icon: <CopyOutlined />,
                      label: 'List posts',
                    },
                    {
                      key: '/admin/create-post',
                      icon: <EditOutlined />,
                      label: (
                        <Link to="/create-post" className="nav-link">
                          Create posts
                        </Link>
                      ),
                    },
                  ],
                },
                {
                  key: '2',
                  icon: <TeamOutlined />,
                  label: 'Users',
                },
                {
                  key: '3',
                  icon: <SettingOutlined />,
                  label: 'Settings',
                },
              ] as any
            }
          />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <div>{children}</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>XuanHai.dev 2022 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </Wrapper>
  )
}

export default PageAdminLayout
