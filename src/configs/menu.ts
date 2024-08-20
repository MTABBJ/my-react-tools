const MenuList: Menu.MenuItemType[] = [
  {
    label: '控制台',
    icon: 'icon-dashboard',
    path: '/dashboard',
    permission: 'admin'
  },
  {
    label:'复刻页面',
    icon: 'icon-link',
    path: '/replica',
    children:[
      {
        label: '市场行情',
        icon: 'icon-link',
        path: '/replica/research',
      },
      {
        label: '导出为Word',
        icon: 'icon-link',
        path: '/replica/exportWord',
      },
      {
        label: '加水印',
        icon: 'icon-link',
        path: '/replica/watermark',
      },
      {
        label: '3D模型',
        icon: 'icon-link',
        path: '/replica/three3D',
      },
    ]
  },
  {
    label: '测试页面',
    path: '/example',
    icon: 'icon-all',
    children: [
      {
        label: '列表页',
        icon: 'icon-list',
        path: '/example/userList',
        permission: ['admin', 'guest']
      },
      {
        label: '权限测试页',
        icon: 'icon-list',
        path: '/example/permission',
        children: [
          {
            label: '菜单权限',
            icon: 'icon-list',
            path: '/example/permission/menu'
          },
          {
            label: '按钮权限',
            icon: 'icon-list',
            path: '/example/permission/button'
          }
        ]
      },
      {
        label: '多级菜单',
        icon: 'icon-list',
        path: '/multilevel/menu',
        children: [
          {
            label: '二级菜单',
            icon: 'icon-list',
            path: '/multilevel/menu/2',
            children: [
              {
                label: '三级菜单',
                icon: 'icon-list',
                path: '/multilevel/menu/2/3'
              }
            ]
          }
        ]
      },
      {
        label: 'Tabs标签页',
        icon: 'icon-lable',
        path: '/example/tabs',
        children: [
          {
            label: '标签管理',
            icon: 'icon-lable',
            path: '/example/tabs/manage'
          }
        ]
      },
      {
        label: '空白页',
        icon: 'icon-square',
        path: '/blank'
      },
      {
        label: '404',
        icon: 'icon-error',
        path: '/404'
      }
    ]
  },
  {
    label: '徽标示例',
    path: '/badge',
    icon: 'icon-lable',
    children: [
      {
        label: '红点徽标',
        icon: 'icon-lable',
        badge: 'dot',
        path: '/badge/dot'
      },
      {
        label: '数字徽标',
        icon: 'icon-lable',
        badge: 98,
        path: '/badge/count'
      }
    ]
  },
  {
    path: '/article',
    label: '文章管理',
    icon: 'icon-suggest',
    permission: 'admin',
    children: [
      {
        path: '/article/list',
        label: '文章列表',
        icon: 'icon-suggest'
      },
      {
        // 演示子页面不和父页面路径前缀一致时, 怎么去自动高亮菜单显示
        path: '/article/create',
        label: '发布文章',
        hideInMenu: true,
        parent: '/article/list'
      },
      {
        path: '/article/update',
        label: '更新文章',
        hideInMenu: true,
        parent: '/article/list'
      },
      {
        path: '/article/category',
        label: '分类管理',
        icon: 'icon-category'
      }
    ]
  },
  // {
  //   path: '/permission',
  //   label: '权限管理',
  //   icon: 'icon-permissions',
  //   children: [
  //     {
  //       path: '/permission/role',
  //       label: '角色列表',
  //       icon: 'icon-list'
  //     },
  //     {
  //       path: '/permission/node',
  //       label: '权限列表',
  //       icon: 'icon-permissions'
  //     },
  //     {
  //       path: '/permission/user',
  //       label: '用户列表',
  //       icon: 'icon-user-permissions'
  //     }
  //   ]
  // },
  {
    path: '/iframe',
    label: '外部页面',
    icon: 'icon-link',
    permission: 'admin',
    children: [
      // {
      //   path: 'https://ant-design.antgroup.com/components/overview-cn',
      //   label: 'antd文档(外链)',
      //   icon: 'icon-link',
      //   type: 'url'
      // },
      {
        path: 'https://ant-design.antgroup.com/components/overview-cn/',
        label: 'antd文档(内嵌)',
        icon: 'icon-link',
        type: 'iframe'
      },
      {
        path: 'https://baidu.com',
        label: '百度',
        icon: 'icon-link',
        type: 'iframe'
      }
    ]
  },

  {
    path: '/document',
    label: '文档',
    // 没写文档, 隐藏
    hideInMenu: true,
    icon: 'icon-link',
    children: [
      {
        path: '/document/start',
        label: '开始使用',
        icon: 'icon-link'
      },
      {
        path: '/document/package.json',
        label: 'Package文件说明',
        icon: 'icon-link'
      }
    ]
  },
  {
    path: '/user/center',
    label: '个人中心',
    icon: 'icon-customer',
    permission: (userInfo:any) => userInfo.roles.includes('admin'),
    children: [
      {
        path: '/user/center/index',
        label: '个人中心',
        icon: 'icon-customer'
      },
      {
        path: '/user/center/update',
        label: '修改信息',
        icon: 'icon-suggest'
      }
    ]
  }
];

// 调用这个方法获取菜单, 具体怎么获取全看怎么写
const generateMenuList = async (
  userInfo: Api.GetUserInfo['response']
): Promise<Menu.MenuItemType[]> => {
  return MenuList;
};
export { generateMenuList };
