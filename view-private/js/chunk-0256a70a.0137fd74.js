(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0256a70a"],{"03f7":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-container"},[e("el-card",{attrs:{shadow:"never"}},[e("el-row",{staticStyle:{"margin-bottom":"10px","margin-left":"10px"},attrs:{gutter:10}},[e("div",{staticStyle:{width:"300px",float:"left"}},[e("el-input",{attrs:{"prefix-icon":"el-icon-search",placeholder:"请输入搜索内容"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),e("div",{staticClass:"el-icon-info",staticStyle:{"margin-left":"100px",float:"left"}},[e("span",{staticStyle:{color:"red"}},[t._v("注：")]),t._v("定时模式有变更时，需要重启整个集群，使其生效")]),e("div",{staticStyle:{float:"right"}},[e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.handleAdd}},[t._v("添加")]),e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.handleSave}},[t._v("保存")])],1)]),e("el-row",{staticStyle:{margin:"20px"}},[e("el-col",{attrs:{span:12}},[e("span",{staticStyle:{"margin-right":"20px"}},[t._v("定时模块（http）:")]),e("el-radio-group",{on:{change:t.setbaseState},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},[e("el-radio",{attrs:{label:"on"}}),e("el-radio",{attrs:{label:"off"}})],1)],1),e("el-col",{attrs:{span:12}},[e("div",{staticStyle:{float:"right"}},[e("span",{staticStyle:{"margin-right":"20px"}},[t._v("当前数量："+t._s(t.pageTotal))]),e("span",{staticStyle:{color:"blue"}},[t._v("版本号：")]),t._v(t._s(t.version)+" ")])])],1),e("el-table",{attrs:{data:t.userList,border:""}},[e("el-table-column",{attrs:{label:"ID",align:"center",prop:"id",width:"80","show-overflow-tooltip":!0}}),e("el-table-column",{attrs:{label:"内容",align:"left",prop:"contents","show-overflow-tooltip":!0}}),e("el-table-column",{attrs:{label:"操作",align:"center",width:"360","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(i){return[e("el-button",{staticStyle:{color:"orange"},attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(e){return t.handleSet(i.row)}}},[t._v("修改")]),e("el-button",{staticStyle:{color:"green"},attrs:{size:"mini",type:"text",icon:"el-icon-top"},on:{click:function(e){return t.up(i.$index)}}},[t._v("上移")]),e("el-button",{staticStyle:{color:"green"},attrs:{size:"mini",type:"text",icon:"el-icon-bottom"},on:{click:function(e){return t.down(i.$index)}}},[t._v("下移")]),e("el-button",{staticStyle:{color:"green"},attrs:{size:"mini",type:"text",icon:"el-icon-arrow-up"},on:{click:function(e){return t.upIndex(i.$index)}}},[t._v("置顶")]),e("el-button",{staticStyle:{color:"green"},attrs:{size:"mini",type:"text",icon:"el-icon-arrow-down"},on:{click:function(e){return t.downIndex(i.$index)}}},[t._v("置底")]),e("el-popover",{attrs:{placement:"top",width:"160"},model:{value:i.row.visible,callback:function(e){t.$set(i.row,"visible",e)},expression:"scope.row.visible"}},[e("p",[t._v("确定要删除吗?")]),e("div",{staticStyle:{"text-align":"right",margin:"0"}},[e("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){i.row.visible=!1}}},[t._v("取消")]),e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handleDel(i.row)}}},[t._v("确定")])],1),e("el-button",{staticStyle:{color:"red","margin-left":"10px"},attrs:{slot:"reference",size:"mini",type:"text",icon:"el-icon-delete"},slot:"reference"},[t._v("删除")])],1)]}}])})],1),e("el-row",[e("div",{staticStyle:{"text-align":"center","margin-top":"20px"}},[e("el-button",{attrs:{type:"primary"},on:{click:t.handleApply}},[t._v("应用")])],1)]),e("timing-json-gui",{attrs:{"visible-prop":t.open,title:t.title,"form-data":t.form},on:{hideDialog:t.cancel,asyncEditConfirm:t.submitForm}})],1)],1)},n=[],a=(i("14d9"),function(){var t=this,e=t._self._c;return e("el-drawer",{attrs:{"close-on-click-modal":!1,"modal-append-to-body":!1,title:t.title,visible:t.open,size:"60%"},on:{"update:visible":function(e){t.open=e},close:t.cancel}},[e("div",{staticStyle:{padding:"20px"}},[e("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[e("el-tab-pane",{attrs:{label:"图形化配置",name:"gui"}},[e("el-form",{ref:"editForm",attrs:{model:t.guiFormData,"label-width":"80px"}},[e("el-form-item",{attrs:{label:"规则开关"}},[e("el-col",{attrs:{span:12}},[e("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:t.switchChange},model:{value:t.guiFormData["switch"],callback:function(e){t.$set(t.guiFormData,"switch",t._n(e))},expression:"guiFormData['switch']"}})],1)],1),e("el-form-item",{attrs:{label:"ID"}},[e("el-col",{attrs:{span:12}},[e("el-input",{attrs:{placeholder:"输入id信息"},model:{value:t.guiFormData.id,callback:function(e){t.$set(t.guiFormData,"id",e)},expression:"guiFormData.id"}})],1)],1),e("el-form-item",{attrs:{label:"描述信息"}},[e("el-col",{attrs:{span:12}},[e("el-input",{attrs:{placeholder:"输入描述信息"},model:{value:t.guiFormData.des,callback:function(e){t.$set(t.guiFormData,"des",e)},expression:"guiFormData.des"}})],1)],1),e("el-form-item",{attrs:{label:"定时时间"}},[e("el-col",{attrs:{span:12}},[e("el-input",{attrs:{placeholder:"请输入定时时间"},model:{value:t.guiFormData.time,callback:function(e){t.$set(t.guiFormData,"time",t._n(e))},expression:"guiFormData.time"}})],1),e("el-col",{attrs:{span:12}},[e("span",{staticStyle:{"margin-left":"20px"}},[e("span",{staticClass:"star-color"},[t._v("*")]),t._v(" 单位 秒")])])],1),e("el-form-item",{attrs:{label:"定时函数"}},[e("el-select",{staticStyle:{width:"50%"},attrs:{placeholder:"请选择"},on:{change:function(e){return t.$forceUpdate()}},model:{value:t.guiFormData["funcName"],callback:function(e){t.$set(t.guiFormData,"funcName",e)},expression:"guiFormData['funcName']"}},t._l(t.funcOptions,(function(t){return e("el-option",{key:t.name,attrs:{label:t.name,value:t.name}})})),1)],1),e("el-form-item",{attrs:{label:"函数参数"}},[e("el-col",{attrs:{span:12}},[e("vue-json-editor",{staticClass:"editorR",attrs:{mode:"code",lang:"zh"},model:{value:t.guiFormData.funcArgu,callback:function(e){t.$set(t.guiFormData,"funcArgu",e)},expression:"guiFormData.funcArgu"}})],1)],1)],1)],1),e("el-tab-pane",{attrs:{label:"原始json配置",name:"originalJson"}},["originalJson"==t.activeTab?e("json-dialog",{ref:"jsonDialog",attrs:{contentsProp:t.form.contents,codeProp:t.code,width:"60%"}}):t._e()],1)],1),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("确 定")]),e("el-button",{on:{click:t.cancel}},[t._v("取 消")])],1)],1)])}),o=[],r=i("2eac"),l=i("45a3"),c=i("9448"),u=i("0644"),m=i.n(u),d={components:{JsonDialog:r["a"],vueJsonEditor:l["a"]},props:{formData:{type:Object},title:{type:String,default:"添加"},visibleProp:{type:Boolean,default:!1}},data(){return{code:'\n\n{\n  "state": "规则开关",\n  "id":"规则ID [timer_Mod-1001]",\n  "des": "规则描述",\n  "func": ["函数名称"，{..传递参数..}],\n  "time": 定时时间(秒)\n}\n\n',open:this.visibleProp,form:this.formData,activeTab:"gui",guiFormData:{switch:1,id:"",des:"",func:[],time:0,funcArgu:""},funcOptions:[]}},watch:{visibleProp(t){console.log(t),this.open=t},formData(t){this.form=t,this.jsonToGui()}},mounted(){this.getFuncOptions()},methods:{getFuncOptions(){const t={id:"all_Mod"};Object(c["c"])(t).then(t=>{const e=t.msg;let i=[];for(let s in e){if("count"===s)continue;const t=e[s],n={name:s,file:t.file,disk_file:t.disk_file,description:t.description,contents:t.contents};i.push(n)}this.funcOptions=i})},reset(){this.form={contents:{state:"on"}}},cancel(){this.$emit("hideDialog"),this.reset()},switchChange(){this.$forceUpdate()},handleClick(t){"originalJson"===t.name?this.guiToJson():"gui"===t.name&&(this.form.contents=this.$refs.jsonDialog.contents,this.jsonToGui())},submitForm(){if("gui"===this.activeTab)return void this.submitGui();const t=m()(this.$refs.jsonDialog.contents);if(!this.isJSON(t))return this.$message.error("配置内容:json格式错误/没有内容"),!1;if("编辑"===this.title){var e={action:"set",form:{...this.form,contents:t}};this.$emit("asyncEditConfirm",e)}else{var i={action:"add",form:this.form,contents:t};this.$emit("asyncEditConfirm",i)}},isJSON(t){if("string"==typeof t)try{var e=JSON.parse(t);return!("object"!=typeof e||!e)}catch(i){return!1}else if("object"==typeof t&&t)return!0},submitGui(){this.guiToJson(),this.$emit("asyncEditConfirm",{action:"编辑"===this.title?"set":"add",form:this.form})},guiToJson(){const t=m()(this.guiFormData);t.state=t.switch?"on":"off",t["func"]=[t.funcName,t.funcArgu],delete t.switch,delete t.funcName,delete t.funcArgu,this.form.contents=t},jsonToGui(){this.guiFormData=m()(this.form.contents),this.guiFormData.switch="on"===this.guiFormData.state?1:0,this.form.contents["func"]?(this.guiFormData["funcName"]=this.guiFormData.func[0]||"",this.guiFormData["funcArgu"]=this.guiFormData.func[1]||""):(this.guiFormData["funcName"]="",this.guiFormData["funcArgu"]="")}}},p=d,f=(i("e2ad"),i("2877")),h=Object(f["a"])(p,a,o,!1,null,"dd9d70a0",null),g=h.exports,b=i("a417");const v=i("e762").Base64;var y={components:{TimingJsonGui:g},data(){return{userList:[],tempList:[],pageTotal:0,state:"",version:"",search:"",open:!1,title:"",form:{id:0,contents:{}}}},created(){this.getList()},methods:{isJSON(t){if("string"==typeof t)try{var e=JSON.parse(t);return!("object"!=typeof e||!e)}catch(i){return!1}else if("object"==typeof t&&t)return!0},up(t){0!==t&&this.swapItems(this.userList,t,t-1)},upIndex(t){0!==t&&this.swapItems(this.userList,t,0,"up")},down(t){t!==this.userList.length-1&&this.swapItems(this.userList,t,t+1)},downIndex(t){t!==this.userList.length-1&&this.swapItems(this.userList,t,0,"down")},swapItems(t,e,i,s){return"up"==s?(t.unshift(t[e]),t.splice(e+1,1),t):"down"==s?(t.push(t[e]),t.splice(e,1),t):(t[e]=t.splice(i,1,t[e])[0],t)},getList(){var t={action:"get",mod:"timer_Mod"};Object(b["b"])(t).then(t=>{var e=[],i=t.msg;for(var s in i)if("count"!=s&&"G_version"!=s&&"state"!=s){var n={};n.id=s,n.contents=JSON.stringify(i[s]),e.push(n)}this.version=t.msg.G_version,this.state=t.msg.state,this.userList=e,this.tempList=e,this.pageTotal=e.length})},setbaseState(){var t={G_version:this.version,state:this.state},e={action:"set",mod:"base",id:"timer_Mod",value:JSON.stringify(t)};Object(b["b"])(e).then(t=>{"ok"===t.code?this.$notify({title:"成功",message:t.msg,type:"success"}):this.$notify({title:"警告",message:t.msg,type:"warning"})})},reset(){this.form={id:0,contents:{state:"on"}}},cancel(){this.open=!1,this.reset()},handleAdd(){this.reset(),this.title="添加",this.open=!0},handleSet(t){this.reset(),this.title="修改";var e={};e.id=t.id,e.contents=JSON.parse(t.contents),this.form=e,this.open=!0},handleDel(t){var e={action:"del",mod:"timer_Mod",id:t.id};Object(b["b"])(e).then(t=>{"ok"===t.code?(this.$notify({title:"成功",message:t.msg,type:"success"}),this.open=!1,this.getList()):this.$notify({title:"警告",message:t.msg,type:"warning"})})},submitForm(t){const e={action:t.action,mod:"timer_Mod",value:JSON.stringify(t.form.contents)};"set"===t.action&&(e["id"]=t.form["id"]),Object(b["b"])(e).then(t=>{"ok"===t.code?(this.$notify({title:"成功",message:t.msg,type:"success"}),this.open=!1,this.getList(1)):this.$notify({title:"警告",message:t.msg,type:"warning"})})},handleSave(){var t={action:"save",mod:"all_Mod"};Object(b["h"])(t).then(t=>{"ok"==t.code?this.$notify({title:"成功",message:t.msg,type:"success"}):this.$notify({title:"警告",message:t.msg,type:"warning"})})},handleApply(){var t=this.userList.map(t=>JSON.parse(t.contents)),e={action:"set",mod:"timer_Mod",value:JSON.stringify(t)};Object(b["b"])(e).then(t=>{"ok"==t.code?this.$notify({title:"成功",message:t.msg,type:"success"}):this.$notify({title:"警告",message:t.msg,type:"warning"})})}},filters:{match:function(t){return v.decode(t)}},watch:{search:{handler:function(t){this.userList=""===t?this.tempList:this.tempList.filter((function(e){if(e.contents.indexOf(t)>=0)return!0}))}}}},w=y,_=(i("be05"),Object(f["a"])(w,s,n,!1,null,"579d2385",null));e["default"]=_.exports},"6ee5":function(t,e,i){},9448:function(t,e,i){"use strict";i.d(e,"c",(function(){return r})),i.d(e,"d",(function(){return l})),i.d(e,"a",(function(){return c})),i.d(e,"b",(function(){return u}));var s=i("b775"),n=i("4328"),a=i.n(n),o=i("365c");function r(t){return Object(s["a"])({url:""+o["a"].plugin.getPlugin,method:"post",data:a.a.stringify(t)})}function l(t){return Object(s["a"])({url:""+o["a"].plugin.setPlugin,method:"post",data:a.a.stringify(t)})}function c(t){return Object(s["a"])({url:""+o["a"].plugin.addPlugin,method:"post",data:a.a.stringify(t)})}function u(t){return Object(s["a"])({url:""+o["a"].plugin.delPlugin,method:"post",data:a.a.stringify(t)})}},a14b:function(t,e,i){},be05:function(t,e,i){"use strict";i("6ee5")},e2ad:function(t,e,i){"use strict";i("a14b")}}]);