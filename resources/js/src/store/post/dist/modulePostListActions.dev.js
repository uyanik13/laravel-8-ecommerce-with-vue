"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("../../plugins/axios.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*=========================================================================================
  File Name: moduleCalendarActions.js
  Description: Calendar Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: https://www.dijitalreklam.org
==========================================================================================*/
var _default = {
  addItem: function addItem(_ref, data) {
    var commit = _ref.commit;
    return new Promise(function (resolve, reject) {
      _axios["default"].post('/api/post', {
        title: data.title,
        description: data.description,
        category_id: data.category,
        content1: data.content1,
        seo_title: data.seo_title,
        seo_description: data.seo_description,
        status: data.status,
        options: data.options,
        image: data.image,
        type: data.type
      }).then(function (response) {
        if (data.type === 'page') commit('ADD_PAGE', Object.assign(data, {
          id: response.data.id,
          title: data.title,
          url: data.title,
          description: data.description,
          category_id: data.category,
          content1: data.content1,
          seo_title: data.seo_title,
          seo_description: data.seo_description,
          image: data.image,
          type: data.type,
          status: data.status
        }));
        if (data.type === 'post') commit('ADD_ITEM', Object.assign(data, {
          id: response.data.id,
          title: data.title,
          url: data.title,
          description: data.description,
          category_id: data.category,
          content1: data.content1,
          seo_title: data.seo_title,
          seo_description: data.seo_description,
          image: data.image,
          video: data.video,
          type: data.type,
          status: data.status
        }));
        if (data.type === 'product') commit('ADD_PRODUCT', Object.assign(data, {
          id: response.data.id,
          title: data.title,
          url: data.title,
          description: data.description,
          category_id: data.category,
          options: data.options,
          content1: data.content1,
          seo_title: data.seo_title,
          seo_description: data.seo_description,
          image: data.image,
          type: data.type,
          status: data.status
        }));
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  addCategory: function addCategory(_ref2, data) {
    var commit = _ref2.commit;
    return new Promise(function (resolve, reject) {
      _axios["default"].post('/api/addCategory', data).then(function (response) {
        commit('ADD_CATEGORY', Object.assign(data, {
          id: response.data.id,
          title: data.title,
          url: data.title,
          seo_title: data.seo_title,
          seo_description: data.seo_description
        }));
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  fetchItems: function fetchItems(_ref3) {
    var commit = _ref3.commit;
    return new Promise(function (resolve, reject) {
      _axios["default"].get('/api/post').then(function (response) {
        //console.log('POST ACTION - POSTS:',response.data.posts)
        response.data.posts.forEach(function (element) {
          var page = response.data.posts.filter(function (element) {
            return element.type === 'page';
          });
          var post = response.data.posts.filter(function (element) {
            return element.type === 'post';
          });
          var service = response.data.posts.filter(function (element) {
            return element.type === 'service';
          });
          var product = response.data.posts.filter(function (element) {
            return element.type === 'product';
          });
          var certificate = response.data.posts.filter(function (element) {
            return element.type === 'certificate';
          }); // console.log('PRODUCT ACTION - POSTS:',product)

          commit('SET_PAGES', page);
          commit('SET_ITEM', post);
          commit('SET_SERVICES', service);
          commit('SET_PRODUCTS', product);
          commit('SET_CERTIFICATE', certificate);
        });
        commit('SET_CATEGORIES', response.data.categories);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  updateItem: function updateItem(_ref4, data) {
    var commit = _ref4.commit;
    return new Promise(function (resolve, reject) {
      //console.log('payload',data)
      _axios["default"].patch("/api/post/".concat(data.id), data).then(function (response) {
        if (data.type === 'post') commit('UPDATE_ITEM', data);
        if (data.type === 'page') commit('UPDATE_PAGE', data);
        if (data.type === 'category') commit('UPDATE_CATEGORY', data);
        if (data.type === 'certificate') commit('UPDATE_CERTIFICATE', data);
        if (data.type === 'service') commit('UPDATE_SERVICES', data);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  removeItem: function removeItem(_ref5, itemId) {
    var commit = _ref5.commit;
    return new Promise(function (resolve, reject) {
      _axios["default"]["delete"]("/api/post/".concat(itemId)).then(function (response) {
        commit('REMOVE_ITEM', itemId);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  removeCategory: function removeCategory(_ref6, itemId) {
    var commit = _ref6.commit;
    return new Promise(function (resolve, reject) {
      _axios["default"].post('/api/removeCategory', {
        id: itemId
      }).then(function (response) {
        commit('REMOVE_CATEGORY', itemId);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  //Custom
  fetchMyCases: function fetchMyCases(_ref7) {
    var commit = _ref7.commit;
    return new Promise(function (resolve, reject) {
      _axios["default"].get('/api/cases/my-cases').then(function (response) {
        // console.log('POST ACTION - POSTS:',response.data.posts)
        response.data.posts.forEach(function (element) {
          // const page = response.data.posts.filter(element => element.type === 'page');
          // const post = response.data.posts.filter(element => element.type === 'post');
          // const product = response.data.posts.filter(element => element.type === 'product');
          // const certificate = response.data.posts.filter(element => element.type === 'certificate'):
          var service = response.data.posts.filter(function (element) {
            return element.type === 'service';
          });
          commit('SET_MyServices', service);
        });
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  fetchMyContracts: function fetchMyContracts(_ref8) {
    var commit = _ref8.commit;
    return new Promise(function (resolve, reject) {
      _axios["default"].get('/api/contract').then(function (response) {
        // console.log('POST ACTION - CONTRACTS:',response.data)
        commit('SET_CONTRACTS', response.data);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  createContract: function createContract(_ref9, data) {
    var commit = _ref9.commit;
    return new Promise(function (resolve, reject) {
      _axios["default"].post('/api/contract', data).then(function (response) {
        commit('ADD_CONTRACT', Object.assign(data, {
          id: response.data.id,
          post_id: data.post_id,
          from: data.id
        }));
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  updateContract: function updateContract(_ref10, data) {
    var commit = _ref10.commit;
    return new Promise(function (resolve, reject) {
      //console.log('payload',data)
      _axios["default"].patch("/api/contract/".concat(data.id), data).then(function (response) {
        commit('UPDATE_CONTRACTS', data);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  fetchCountries: function fetchCountries(_ref11) {
    var commit = _ref11.commit;
    return new Promise(function (resolve, reject) {
      _axios["default"].get('/geo').then(function (response) {
        // console.log('POST ACTION - POSTS:',response.data)
        commit('SET_COUNTRIES', response.data);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  fetchCities: function fetchCities(_ref12, data) {
    var commit = _ref12.commit;
    return new Promise(function (resolve, reject) {
      //console.log('payload',data)
      _axios["default"].get("/geo/".concat(data)).then(function (response) {
        commit('SET_CITIES', response.data);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  }
};
exports["default"] = _default;