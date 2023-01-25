"use strict";(self.webpackChunkscales_doc_site=self.webpackChunkscales_doc_site||[]).push([[8585],{8585:(_,d,a)=>{a.r(d),a.d(d,{NzDemoDrawerFooterModule:()=>q});var l=a(3238),s=a(4515),y=a(7081),m=a(1380),e=a(9724);let T=(()=>{class t{constructor(){this.expanded=!1}goLink(n){window&&(window.location.hash=n)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(n=>{n.nzExpanded=this.expanded,n.expandCode(this.expanded),n.check()})}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["nz-demo-drawer-footer"]],viewQuery:function(n,o){if(1&n&&e.Gf(m.G,5),2&n){let c;e.iGM(c=e.CRH())&&(o.codeBoxes=c)}},decls:0,vars:0,template:function(n,o){},encapsulation:2}),t})();var z=a(3563),u=a(695),g=a(5760),f=a(8918),Z=a(8741),w=a(5535),C=a(4344),B=a(1048),h=a(8238);function D(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"button",4),e.NdJ("click",function(){return e.CHM(n),e.oxw().onSecondaryClick()}),e._uU(1),e.qZA()}if(2&t){const n=e.oxw();e.Q6J("disabled",n.scDisableSecondaryBtn),e.xp6(1),e.Oqu(n.secondaryBtnText)}}function b(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"button",5),e.NdJ("click",function(){return e.CHM(n),e.oxw().onPrimaryClick()}),e._uU(1),e.qZA()}if(2&t){const n=e.oxw();e.Q6J("disabled",n.scDisablePrimaryBtn),e.xp6(1),e.Oqu(n.primaryBtnText)}}let p=(()=>{class t{constructor(){this.cancelBtnText="Cancel",this.secondaryBtnText="Secondary",this.primaryBtnText="Primary",this.canShowSecondaryBtn=!1,this.canShowPrimaryBtn=!0,this.scDisableCancelBtn=!1,this.scDisableSecondaryBtn=!1,this.scDisablePrimaryBtn=!1,this.cancelBtnClick=new e.vpe,this.secondaryBtnClick=new e.vpe,this.primaryBtnClick=new e.vpe}ngOnInit(){}onCancelClick(){this.cancelBtnClick.emit()}onSecondaryClick(){this.secondaryBtnClick.emit()}onPrimaryClick(){this.primaryBtnClick.emit()}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["sc-drawer-footer"]],inputs:{cancelBtnText:"cancelBtnText",secondaryBtnText:"secondaryBtnText",primaryBtnText:"primaryBtnText",canShowSecondaryBtn:"canShowSecondaryBtn",canShowPrimaryBtn:"canShowPrimaryBtn",scDisableCancelBtn:"scDisableCancelBtn",scDisableSecondaryBtn:"scDisableSecondaryBtn",scDisablePrimaryBtn:"scDisablePrimaryBtn"},outputs:{cancelBtnClick:"cancelBtnClick",secondaryBtnClick:"secondaryBtnClick",primaryBtnClick:"primaryBtnClick"},decls:7,vars:4,consts:[[1,"flex","container"],["nz-button","","nzType","text",1,"r-cancel-button",3,"disabled","click"],["nz-button","","class","r-secondary-button",3,"disabled","click",4,"ngIf"],["nz-button","","nzType","primary","class","r-primary-button",3,"disabled","click",4,"ngIf"],["nz-button","",1,"r-secondary-button",3,"disabled","click"],["nz-button","","nzType","primary",1,"r-primary-button",3,"disabled","click"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div")(2,"button",1),e.NdJ("click",function(){return o.onCancelClick()}),e._uU(3),e.qZA()(),e.TgZ(4,"div"),e.YNc(5,D,2,2,"button",2),e.YNc(6,b,2,2,"button",3),e.qZA()()),2&n&&(e.xp6(2),e.Q6J("disabled",o.scDisableCancelBtn),e.xp6(1),e.Oqu(o.cancelBtnText),e.xp6(2),e.Q6J("ngIf",o.canShowSecondaryBtn),e.xp6(1),e.Q6J("ngIf",o.canShowPrimaryBtn))},directives:[C.ix,f.w,B.O5,h.dQ],styles:[".flex[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start}.container[_ngcontent-%COMP%]{padding:16px 24px;background:#ffffff;border-top:1px solid #dce0e8}.r-primary-button[_ngcontent-%COMP%]{margin-left:8px}"],changeDetection:0}),t})(),A=(()=>{class t{onClick(){alert("Click event is triggered")}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["nz-demo-drawer-footer-basic"]],decls:1,vars:5,consts:[[3,"cancelBtnText","primaryBtnText","secondaryBtnText","canShowPrimaryBtn","canShowSecondaryBtn","cancelBtnClick","primaryBtnClick","secondaryBtnClick"]],template:function(n,o){1&n&&(e.TgZ(0,"sc-drawer-footer",0),e.NdJ("cancelBtnClick",function(){return o.onClick()})("primaryBtnClick",function(){return o.onClick()})("secondaryBtnClick",function(){return o.onClick()}),e.qZA()),2&n&&e.Q6J("cancelBtnText","Cancel")("primaryBtnText","Primary")("secondaryBtnText","Secondary")("canShowPrimaryBtn",!0)("canShowSecondaryBtn",!0)},directives:[p],encapsulation:2}),t})(),x=(()=>{class t{onClick(){alert("Click event is triggered")}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["nz-demo-drawer-footer-cancel"]],decls:1,vars:5,consts:[[3,"cancelBtnText","primaryBtnText","secondaryBtnText","canShowPrimaryBtn","canShowSecondaryBtn","cancelBtnClick","primaryBtnClick","secondaryBtnClick"]],template:function(n,o){1&n&&(e.TgZ(0,"sc-drawer-footer",0),e.NdJ("cancelBtnClick",function(){return o.onClick()})("primaryBtnClick",function(){return o.onClick()})("secondaryBtnClick",function(){return o.onClick()}),e.qZA()),2&n&&e.Q6J("cancelBtnText","Cancel")("primaryBtnText","Primary")("secondaryBtnText","Secondary")("canShowPrimaryBtn",!0)("canShowSecondaryBtn",!0)},directives:[p],encapsulation:2}),t})(),k=(()=>{class t{onClick(){alert("Click event is triggered")}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["nz-demo-drawer-footer-primary"]],decls:1,vars:4,consts:[[3,"cancelBtnText","primaryBtnText","canShowPrimaryBtn","canShowSecondaryBtn","cancelBtnClick","primaryBtnClick","secondaryBtnClick"]],template:function(n,o){1&n&&(e.TgZ(0,"sc-drawer-footer",0),e.NdJ("cancelBtnClick",function(){return o.onClick()})("primaryBtnClick",function(){return o.onClick()})("secondaryBtnClick",function(){return o.onClick()}),e.qZA()),2&n&&e.Q6J("cancelBtnText","Cancel")("primaryBtnText","Primary")("canShowPrimaryBtn",!0)("canShowSecondaryBtn",!1)},directives:[p],encapsulation:2}),t})();var i=a(4124);let U=(()=>{class t{constructor(){this.expanded=!1}goLink(n){window&&(window.location.hash=n)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(n=>{n.nzExpanded=this.expanded,n.expandCode(this.expanded),n.check()})}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["nz-demo-drawer-footer"]],viewQuery:function(n,o){if(1&n&&e.Gf(m.G,5),2&n){let c;e.iGM(c=e.CRH())&&(o.codeBoxes=c)}},decls:221,vars:16,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-drawer-footer-demo-basic","nzTitle","Default drawer footer component"],["nzHref","#components-drawer-footer-demo-cancel","nzTitle","Drawer footer component with a cancel button"],["nzHref","#components-drawer-footer-demo-primary","nzTitle","Drawer footer component with a cancel and primary button"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/JobAdder/scales-workspace/tree/dev/projects/scales-library/src/lib//drawer-footer/doc/index.en-US.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","when-to-use"],["onclick","window.location.hash = 'when-to-use'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["id","component-tab"],["nzTitle","Examples"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan"],["nzTitle","Default drawer footer component","nzSelector","nz-demo-drawer-footer-basic","nzGenerateCommand","ng g ng-zorro-antd:drawer-footer-basic <name>","nzComponentName","NzDemoDrawerFooterBasicComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","Drawer footer component with a cancel button","nzSelector","nz-demo-drawer-footer-cancel","nzGenerateCommand","ng g ng-zorro-antd:drawer-footer-cancel <name>","nzComponentName","NzDemoDrawerFooterCancelComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Drawer footer component with a cancel and primary button","nzSelector","nz-demo-drawer-footer-primary","nzGenerateCommand","ng g ng-zorro-antd:drawer-footer-primary <name>","nzComponentName","NzDemoDrawerFooterPrimaryComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Usage"],["nzTitle","Installation"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","[sc-drawer-footer]"],[1,"api-type-label","directive"],["onclick","window.location.hash = '[sc-drawer-footer]'",1,"anchor"]],template:function(n,o){1&n&&(e.TgZ(0,"article")(1,"nz-affix",0)(2,"nz-anchor",1),e.NdJ("nzClick",function(F){return o.goLink(F)}),e._UZ(3,"nz-link",2)(4,"nz-link",3)(5,"nz-link",4)(6,"nz-link",5),e.qZA()(),e.TgZ(7,"section",6)(8,"h1"),e._uU(9,"Drawer Footer"),e._UZ(10,"span",7)(11,"span",8),e.TgZ(12,"a",9),e._UZ(13,"i",10),e.qZA()(),e.TgZ(14,"section",6),e.IAx(),e.TgZ(15,"p"),e._uU(16,"To display actions on drawer footer"),e.qZA(),e.TgZ(17,"h2",11)(18,"span"),e._uU(19,"When To Use"),e.qZA(),e.TgZ(20,"a",12),e._uU(21,"#"),e.qZA()(),e.TgZ(22,"p"),e._uU(23,"Series of operations to be executed on button clicks on drawer footer."),e.qZA(),e.TgZ(24,"pre",13)(25,"code")(26,"span",14),e._uU(27,"import"),e.qZA(),e._uU(28," "),e.TgZ(29,"span",15),e._uU(30,"{"),e.qZA(),e._uU(31," ScalesLibraryModule "),e.TgZ(32,"span",15),e._uU(33,"}"),e.qZA(),e._uU(34," "),e.TgZ(35,"span",14),e._uU(36,"from"),e.qZA(),e._uU(37," "),e.TgZ(38,"span",16),e._uU(39,"'scales-library'"),e.qZA(),e.TgZ(40,"span",15),e._uU(41,";"),e.qZA()()(),e.fQ9(),e.qZA()(),e.TgZ(42,"nz-tabset",17)(43,"nz-tab",18)(44,"div",19)(45,"div",20)(46,"nz-code-box",21),e._UZ(47,"nz-demo-drawer-footer-basic",22),e.TgZ(48,"div",23),e.IAx(),e.TgZ(49,"p")(50,"code"),e._uU(51,"A sample of drawer footer component with primary and secondary buttons."),e.qZA()(),e.fQ9(),e.qZA()(),e.TgZ(52,"nz-code-box",24),e._UZ(53,"nz-demo-drawer-footer-cancel",22),e.TgZ(54,"div",23),e.IAx(),e.TgZ(55,"p")(56,"code"),e._uU(57,"A sample of drawer footer component with a cancel button."),e.qZA()(),e.fQ9(),e.qZA()(),e.TgZ(58,"nz-code-box",25),e._UZ(59,"nz-demo-drawer-footer-primary",22),e.TgZ(60,"div",23),e.IAx(),e.TgZ(61,"p")(62,"code"),e._uU(63,"A sample of drawer footer component with a cancel button and a primary button."),e.qZA()(),e.fQ9(),e.qZA()()()()(),e.TgZ(64,"nz-tab",26),e._uU(65," Content of Tab Pane 2 "),e.qZA(),e._UZ(66,"nz-tab",27),e.qZA(),e.TgZ(67,"section",28),e.IAx(),e.TgZ(68,"h2",29)(69,"span"),e._uU(70,"API"),e.qZA(),e.TgZ(71,"a",30),e._uU(72,"#"),e.qZA()(),e.TgZ(73,"h3",31)(74,"span"),e._uU(75,"[sc-drawer-footer]"),e.qZA(),e.TgZ(76,"label",32),e._uU(77,"directive"),e.qZA(),e.TgZ(78,"a",33),e._uU(79,"#"),e.qZA()(),e.TgZ(80,"table")(81,"thead")(82,"tr")(83,"th"),e._uU(84,"Property"),e.qZA(),e.TgZ(85,"th"),e._uU(86,"Description"),e.qZA(),e.TgZ(87,"th"),e._uU(88,"Type"),e.qZA(),e.TgZ(89,"th"),e._uU(90,"Default"),e.qZA()()(),e.TgZ(91,"tbody")(92,"tr")(93,"td")(94,"code"),e._uU(95,"[cancelBtnText]"),e.qZA()(),e.TgZ(96,"td"),e._uU(97,"Label for cancel button"),e.qZA(),e.TgZ(98,"td")(99,"code"),e._uU(100,"string"),e.qZA()(),e.TgZ(101,"td")(102,"code"),e._uU(103,"Cancel"),e.qZA()()(),e.TgZ(104,"tr")(105,"td")(106,"code"),e._uU(107,"[secondaryBtnText]"),e.qZA()(),e.TgZ(108,"td"),e._uU(109,"Label for secondary button"),e.qZA(),e.TgZ(110,"td")(111,"code"),e._uU(112,"string"),e.qZA()(),e.TgZ(113,"td")(114,"code"),e._uU(115,"Secondary"),e.qZA()()(),e.TgZ(116,"tr")(117,"td")(118,"code"),e._uU(119,"[primaryBtnText]"),e.qZA()(),e.TgZ(120,"td"),e._uU(121,"Label for primary button"),e.qZA(),e.TgZ(122,"td")(123,"code"),e._uU(124,"string"),e.qZA()(),e.TgZ(125,"td")(126,"code"),e._uU(127,"Primary"),e.qZA()()(),e.TgZ(128,"tr")(129,"td")(130,"code"),e._uU(131,"[cancelBtnClick]"),e.qZA()(),e.TgZ(132,"td"),e._uU(133,"Specify a EventEmitter that will be emitted when cancel button is clicked"),e.qZA(),e.TgZ(134,"td")(135,"code"),e._uU(136,"EventEmitter"),e.qZA()(),e.TgZ(137,"td"),e._uU(138,"-"),e.qZA()(),e.TgZ(139,"tr")(140,"td")(141,"code"),e._uU(142,"[secondaryBtnClick]"),e.qZA()(),e.TgZ(143,"td"),e._uU(144,"Specify a EventEmitter that will be emitted when cancel button is clicked"),e.qZA(),e.TgZ(145,"td")(146,"code"),e._uU(147,"EventEmitter"),e.qZA()(),e.TgZ(148,"td"),e._uU(149,"-"),e.qZA()(),e.TgZ(150,"tr")(151,"td")(152,"code"),e._uU(153,"[primaryBtnClick]"),e.qZA()(),e.TgZ(154,"td"),e._uU(155,"Specify a EventEmitter that will be emitted when cancel button is clicked)"),e.qZA(),e.TgZ(156,"td")(157,"code"),e._uU(158,"EventEmitter"),e.qZA()(),e.TgZ(159,"td"),e._uU(160,"-"),e.qZA()(),e.TgZ(161,"tr")(162,"td")(163,"code"),e._uU(164,"[canShowPrimaryBtn]"),e.qZA()(),e.TgZ(165,"td"),e._uU(166,"Boolean for showing primary button"),e.qZA(),e.TgZ(167,"td")(168,"code"),e._uU(169,"boolean"),e.qZA()(),e.TgZ(170,"td")(171,"code"),e._uU(172,"true"),e.qZA()()(),e.TgZ(173,"tr")(174,"td")(175,"code"),e._uU(176,"[canShowSecondaryBtn]"),e.qZA()(),e.TgZ(177,"td"),e._uU(178,"Boolean for showing secondary button"),e.qZA(),e.TgZ(179,"td")(180,"code"),e._uU(181,"boolean"),e.qZA()(),e.TgZ(182,"td")(183,"code"),e._uU(184,"false"),e.qZA()()(),e.TgZ(185,"tr")(186,"td")(187,"code"),e._uU(188,"[scDisableCancelBtn]"),e.qZA()(),e.TgZ(189,"td"),e._uU(190,"Boolean for disabling cancel button"),e.qZA(),e.TgZ(191,"td")(192,"code"),e._uU(193,"boolean"),e.qZA()(),e.TgZ(194,"td")(195,"code"),e._uU(196,"false"),e.qZA()()(),e.TgZ(197,"tr")(198,"td")(199,"code"),e._uU(200,"[scDisableSecondaryBtn]"),e.qZA()(),e.TgZ(201,"td"),e._uU(202,"Boolean for disabling secondary button"),e.qZA(),e.TgZ(203,"td")(204,"code"),e._uU(205,"boolean"),e.qZA()(),e.TgZ(206,"td")(207,"code"),e._uU(208,"false"),e.qZA()()(),e.TgZ(209,"tr")(210,"td")(211,"code"),e._uU(212,"[scDisablePrimaryBtn]"),e.qZA()(),e.TgZ(213,"td"),e._uU(214,"Boolean for disabling primary button"),e.qZA(),e.TgZ(215,"td")(216,"code"),e._uU(217,"boolean"),e.qZA()(),e.TgZ(218,"td")(219,"code"),e._uU(220,"false"),e.qZA()()()()(),e.fQ9(),e.qZA()()),2&n&&(e.xp6(1),e.Q6J("nzOffsetTop",16),e.xp6(1),e.Q6J("nzAffix",!1),e.xp6(42),e.Q6J("nzGutter",8),e.xp6(1),e.Q6J("nzSpan",24),e.xp6(1),e.Q6J("nzId","components-drawer-footer-demo-basic")("nzLink","components-drawer-footer-demo-basic")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/drawer-footer/demo/basic.md"),e.xp6(6),e.Q6J("nzId","components-drawer-footer-demo-cancel")("nzLink","components-drawer-footer-demo-cancel")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/drawer-footer/demo/cancel.md"),e.xp6(6),e.Q6J("nzId","components-drawer-footer-demo-primary")("nzLink","components-drawer-footer-demo-primary")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/drawer-footer/demo/primary.md"))},directives:[z.$,u.IT,u.Fp,g.Ls,f.w,Z.xH,Z.xw,w.SK,w.t3,m.G,A,x,k,i.Om,i.$Z,i.Uo,i._C,i.p0],encapsulation:2}),t})();a(8915);let q=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[s.G,...y.F,l.Bz.forChild([{path:"en",component:U},{path:"zh",component:T}])]]}),t})()},7081:(_,d,a)=>{a.d(d,{F:()=>s});const s=[a(8915).t]}}]);