"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_vue["default"].use(_vueRouter["default"]);

var router = new _vueRouter["default"]({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: function scrollBehavior() {
    return {
      x: 0,
      y: 0
    };
  },
  routes: [{
    // =============================================================================
    // MAIN LAYOUT ROUTES
    // =============================================================================
    path: '',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./layouts/main/Main.vue'));
      });
    },
    children: [// =============================================================================
    // Theme Routes
    // =============================================================================
    {
      path: '/panel/',
      redirect: '/dashboard'
    }, {
      path: '/panel/dashboard',
      name: 'dashboard',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('./views/DashboardAnalytics.vue'));
        });
      },
      meta: {
        rule: 'user'
      }
    }, {
      path: '/panel/admin-dashboard',
      name: 'admin-dashboard',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('./views/AdminDashboard.vue'));
        });
      },
      meta: {
        rule: 'admin'
      }
    }, // =============================================================================
    //                        USER CONTENT PAGES
    // =============================================================================
    {
      path: '/panel/chat',
      name: 'chat',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/pages/user/chat/chat.vue'));
        });
      },
      meta: {
        pageTitle: 'Chat',
        rule: 'user'
      }
    }, {
      path: '/panel/token',
      name: 'Token',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/pages/user/token/list/tokenList.vue'));
        });
      },
      meta: {
        pageTitle: 'Token',
        rule: 'user'
      }
    }, {
      path: '/panel/doping',
      name: 'doping',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/pages/user/doping/dopingList.vue'));
        });
      },
      meta: {
        pageTitle: 'Account Doping',
        rule: 'user'
      }
    }, {
      path: '/panel/cases',
      name: 'Cases',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/pages/user/case/cases.vue'));
        });
      },
      meta: {
        pageTitle: 'Cases',
        rule: 'user'
      }
    }, {
      path: '/panel/following',
      name: 'Following',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/pages/user/following/following.vue'));
        });
      },
      meta: {
        pageTitle: 'Following',
        rule: 'user'
      }
    }, {
      path: '/panel/blog-post',
      name: 'blog-post',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/pages/user/blog-post/postList.vue'));
        });
      },
      meta: {
        pageTitle: 'BlogPosts',
        rule: 'user'
      }
    }, {
      path: '/panel/file-manager',
      name: 'FileManager',
      meta: {
        rule: 'user'
      }
    }, //MAIN PAGE
    {
      path: '/panel/file-manager-upload',
      name: 'FileUpload',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/pages/user/file-manager/FileManagerUpload.vue'));
        });
      },
      meta: {
        breadcrumb: [{
          title: 'Anasayfa',
          url: '/'
        }, {
          title: 'FileUpload'
        }, {
          title: 'List',
          active: true
        }],
        pageTitle: 'FileManager',
        rule: 'user'
      }
    }, {
      path: '/panel/file-manager-list',
      name: 'FileList',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/pages/user/file-manager/FileManagerList.vue'));
        });
      },
      meta: {
        breadcrumb: [{
          title: 'Anasayfa',
          url: '/'
        }, {
          title: 'FileList'
        }, {
          title: 'List',
          active: true
        }],
        pageTitle: 'FileList',
        rule: 'user'
      }
    }, ///////////////////////   USER CONTENT PAGES - END  /////////////////////////////
    // =============================================================================
    //                        ADMIN CONTENT PAGES
    // =============================================================================
    // ============================
    // =======SITE SETTINGS========
    // ============================
    {
      path: '/panel/components',
      name: 'components',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/pages/admin/site-settings/component/component-settings.vue'));
        });
      },
      meta: {
        breadcrumb: [{
          title: 'Anasayfa',
          url: '/'
        }, {
          title: 'Components'
        }, {
          title: 'List',
          active: true
        }],
        pageTitle: 'Components',
        rule: 'admin'
      }
    }, // ============================
    // =======POST & PAGE========
    // ============================
    {
      path: '/panel/pages',
      name: 'pages',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/pages/admin/content/page/list/pageList.vue'));
        });
      },
      meta: {
        breadcrumb: [{
          title: 'Anasayfa',
          url: '/'
        }, {
          title: 'Pages'
        }, {
          title: 'List',
          active: true
        }],
        pageTitle: 'Pages',
        rule: 'admin'
      }
    }, {
      path: '/panel/posts',
      name: 'posts',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/pages/admin/content/post/list/postList.vue'));
        });
      },
      meta: {
        breadcrumb: [{
          title: 'Anasayfa',
          url: '/'
        }, {
          title: 'Posts'
        }, {
          title: 'List',
          active: true
        }],
        pageTitle: 'Posts',
        rule: 'admin'
      }
    }, // FOR USERS & ADMIN
    {
      path: '/panel/products',
      name: 'products',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/pages/admin/content/product/list/productList.vue'));
        });
      },
      meta: {
        breadcrumb: [{
          title: 'Anasayfa',
          url: '/'
        }, {
          title: 'Products'
        }, {
          title: 'List',
          active: true
        }],
        pageTitle: 'Products',
        rule: 'admin'
      }
    }, {
      path: '/panel/categories',
      name: 'categories',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/pages/admin/content/category/list/categoryList.vue'));
        });
      },
      meta: {
        breadcrumb: [{
          title: 'Anasayfa',
          url: '/'
        }, {
          title: 'Categories'
        }, {
          title: 'List',
          active: true
        }],
        pageTitle: 'Categories',
        rule: 'admin'
      }
    }, {
      path: '/panel/forms',
      name: 'Forms',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/pages/admin/content/form/list/formList.vue'));
        });
      },
      meta: {
        breadcrumb: [{
          title: 'Anasayfa',
          url: '/'
        }, {
          title: 'Forms'
        }, {
          title: 'List',
          active: true
        }],
        pageTitle: 'Forms',
        rule: 'admin'
      }
    }, {
      path: '/panel/packages',
      name: 'packages',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/pages/admin/content/package/list.vue'));
        });
      },
      meta: {
        breadcrumb: [{
          title: 'HomePage',
          url: '/'
        }, {
          title: 'Packages'
        }, {
          title: 'List',
          active: true
        }],
        pageTitle: 'Packages',
        rule: 'admin'
      }
    }, {
      path: '/panel/subscriptions',
      name: 'subscriptions',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/pages/admin/content/subscription/list.vue'));
        });
      },
      meta: {
        breadcrumb: [{
          title: 'HomePage',
          url: '/'
        }, {
          title: 'Subscriptions'
        }, {
          title: 'List',
          active: true
        }],
        pageTitle: 'Subscriptions',
        rule: 'admin'
      }
    }, {
      path: '/panel/token-requests',
      name: 'token-requests',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/pages/admin/content/token-request/list.vue'));
        });
      },
      meta: {
        breadcrumb: [{
          title: 'HomePage',
          url: '/'
        }, {
          title: 'tokenRequests'
        }, {
          title: 'List',
          active: true
        }],
        pageTitle: 'tokenRequests',
        rule: 'admin'
      }
    }, // ============================
    // ==========USERS=============
    // ============================
    {
      path: '/panel/users',
      name: 'users',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/pages/admin/users/user-list/UserList.vue'));
        });
      },
      meta: {
        breadcrumb: [{
          title: 'Home',
          url: '/'
        }, {
          title: 'Users'
        }, {
          title: 'List',
          active: true
        }],
        pageTitle: 'Users',
        rule: 'admin'
      }
    }, {
      path: '/panel/users/user-view/:userId',
      name: 'app-user-view',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/pages/admin/users/UserView.vue'));
        });
      },
      meta: {
        breadcrumb: [{
          title: 'Home',
          url: '/'
        }, {
          title: 'User'
        }, {
          title: 'View',
          active: true
        }],
        pageTitle: 'User View',
        rule: 'admin'
      }
    }, {
      path: '/panel/users/edit/:userId',
      name: 'user-edit',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/pages/admin/users/user-edit/UserEdit.vue'));
        });
      },
      meta: {
        breadcrumb: [{
          title: 'Home',
          url: '/'
        }, {
          title: 'User'
        }, {
          title: 'Edit',
          active: true
        }],
        pageTitle: 'User Edit',
        rule: 'admin'
      }
    }, ///////////////////////   ADMIN CONTENT PAGES - END  /////////////////////////////
    // =============================================================================
    //                        COMMON PAGES
    // =============================================================================
    {
      path: '/panel/profile',
      name: 'user-settings',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/pages/common/user-settings/UserSettings.vue'));
        });
      },
      meta: {
        breadcrumb: [{
          title: 'Homepage',
          url: '/'
        }, {
          title: 'UserSettings',
          active: true
        }],
        pageTitle: 'UserSettings',
        rule: 'user'
      }
    } ///////////////////////   COMMON PAGES - END  /////////////////////////////
    ]
  }, // =============================================================================
  // FULL PAGE LAYOUTS
  // =============================================================================
  {
    path: '',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/layouts/full-page/FullPage.vue'));
      });
    },
    children: [// =============================================================================
    // PAGES
    // =============================================================================
    {
      path: '/panel/login',
      name: 'login',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/pages/common/auth/login/Login.vue'));
        });
      },
      meta: {
        rule: 'guest'
      }
    }, {
      path: '/panel/register',
      name: 'register',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/pages/common/auth/register/Register.vue'));
        });
      },
      meta: {
        rule: 'guest'
      }
    }, {
      path: '/panel/email/verify/:id',
      name: 'verification.verify',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/pages/common/auth/verification/verify.vue'));
        });
      },
      meta: {
        rule: 'guest'
      }
    }, {
      path: '/panel/email/resend',
      name: 'verification.resend',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/pages/common/auth/verification/resend.vue'));
        });
      },
      meta: {
        rule: 'guest'
      }
    }, {
      path: '/panel/password/email',
      name: 'password.email',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/pages/common/auth/password/email.vue'));
        });
      },
      meta: {
        rule: 'guest'
      }
    }, {
      path: '/panel/password/reset',
      name: 'password.reset',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/pages/common/auth/password/reset.vue'));
        });
      },
      meta: {
        rule: 'guest'
      }
    }, {
      path: '/panel/comingsoon',
      name: 'page-coming-soon',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/pages/common/errors/ComingSoon.vue'));
        });
      },
      meta: {
        rule: 'user'
      }
    }, {
      path: '/panel/404',
      name: '404',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/pages/common/errors/Error404.vue'));
        });
      },
      meta: {
        rule: '*'
      }
    }, {
      path: '/panel/error-500',
      name: 'page-error-500',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/pages/common/errors/Error500.vue'));
        });
      },
      meta: {
        rule: '*'
      }
    }, {
      path: '/panel/not-authorized',
      name: 'page-not-authorized',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/pages/common/errors/NotAuthorized.vue'));
        });
      },
      meta: {
        rule: '*'
      }
    }, {
      path: '/panel/maintenance',
      name: 'page-maintenance',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/pages/common/errors/Maintenance.vue'));
        });
      },
      meta: {
        rule: '*'
      }
    }]
  }, // Redirect to 404 page, if no match found
  {
    path: '*',
    redirect: '/404'
  }]
});
router.afterEach(function () {
  // Remove initial loading
  var appLoading = document.getElementById('loading-bg');

  if (appLoading) {
    appLoading.style.display = 'none';
  }
});
var _default = router;
exports["default"] = _default;