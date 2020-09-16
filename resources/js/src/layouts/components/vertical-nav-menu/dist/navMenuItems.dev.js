"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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
var _default = [{
  url: '/panel/dashboard',
  slug: '/panel/dashboard',
  name: 'dashboard',
  // tag: "2",
  // tagColor: "warning",
  icon: 'HomeIcon',
  i18n: 'Dashboard'
}, {
  header: 'Menu',
  icon: 'PackageIcon',
  i18n: 'Menu',
  rule: 'user',
  items: [//USER AREA
  {
    url: '/panel/chat',
    name: 'Chat',
    slug: '/panel/chat',
    icon: 'MessageSquareIcon',
    i18n: 'Chat'
  }, {
    url: '/panel/token',
    name: 'Token',
    slug: '/panel/token',
    icon: 'DollarSignIcon',
    i18n: 'Token'
  }, {
    url: '/panel/doping',
    name: 'Doping',
    slug: '/panel/doping',
    icon: 'SendIcon',
    i18n: 'AccountDoping'
  }, {
    url: '/panel/cases',
    slug: '/panel/cases',
    name: 'Cases',
    icon: 'BriefcaseIcon',
    i18n: 'Cases'
  }, {
    url: '/panel/following',
    name: 'Following',
    slug: '/panel/following',
    icon: 'ActivityIcon',
    i18n: 'Following'
  }, {
    url: '/panel/blog-post',
    slug: '/panel/blog-post',
    name: 'blog-post',
    icon: 'FileTextIcon',
    i18n: 'Blog'
  }, {
    url: '/panel/file-manager',
    name: 'FileManager',
    icon: 'UploadIcon',
    i18n: 'FileManager',
    submenu: [{
      url: '/panel/file-manager-upload',
      slug: '/panel/file-manager-upload',
      name: 'FileUpload',
      icon: 'UploadIcon',
      i18n: 'FileUpload'
    }, {
      url: '/panel/file-manager-list',
      slug: '/panel/file-manager-list',
      name: 'FileList',
      icon: 'UploadIcon',
      i18n: 'FileList'
    }]
  }, //ADMIN
  {
    url: '/panel/packages',
    slug: '/panel/packages',
    name: 'packages',
    icon: 'PackageIcon',
    i18n: 'Packages'
  }, {
    url: '/panel/subscriptions',
    slug: '/panel/subscriptions',
    name: 'subscriptions',
    icon: 'UserPlusIcon',
    i18n: 'Subscriptions'
  }, {
    url: '/panel/token-requests',
    slug: '/panel/token-requests',
    name: 'token-requests',
    icon: 'DollarSignIcon',
    i18n: 'tokenRequests'
  }, {
    url: '/panel/components',
    slug: '/panel/components',
    name: 'components',
    icon: 'CreditCardIcon',
    i18n: 'Components'
  }, {
    url: '/panel/users',
    slug: '/panel/users',
    name: 'Users',
    icon: 'UserIcon',
    i18n: 'Users'
  }]
}
/*   {
     url:'/panel/main-pages',
     name: 'MainPages',
     icon: "FileIcon",
     i18n: "Content",
     submenu:[
       {
         url:'/panel/pages',
         slug: "/panel/pages",
         name: "Pages",
         icon: "FileIcon",
         i18n: "Pages",
       },
       {
         url:'/panel/posts',
         slug: "/panel/posts",
         name: "Posts",
         icon: "FileTextIcon",
         i18n: "Posts",
       },
       {
         url:'/panel/products',
         slug: "/panel/products",
         name: "Products",
         icon: "FileTextIcon",
         i18n: "Products",
       },
       {
         url:'/panel/certificates',
         slug: "/panel/certificates",
         name: "Certificates",
         icon: "FileTextIcon",
         i18n: "Certificates",
       },
       {
         url:'/panel/categories',
         slug: "/panel/categories",
         name: "Categories",
         icon: "PauseIcon",
         i18n: "Categories",
       },
       {
         url:'/panel/forms',
         slug: "/panel/forms",
         name: "Forms",
         icon: "PauseIcon",
         i18n: "Forms",
       },
     ]
   },*/
];
exports["default"] = _default;