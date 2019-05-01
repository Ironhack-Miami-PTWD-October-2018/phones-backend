(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,n){e.exports=n(65)},36:function(e,t,n){},56:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(28),o=n.n(l),c=n(8),s=(n(36),n(1)),i=n(2),u=n(4),p=n(3),h=n(5),m=n(6),d=n.n(m),g=n(14),E=(n(56),n(13)),f=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={fullName:"",email:"",originalPassword:"",message:null},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"genericSync",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(E.a)({},n,a))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),d.a.post("https://test-phone-app-ptwd.herokuapp.com/api/signup",this.state,{withCredentials:!0}).then(function(e){var n=e.data.userDoc;t.props.onUserChange(n)}).catch(function(e){if(e.response&&e.response.data)return t.setState({message:e.response.data.message})})}},{key:"render",value:function(){var e=this;return this.props.currentUser?r.a.createElement("section",null,r.a.createElement("h2",null,"You are signed up!"),r.a.createElement("p",null,"Welcome, ",this.props.currentUser.fullName,"! Your user ID is ",r.a.createElement("b",null,this.props.currentUser._id,"."))):r.a.createElement("section",{className:"SignupPage"},r.a.createElement("h2",null,"Sign Up"),r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("label",null,"Full Name:",r.a.createElement("input",{value:this.state.fullName,onChange:function(t){return e.genericSync(t)},type:"text",name:"fullName",placeholder:"Rey"})),r.a.createElement("label",null,"Email:",r.a.createElement("input",{value:this.state.email,onChange:function(t){return e.genericSync(t)},type:"email",name:"email",placeholder:"rey@jedi.com"})),r.a.createElement("label",null,"Password:",r.a.createElement("input",{value:this.state.originalPassword,onChange:function(t){return e.genericSync(t)},type:"password",name:"originalPassword",placeholder:"****"})),r.a.createElement("button",null,"Sign Up")),this.state.message&&r.a.createElement("div",null," ",this.state.message," "))}}]),t}(a.Component),b=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={email:"",originalPassword:"",message:null},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"genericSync",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(E.a)({},n,a))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),d.a.post("https://test-phone-app-ptwd.herokuapp.com/api/login",this.state,{withCredentials:!0}).then(function(e){console.log("Login Page",e.data);var n=e.data.userDoc;t.props.onUserChange(n)}).catch(function(e){if(e.response&&e.response.data)return t.setState({message:e.response.data.message})})}},{key:"render",value:function(){var e=this;return this.props.currentUser?(console.log(this.props.currentUser),r.a.createElement(g.a,{to:"/phone-list"})):r.a.createElement("section",{className:"LoginPage"},r.a.createElement("h2",null,"Log In"),r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("label",null,"Email:",r.a.createElement("input",{value:this.state.email,onChange:function(t){return e.genericSync(t)},type:"email",name:"email",placeholder:"rey@jedi.com"})),r.a.createElement("label",null,"Password:",r.a.createElement("input",{value:this.state.originalPassword,onChange:function(t){return e.genericSync(t)},type:"password",name:"originalPassword",placeholder:"****"})),r.a.createElement("button",null,"Log In")))}}]),t}(a.Component),v=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"HomePage"},r.a.createElement("h2",null,"Home Page"),r.a.createElement("p",null,"Welcome to Ironphones! Your favorite store foreverrrr!"))}}]),t}(a.Component),y=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={model:"",brand:"",price:"",image:"",specs:["","",""],isSubmitSuccessful:!1},console.log("who: ",n.props),n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"genericSync",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(E.a)({},n,a))}},{key:"uploadImage",value:function(e){var t=this,n=e.target.files;console.log("File SELECTED",n[0]);var a=new FormData;a.append("fileSubmission",n[0]),d.a.post("https://test-phone-app-ptwd.herokuapp.com/api/upload-file",a,{withCredentials:!0}).then(function(e){t.setState({image:e.data.fileUrl})}).catch(function(e){console.log("Upload Image ERROR",e),alert("Sorry! Something went wrong.")})}},{key:"syncSpecs",value:function(e,t){var n=this.state.specs;n[t]=e.target.value,this.setState({specs:n})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),d.a.post("https://test-phone-app-ptwd.herokuapp.com/api/phones",this.state,{withCredentials:!0}).then(function(e){console.log("Add Phone",e.data),t.setState({isSubmitSuccessful:!0})}).catch(function(e){console.log("Add Phone ERROR",e),alert("Sorry! Something went wrong.")})}},{key:"render",value:function(){var e=this;return this.props.currentUser?this.state.isSubmitSuccessful?r.a.createElement(g.a,{to:"/phone-list"}):r.a.createElement("section",null,r.a.createElement("h2",null,"Add a Phone"),r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("label",null," Model: "),r.a.createElement("input",{value:this.state.model,onChange:function(t){return e.genericSync(t)},type:"text",name:"model",placeholder:"iPhone Xs"}),r.a.createElement("label",null," Brand: "),r.a.createElement("input",{value:this.state.brand,onChange:function(t){return e.genericSync(t)},type:"text",name:"brand",placeholder:"Apple"}),r.a.createElement("label",null," Price: "),r.a.createElement("input",{value:this.state.price,onChange:function(t){return e.genericSync(t)},type:"number",name:"price",placeholder:"500"}),r.a.createElement("label",null," Image: "),r.a.createElement("input",{onChange:function(t){return e.uploadImage(t)},type:"file"}),r.a.createElement("br",null),r.a.createElement("img",{src:this.state.image,width:"200"}),r.a.createElement("br",null),r.a.createElement("label",null," Specs: "),r.a.createElement("br",null),r.a.createElement("small",null," has to have three characters or more "),r.a.createElement("br",null),this.state.specs.map(function(t,n){return r.a.createElement("input",{key:n,type:"text",value:t,onChange:function(t){return e.syncSpecs(t,n)}})}),r.a.createElement("button",null," Save "))):r.a.createElement(g.a,{to:"/login-page"})}}]),t}(a.Component),S=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={phoneArray:[]},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.get("https://test-phone-app-ptwd.herokuapp.com/api/phones",{withCredentials:!0}).then(function(t){console.log("Phone List",t.data),e.setState({phoneArray:t.data})}).catch(function(e){console.log("Phone List ERROR",e),alert("Sorry! Something went wrong.")})}},{key:"render",value:function(){var e=this.state.phoneArray;return r.a.createElement("section",null,r.a.createElement("h2",null," Phones \ud83d\udcf1 \u260e\ufe0f "),r.a.createElement("p",null,"Currently we have: ",e.length," phones."),r.a.createElement("ul",null,e.map(function(e){return r.a.createElement("li",{key:e._id},r.a.createElement(c.b,{to:"/phone-details/".concat(e._id)},e.model," by ",e.brand),r.a.createElement("p",null," $ ",e.price," "),r.a.createElement("img",{width:"150",src:e.image,alt:e.model}))})))}}]),t}(a.Component),w=function(e){function t(e){var n;Object(s.a)(this,t);var a=(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).props.thePhone,r=a.model,l=a.brand,o=a.price,c=a.image,i=a.specs;return n.state={model:r,brand:l,price:o,image:c,specs:i},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"genericSync",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(E.a)({},n,a))}},{key:"syncSpecs",value:function(e,t){var n=this.state.specs;n[t]=e.target.value,this.setState({specs:n})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),d.a.put("https://test-phone-app-ptwd.herokuapp.com"+"/api/phones/".concat(this.props.thePhone._id),this.state,{withCredentials:!0}).then(function(e){t.props.history.push("/phone-list")}).catch(function(e){console.log("Update Phone ERROR",e),alert("Sorry! Something went wrong.")})}},{key:"render",value:function(){var e=this;console.log(" = = = == =",this.state);var t=this.state,n=t.model,a=t.brand,l=t.price,o=t.image,c=t.specs;return r.a.createElement("section",null,r.a.createElement("h2",null,"Edit ",n," by ",a," "),r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("label",null," Model: "),r.a.createElement("input",{value:n,onChange:function(t){return e.genericSync(t)},type:"text",name:"model"}),r.a.createElement("label",null," Brand: "),r.a.createElement("input",{value:a,onChange:function(t){return e.genericSync(t)},type:"text",name:"brand"}),r.a.createElement("label",null," Price: "),r.a.createElement("input",{value:l,onChange:function(t){return e.genericSync(t)},type:"number",name:"price"}),r.a.createElement("img",{src:o,width:"200"}),r.a.createElement("br",null),r.a.createElement("label",null," Specs: "),r.a.createElement("br",null),r.a.createElement("small",null," has to have three characters or more "),r.a.createElement("br",null),c.map(function(t,n){return r.a.createElement("input",{key:n,type:"text",value:t,onChange:function(t){return e.syncSpecs(t,n)}})}),r.a.createElement("button",null," Save ")))}}]),t}(a.Component),O=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={showEdit:!1,specs:[]},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params;d.a.get("https://test-phone-app-ptwd.herokuapp.com"+"/api/phones/".concat(t.phoneId)).then(function(t){e.setState(t.data)}).catch(function(e){return console.log(e)})}},{key:"showEditForm",value:function(){this.setState({showEdit:!0})}},{key:"deletePhone",value:function(e){var t=this;d.a.delete("https://test-phone-app-ptwd.herokuapp.com"+"/api/phones/".concat(e)).then(function(e){t.props.history.push("/phone-list")}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this,t=this.state,n=t._id,a=t.brand,l=t.model,o=t.price,s=t.image,i=t.specs,u=t.createdAt;return r.a.createElement("section",null,this.state.showEdit?r.a.createElement(w,Object.assign({thePhone:this.state},this.props)):r.a.createElement("section",null,r.a.createElement("h2",null," ",l," by ",a," "),r.a.createElement("p",null," ",r.a.createElement("b",null," $ ",o," ")," "),r.a.createElement("img",{src:s,alt:l,width:"200"}),r.a.createElement("ul",null,i.map(function(e,t){return r.a.createElement("li",{key:t}," ",e," ")})),r.a.createElement("p",null,"  Product ID: ",n),r.a.createElement("p",null," Added on: ",u," "),r.a.createElement("button",{onClick:function(){return e.showEditForm()}},"Edit phone"),r.a.createElement("button",{onClick:function(){return e.deletePhone(n)}},"Delete")),r.a.createElement(c.b,{to:"/phone-list"},"Go to phones page "))}}]),t}(a.Component),k=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"NotFound"},r.a.createElement("h2",null,"404 Not Found"),r.a.createElement("p",null,"Sorry, the page you are looking for doesn't exist. \ud83d\ude45\u200d\u2640\ufe0f"),r.a.createElement("p",null,"Don't hang up the phone, though!",r.a.createElement(c.b,{to:"/phone-list"}," See Our Inventory")))}}]),t}(a.Component),j=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={currentUser:null},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.get("https://test-phone-app-ptwd.herokuapp.com/api/checkuser",{withCredentials:!0}).then(function(t){var n=t.data.userDoc;e.syncCurrentUser(n)}).catch(function(e){console.log("Check User ERROR",e),alert("Sorry! Something went wrong.")})}},{key:"syncCurrentUser",value:function(e){this.setState({currentUser:e})}},{key:"logoutClick",value:function(){var e=this;d.a.delete("https://test-phone-app-ptwd.herokuapp.com/api/logout",{withCredentials:!0}).then(function(){e.syncCurrentUser(null)}).catch(function(e){console.log("Logout ERROR",e),alert("Sorry! Something went wrong.")})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null," IronPhones "),r.a.createElement("nav",null,this.state.currentUser?r.a.createElement("span",null,r.a.createElement(c.c,{to:"/home"},"Home"),r.a.createElement(c.c,{to:"/add-phone"},"Add a new phone "),r.a.createElement(c.c,{to:"/phone-list"},"Phones "),r.a.createElement("br",null),r.a.createElement("b",null,this.state.currentUser.email),r.a.createElement("button",{onClick:function(){return e.logoutClick()}},"Log Out")):r.a.createElement("span",null,r.a.createElement(c.c,{to:"/signup-page"}," Signup "),r.a.createElement(c.c,{to:"/login-page"}," Login ")))),r.a.createElement(g.d,null,r.a.createElement(g.b,{exact:!0,path:"/",component:v}),r.a.createElement(g.b,{path:"/phone-list",component:S}),r.a.createElement(g.b,{path:"/phone-details/:phoneId",component:O}),r.a.createElement(g.b,{path:"/add-phone",render:function(){return r.a.createElement(y,{currentUser:e.state.currentUser})}}),r.a.createElement(g.b,{path:"/signup-page",render:function(){return r.a.createElement(f,{currentUser:e.state.currentUser,onUserChange:function(t){return e.syncCurrentUser(t)}})}}),r.a.createElement(g.b,{path:"/login-page",render:function(){return r.a.createElement(b,{currentUser:e.state.currentUser,onUserChange:function(t){return e.syncCurrentUser(t)}})}}),r.a.createElement(g.b,{component:k})),r.a.createElement("footer",null,r.a.createElement("p",null,"Made with \u2764\ufe0f at Ironhack")))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(c.a,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.1cc522a8.chunk.js.map