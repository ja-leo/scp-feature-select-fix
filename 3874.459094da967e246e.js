"use strict";(self.webpackChunkscales_doc_site=self.webpackChunkscales_doc_site||[]).push([[3874],{3874:($,A,l)=>{l.r(A),l.d(A,{NzDemoSkeletonModule:()=>Y});var q=l(3238),S=l(4515),s=l(4217),d=l(4270),u=l(8498),g=l(5760),T=l(4344),c=l(5665),f=l(7077),Z=l(8222);const v=[s.H0,d.Ph,u.m,g.PV,T.sL,c.aF,f.S,Z.zf];var h=l(1380),e=l(9724);let C=(()=>{class n{constructor(){this.expanded=!1}goLink(t){window&&(window.location.hash=t)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(t=>{t.nzExpanded=this.expanded,t.expandCode(this.expanded),t.check()})}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["nz-demo-skeleton"]],viewQuery:function(t,a){if(1&t&&e.Gf(h.G,5),2&t){let i;e.iGM(i=e.CRH())&&(a.codeBoxes=i)}},decls:0,vars:0,template:function(t,a){},encapsulation:2}),n})();var b=l(3563),U=l(695),_=l(8918),k=l(8741),m=l(5535);let x=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["nz-demo-skeleton-basic"]],decls:1,vars:0,template:function(t,a){1&t&&e._UZ(0,"nz-skeleton")},directives:[s.ng],encapsulation:2}),n})();const y=function(){return{rows:4}};let D=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["nz-demo-skeleton-complex"]],decls:1,vars:3,consts:[[3,"nzAvatar","nzParagraph"]],template:function(t,a){1&t&&e._UZ(0,"nz-skeleton",0),2&t&&e.Q6J("nzAvatar",!0)("nzParagraph",e.DdM(2,y))},directives:[s.ng],encapsulation:2}),n})(),N=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["nz-demo-skeleton-active"]],decls:1,vars:1,consts:[[3,"nzActive"]],template:function(t,a){1&t&&e._UZ(0,"nz-skeleton",0),2&t&&e.Q6J("nzActive",!0)},directives:[s.ng],encapsulation:2}),n})();var z=l(2552);function w(n,o){if(1&n&&e._UZ(0,"nz-skeleton-element",15),2&n){const t=e.oxw();e.Q6J("nzActive",t.elementActive)("nzSize",t.elementSize)("nzShape",t.buttonShape)}}function I(n,o){if(1&n&&e._UZ(0,"nz-skeleton-element",16),2&n){const t=e.oxw();e.Q6J("nzActive",t.elementActive)("nzSize",t.elementSize)("nzShape",t.avatarShape)}}function L(n,o){if(1&n&&e._UZ(0,"nz-skeleton-element",17),2&n){const t=e.oxw();e.Q6J("nzActive",t.elementActive)("nzSize",t.elementSize)}}let Q=(()=>{class n{constructor(){this.buttonActive=!1,this.avatarActive=!1,this.inputActive=!1,this.imageActive=!1,this.buttonSize="default",this.avatarSize="default",this.inputSize="default",this.elementActive=!1,this.buttonShape="default",this.avatarShape="circle",this.elementSize="default"}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["nz-demo-skeleton-element"]],decls:40,vars:7,consts:[["nzSize","middle"],["nzType","button",3,"nzActive","nzSize","nzShape",4,"nzSpaceItem"],["nzType","avatar",3,"nzActive","nzSize","nzShape",4,"nzSpaceItem"],["nzType","input","style","width:200px",3,"nzActive","nzSize",4,"nzSpaceItem"],["nzType","image",3,"nzActive"],["nz-row","","nzAlign","middle",3,"nzGutter"],["nz-col","","nzSpan","10"],[3,"ngModel","ngModelChange"],["nz-radio-button","","nzValue","default"],["nz-radio-button","","nzValue","large"],["nz-radio-button","","nzValue","small"],["nz-col","","nzSpan","5"],["nz-radio-button","","nzValue","circle"],["nz-radio-button","","nzValue","round"],["nz-radio-button","","nzValue","square"],["nzType","button",3,"nzActive","nzSize","nzShape"],["nzType","avatar",3,"nzActive","nzSize","nzShape"],["nzType","input",2,"width","200px",3,"nzActive","nzSize"]],template:function(t,a){1&t&&(e.TgZ(0,"nz-space",0),e.YNc(1,w,1,3,"nz-skeleton-element",1),e.YNc(2,I,1,3,"nz-skeleton-element",2),e.YNc(3,L,1,2,"nz-skeleton-element",3),e.qZA(),e._UZ(4,"br")(5,"br")(6,"nz-skeleton-element",4)(7,"nz-divider"),e.TgZ(8,"div",5)(9,"div",6),e._uU(10," Size: "),e.TgZ(11,"nz-radio-group",7),e.NdJ("ngModelChange",function(r){return a.elementSize=r}),e.TgZ(12,"label",8),e._uU(13,"Default"),e.qZA(),e.TgZ(14,"label",9),e._uU(15,"Large"),e.qZA(),e.TgZ(16,"label",10),e._uU(17,"Small"),e.qZA()()(),e.TgZ(18,"div",11),e._uU(19," Active: "),e.TgZ(20,"nz-switch",7),e.NdJ("ngModelChange",function(r){return a.elementActive=r}),e.qZA()()(),e._UZ(21,"br")(22,"br"),e.TgZ(23,"div",5)(24,"div",6),e._uU(25," Button Shape: "),e.TgZ(26,"nz-radio-group",7),e.NdJ("ngModelChange",function(r){return a.buttonShape=r}),e.TgZ(27,"label",8),e._uU(28,"Default"),e.qZA(),e.TgZ(29,"label",12),e._uU(30,"Circle"),e.qZA(),e.TgZ(31,"label",13),e._uU(32,"Round"),e.qZA()()(),e.TgZ(33,"div",6),e._uU(34," Avatar Shape: "),e.TgZ(35,"nz-radio-group",7),e.NdJ("ngModelChange",function(r){return a.avatarShape=r}),e.TgZ(36,"label",12),e._uU(37,"Circle"),e.qZA(),e.TgZ(38,"label",14),e._uU(39,"Square"),e.qZA()()()()),2&t&&(e.xp6(6),e.Q6J("nzActive",a.elementActive),e.xp6(2),e.Q6J("nzGutter",8),e.xp6(3),e.Q6J("ngModel",a.elementSize),e.xp6(9),e.Q6J("ngModel",a.elementActive),e.xp6(3),e.Q6J("nzGutter",8),e.xp6(3),e.Q6J("ngModel",a.buttonShape),e.xp6(9),e.Q6J("ngModel",a.avatarShape))},directives:[Z.NU,Z.$1,s.Xw,s.AD,s.yx,s.yg,s.Ql,f.g,m.SK,m.t3,c.Dg,z.JJ,z.On,c.Of,c.Bq,u.i],encapsulation:2}),n})();var J=l(8238);let M=(()=>{class n{constructor(){this.loading=!1}showSkeleton(){this.loading=!0,setTimeout(()=>{this.loading=!1},3e3)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["nz-demo-skeleton-children"]],decls:8,vars:2,consts:[[1,"article"],[3,"nzLoading"],["nz-button","",3,"disabled","click"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"nz-skeleton",1)(2,"h4"),e._uU(3,"Ant Design, a design language"),e.qZA(),e.TgZ(4,"p"),e._uU(5," We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently. "),e.qZA()(),e.TgZ(6,"button",2),e.NdJ("click",function(){return a.showSkeleton()}),e._uU(7,"Show Skeleton"),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("nzLoading",a.loading),e.xp6(5),e.Q6J("disabled",a.loading))},directives:[s.ng,T.ix,J.dQ,_.w],styles:[".article[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-bottom:16px}.article[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:16px}"]}),n})();function H(n,o){1&n&&(e._UZ(0,"i",11),e._uU(1," 156 "))}function O(n,o){1&n&&(e._UZ(0,"i",12),e._uU(1," 156 "))}function E(n,o){1&n&&(e._UZ(0,"i",13),e._uU(1," 2 "))}function G(n,o){if(1&n&&(e.TgZ(0,"a",14),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.s9C("href",t.href,e.LSH),e.xp6(1),e.Oqu(t.title)}}function P(n,o){1&n&&e._UZ(0,"img",15)}const B=function(){return[]},R=function(n,o,t){return[n,o,t]};function F(n,o){if(1&n&&(e.TgZ(0,"nz-list-item",3)(1,"nz-skeleton",4),e.YNc(2,H,2,0,"ng-template",null,5,e.W1O),e.YNc(4,O,2,0,"ng-template",null,6,e.W1O),e.YNc(6,E,2,0,"ng-template",null,7,e.W1O),e.TgZ(8,"nz-list-item-meta",8),e.YNc(9,G,2,2,"ng-template",null,9,e.W1O),e.qZA(),e.YNc(11,P,1,0,"ng-template",null,10,e.W1O),e.qZA()()),2&n){const t=o.$implicit,a=e.MAs(3),i=e.MAs(5),r=e.MAs(7),V=e.MAs(10),j=e.MAs(12),p=e.oxw();e.Q6J("nzContent",p.loading?" ":t.content)("nzActions",p.loading?e.DdM(9,B):e.kEZ(10,R,a,i,r))("nzExtra",p.loading?null:j),e.xp6(1),e.Q6J("nzLoading",p.loading)("nzActive",!0)("nzAvatar",!0),e.xp6(7),e.Q6J("nzAvatar",t.avatar)("nzTitle",V)("nzDescription",t.description)}}let X=(()=>{class n{constructor(){this.loading=!0,this.listData=new Array(3).fill({}).map((t,a)=>({href:"http://ng.ant.design",title:`ant design part ${a}`,avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",description:"Ant Design, a design language for background applications, is refined by Ant UED Team.",content:"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."}))}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["nz-demo-skeleton-list"]],decls:4,vars:4,consts:[[3,"ngModel","ngModelChange"],[3,"nzDataSource","nzRenderItem","nzItemLayout"],["item",""],[3,"nzContent","nzActions","nzExtra"],[3,"nzLoading","nzActive","nzAvatar"],["starAction",""],["likeAction",""],["msgAction",""],[3,"nzAvatar","nzTitle","nzDescription"],["nzTitle",""],["extra",""],["nz-icon","","nzType","star-o",2,"margin-right","8px"],["nz-icon","","nzType","like-o",2,"margin-right","8px"],["nz-icon","","nzType","message",2,"margin-right","8px"],[3,"href"],["width","272","alt","logo","src","https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"]],template:function(t,a){if(1&t&&(e.TgZ(0,"nz-switch",0),e.NdJ("ngModelChange",function(r){return a.loading=r}),e.qZA(),e.TgZ(1,"nz-list",1),e.YNc(2,F,13,14,"ng-template",null,2,e.W1O),e.qZA()),2&t){const i=e.MAs(3);e.Q6J("ngModel",a.loading),e.xp6(1),e.Q6J("nzDataSource",a.listData)("nzRenderItem",i)("nzItemLayout","vertical")}},directives:[u.i,z.JJ,z.On,d.n_,d.AA,s.ng,g.Ls,_.w,d.yi],encapsulation:2}),n})(),W=(()=>{class n{constructor(){this.expanded=!1}goLink(t){window&&(window.location.hash=t)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(t=>{t.nzExpanded=this.expanded,t.expandCode(this.expanded),t.check()})}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["nz-demo-skeleton"]],viewQuery:function(t,a){if(1&t&&e.Gf(h.G,5),2&t){let i;e.iGM(i=e.CRH())&&(a.codeBoxes=i)}},decls:478,vars:28,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-skeleton-demo-basic","nzTitle","Basic"],["nzHref","#components-skeleton-demo-complex","nzTitle","Complex combination"],["nzHref","#components-skeleton-demo-active","nzTitle","Active Animation"],["nzHref","#components-skeleton-demo-element","nzTitle","Button/Avatar/Input/Image"],["nzHref","#components-skeleton-demo-children","nzTitle","Contains sub component"],["nzHref","#components-skeleton-demo-list","nzTitle","List Sample"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/JobAdder/scales-workspace/tree/dev/projects/scales-library/src/lib//skeleton/doc/index.en-US.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","when-to-use"],["onclick","window.location.hash = 'when-to-use'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["id","component-tab"],["nzTitle","Examples"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan"],["nzTitle","Basic","nzSelector","nz-demo-skeleton-basic","nzGenerateCommand","ng g ng-zorro-antd:skeleton-basic <name>","nzComponentName","NzDemoSkeletonBasicComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","Complex combination","nzSelector","nz-demo-skeleton-complex","nzGenerateCommand","ng g ng-zorro-antd:skeleton-complex <name>","nzComponentName","NzDemoSkeletonComplexComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Active Animation","nzSelector","nz-demo-skeleton-active","nzGenerateCommand","ng g ng-zorro-antd:skeleton-active <name>","nzComponentName","NzDemoSkeletonActiveComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Button/Avatar/Input/Image","nzSelector","nz-demo-skeleton-element","nzGenerateCommand","ng g ng-zorro-antd:skeleton-element <name>","nzComponentName","NzDemoSkeletonElementComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Contains sub component","nzSelector","nz-demo-skeleton-children","nzGenerateCommand","ng g ng-zorro-antd:skeleton-children <name>","nzComponentName","NzDemoSkeletonChildrenComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","List Sample","nzSelector","nz-demo-skeleton-list","nzGenerateCommand","ng g ng-zorro-antd:skeleton-list <name>","nzComponentName","NzDemoSkeletonListComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Usage"],["nzTitle","Installation"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nz-skeleton"],[1,"api-type-label","component"],["onclick","window.location.hash = 'nz-skeleton'",1,"anchor"],["id","nzskeletonavatar"],["onclick","window.location.hash = 'nzskeletonavatar'",1,"anchor"],["id","nzskeletontitle"],["onclick","window.location.hash = 'nzskeletontitle'",1,"anchor"],["id","nzskeletonparagraph"],["onclick","window.location.hash = 'nzskeletonparagraph'",1,"anchor"],["id",'nz-skeleton-element-[nztype="button"]'],["onclick","window.location.hash = 'nz-skeleton-element-[nztype=\"button\"]'",1,"anchor"],["id",'nz-skeleton-element-[nztype="avatar"]'],["onclick","window.location.hash = 'nz-skeleton-element-[nztype=\"avatar\"]'",1,"anchor"],["id",'nz-skeleton-element-[nztype="input"]'],["onclick","window.location.hash = 'nz-skeleton-element-[nztype=\"input\"]'",1,"anchor"],["id",'nz-skeleton-element-[nztype="image"]'],["onclick","window.location.hash = 'nz-skeleton-element-[nztype=\"image\"]'",1,"anchor"]],template:function(t,a){1&t&&(e.TgZ(0,"article")(1,"nz-affix",0)(2,"nz-anchor",1),e.NdJ("nzClick",function(r){return a.goLink(r)}),e._UZ(3,"nz-link",2)(4,"nz-link",3)(5,"nz-link",4)(6,"nz-link",5)(7,"nz-link",6)(8,"nz-link",7)(9,"nz-link",8),e.qZA()(),e.TgZ(10,"section",9)(11,"h1"),e._uU(12,"Skeleton"),e._UZ(13,"span",10)(14,"span",11),e.TgZ(15,"a",12),e._UZ(16,"i",13),e.qZA()(),e.TgZ(17,"section",9),e.IAx(),e.TgZ(18,"p"),e._uU(19,"Provide a placeholder while you wait for content to load or visualize content that doesn't exist yet."),e.qZA(),e.TgZ(20,"h2",14)(21,"span"),e._uU(22,"When To Use"),e.qZA(),e.TgZ(23,"a",15),e._uU(24,"#"),e.qZA()(),e.TgZ(25,"ul")(26,"li"),e._uU(27," When resource needs long time loading, like low network speed."),e.qZA(),e.TgZ(28,"li"),e._uU(29," The component contains information, such as a List or Card."),e.qZA(),e.TgZ(30,"li"),e._uU(31," Only works when loading data for the first time."),e.qZA(),e.TgZ(32,"li"),e._uU(33," Could be replaced by Spin in any situation but can provide a better user experience."),e.qZA()(),e.TgZ(34,"pre",16)(35,"code")(36,"span",17),e._uU(37,"import"),e.qZA(),e._uU(38," "),e.TgZ(39,"span",18),e._uU(40,"{"),e.qZA(),e._uU(41," NzSkeletonModule "),e.TgZ(42,"span",18),e._uU(43,"}"),e.qZA(),e._uU(44," "),e.TgZ(45,"span",17),e._uU(46,"from"),e.qZA(),e._uU(47," "),e.TgZ(48,"span",19),e._uU(49,"'ng-zorro-antd/skeleton'"),e.qZA(),e.TgZ(50,"span",18),e._uU(51,";"),e.qZA()()(),e.fQ9(),e.qZA()(),e.TgZ(52,"nz-tabset",20)(53,"nz-tab",21)(54,"div",22)(55,"div",23)(56,"nz-code-box",24),e._UZ(57,"nz-demo-skeleton-basic",25),e.TgZ(58,"div",26),e.IAx(),e.TgZ(59,"p"),e._uU(60,"Basic usage."),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(61,"nz-code-box",27),e._UZ(62,"nz-demo-skeleton-complex",25),e.TgZ(63,"div",26),e.IAx(),e.TgZ(64,"p"),e._uU(65,"Complex combination with avatar and multiple paragraphs."),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(66,"nz-code-box",28),e._UZ(67,"nz-demo-skeleton-active",25),e.TgZ(68,"div",26),e.IAx(),e.TgZ(69,"p"),e._uU(70,"Display active animation."),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(71,"nz-code-box",29),e._UZ(72,"nz-demo-skeleton-element",25),e.TgZ(73,"div",26),e.IAx(),e.TgZ(74,"p"),e._uU(75,"Skeleton button, avatar, input and image."),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(76,"nz-code-box",30),e._UZ(77,"nz-demo-skeleton-children",25),e.TgZ(78,"div",26),e.IAx(),e.TgZ(79,"p"),e._uU(80,"Skeleton contains sub component."),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(81,"nz-code-box",31),e._UZ(82,"nz-demo-skeleton-list",25),e.TgZ(83,"div",26),e.IAx(),e.TgZ(84,"p"),e._uU(85,"Use skeleton in list component."),e.qZA(),e.fQ9(),e.qZA()()()()(),e.TgZ(86,"nz-tab",32),e._uU(87," Content of Tab Pane 2 "),e.qZA(),e._UZ(88,"nz-tab",33),e.qZA(),e.TgZ(89,"section",34),e.IAx(),e.TgZ(90,"h2",35)(91,"span"),e._uU(92,"API"),e.qZA(),e.TgZ(93,"a",36),e._uU(94,"#"),e.qZA()(),e.TgZ(95,"h3",37)(96,"span"),e._uU(97,"nz-skeleton"),e.qZA(),e.TgZ(98,"label",38),e._uU(99,"component"),e.qZA(),e.TgZ(100,"a",39),e._uU(101,"#"),e.qZA()(),e.TgZ(102,"table")(103,"thead")(104,"tr")(105,"th"),e._uU(106,"Property"),e.qZA(),e.TgZ(107,"th"),e._uU(108,"Description"),e.qZA(),e.TgZ(109,"th"),e._uU(110,"Type"),e.qZA(),e.TgZ(111,"th"),e._uU(112,"Default"),e.qZA()()(),e.TgZ(113,"tbody")(114,"tr")(115,"td")(116,"code"),e._uU(117,"[nzActive]"),e.qZA()(),e.TgZ(118,"td"),e._uU(119,"Show animation effect"),e.qZA(),e.TgZ(120,"td")(121,"code"),e._uU(122,"boolean"),e.qZA()(),e.TgZ(123,"td")(124,"code"),e._uU(125,"false"),e.qZA()()(),e.TgZ(126,"tr")(127,"td")(128,"code"),e._uU(129,"[nzAvatar]"),e.qZA()(),e.TgZ(130,"td"),e._uU(131,"Show avatar placeholder"),e.qZA(),e.TgZ(132,"td")(133,"code"),e._uU(134,"boolean | NzSkeletonAvatar"),e.qZA()(),e.TgZ(135,"td")(136,"code"),e._uU(137,"false"),e.qZA()()(),e.TgZ(138,"tr")(139,"td")(140,"code"),e._uU(141,"[nzLoading]"),e.qZA()(),e.TgZ(142,"td"),e._uU(143,"Display the skeleton when "),e.TgZ(144,"code"),e._uU(145,"true"),e.qZA()(),e.TgZ(146,"td")(147,"code"),e._uU(148,"boolean"),e.qZA()(),e.TgZ(149,"td"),e._uU(150,"-"),e.qZA()(),e.TgZ(151,"tr")(152,"td")(153,"code"),e._uU(154,"[nzParagraph]"),e.qZA()(),e.TgZ(155,"td"),e._uU(156,"Show the paragraph placeholder"),e.qZA(),e.TgZ(157,"td")(158,"code"),e._uU(159,"boolean | NzSkeletonParagraph"),e.qZA()(),e.TgZ(160,"td")(161,"code"),e._uU(162,"true"),e.qZA()()(),e.TgZ(163,"tr")(164,"td")(165,"code"),e._uU(166,"[nzTitle]"),e.qZA()(),e.TgZ(167,"td"),e._uU(168,"Show the title placeholder"),e.qZA(),e.TgZ(169,"td")(170,"code"),e._uU(171,"boolean | NzSkeletonTitle"),e.qZA()(),e.TgZ(172,"td")(173,"code"),e._uU(174,"true"),e.qZA()()(),e.TgZ(175,"tr")(176,"td")(177,"code"),e._uU(178,"[nzRound]"),e.qZA()(),e.TgZ(179,"td"),e._uU(180,"Show the paragraph and the title radius when "),e.TgZ(181,"code"),e._uU(182,"true"),e.qZA()(),e.TgZ(183,"td")(184,"code"),e._uU(185,"boolean"),e.qZA()(),e.TgZ(186,"td")(187,"code"),e._uU(188,"false"),e.qZA()()()()(),e.TgZ(189,"h3",40)(190,"span"),e._uU(191,"NzSkeletonAvatar"),e.qZA(),e.TgZ(192,"a",41),e._uU(193,"#"),e.qZA()(),e.TgZ(194,"table")(195,"thead")(196,"tr")(197,"th"),e._uU(198,"Property"),e.qZA(),e.TgZ(199,"th"),e._uU(200,"Description"),e.qZA(),e.TgZ(201,"th"),e._uU(202,"Type"),e.qZA(),e.TgZ(203,"th"),e._uU(204,"Default"),e.qZA()()(),e.TgZ(205,"tbody")(206,"tr")(207,"td")(208,"code"),e._uU(209,"size"),e.qZA()(),e.TgZ(210,"td"),e._uU(211,"Set the avatar size"),e.qZA(),e.TgZ(212,"td"),e._uU(213,"`number"),e.qZA(),e.TgZ(214,"td"),e._uU(215,"\\ 'large' | 'small' | 'default'`"),e.qZA()(),e.TgZ(216,"tr")(217,"td")(218,"code"),e._uU(219,"shape"),e.qZA()(),e.TgZ(220,"td"),e._uU(221,"Set the avatar shape"),e.qZA(),e.TgZ(222,"td")(223,"code"),e._uU(224,"'circle' | 'square'"),e.qZA()(),e.TgZ(225,"td"),e._uU(226,"-"),e.qZA()()()(),e.TgZ(227,"h3",42)(228,"span"),e._uU(229,"NzSkeletonTitle"),e.qZA(),e.TgZ(230,"a",43),e._uU(231,"#"),e.qZA()(),e.TgZ(232,"table")(233,"thead")(234,"tr")(235,"th"),e._uU(236,"Property"),e.qZA(),e.TgZ(237,"th"),e._uU(238,"Description"),e.qZA(),e.TgZ(239,"th"),e._uU(240,"Type"),e.qZA(),e.TgZ(241,"th"),e._uU(242,"Default"),e.qZA()()(),e.TgZ(243,"tbody")(244,"tr")(245,"td")(246,"code"),e._uU(247,"width"),e.qZA()(),e.TgZ(248,"td"),e._uU(249,"Set the title width"),e.qZA(),e.TgZ(250,"td")(251,"code"),e._uU(252,"number | string"),e.qZA()(),e.TgZ(253,"td"),e._uU(254,"-"),e.qZA()()()(),e.TgZ(255,"h3",44)(256,"span"),e._uU(257,"NzSkeletonParagraph"),e.qZA(),e.TgZ(258,"a",45),e._uU(259,"#"),e.qZA()(),e.TgZ(260,"table")(261,"thead")(262,"tr")(263,"th"),e._uU(264,"Property"),e.qZA(),e.TgZ(265,"th"),e._uU(266,"Description"),e.qZA(),e.TgZ(267,"th"),e._uU(268,"Type"),e.qZA(),e.TgZ(269,"th"),e._uU(270,"Default"),e.qZA()()(),e.TgZ(271,"tbody")(272,"tr")(273,"td")(274,"code"),e._uU(275,"rows"),e.qZA()(),e.TgZ(276,"td"),e._uU(277,"Set the row count of the paragraph"),e.qZA(),e.TgZ(278,"td")(279,"code"),e._uU(280,"number"),e.qZA()(),e.TgZ(281,"td"),e._uU(282,"-"),e.qZA()(),e.TgZ(283,"tr")(284,"td")(285,"code"),e._uU(286,"width"),e.qZA()(),e.TgZ(287,"td"),e._uU(288,"Set the width of the paragraph. When width is an Array, it can set the width of each row. Otherwise, only set the last row width"),e.qZA(),e.TgZ(289,"td")(290,"code"),e._uU(291,"number | string | Array<number | string>"),e.qZA()(),e.TgZ(292,"td"),e._uU(293,"-"),e.qZA()()()(),e.TgZ(294,"h3",46)(295,"span"),e._uU(296,'nz-skeleton-element [nzType="button"]'),e.qZA(),e.TgZ(297,"label",38),e._uU(298,"component"),e.qZA(),e.TgZ(299,"a",47),e._uU(300,"#"),e.qZA()(),e.TgZ(301,"table")(302,"thead")(303,"tr")(304,"th"),e._uU(305,"Property"),e.qZA(),e.TgZ(306,"th"),e._uU(307,"Description"),e.qZA(),e.TgZ(308,"th"),e._uU(309,"Type"),e.qZA(),e.TgZ(310,"th"),e._uU(311,"Default"),e.qZA()()(),e.TgZ(312,"tbody")(313,"tr")(314,"td")(315,"code"),e._uU(316,"[nzActive]"),e.qZA()(),e.TgZ(317,"td"),e._uU(318,"Show animation effect"),e.qZA(),e.TgZ(319,"td")(320,"code"),e._uU(321,"boolean"),e.qZA()(),e.TgZ(322,"td")(323,"code"),e._uU(324,"false"),e.qZA()()(),e.TgZ(325,"tr")(326,"td")(327,"code"),e._uU(328,"[nzSize]"),e.qZA()(),e.TgZ(329,"td"),e._uU(330,"Set the size"),e.qZA(),e.TgZ(331,"td")(332,"code"),e._uU(333,"'large' | 'small' | 'default'"),e.qZA()(),e.TgZ(334,"td")(335,"code"),e._uU(336,"'default'"),e.qZA()()(),e.TgZ(337,"tr")(338,"td")(339,"code"),e._uU(340,"[nzShape]"),e.qZA()(),e.TgZ(341,"td"),e._uU(342,"Set the shape"),e.qZA(),e.TgZ(343,"td")(344,"code"),e._uU(345,"'circle' | 'round' | 'default'"),e.qZA()(),e.TgZ(346,"td")(347,"code"),e._uU(348,"'default'"),e.qZA()()()()(),e.TgZ(349,"h3",48)(350,"span"),e._uU(351,'nz-skeleton-element [nzType="avatar"]'),e.qZA(),e.TgZ(352,"label",38),e._uU(353,"component"),e.qZA(),e.TgZ(354,"a",49),e._uU(355,"#"),e.qZA()(),e.TgZ(356,"table")(357,"thead")(358,"tr")(359,"th"),e._uU(360,"Property"),e.qZA(),e.TgZ(361,"th"),e._uU(362,"Description"),e.qZA(),e.TgZ(363,"th"),e._uU(364,"Type"),e.qZA(),e.TgZ(365,"th"),e._uU(366,"Default"),e.qZA()()(),e.TgZ(367,"tbody")(368,"tr")(369,"td")(370,"code"),e._uU(371,"[nzActive]"),e.qZA()(),e.TgZ(372,"td"),e._uU(373,"Show animation effect"),e.qZA(),e.TgZ(374,"td")(375,"code"),e._uU(376,"boolean"),e.qZA()(),e.TgZ(377,"td")(378,"code"),e._uU(379,"false"),e.qZA()()(),e.TgZ(380,"tr")(381,"td")(382,"code"),e._uU(383,"[nzSize]"),e.qZA()(),e.TgZ(384,"td"),e._uU(385,"Set the size"),e.qZA(),e.TgZ(386,"td")(387,"code"),e._uU(388,"number | 'large' | 'small' | 'default'"),e.qZA()(),e.TgZ(389,"td")(390,"code"),e._uU(391,"'default'"),e.qZA()()(),e.TgZ(392,"tr")(393,"td")(394,"code"),e._uU(395,"[nzShape]"),e.qZA()(),e.TgZ(396,"td"),e._uU(397,"Set the shape"),e.qZA(),e.TgZ(398,"td")(399,"code"),e._uU(400,"'circle' | 'square'"),e.qZA()(),e.TgZ(401,"td")(402,"code"),e._uU(403,"'square'"),e.qZA()()()()(),e.TgZ(404,"h3",50)(405,"span"),e._uU(406,'nz-skeleton-element [nzType="input"]'),e.qZA(),e.TgZ(407,"label",38),e._uU(408,"component"),e.qZA(),e.TgZ(409,"a",51),e._uU(410,"#"),e.qZA()(),e.TgZ(411,"table")(412,"thead")(413,"tr")(414,"th"),e._uU(415,"Property"),e.qZA(),e.TgZ(416,"th"),e._uU(417,"Description"),e.qZA(),e.TgZ(418,"th"),e._uU(419,"Type"),e.qZA(),e.TgZ(420,"th"),e._uU(421,"Default"),e.qZA()()(),e.TgZ(422,"tbody")(423,"tr")(424,"td")(425,"code"),e._uU(426,"[nzActive]"),e.qZA()(),e.TgZ(427,"td"),e._uU(428,"Show animation effect"),e.qZA(),e.TgZ(429,"td")(430,"code"),e._uU(431,"boolean"),e.qZA()(),e.TgZ(432,"td")(433,"code"),e._uU(434,"false"),e.qZA()()(),e.TgZ(435,"tr")(436,"td")(437,"code"),e._uU(438,"[nzSize]"),e.qZA()(),e.TgZ(439,"td"),e._uU(440,"Set the size"),e.qZA(),e.TgZ(441,"td")(442,"code"),e._uU(443,"'large' | 'small' | 'default'"),e.qZA()(),e.TgZ(444,"td")(445,"code"),e._uU(446,"'default'"),e.qZA()()()()(),e.TgZ(447,"h3",52)(448,"span"),e._uU(449,'nz-skeleton-element [nzType="image"]'),e.qZA(),e.TgZ(450,"label",38),e._uU(451,"component"),e.qZA(),e.TgZ(452,"a",53),e._uU(453,"#"),e.qZA()(),e.TgZ(454,"table")(455,"thead")(456,"tr")(457,"th"),e._uU(458,"Property"),e.qZA(),e.TgZ(459,"th"),e._uU(460,"Description"),e.qZA(),e.TgZ(461,"th"),e._uU(462,"Type"),e.qZA(),e.TgZ(463,"th"),e._uU(464,"Default"),e.qZA()()(),e.TgZ(465,"tbody")(466,"tr")(467,"td")(468,"code"),e._uU(469,"[nzActive]"),e.qZA()(),e.TgZ(470,"td"),e._uU(471,"Show animation effect"),e.qZA(),e.TgZ(472,"td")(473,"code"),e._uU(474,"boolean"),e.qZA()(),e.TgZ(475,"td")(476,"code"),e._uU(477,"false"),e.qZA()()()()(),e.fQ9(),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("nzOffsetTop",16),e.xp6(1),e.Q6J("nzAffix",!1),e.xp6(52),e.Q6J("nzGutter",8),e.xp6(1),e.Q6J("nzSpan",24),e.xp6(1),e.Q6J("nzId","components-skeleton-demo-basic")("nzLink","components-skeleton-demo-basic")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/skeleton/demo/basic.md"),e.xp6(5),e.Q6J("nzId","components-skeleton-demo-complex")("nzLink","components-skeleton-demo-complex")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/skeleton/demo/complex.md"),e.xp6(5),e.Q6J("nzId","components-skeleton-demo-active")("nzLink","components-skeleton-demo-active")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/skeleton/demo/active.md"),e.xp6(5),e.Q6J("nzId","components-skeleton-demo-element")("nzLink","components-skeleton-demo-element")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/skeleton/demo/element.md"),e.xp6(5),e.Q6J("nzId","components-skeleton-demo-children")("nzLink","components-skeleton-demo-children")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/skeleton/demo/children.md"),e.xp6(5),e.Q6J("nzId","components-skeleton-demo-list")("nzLink","components-skeleton-demo-list")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/skeleton/demo/list.md"))},directives:[b.$,U.IT,U.Fp,g.Ls,_.w,k.xH,k.xw,m.SK,m.t3,h.G,x,D,N,Q,M,X],encapsulation:2}),n})(),Y=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[S.G,...v,q.Bz.forChild([{path:"en",component:W},{path:"zh",component:C}])]]}),n})()}}]);