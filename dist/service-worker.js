if(!self.define){let l,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const l=document.createElement("script");l.src=s,l.onload=i,document.head.appendChild(l)}else l=s,importScripts(s),i()})).then((()=>{let l=i[s];if(!l)throw new Error(`Module ${s} didn’t register its module`);return l})));self.define=(n,r)=>{const u=l||("document"in self?document.currentScript.src:"")||location.href;if(i[u])return;let e={};const o=l=>s(l,u),v={module:{uri:u},exports:e,require:o};i[u]=Promise.all(n.map((l=>v[l]||o(l)))).then((l=>(r(...l),e)))}}define(["./workbox-79ffe3e0"],(function(l){"use strict";l.setCacheNameDetails({prefix:"Osboha180"}),self.addEventListener("message",(l=>{l.data&&"SKIP_WAITING"===l.data.type&&self.skipWaiting()})),l.precacheAndRoute([{url:"/css/1360.87c9c986.css",revision:null},{url:"/css/2247.ae749e21.css",revision:null},{url:"/css/2275.8904bece.css",revision:null},{url:"/css/2357.e8b4a64b.css",revision:null},{url:"/css/2895.9f26d43b.css",revision:null},{url:"/css/3152.a14a9585.css",revision:null},{url:"/css/3265.9f26d43b.css",revision:null},{url:"/css/3391.6d9d81cd.css",revision:null},{url:"/css/408.9ad73ac4.css",revision:null},{url:"/css/4343.e62748f6.css",revision:null},{url:"/css/4431.ad90bb19.css",revision:null},{url:"/css/4607.4ca45dec.css",revision:null},{url:"/css/5297.1e7bfafb.css",revision:null},{url:"/css/5403.9f26d43b.css",revision:null},{url:"/css/596.ee75a3cb.css",revision:null},{url:"/css/6330.75257904.css",revision:null},{url:"/css/6337.9bd9088c.css",revision:null},{url:"/css/6725.faff838b.css",revision:null},{url:"/css/7011.ee75a3cb.css",revision:null},{url:"/css/7465.0b6f0f54.css",revision:null},{url:"/css/7494.7e067a7e.css",revision:null},{url:"/css/8516.faff838b.css",revision:null},{url:"/css/929.9d6bed5f.css",revision:null},{url:"/css/app.3eb0709f.css",revision:null},{url:"/css/chunk-vendors.4ffdf6b4.css",revision:null},{url:"/img/1.7afa917d.png",revision:null},{url:"/img/1260x954-2.ecc01852.jpg",revision:null},{url:"/img/1260x954-3.12f5f0b4.jpg",revision:null},{url:"/img/1260x954.f14936d7.jpg",revision:null},{url:"/img/150x150-3.ab8f8b4c.jpg",revision:null},{url:"/img/1900-475.fec4b75c.jpg",revision:null},{url:"/img/2-900x900.bdd69630.jpg",revision:null},{url:"/img/2.7afa917d.png",revision:null},{url:"/img/200x200-book.5a0360f9.png",revision:null},{url:"/img/3.7afa917d.png",revision:null},{url:"/img/403.84d6fe88.png",revision:null},{url:"/img/404.51b567d5.png",revision:null},{url:"/img/42.d8992d66.png",revision:null},{url:"/img/600x600-2.fe4f8a8c.jpg",revision:null},{url:"/img/600x600.0909d72c.jpg",revision:null},{url:"/img/710-450-2.30b62736.jpg",revision:null},{url:"/img/710-450.256f276e.jpg",revision:null},{url:"/img/710-950.0061c5df.jpg",revision:null},{url:"/img/800x533-2.52ab6741.jpg",revision:null},{url:"/img/800x533.900a36a1.jpg",revision:null},{url:"/img/900x900.c787c84d.jpg",revision:null},{url:"/img/add-user.df7b2fcd.png",revision:null},{url:"/img/approve-post.13e0fb77.png",revision:null},{url:"/img/audit_timer.f220f728.gif",revision:null},{url:"/img/avatar-01.304828cc.jpg",revision:null},{url:"/img/avatar-02.95a0de54.jpg",revision:null},{url:"/img/avatar-03.26870fd5.jpg",revision:null},{url:"/img/avatar-04.f7603e1d.jpg",revision:null},{url:"/img/avatar-05.5d33d3c7.jpg",revision:null},{url:"/img/b66a01924d385d285f271054a82686ed.3f852117.jpg",revision:null},{url:"/img/bg.ba309077.jpg",revision:null},{url:"/img/book-banner-2.d7cc109e.png",revision:null},{url:"/img/book-banner.6a2a5a9c.png",revision:null},{url:"/img/bruce-mars.2a5b92f1.jpg",revision:null},{url:"/img/chatBG.0c19ea5a.png",revision:null},{url:"/img/chatBG.c7d4d8d3.jpg",revision:null},{url:"/img/confirm_mail.5ae6eebd.png",revision:null},{url:"/img/current_book.4d2ae03c.png",revision:null},{url:"/img/dark-100.6d45ecf2.jpg",revision:null},{url:"/img/forgot-password.f2bbd80d.png",revision:null},{url:"/img/know-about-osboha-2.efa03904.png",revision:null},{url:"/img/latest-book.bf032c94.png",revision:null},{url:"/img/left-timer.96b16054.png",revision:null},{url:"/img/loader-dark.d0a0c446.png",revision:null},{url:"/img/loader.d0a0c446.png",revision:null},{url:"/img/login.9d4e8a60.png",revision:null},{url:"/img/logo-full.0748829a.png",revision:null},{url:"/img/logo-full2.0748829a.png",revision:null},{url:"/img/main_timer.460c34b9.gif",revision:null},{url:"/img/modify_timer.624d83f0.gif",revision:null},{url:"/img/more_users.58a2ee71.png",revision:null},{url:"/img/no-friend-req.36ea3495.png",revision:null},{url:"/img/no-friends.2bab3c44.png",revision:null},{url:"/img/no-team.67c02d1a.png",revision:null},{url:"/img/p1.fb5a8f84.jpg",revision:null},{url:"/img/p2.65c5c7c4.jpg",revision:null},{url:"/img/profile-bg.154b76eb.jpg",revision:null},{url:"/img/profile-bg2.04f5a0c3.jpg",revision:null},{url:"/img/profile-bg3.04f5a0c3.jpg",revision:null},{url:"/img/profile-bg4.04f5a0c3.jpg",revision:null},{url:"/img/profile-bg5.04f5a0c3.jpg",revision:null},{url:"/img/profile-bg6.4269bb1f.jpg",revision:null},{url:"/img/profile-bg7.04f5a0c3.jpg",revision:null},{url:"/img/profile-bg8.04f5a0c3.jpg",revision:null},{url:"/img/profile-bg9.04f5a0c3.jpg",revision:null},{url:"/img/profile-img.31f713f7.jpg",revision:null},{url:"/img/reader.b5157672.png",revision:null},{url:"/img/reading_list.1a92b0ea.png",revision:null},{url:"/img/request_amb.aa8e9207.png",revision:null},{url:"/img/reset-password.a4e75e8c.png",revision:null},{url:"/img/signup.28672785.png",revision:null},{url:"/img/social-media.1d521c05.png",revision:null},{url:"/img/team.77797c9b.png",revision:null},{url:"/img/update-forms.03f6433b.png",revision:null},{url:"/img/update-profile-info.63fb2ea0.png",revision:null},{url:"/img/upgrade-user.6fc5a363.png",revision:null},{url:"/index.html",revision:"c7962f4caf5cddbb3d4aae1ad1c2bdb1"},{url:"/js/1140.0d65068f.js",revision:null},{url:"/js/1360.e46a1f0b.js",revision:null},{url:"/js/1672.ea01e343.js",revision:null},{url:"/js/2005.2d536f47.js",revision:null},{url:"/js/2026.4bb3e976.js",revision:null},{url:"/js/2247.8df980fc.js",revision:null},{url:"/js/2275.34d62317.js",revision:null},{url:"/js/2305.b6b3340b.js",revision:null},{url:"/js/2357.29f343a2.js",revision:null},{url:"/js/2413.4044c171.js",revision:null},{url:"/js/2720.1402fe98.js",revision:null},{url:"/js/2823.47896a4a.js",revision:null},{url:"/js/2895.5c072819.js",revision:null},{url:"/js/3152.ef270fee.js",revision:null},{url:"/js/3217.97980e16.js",revision:null},{url:"/js/3265.7ddc5bac.js",revision:null},{url:"/js/3334.1aed9c82.js",revision:null},{url:"/js/3391.40ddb8a6.js",revision:null},{url:"/js/3449.fd4925c1.js",revision:null},{url:"/js/351.aa8bef82.js",revision:null},{url:"/js/381.ca24f2dd.js",revision:null},{url:"/js/3854.2abb77d8.js",revision:null},{url:"/js/398.e38d2e2a.js",revision:null},{url:"/js/4024.00917257.js",revision:null},{url:"/js/408.37d507f9.js",revision:null},{url:"/js/4343.933a8973.js",revision:null},{url:"/js/4431.025007d6.js",revision:null},{url:"/js/4493.edc31e01.js",revision:null},{url:"/js/4607.c34e1ae5.js",revision:null},{url:"/js/4694.d3507894.js",revision:null},{url:"/js/4945.2668e1e9.js",revision:null},{url:"/js/5297.9d0af581.js",revision:null},{url:"/js/5357.5fa58d94.js",revision:null},{url:"/js/5403.70c04b59.js",revision:null},{url:"/js/5572.c5daee2c.js",revision:null},{url:"/js/5630.e6f690ac.js",revision:null},{url:"/js/5938.9fca8758.js",revision:null},{url:"/js/5956.28b576fc.js",revision:null},{url:"/js/596.fa0dc35a.js",revision:null},{url:"/js/598.04a0a189.js",revision:null},{url:"/js/6062.086d1180.js",revision:null},{url:"/js/6078.542019d2.js",revision:null},{url:"/js/608.4f6cc9d2.js",revision:null},{url:"/js/6330.710b800a.js",revision:null},{url:"/js/6337.123bb339.js",revision:null},{url:"/js/6640.be6ed57e.js",revision:null},{url:"/js/6714.54d16c4b.js",revision:null},{url:"/js/6725.a6caa783.js",revision:null},{url:"/js/6769.dacb58e2.js",revision:null},{url:"/js/6912.1a7b1174.js",revision:null},{url:"/js/7011.c0694d6f.js",revision:null},{url:"/js/7144.a66c40c4.js",revision:null},{url:"/js/7465.78e627c8.js",revision:null},{url:"/js/7494.65e82369.js",revision:null},{url:"/js/7557.e77f93ac.js",revision:null},{url:"/js/7562.b7113605.js",revision:null},{url:"/js/7729.907bf230.js",revision:null},{url:"/js/794.daa47193.js",revision:null},{url:"/js/8209.49328e76.js",revision:null},{url:"/js/8516.d78640c3.js",revision:null},{url:"/js/8742.d3b1bbc0.js",revision:null},{url:"/js/896.3a242c94.js",revision:null},{url:"/js/9002.40e20238.js",revision:null},{url:"/js/929.a3d2e0e8.js",revision:null},{url:"/js/9348.8bda86fa.js",revision:null},{url:"/js/9585.d0a0c92c.js",revision:null},{url:"/js/9910.3e2a75dd.js",revision:null},{url:"/js/9996.4625e028.js",revision:null},{url:"/js/app.191a1475.js",revision:null},{url:"/js/chunk-vendors.f0963d9f.js",revision:null},{url:"/manifest.json",revision:"2bc839d4c60060cfcfc8bb470de0b978"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
