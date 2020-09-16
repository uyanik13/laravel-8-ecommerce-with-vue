"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _VxTooltip = _interopRequireDefault(require("./layouts/components/vx-tooltip/VxTooltip.vue"));

var _VxCard = _interopRequireDefault(require("./components/vx-card/VxCard.vue"));

var _VxList = _interopRequireDefault(require("./components/vx-list/VxList.vue"));

var _VxBreadcrumb = _interopRequireDefault(require("./layouts/components/VxBreadcrumb.vue"));

var _FeatherIcon = _interopRequireDefault(require("./components/FeatherIcon.vue"));

var _VxInputGroup = _interopRequireDefault(require("./components/vx-input-group/VxInputGroup.vue"));

var _vueSelect = _interopRequireDefault(require("vue-select"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*=========================================================================================
  File Name: globalComponents.js
  Description: Here you can register components globally
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: https://www.dijitalreklam.org
==========================================================================================*/
_vue["default"].component(_VxTooltip["default"].name, _VxTooltip["default"]);

_vue["default"].component(_VxCard["default"].name, _VxCard["default"]);

_vue["default"].component(_VxList["default"].name, _VxList["default"]);

_vue["default"].component(_VxBreadcrumb["default"].name, _VxBreadcrumb["default"]);

_vue["default"].component(_FeatherIcon["default"].name, _FeatherIcon["default"]);

_vue["default"].component(_VxInputGroup["default"].name, _VxInputGroup["default"]); // v-select component


// Set the components prop default to return our fresh components
_vueSelect["default"].props.components["default"] = function () {
  return {
    Deselect: {
      render: function render(createElement) {
        return createElement('feather-icon', {
          props: {
            icon: 'XIcon',
            svgClasses: 'w-4 h-4 mt-1'
          }
        });
      }
    },
    OpenIndicator: {
      render: function render(createElement) {
        return createElement('feather-icon', {
          props: {
            icon: 'ChevronDownIcon',
            svgClasses: 'w-5 h-5'
          }
        });
      }
    }
  };
};

_vue["default"].component(_vueSelect["default"]);