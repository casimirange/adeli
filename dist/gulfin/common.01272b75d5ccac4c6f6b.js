"use strict";(self.webpackChunkgulfin=self.webpackChunkgulfin||[]).push([[592],{5399:(E,l,s)=>{s.d(l,{a:()=>_});var _=(()=>{return(t=_||(_={})).LOADING_STATE="LOADING_STATE",t.LOADED_STATE="LOADED_STATE",t.ERROR_STATE="ERROR_STATE",_;var t})()},9747:(E,l,s)=>{s.d(l,{p:()=>_});class _{}},3717:(E,l,s)=>{s.d(l,{ql:()=>_,pv:()=>t});class _{}class t{}},9875:(E,l,s)=>{s.d(l,{v:()=>m});var _=s(205),t=s(2340),d=s(5304),e=s(7716),u=s(1841);let m=(()=>{class o{constructor(r){this.http=r,this.mangwas$=(a,g,f,v)=>this.http.get(t.N.mangwa+`?page=${f}&size=${v}&type=${a}&date=${g}`).pipe((0,d.K)(this.handleError)),this.soldeMangwa$=()=>this.http.get(t.N.mangwa+"/solde").pipe((0,d.K)(this.handleError)),this.addMangwa$=a=>this.http.post(t.N.mangwa,a).pipe((0,d.K)(this.handleError))}handleError(r){return(0,_._)(`Une erreur est survenue: ${r.error.message.toString().bold()}`)}}return o.\u0275fac=function(r){return new(r||o)(e.LFG(u.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},7874:(E,l,s)=>{s.d(l,{v:()=>m});var _=s(205),t=s(2340),d=s(5304),e=s(7716),u=s(1841);let m=(()=>{class o{constructor(r){this.http=r,this.prets$=(a,g,f,v,A)=>this.http.get(t.N.pret+`?page=${v}&size=${A}&name=${a}&type=${g}&date=${f}`).pipe((0,d.K)(this.handleError)),this.rembourserPret$=(a,g)=>this.http.put(t.N.pret+`/rembourser/${g}`,a).pipe((0,d.K)(this.handleError))}handleError(r){return(0,_._)(`Une erreur est survenue: ${r.error.message}`)}}return o.\u0275fac=function(r){return new(r||o)(e.LFG(u.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},8552:(E,l,s)=>{s.d(l,{Z:()=>m});var _=s(205),t=s(2340),d=s(5304),e=s(7716),u=s(1841);let m=(()=>{class o{constructor(r){this.http=r,this.projets$=(a,g,f,v)=>this.http.get(t.N.projet+`?page=${f}&size=${v}&type=${a}&date=${g}`).pipe((0,d.K)(this.handleError)),this.soldeProjet$=()=>this.http.get(t.N.projet+"/solde").pipe((0,d.K)(this.handleError)),this.addProjet$=a=>this.http.post(t.N.projet,a).pipe((0,d.K)(this.handleError))}handleError(r){return(0,_._)(`Une erreur est survenue: ${r.error.message.toString().bold()}`)}}return o.\u0275fac=function(r){return new(r||o)(e.LFG(u.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},1824:(E,l,s)=>{s.d(l,{f:()=>m});var _=s(205),t=s(2340),d=s(5304),e=s(7716),u=s(1841);let m=(()=>{class o{constructor(r){this.http=r,this.users$=(a,g,f,v,A,Z,M)=>this.http.get(t.N.users+`/filter?page=${Z}&size=${M}&firstName=${a}&lastName=${g}&typeAccount=${f}&status=${v}&montant=${A}`).pipe((0,d.K)(this.handleError)),this.user$=a=>this.http.get(t.N.users+`/${a}`).pipe((0,d.K)(this.handleError))}getUsers(){return this.http.get(t.N.users)}getUserss(){return this.http.get(t.N.users)}getAllUsersWithPagination(r,a){return this.http.get(t.N.users+`?page=${r}&size=${a}`)}getUser(r){return this.http.get(t.N.users+`/${r}`)}getUsersByTypeAccount(r){return this.http.get(t.N.users+`/typeaccount/${r}`)}enableDesable(r,a){return this.http.get(t.N.users+`/lockAndUnlockAccount/${r}/${a}`)}updateUser(r,a){return this.http.put(t.N.users+`/update/${a}`,r)}changePassword(r,a){return this.http.put(t.N.changePassword+`/${r}/password-update`,a)}handleError(r){return(0,_._)(`Une erreur est survenue: ${r.error.message}`)}}return o.\u0275fac=function(r){return new(r||o)(e.LFG(u.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},8970:(E,l,s)=>{s.d(l,{c:()=>U});var _=s(3717),t=s(665),d=s(6215),e=s(7716),u=s(1824),m=s(1982),o=s(6974),c=s(8583);function r(i,h){if(1&i&&(e.TgZ(0,"div",19),e.TgZ(1,"div",20),e.TgZ(2,"div",21),e.TgZ(3,"div",22),e._UZ(4,"i",23),e.qZA(),e.TgZ(5,"div"),e._uU(6),e.ALo(7,"titlecase"),e.ALo(8,"titlecase"),e.TgZ(9,"div",24),e._uU(10),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&i){const p=e.oxw();e.xp6(6),e.AsE("",e.lcZ(7,3,p.user.firstName),"\xa0",e.lcZ(8,5,p.user.lastName)," "),e.xp6(4),e.Oqu(p.user.email)}}function a(i,h){1&i&&(e.TgZ(0,"div",27),e._uU(1," le mot de passe est obligatoire. "),e.qZA())}function g(i,h){1&i&&(e.TgZ(0,"div",27),e._uU(1," au moins 8 caract\xe8res avec 1 minuscule, 1 majuscule et 1 caract\xe8re sp\xe9cial "),e.qZA())}function f(i,h){if(1&i&&(e.TgZ(0,"div",25),e.YNc(1,a,2,0,"div",26),e.YNc(2,g,2,0,"div",26),e.qZA()),2&i){const p=e.oxw();e.xp6(1),e.Q6J("ngIf",null==p.form.password.errors?null:p.form.password.errors.required),e.xp6(1),e.Q6J("ngIf",null==p.form.password.errors?null:p.form.password.errors.pattern)}}function v(i,h){1&i&&(e.TgZ(0,"div",25),e._uU(1," les mots de passe sont diff\xe9rents "),e.qZA())}function A(i,h){1&i&&e._UZ(0,"i",28)}function Z(i,h){1&i&&(e.TgZ(0,"span"),e._uU(1,"Enregistrement..."),e.qZA())}function M(i,h){1&i&&(e.TgZ(0,"span"),e._uU(1,"Modifier"),e.qZA())}let U=(()=>{class i{constructor(p,n,P,T,O){this.userService=p,this.notifsService=n,this.route=P,this.router=T,this.fb=O,this.user=new _.pv,this.pass="",this.confirm_pass="",this.credentials=new _.ql,this.errorMessage="",this.isLoading=new d.X(!1),this.isLoading$=this.isLoading.asObservable(),this.changePwd=this.fb.group({oldpassword:["",[t.kI.required]],password:["",[t.kI.required,t.kI.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*+./;:-]).{8,}$")]],cpass:["",[t.kI.required,t.kI.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*+./;:-]).{8,}$")]]}),this.form=this.changePwd.controls}ngOnInit(){this.id=this.route.snapshot.paramMap.get("id"),this.getUser()}getUser(){const p=this.route.snapshot.paramMap.get("id");this.userService.getUser(p).subscribe(n=>{this.user=n},n=>{this.notifsService.onError(n.error.message,"\xe9chec chargement de l'utilisateur")})}onSubmit(){this.isLoading.next(!0);const p={oldPassword:"string",password:"string"};p.oldPassword=this.changePwd.controls.oldpassword.value,p.password=this.changePwd.controls.password.value;const n=this.route.snapshot.paramMap.get("id");this.userService.changePassword(n,p).subscribe(P=>{console.log(P),this.isLoading.next(!1),localStorage.removeItem("bearerToken"),this.notifsService.onSuccess("mot de passe modifi\xe9"),this.router.navigate(["auth/"])},P=>{this.isLoading.next(!1)})}}return i.\u0275fac=function(p){return new(p||i)(e.Y36(u.f),e.Y36(m.y),e.Y36(o.gz),e.Y36(o.F0),e.Y36(t.qu))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-profile-user"]],decls:37,vars:18,consts:[["class","app-page-title",4,"ngIf"],[1,"tab-content"],["id","tab-content-1","role","tabpanel",1,"tab-pane","tabs-animation","fad","active"],[1,"row"],[1,"col-md-6"],[1,"main-card","mb-3","card"],[1,"card-body"],[1,"card-title"],[1,"align-content-center",3,"formGroup"],[1,"offset-2","col-md-8","offset-2"],[1,"position-relative","form-group"],["id","examplePassword","name","pwd","placeholder","ancien mot de passe","type","password","formControlName","oldpassword",1,"form-control"],["id","newPassword","placeholder","nouveau mot de passe...","type","password","formControlName","password",1,"form-control",3,"ngModel","ngModelChange"],["class","","style","color: #f65656; font-style: italic;",4,"ngIf"],["id","confirm","placeholder","confirmer mot de passe","type","password","formControlName","cpass",1,"form-control",3,"ngModel","ngModelChange"],[1,"text-center"],["type","submit",1,"btn","btn-primary",3,"disabled","click"],["class","fa fa-spinner fa-spin",4,"ngIf"],[4,"ngIf"],[1,"app-page-title"],[1,"page-title-wrapper"],[1,"page-title-heading"],[1,"page-title-icon"],[1,"pe-7s-user","icon-gradient","bg-danger"],[1,"page-title-subheading"],[1,"",2,"color","#f65656","font-style","italic"],["class","ml-3",4,"ngIf"],[1,"ml-3"],[1,"fa","fa-spinner","fa-spin"]],template:function(p,n){1&p&&(e.YNc(0,r,11,7,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"div",5),e.TgZ(6,"div",6),e.TgZ(7,"h5",7),e._uU(8,"Modifier mot de passe"),e.qZA(),e.TgZ(9,"form",8),e.TgZ(10,"div",9),e.TgZ(11,"div",10),e.TgZ(12,"label"),e._uU(13,"Ancien mot de passe"),e.qZA(),e._UZ(14,"input",11),e.qZA(),e.qZA(),e.TgZ(15,"div",9),e.TgZ(16,"div",10),e.TgZ(17,"label"),e._uU(18,"Nouveau mot de passe"),e.qZA(),e.TgZ(19,"input",12),e.NdJ("ngModelChange",function(T){return n.pass=T}),e.qZA(),e.qZA(),e.YNc(20,f,3,2,"div",13),e.qZA(),e.TgZ(21,"div",9),e.TgZ(22,"div",10),e.TgZ(23,"label"),e._uU(24,"Confirmer mot de passe"),e.qZA(),e.TgZ(25,"input",14),e.NdJ("ngModelChange",function(T){return n.confirm_pass=T}),e.qZA(),e.qZA(),e.YNc(26,v,2,0,"div",13),e.qZA(),e.TgZ(27,"div",15),e.TgZ(28,"button",16),e.NdJ("click",function(){return n.onSubmit()}),e.ALo(29,"async"),e.YNc(30,A,1,0,"i",17),e.ALo(31,"async"),e._uU(32,"\xa0 "),e.YNc(33,Z,2,0,"span",18),e.ALo(34,"async"),e.YNc(35,M,2,0,"span",18),e.ALo(36,"async"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&p&&(e.Q6J("ngIf",n.user),e.xp6(9),e.Q6J("formGroup",n.changePwd),e.xp6(10),e.Q6J("ngModel",n.pass),e.xp6(1),e.Q6J("ngIf",n.form.password.invalid&&(n.form.password.dirty||n.form.password.touched)),e.xp6(5),e.Q6J("ngModel",n.confirm_pass),e.xp6(1),e.Q6J("ngIf",n.confirm_pass!==n.pass&&(n.form.cpass.dirty||n.form.cpass.touched)),e.xp6(2),e.Q6J("disabled",n.changePwd.invalid||n.confirm_pass!==n.pass||e.lcZ(29,10,n.isLoading$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(31,12,n.isLoading$)),e.xp6(3),e.Q6J("ngIf",e.lcZ(34,14,n.isLoading$)),e.xp6(2),e.Q6J("ngIf",!e.lcZ(36,16,n.isLoading$)))},directives:[c.O5,t._Y,t.JL,t.sg,t.Fj,t.JJ,t.u],pipes:[c.Ov,c.rS],styles:[""]}),i})()}}]);