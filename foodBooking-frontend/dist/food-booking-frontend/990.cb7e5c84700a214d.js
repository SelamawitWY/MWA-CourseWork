"use strict";(self.webpackChunkfoodBooking_frontend=self.webpackChunkfoodBooking_frontend||[]).push([[990],{7990:(gt,q,s)=>{s.r(q),s.d(q,{RegistrationModule:()=>pt});var u=s(6895),_=s(9299),r=s(4006),t=s(4650),I=s(8888),T=s(4859),m=s(3546),b=s(9549),y=s(4144),Z=s(7533);function V(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"div",7)(1,"button",8),t.NdJ("click",function(){t.CHM(n);const a=t.oxw(2);return t.KtG(a.isUser=!a.isUser)}),t._uU(2," Setup Customer Account "),t.qZA(),t.TgZ(3,"button",9),t._uU(4," Setup Restaurant Account "),t.qZA()()}2&o&&(t.xp6(3),t.Q6J("routerLink","restaurants"))}const j=function(){return{display:"block"}},z=function(){return{display:"none"}};function B(o,i){if(1&o&&(t.TgZ(0,"div",5),t.YNc(1,V,5,1,"div",6),t.qZA()),2&o){const n=t.oxw();t.Q6J("ngStyle",n.isUser||n.isRestaurant?t.DdM(3,z):t.DdM(2,j)),t.xp6(1),t.Q6J("ngIf",!(n.isUser||n.isRestaurant))}}function L(o,i){1&o&&(t.TgZ(0,"span",18),t._uU(1," Full Name is required "),t.qZA())}function E(o,i){1&o&&(t.TgZ(0,"span",18),t._uU(1," Phone number is required "),t.qZA())}function H(o,i){1&o&&(t.TgZ(0,"span",18),t._uU(1," Email is required "),t.qZA())}function G(o,i){1&o&&(t.TgZ(0,"span",18),t._uU(1," Password length should be greater than 8 and less than 32 "),t.qZA())}const h=function(o){return{"is-invalid":o}};function D(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"mat-card-content")(1,"section")(2,"form",10),t.NdJ("ngSubmit",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.userSignup())}),t.TgZ(3,"p")(4,"mat-form-field"),t._UZ(5,"input",11),t.qZA(),t.YNc(6,L,2,0,"span",12),t.qZA(),t.TgZ(7,"p")(8,"mat-form-field"),t._UZ(9,"input",13),t.qZA(),t.YNc(10,E,2,0,"span",12),t.qZA(),t.TgZ(11,"p")(12,"mat-form-field"),t._UZ(13,"input",14),t.qZA(),t.YNc(14,H,2,0,"span",12),t.qZA(),t.TgZ(15,"p")(16,"mat-form-field"),t._UZ(17,"input",15),t.qZA(),t.YNc(18,G,2,0,"span",12),t.qZA(),t.TgZ(19,"div",16)(20,"button",17),t._uU(21," Sign Up "),t.qZA()()()()()}if(2&o){const n=t.oxw();let e,a,C,p,g,d,c,f;t.xp6(2),t.Q6J("formGroup",n.userSignupForm),t.xp6(3),t.Q6J("ngClass",t.VKq(10,h,n.submitted&&(null==(e=n.userSignupForm.get("fullname"))?null:e.errors))),t.xp6(1),t.Q6J("ngIf",n.submitted&&(null==(a=n.userSignupForm.get("fullname"))?null:a.errors)),t.xp6(3),t.Q6J("ngClass",t.VKq(12,h,n.submitted&&(null==(C=n.userSignupForm.get("phonenumber"))?null:C.errors))),t.xp6(1),t.Q6J("ngIf",n.submitted&&(null==(p=n.userSignupForm.get("phonenumber"))?null:p.errors)),t.xp6(3),t.Q6J("ngClass",t.VKq(14,h,n.submitted&&(null==(g=n.userSignupForm.get("email"))?null:g.errors))),t.xp6(1),t.Q6J("ngIf",n.submitted&&(null==(d=n.userSignupForm.get("email"))?null:d.errors)),t.xp6(3),t.Q6J("ngClass",t.VKq(16,h,n.submitted&&(null==(c=n.userSignupForm.get("password"))?null:c.errors))),t.xp6(1),t.Q6J("ngIf",n.submitted&&(null==(f=n.userSignupForm.get("password"))?null:f.errors)),t.xp6(2),t.Q6J("disabled",n.submitted&&!n.userSignupForm.valid)}}let W=(()=>{class o{constructor(n,e,a){this.formBuilder=n,this.registrationService=e,this.router=a,this.isUser=!1,this.isRestaurant=!1,this.submitted=!1}ngOnInit(){this.userSignupForm=this.formBuilder.group({email:[null,r.kI.compose([r.kI.required,r.kI.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])],password:[null,r.kI.compose([r.kI.required,r.kI.minLength(8),r.kI.maxLength(32)])],phonenumber:[null,r.kI.required],fullname:[null,r.kI.required]})}userSignup(){this.submitted=!0;const n=this.userSignupForm.value;n.role="user",this.userSignupForm.valid&&this.registrationService.registration(n).subscribe(e=>{e.success&&this.router.navigate(["/login"])})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(r.qu),t.Y36(I.c),t.Y36(_.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-registration"]],decls:6,vars:2,consts:[["id","container"],["id","homePage"],[2,"font-size","54px","margin-bottom","54px"],["class","mat-card-content","id","buttonContainer",3,"ngStyle",4,"ngIf"],[4,"ngIf"],["id","buttonContainer",1,"mat-card-content",3,"ngStyle"],["style","display: flex; flex-direction: column",4,"ngIf"],[2,"display","flex","flex-direction","column"],["mat-button","",1,"loginButton",2,"margin-bottom","32px",3,"click"],["mat-button","",1,"loginButton",3,"routerLink"],["id","loginForm",3,"formGroup","ngSubmit"],["type","text","matInput","","placeholder","Full Name","formControlName","fullname",1,"matInput",3,"ngClass"],["class","error",4,"ngIf"],["type","text","matInput","","mask","(000) 000-0000","placeholder","Phone number","formControlName","phonenumber",1,"matInput",3,"ngClass"],["matInput","","autocomplete","off","placeholder","Email","formControlName","email",1,"matInput",3,"ngClass"],["type","password","autocomplete","off","matInput","","placeholder","Password","formControlName","password",1,"matInput",3,"ngClass"],[1,"button"],["type","submit","mat-button","",1,"loginButton",3,"disabled"],[1,"error"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"mat-card",1)(2,"mat-card-title",2),t._uU(3,"Registration"),t.qZA(),t.YNc(4,B,2,4,"div",3),t.YNc(5,D,22,18,"mat-card-content",4),t.qZA()()),2&n&&(t.xp6(4),t.Q6J("ngIf",!e.isUser||!e.isRestaurant),t.xp6(1),t.Q6J("ngIf",e.isUser))},dependencies:[u.mk,u.O5,u.PC,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,T.lW,m.a8,m.dn,m.n5,b.KE,y.Nt,Z.hx,_.rH],styles:["#container[_ngcontent-%COMP%]{background-image:url(homePage.71ded36c46c7f082.jpeg);background-repeat:no-repeat;min-height:100vh;width:100vw;display:flex;justify-content:center;align-items:center;padding-top:32px}#buttonContainer[_ngcontent-%COMP%]{background:rgb(41,39,49,.9);border-radius:16px;padding:32px}[_nghost-%COMP%]     mat-card{background:none}[_nghost-%COMP%]     mat-input-element mat-form-field-autofill-control{background:none}.matInput[_ngcontent-%COMP%]{padding:16px 0 16px 16px;width:97%}#loginForm[_ngcontent-%COMP%], #restForm[_ngcontent-%COMP%]{background:rgb(41,39,49,.9);border-radius:16px;padding:54px;width:100%}.loginButton[_ngcontent-%COMP%]{width:332px;background:rgb(134,152,111);color:#fff;padding-top:6px;padding-bottom:6px;margin-bottom:12px}.mat-form-field[_ngcontent-%COMP%]{width:100%;min-width:300px}mat-card-title[_ngcontent-%COMP%], mat-card-content[_ngcontent-%COMP%]{display:flex;justify-content:center}.error[_ngcontent-%COMP%]{padding-bottom:6px;color:red}.button[_ngcontent-%COMP%]{display:flex;justify-content:center}.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{color:green!important;font-size:20px}"]}),o})();var $=s(77),x=s(3271),X=s(7392);function tt(o,i){1&o&&(t.TgZ(0,"span",29),t._uU(1," Restaurant Name is required "),t.qZA())}function nt(o,i){1&o&&(t.TgZ(0,"span",29),t._uU(1," Description is required "),t.qZA())}function et(o,i){1&o&&(t.TgZ(0,"span",29),t._uU(1," Phone number is required "),t.qZA())}function ot(o,i){1&o&&(t.TgZ(0,"span",29),t._uU(1," Working hours is required "),t.qZA())}function rt(o,i){1&o&&(t.TgZ(0,"span",29),t._uU(1," City is required "),t.qZA())}function it(o,i){1&o&&(t.TgZ(0,"span",29),t._uU(1," State is required "),t.qZA())}function at(o,i){1&o&&(t.TgZ(0,"span",29),t._uU(1," Country is required "),t.qZA())}function st(o,i){1&o&&(t.TgZ(0,"span",29),t._uU(1," Location is required "),t.qZA())}function lt(o,i){1&o&&(t.TgZ(0,"span",29),t._uU(1," Email is required "),t.qZA())}function ut(o,i){1&o&&(t.TgZ(0,"span",29),t._uU(1," Password length should be greater than 8 and less than 32 "),t.qZA())}const l=function(o){return{"is-invalid":o}};let mt=(()=>{class o{constructor(n,e,a){this.formBuilder=n,this.registrationService=e,this.router=a,this.location="",this.submitted=!1}ngOnInit(){this.restSignupForm=this.formBuilder.group({email:[null,r.kI.compose([r.kI.required,r.kI.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])],password:[null,[r.kI.required,r.kI.minLength(8),r.kI.maxLength(32)]],phonenumber:[null,r.kI.required],name:[null,r.kI.required],description:[null,r.kI.required],workinghourto:[null,r.kI.required],workinghourfrom:[null,r.kI.required],city:[null,r.kI.required],country:["US",r.kI.required],state:[null,r.kI.required],location:[null,r.kI.required]})}restaurantSignup(){this.submitted=!0;const n=this.restSignupForm.value;this.restSignupForm.valid&&this.registrationService.registration({fullname:n.name,email:n.email,password:n.password,phonenumber:n.phonenumber,role:"restaurant"}).subscribe(a=>{a.success&&(n.owner=a.data.id,this.saveRestaurant(n))})}saveRestaurant(n){this.registrationService.signUpRestaurant({name:n.name,description:n.description,workingHourFrom:n.workinghourfrom,workingHourTo:n.workinghourto,address:{city:n.city,state:n.state,country:n.country,location:[n.location.long,n.location.lat]},owner:n.owner}).subscribe(a=>{a.success&&this.router.navigate(["/login"])})}getLocation(){navigator.geolocation?(this.location="Loading...",navigator.geolocation.getCurrentPosition(n=>{n&&(this.lat=n.coords.latitude,this.long=n.coords.longitude,this.location=`${this.long} , ${this.lat}`,this.restSignupForm.controls.location.setValue({long:this.long,lat:this.lat}))},n=>console.log(n))):alert("Geolocation is not supported by this browser.")}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(r.qu),t.Y36(I.c),t.Y36(_.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-res-registration"]],decls:70,vars:49,consts:[["id","container"],["id","homePage"],[2,"font-size","54px","margin-bottom","54px"],["id","restForm",3,"formGroup","ngSubmit"],[2,"display","flex","justify-content","space-between"],[2,"width","45%"],[2,"font-size","24px","margin-bottom","20px","margin-top","32px","justify-content","left"],["type","text","matInput","","placeholder","Restaurant Name","formControlName","name",1,"matInput",3,"ngClass"],["class","error",4,"ngIf"],["type","text","matInput","","placeholder","Small Description","formControlName","description",1,"matInput",3,"ngClass"],["type","text","matInput","","mask","(000) 000-0000","placeholder","Phone number","formControlName","phonenumber",1,"matInput",3,"ngClass"],[2,"display","flex"],[2,"min-width","150px"],["placeholder","Working Hour From","matInput","","formControlName","workinghourfrom","readonly","true",1,"matInput",3,"ngxTimepicker","ngClass"],["fromPicker",""],["placeholder","Working Hour To","matInput","","formControlName","workinghourto","readonly","true",1,"matInput",3,"ngxTimepicker","value","ngClass"],["picker",""],[2,"font-size","24px","margin-bottom","26px","margin-top","32px","justify-content","space-between"],["type","text","matInput","","placeholder","City","formControlName","city",1,"matInput",3,"ngClass"],["type","text","matInput","","placeholder","State","formControlName","state",1,"matInput",3,"ngClass"],["type","text","matInput","","placeholder","Country","formControlName","country","value","US","readonly","true",1,"matInput",3,"ngClass"],["type","text","matInput","","readonly","true","placeholder","Location","formControlName","location",1,"matInput",3,"value","ngClass"],["matSuffix","",2,"cursor","pointer",3,"click"],[2,"display","flex","flex-direction","column"],[2,"font-size","24px","margin-bottom","26px","margin-top","32px","justify-content","left"],["matInput","","autocomplete","off","placeholder","Email","formControlName","email",1,"matInput",3,"ngClass"],["type","password","autocomplete","off","matInput","","placeholder","Password","formControlName","password",1,"matInput",3,"ngClass"],[1,"button"],["type","submit","mat-button","",1,"loginButton",3,"disabled"],[1,"error"]],template:function(n,e){if(1&n&&(t.TgZ(0,"div",0)(1,"mat-card",1)(2,"mat-card-title",2),t._uU(3,"Registration"),t.qZA(),t.TgZ(4,"mat-card-content")(5,"section")(6,"form",3),t.NdJ("ngSubmit",function(){return e.restaurantSignup()}),t.TgZ(7,"div",4)(8,"div",5)(9,"mat-card-title",6),t._uU(10,"Profile"),t.qZA(),t.TgZ(11,"p")(12,"mat-form-field"),t._UZ(13,"input",7),t.qZA(),t.YNc(14,tt,2,0,"span",8),t.qZA(),t.TgZ(15,"p")(16,"mat-form-field"),t._UZ(17,"input",9),t.qZA(),t.YNc(18,nt,2,0,"span",8),t.qZA(),t.TgZ(19,"p")(20,"mat-form-field"),t._UZ(21,"input",10),t.qZA(),t.YNc(22,et,2,0,"span",8),t.qZA(),t.TgZ(23,"p")(24,"span",11)(25,"mat-form-field",12),t._UZ(26,"input",13)(27,"ngx-material-timepicker",null,14),t.qZA(),t.TgZ(29,"mat-form-field",12),t._UZ(30,"input",15)(31,"ngx-material-timepicker",null,16),t.qZA()(),t.YNc(33,ot,2,0,"span",8),t.qZA()(),t.TgZ(34,"div",5)(35,"mat-card-title",17),t._uU(36,"Address"),t.qZA(),t.TgZ(37,"p")(38,"mat-form-field"),t._UZ(39,"input",18),t.qZA(),t.YNc(40,rt,2,0,"span",8),t.qZA(),t.TgZ(41,"p")(42,"mat-form-field"),t._UZ(43,"input",19),t.qZA(),t.YNc(44,it,2,0,"span",8),t.qZA(),t.TgZ(45,"p")(46,"mat-form-field"),t._UZ(47,"input",20),t.qZA(),t.YNc(48,at,2,0,"span",8),t.qZA(),t.TgZ(49,"p")(50,"mat-form-field"),t._UZ(51,"input",21),t.TgZ(52,"mat-icon",22),t.NdJ("click",function(){return e.getLocation()}),t._uU(53,"location_on"),t.qZA()(),t.YNc(54,st,2,0,"span",8),t.qZA()()(),t.TgZ(55,"div",23)(56,"mat-card-title",24),t._uU(57,"Account"),t.qZA(),t.TgZ(58,"div",4)(59,"p",5)(60,"mat-form-field"),t._UZ(61,"input",25),t.qZA(),t.YNc(62,lt,2,0,"span",8),t.qZA(),t.TgZ(63,"p",5)(64,"mat-form-field"),t._UZ(65,"input",26),t.qZA(),t.YNc(66,ut,2,0,"span",8),t.qZA()()(),t.TgZ(67,"div",27)(68,"button",28),t._uU(69," Sign Up "),t.qZA()()()()()()()),2&n){const a=t.MAs(28),C=t.MAs(32);let p,g,d,c,f,S,k,R,v,A,F,U,J,P,w,M,N,Q,O,Y,K;t.xp6(6),t.Q6J("formGroup",e.restSignupForm),t.xp6(7),t.Q6J("ngClass",t.VKq(27,l,e.submitted&&(null==(p=e.restSignupForm.get("name"))?null:p.errors))),t.xp6(1),t.Q6J("ngIf",e.submitted&&(null==(g=e.restSignupForm.get("name"))?null:g.errors)),t.xp6(3),t.Q6J("ngClass",t.VKq(29,l,e.submitted&&(null==(d=e.restSignupForm.get("description"))?null:d.errors))),t.xp6(1),t.Q6J("ngIf",e.submitted&&(null==(c=e.restSignupForm.get("description"))?null:c.errors)),t.xp6(3),t.Q6J("ngClass",t.VKq(31,l,e.submitted&&(null==(f=e.restSignupForm.get("phonenumber"))?null:f.errors))),t.xp6(1),t.Q6J("ngIf",e.submitted&&(null==(S=e.restSignupForm.get("phonenumber"))?null:S.errors)),t.xp6(4),t.Q6J("ngxTimepicker",a)("ngClass",t.VKq(33,l,e.submitted&&(null==(k=e.restSignupForm.get("workinghourfrom"))?null:k.errors))),t.xp6(4),t.Q6J("ngxTimepicker",C)("value",e.toPicker)("ngClass",t.VKq(35,l,e.submitted&&(null==(R=e.restSignupForm.get("workinghourto"))?null:R.errors))),t.xp6(3),t.Q6J("ngIf",e.submitted&&(null==(v=e.restSignupForm.get("workinghourfrom")||e.restSignupForm.get("workinghourto"))?null:v.errors)),t.xp6(6),t.Q6J("ngClass",t.VKq(37,l,e.submitted&&(null==(A=e.restSignupForm.get("city"))?null:A.errors))),t.xp6(1),t.Q6J("ngIf",e.submitted&&(null==(F=e.restSignupForm.get("city"))?null:F.errors)),t.xp6(3),t.Q6J("ngClass",t.VKq(39,l,e.submitted&&(null==(U=e.restSignupForm.get("state"))?null:U.errors))),t.xp6(1),t.Q6J("ngIf",e.submitted&&(null==(J=e.restSignupForm.get("state"))?null:J.errors)),t.xp6(3),t.Q6J("ngClass",t.VKq(41,l,e.submitted&&(null==(P=e.restSignupForm.get("country"))?null:P.errors))),t.xp6(1),t.Q6J("ngIf",e.submitted&&(null==(w=e.restSignupForm.get("country"))?null:w.errors)),t.xp6(3),t.Q6J("value",e.location)("ngClass",t.VKq(43,l,e.submitted&&(null==(M=e.restSignupForm.get("location"))?null:M.errors))),t.xp6(3),t.Q6J("ngIf",e.submitted&&(null==(N=e.restSignupForm.get("location"))?null:N.errors)),t.xp6(7),t.Q6J("ngClass",t.VKq(45,l,e.submitted&&(null==(Q=e.restSignupForm.get("email"))?null:Q.errors))),t.xp6(1),t.Q6J("ngIf",e.submitted&&(null==(O=e.restSignupForm.get("email"))?null:O.errors)),t.xp6(3),t.Q6J("ngClass",t.VKq(47,l,e.submitted&&(null==(Y=e.restSignupForm.get("password"))?null:Y.errors))),t.xp6(1),t.Q6J("ngIf",e.submitted&&(null==(K=e.restSignupForm.get("password"))?null:K.errors)),t.xp6(2),t.Q6J("disabled",e.submitted&&!e.restSignupForm.valid)}},dependencies:[u.mk,u.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,T.lW,m.a8,m.dn,m.n5,X.Hw,b.KE,b.R9,y.Nt,x.ro,x.I2,Z.hx],styles:["#container[_ngcontent-%COMP%]{background-image:url(homePage.71ded36c46c7f082.jpeg);background-repeat:no-repeat;min-height:100vh;width:100vw;display:flex;justify-content:center;align-items:center;padding-top:32px}#buttonContainer[_ngcontent-%COMP%]{background:rgb(41,39,49,.9);border-radius:16px;padding:32px}[_nghost-%COMP%]     mat-card{background:none}[_nghost-%COMP%]     mat-input-element mat-form-field-autofill-control{background:none}.matInput[_ngcontent-%COMP%]{padding:16px 0 16px 16px;width:97%}#loginForm[_ngcontent-%COMP%], #restForm[_ngcontent-%COMP%]{background:rgb(41,39,49,.9);border-radius:16px;padding:54px;width:100%}.loginButton[_ngcontent-%COMP%]{width:332px;background:rgb(134,152,111);color:#fff;padding-top:6px;padding-bottom:6px;margin-bottom:12px}.mat-form-field[_ngcontent-%COMP%]{width:100%;min-width:300px}mat-card-title[_ngcontent-%COMP%], mat-card-content[_ngcontent-%COMP%]{display:flex;justify-content:center}.error[_ngcontent-%COMP%]{padding-bottom:6px;color:red}.button[_ngcontent-%COMP%]{display:flex;justify-content:center}.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{color:green!important;font-size:20px}"]}),o})(),pt=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.ez,r.UX,$.h,x.rK,Z.yI.forChild(),_.Bz.forChild([{path:"",component:W,pathMatch:"full"},{path:"restaurants",component:mt,pathMatch:"full"}])]}),o})()}}]);