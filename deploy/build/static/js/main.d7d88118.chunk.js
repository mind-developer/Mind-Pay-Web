(this.webpackJsonpmind_pay_frontend=this.webpackJsonpmind_pay_frontend||[]).push([[0],{217:function(e,t,a){e.exports=a.p+"static/media/mainlogo.bb6e12f7.png"},237:function(e,t,a){e.exports=a.p+"static/media/mindbear.2c2a588f.png"},245:function(e,t,a){e.exports=a(453)},250:function(e,t,a){},366:function(e,t,a){},453:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),l=a.n(o),i=(a(250),a(251),a(43)),c=a.n(i),u=a(117),m=a(41),s=a(74),d=a(75);function f(){var e=Object(s.a)(["\n    background-color: rgb(46, 46, 46);\n    position: fixed;\n    height: 100vh;\n    width: 100%;\n    justify-content: center;\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n\n    img{\n        width: 150px;\n    }\n\n    form{\n        width: 400px;\n        \n        .ant-form-item-explain, .ant-form-item-extra{\n            color: #ff4d4f;\n        }   \n        \n        .ant-input-affix-wrapper{\n            outline: none;\n\n            &{\n                border: 0;\n                border-bottom: 1px white solid;\n            }\n\n            &,*{\n                background-color: transparent;\n                color: white;\n            }\n\n            &.ant-input-affix-wrapper-focused{\n                box-shadow: none;\n            }\n        }\n\n        .login-form-button{\n            width: 100%;\n            background: #dc1d45;\n            border-color: #d81e3d;\n            margin-top: 10px;\n            border-radius: 5px;\n        }\n    }\n"]);return f=function(){return e},e}var p=d.a.section(f()),E=a(463),g=a(458),h=a(460),b=a(47),v=a(465),y=a(466),x=a(217),k=a.n(x),j=a(126),I=a.n(j),w=a(87),O=a.n(w),S=a(110),C=a(65),N=r.a.createContext({});function _(e){var t=e.children,a=Object(n.useState)(null),o=Object(C.a)(a,2),l=o[0],i=o[1],u=Object(n.useState)(!0),m=Object(C.a)(u,2),s=m[0],d=m[1];function f(){i(null),localStorage.removeItem("user",null),localStorage.removeItem("jwtToken",null)}function p(){return(p=Object(S.a)(O.a.mark((function e(t){var a,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.user,n=t.token,i(a),localStorage.setItem("user",JSON.stringify(a)),localStorage.setItem("jwtToken",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){var e=localStorage.getItem("user"),t=localStorage.getItem("jwtToken");i(t?JSON.parse(e):null),d(!1)}),[d]);var E=function(){var e=Object(S.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new Promise((function(e){setTimeout((function(){var t=localStorage.getItem("jwtToken");e(t)}),50)})),e.abrupt("return",a.then((function(e){return c.a.get(t,{headers:{Authorization:e}}).then((function(e){return e})).catch((function(e){401===e.response.status?f():alert("Erro interno, por favor tente novamente ou contate um administrador!")}))})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(N.Provider,{value:{isAuthenticated:Boolean(l),user:l,isLoading:s,login:function(e){return p.apply(this,arguments)},logout:f,fetcher:E}},t)}E.b.config({maxCount:3});var q=function(){var e=Object(n.useContext)(N).login;return r.a.createElement(p,null,r.a.createElement("img",{alt:"MindLogo",src:k.a}),r.a.createElement(g.a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:function(t){c.a.post("/admin/login",t).then((function(t){e(t.data)})).catch((function(e){var t;E.b.error(null===(t=e.response)||void 0===t?void 0:t.data)}))}},r.a.createElement(g.a.Item,{name:"cpf",rules:[{required:!0,message:"Por favor coloque com sua login!"}]},r.a.createElement(I.a,{mask:"999.999.999-99",maskPlaceholder:""},r.a.createElement(h.a,{prefix:r.a.createElement(v.a,{className:"site-form-item-icon"}),autoComplete:"off",placeholder:"Login"}))),r.a.createElement(g.a.Item,{name:"password",rules:[{required:!0,message:"Por favor coloque com sua senha!"}]},r.a.createElement(h.a,{prefix:r.a.createElement(y.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Senha"})),r.a.createElement(g.a.Item,null,r.a.createElement(b.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Entrar"))))},z=a(456),P=a(93),R=(a(366),a(240)),A=a(464),T=a(143),F=a(457),L=a(64);function B(){var e=Object(s.a)(["\n    width: 150px;\n    height: 150px;\n    border-radius: 100%;\n    object-fit: cover;\n"]);return B=function(){return e},e}function V(){var e=Object(s.a)(["\n    width: 10px;\n    height: 10px;\n    background: ",";\n    display: block;\n    border-radius: 100%;\n    margin-left: 30px;\n"]);return V=function(){return e},e}var D=d.a.span(V(),(function(e){return e.status?"#0aff0a":"red"})),M=(d.a.img(B()),a(468)),U=a(469),$=a(470),J=a(461),K=a(454),H=a(455),Q=a(467),W=a(221);var G=function(e){var t=e.IsOpen,a=e.setIsOpen,o=Object(W.useForm)(),l=Object(C.a)(o,1)[0],i=Object(n.useState)(!1),u=Object(C.a)(i,2),m=u[0],s=u[1];return r.a.createElement(J.a,{title:"Cadastrar novo minder",width:400,onClose:function(){return a((function(e){return!e}))},visible:t,bodyStyle:{paddingBottom:80},footer:r.a.createElement("div",{style:{textAlign:"right"}},r.a.createElement(b.a,{style:{marginRight:8},onClick:function(){return a((function(e){return!e}))}},"Cancel"),r.a.createElement(b.a,{type:"primary",onClick:function(){return l.submit()},disabled:m},m?r.a.createElement(Q.a,null):"Enviar"))},r.a.createElement(g.a,{layout:"vertical",form:l,onFinish:function(e){s(!0),c.a.post("/register",e).then((function(e){l.resetFields(),E.b.success("Usu\xe1rio cadastrado com sucesso!"),Object(L.b)("/users"),a(!1)})).catch((function(e){E.b.error("erro")})).finally((function(){s(!1)}))},hideRequiredMark:!0},r.a.createElement(K.a,{gutter:16},r.a.createElement(H.a,{span:24},r.a.createElement(g.a.Item,{name:"name",label:"Nome",rules:[{required:!0,message:"Please enter user name"}]},r.a.createElement(h.a,{placeholder:"Nome",autoComplete:"off"})))),r.a.createElement(K.a,{gutter:16},r.a.createElement(H.a,{span:12},r.a.createElement(g.a.Item,{name:"cpf",label:"CPF",rules:[{required:!0,message:"Por favor digite o CPF"}]},r.a.createElement(I.a,{mask:"999.999.999-99",maskPlaceholder:""},r.a.createElement(h.a,{placeholder:"CPF",autoComplete:"off"})))),r.a.createElement(H.a,{span:12},r.a.createElement(g.a.Item,{name:"email",label:"Email",rules:[{required:!0,message:"Por favor digite o email"}]},r.a.createElement(h.a,{placeholder:"Email",autoComplete:"off"}))))))},X=a(223),Y=a.n(X);var Z=function(e){return r.a.createElement(P.a,null,r.a.createElement(P.a.Item,null,r.a.createElement("a",{href:"/user/"+e.id},"Ver Mais")),r.a.createElement(P.a.Item,null,"Ver Recibos"),r.a.createElement(P.a.Item,{danger:!0,onClick:function(){return function(e){var t=e.name,a=e.id;R.a.confirm({title:"Tem certeza que deseja excluir "+t+"?",icon:r.a.createElement(M.a,null),content:"Essa a\xe7\xe3o \xe9 irreversivel",okText:"Sim",cancelText:"Cancelar",onOk:function(){var e=localStorage.getItem("jwtToken");c.a.delete("/user/"+a,{headers:{Authorization:e}}).then((function(e){E.b.success("Usu\xe1rio excluido com sucesso"),Object(L.b)("/users")}))}})}({name:e.name,id:e.id})}},"Excluir"))},ee=[{title:"Avatar",dataIndex:"profile_image",key:"profile_image",render:function(e,t){return r.a.createElement(Y.a,{src:c.a.defaults.baseURL+"media/"+e},null===t||void 0===t?void 0:t.name[0])}},{title:"Nome",dataIndex:"name",key:"nome",render:function(e,t){return r.a.createElement("a",{href:"/user/"+t.id},e)}},{title:"Email",dataIndex:"email",key:"email"},{title:"CPF",dataIndex:"cpf",key:"cpf",render:function(e){return r.a.createElement("span",null,e.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,"$1.$2.$3-$4"))}},{title:"Finalizou?",dataIndex:"finished_registration",key:"cpf",render:function(e){return r.a.createElement("span",null,r.a.createElement(D,{status:Boolean(e)}))}},{title:"Action",key:"action",render:function(e,t){return r.a.createElement(A.b,{size:"middle"},r.a.createElement(T.a,{overlay:function(){return Z(t)}},r.a.createElement(b.a,{type:"dashed",className:"ant-dropdown-link",onClick:function(e){return e.preventDefault()}},"Mais Op\xe7\xf5es ",r.a.createElement(U.a,null))))}}],te=function(e){var t=localStorage.getItem("jwtToken");return c.a.get(e,{headers:{Authorization:t}}).then((function(e){return e}))},ae=function(){var e=Object(L.a)("/users",te).data,t=Object(n.useState)(!1),a=Object(C.a)(t,2),o=a[0],l=a[1];return r.a.createElement("div",{className:"site-layout-background",style:{padding:24}},r.a.createElement(G,{IsOpen:o,setIsOpen:l}),r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement(b.a,{type:"primary",onClick:function(){return l((function(e){return!e}))}},r.a.createElement($.a,null)," Criar novo minder")),r.a.createElement("h1",null,"Listagem de Minders"),r.a.createElement(F.a,{loading:Boolean(!e),locale:{emptyText:"Sem dados"},rowKey:"id",theme:"",pagination:{pageSize:5},columns:ee,dataSource:null===e||void 0===e?void 0:e.data}))};function ne(){var e=Object(s.a)(["\n    width: 150px;\n    height: 150px;\n    border-radius: 100%;\n    object-fit: cover;\n"]);return ne=function(){return e},e}function re(){var e=Object(s.a)(["\n    width: 10px;\n    height: 10px;\n    background: ",";\n    display: block;\n    border-radius: 100%;\n"]);return re=function(){return e},e}var oe=d.a.span(re(),(function(e){return e.status?"#0aff0a":"red"})),le=(d.a.img(ne()),a(472)),ie=a(165),ce=a.n(ie),ue=a(471),me=function(e){var t=e.record;return r.a.createElement(g.a,null,r.a.createElement(g.a.Item,{name:"receipt_location"},r.a.createElement(ce.a,{accept:"png",name:"avatar",customRequest:function(e){var a=new FormData;a.append("file",e.file),c.a.put("/requests/"+t.id,a,{headers:{Authorization:localStorage.getItem("jwtToken"),"Content-Type":"multipart/form-data"}}).then((function(e){R.a.destroyAll(),E.b.success("Recibo enviado com sucesso!"),Object(L.b)("/requests/all")})).catch((function(e){E.b.error("Desculpe, ocorreu um erro :(")}))}},r.a.createElement("p",{className:"ant-upload-drag-icon"},r.a.createElement(ue.a,null)),r.a.createElement("p",{className:"ant-upload-text"},"Clique ou arraste para subir o recibo"))))},se=a(176),de=a.n(se),fe=[{title:"Nome",dataIndex:["users","name"],key:"nome",render:function(e,t){return r.a.createElement("a",{href:"user/".concat(t.user_id),title:"Ir para usu\xe1rio"},e)}},{title:"Quantidade",dataIndex:"amount",key:"amount"},{title:"Descri\xe7\xe3o",dataIndex:"description",key:"description",render:function(e){return r.a.createElement("p",{style:{maxWidth:"250px"}},e)}},{title:"Pago?",dataIndex:"request_finished",key:"request_finished",render:function(e){return r.a.createElement("span",null,r.a.createElement(oe,{status:Boolean(e)}))},filters:[{text:"Pago",value:1},{text:"Em aberto",value:null}],onFilter:function(e,t){return t.request_finished===e}},{title:"Data",dataIndex:"created_at",key:"created_at",sorter:function(e,t){return de()(e.created_at).unix()-de()(t.created_at).unix()}},{title:"A\xe7\xe3o",key:"acao",render:function(e,t){return r.a.createElement(A.b,{size:"middle"},!t.request_finished&&r.a.createElement(b.a,{type:"danger",className:"ant-dropdown-link",onClick:function(e){return R.a.confirm(function(e){return{title:"Enviar Recibo",content:r.a.createElement(me,{record:e})}}(t))}},"Pagar"))}}],pe={expandedRowRender:function(e){return!!e.receipt_location&&r.a.createElement("a",{href:c.a.defaults.baseURL+"media/"+e.receipt_location},r.a.createElement(le.a,null),e.receipt_location)}},Ee=function(){var e=Object(n.useContext)(N).fetcher,t=Object(L.a)("/requests/all",e).data;return r.a.createElement("div",{className:"site-layout-background",style:{padding:24}},r.a.createElement("h1",null,"Listagem de Pedidos"),r.a.createElement(F.a,{loading:Boolean(!t),locale:{emptyText:"Sem dados"},rowKey:"id",expandable:pe,theme:"",pagination:{pageSize:5},columns:fe,dataSource:null===t||void 0===t?void 0:t.data}))},ge=a(473),he=a(474),be=a(475),ve=a(238),ye=a(234),xe=a(459),ke=a(462),je=a(236);var Ie=function(e){var t=Object(je.useParams)().id,a=void 0===t?"":t,o=Object(n.useContext)(N).fetcher,l=Object(L.a)("/user/".concat(a),o).data,i=g.a.useForm(),u=Object(C.a)(i,1)[0],m=Object(n.useState)([]),s=Object(C.a)(m,2),d=s[0],f=s[1],p=Object(n.useState)(),y=Object(C.a)(p,2),x=y[0],k=y[1],j=function(e,t,a){return E.b.loading({content:e,key:a}),function(){E.b.success({content:t,key:a})}},I=function(){var e=Object(S.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=j("Atualizando!","Atualizado!","attdados"),c.a.put("/user/"+a,t,{headers:{Authorization:localStorage.getItem("jwtToken")}}).then((function(e){n()}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return l?r.a.createElement("div",{className:"site-layout-background",style:{padding:24,minHeight:350}},r.a.createElement(g.a,{name:"normal_login",form:u,className:"login-form",initialValues:{remember:!0},onFinish:I},r.a.createElement(g.a.Item,{noStyle:!0},r.a.createElement(g.a.Item,null,r.a.createElement(ve.a,null,r.a.createElement(xe.a.Dragger,{onRemove:function(){f([]),k(void 0)},customRequest:function(e){var t=j("Atualizando!","Foto de perfil atualizada com sucesso!","attimagem"),n=new FormData;n.append("file",e.file),c.a.patch("/user/profile/"+a,n,{headers:{Authorization:localStorage.getItem("jwtToken"),"Content-Type":"multipart/form-data"}}).then((function(n){t(),function(e,t){var a=new FileReader;a.addEventListener("load",(function(){return t(a.result)})),a.readAsDataURL(e)}(e.file,(function(e){k(e)})),Object(L.b)("/user/".concat(a))}))},fileList:d,multiple:!1},r.a.createElement(ke.a,{style:{fontSize:50,margin:"1.5rem 0"},size:200,src:x||(null===l||void 0===l?void 0:l.data.profile_image)&&c.a.defaults.baseURL+"media/"+(null===l||void 0===l?void 0:l.data.profile_image),alt:"profile_image"},null===l||void 0===l?void 0:l.data.name[0]),r.a.createElement("p",{className:"ant-upload-hint"},"Clique ou arraste para adicionar uma foto de perfil"))))),r.a.createElement(g.a.Item,{style:{marginBottom:0}},r.a.createElement(g.a.Item,{name:"name"},r.a.createElement(h.a,{placeholder:"Nome",defaultValue:null===l||void 0===l?void 0:l.data.name,prefix:r.a.createElement(v.a,{className:"site-form-item-icon"})}))),r.a.createElement(g.a.Item,{name:"cpf"},r.a.createElement(h.a,{placeholder:"CPF",defaultValue:null===l||void 0===l?void 0:l.data.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,"$1.$2.$3-$4"),prefix:r.a.createElement(v.a,{className:"site-form-item-icon"})})),r.a.createElement(g.a.Item,{style:{marginBottom:0}},r.a.createElement(g.a.Item,{name:"agency_number",style:{display:"inline-block",width:"calc(50%)"}},r.a.createElement(h.a,{placeholder:"Numero da Agencia",defaultValue:null===l||void 0===l?void 0:l.data.agency_number,prefix:r.a.createElement(ge.a,{className:"site-form-item-icon"})})),r.a.createElement(g.a.Item,{name:"bank",style:{display:"inline-block",width:"calc(50% - 8px)",marginLeft:"8px"}},r.a.createElement(h.a,{placeholder:"Banco",defaultValue:null===l||void 0===l?void 0:l.data.bank,prefix:r.a.createElement(he.a,{className:"site-form-item-icon"})}))),r.a.createElement(g.a.Item,{name:"account",type:"text"},r.a.createElement(h.a,{placeholder:"Numero da conta",defaultValue:null===l||void 0===l?void 0:l.data.account,prefix:r.a.createElement(v.a,{className:"site-form-item-icon"})})),r.a.createElement(g.a.Item,{name:"email",type:"email"},r.a.createElement(h.a,{placeholder:"Email",defaultValue:null===l||void 0===l?void 0:l.data.email,prefix:r.a.createElement(be.a,{className:"site-form-item-icon"})})),r.a.createElement(g.a.Item,null,r.a.createElement(b.a,{style:{marginRight:"10px"},type:"primary",htmlType:"submit",className:"login-form-button"},"Atualizar")))):r.a.createElement(ye.a,{indicator:r.a.createElement(Q.a,null)})},we=a(237),Oe=a.n(we);function Se(){var e=Object(s.a)(["\n    flex-direction: column;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    text-align: center;\n\n    \n    h1{\n        font-size: 42px;\n        font-family: 'poppins';\n    }\n\n    img{\n        width: 250px;\n    }\n"]);return Se=function(){return e},e}var Ce=d.a.div(Se());var Ne=function(){return r.a.createElement(Ce,null,r.a.createElement("h1",null,"MindPay"),r.a.createElement("img",{alt:"mindconsulting",src:Oe.a}))},_e=a(476),qe=a(477),ze=a(478),Pe=[{path:"/user/:id",component:function(){return r.a.createElement(Ie,null)},onlyRoute:!0},{name:"Perfil",path:"/user/",component:function(){return r.a.createElement(Ie,null)},icon:r.a.createElement(v.a,null)},{name:"Usu\xe1rios",path:"/users",component:function(){return r.a.createElement(ae,null)},icon:r.a.createElement(_e.a,null)},{name:"Mensagens",path:"/requests",component:function(){return r.a.createElement(Ee,null)},icon:r.a.createElement(qe.a,null)},{name:"Dashboards",path:"/",component:function(){return r.a.createElement(Ne,null)},icon:r.a.createElement(ze.a,null)}],Re={};Pe.forEach((function(e,t){Re[e.path]=t.toString()}));var Ae=Pe,Te=Re,Fe=z.a.Content,Le=z.a.Sider,Be=function(){var e=Object(m.useLocation)().pathname;return r.a.createElement(u.a,null,r.a.createElement(z.a,{style:{minHeight:"100vh"}},r.a.createElement(Le,{collapsible:!0,style:{background:"#101010"}},r.a.createElement(P.a,{theme:"dark",mode:"inline",defaultSelectedKeys:[Te[e]]},Ae.map((function(e,t){return e.onlyRoute?null:r.a.createElement(P.a.Item,{icon:e.icon,key:t},r.a.createElement(u.b,{to:e.path},e.name))})))),r.a.createElement(z.a,{className:"site-layout",style:{backgroundImage:"url('/toppng2.png')",backgroundSize:"200px 200px"}},r.a.createElement(Fe,{style:{margin:"16px",padding:"0 16px"}},r.a.createElement(m.Switch,null,Ae.map((function(e,t){var a=e.path,n=e.component;return r.a.createElement(m.Route,{key:t,path:a,component:n})})))))))};c.a.defaults.baseURL="http://162.214.54.8:3376/";var Ve=function(){var e=Object(n.useContext)(N),t=e.isAuthenticated;return e.isLoading?r.a.createElement(r.a.Fragment,null):r.a.createElement(u.a,null,r.a.createElement(m.Switch,null,r.a.createElement(m.Route,{path:"/"},t?r.a.createElement(Be,null):r.a.createElement(q,null))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null,r.a.createElement(Ve,null))),document.getElementById("root"))}},[[245,1,2]]]);
//# sourceMappingURL=main.d7d88118.chunk.js.map