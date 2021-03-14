(function(e){function t(t){for(var s,n,o=t[0],c=t[1],l=t[2],d=0,h=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&h.push(r[n][0]),r[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);u&&u(t);while(h.length)h.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],s=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(s=!1)}s&&(i.splice(t--,1),e=n(n.s=a[0]))}return e}var s={},r={app:0},i=[];function n(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=s,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(a,s,function(t){return e[t]}.bind(null,s));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/easter-game/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0da5":function(e,t,a){},"12e1":function(e,t,a){"use strict";a("458d")},"182a":function(e,t,a){},"2bbc":function(e,t,a){},"33a0":function(e,t,a){},4361:function(e,t,a){"use strict";a("b09f")},4426:function(e,t,a){"use strict";a("33a0")},"458d":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"app-overlay-bg-1"}),a("div",{staticClass:"app-overlay-bg-2"}),a("img",{attrs:{src:"assets/stretchLogo3.png",alt:""}}),e.isGameStarted?e._e():a("landing",{attrs:{startGame:e.startGame}}),e.isGameStarted&&e.user?a("div",{staticClass:"game-container"},[a("game-scene")],1):e._e()],1)},i=[],n=a("5530"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"canvas"}})},c=[],l=a("3835"),u=a("d4ec"),d=a("bee2"),h=a("262e"),m=a("2caf"),p=a("bc3a"),g=a.n(p),f=g.a.create({baseURL:"https://eastergameapp-api.azurewebsites.net/"}),b=f,v=a("2f62");s["a"].use(v["a"]);var y=new v["a"].Store({state:{userId:localStorage.getItem("userId")||"",users:[]},actions:{setUser:function(e,t){var a=e.commit;return b.post("/users",t).then((function(e){return a("setUser",e.data),e.data})).catch((function(e){throw new Error(e)}))},getUsers:function(e){var t=e.commit;return b.get("/users/score").then((function(e){t("setUsers",e.data)})).catch((function(e){throw new Error(e)}))}},mutations:{setUser:function(e,t){localStorage.setItem("userId",t._id),e.userId=t._id},setUsers:function(e,t){e.users=t}},getters:{getUser:function(e){return e.userId},getUsers:function(e){return e.users}}}),S=function(e){Object(h["a"])(a,e);var t=Object(m["a"])(a);function a(){var e;return Object(u["a"])(this,a),e=t.call(this,{key:"GameScene"}),e.player,e.isGameOver=!1,e.eggs,e.bombs,e.characterScale=2,e.eggScale=.7,e.bombScale=3,e.score=0,e.scoreText,e.gameOverText,e.timedEvent,e.timedEvent1,e.death,e}return Object(d["a"])(a,[{key:"preload",value:function(){this.isGameOver=!1,this.score=0,this.load.image("sky","assets/background/skyScaled.png"),this.load.image("mountain","assets/background/mountainScaled.png"),this.load.image("platform","assets/background/platform.png"),this.load.image("restart","assets/sprite/restart.png"),this.load.image("gameover","assets/sprite/gameover.png"),this.load.image("egg1","assets/sprite/egg-1.png"),this.load.image("egg2","assets/sprite/egg-2.png"),this.load.image("egg3","assets/sprite/egg-3.png"),this.load.image("egg4","assets/sprite/egg-4.png"),this.load.image("egg5","assets/sprite/egg-5.png"),this.load.image("egg6","assets/sprite/egg-6.png"),this.load.image("egg7","assets/sprite/egg-7.png"),this.load.image("egg8","assets/sprite/egg-7.png"),this.load.image("egg9","assets/sprite/egg-7.png"),this.load.image("egg10","assets/sprite/egg-7.png"),this.load.spritesheet("doux","assets/sprite/dude.png",{frameWidth:32,frameHeight:48}),this.load.spritesheet("bomb","assets/sprite/bombs.png",{frameWidth:14.5,frameHeight:12}),this.load.audio("pickup","assets/sound/pickup.wav"),this.load.audio("jump","assets/sound/jump.wav")}},{key:"create",value:function(){function e(){this.timedEvent.reset({delay:Phaser.Math.Between(1e3,5e3),callback:e,callbackScope:this,loop:!0});var t=["egg1","egg2","egg3","egg4","egg5","egg6","egg7","egg8","egg9","egg10"][Math.floor(10*Math.random())],a=this.eggs.create(800,Phaser.Math.Between(200,485),t);a.setScale(this.eggScale),a.setCircle(6.5),a.setBounceY(Phaser.Math.FloatBetween(.6,1.2)),this.eggs.setVelocityX(Phaser.Math.Between(-1e3,-300))}function t(){this.timedEvent1.reset({delay:Phaser.Math.Between(3e3,5e3),callback:t,callbackScope:this,loop:!0});var e=this.bombs.create(800,Phaser.Math.Between(300,485),"bomb");e.setScale(this.bombScale),e.setCircle(3),e.anims.play("boom",!0),e.setBounceY(1.2),this.bombs.setVelocityX(Phaser.Math.Between(-1e3,-300))}function a(e,t){t.destroy();var a=this.sound.add("pickup");a.play(),this.score+=100,this.scoreText.setText("SCORE: "+this.score)}function s(){var e=this;this.physics.pause(),this.isGameOver=!0,this.timedEvent.paused=!0,this.timedEvent1.paused=!0,this.player.setTint(16711680),this.player.anims.play("hurt");var t=localStorage.getItem("userId"),a={userId:t,score:this.score};b.patch("/users/".concat(a.userId,"/score"),{score:a.score}).then((function(t){t.data.isScoreChanged?y.dispatch("getUsers").then((function(){e.scene.start("ScoreScene")})).catch((function(e){console.error(e)})):e.scene.start("ScoreScene")})).catch((function(e){console.error(e)}))}this.background1=this.add.tileSprite(400,300,800,600,"sky"),this.background2=this.add.tileSprite(400,300,800,600,"mountain"),this.ground=this.add.tileSprite(400,568,800,100,"platform"),this.physics.add.existing(this.ground),this.ground.body.immovable=!0,this.ground.body.moves=!1,this.player=this.physics.add.sprite(100,450,"doux"),this.player.getBounds(),this.player.setBounce(.2),this.player.setCollideWorldBounds(!0),this.player.setScale(this.characterScale),this.eggs=this.physics.add.group(),this.bombs=this.physics.add.group(),this.timedEvent=this.time.addEvent({delay:1e3,callback:e,callbackScope:this,loop:!0}),this.timedEvent1=this.time.addEvent({delay:3e3,callback:t,callbackScope:this,loop:!0}),this.anims.create({key:"run",frames:this.anims.generateFrameNumbers("doux",{start:5,end:9}),frameRate:10,repeat:-1}),this.anims.create({key:"hurt",frames:this.anims.generateFrameNumbers("doux",{start:4,end:4}),frameRate:10,repeat:-1}),this.anims.create({key:"boom",frames:this.anims.generateFrameNumbers("bomb",{start:0,end:3}),frameRate:10,repeat:-1}),this.scoreText=this.add.text(16,16,"SCORE: 0",{fontSize:"32px",fill:"#000"}),this.physics.add.collider(this.player,this.ground),this.physics.add.collider(this.eggs,this.ground),this.physics.add.collider(this.bombs,this.ground),this.physics.add.overlap(this.player,this.eggs,a,null,this),this.physics.add.collider(this.player,this.bombs,s,null,this),this.cameras.main.startFollow(this.player,!0,.05,.05),this.cameras.main.setBounds(0,0,800,600)}},{key:"update",value:function(){if(!1===this.isGameOver){this.score+=1,this.scoreText.setText("SCORE: "+this.score);var e=this.input.keyboard.createCursorKeys();if(this.player.anims.play("run",!0),e.right.isDown?(this.player.setVelocityX(200),this.player.flipX=!1):e.left.isDown?this.player.setVelocityX(-260):this.player.setVelocityX(0),e.up.isDown&&this.player.body.touching.down){var t=this.sound.add("jump");t.play(),this.player.setVelocityY(-600)}this.background1.tilePositionX+=10,this.background2.tilePositionX+=3,this.ground.tilePositionX+=10}}}]),a}(Phaser.Scene),x=S,O=(a("159b"),a("99af"),a("d624"),function(e){Object(h["a"])(a,e);var t=Object(m["a"])(a);function a(){var e;return Object(u["a"])(this,a),e=t.call(this,{key:"ScoreScene"}),e.playerText,e.text,e.death,e}return Object(d["a"])(a,[{key:"preload",value:function(){this.load.image("restart","assets/sprite/restart.png"),this.load.audio("death","assets/sound/death.mp3")}},{key:"create",value:function(){var e=this,t=this.add.image(400,500,"restart");this.death=this.sound.add("death"),this.death.play();var a=y.getters.getUsers,s={fontFamily:"Joystix Monospace",fontSize:"18px",fill:"#fff",align:"center"},r={fontFamily:"Joystix Monospace",fontSize:"24px",fill:"#fff"},i={fontFamily:"Joystix Monospace",fontSize:"36px",fill:"#e14eca"};this.add.text(258,180,"Highscore Top 5",r),this.add.text(260,70,"Game Over",i);var n=250;a.forEach((function(t,a){console.log(t),e.text=e.add.text(280,n,"".concat(a+1,". ").concat(t.username," - ").concat(t.score),s),n+=30})),console.log(a),console.log(this.text),t.setScale(4),t.setInteractive(),t.on("pointerdown",(function(){e.death.stop(),e.scene.start("GameScene")})),t.on("pointerover",(function(){return t.setTint(13421772)})),t.on("pointerout",(function(){return t.setTint(16777215)}))}}]),a}(Phaser.Scene)),k=O,_={type:Phaser.WEBGL,scale:{mode:Phaser.Scale.FIT,parent:"canvas",width:800,height:600},pixelArt:!0,physics:{default:"arcade",arcade:{gravity:{y:1e3},debug:!1}},scene:[x,k]},j=_,w={name:"game-scene",mounted:function(){new Phaser.Game(j),this.$nextTick((function(){var e=document.getElementsByTagName("CANVAS"),t=Object(l["a"])(e,1),a=t[0];a&&(a.style.maxHeight="100vh")}))}},$=w,E=(a("bfef"),a("2877")),U=Object(E["a"])($,o,c,!1,null,"2945772e",null),C=U.exports,G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"landing"},[a("div",{staticClass:"content-wrapper"},[e.showSiteInfo?a("site-info",{on:{createUser:e.checkIfUserExist}}):a("registration-form",{attrs:{startGame:e.startGame}})],1)])},P=[],B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[a("h1",[e._v("Easter game")]),a("h3",[e._v("Please enter name and email to play the game")]),a("game-input",{attrs:{placeholder:"Username",name:"username",label:"Username","aria-required":"",required:"",invalid:e.$v.model.username.$error,blur:e.$v.model.username.$touch},model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}},[e.$v.model.username.$dirty&&!e.$v.model.username.required?a("span",{staticClass:"input-error",attrs:{slot:"error"},slot:"error"},[e._v("Username required")]):e._e(),e.$v.model.username.$dirty&&!e.$v.model.username.maxLength?a("span",{staticClass:"input-error",attrs:{slot:"error"},slot:"error"},[e._v("Username can not contain more than 20 characters")]):e._e()]),a("game-input",{attrs:{placeholder:"Email",name:"email",label:"Email","aria-required":"",required:"",invalid:e.$v.model.email.$error,blur:e.$v.model.email.$touch},model:{value:e.model.email,callback:function(t){e.$set(e.model,"email",t)},expression:"model.email"}},[e.$v.model.email.$dirty&&!e.$v.model.email.required?a("span",{staticClass:"input-error",attrs:{slot:"error"},slot:"error"},[e._v("Email required")]):e._e(),e.$v.model.email.$dirty&&!e.$v.model.email.email?a("span",{staticClass:"input-error",attrs:{slot:"error"},slot:"error"},[e._v("Not a valid email")]):e._e()]),a("game-button",{attrs:{type:"submit",disabled:e.$v.$invalid}},[e._v("Start game")])],1)},I=[],T=a("b5ae"),q={name:"registration-form",props:{startGame:{type:Function}},data:function(){return{model:{username:"",email:""}}},validations:{model:{username:{required:T["required"],maxLength:Object(T["maxLength"])(20)},email:{required:T["required"],email:T["email"]}}},methods:Object(n["a"])(Object(n["a"])({},Object(v["b"])(["setUser"])),{},{submit:function(){var e=this;this.setUser(this.model).then((function(){e.startGame&&e.startGame()})).catch((function(e){console.error(e)}))}})},M=q,F=(a("12e1"),Object(E["a"])(M,B,I,!1,null,"22f82810",null)),X=F.exports,R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"site-info"},[a("h1",[e._v("Game info")]),a("p",[e._v(" Welcome to Stretch's easter game. Feel free to take part in this game and have the opportunity to win an easter egg! Create a user and compete for the highest score. ")]),a("game-button",{on:{click:e.createUser}},[e._v(e._s(e.gameButtonText))])],1)},L=[],V={name:"site-info",computed:Object(n["a"])(Object(n["a"])({},Object(v["c"])({user:"getUser"})),{},{gameButtonText:function(){return this.user?"Start Game":"Create User"}}),methods:{createUser:function(){this.$emit("createUser",!!this.user)}}},N=V,z=Object(E["a"])(N,R,L,!1,null,"2690062a",null),J=z.exports,W={name:"landing",components:{RegistrationForm:X,SiteInfo:J},props:{startGame:{type:Function}},data:function(){return{showSiteInfo:!0}},computed:Object(n["a"])({},Object(v["c"])({user:"getUser"})),methods:{checkIfUserExist:function(e){e?this.startGame&&this.startGame():this.showSiteInfo=!1}}},A=W,D=(a("787d"),Object(E["a"])(A,G,P,!1,null,"a8d1c866",null)),H=D.exports,Y={name:"App",components:{GameScene:C,Landing:H},data:function(){return{isGameStarted:!1}},created:function(){console.log("created"),this.getUsers()},computed:Object(n["a"])({},Object(v["c"])({user:"getUser"})),methods:Object(n["a"])(Object(n["a"])({},Object(v["b"])(["getUsers"])),{},{startGame:function(){this.isGameStarted=!0}})},K=Y,Q=(a("ad73"),Object(E["a"])(K,r,i,!1,null,"348484d3",null)),Z=Q.exports,ee=a("1dce"),te=a.n(ee),ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.classlist},[a("input",{staticClass:"input-field",attrs:{type:e.type,name:e.name,placeholder:e.label||e.placeholder,autocomplete:e.autocomplete,id:e.id},domProps:{value:e.value},on:{input:function(t){return e.onInput(t.target.value)},blur:e.onBlur}}),e.invalid?a("i",{staticClass:"fas fa-exclamation"}):e._e(),e.required&&!e.invalid&&""!==e.value?a("i",{staticClass:"fas fa-check"}):e._e(),a("label",{staticClass:"input-label",attrs:{for:e.id}},[e._v(" "+e._s(e.label)+" ")]),e._t("error")],2)},se=[],re={name:"game-input",props:{value:{default:null},id:{type:String,default:""},label:{type:String,default:""},placeholder:{type:String,default:"text..."},blur:{type:Function},invalid:{type:Boolean,default:!1},required:{type:Boolean,default:!1},type:{type:String,default:"text"},autocomplete:{type:String,default:"off"},name:{type:String,default:""}},computed:{classlist:function(){return["game-input",this.invalid&&"invalid",this.required&&"required"]}},methods:{onInput:function(e){this.$emit("input",e)},onBlur:function(){this.blur&&this.blur()}}},ie=re,ne=(a("4426"),Object(E["a"])(ie,ae,se,!1,null,"ab9dc846",null)),oe=ne.exports,ce=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"game-button",attrs:{disabled:e.disabled},on:{click:e.onClick}},[e._t("default")],2)},le=[],ue={name:"game-button",props:{type:{type:String,default:"button"},disabled:{type:Boolean,default:!1}},methods:{onClick:function(e){"submit"!==this.type&&this.$emit("click",e)}}},de=ue,he=(a("4361"),Object(E["a"])(de,ce,le,!1,null,"784ec404",null)),me=he.exports;s["a"].component("game-input",oe),s["a"].component("game-button",me);a("c1c3");s["a"].config.productionTip=!1,s["a"].use(te.a),new s["a"]({store:y,render:function(e){return e(Z)}}).$mount("#app")},"787d":function(e,t,a){"use strict";a("182a")},ad73:function(e,t,a){"use strict";a("0da5")},b09f:function(e,t,a){},bfef:function(e,t,a){"use strict";a("2bbc")},c1c3:function(e,t,a){},d624:function(e,t,a){}});
//# sourceMappingURL=app.e92355c0.js.map