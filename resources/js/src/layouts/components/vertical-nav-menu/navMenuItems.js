/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: https://www.dijitalreklam.org
==========================================================================================*/


export default [

  {
    url: '/panel/dashboard',
    slug: '/panel/dashboard',
    name: 'dashboard',
    // tag: "2",
    // tagColor: "warning",
    icon: 'HomeIcon',
    i18n: 'Dashboard'
  },
  {
    header: 'Menu',
    icon: 'PackageIcon',
    i18n: 'Menu',
    rule:'admin',
    items: [
      //ADMIN
    //   {
    //     url: '/panel/orders',
    //     slug: '/panel/orders',
    //     name: 'Orders',
    //     icon: 'PackageIcon',
    //     i18n: 'Packages'
    //   },
    //   {
    //     url: '/panel/subscriptions',
    //     slug: '/panel/subscriptions',
    //     name: 'subscriptions',
    //     icon: 'UserPlusIcon',
    //     i18n: 'Subscriptions'
    //   },
    //   {
    //     url: '/panel/token-requests',
    //     slug: '/panel/token-requests',
    //     name: 'token-requests',
    //     icon: 'DollarSignIcon',
    //     i18n: 'tokenRequests'
    //   },
      {
        url:'/panel/components',
        slug: '/panel/components',
        name: 'components',
        icon: 'CreditCardIcon',
        i18n: 'Components'
      },
      {
        url: '/panel/users',
        slug: '/panel/users',
        name: 'Users',
        icon: 'UserIcon',
        i18n: 'Users'
      }

    ]
  },

  {
    url:'/panel/file-manager',
    name: 'FileManager',
    icon: 'UploadIcon',
    i18n: 'FileManager',
    submenu:[
      {
        url:'/panel/file-manager-upload',
        slug: '/panel/file-manager-upload',
        name: 'FileUpload',
        icon: 'UploadIcon',
        i18n: 'FileUpload'
      },
      {
        url:'/panel/file-manager-list',
        slug: '/panel/file-manager-list',
        name: 'FileList',
        icon: 'UploadIcon',
        i18n: 'FileList'
      }
    ]
  },
  {
    url:'/panel/main-pages',
    name: 'MainPages',
    icon: 'FileIcon',
    i18n: 'Content',
    submenu:[
      {
        url:'/panel/pages',
        slug: '/panel/pages',
        name: 'pages',
        icon: 'FileIcon',
        i18n: 'Pages'
      },
      {
        url:'/panel/posts',
        slug: '/panel/posts',
        name: 'posts',
        icon: 'FileTextIcon',
        i18n: 'Posts'
      },
      {
        url:'/panel/categories',
        slug: '/panel/categories',
        name: 'Categories',
        icon: 'PauseIcon',
        i18n: 'Categories'
      },
      {
        url:'/panel/forms',
        slug: '/panel/forms',
        name: 'Forms',
        icon: 'PauseIcon',
        i18n: 'Forms'
      }
    ]
  },
  {
    url:'/panel/e-commerce',
    name: 'eCommerce',
    icon: 'ShoppingCartIcon',
    i18n: 'ECommerce',
    submenu:[
      {
        url:'/panel/products',
        slug: '/panel/products',
        name: 'products',
        icon: 'FileTextIcon',
        i18n: 'Products'
      },
      {
        url: '/panel/orders',
        slug: '/panel/orders',
        name: 'Orders',
        icon: 'PackageIcon',
        i18n: 'Orders'
      }

    ]
  }


]

