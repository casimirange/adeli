"use strict";(self.webpackChunkgulfin=self.webpackChunkgulfin||[]).push([[256],{6256:(ue,f,a)=>{a.r(f),a.d(f,{AuthModule:()=>me});var d=a(8583),c=a(6974),s=a(665),p=a(6215),_=a(5399),e=a(7716),v=a(1841),g=a(8368),Z=a(7717),m=a(1982);function T(t,n){1&t&&(e.TgZ(0,"div",30),e._uU(1," le nom d'utilisateur est requis. "),e.qZA())}function A(t,n){1&t&&(e.TgZ(0,"div",30),e._uU(1," entrez une email valide : example@example.com "),e.qZA())}function x(t,n){if(1&t&&(e.TgZ(0,"div",28),e.YNc(1,T,2,0,"div",29),e.YNc(2,A,2,0,"div",29),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",null==i.form.username.errors?null:i.form.username.errors.required),e.xp6(1),e.Q6J("ngIf",null==i.form.username.errors?null:i.form.username.errors.email)}}function q(t,n){1&t&&(e.TgZ(0,"div",30),e._uU(1," le mot de passe est obligatoire. "),e.qZA())}function b(t,n){1&t&&(e.TgZ(0,"div",30),e._uU(1," au moins 8 caract\xe8res avec 1 minuscule, 1 majuscule et 1 caract\xe8re sp\xe9cial "),e.qZA())}function w(t,n){if(1&t&&(e.TgZ(0,"div",28),e.YNc(1,q,2,0,"div",29),e.YNc(2,b,2,0,"div",29),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",null==i.form.password.errors?null:i.form.password.errors.required),e.xp6(1),e.Q6J("ngIf",null==i.form.password.errors?null:i.form.password.errors.pattern)}}function y(t,n){if(1&t&&(e.TgZ(0,"div"),e._UZ(1,"div",19),e.TgZ(2,"h6",31),e._uU(3),e.qZA(),e.qZA()),2&t){const i=e.oxw();e.xp6(3),e.Oqu(i.errorMessage)}}function C(t,n){1&t&&e._UZ(0,"i",32)}function L(t,n){1&t&&(e.TgZ(0,"span"),e._uU(1,"Connexion ..."),e.qZA())}function I(t,n){1&t&&(e.TgZ(0,"span"),e._uU(1,"Se Connecter"),e.qZA())}let U=(()=>{class t{constructor(i,o,r,l,u){this.fb=i,this.http=o,this.authService=r,this.token=l,this.notifService=u,this.project="ADELI",this.socity="ADELI",this.credentials={},this.errorMessage="",this.firstName="",this.isLoading=new p.X(!1),this.isLoading$=this.isLoading.asObservable(),this.DataState=_.a,this.count=0,this.loginForm=this.fb.group({username:["",[s.kI.required,s.kI.email]],password:["",[s.kI.required,s.kI.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*+./;:-]).{8,}$")]]}),this.form=this.loginForm.controls}ngOnInit(){}login(){this.isLoading.next(!0),this.credentials.login=this.loginForm.controls.username.value,this.credentials.password=this.loginForm.controls.password.value,this.authService.login(this.credentials).subscribe(i=>{this.token.saveRefreshToken(i.refreshToken),this.token.saveAuthorities(i.roles),this.token.saveUserInfo(i.user),this.firstName=localStorage.getItem("firstName"),this.notifService.onSuccess(`Bienvenue ${this.firstName}`)},i=>{this.errorMessage=i.error.error[0],this.isLoginFailed=!0,this.isLoading.next(!1)})}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(s.qu),e.Y36(v.eN),e.Y36(g.e),e.Y36(Z.B),e.Y36(m.y))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-login"]],decls:45,vars:17,consts:[[1,"app-container","app-theme-white","body-tabs-shadow"],[1,"app-container"],[1,"h-100","bg-plum-plate","bg-animation"],[1,"d-flex","h-100","justify-content-center","align-items-center"],[1,"mx-auto","app-login-box","col-md-8"],[1,"modal-dialog","w-100","mx-auto"],[1,"modal-content"],[1,"modal-body"],[1,"h5","modal-title","text-center"],[1,"mt-2","mb-2"],["src","assets/images/adeli.jpeg","width","60","alt",""],[1,"mt-2"],[3,"formGroup","keydown.enter"],[1,"form-row"],[1,"col-md-12"],[1,"position-relative","form-group"],["id","exampleEmail","placeholder","Username...","type","email","formControlName","username",1,"form-control"],["class","","style","color: #f65656; font-style: italic;",4,"ngIf"],["id","examplePassword","placeholder","Password...","type","password","formControlName","password",1,"form-control"],[1,"divider"],[1,"mb-0"],["routerLink","/auth/forget-password",1,"float-right",2,"color","#3f6ad8","cursor","pointer"],[4,"ngIf"],[1,"modal-footer","clearfix"],[1,"float-right"],["type","submit",1,"btn","btn-primary",3,"disabled","click"],["class","fa fa-spinner fa-spin",4,"ngIf"],[1,"text-center","text-white","opacity-8","mt-3"],[1,"",2,"color","#f65656","font-style","italic"],["class","ml-3",4,"ngIf"],[1,"ml-3"],[1,"mb-0","text-danger"],[1,"fa","fa-spinner","fa-spin"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"div",5),e.TgZ(6,"div",6),e.TgZ(7,"div",7),e.TgZ(8,"div",8),e.TgZ(9,"h4",9),e._UZ(10,"img",10),e.qZA(),e.TgZ(11,"h4",11),e.TgZ(12,"div"),e._uU(13,"Bienvenue,"),e.qZA(),e.TgZ(14,"span"),e._uU(15,"Veuillez entrer les informations de votre compte"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(16,"form",12),e.NdJ("keydown.enter",function(){return o.loginForm.valid?o.login():""}),e.TgZ(17,"div",13),e.TgZ(18,"div",14),e.TgZ(19,"div",15),e._UZ(20,"input",16),e.YNc(21,x,3,2,"div",17),e.qZA(),e.qZA(),e.TgZ(22,"div",14),e.TgZ(23,"div",15),e._UZ(24,"input",18),e.qZA(),e.YNc(25,w,3,2,"div",17),e.qZA(),e.qZA(),e.qZA(),e._UZ(26,"div",19),e.TgZ(27,"h6",20),e._uU(28,"Mot de passe oubli\xe9? "),e.TgZ(29,"a",21),e._uU(30," R\xe9initialiser ici"),e.qZA(),e.qZA(),e.YNc(31,y,4,1,"div",22),e.qZA(),e.TgZ(32,"div",23),e.TgZ(33,"div",24),e.TgZ(34,"button",25),e.NdJ("click",function(){return o.login()}),e.ALo(35,"async"),e.YNc(36,C,1,0,"i",26),e.ALo(37,"async"),e._uU(38,"\xa0 "),e.YNc(39,L,2,0,"span",22),e.ALo(40,"async"),e.YNc(41,I,2,0,"span",22),e.ALo(42,"async"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(43,"div",27),e._uU(44),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&i&&(e.xp6(16),e.Q6J("formGroup",o.loginForm),e.xp6(5),e.Q6J("ngIf",o.form.username.invalid&&(o.form.username.dirty||o.form.username.touched)),e.xp6(4),e.Q6J("ngIf",o.form.password.invalid&&(o.form.password.dirty||o.form.password.touched)),e.xp6(6),e.Q6J("ngIf",o.errorMessage),e.xp6(3),e.Q6J("disabled",o.loginForm.invalid||e.lcZ(35,9,o.isLoading$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(37,11,o.isLoading$)),e.xp6(3),e.Q6J("ngIf",e.lcZ(40,13,o.isLoading$)),e.xp6(2),e.Q6J("ngIf",!e.lcZ(42,15,o.isLoading$)),e.xp6(3),e.hij("Copyright \xa9 ",o.socity," 2023"))},directives:[s._Y,s.JL,s.sg,s.Fj,s.JJ,s.u,d.O5,c.yS],pipes:[d.Ov],styles:[".ng-invalid.ng-dirty[_ngcontent-%COMP%]{border-color:red}.ng-invalid.ng-touched[_ngcontent-%COMP%]{border-color:red}"]}),t})();var h=a(3494);function J(t,n){if(1&t&&(e.TgZ(0,"div",20),e._uU(1),e.ALo(2,"number"),e.ALo(3,"number"),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.AsE("",e.xi3(2,2,i.minutes,"2.0-0")," : ",e.xi3(3,5,i.seconds,"2.0-0")," secondes")}}function N(t,n){1&t&&(e.TgZ(0,"div",21),e._uU(1,"Temps \xe9coul\xe9 !"),e.qZA())}const O=function(){return{length:5}};function Y(t,n){if(1&t){const i=e.EpF();e.TgZ(0,"div",11),e.TgZ(1,"ng-otp-input",22),e.NdJ("keydown.enter",function(){e.CHM(i);const r=e.oxw();return"V\xe9rifier le code"!=r.inputDigitLeft?"":r.verifyOtp()})("onInputChange",function(r){return e.CHM(i),e.oxw().onOtpChange(r)}),e.qZA(),e.qZA()}2&t&&(e.xp6(1),e.Q6J("config",e.DdM(1,O)))}function P(t,n){1&t&&e._UZ(0,"i",26)}function k(t,n){if(1&t&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&t){const i=e.oxw(2);e.xp6(1),e.Oqu(i.inputDigitLeft)}}function M(t,n){if(1&t&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&t){const i=e.oxw(2);e.xp6(1),e.Oqu(i.inputDigitLeft)}}function E(t,n){if(1&t){const i=e.EpF();e.TgZ(0,"button",23),e.NdJ("click",function(){return e.CHM(i),e.oxw().verifyOtp()}),e.ALo(1,"async"),e.YNc(2,P,1,0,"i",24),e.ALo(3,"async"),e._uU(4,"\xa0 "),e.YNc(5,k,2,1,"span",25),e.ALo(6,"async"),e.YNc(7,M,2,1,"span",25),e.ALo(8,"async"),e.qZA()}if(2&t){const i=e.oxw();e.Q6J("disabled","V\xe9rifier le code"!=i.inputDigitLeft||e.lcZ(1,5,i.isLoading$))("ngClass",i.btnStatus),e.xp6(2),e.Q6J("ngIf",e.lcZ(3,7,i.isLoading$)),e.xp6(3),e.Q6J("ngIf",e.lcZ(6,9,i.isLoading$)),e.xp6(2),e.Q6J("ngIf",!e.lcZ(8,11,i.isLoading$))}}function F(t,n){if(1&t){const i=e.EpF();e.TgZ(0,"button",27),e.NdJ("click",function(){return e.CHM(i),e.oxw().reconnect()}),e._uU(1),e.qZA()}if(2&t){const i=e.oxw();e.Q6J("ngClass",i.btnStatus),e.xp6(1),e.Oqu(i.inputDigitLeft)}}let S=(()=>{class t{constructor(i,o,r,l){this.authService=i,this.token=o,this.notifService=r,this.router=l,this.inputDigitLeft="Entrer le code",this.btnStatus="btn-light",this.timer=0,this.minutes=0,this.seconds=0,this.sendNewVerifyCode=!1,this.isLoading=new p.X(!1),this.isLoading$=this.isLoading.asObservable(),this.userEmail=localStorage.getItem("email").toString(),this.newOtp={appProvider:"",email:""},this.firstName="",this.configOptions={length:5,inputClass:"digit-otp",containerClass:"d-flex justify-content-between"}}ngOnInit(){this.setTimer()}setTimer(){const i=Date.parse(localStorage.getItem("exp").toString()),o=new Date;this.timer=(i-o.getTime())/1e3,setInterval(()=>{this.timer>0?(this.timer--,this.minutes=parseInt((this.timer%3600/60).toString()),this.seconds=this.timer%60):(this.sendNewVerifyCode=!0,this.inputDigitLeft="Reconnexion",this.btnStatus="btn-danger")},1e3)}onOtpChange(i){this.otp=i,this.otp.length<this.configOptions.length&&(this.inputDigitLeft=this.configOptions.length-this.otp.length+""+(this.configOptions.length-this.otp.length>1?" caract\xe8res restants":" caract\xe8re restant"),this.btnStatus="btn-light"),this.otp.length==this.configOptions.length&&(this.inputDigitLeft="V\xe9rifier le code",this.btnStatus="btn-primary")}verifyOtp(){this.isLoading.next(!0),this.inputDigitLeft="V\xe9rification ...",this.authService.verifyOtp(this.otp).subscribe(i=>{this.isLoading.next(!1),this.token.saveRefreshToken(i.refreshToken),this.token.saveAuthorities(i.roles),this.token.saveUserInfo(i.user),this.firstName=localStorage.getItem("firstName"),this.notifService.onSuccess(`Bienvenue ${this.firstName}`)},i=>{this.isLoading.next(!1),this.isLoading.next(!1),this.token.clearTokenExpired()})}reconnect(){this.token.clearTokenExpired()}ngOnDestroy(){this.mySubscription&&this.mySubscription.unsubscribe()}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(g.e),e.Y36(Z.B),e.Y36(m.y),e.Y36(c.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-otp"]],decls:26,vars:8,consts:[[1,"app-container","app-theme-white","body-tabs-shadow"],[1,"app-container"],[1,"h-100","bg-plum-plate","bg-animation"],[1,"d-flex","h-100","justify-content-center","align-items-center"],[1,"mx-auto","app-login-box","col-md-8"],[1,"app-logo-inverse","mx-auto","mb-3"],[1,"mx-auto",2,"width","400px"],[1,"card","p-4"],[1,"d-flex","justify-content-center"],[1,"icon-block"],["src","assets/images/lock-2.png","alt",""],[1,"my-4","text-center"],[1,"font-weight-bold"],[1,"text-muted"],["class","timer text-primary",4,"ngIf"],["class","timer text-danger",4,"ngIf"],["class","my-4 text-center",4,"ngIf"],["class","btn btn-lg w-100 mt-3 mb-4 py-3",3,"disabled","ngClass","click",4,"ngIf"],["class","btn btn-lg w-100 mt-3 mb-4 py-3",3,"ngClass","click",4,"ngIf"],[1,"text-center","text-white","opacity-8","mt-3"],[1,"timer","text-primary"],[1,"timer","text-danger"],[3,"config","keydown.enter","onInputChange"],[1,"btn","btn-lg","w-100","mt-3","mb-4","py-3",3,"disabled","ngClass","click"],["class","fa fa-spinner fa-spin",4,"ngIf"],[4,"ngIf"],[1,"fa","fa-spinner","fa-spin"],[1,"btn","btn-lg","w-100","mt-3","mb-4","py-3",3,"ngClass","click"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e._UZ(5,"div",5),e.TgZ(6,"div",6),e.TgZ(7,"div",7),e.TgZ(8,"div",8),e.TgZ(9,"div",9),e._UZ(10,"img",10),e.qZA(),e.qZA(),e.TgZ(11,"div",11),e.TgZ(12,"h2",12),e._uU(13,"OTP"),e.qZA(),e.TgZ(14,"div",13),e._uU(15,"Entrez le code de v\xe9rification envoy\xe9 par mail \xe0 "),e.TgZ(16,"strong"),e._uU(17),e.ALo(18,"lowercase"),e.qZA(),e.qZA(),e.YNc(19,J,4,8,"div",14),e.YNc(20,N,2,0,"div",15),e.qZA(),e.YNc(21,Y,2,2,"div",16),e.YNc(22,E,9,13,"button",17),e.YNc(23,F,2,2,"button",18),e.qZA(),e.qZA(),e.TgZ(24,"div",19),e._uU(25,"Copyright \xa9 ADELI 2023"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&i&&(e.xp6(17),e.Oqu(e.lcZ(18,6,o.userEmail)),e.xp6(2),e.Q6J("ngIf",!o.sendNewVerifyCode),e.xp6(1),e.Q6J("ngIf",o.sendNewVerifyCode),e.xp6(1),e.Q6J("ngIf",!o.sendNewVerifyCode),e.xp6(1),e.Q6J("ngIf",!o.sendNewVerifyCode),e.xp6(1),e.Q6J("ngIf",o.sendNewVerifyCode))},directives:[d.O5,h.df,d.mk],pipes:[d.i8,d.JJ,d.Ov],styles:[".icon-block[_ngcontent-%COMP%]{width:100px;height:100px;border-radius:50%;text-align:center;display:flex;align-items:center;background-color:#d8eafad2}.icon-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:auto;margin:auto}.card[_ngcontent-%COMP%]{border:none;border-radius:15px;box-shadow:0 3px 20px -3px #d5dbed}.digit-otp[_ngcontent-%COMP%]{height:60px!important;border-radius:8px!important;color:#2e9afe}.digit-otp[_ngcontent-%COMP%]::placeholder{color:#2e9afe}.digit-otp[_ngcontent-%COMP%]:focus{outline-color:#2e9afe;border-color:#2e9afe}.ng-touched[_ngcontent-%COMP%]{border:2px solid #2e9afe!important}.btn-light[_ngcontent-%COMP%]{background-color:#eee!important;border-color:#eee!important;border-radius:13px!important}.btn-primary[_ngcontent-%COMP%]{background-color:#2e9afe!important;border-color:#2e9afe!important;border-radius:13px!important}"]}),t})();var Q=a(5197);class R{}function $(t,n){1&t&&(e.TgZ(0,"div",30),e._uU(1," l'adresse email est requise. "),e.qZA())}function j(t,n){1&t&&(e.TgZ(0,"div",30),e._uU(1," entrez une adresse email valide : example@example.com "),e.qZA())}function D(t,n){if(1&t&&(e.TgZ(0,"div",28),e.YNc(1,$,2,0,"div",29),e.YNc(2,j,2,0,"div",29),e.qZA()),2&t){const i=e.oxw(2);e.xp6(1),e.Q6J("ngIf",null==i.form.username.errors?null:i.form.username.errors.required),e.xp6(1),e.Q6J("ngIf",null==i.form.username.errors?null:i.form.username.errors.email)}}function z(t,n){if(1&t&&(e.TgZ(0,"div"),e._UZ(1,"div",20),e.TgZ(2,"h6",31),e._uU(3),e.qZA(),e.qZA()),2&t){const i=e.oxw(2);e.xp6(3),e.Oqu(i.errorMessage)}}function V(t,n){1&t&&e._UZ(0,"i",32)}function B(t,n){1&t&&(e.TgZ(0,"span"),e._uU(1,"Envoi ..."),e.qZA())}function X(t,n){1&t&&(e.TgZ(0,"span"),e._uU(1,"Reinitialiser mot de passe"),e.qZA())}function G(t,n){if(1&t){const i=e.EpF();e.TgZ(0,"div",8),e.TgZ(1,"div",9),e.TgZ(2,"div",10),e.TgZ(3,"h4",11),e._UZ(4,"img",12),e.qZA(),e.TgZ(5,"h4",13),e.TgZ(6,"div"),e._uU(7,"Mot de passe oubli\xe9 ?"),e.qZA(),e.TgZ(8,"span"),e._uU(9,"Entrez votre email pour le r\xe9initialiser"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(10,"form",14),e.TgZ(11,"div",15),e.TgZ(12,"div",16),e.TgZ(13,"div",17),e._UZ(14,"input",18),e.YNc(15,D,3,2,"div",19),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e._UZ(16,"div",20),e.TgZ(17,"h6",21),e._uU(18,"Connectez-vous ? "),e.TgZ(19,"a",22),e._uU(20,"ici"),e.qZA(),e.qZA(),e.YNc(21,z,4,1,"div",23),e.qZA(),e.TgZ(22,"div",24),e.TgZ(23,"div",25),e.TgZ(24,"button",26),e.NdJ("click",function(){return e.CHM(i),e.oxw().onSubmit()}),e.ALo(25,"async"),e.YNc(26,V,1,0,"i",27),e.ALo(27,"async"),e._uU(28,"\xa0 "),e.YNc(29,B,2,0,"span",23),e.ALo(30,"async"),e.YNc(31,X,2,0,"span",23),e.ALo(32,"async"),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&t){const i=e.oxw();e.xp6(10),e.Q6J("formGroup",i.forgetForm),e.xp6(5),e.Q6J("ngIf",i.form.username.invalid&&(i.form.username.dirty||i.form.username.touched)),e.xp6(6),e.Q6J("ngIf",i.errorMessage),e.xp6(3),e.Q6J("disabled",i.forgetForm.invalid||e.lcZ(25,7,i.isLoading$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(27,9,i.isLoading$)),e.xp6(3),e.Q6J("ngIf",e.lcZ(30,11,i.isLoading$)),e.xp6(2),e.Q6J("ngIf",!e.lcZ(32,13,i.isLoading$))}}function H(t,n){if(1&t&&(e.TgZ(0,"div",8),e.TgZ(1,"div",9),e.TgZ(2,"div",10),e.TgZ(3,"h4",11),e._UZ(4,"img",12),e.qZA(),e.TgZ(5,"h4",13),e.TgZ(6,"div"),e._uU(7,"R\xe9initialisattion !"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(8,"div",33),e.TgZ(9,"h4",13),e.TgZ(10,"span"),e._uU(11,"un mail a correctement \xe9t\xe9 envoy\xe9 \xe0 l'adresse "),e.TgZ(12,"b"),e._uU(13),e.qZA(),e._uU(14,"Veuillez cliquer sur le lien contenu dans cet email pour proc\xe9der au changement de votre mot de passe "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t){const i=e.oxw();e.xp6(13),e.hij(" ",i.email,".")}}let K=(()=>{class t{constructor(i,o,r){this.fb=i,this.authService=o,this.notifsService=r,this.project="ADELI",this.socity="ADELI",this.credentials=new R,this.errorMessage="",this.isLoading=new p.X(!1),this.isLoading$=this.isLoading.asObservable(),this.isSend=!1,this.forgetForm=this.fb.group({username:["",[s.kI.required,s.kI.email]]}),this.form=this.forgetForm.controls}ngOnInit(){}onSubmit(){this.isLoading.next(!0),this.credentials.login=this.forgetForm.controls.username.value,this.authService.forgetPassword(this.credentials).subscribe(i=>{this.notifsService.onSuccess(i.message),this.isLoading.next(!1),this.email=this.forgetForm.controls.username.value,this.forgetForm.controls.username.reset(),this.isSend=!0},i=>{this.errorMessage=i.error.error,this.isLoading.next(!1)})}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(s.qu),e.Y36(g.e),e.Y36(m.y))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-forget-password"]],decls:10,vars:3,consts:[[1,"app-container","app-theme-white","body-tabs-shadow"],[1,"app-container"],[1,"h-100","bg-plum-plate","bg-animation"],[1,"d-flex","h-100","justify-content-center","align-items-center"],[1,"mx-auto","app-login-box","col-md-8"],[1,"modal-dialog","w-100","mx-auto"],["class","modal-content",4,"ngIf"],[1,"text-center","text-white","opacity-8","mt-3"],[1,"modal-content"],[1,"modal-body"],[1,"h5","modal-title","text-center"],[1,"mt-2","mb-2"],["src","assets/images/adeli.jpeg","width","60","alt",""],[1,"mt-2"],[3,"formGroup"],[1,"form-row"],[1,"col-md-12"],[1,"position-relative","form-group"],["placeholder","Email...","type","email","formControlName","username",1,"form-control"],["class","","style","color: #f65656; font-style: italic;",4,"ngIf"],[1,"divider"],[1,"mb-0"],["routerLink","/auth/login",1,"float-right",2,"color","#3f6ad8","cursor","pointer"],[4,"ngIf"],[1,"modal-footer","clearfix"],[1,"float-right"],["type","submit",1,"btn","btn-primary",3,"disabled","click"],["class","fa fa-spinner fa-spin",4,"ngIf"],[1,"",2,"color","#f65656","font-style","italic"],["class","ml-3",4,"ngIf"],[1,"ml-3"],[1,"mb-0","text-danger"],[1,"fa","fa-spinner","fa-spin"],[1,"h5","modal-title"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"div",5),e.YNc(6,G,33,15,"div",6),e.YNc(7,H,15,1,"div",6),e.qZA(),e.TgZ(8,"div",7),e._uU(9),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&i&&(e.xp6(6),e.Q6J("ngIf",!o.isSend),e.xp6(1),e.Q6J("ngIf",o.isSend),e.xp6(2),e.hij("Copyright \xa9 ",o.socity," 2023"))},directives:[d.O5,s._Y,s.JL,s.sg,s.Fj,s.JJ,s.u,c.yS],pipes:[d.Ov],styles:[""]}),t})();class W{}function ee(t,n){1&t&&(e.TgZ(0,"div",31),e._uU(1," l'adresse email est requise. "),e.qZA())}function te(t,n){1&t&&(e.TgZ(0,"div",31),e._uU(1," entrez une email valide : example@example.com "),e.qZA())}function ie(t,n){if(1&t&&(e.TgZ(0,"div",29),e.YNc(1,ee,2,0,"div",30),e.YNc(2,te,2,0,"div",30),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",null==i.form.username.errors?null:i.form.username.errors.required),e.xp6(1),e.Q6J("ngIf",null==i.form.username.errors?null:i.form.username.errors.email)}}function oe(t,n){1&t&&(e.TgZ(0,"div",31),e._uU(1," le mot de passe est obligatoire. "),e.qZA())}function ne(t,n){1&t&&(e.TgZ(0,"div",31),e._uU(1," au moins 8 caract\xe8res avec 1 minuscule, 1 majuscule et 1 caract\xe8re sp\xe9cial "),e.qZA())}function se(t,n){if(1&t&&(e.TgZ(0,"div",29),e.YNc(1,oe,2,0,"div",30),e.YNc(2,ne,2,0,"div",30),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",null==i.form.password.errors?null:i.form.password.errors.required),e.xp6(1),e.Q6J("ngIf",null==i.form.password.errors?null:i.form.password.errors.pattern)}}function re(t,n){1&t&&(e.TgZ(0,"div",29),e._uU(1," les mots de passe sont diff\xe9rents "),e.qZA())}function ae(t,n){if(1&t&&(e.TgZ(0,"div"),e._UZ(1,"div",20),e.TgZ(2,"h6",32),e._uU(3),e.qZA(),e.qZA()),2&t){const i=e.oxw();e.xp6(3),e.Oqu(i.errorMessage)}}function de(t,n){1&t&&e._UZ(0,"i",33)}function le(t,n){1&t&&(e.TgZ(0,"span"),e._uU(1,"R\xe9initialiser ..."),e.qZA())}function ce(t,n){1&t&&(e.TgZ(0,"span"),e._uU(1,"Reinitialiser mot de passe"),e.qZA())}const pe=[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:U},{path:"forget-password",component:K},{path:"reset-password",component:(()=>{class t{constructor(i,o,r,l,u){this.fb=i,this.authService=o,this.router=r,this.notifsService=l,this.route=u,this.project="ADELI",this.socity="ADELI",this.credentials=new W,this.errorMessage="",this.isLoading=new p.X(!1),this.isLoading$=this.isLoading.asObservable(),this.pass="",this.confirm_pass="",this.forgetForm=this.fb.group({username:["",[s.kI.required,s.kI.email]],password:["",[s.kI.required,s.kI.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*+./;:-]).{8,}$")]],cpass:["",[s.kI.required,s.kI.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*+./;:-]).{8,}$")]]}),this.form=this.forgetForm.controls}ngOnInit(){this.route.queryParams.subscribe(i=>{this.code=i.code})}onSubmit(){this.isLoading.next(!0),this.credentials.code=this.code,this.credentials.password=this.forgetForm.controls.password.value,this.credentials.email=this.forgetForm.controls.username.value,this.authService.resetPassword(this.credentials,this.credentials.code).subscribe(i=>{this.notifsService.onSuccess("Mot de passe mis \xe0 jour"),this.router.navigate(["auth/"])},i=>{this.errorMessage=i.error.error,this.isLoading.next(!1)})}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(s.qu),e.Y36(g.e),e.Y36(c.F0),e.Y36(m.y),e.Y36(c.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-reset-password"]],decls:49,vars:20,consts:[[1,"app-container","app-theme-white","body-tabs-shadow"],[1,"app-container"],[1,"h-100","bg-plum-plate","bg-animation"],[1,"d-flex","h-100","justify-content-center","align-items-center"],[1,"mx-auto","app-login-box","col-md-8"],[1,"modal-dialog","w-100","mx-auto"],[1,"modal-content"],[1,"modal-body"],[1,"h5","modal-title","text-center"],[1,"mt-2","mb-2"],["src","assets/images/adeli.jpeg","width","60","alt",""],[1,"mt-2"],[3,"formGroup"],[1,"form-row"],[1,"col-md-12"],[1,"position-relative","form-group"],["id","exampleEmail","placeholder","Email...","type","email","formControlName","username",1,"form-control"],["class","","style","color: #f65656; font-style: italic;",4,"ngIf"],["id","examplePassword","placeholder","nouveau mot de passe...","type","password","formControlName","password",1,"form-control",3,"ngModel","ngModelChange"],["id","confirm","placeholder","confirmer mot de passe","type","password","formControlName","cpass",1,"form-control",3,"ngModel","ngModelChange"],[1,"divider"],[1,"mb-0"],["routerLink","/auth/login",1,"float-right",2,"color","#3f6ad8","cursor","pointer"],[4,"ngIf"],[1,"modal-footer","clearfix"],[1,"float-right"],["type","submit",1,"btn","btn-primary",3,"disabled","click"],["class","fa fa-spinner fa-spin",4,"ngIf"],[1,"text-center","text-white","opacity-8","mt-3"],[1,"",2,"color","#f65656","font-style","italic"],["class","ml-3",4,"ngIf"],[1,"ml-3"],[1,"mb-0","text-danger"],[1,"fa","fa-spinner","fa-spin"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"div",5),e.TgZ(6,"div",6),e.TgZ(7,"div",7),e.TgZ(8,"div",8),e.TgZ(9,"h4",9),e._UZ(10,"img",10),e.qZA(),e.TgZ(11,"h4",11),e.TgZ(12,"div"),e._uU(13,"Mot de passe oubli\xe9 ?,"),e.qZA(),e.TgZ(14,"span"),e._uU(15,"R\xe9initialiser votre mot de passe"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(16,"form",12),e.TgZ(17,"div",13),e.TgZ(18,"div",14),e.TgZ(19,"div",15),e._UZ(20,"input",16),e.YNc(21,ie,3,2,"div",17),e.qZA(),e.qZA(),e.TgZ(22,"div",14),e.TgZ(23,"div",15),e.TgZ(24,"input",18),e.NdJ("ngModelChange",function(l){return o.pass=l}),e.qZA(),e.qZA(),e.YNc(25,se,3,2,"div",17),e.qZA(),e.TgZ(26,"div",14),e.TgZ(27,"div",15),e.TgZ(28,"input",19),e.NdJ("ngModelChange",function(l){return o.confirm_pass=l}),e.qZA(),e.qZA(),e.YNc(29,re,2,0,"div",17),e.qZA(),e.qZA(),e.qZA(),e._UZ(30,"div",20),e.TgZ(31,"h6",21),e._uU(32,"Connectez-vous ? "),e.TgZ(33,"a",22),e._uU(34,"ici"),e.qZA(),e.qZA(),e.YNc(35,ae,4,1,"div",23),e.qZA(),e.TgZ(36,"div",24),e.TgZ(37,"div",25),e.TgZ(38,"button",26),e.NdJ("click",function(){return o.onSubmit()}),e.ALo(39,"async"),e.YNc(40,de,1,0,"i",27),e.ALo(41,"async"),e._uU(42,"\xa0 "),e.YNc(43,le,2,0,"span",23),e.ALo(44,"async"),e.YNc(45,ce,2,0,"span",23),e.ALo(46,"async"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(47,"div",28),e._uU(48),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&i&&(e.xp6(16),e.Q6J("formGroup",o.forgetForm),e.xp6(5),e.Q6J("ngIf",o.form.username.invalid&&(o.form.username.dirty||o.form.username.touched)),e.xp6(3),e.Q6J("ngModel",o.pass),e.xp6(1),e.Q6J("ngIf",o.form.password.invalid&&(o.form.password.dirty||o.form.password.touched)),e.xp6(3),e.Q6J("ngModel",o.confirm_pass),e.xp6(1),e.Q6J("ngIf",o.confirm_pass!==o.pass&&(o.form.cpass.dirty||o.form.cpass.touched)),e.xp6(6),e.Q6J("ngIf",o.errorMessage),e.xp6(3),e.Q6J("disabled",o.forgetForm.invalid||o.confirm_pass!==o.pass||e.lcZ(39,12,o.isLoading$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(41,14,o.isLoading$)),e.xp6(3),e.Q6J("ngIf",e.lcZ(44,16,o.isLoading$)),e.xp6(2),e.Q6J("ngIf",!e.lcZ(46,18,o.isLoading$)),e.xp6(3),e.hij("Copyright \xa9 ",o.socity," 2023"))},directives:[s._Y,s.JL,s.sg,s.Fj,s.JJ,s.u,d.O5,c.yS],pipes:[d.Ov],styles:[""]}),t})()},{path:"otp",component:S,canActivate:[Q.a]}];let ge=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[c.Bz.forChild(pe)],c.Bz]}),t})(),me=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[d.ez,ge,s.UX,h.Xz,s.u5]]}),t})()}}]);