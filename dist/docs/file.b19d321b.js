webpackJsonp([28,35],{477:function(e,l,t){var n=t(0)(t(509),t(566),null,null);e.exports=n.exports},509:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default={data:function(){return{single:null,placeholder:null,initialValue:"my-profile-picture.jpg",multiple:null,onlyImages:null}}},e.exports=l.default},566:function(e,l){e.exports={render:function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("page-content",{attrs:{"page-title":"Components - File"}},[t("docs-component",[t("div",{slot:"description"},[t("p",[e._v("The file picker aim to select files like images, videos and other formats. They can have multiselection and use the devide file system to pick the file.")])]),e._v(" "),t("div",{slot:"api"},[t("api-table",{attrs:{name:"md-file"}},[t("md-table",{slot:"properties"},[t("md-table-header",[t("md-table-row",[t("md-table-head",[e._v("Name")]),e._v(" "),t("md-table-head",[e._v("Type")]),e._v(" "),t("md-table-head",[e._v("Description")])],1)],1),e._v(" "),t("md-table-body",[t("md-table-row",[t("md-table-cell",[e._v("v-model")]),e._v(" "),t("md-table-cell",[t("code",[e._v("String")])]),e._v(" "),t("md-table-cell",[e._v("A required model object to bind the value.")])],1),e._v(" "),t("md-table-row",[t("md-table-cell",[e._v("id")]),e._v(" "),t("md-table-cell",[t("code",[e._v("String")])]),e._v(" "),t("md-table-cell",[e._v("Sets the input id.")])],1),e._v(" "),t("md-table-row",[t("md-table-cell",[e._v("name")]),e._v(" "),t("md-table-cell",[t("code",[e._v("String")])]),e._v(" "),t("md-table-cell",[e._v("Sets the input name.")])],1),e._v(" "),t("md-table-row",[t("md-table-cell",[e._v("disabled")]),e._v(" "),t("md-table-cell",[t("code",[e._v("Boolean")])]),e._v(" "),t("md-table-cell",[e._v("Disable the input and prevent his actions. Default "),t("code",[e._v("false")])])],1),e._v(" "),t("md-table-row",[t("md-table-cell",[e._v("required")]),e._v(" "),t("md-table-cell",[t("code",[e._v("Boolean")])]),e._v(" "),t("md-table-cell",[e._v('Apply the required rule to style the label with an "*". Default '),t("code",[e._v("false")])])],1),e._v(" "),t("md-table-row",[t("md-table-cell",[e._v("accept")]),e._v(" "),t("md-table-cell",[t("code",[e._v("String")])]),e._v(" "),t("md-table-cell",[e._v("Filter files that can be selected by mimetype pattern.")])],1),e._v(" "),t("md-table-row",[t("md-table-cell",[e._v("multiple")]),e._v(" "),t("md-table-cell",[t("code",[e._v("Boolean")])]),e._v(" "),t("md-table-cell",[e._v("Enable multiple selection.")])],1)],1)],1)],1)],1),e._v(" "),t("div",{slot:"example"},[t("example-box",{attrs:{"card-title":"Single File"}},[t("div",{slot:"demo"},[t("md-input-container",[t("label",[e._v("Single")]),e._v(" "),t("md-file",{model:{value:e.single,callback:function(l){e.single=l},expression:"single"}})],1),e._v(" "),t("md-input-container",[t("md-file",{attrs:{placeholder:"A nice input placeholder"},model:{value:e.placeholder,callback:function(l){e.placeholder=l},expression:"placeholder"}})],1),e._v(" "),t("md-input-container",[t("md-file",{attrs:{placeholder:"Disabled",disabled:""}})],1),e._v(" "),t("md-input-container",[t("label",[e._v("Initial Value")]),e._v(" "),t("md-file",{model:{value:e.initialValue,callback:function(l){e.initialValue=l},expression:"initialValue"}})],1),e._v(" "),t("md-input-container",[t("label",[e._v("Multiple")]),e._v(" "),t("md-file",{attrs:{multiple:""},model:{value:e.multiple,callback:function(l){e.multiple=l},expression:"multiple"}})],1),e._v(" "),t("md-input-container",[t("label",[e._v("Only Images")]),e._v(" "),t("md-file",{attrs:{accept:"image/*"},model:{value:e.onlyImages,callback:function(l){e.onlyImages=l},expression:"onlyImages"}})],1)],1),e._v(" "),t("div",{slot:"code"},[t("code-block",{attrs:{lang:"xml"}},[e._v('\n            <md-input-container>\n              <label>Single</label>\n              <md-file v-model="single"></md-file>\n            </md-input-container>\n\n            <md-input-container>\n              <md-file v-model="placeholder" placeholder="A nice input placeholder"></md-file>\n            </md-input-container>\n\n            <md-input-container>\n              <md-file placeholder="Disabled" disabled></md-file>\n            </md-input-container>\n\n            <md-input-container>\n              <label>Initial Value</label>\n              <md-file v-model="initialValue"></md-file>\n            </md-input-container>\n\n            <md-input-container>\n              <label>Multiple</label>\n              <md-file v-model="multiple" multiple></md-file>\n            </md-input-container>\n\n            <md-input-container>\n              <label>Only Images</label>\n              <md-file v-model="onlyImages" accept="image/*"></md-file>\n            </md-input-container>\n          ')]),e._v(" "),t("code-block",{attrs:{lang:"javascript"}},[e._v("\n            export default {\n              data: () => ({\n                single: null,\n                placeholder: null,\n                initialValue: 'my-profile-picture.jpg',\n                multiple: null,\n                onlyImages: null\n              })\n            };\n          ")])],1)])],1)])],1)},staticRenderFns:[]}}});