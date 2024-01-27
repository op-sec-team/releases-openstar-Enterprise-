(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36e32d96"],{"0dc1":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-container"},[e("el-dialog",{staticClass:"preview",attrs:{visible:t.showVisible,fullscreen:t.fullscreen},on:{"update:visible":function(e){t.showVisible=e}}},[e("h3",{staticStyle:{float:"left"},attrs:{slot:"title"},slot:"title"},[t._v(" 预览 ")]),e("div",{domProps:{innerHTML:t._s(t.showContent)}})]),e("el-card",{attrs:{shadow:"never"}},[e("el-row",{staticStyle:{"margin-bottom":"10px","margin-left":"10px"},attrs:{gutter:10}},[e("div",{staticStyle:{width:"300px",float:"left"}},[e("el-input",{attrs:{"prefix-icon":"el-icon-search",placeholder:"请输入搜索内容"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),e("div",{staticStyle:{float:"right"}},[e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.handleAdd}},[t._v("添加")]),e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.handleSave}},[t._v("保存")])],1)]),e("el-row",{staticStyle:{margin:"20px"}},[e("el-col",{attrs:{span:12}},[e("span",{staticStyle:{"margin-right":"20px"}},[t._v("拦截信息配置:")]),e("el-radio-group",{on:{change:t.setbaseState},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},[e("el-radio",{attrs:{label:"on"}}),e("el-radio",{attrs:{label:"off"}})],1)],1),e("el-col",{attrs:{span:12}},[e("div",{staticStyle:{float:"right"}},[e("span",{staticStyle:{"margin-right":"20px"}},[t._v("当前数量："+t._s(t.pageTotal))]),e("span",{staticStyle:{color:"blue"}},[t._v("版本号：")]),t._v(t._s(t.version)+" ")])])],1),e("el-table",{attrs:{data:t.userList,border:""}},[e("el-table-column",{attrs:{label:"域名",align:"left",prop:"id",width:"200","show-overflow-tooltip":!0}}),e("el-table-column",{attrs:{label:"内容",align:"left",prop:"contents","show-overflow-tooltip":!0}}),e("el-table-column",{attrs:{label:"操作",align:"left",width:"180","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(s){return[e("el-button",{staticStyle:{color:"green"},attrs:{size:"mini",type:"text",icon:"el-icon-reading"},on:{click:function(e){return t.previewScope(s.row)}}},[t._v("预览")]),e("el-button",{directives:[{name:"show",rawName:"v-show",value:"state"!==s.row.id,expression:'scope.row.id !== "state"'}],staticStyle:{color:"orange"},attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(e){return t.handleSet(s.row)}}},[t._v("修改")]),e("el-popover",{directives:[{name:"show",rawName:"v-show",value:"state"!==s.row.id,expression:'scope.row.id !== "state"'}],attrs:{placement:"top",width:"160"},model:{value:s.row.visible,callback:function(e){t.$set(s.row,"visible",e)},expression:"scope.row.visible"}},[e("p",[t._v("确定要删除吗?")]),e("div",{staticStyle:{"text-align":"right",margin:"0"}},[e("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){s.row.visible=!1}}},[t._v("取消")]),e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handleDel(s.row)}}},[t._v("确定")])],1),e("el-button",{staticStyle:{color:"red","margin-left":"10px"},attrs:{slot:"reference",size:"mini",type:"text",icon:"el-icon-delete"},slot:"reference"},[t._v("删除")])],1)]}}])})],1),e("el-dialog",{attrs:{title:t.title,visible:t.open,width:"60%"},on:{"update:visible":function(e){t.open=e}}},[e("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:"图形化配置",name:"second"}},[e("el-form",{attrs:{"label-width":"100px",model:t.form}},[e("el-row",{attrs:{gutter:10}},[e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"域名："}},[e("el-input",{attrs:{placeholder:"输入域名",clearable:"",disabled:"修改"===t.title},model:{value:t.form.id,callback:function(e){t.$set(t.form,"id",e)},expression:"form.id"}})],1)],1),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"状态码："}},[e("el-select",{attrs:{placeholder:"选择状态码",clearable:"","allow-create":"",filterable:"","default-first-option":""},model:{value:t.form.contents.http_code,callback:function(e){t.$set(t.form.contents,"http_code",e)},expression:"form.contents.http_code"}},t._l([403,405,406],(function(t){return e("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1)],1)],1),e("el-form-item",{attrs:{label:"响应内容："}},[e("el-input",{attrs:{type:"textarea",rows:6,placeholder:"输入响应内容"},model:{value:t.form.contents.deny_msg,callback:function(e){t.$set(t.form.contents,"deny_msg",e)},expression:"form.contents.deny_msg"}})],1)],1)],1),e("el-tab-pane",{attrs:{label:"原始JSON配置",name:"first"}},[e("el-form",{ref:"form",attrs:{model:t.form,"label-width":"90px"}},[t._v(" 域名 "),e("el-input",{directives:[{name:"show",rawName:"v-show",value:"添加"===t.title,expression:"title === '添加'"}],staticStyle:{width:"45%","margin-bottom":"10px"},model:{value:t.form.id,callback:function(e){t.$set(t.form,"id",e)},expression:"form.id"}}),e("el-input",{directives:[{name:"show",rawName:"v-show",value:"修改"===t.title,expression:"title === '修改'"}],staticStyle:{width:"45%","margin-bottom":"10px"},attrs:{disabled:""},model:{value:t.form.id,callback:function(e){t.$set(t.form,"id",e)},expression:"form.id"}}),e("el-row",{attrs:{gutter:10}},[e("el-col",{attrs:{span:12}},["first"===t.activeName?e("vue-json-editor",{staticClass:"editorR",attrs:{mode:"code",lang:"zh"},model:{value:t.form.contents,callback:function(e){t.$set(t.form,"contents",e)},expression:"form.contents"}}):t._e()],1),e("el-col",{attrs:{span:12}},["first"===t.activeName?e("codemirror",{staticClass:"editorR",attrs:{options:t.options},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}):t._e(),e("br"),e("el-link",{attrs:{href:"https://www.kancloud.cn/openstar/install/1136671",target:"_blank"}},[t._v("详情请点击此处，参考文档")])],1)],1)],1)],1)],1),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("确 定")]),e("el-button",{on:{click:t.cancel}},[t._v("取 消")])],1)],1)],1)],1)},o=[],a=(s("14d9"),s("8f94")),n=(s("a7be"),s("acdf"),s("7ba3"),s("a8d9"),s("db91"),s("b2b9"),s("f9d4"),s("45a3")),l=s("a417");const r=s("e762").Base64;var c={components:{vueJsonEditor:n["a"],codemirror:a["codemirror"]},data(){return{d_msg:"",d_http_code:403,showVisible:!1,fullscreen:!0,showContent:"",code:'\n\n{\n  "deny_msg":"拦截页面内容 (html)",\n  "http_code":"拦截状态码 [403/405...]"\n}\n\n/* http_code 该字段可以不写 默认为 403  */\n\n\n',options:{tabSize:4,mode:{name:"javascript",json:!0},theme:"darcula",lineNumbers:!0,line:!0,highlightSelectionMatches:{showToken:/\w/,annotateScrollbar:!0},styleSelectedText:!0,styleActiveLine:!0,hintOptions:{completeSingle:!0}},userList:[],tempList:[],pageTotal:0,state:"",version:"",search:"",open:!1,title:"",form:{id:"",contents:{}},activeName:"second"}},created(){this.getList()},methods:{previewScope(t){var e=JSON.parse(t.contents);"state"===t.id?this.showContent=e["msg"]:this.showContent=e["deny_msg"],this.showVisible=!0},isJSON(t){if("string"==typeof t)try{var e=JSON.parse(t);return!("object"!=typeof e||!e)}catch(s){return!1}else if("object"==typeof t&&t)return!0},getList(){var t={action:"get",mod:"denyMsg"};Object(l["b"])(t).then(t=>{this.version=t.msg.G_version,this.state=t.msg.state.state,this.d_msg=t.msg.state.msg,this.d_http_code=t.msg.state.http_code;var e=[],s=t.msg;for(var i in s)if("count"!=i&&"G_version"!=i){var o={},a=s[i];"state"==i&&(delete a["G_version"],delete a["state"]),o.id=i,o.contents=JSON.stringify(a),e.push(o)}this.userList=e,this.tempList=e,this.pageTotal=e.length})},setbaseState(){var t={G_version:this.version,state:this.state,msg:this.d_msg,http_code:this.d_http_code},e={action:"set",mod:"base",id:"denyMsg",value:JSON.stringify(t)};Object(l["b"])(e).then(t=>{"ok"===t.code?this.$notify({title:"成功",message:t.msg,type:"success"}):this.$notify({title:"警告",message:t.msg,type:"warning"})})},reset(){this.form={id:"",contents:{}}},cancel(){this.open=!1,this.reset()},handleAdd(){this.reset(),this.title="添加",this.open=!0},handleSet(t){this.reset(),this.title="修改";var e={};e.id=t.id,e.contents=JSON.parse(t.contents),this.form=e,this.open=!0},handleDel(t){var e={action:"del",mod:"denyMsg",id:t.id};Object(l["b"])(e).then(t=>{"ok"===t.code?(this.$notify({title:"成功",message:t.msg,type:"success"}),this.open=!1,this.getList()):this.$notify({title:"警告",message:t.msg,type:"warning"})})},submitForm(){if(!this.isJSON(this.form.contents))return this.$message.error("配置内容:json格式错误/没有内容"),!1;if("修改"===this.title){var t={action:"set",mod:"denyMsg",id:this.form.id,value:JSON.stringify(this.form.contents)};Object(l["b"])(t).then(t=>{"ok"===t.code?(this.$notify({title:"成功",message:t.msg,type:"success"}),this.open=!1,this.getList(1)):this.$notify({title:"警告",message:t.msg,type:"warning"})})}else{t={action:"add",mod:"denyMsg",id:this.form.id,value:JSON.stringify(this.form.contents)};Object(l["b"])(t).then(t=>{"ok"===t.code?(this.$notify({title:"成功",message:t.msg,type:"success"}),this.open=!1,this.getList(1)):this.$notify({title:"警告",message:t.msg,type:"warning"})})}},handleSave(){var t={action:"save",mod:"denyMsg"};Object(l["h"])(t).then(t=>{"ok"==t.code?this.$notify({title:"成功",message:t.msg,type:"success"}):this.$notify({title:"警告",message:t.msg,type:"warning"})})}},filters:{match:function(t){return r.decode(t)}},watch:{$route(t,e){},search:{handler:function(t,e){this.userList=""===t?this.tempList:this.tempList.filter((function(e){if(e.contents.indexOf(t)>=0)return!0}))}}}},d=c,m=(s("4969"),s("2877")),p=Object(m["a"])(d,i,o,!1,null,"b75ed05c",null);e["default"]=p.exports},"335c":function(t,e,s){},4969:function(t,e,s){"use strict";s("335c")}}]);