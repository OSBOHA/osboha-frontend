"use strict";(self["webpackChunkOsboha180"]=self["webpackChunkOsboha180"]||[]).push([[8516],{22658:function(e,a,t){var r=t(66252),s=t(24150),o=t(79940);class i{async createGroup(e){try{const a=await s.hi.post("/group/create",e,{headers:{"Content-type":"multipart/form-data"}});return a.data.data}catch(a){(0,r.S3)(a)}}async getAll(){try{const e=await s.hi.get("/group");return await e.data}catch(e){return e}}async getById(e){try{const a=await s.hi.get(`group/show/${e}`);return a.data.data}catch(a){return a}}async getBooks(e){try{const a=await s.hi.get(`group/books/${e}`);return a.data.data}catch(a){(0,r.S3)(a)}}async getAllGroupExceptions(e){try{const a=await s.hi.get(`group/group-exceptions/${e}`);return a.data.data}catch(a){return a}}async exceptionsFilter(e,a){try{const t=await s.hi.get(`group/exceptions-filter/${e}/${a}`);return t.data.data}catch(t){return t}}async BasicMarksView(e){try{const a=await s.hi.get(`group/basic-mark-view/${e}`);return a.data.data}catch(a){return a}}async AllAchievements(e,a){try{const t=await s.hi.get(`group/all-achievements/${e}/${a}`);return t.data.data}catch(t){return t}}async AchievementAsPages(e,a){try{const t=await s.hi.get(`group/achievement-as-pages/${e}/${a}`);return t.data.data}catch(t){return t}}async searchForAmbassadorAchievement(e,a,t){try{const r=await s.hi.get(`group/search-for-ambassador-achievement/${e}/${a}/${t}`);return r.data.data}catch(r){return r}}async searchForAmbassador(e,a){try{const t=await s.hi.get(`group/search-for-ambassador/${e}/${a}`);return t.data.data}catch(t){return t}}async createLeaderRequest(e){try{const a=await s.hi.post("/group/create-leader-request",e,{headers:{"Content-type":"multipart/form-data"}});return a.data.data}catch(a){return a}}async lastLeaderRequest(e){try{const a=await s.hi.get(`group/last-leader-request/${e}`);return a.data.data}catch(a){return a}}async deleteById(e){try{return await s.hi["delete"](`/group/delete/${e}`)}catch(a){return a}}async update(e){}async getGroupByType(e){try{const a=await s.hi.post("/group/GroupByType",{type_id:e});return a.data}catch(a){return a}}async userGroups(){try{const e=await s.hi.get("/group/user-groups");return e.data.data}catch(e){return e}}async statistics(e){try{const a=await s.hi.get(`group/statistics/${e}`);return a.data.data}catch(a){(0,o.F)(a,"statistics")}}async thesesAndScreensByWeek(e,a){try{const t=await s.hi.get(`group/theses-and-screens-by-week/${e}/${a}`);return t.data.data}catch(t){(0,r.S3)(t)}}async monthAchievement(e,a){try{const t=await s.hi.get(`group/month-achievement/${e}/${a}`);return t.data.data}catch(t){(0,r.S3)(t)}}}a["Z"]=new i},2933:function(e,a,t){var r=t(24150);class s{resolve_porfile_img(e,a,t){let s=e+"_"+a;const o=`${r.v2}/profile-image/${t}/${s}`;return o}}a["Z"]=new s},79940:function(e,a,t){t.d(a,{F:function(){return s}});var r=t(1120);function s(e,a=""){throw console.log(`[ERROR] ${a} =>`,e.response.data),404===e.response.data.statusCode?r.Z.push({name:"NotFound"}):403===e.response.data.statusCode&&r.Z.push({name:"NotAuthorized"}),e}},92010:function(e,a,t){t.d(a,{Z:function(){return y}});var r=t(66252),s=t(3577);const o={class:"user-img img-fluid"},i=["src","title"],n=["src","title"],c={class:"d-flex align-items-center justify-content-between w-100"},d={class:"ms-3"},u={class:"mb-0"},l={class:"card-header-toolbar d-flex align-items-center"},m=(0,r._)("i",{class:"material-symbols-outlined md-18 me-1 text-primary"}," visibility ",-1);function p(e,a,t,p,g,h){const _=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",o,[t.record.user.user_profile.profile_picture?((0,r.wg)(),(0,r.iD)("img",{key:0,src:h.resolve_porfile_img("60x60",t.record.user.user_profile.profile_picture,t.record.user.user_profile.id),alt:"profile-img",class:"rounded-circle avatar-40",title:t.record.user.name},null,8,i)):((0,r.wg)(),(0,r.iD)("img",{key:1,src:h.resolve_porfile_img("60x60","ananimous_"+t.record.user.gender+".png","ananimous"),alt:"profile-img",title:t.record.user.name,class:"rounded-circle avatar-40"},null,8,n))]),(0,r._)("div",c,[(0,r._)("div",d,[(0,r._)("h6",null,(0,s.zw)(t.record.user.name),1),(0,r._)("p",u,"عدد الصفحات: "+(0,s.zw)(t.record.total_pages),1)]),(0,r._)("div",l,[(0,r.Wm)(_,{to:{name:"group.listOneAmbassadorReading",params:{ambassador_id:t.record.user_id}}},{default:(0,r.w5)((()=>[m])),_:1},8,["to"])])])],64)}var g=t(2933),h={name:"Achievement Pages",props:{record:{type:[Object],required:!0}},data(){return{}},methods:{resolve_porfile_img(e,a,t){return g.Z.resolve_porfile_img(e,a,t)}}},_=t(83744);const b=(0,_.Z)(h,[["render",p]]);var y=b},52535:function(e,a,t){t.d(a,{Z:function(){return A}});var r=t(66252),s=t(3577);const o=e=>((0,r.dD)("data-v-7475a8cb"),e=e(),(0,r.Cn)(),e),i={key:0,class:"d-flex align-items-center p-3"},n={class:"user-img img-fluid"},c=["src","title"],d=["src","title"],u={class:"d-flex align-items-center w-100 row"},l={class:"col-lg-3 col-md-3 col-sm-12 ms-3"},m={class:"d-inline-block"},p={class:"col-lg-5 col-md-5 col-sm-12 form-check mt-2"},g={class:"d-block w-100"},h={class:"progress"},_={class:"col-lg-3 col-md-3 col-sm-12 text-center"},b=o((()=>(0,r._)("span",{class:"badge bg-primary ms-0 ms-md-3 my-1 my-md-0 w-75 text-center",role:"button"},"عرض ",-1)));function y(e,a,t,o,y,v){const f=(0,r.up)("router-link");return t.ambassador?((0,r.wg)(),(0,r.iD)("li",i,[(0,r._)("div",n,[t.ambassador.user.user_profile.profile_picture?((0,r.wg)(),(0,r.iD)("img",{key:0,src:v.resolve_porfile_img("60x60",t.ambassador.user.user_profile.profile_picture,t.ambassador.user.user_profile.id),alt:"profile-img",class:"rounded-circle avatar-40",title:t.ambassador.user.name},null,8,c)):((0,r.wg)(),(0,r.iD)("img",{key:1,src:v.resolve_porfile_img("60x60","ananimous_"+t.ambassador.user.gender+".png","ananimous"),alt:"profile-img",title:t.ambassador.user.name,class:"rounded-circle avatar-40"},null,8,d))]),(0,r._)("div",u,[(0,r._)("div",l,[(0,r._)("h6",m,[(0,r._)("strong",null,(0,s.zw)(t.ambassador.user.name),1)])]),(0,r._)("div",p,[(0,r._)("div",g,[(0,r._)("div",h,[(0,r._)("div",{class:(0,s.C_)([`${v.markClass(t.ambassador.reading_mark+t.ambassador.writing_mark+t.ambassador.support)}`,"progress-bar progress-bar-striped"]),role:"progressbar","aria-valuenow":"90","aria-valuemin":"0","aria-valuemax":"100",style:(0,s.j5)(`width: ${t.ambassador.reading_mark+t.ambassador.writing_mark+t.ambassador.support}%;`)},null,6)])])]),(0,r._)("div",_,[(0,r.Wm)(f,{to:{name:"group.listOneAmbassadorReading",params:{ambassador_id:t.ambassador.user_id}}},{default:(0,r.w5)((()=>[b])),_:1},8,["to"])])])])):(0,r.kq)("",!0)}var v=t(2933),f={name:"Achievement Progress",props:{ambassador:{type:[Object],required:!0}},data(){return{}},methods:{markClass(e){switch(e){case 100:return"full-mark";case 0:return"zero-mark";default:return"incomplete"}},resolve_porfile_img(e,a,t){return v.Z.resolve_porfile_img(e,a,t)}}},w=t(83744);const k=(0,w.Z)(f,[["render",y],["__scopeId","data-v-7475a8cb"]]);var A=k},70973:function(e,a,t){t.d(a,{Z:function(){return m}});var r=t(66252),s=t(3577);const o={class:"card position-relative inner-page-bg",style:{direction:"rtl !important","background-color":"#cae0cd",height:"100px"}},i={class:"inner-page-title"},n={class:"text-dark"};function c(e,a,t,c,d,u){return(0,r.wg)(),(0,r.iD)("div",o,[(0,r._)("div",i,[(0,r._)("h3",n,"فريق المتابعة || "+(0,s.zw)(t.group_name),1),(0,r._)("p",null,[(0,r.Uk)(" عدد السفراء "),(0,r._)("strong",null,(0,s.zw)(t.group_users),1)])])])}var d={name:"Group Title",props:{group_id:{type:[Number],required:!0},group_name:{type:[String],required:!0},group_users:{type:[Number],required:!0}},data(){return[]}},u=t(83744);const l=(0,u.Z)(d,[["render",c]]);var m=l},68516:function(e,a,t){t.r(a),t.d(a,{default:function(){return oe}});var r=t(66252),s=t(84621);const o={key:0,class:"row"},i={class:"col-lg-3"},n={class:"col-lg-9"},c={key:1,class:"row"},d={class:"iq-card-body p-0"},u=(0,r._)("div",{class:"image-block text-center"},[(0,r._)("img",{src:s,class:"img-fluid rounded w-75 mt-3",alt:"no-amb"})],-1),l=(0,r._)("h4",{class:"text-center mt-3 mb-3"},"لا يوجد سفراء في هذه المجموعة",-1),m={class:"d-inline-block w-100 text-center col-12"},p=(0,r._)("span",null,"عودة",-1),g=(0,r._)("span",{class:"align-middle material-symbols-outlined"}," keyboard_return ",-1),h=[p,g];function _(e,a,t,s,p,g){const _=(0,r.up)("StatisticsList"),b=(0,r.up)("AmbassadorsAchievement"),y=(0,r.up)("iq-card");return p.group_users>0?((0,r.wg)(),(0,r.iD)("div",o,[(0,r._)("div",i,[(0,r.Wm)(_,{categoryList:p.categories},null,8,["categoryList"])]),(0,r._)("div",n,[p.ambassadorsAchievementList?((0,r.wg)(),(0,r.j4)(b,{key:0,ambassadorsAchievementList:p.ambassadorsAchievementList,group_id:p.group.id,group_name:p.group.name,group_users:p.group_users,most_read:p.most_read},null,8,["ambassadorsAchievementList","group_id","group_name","group_users","most_read"])):(0,r.kq)("",!0)])])):((0,r.wg)(),(0,r.iD)("div",c,[(0,r.Wm)(y,{class:"iq-card"},{default:(0,r.w5)((()=>[(0,r._)("div",d,[u,l,(0,r._)("div",m,[(0,r._)("a",{role:"button",onClick:a[0]||(a[0]=a=>e.$router.go(-1)),class:"d-block mt-3 mb-3 w-75 mx-auto"},h)])])])),_:1})]))}var b=t(3577);const y={class:"iq-todo-page"},v={class:"todo-task-list p-0 m-0"},f={class:"d-flex align-items-center justify-content-between"},w={class:"d-flex"},k={class:"container mt-3 d-flex align-items-center justify-content-center"},A=(0,r._)("i",{class:"material-symbols-outlined md-18 me-1"},"insights",-1);function $(e,a,t,s,o,i){const n=(0,r.up)("Doughnut"),c=(0,r.up)("router-link"),d=(0,r.up)("iq-card");return(0,r.wg)(),(0,r.j4)(d,null,{body:(0,r.w5)((()=>[(0,r._)("div",y,[(0,r._)("ul",v,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.categoryList,((e,a)=>((0,r.wg)(),(0,r.iD)("li",{key:a},[(0,r._)("a",f,[(0,r._)("div",w,[(0,r._)("i",{class:(0,b.C_)("material-symbols-outlined"),style:(0,b.j5)(`color:${e.color}`)},"bolt",4),(0,r._)("h5",null,(0,b.zw)(e.name),1)]),(0,r._)("div",{class:"d-inline p-2 text-light float-end rounded",style:(0,b.j5)(`background-color:${e.color}`)},(0,b.zw)(e.number),5)])])))),128))]),(0,r._)("div",k,[(0,r.Wm)(n,{id:"my-chart-id",options:o.chartOptions,data:o.chartData},null,8,["options","data"])]),(0,r.Wm)(c,{to:{name:"group.Statistics",params:{group_id:this.$route.params.group_id}},class:"btn d-flex align-items-center mt-3 text-white",style:{"background-color":"#2e328b"}},{default:(0,r.w5)((()=>[A,(0,r.Uk)(" احصائيات الأسبوع ")])),_:1},8,["to"])])])),_:1})}var x=t(32005),D=t(65750);D.kL.register(D.Dx,D.u,D.De,D.ZL,D.uw,D.f$,D.qi);var q={name:"StatisticsList",created(){this.chartData.datasets[0].data[0]=this.categoryList[0].number,this.chartData.datasets[0].data[1]=this.categoryList[1].number,this.chartData.datasets[0].data[2]=this.categoryList[2].number},props:["categoryList"],components:{Doughnut:x.$I},data(){return{search:"",project:{id:0,project_name:""},chartData:{labels:["100","90","صفر"],datasets:[{label:"معدل الأسبوع",data:[20,7,3],backgroundColor:["#22803f","#192f36","#831018"],hoverOffset:4}]},chartOptions:{responsive:!0}}}},L=t(83744);const Z=(0,L.Z)(q,[["render",$]]);var j=Z,O=t(49963);const C={class:"row"},W={class:"col-md-8"},S={class:"todo-task-lists m-0 p-0"},R={class:"input-group w-100 m-auto p-2"},z=(0,r._)("button",{type:"button",class:"btn btn-outline-primary"},[(0,r._)("span",{class:"material-symbols-outlined lh-1"}," search ")],-1),B={class:"d-block text-center mb-0 pb-0"},F=(0,r._)("span",{class:"me-3 btn",role:"button"},"عرض جميع الانجازات",-1);function G(e,a,t,s,o,i){const n=(0,r.up)("GroupTitle"),c=(0,r.up)("AchievementProgress"),d=(0,r.up)("router-link"),u=(0,r.up)("iq-card"),l=(0,r.up)("MostRead");return(0,r.wg)(),(0,r.iD)("div",C,[(0,r._)("div",W,[t.ambassadorsAchievementList&&t.ambassadorsAchievementList.length>0?((0,r.wg)(),(0,r.j4)(u,{key:0,"body-class":"p-0"},{body:(0,r.w5)((()=>[(0,r.Wm)(n,{"group_id:":t.group_id,group_name:t.group_name,group_users:t.group_users},null,8,["group_id:","group_name","group_users"]),(0,r._)("ul",S,[(0,r._)("form",null,[(0,r._)("div",R,[(0,r.wy)((0,r._)("input",{type:"search",class:"form-control rounded",placeholder:"ابحث عن سفير","aria-label":"Search","aria-describedby":"search-addon",onInput:a[0]||(a[0]=e=>i.searchForAmbassadorAchievement()),"onUpdate:modelValue":a[1]||(a[1]=e=>o.ambassador_name=e)},null,544),[[O.nr,o.ambassador_name]]),z])]),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.achievementList,((e,a)=>((0,r.wg)(),(0,r.j4)(c,{key:a,ambassador:e},null,8,["ambassador"])))),128)),(0,r._)("li",B,[(0,r.Wm)(d,{to:{name:"group.listAllAmbassadorAchievements",params:{group_id:t.group_id}}},{default:(0,r.w5)((()=>[F])),_:1},8,["to"])])])])),_:1})):(0,r.kq)("",!0)]),t.most_read?((0,r.wg)(),(0,r.j4)(l,{key:0,most_read:t.most_read},null,8,["most_read"])):(0,r.kq)("",!0)])}var P=t(70973),I=t(52535);const N={key:0,class:"col-md-4"},T={class:"iq-todo-right"},M={class:"iq-todo-friendlist mt-3"},H={class:"suggestions-lists m-0 p-0"},U={class:"container mt-3 mb-3 d-flex align-items-center justify-content-center",hight:"200px"},Y=(0,r._)("i",{class:"material-symbols-outlined md-18 me-1"}," patient_list ",-1);function K(e,a,t,s,o,i){const n=(0,r.up)("AchievementPages"),c=(0,r.up)("Bar"),d=(0,r.up)("router-link"),u=(0,r.up)("iq-card");return t.most_read?((0,r.wg)(),(0,r.iD)("div",N,[(0,r.Wm)(u,null,{body:(0,r.w5)((()=>[(0,r._)("div",T,[(0,r._)("div",M,[(0,r._)("ul",H,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.most_read.slice(0,2),((e,a)=>((0,r.wg)(),(0,r.iD)("li",{class:"d-flex mb-4 align-items-center",key:a},[(0,r.Wm)(n,{record:e},null,8,["record"])])))),128))]),(0,r._)("div",U,[(0,r.Wm)(c,{id:"my-chart-id",options:o.chartOptions,data:o.chartData,height:500,width:500},null,8,["options","data"])]),(0,r.Wm)(d,{to:{name:"group.achievementAsPages",params:{group_id:o.group_id}},class:"btn text-white d-flex align-items-center",style:{"background-color":"#2e328b"}},{default:(0,r.w5)((()=>[Y,(0,r.Uk)(" عرض الكل ")])),_:1},8,["to"])])])])),_:1})])):(0,r.kq)("",!0)}var V=t(92010);D.kL.register(D.Dx,D.u,D.De,D.ZL,D.uw,D.f$,D.qi);var E={name:"Most Read",components:{Bar:x.$Q,AchievementPages:V.Z},created(){if(this.most_read)for(let e=0;e<this.most_read.length;e++)this.chartData.datasets[0].data[e]=this.most_read[e].total_pages,this.chartData.labels[e]=this.most_read[e].user.name},props:{most_read:{type:[Object],required:!0}},data(){return{group_id:this.$route.params.group_id,chartData:{labels:[],datasets:[{label:"قراءة السفراء",backgroundColor:"#1d1a55",data:[],borderWidth:2,borderRadius:5,borderSkipped:!1}]},chartOptions:{responsive:!0}}}};const Q=(0,L.Z)(E,[["render",K]]);var J=Q,X=t(22658);D.kL.register(D.Dx,D.u,D.De,D.ZL,D.uw,D.f$,D.qi);var ee={name:"General Achievment",components:{GroupTitle:P.Z,MostRead:J,AchievementProgress:I.Z},created(){this.achievementList=this.ambassadorsAchievementList},props:{ambassadorsAchievementList:{type:[Object],required:!0},category:{type:[Object],required:!0},group_id:{type:[Number],required:!0},group_name:{type:[String],required:!0},group_users:{type:[Number],required:!0},most_read:{type:[Object],required:!0}},data(){return{achievementList:[],ambassador_name:"",show:!1}},methods:{async searchForAmbassadorAchievement(){const e=await X.Z.searchForAmbassadorAchievement(this.ambassador_name,this.$route.params.group_id,"current");this.achievementList=e.ambassador_achievement}}};const ae=(0,L.Z)(ee,[["render",G]]);var te=ae,re={name:"Team Reading Info",async created(){try{const e=await X.Z.BasicMarksView(this.group_id);this.group=e.group,this.group_users=e.group_users,this.categories[0].number=e.full,this.categories[1].number=e.incomplete,this.categories[2].number=e.zero,this.ambassadorsAchievementList=e.random_achievement,this.most_read=e.most_read}catch(e){console.log(e)}},components:{StatisticsList:j,AmbassadorsAchievement:te},data(){return{group_id:this.$route.params.group_id,group:[],group_users:0,categories:[{id:1,name:"انجاز كامل",color:"#22803f",number:20},{id:2,name:"انجاز ناقص",color:"#192f36",number:7},{id:3,name:"انجاز صفر",color:"#831018",number:3}],ambassadorsAchievementList:null,most_read:null}}};const se=(0,L.Z)(re,[["render",_]]);var oe=se},84621:function(e,a,t){e.exports=t.p+"img/reader.b5157672.png"}}]);
//# sourceMappingURL=8516.d78640c3.js.map