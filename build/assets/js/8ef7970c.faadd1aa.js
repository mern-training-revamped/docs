"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4117],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,y=u["".concat(d,".").concat(m)]||u[m]||c[m]||o;return t?r.createElement(y,l(l({ref:n},p),{},{components:t})):r.createElement(y,l({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4788:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:2},l="Create Validation API",i={unversionedId:"Validation API/create-validation-api",id:"Validation API/create-validation-api",title:"Create Validation API",description:"Access request params",source:"@site/docs/Validation API/create-validation-api.md",sourceDirName:"Validation API",slug:"/Validation API/create-validation-api",permalink:"/documentation/docs/Validation API/create-validation-api",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Prerequisites",permalink:"/documentation/docs/Validation API/pre-requisites"},next:{title:"Congratulations!",permalink:"/documentation/docs/Validation API/congratulations"}},d={},s=[],p={toc:s};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-validation-api"},"Create Validation API"),(0,a.kt)("p",null,"Access request params"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="handler.js"',title:'"handler.js"'},"const { emailId, employeeId, country, doj } = JSON.parse(event?.body) || {};\n")),(0,a.kt)("p",null,"Handle Bad Requests"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="handler.js"',title:'"handler.js"'},'if (!employeeId || !country || !doj || !emailId) {\n  logger.debug("***BadRequest***", { employeeId, country, doj, emailId });\n\n  return lambdaResponse(\n    new BadRequest("Bad Request", [\n      { name: "emailId", type: "body" },\n      { name: "employeeId", type: "body" },\n      { name: "country", type: "body" },\n      { name: "doj", type: "body" },\n    ])\n  );\n}\n')),(0,a.kt)("p",null,"Get data from DynamoDb"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="handler.js"',title:'"handler.js"'},'const record = await getItem("Employee", { EmailId: emailId });\n')),(0,a.kt)("p",null,"Check if data exists in DB and Update"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="handler.js"',title:'"handler.js"'},'const { EmployeeId, DateOfJoining } = record?.Item || {};\nif (EmployeeId === employeeId && DateOfJoining === doj) {\n  await putItem("Employee", {\n    ...record.Item,\n    Country: country,\n  });\n} else {\n  return lambdaResponse(new NotFound("User Not Found"));\n}\n')),(0,a.kt)("p",null,"Return success response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="handler.js"',title:'"handler.js"'},"return lambdaResponse({\n  statusCode: 200,\n  body: {\n    isEligible: true,\n  },\n});\n")),(0,a.kt)("p",null,"Complete code with Exception handling"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="handler.js"',title:'"handler.js"'},'"use strict";\nconst { getLogger } = require("mern-logging-layer");\nconst {\n  InternalServerError,\n  BadRequest,\n  NotFound,\n  lambdaResponse,\n} = require("mern-common-layer");\nconst { getItem, putItem } = require("mern-database-layer");\n\nlet logger = getLogger();\n\nmodule.exports.validateProfile = async (event) => {\n  const { emailId, employeeId, country, doj } = JSON.parse(event?.body) || {};\n\n  logger.info("***Lambda Started***");\n\n  try {\n    if (!employeeId || !country || !doj || !emailId) {\n      logger.debug("***BadRequest***", { employeeId, country, doj, emailId });\n\n      return lambdaResponse(\n        new BadRequest("Bad Request", [\n          { name: "emailId", type: "body" },\n          { name: "employeeId", type: "body" },\n          { name: "country", type: "body" },\n          { name: "doj", type: "body" },\n        ])\n      );\n    }\n\n    const record = await getItem("Employee", { EmailId: emailId });\n\n    const { EmployeeId, DateOfJoining } = record?.Item || {};\n    if (EmployeeId === employeeId && DateOfJoining === doj) {\n      await putItem("Employee", {\n        ...record.Item,\n        Country: country,\n      });\n    } else {\n      return lambdaResponse(new NotFound("User Not Found"));\n    }\n\n    return lambdaResponse({\n      statusCode: 200,\n      body: {\n        isEligible: true,\n      },\n    });\n  } catch (err) {\n    logger.error("***Internal Server Error***", err);\n\n    return lambdaResponse(new InternalServerError());\n  }\n};\n')))}c.isMDXComponent=!0}}]);