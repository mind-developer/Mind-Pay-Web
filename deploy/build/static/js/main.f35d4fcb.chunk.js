(this.webpackJsonpmind_pay_frontend=this.webpackJsonpmind_pay_frontend||[]).push([[0],{326:function(e,t,a){e.exports=a.p+"static/media/mainlogo.85c12dad.png"},360:function(e,t,a){e.exports=a(594)},365:function(e,t,a){},430:function(e,t,a){},594:function(e,t,a){"use strict";a.r(t);var n,r=a(0),l=a.n(r),o=a(36),i=a.n(o),c=(a(365),a(366),a(37)),u=a.n(c),m=a(166),s=a(39),d=a(89),f=a(90),p=f.a.section(n||(n=Object(d.a)(["\n  background-color: rgb(46, 46, 46);\n  position: fixed;\n  height: 100vh;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n\n  img {\n    width: 250px;\n    margin-bottom: 30px;\n  }\n\n  form {\n    width: 400px;\n\n    .ant-form-item-explain,\n    .ant-form-item-extra {\n      color: #ff4d4f;\n    }\n\n    .ant-input-affix-wrapper {\n      outline: none;\n\n      & {\n        border: 0;\n        border-bottom: 1px white solid;\n      }\n\n      &,\n      * {\n        background-color: transparent;\n        color: white;\n      }\n\n      &.ant-input-affix-wrapper-focused {\n        box-shadow: none;\n      }\n    }\n\n    .login-form-button {\n      width: 100%;\n      background: #dc1d45;\n      border-color: #d81e3d;\n      margin-top: 10px;\n      border-radius: 5px;\n    }\n  }\n"]))),E=a(353),g=a(608),h=a(610),b=a(49),v=a(617),y=a(618),x=a(326),k=a.n(x),j=a(128),w=a.n(j),I=a(69),O=a.n(I),S=a(109),C=a(53),_=l.a.createContext({});function N(e){var t=e.children,a=Object(r.useState)(null),n=Object(C.a)(a,2),o=n[0],i=n[1],c=Object(r.useState)(!0),m=Object(C.a)(c,2),s=m[0],d=m[1];function f(){i(null),localStorage.removeItem("user",null),localStorage.removeItem("jwtToken",null)}function p(){return(p=Object(S.a)(O.a.mark((function e(t){var a,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.user,n=t.token,i(a),localStorage.setItem("user",JSON.stringify(a)),localStorage.setItem("jwtToken",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(r.useEffect)((function(){var e=localStorage.getItem("user"),t=localStorage.getItem("jwtToken");i(t?JSON.parse(e):null),d(!1)}),[d]);var E=function(){var e=Object(S.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new Promise((function(e){setTimeout((function(){var t=localStorage.getItem("jwtToken");e(t)}),50)})),e.abrupt("return",a.then((function(e){return u.a.get(t,{headers:{Authorization:e}}).then((function(e){return e})).catch((function(e){401===e.response.status?f():alert("Erro interno, por favor tente novamente ou contate um administrador!")}))})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement(_.Provider,{value:{isAuthenticated:Boolean(o),user:o,isLoading:s,login:function(e){return p.apply(this,arguments)},logout:f,fetcher:E}},t)}E.b.config({maxCount:3});var R,z,L=function(){var e=Object(r.useContext)(_).login;return l.a.createElement(p,null,l.a.createElement("img",{alt:"MindLogo",src:k.a}),l.a.createElement(g.a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:function(t){u.a.post("/admin/login",t).then((function(t){e(t.data)})).catch((function(e){var t;E.b.error(null===(t=e.response)||void 0===t?void 0:t.data)}))}},l.a.createElement(g.a.Item,{name:"cpf",rules:[{required:!0,message:"Por favor coloque com sua login!"}]},l.a.createElement(w.a,{mask:"999.999.999-99",maskPlaceholder:""},(function(){return l.a.createElement(h.a,{prefix:l.a.createElement(v.a,{className:"site-form-item-icon"}),autoComplete:"off",placeholder:"Login"})}))),l.a.createElement(g.a.Item,{name:"password",rules:[{required:!0,message:"Por favor coloque com sua senha!"}]},l.a.createElement(h.a,{prefix:l.a.createElement(y.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Senha"})),l.a.createElement(g.a.Item,null,l.a.createElement(b.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Entrar"))))},P=a(603),A=a(123),T=(a(430),a(351)),q=a(616),F=a(203),B=a(604),D=a(51),V=f.a.span(R||(R=Object(d.a)(["\n    width: 10px;\n    height: 10px;\n    background: ",";\n    display: block;\n    border-radius: 100%;\n    margin-left: 30px;\n"])),(function(e){return e.status?"#0aff0a":"red"})),$=(f.a.img(z||(z=Object(d.a)(["\n    width: 150px;\n    height: 150px;\n    border-radius: 100%;\n    object-fit: cover;\n"]))),a(167)),U=a(211),M=a(619),J=a(613),K=a(601),H=a(602),G=a(75),W=a(330);var Y=function(e){var t=e.IsOpen,a=e.setIsOpen,n=Object(W.useForm)(),o=Object(C.a)(n,1)[0],i=Object(r.useState)(!1),c=Object(C.a)(i,2),m=c[0],s=c[1];return l.a.createElement(J.a,{title:"Cadastrar novo minder",width:400,onClose:function(){return a((function(e){return!e}))},visible:t,bodyStyle:{paddingBottom:80},footer:l.a.createElement("div",{style:{textAlign:"right"}},l.a.createElement(b.a,{style:{marginRight:8},onClick:function(){return a((function(e){return!e}))}},"Cancel"),l.a.createElement(b.a,{type:"primary",onClick:function(){return o.submit()},disabled:m},m?l.a.createElement(G.a,null):"Enviar"))},l.a.createElement(g.a,{layout:"vertical",form:o,onFinish:function(e){s(!0),u.a.post("/register",e).then((function(e){o.resetFields(),E.b.success("Usu\xe1rio cadastrado com sucesso!"),Object(D.b)("/users"),a(!1)})).catch((function(e){E.b.error(e.response.data)})).finally((function(){s(!1)}))},hideRequiredMark:!0},l.a.createElement(K.a,{gutter:16},l.a.createElement(H.a,{span:24},l.a.createElement(g.a.Item,{name:"name",label:"Nome",rules:[{required:!0,message:"Please enter user name"}]},l.a.createElement(h.a,{placeholder:"Nome",autoComplete:"off"})))),l.a.createElement(K.a,{gutter:16},l.a.createElement(H.a,{span:12},l.a.createElement(g.a.Item,{name:"cpf",label:"CPF",rules:[{required:!0,message:"Por favor digite o CPF"}]},l.a.createElement(w.a,{mask:"999.999.999-99",maskPlaceholder:""},(function(){return l.a.createElement(h.a,{placeholder:"CPF",autoComplete:"off"})})))),l.a.createElement(H.a,{span:12},l.a.createElement(g.a.Item,{name:"email",label:"Email",rules:[{required:!0,message:"Por favor digite o email"}]},l.a.createElement(h.a,{placeholder:"Email",autoComplete:"off"}))))))},Q=a(331),X=a.n(Q);var Z,ee,te,ae=function(e){return l.a.createElement(A.a,null,l.a.createElement(A.a.Item,null,l.a.createElement("a",{href:"/user/"+e.id},"Ver Mais")),l.a.createElement(A.a.Item,null,"Ver Recibos"),l.a.createElement(A.a.Item,{danger:!0,onClick:function(){return function(e){var t=e.name,a=e.id;T.a.confirm({title:"Tem certeza que deseja excluir "+t+"?",icon:l.a.createElement($.a,null),content:"Essa a\xe7\xe3o \xe9 irreversivel",okText:"Sim",cancelText:"Cancelar",onOk:function(){var e=localStorage.getItem("jwtToken");u.a.delete("/user/"+a,{headers:{Authorization:e}}).then((function(e){E.b.success("Usu\xe1rio excluido com sucesso"),Object(D.b)("/users")}))}})}({name:e.name,id:e.id})}},"Excluir"))},ne=[{title:"Avatar",dataIndex:"profile_image",key:"profile_image",render:function(e,t){return l.a.createElement(X.a,{src:u.a.defaults.baseURL+"media/"+e},null===t||void 0===t?void 0:t.name[0])}},{title:"Nome",dataIndex:"name",key:"nome",render:function(e,t){return l.a.createElement("a",{href:"/user/"+t.id},e)}},{title:"Salario Base",dataIndex:"base_salary",key:"base_salary",render:function(e,t){return l.a.createElement("div",null,"R$ ",e)}},{title:"Email",dataIndex:"email",key:"email"},{title:"CPF",dataIndex:"cpf",key:"cpf",render:function(e){return l.a.createElement("span",null,e.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,"$1.$2.$3-$4"))}},{title:"Data de Nascimento",dataIndex:"data_de_nascimento",key:"cpf",render:function(e){return l.a.createElement("span",null,new Date(e).toLocaleDateString("pt-br"))}},{title:"Finalizou?",dataIndex:"finished_registration",key:"cpf",render:function(e){return l.a.createElement("span",null,l.a.createElement(V,{status:Boolean(e)}))}},{title:"Action",key:"action",render:function(e,t){return l.a.createElement(q.b,{size:"middle"},l.a.createElement(F.a,{overlay:function(){return ae(t)}},l.a.createElement(b.a,{type:"dashed",className:"ant-dropdown-link",onClick:function(e){return e.preventDefault()}},"Mais Op\xe7\xf5es ",l.a.createElement(U.a,null))))}}],re=function(e){var t=localStorage.getItem("jwtToken");return u.a.get(e,{headers:{Authorization:t}}).then((function(e){return e}))},le=function(){var e=Object(D.a)("/users",re).data,t=Object(r.useState)(!1),a=Object(C.a)(t,2),n=a[0],o=a[1];return l.a.createElement("div",{className:"site-layout-background",style:{padding:24}},l.a.createElement(Y,{IsOpen:n,setIsOpen:o}),l.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},l.a.createElement(b.a,{type:"primary",onClick:function(){return o((function(e){return!e}))}},l.a.createElement(M.a,null)," Criar novo minder")),l.a.createElement("h1",null,"Listagem de Minders"),l.a.createElement(B.a,{loading:Boolean(!e),locale:{emptyText:"Sem dados"},rowKey:"id",theme:"",pagination:{pageSize:5},columns:ne,dataSource:null===e||void 0===e?void 0:e.data}))},oe=f.a.span(Z||(Z=Object(d.a)(["\n    width: 10px;\n    height: 10px;\n    background: ",";\n    display: block;\n    border-radius: 100%;\n"])),(function(e){return e.status?"#0aff0a":"red"})),ie=(f.a.img(ee||(ee=Object(d.a)(["\n    width: 150px;\n    height: 150px;\n    border-radius: 100%;\n    object-fit: cover;\n"]))),a(621)),ce=a(243),ue=a.n(ce),me=a(620),se=function(e){var t=e.record;return l.a.createElement(g.a,null,l.a.createElement(g.a.Item,{name:"receipt_location"},l.a.createElement(ue.a,{accept:"png",name:"avatar",customRequest:function(e){var a=new FormData;a.append("file",e.file),u.a.put("/requests/"+t.id,a,{headers:{Authorization:localStorage.getItem("jwtToken"),"Content-Type":"multipart/form-data"}}).then((function(e){T.a.destroyAll(),E.b.success("Recibo enviado com sucesso!"),Object(D.b)("/requests/all")})).catch((function(e){E.b.error("Desculpe, ocorreu um erro :(")}))}},l.a.createElement("p",{className:"ant-upload-drag-icon"},l.a.createElement(me.a,null)),l.a.createElement("p",{className:"ant-upload-text"},"Clique ou arraste para subir o recibo"))))},de=a(249),fe=a.n(de),pe=new Intl.NumberFormat("pt-BR",{maximumSignificantDigits:3}),Ee=[{title:"Nome",dataIndex:["users","name"],key:"nome",render:function(e,t){return l.a.createElement("a",{href:"user/".concat(t.user_id),title:"Ir para usu\xe1rio"},e)}},{title:"Valor a pagar",dataIndex:"amount",key:"amount",render:function(e){return l.a.createElement("span",null,"R$ ",pe.format(e))}},{title:"Valor de hora extra",dataIndex:"extra_hour",key:"extra_hour",render:function(e){return l.a.createElement("span",null,"R$ ",pe.format(e))}},{title:"Descri\xe7\xe3o",dataIndex:"description",key:"description",render:function(e){return l.a.createElement("span",{style:{maxWidth:"250px"}},e)}},{title:"Pago?",dataIndex:"request_finished",key:"request_finished",render:function(e){return l.a.createElement("span",null,l.a.createElement(oe,{status:Boolean(e)}))},filters:[{text:"Pago",value:1},{text:"Em aberto",value:null}],onFilter:function(e,t){return t.request_finished===e}},{title:"Data",dataIndex:"created_at",key:"created_at",sorter:function(e,t){return fe()(e.created_at).unix()-fe()(t.created_at).unix()}},{title:"A\xe7\xe3o",key:"acao",render:function(e,t){return l.a.createElement(q.b,{size:"middle"},!t.request_finished&&l.a.createElement(b.a,{type:"danger",className:"ant-dropdown-link",onClick:function(e){return T.a.confirm(function(e){return{title:"Enviar Recibo",content:l.a.createElement(se,{record:e})}}(t))}},"Pagar"))}}],ge={expandedRowRender:function(e){return!!e.receipt_location&&l.a.createElement("a",{href:u.a.defaults.baseURL+"media/"+e.receipt_location},l.a.createElement(ie.a,null),e.receipt_location)}},he=function(){var e=Object(r.useContext)(_).fetcher,t=Object(D.a)("/requests/all",e).data;return l.a.createElement("div",{className:"site-layout-background",style:{padding:24}},l.a.createElement("h1",null,"Listagem de Pedidos"),l.a.createElement(B.a,{loading:Boolean(!t),locale:{emptyText:"Sem dados"},rowKey:"id",expandable:ge,theme:"",pagination:{pageSize:5},columns:Ee,dataSource:null===t||void 0===t?void 0:t.data}))},be=a(622),ve=a(623),ye=a(624),xe=a(348),ke=a(334),je=a(606),we=a(612),Ie=a(337),Oe=function(e){var t=Object(Ie.useParams)().id,a=void 0===t?"":t,n=Object(r.useContext)(_).fetcher,o=Object(D.a)("/user/".concat(a),n).data,i=g.a.useForm(),c=Object(C.a)(i,1)[0],m=Object(r.useState)([]),s=Object(C.a)(m,2),d=s[0],f=s[1],p=function(e,t,a){return E.b.loading({content:e,key:a}),function(){E.b.success({content:t,key:a})}},y=function(){var e=Object(S.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=p("Atualizando!","Atualizado!","attdados"),u.a.put("/user/"+a,t,{headers:{Authorization:localStorage.getItem("jwtToken")}}).then((function(e){n()}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return o?l.a.createElement("div",{className:"site-layout-background",style:{padding:24,minHeight:350}},l.a.createElement(g.a,{name:"normal_login",form:c,className:"login-form",initialValues:{remember:!0},onFinish:y},l.a.createElement(g.a.Item,{noStyle:!0},l.a.createElement(g.a.Item,null,l.a.createElement(xe.a,null,l.a.createElement(je.a.Dragger,{onRemove:function(){f([])},customRequest:function(e){var t=p("Atualizando!","Foto de perfil atualizada com sucesso!","attimagem"),n=new FormData;n.append("file",e.file),u.a.patch("/user/profile/"+a,n,{headers:{Authorization:localStorage.getItem("jwtToken"),"Content-Type":"multipart/form-data"}}).then((function(e){t(),Object(D.b)("/user/".concat(a))}))},fileList:d,multiple:!1},l.a.createElement(we.a,{style:{fontSize:50,margin:"1.5rem 0"},size:200,src:(null===o||void 0===o?void 0:o.data.profile_image)&&u.a.defaults.baseURL+"media/"+(null===o||void 0===o?void 0:o.data.profile_image),alt:"profile_image"},null===o||void 0===o?void 0:o.data.name[0]),l.a.createElement("p",{className:"ant-upload-hint"},"Clique ou arraste para adicionar uma foto de perfil"))))),l.a.createElement(g.a.Item,{style:{marginBottom:0}},l.a.createElement(g.a.Item,{name:"name"},l.a.createElement(h.a,{placeholder:"Nome",defaultValue:null===o||void 0===o?void 0:o.data.name,prefix:l.a.createElement(v.a,{className:"site-form-item-icon"})}))),l.a.createElement(g.a.Item,{name:"cpf"},l.a.createElement(h.a,{placeholder:"CPF",defaultValue:null===o||void 0===o?void 0:o.data.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,"$1.$2.$3-$4"),prefix:l.a.createElement(v.a,{className:"site-form-item-icon"})})),l.a.createElement(g.a.Item,{style:{marginBottom:0}},l.a.createElement(g.a.Item,{name:"agency_number",style:{display:"inline-block",width:"calc(50%)"}},l.a.createElement(h.a,{placeholder:"Numero da Agencia",defaultValue:null===o||void 0===o?void 0:o.data.agency_number,prefix:l.a.createElement(be.a,{className:"site-form-item-icon"})})),l.a.createElement(g.a.Item,{name:"bank",style:{display:"inline-block",width:"calc(50% - 8px)",marginLeft:"8px"}},l.a.createElement(h.a,{placeholder:"Banco",defaultValue:null===o||void 0===o?void 0:o.data.bank,prefix:l.a.createElement(ve.a,{className:"site-form-item-icon"})}))),l.a.createElement(g.a.Item,{name:"account",type:"text"},l.a.createElement(w.a,{mask:"999999-9",defaultValue:null===o||void 0===o?void 0:o.data.account},(function(e){return l.a.createElement(h.a,Object.assign({},e,{placeholder:"Numero da conta",prefix:l.a.createElement(v.a,{className:"site-form-item-icon"})}))}))),l.a.createElement(g.a.Item,{name:"email",type:"email"},l.a.createElement(h.a,{placeholder:"Email",defaultValue:null===o||void 0===o?void 0:o.data.email,prefix:l.a.createElement(ye.a,{className:"site-form-item-icon"})})),l.a.createElement(g.a.Item,null,l.a.createElement(b.a,{style:{marginRight:"10px"},type:"primary",htmlType:"submit",className:"login-form-button"},"Atualizar")))):l.a.createElement(ke.a,{indicator:l.a.createElement(G.a,null)})},Se=a(609),Ce=a(605),_e=f.a.div(te||(te=Object(d.a)(["\n    flex-direction: column;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    text-align: center;\n\n    \n    h1{\n        font-size: 42px;\n        font-family: 'poppins';\n    }\n\n"]))),Ne={independentAxis:{style:{tickLabels:{fill:"black",angle:0,padding:10,fontSize:10,fontFamily:"Poppins"},grid:{stroke:"transparent"}}},dependentAxis:{style:{tickLabels:{fill:"black",padding:5,fontSize:10,fontFamily:"Poppins"},grid:{stroke:"transparent"}}}},Re=["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"];var ze=function(){var e,t,a,n,o=Object(r.useContext)(_).fetcher,i=Object(D.a)("/users/count",o).data,c=(Object(D.a)("/users/payments",o).data,Object(r.useState)(null)),m=Object(C.a)(c,2),s=m[0],d=m[1],f=Object(r.useState)(0),p=Object(C.a)(f,2),E=(p[0],p[1],Object(r.useState)(null)),g=Object(C.a)(E,2),h=g[0],b=g[1],v=Object(D.a)("/users",o).data,y=Object(r.useState)((new Date).getYear()),x=Object(C.a)(y,2),k=x[0],j=x[1];function w(){return(w=Object(S.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u.a.get("/users/payments",{headers:{Authorization:localStorage.getItem("jwtToken")}}).then((function(e){d(e.data)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return(I=Object(S.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!h){e.next=5;break}return e.next=3,u.a.post("/users/filter",{minder:h,ano:k},{headers:{Authorization:localStorage.getItem("jwtToken")}});case 3:t=e.sent,d(t.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){w.apply(this,arguments)}()}),[]),i||s?l.a.createElement(_e,null,l.a.createElement(K.a,{style:{justifyContent:"space-between",alignItems:"center",width:"70%"}},l.a.createElement(H.a,{span:24},l.a.createElement("h1",{style:{marginTop:20}},"Gr\xe1fico de pagamentos mensais"),l.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}},l.a.createElement("h1",{style:{display:"flex",flexDirection:"row",alignItems:"center",marginBottom:0,marginRight:20}},"Escolha um minder e o ano:"),l.a.createElement("select",{id:"minder",style:{height:35,width:130,borderRadius:10},onChange:function(e){var t;return b(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)}},l.a.createElement("option",{value:"0"},"Todos"),null===v||void 0===v||null===(e=v.data)||void 0===e?void 0:e.map((function(e){return l.a.createElement("option",{value:null===e||void 0===e?void 0:e.id},null===e||void 0===e?void 0:e.name)}))),l.a.createElement("select",{id:"ano",style:{height:35,width:130,marginLeft:10,borderRadius:10},onChange:function(e){var t;return j(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)}},l.a.createElement("option",{value:"2016"},"2016"),l.a.createElement("option",{value:"2017"},"2017"),l.a.createElement("option",{value:"2018"},"2018"),l.a.createElement("option",{value:"2019"},"2019"),l.a.createElement("option",{value:"2020"},"2020"),l.a.createElement("option",{value:"2021"},"2021")),l.a.createElement("button",{style:{height:35,width:130,marginLeft:10,borderRadius:10,backgroundColor:"#7B2627",color:"#fff",elevation:15,border:"none"},onClick:function(){return I.apply(this,arguments)}},"Procurar")),s&&l.a.createElement(Se.a,{height:250,theme:Ne},l.a.createElement(Ce.a,{interpolation:"linear",data:null===s||void 0===s||null===(t=s.amounted)||void 0===t?void 0:t.map((function(e,t){return{x:Re[t],y:e}})),style:{data:{stroke:"black"}}}),l.a.createElement(Ce.a,{interpolation:"linear",data:null===s||void 0===s||null===(a=s.extra)||void 0===a?void 0:a.map((function(e,t){return{x:Re[t],y:e}})),style:{data:{stroke:"red"}}}),l.a.createElement(Ce.a,{interpolation:"linear",data:null===s||void 0===s||null===(n=s.base)||void 0===n?void 0:n.map((function(e,t){return{x:Re[t],y:e}})),style:{data:{stroke:"#00008b"}}}))),l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"}},l.a.createElement("div",{style:{width:15,height:15,backgroundColor:"red",borderRadius:16,marginBottom:5}}),l.a.createElement("h3",{style:{marginLeft:10}},"Linha Vermelha para hora extra"),l.a.createElement("br",null)),l.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"}},l.a.createElement("div",{style:{width:15,height:15,backgroundColor:"black",borderRadius:16,marginBottom:5}}),l.a.createElement("h3",{style:{marginLeft:10}},"Linha Preta para sal\xe1rio total"),l.a.createElement("br",null)),l.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"}},l.a.createElement("div",{style:{width:15,height:15,backgroundColor:"#00008b",borderRadius:16,marginBottom:5}}),l.a.createElement("h3",{style:{marginLeft:10}},"Linha Azul para sal\xe1rio base"),l.a.createElement("br",null))),l.a.createElement(H.a,{span:24,style:{marginBottom:50}},l.a.createElement("h1",null,"j\xe1 somos ",null===i||void 0===i?void 0:i.data.length," Minders"),null===i||void 0===i?void 0:i.data.map((function(e){return l.a.createElement(we.a,{alt:e.name,size:50,style:{objectFit:"cover"},src:u.a.defaults.baseURL+"media/"+e.profile_image},e.name[0])}))))):l.a.createElement(ke.a,{indicator:l.a.createElement(G.a,null)})},Le=a(625),Pe=a(626),Ae=a(627),Te=[{path:"/user/:id",component:function(){return l.a.createElement(Oe,null)},onlyRoute:!0},{name:"Perfil",path:"/user/",component:function(){return l.a.createElement(Oe,null)},icon:l.a.createElement(v.a,null)},{name:"Usu\xe1rios",path:"/users",component:function(){return l.a.createElement(le,null)},icon:l.a.createElement(Le.a,null)},{name:"Pagamentos",path:"/requests",component:function(){return l.a.createElement(he,null)},icon:l.a.createElement(Pe.a,null)},{name:"Dashboards",path:"/",component:function(){return l.a.createElement(ze,null)},icon:l.a.createElement(Ae.a,null)}],qe={};Te.forEach((function(e,t){qe[e.path]=t.toString()}));var Fe=Te,Be=qe,De=P.a.Content,Ve=P.a.Sider,$e=function(){var e=Object(s.useLocation)().pathname;return l.a.createElement(m.a,null,l.a.createElement(P.a,{style:{minHeight:"100vh"}},l.a.createElement(Ve,{collapsible:!0},l.a.createElement(A.a,{theme:"dark",mode:"inline",defaultSelectedKeys:[Be[e]]},Fe.map((function(e,t){return e.onlyRoute?null:l.a.createElement(A.a.Item,{icon:e.icon,key:t},l.a.createElement(m.b,{to:e.path},e.name))})))),l.a.createElement(P.a,{className:"site-layout"},l.a.createElement(De,{style:{margin:"16px",padding:"0 16px"}},l.a.createElement(s.Switch,null,Fe.map((function(e,t){var a=e.path,n=e.component;return l.a.createElement(s.Route,{key:t,path:a,component:n})})))))))};u.a.defaults.baseURL="https://mindpay.mindconsulting.com.br/api";var Ue=function(){var e=Object(r.useContext)(_),t=e.isAuthenticated;return e.isLoading?l.a.createElement(l.a.Fragment,null):l.a.createElement(m.a,null,l.a.createElement(s.Switch,null,l.a.createElement(s.Route,{path:"/"},t?l.a.createElement($e,null):l.a.createElement(L,null))))};i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(N,null,l.a.createElement(Ue,null))),document.getElementById("root"))}},[[360,1,2]]]);
//# sourceMappingURL=main.f35d4fcb.chunk.js.map