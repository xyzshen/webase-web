(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"7f8K":function(e,t,a){"use strict";var s=a("PIXY");a.n(s).a},CVUc:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-content-head",{attrs:{headTitle:"区块信息",icon:!0,route:"home"},on:{changGroup:e.changGroup}}),e._v(" "),a("div",{staticClass:"module-wrapper"},[a("div",{staticClass:"search-part"},[a("div",{staticClass:"search-part-left-bg"},[a("span",[e._v("共")]),e._v(" "),a("span",[e._v(e._s(e.numberFormat(e.total,0,".",",")))]),e._v(" "),a("span",[e._v("条")])]),e._v(" "),a("div",{staticClass:"search-part-right"},[a("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入区块哈希或块高"},on:{clear:e.clearText},model:{value:e.searchKey.value,callback:function(t){e.$set(e.searchKey,"value",t)},expression:"searchKey.value"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.search},slot:"append"})],1)],1)]),e._v(" "),a("div",{staticClass:"search-table"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"refTable",staticClass:"block-table-content",attrs:{data:e.blockData},on:{"row-click":e.clickTable}},[a("el-table-column",{attrs:{prop:"blockNumber",label:"块高",width:"80",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"link",on:{click:function(a){return e.link(t.row.blockNumber)}}},[e._v(e._s(t.row.blockNumber))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"transCount",label:"交易",width:"50",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{},[e._v(e._s(t.row.transCount))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"pkHash",label:"区块哈希","show-overflow-tooltip":!0,align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{},[a("i",{staticClass:"wbs-icon-copy font-12 copy-key",attrs:{title:"复制哈希"},on:{click:function(a){return e.copyPubilcKey(t.row.pkHash)}}}),e._v("\n                            "+e._s(t.row.pkHash)+"\n                        ")])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"blockTimestamp",label:"创建时间",width:"280","show-overflow-tooltip":!0,align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{},[e._v(e._s(t.row.blockTimestamp))])]}}])})],1),e._v(" "),a("el-pagination",{staticClass:"page",attrs:{"current-page":e.currentPage,"page-sizes":[10,20,30,50],"page-size":e.pageSize,layout:" sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)])],1)};s._withStripped=!0;var n=a("qse9"),o=a("mHBk"),r=a("oYx3"),c=a("p5Bo"),l=a("DgvE"),i={name:"blockInfo",components:{"v-content-head":n.a},data:function(){return{blockData:[],currentPage:1,pageSize:10,total:0,loading:!1,numberFormat:l.h,searchKey:{key:"",value:""}}},mounted:function(){this.getBlockList()},methods:{changGroup:function(e){this.getBlockList()},search:function(){"pkHash"==this.searchKey.key&&66!=this.searchKey.value.length&&this.searchKey.value?this.$message({message:"搜索区块哈希不支持模糊查询",type:"error",duration:2e3}):this.getBlockList()},getBlockList:function(){var e=this;this.loading=!0;var t={groupId:localStorage.getItem("groupId"),pageNumber:this.currentPage,pageSize:this.pageSize},a={};this.$route.query.blockNumber&&(this.searchKey.key="blockNumber",this.searchKey.value=this.$route.query.blockNumber),this.searchKey.value&&(66===this.searchKey.value.length?a.pkHash=this.searchKey.value:a.blockNumber=this.searchKey.value),Object(o.m)(t,a).then(function(t){e.loading=!1,0===t.data.code?(e.blockData=t.data.data,e.total=t.data.totalCount):e.$message({message:c.a.errCode[t.data.code].cn,type:"error",duration:2e3})}).catch(function(t){e.loading=!1,e.$message({message:"系统错误！",type:"error",duration:2e3})})},handleSizeChange:function(e){this.pageSize=e,this.currentPage=1,this.getBlockList()},handleCurrentChange:function(e){this.currentPage=e,this.getBlockList()},link:function(e){r.a.push({path:"/transactionInfo",query:{blockNumber:e}})},clickTable:function(e,t,a){event.target.nodeName;"I"!==t.target.nodeName&&this.link(e.blockNumber)},clearText:function(){this.getBlockList()},copyPubilcKey:function(e){var t=this;e?this.$copyText(e).then(function(e){t.$message({type:"success",showClose:!0,message:"复制成功",duration:2e3})}):this.$message({type:"fail",showClose:!0,message:"key为空，不复制。",duration:2e3})}}},u=(a("7f8K"),a("KHd+")),h=Object(u.a)(i,s,[],!1,null,"30ee3a06",null);h.options.__file="src/views/blockInfo/blockInfo.vue";t.default=h.exports},PIXY:function(e,t,a){}}]);