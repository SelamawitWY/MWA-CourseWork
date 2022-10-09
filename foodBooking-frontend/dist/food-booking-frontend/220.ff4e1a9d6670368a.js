"use strict";(self.webpackChunkfoodBooking_frontend=self.webpackChunkfoodBooking_frontend||[]).push([[220],{1220:(O,u,r)=>{r.r(u),r.d(u,{LoginModule:()=>M});var s=r(6895),g=r(9299),i=r(4006),h=r(1816),t=r(4650),b=r(5760),v=r(4859),m=r(3546),C=r(9549),Z=r(4144);function L(n,l){1&n&&(t.TgZ(0,"span",11),t._uU(1," Email is required "),t.qZA())}function P(n,l){1&n&&(t.TgZ(0,"span",11),t._uU(1," Password length should be greater than 8 "),t.qZA())}const d=function(n){return{"is-invalid":n}};let x=(()=>{class n{constructor(e,o,a){this.formBuilder=e,this.userService=o,this.router=a,this.submitted=!1,this.getLocation(),this.loginForm=e.group({email:[null,i.kI.compose([i.kI.required,i.kI.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])],password:[null,[i.kI.required,i.kI.minLength(8),i.kI.maxLength(32)]],lat:[this.lat],long:[this.long]}),this.getLocation()}login(){this.submitted=!0,this.loginForm.valid&&this.userService.login(this.loginForm.value).subscribe(e=>{const o=(0,h.Z)(e.data),a={_id:o._id,email:o.email,fullName:o.fullName,role:o.role,token:e.data,phoneNumber:o.phoneNumber,lat:o.lat,long:o.long,owner:o.owner};localStorage.setItem("APP_STATE",JSON.stringify(a)),this.userService.state.next(a),this.router.navigate("user"==o.role?["/users"]:["/restaurants"])})}getLocation(){navigator.geolocation?navigator.geolocation.getCurrentPosition(e=>{e&&(this.lat=e.coords.latitude,this.long=e.coords.longitude,this.loginForm.patchValue({lat:this.lat,long:this.long}))},e=>console.log(e)):alert("Geolocation is not supported by this browser.")}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(i.qu),t.Y36(b.K),t.Y36(g.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-login"]],decls:23,vars:11,consts:[["id","container"],["id","homePage",2,"padding-top","208px"],[2,"font-size","54px","margin-bottom","54px"],["id","loginForm",3,"formGroup","ngSubmit"],["type","text","matInput","","placeholder","Email","formControlName","email",1,"matInput",3,"ngClass"],["class","error",4,"ngIf"],["type","password","matInput","","placeholder","Password","formControlName","password","autocomplete","off",1,"matInput",3,"ngClass"],[1,"button"],["type","submit","mat-button","",1,"loginButton",3,"disabled"],[2,"font-size","32px","margin-bottom","26px","margin-top","32px"],["type","button","mat-button","",1,"loginButton",3,"routerLink"],[1,"error"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0)(1,"mat-card",1)(2,"mat-card-title",2),t._uU(3,"Book Food Online"),t.qZA(),t.TgZ(4,"mat-card-content")(5,"section")(6,"form",3),t.NdJ("ngSubmit",function(){return o.login()}),t.TgZ(7,"p")(8,"mat-form-field"),t._UZ(9,"input",4),t.qZA(),t.YNc(10,L,2,0,"span",5),t.qZA(),t.TgZ(11,"p")(12,"mat-form-field"),t._UZ(13,"input",6),t.qZA(),t.YNc(14,P,2,0,"span",5),t.qZA(),t.TgZ(15,"div",7)(16,"button",8),t._uU(17," Login "),t.qZA()()(),t.TgZ(18,"mat-card-title",9),t._uU(19,"No account yet?"),t.qZA(),t.TgZ(20,"div",7)(21,"button",10),t._uU(22," Sign up for free "),t.qZA()()()()()()),2&e){let a,p,c,f;t.xp6(6),t.Q6J("formGroup",o.loginForm),t.xp6(3),t.Q6J("ngClass",t.VKq(7,d,o.submitted&&(null==(a=o.loginForm.get("email"))?null:a.errors))),t.xp6(1),t.Q6J("ngIf",o.submitted&&(null==(p=o.loginForm.get("email"))?null:p.errors)),t.xp6(3),t.Q6J("ngClass",t.VKq(9,d,o.submitted&&(null==(c=o.loginForm.get("password"))?null:c.errors))),t.xp6(1),t.Q6J("ngIf",o.submitted&&(null==(f=o.loginForm.get("password"))?null:f.errors)),t.xp6(2),t.Q6J("disabled",o.submitted&&!o.loginForm.valid||!o.lat),t.xp6(5),t.Q6J("routerLink","../signup")}},dependencies:[s.mk,s.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,v.lW,m.a8,m.dn,m.n5,C.KE,Z.Nt,g.rH],styles:["#container[_ngcontent-%COMP%]{background-image:url(homePage.71ded36c46c7f082.jpeg);background-repeat:no-repeat;height:100vh;width:100vw}[_nghost-%COMP%]     mat-card{background:none}#loginForm[_ngcontent-%COMP%]{background:rgb(41,39,49,.9);border-radius:16px;padding:54px}.loginButton[_ngcontent-%COMP%]{width:332px;background:rgb(134,152,111);color:#fff;padding-top:6px;padding-bottom:6px}.mat-form-field[_ngcontent-%COMP%]{width:100%}mat-card-title[_ngcontent-%COMP%], mat-card-content[_ngcontent-%COMP%]{display:flex;justify-content:center}.error[_ngcontent-%COMP%]{padding-bottom:6px;color:red}.matInput[_ngcontent-%COMP%]{padding:16px 0 16px 16px;width:97%}.button[_ngcontent-%COMP%]{display:flex;justify-content:center}.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{color:green!important;font-size:20px}"]}),n})();var F=r(77);let M=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[s.ez,i.UX,F.h,g.Bz.forChild([{path:"",component:x,pathMatch:"full"}])]}),n})()}}]);