"use strict";(self.webpackChunkprem_docs=self.webpackChunkprem_docs||[]).push([[6153],{80853:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>b,frontMatter:()=>p,metadata:()=>u,toc:()=>f});var i=a(87462),r=(a(67294),a(3905)),n=a(58219),l=a(9487),o=a(41429),s=a(5397),m=a(4667),c=a(9472),d=(a(62316),a(85162));const p={id:"services-by-interface-v-1-services-by-interface-interface-id-get",title:"Services By Interface",description:"Services By Interface",sidebar_label:"Services By Interface",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"services_by_interface_v1_services_by_interface__interface_id__get",parameters:[{required:!0,schema:{title:"Interface Id",type:"string"},name:"interface_id",in:"path"}],responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"Response Services By Interface V1 Services By Interface  Interface Id  Get",type:"array",items:{title:"ServiceResponse",required:["id","name","description","documentation","icon","modelInfo","interfaces","dockerImage","dockerImageSize","defaultPort","defaultExternalPort","running","downloaded","supported"],type:"object",properties:{id:{title:"Id",type:"string"},name:{title:"Name",type:"string"},description:{title:"Description",type:"string"},documentation:{title:"Documentation",type:"string"},icon:{title:"Icon",type:"string"},modelInfo:{title:"Modelinfo",type:"object"},interfaces:{title:"Interfaces",type:"array",items:{type:"string"}},dockerImage:{title:"Dockerimage",type:"string"},dockerImageSize:{title:"Dockerimagesize",type:"integer"},defaultPort:{title:"Defaultport",type:"integer"},defaultExternalPort:{title:"Defaultexternalport",type:"integer"},runningPort:{title:"Runningport",type:"integer"},volumePath:{title:"Volumepath",type:"string"},volumeName:{title:"Volumename",type:"string"},running:{title:"Running",type:"boolean"},downloaded:{title:"Downloaded",type:"boolean"},downloadedDockerImage:{title:"Downloadeddockerimage",type:"string"},needsUpdate:{title:"Needsupdate",type:"boolean",default:!1},supported:{title:"Supported",type:"boolean"},enoughMemory:{title:"Enoughmemory",type:"boolean",default:!0},enoughSystemMemory:{title:"Enoughsystemmemory",type:"boolean",default:!0},beta:{title:"Beta",type:"boolean",default:!1},comingSoon:{title:"Comingsoon",type:"boolean",default:!1}}}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},description:"Services By Interface",method:"get",path:"/v1/services-by-interface/{interface_id}",info:{title:"Prem Box",version:"0.0.1"},postman:{name:"Services By Interface",description:{type:"text/plain"},url:{path:["v1","services-by-interface",":interface_id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"interface_id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/prem-daemon/api/prem-box",custom_edit_url:null},y=void 0,u={unversionedId:"prem-daemon/api/services-by-interface-v-1-services-by-interface-interface-id-get",id:"prem-daemon/api/services-by-interface-v-1-services-by-interface-interface-id-get",title:"Services By Interface",description:"Services By Interface",source:"@site/docs/prem-daemon/api/services-by-interface-v-1-services-by-interface-interface-id-get.api.mdx",sourceDirName:"prem-daemon/api",slug:"/prem-daemon/api/services-by-interface-v-1-services-by-interface-interface-id-get",permalink:"/docs/prem-daemon/api/services-by-interface-v-1-services-by-interface-interface-id-get",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"services-by-interface-v-1-services-by-interface-interface-id-get",title:"Services By Interface",description:"Services By Interface",sidebar_label:"Services By Interface",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"services_by_interface_v1_services_by_interface__interface_id__get",parameters:[{required:!0,schema:{title:"Interface Id",type:"string"},name:"interface_id",in:"path"}],responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"Response Services By Interface V1 Services By Interface  Interface Id  Get",type:"array",items:{title:"ServiceResponse",required:["id","name","description","documentation","icon","modelInfo","interfaces","dockerImage","dockerImageSize","defaultPort","defaultExternalPort","running","downloaded","supported"],type:"object",properties:{id:{title:"Id",type:"string"},name:{title:"Name",type:"string"},description:{title:"Description",type:"string"},documentation:{title:"Documentation",type:"string"},icon:{title:"Icon",type:"string"},modelInfo:{title:"Modelinfo",type:"object"},interfaces:{title:"Interfaces",type:"array",items:{type:"string"}},dockerImage:{title:"Dockerimage",type:"string"},dockerImageSize:{title:"Dockerimagesize",type:"integer"},defaultPort:{title:"Defaultport",type:"integer"},defaultExternalPort:{title:"Defaultexternalport",type:"integer"},runningPort:{title:"Runningport",type:"integer"},volumePath:{title:"Volumepath",type:"string"},volumeName:{title:"Volumename",type:"string"},running:{title:"Running",type:"boolean"},downloaded:{title:"Downloaded",type:"boolean"},downloadedDockerImage:{title:"Downloadeddockerimage",type:"string"},needsUpdate:{title:"Needsupdate",type:"boolean",default:!1},supported:{title:"Supported",type:"boolean"},enoughMemory:{title:"Enoughmemory",type:"boolean",default:!0},enoughSystemMemory:{title:"Enoughsystemmemory",type:"boolean",default:!0},beta:{title:"Beta",type:"boolean",default:!1},comingSoon:{title:"Comingsoon",type:"boolean",default:!1}}}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},description:"Services By Interface",method:"get",path:"/v1/services-by-interface/{interface_id}",info:{title:"Prem Box",version:"0.0.1"},postman:{name:"Services By Interface",description:{type:"text/plain"},url:{path:["v1","services-by-interface",":interface_id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"interface_id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/prem-daemon/api/prem-box",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Services All",permalink:"/docs/prem-daemon/api/services-all-v-1-services-get"},next:{title:"Stats All",permalink:"/docs/prem-daemon/api/stats-all-v-1-stats-all-get"}},g={},f=[{value:"Services By Interface",id:"services-by-interface",level:2}],h={toc:f},v="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(v,(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"services-by-interface"},"Services By Interface"),(0,r.kt)("p",null,"Services By Interface"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(o.Z,{className:"paramsItem",param:{required:!0,schema:{title:"Interface Id",type:"string"},name:"interface_id",in:"path"},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(n.Z,{mdxType:"ApiTabs"},(0,r.kt)(d.default,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Successful Response")),(0,r.kt)("div",null,(0,r.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(c.default,{mdxType:"SchemaTabs"},(0,r.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(m.Z,{collapsible:!1,name:"id",required:!0,schemaName:"Id",qualifierMessage:void 0,schema:{title:"Id",type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"name",required:!0,schemaName:"Name",qualifierMessage:void 0,schema:{title:"Name",type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"description",required:!0,schemaName:"Description",qualifierMessage:void 0,schema:{title:"Description",type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"documentation",required:!0,schemaName:"Documentation",qualifierMessage:void 0,schema:{title:"Documentation",type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"icon",required:!0,schemaName:"Icon",qualifierMessage:void 0,schema:{title:"Icon",type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"modelInfo",required:!0,schemaName:"object",qualifierMessage:void 0,schema:{title:"Modelinfo",type:"object"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"interfaces",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{title:"Interfaces",type:"array",items:{type:"string"}},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"dockerImage",required:!0,schemaName:"Dockerimage",qualifierMessage:void 0,schema:{title:"Dockerimage",type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"dockerImageSize",required:!0,schemaName:"Dockerimagesize",qualifierMessage:void 0,schema:{title:"Dockerimagesize",type:"integer"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"defaultPort",required:!0,schemaName:"Defaultport",qualifierMessage:void 0,schema:{title:"Defaultport",type:"integer"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"defaultExternalPort",required:!0,schemaName:"Defaultexternalport",qualifierMessage:void 0,schema:{title:"Defaultexternalport",type:"integer"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"runningPort",required:!1,schemaName:"Runningport",qualifierMessage:void 0,schema:{title:"Runningport",type:"integer"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"volumePath",required:!1,schemaName:"Volumepath",qualifierMessage:void 0,schema:{title:"Volumepath",type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"volumeName",required:!1,schemaName:"Volumename",qualifierMessage:void 0,schema:{title:"Volumename",type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"running",required:!0,schemaName:"Running",qualifierMessage:void 0,schema:{title:"Running",type:"boolean"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"downloaded",required:!0,schemaName:"Downloaded",qualifierMessage:void 0,schema:{title:"Downloaded",type:"boolean"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"downloadedDockerImage",required:!1,schemaName:"Downloadeddockerimage",qualifierMessage:void 0,schema:{title:"Downloadeddockerimage",type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"needsUpdate",required:!1,schemaName:"Needsupdate",qualifierMessage:void 0,schema:{title:"Needsupdate",type:"boolean",default:!1},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"supported",required:!0,schemaName:"Supported",qualifierMessage:void 0,schema:{title:"Supported",type:"boolean"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"enoughMemory",required:!1,schemaName:"Enoughmemory",qualifierMessage:void 0,schema:{title:"Enoughmemory",type:"boolean",default:!0},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"enoughSystemMemory",required:!1,schemaName:"Enoughsystemmemory",qualifierMessage:void 0,schema:{title:"Enoughsystemmemory",type:"boolean",default:!0},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"beta",required:!1,schemaName:"Beta",qualifierMessage:void 0,schema:{title:"Beta",type:"boolean",default:!1},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"comingSoon",required:!1,schemaName:"Comingsoon",qualifierMessage:void 0,schema:{title:"Comingsoon",type:"boolean",default:!1},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(s.Z,{responseExample:'[\n  {\n    "id": "string",\n    "name": "string",\n    "description": "string",\n    "documentation": "string",\n    "icon": "string",\n    "modelInfo": {},\n    "interfaces": [\n      "string"\n    ],\n    "dockerImage": "string",\n    "dockerImageSize": 0,\n    "defaultPort": 0,\n    "defaultExternalPort": 0,\n    "runningPort": 0,\n    "volumePath": "string",\n    "volumeName": "string",\n    "running": true,\n    "downloaded": true,\n    "downloadedDockerImage": "string",\n    "needsUpdate": false,\n    "supported": true,\n    "enoughMemory": true,\n    "enoughSystemMemory": true,\n    "beta": false,\n    "comingSoon": false\n  }\n]',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(d.default,{label:"422",value:"422",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Validation Error")),(0,r.kt)("div",null,(0,r.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(c.default,{mdxType:"SchemaTabs"},(0,r.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"detail"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"loc"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--info"},"anyOf"),(0,r.kt)(c.default,{mdxType:"SchemaTabs"},(0,r.kt)(d.default,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem",marginLeft:"1rem"}},(0,r.kt)("p",null,"string"))),(0,r.kt)(d.default,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem",marginLeft:"1rem"}},(0,r.kt)("p",null,"integer"))))),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)(m.Z,{collapsible:!1,name:"msg",required:!0,schemaName:"Message",qualifierMessage:void 0,schema:{title:"Message",type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"type",required:!0,schemaName:"Error Type",qualifierMessage:void 0,schema:{title:"Error Type",type:"string"},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,r.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(s.Z,{responseExample:'{\n  "detail": [\n    {\n      "loc": [\n        "string",\n        0\n      ],\n      "msg": "string",\n      "type": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);