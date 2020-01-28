(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{139:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return PureTaskListComponent}));var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1);let PureTaskListComponent=class PureTaskListComponent{constructor(){this.tasksInOrder=[],this.loading=!1,this.onPinTask=new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter,this.onArchiveTask=new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter}set tasks(arr){this.tasksInOrder=[...arr.filter(t=>"TASK_PINNED"===t.state),...arr.filter(t=>"TASK_PINNED"!==t.state)]}ngOnInit(){}};tslib__WEBPACK_IMPORTED_MODULE_0__.b([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()],PureTaskListComponent.prototype,"loading",void 0),tslib__WEBPACK_IMPORTED_MODULE_0__.b([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output)()],PureTaskListComponent.prototype,"onPinTask",void 0),tslib__WEBPACK_IMPORTED_MODULE_0__.b([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output)()],PureTaskListComponent.prototype,"onArchiveTask",void 0),tslib__WEBPACK_IMPORTED_MODULE_0__.b([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()],PureTaskListComponent.prototype,"tasks",null),PureTaskListComponent=tslib__WEBPACK_IMPORTED_MODULE_0__.b([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({selector:"app-pure-task-list",template:(__webpack_require__(197).default||__webpack_require__(197)).length?__webpack_require__(197).default||__webpack_require__(197):"",styles:[(__webpack_require__(198).default||__webpack_require__(198)).length?__webpack_require__(198).default||__webpack_require__(198):""]})],PureTaskListComponent)},195:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default='<div class="list-item {{ task?.state }}">\n  <label class="checkbox">\n    <input\n      type="checkbox"\n      [defaultChecked]="task?.state === \'TASK_ARCHIVED\'"\n      disabled="true"\n      name="checked"\n    />\n    <span class="checkbox-custom" (click)="onArchive(task.id)"></span>\n  </label>\n  <div class="title">\n    <input\n      type="text"\n      [value]="task?.title"\n      readonly="true"\n      placeholder="Input title"\n      [ngStyle]="{textOverflow:\'ellipsis\'}"\n    />\n  </div>\n  <div class="actions">\n    <a *ngIf="task?.state !== \'TASK_ARCHIVED\'" (click)="onPin(task.id)">\n      <span class="icon-star"></span>\n    </a>\n  </div>\n</div>\n'},196:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default=""},197:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default='<div class="list-items">\n  <app-task\n    *ngFor="let task of tasksInOrder"\n    [task]="task"\n    (onArchiveTask)="onArchiveTask.emit($event)"\n    (onPinTask)="onPinTask.emit($event)"\n  >\n  </app-task>\n\n  <div *ngIf="tasksInOrder.length === 0 && !loading" class="wrapper-message">\n    <span class="icon-check"></span>\n    <div class="title-message">You have no tasks</div>\n    <div class="subtitle-message">Sit back and relax</div>\n  </div>\n\n  <div *ngIf="loading">\n    <div *ngFor="let i of [1, 2, 3, 4, 5, 6]" class="loading-item">\n      <span class="glow-checkbox"></span>\n      <span class="glow-text"> <span>Loading</span> <span>cool</span> <span>state</span> </span>\n    </div>\n  </div>\n</div>\n'},198:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default=""},387:function(module,exports){function webpackEmptyAsyncContext(req){return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}))}webpackEmptyAsyncContext.keys=function(){return[]},webpackEmptyAsyncContext.resolve=webpackEmptyAsyncContext,module.exports=webpackEmptyAsyncContext,webpackEmptyAsyncContext.id=387},395:function(module,exports,__webpack_require__){__webpack_require__(396),__webpack_require__(541),__webpack_require__(542),__webpack_require__(691),module.exports=__webpack_require__(780)},460:function(module,exports){},62:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"actionsData",(function(){return actionsData})),__webpack_require__.d(__webpack_exports__,"taskData",(function(){return taskData})),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Pinned",(function(){return Pinned})),__webpack_require__.d(__webpack_exports__,"Archived",(function(){return Archived})),__webpack_require__.d(__webpack_exports__,"LongTitle",(function(){return LongTitle}));var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(281),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(210),_task_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(80);__webpack_exports__.default={title:"Task",decorators:[_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs],excludeStories:/.*Data$/};const actionsData={onPinTask:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)("onPinTask"),onArchiveTask:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)("onArchiveTask")},taskData={id:"1",title:"Test Task",state:"Task_INBOX",updated_at:new Date(2019,0,1,9,0)},Default=()=>({component:_task_component__WEBPACK_IMPORTED_MODULE_2__.a,props:{task:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.object)("task",Object.assign({},taskData)),onPinTask:actionsData.onPinTask,onArchiveTask:actionsData.onArchiveTask}}),Pinned=()=>({component:_task_component__WEBPACK_IMPORTED_MODULE_2__.a,props:{task:Object.assign({},taskData,{state:"TASK_PINNED"}),onPinTask:actionsData.onPinTask,onArchiveTask:actionsData.onArchiveTask}}),Archived=()=>({component:_task_component__WEBPACK_IMPORTED_MODULE_2__.a,props:{task:Object.assign({},taskData,{state:"TASK_ARCHIVED"}),onPinTask:actionsData.onPinTask,onArchiveTask:actionsData.onArchiveTask}}),LongTitle=()=>({component:_task_component__WEBPACK_IMPORTED_MODULE_2__.a,props:{task:Object.assign({},taskData,{title:"This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!"}),onPinTask:actionsData.onPinTask,onArchiveTask:actionsData.onArchiveTask}})},691:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(133);module._StorybookPreserveDecorators=!0,Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(766)],module)}.call(this,__webpack_require__(692)(module))},766:function(module,exports,__webpack_require__){var map={"./components/pure-inbox-screen/pure-inbox-screen.stories.ts":783,"./components/pure-task-list/pure-task-list.stories.ts":767,"./components/task/task.stories.ts":62};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=766},767:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"defaultTasksData",(function(){return defaultTasksData})),__webpack_require__.d(__webpack_exports__,"withPinnedTasksData",(function(){return withPinnedTasksData})),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"WithPinnedTasks",(function(){return WithPinnedTasks})),__webpack_require__.d(__webpack_exports__,"Loading",(function(){return Loading})),__webpack_require__.d(__webpack_exports__,"Empty",(function(){return Empty}));var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(133),_angular_common__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(12),_pure_task_list_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(139),_task_task_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(80),_task_task_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(62);__webpack_exports__.default={title:"PureTaskList",excludeStories:/.*Data$/,decorators:[Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({declarations:[_pure_task_list_component__WEBPACK_IMPORTED_MODULE_2__.a,_task_task_component__WEBPACK_IMPORTED_MODULE_3__.a],imports:[_angular_common__WEBPACK_IMPORTED_MODULE_1__.a]})]};const defaultTasksData=[Object.assign({},_task_task_stories__WEBPACK_IMPORTED_MODULE_4__.taskData,{id:"1",title:"Task 1"}),Object.assign({},_task_task_stories__WEBPACK_IMPORTED_MODULE_4__.taskData,{id:"2",title:"Task 2"}),Object.assign({},_task_task_stories__WEBPACK_IMPORTED_MODULE_4__.taskData,{id:"3",title:"Task 3"}),Object.assign({},_task_task_stories__WEBPACK_IMPORTED_MODULE_4__.taskData,{id:"4",title:"Task 4"}),Object.assign({},_task_task_stories__WEBPACK_IMPORTED_MODULE_4__.taskData,{id:"5",title:"Task 5"}),Object.assign({},_task_task_stories__WEBPACK_IMPORTED_MODULE_4__.taskData,{id:"6",title:"Task 6"})],withPinnedTasksData=[...defaultTasksData.slice(0,5),{id:"6",title:"Task 6 (pinned)",state:"TASK_PINNED"}],Default=()=>({component:_pure_task_list_component__WEBPACK_IMPORTED_MODULE_2__.a,template:'\n  <div style="padding: 3rem">\n    <app-pure-task-list [tasks]="tasks" (onPinTask)="onPinTask($event)" (onArchiveTask)="onArchiveTask($event)"></app-pure-task-list>\n  </div>\n',props:{tasks:defaultTasksData,onPinTask:_task_task_stories__WEBPACK_IMPORTED_MODULE_4__.actionsData.onPinTask,onArchiveTask:_task_task_stories__WEBPACK_IMPORTED_MODULE_4__.actionsData.onArchiveTask}}),WithPinnedTasks=()=>({component:_pure_task_list_component__WEBPACK_IMPORTED_MODULE_2__.a,template:'\n    <div style="padding: 3rem">\n      <app-pure-task-list [tasks]="tasks" (onPinTask)="onPinTask($event)" (onArchiveTask)="onArchiveTask($event)"></app-pure-task-list>\n    </div>\n  ',props:{tasks:withPinnedTasksData,onPinTask:_task_task_stories__WEBPACK_IMPORTED_MODULE_4__.actionsData.onPinTask,onArchiveTask:_task_task_stories__WEBPACK_IMPORTED_MODULE_4__.actionsData.onArchiveTask}}),Loading=()=>({template:'\n        <div style="padding: 3rem">\n          <app-pure-task-list [tasks]="[]" loading="true" (onPinTask)="onPinTask($event)" (onArchiveTask)="onArchiveTask($event)"></app-pure-task-list>\n        </div>\n      '}),Empty=()=>({template:'\n        <div style="padding: 3rem">\n          <app-pure-task-list [tasks]="[]" (onPinTask)="onPinTask($event)" (onArchiveTask)="onArchiveTask($event)"></app-pure-task-list>\n        </div>\n      '})},780:function(module,exports,__webpack_require__){var api=__webpack_require__(781),content=__webpack_require__(782);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1},exported=(api(content,options),content.locals?content.locals:{});module.exports=exported},782:function(module,exports){module.exports=[[module.i,'\n@import url("https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,800");\n@charset "UTF-8";\n/* You can add global styles to this file, and also import other style files */\n/* Reset.less\n * Props to Eric Meyer (meyerweb.com) for his CSS reset file. We\'re using an adapted version here\tthat cuts out some of the reset HTML elements we will never need here (i.e., dfn, samp, etc).\n * ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\ndd,\ndl,\ndt,\nli,\nol,\nul,\nfieldset,\nform,\nlabel,\nlegend,\nbutton,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-weight: normal;\n  font-style: normal;\n  font-size: 100%;\n  line-height: 1;\n  font-family: inherit;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nol,\nul {\n  list-style: none;\n}\nq:before,\nq:after,\nblockquote:before,\nblockquote:after {\n  content: "";\n}\nhtml {\n  font-size: 100%;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n}\na:focus {\n  outline: thin dotted;\n}\na:hover,\na:active {\n  outline: 0;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nnav,\nsection {\n  display: block;\n}\naudio,\ncanvas,\nvideo {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n}\naudio:not([controls]) {\n  display: none;\n}\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\nimg {\n  border: 0;\n  -ms-interpolation-mode: bicubic;\n}\nbutton,\ninput,\nselect,\ntextarea {\n  font-size: 100%;\n  margin: 0;\n  vertical-align: baseline;\n  *vertical-align: middle;\n}\nbutton,\ninput {\n  line-height: normal;\n  *overflow: visible;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\nbutton,\ninput[type=button],\ninput[type=reset],\ninput[type=submit] {\n  cursor: pointer;\n  -webkit-appearance: button;\n}\ninput[type=search] {\n  -webkit-appearance: textfield;\n  box-sizing: content-box;\n}\ninput[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\ntextarea {\n  overflow: auto;\n  vertical-align: top;\n}\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n            transform: rotate(359deg);\n  }\n}\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n            transform: rotate(359deg);\n  }\n}\n@-webkit-keyframes glow {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n@keyframes glow {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n.force-wrap {\n  word-wrap: break-word;\n  word-break: break-all;\n  -ms-word-break: break-all;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n}\n.type-light {\n  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-weight: 300;\n}\n.type-bold {\n  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-weight: 800;\n}\n.type-italic {\n  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-weight: 400;\n  font-style: italic;\n}\n* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-tap-highlight-color: transparent;\n}\nhtml,\nbutton,\ninput,\ntextarea,\nselect {\n  outline: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nbody {\n  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-style: 400;\n  color: #333;\n  font-size: 16px;\n  background-color: #26c6da;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-style: 400;\n  margin: 0;\n  padding: 0;\n}\nh1 {\n  font-size: 40px;\n  line-height: 48px;\n}\nh2 {\n  font-size: 28px;\n  line-height: 32px;\n}\nh3 {\n  font-size: 24px;\n  line-height: 28px;\n}\nh4 {\n  font-size: 20px;\n  line-height: 24px;\n}\nh5 {\n  font-size: 14px;\n  line-height: 20px;\n  color: #ccc;\n  text-transform: uppercase;\n}\nh6 {\n  color: #aaa;\n}\np {\n  font-size: 16px;\n  line-height: 24px;\n}\nsub,\nsup {\n  font-size: 0.8em;\n}\nsub {\n  bottom: -0.2em;\n}\nsup {\n  top: -0.2em;\n}\nb {\n  font-weight: bold;\n}\nem {\n  font-style: italic;\n}\ninput[type=text],\ninput[type=email],\ninput[type=password],\ntextarea {\n  font-size: 14px;\n  line-height: 20px;\n  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-style: 400;\n  padding: 0.75rem 0;\n  line-height: 1.5rem !important;\n  border: none;\n  border-radius: 0;\n  box-sizing: border-box;\n  color: #333;\n  outline: none;\n}\ninput[type=text] ::-webkit-input-placeholder,\ninput[type=email] ::-webkit-input-placeholder,\ninput[type=password] ::-webkit-input-placeholder,\ntextarea ::-webkit-input-placeholder {\n  color: #778b91;\n}\ninput[type=text] ::-moz-placeholder,\ninput[type=email] ::-moz-placeholder,\ninput[type=password] ::-moz-placeholder,\ntextarea ::-moz-placeholder {\n  color: #778b91;\n}\ninput[type=text] ::-ms-input-placeholder,\ninput[type=email] ::-ms-input-placeholder,\ninput[type=password] ::-ms-input-placeholder,\ntextarea ::-ms-input-placeholder {\n  color: #778b91;\n}\ninput[type=text] ::placeholder,\ninput[type=email] ::placeholder,\ninput[type=password] ::placeholder,\ntextarea ::placeholder {\n  color: #778b91;\n}\ninput[type=text][disabled],\ninput[type=email][disabled],\ninput[type=password][disabled],\ntextarea[disabled] {\n  opacity: 0.5;\n}\ninput:-webkit-autofill {\n  -webkit-box-shadow: 0 0 0 1000px white inset;\n}\n.checkbox {\n  display: inline-block;\n  height: 3rem;\n  position: relative;\n  vertical-align: middle;\n  width: 44px;\n}\n.checkbox input[type=checkbox] {\n  font-size: 1em;\n  visibility: hidden;\n}\n.checkbox input[type=checkbox] + span:before {\n  position: absolute;\n  top: 50%;\n  right: auto;\n  bottom: auto;\n  left: 50%;\n  width: 0.85em;\n  height: 0.85em;\n  -webkit-transform: translate3d(-50%, -50%, 0);\n          transform: translate3d(-50%, -50%, 0);\n  background: transparent;\n  box-shadow: #2cc5d2 0 0 0 1px inset;\n  content: "";\n  display: block;\n}\n.checkbox input[type=checkbox]:checked + span:before {\n  font-size: 16px;\n  line-height: 24px;\n  box-shadow: none;\n  color: #2cc5d2;\n  margin-top: -1px;\n  font-family: "percolate";\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  content: "";\n}\n.input-symbol {\n  display: inline-block;\n  position: relative;\n}\n.input-symbol.error [class^=icon-],\n.input-symbol.error [class*=" icon-"] {\n  color: #ff4400;\n}\n.input-symbol [class^=icon-],\n.input-symbol [class*=" icon-"] {\n  left: 1em;\n}\n.input-symbol input {\n  padding-left: 3em;\n}\n.input-symbol input {\n  width: 100%;\n}\n.input-symbol input:focus + [class^=icon-],\n.input-symbol input:focus + [class*=" icon-"] {\n  color: #2cc5d2;\n}\n.input-symbol [class^=icon-],\n.input-symbol [class*=" icon-"] {\n  -webkit-transition: all 300ms ease-in;\n  transition: all 300ms ease-in;\n  -webkit-transform: translate3d(0, -50%, 0);\n          transform: translate3d(0, -50%, 0);\n  background: transparent;\n  color: #aaa;\n  font-size: 1em;\n  height: 1em;\n  position: absolute;\n  top: 50%;\n  width: 1em;\n}\n@font-face {\n  font-family: "percolate";\n  src: url("/assets/icon/percolate.eot?-5w3um4");\n  src: url("/assets/icon/percolate.eot?#iefix5w3um4") format("embedded-opentype"), url("/assets/icon/percolate.woff?5w3um4") format("woff"), url("/assets/icon/percolate.ttf?5w3um4") format("truetype"), url("/assets/icon/percolate.svg?5w3um4") format("svg");\n  font-weight: normal;\n  font-style: normal;\n}\n[class^=icon-],\n[class*=" icon-"] {\n  font-family: "percolate";\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.icon-graphql:before {\n  content: "";\n}\n.icon-redux:before {\n  content: "";\n}\n.icon-grid:before {\n  content: "";\n}\n.icon-redirect:before {\n  content: "";\n}\n.icon-grow:before {\n  content: "";\n}\n.icon-lightning:before {\n  content: "";\n}\n.icon-request-change:before {\n  content: "";\n}\n.icon-transfer:before {\n  content: "";\n}\n.icon-calendar:before {\n  content: "";\n}\n.icon-sidebar:before {\n  content: "";\n}\n.icon-tablet:before {\n  content: "";\n}\n.icon-atmosphere:before {\n  content: "";\n}\n.icon-browser:before {\n  content: "";\n}\n.icon-database:before {\n  content: "";\n}\n.icon-expand-alt:before {\n  content: "";\n}\n.icon-mobile:before {\n  content: "";\n}\n.icon-watch:before {\n  content: "";\n}\n.icon-home:before {\n  content: "";\n}\n.icon-user-alt:before {\n  content: "";\n}\n.icon-user:before {\n  content: "";\n}\n.icon-user-add:before {\n  content: "";\n}\n.icon-users:before {\n  content: "";\n}\n.icon-profile:before {\n  content: "";\n}\n.icon-bookmark:before {\n  content: "";\n}\n.icon-bookmark-hollow:before {\n  content: "";\n}\n.icon-star:before {\n  content: "";\n}\n.icon-star-hollow:before {\n  content: "";\n}\n.icon-circle:before {\n  content: "";\n}\n.icon-circle-hollow:before {\n  content: "";\n}\n.icon-heart:before {\n  content: "";\n}\n.icon-heart-hollow:before {\n  content: "";\n}\n.icon-face-happy:before {\n  content: "";\n}\n.icon-face-sad:before {\n  content: "";\n}\n.icon-face-neutral:before {\n  content: "";\n}\n.icon-lock:before {\n  content: "";\n}\n.icon-unlock:before {\n  content: "";\n}\n.icon-key:before {\n  content: "";\n}\n.icon-arrow-left-alt:before {\n  content: "";\n}\n.icon-arrow-right-alt:before {\n  content: "";\n}\n.icon-sync:before {\n  content: "";\n}\n.icon-reply:before {\n  content: "";\n}\n.icon-expand:before {\n  content: "";\n}\n.icon-arrow-left:before {\n  content: "";\n}\n.icon-arrow-up:before {\n  content: "";\n}\n.icon-arrow-down:before {\n  content: "";\n}\n.icon-arrow-right:before {\n  content: "";\n}\n.icon-chevron-down:before {\n  content: "";\n}\n.icon-back:before {\n  content: "";\n}\n.icon-download:before {\n  content: "";\n}\n.icon-upload:before {\n  content: "";\n}\n.icon-proceed:before {\n  content: "";\n}\n.icon-info:before {\n  content: "";\n}\n.icon-question:before {\n  content: "";\n}\n.icon-alert:before {\n  content: "";\n}\n.icon-edit:before {\n  content: "";\n}\n.icon-paintbrush:before {\n  content: "";\n}\n.icon-close:before {\n  content: "";\n}\n.icon-trash:before {\n  content: "";\n}\n.icon-cross:before {\n  content: "";\n}\n.icon-delete:before {\n  content: "";\n}\n.icon-power:before {\n  content: "";\n}\n.icon-add:before {\n  content: "";\n}\n.icon-plus:before {\n  content: "";\n}\n.icon-document:before {\n  content: "";\n}\n.icon-graph-line:before {\n  content: "";\n}\n.icon-doc-chart:before {\n  content: "";\n}\n.icon-doc-list:before {\n  content: "";\n}\n.icon-category:before {\n  content: "";\n}\n.icon-copy:before {\n  content: "";\n}\n.icon-book:before {\n  content: "";\n}\n.icon-certificate:before {\n  content: "";\n}\n.icon-print:before {\n  content: "";\n}\n.icon-list-unordered:before {\n  content: "";\n}\n.icon-graph-bar:before {\n  content: "";\n}\n.icon-menu:before {\n  content: "";\n}\n.icon-filter:before {\n  content: "";\n}\n.icon-ellipsis:before {\n  content: "";\n}\n.icon-cog:before {\n  content: "";\n}\n.icon-wrench:before {\n  content: "";\n}\n.icon-nut:before {\n  content: "";\n}\n.icon-camera:before {\n  content: "";\n}\n.icon-eye:before {\n  content: "";\n}\n.icon-photo:before {\n  content: "";\n}\n.icon-video:before {\n  content: "";\n}\n.icon-speaker:before {\n  content: "";\n}\n.icon-phone:before {\n  content: "";\n}\n.icon-flag:before {\n  content: "";\n}\n.icon-pin:before {\n  content: "";\n}\n.icon-compass:before {\n  content: "";\n}\n.icon-globe:before {\n  content: "";\n}\n.icon-location:before {\n  content: "";\n}\n.icon-search:before {\n  content: "";\n}\n.icon-timer:before {\n  content: "";\n}\n.icon-time:before {\n  content: "";\n}\n.icon-dashboard:before {\n  content: "";\n}\n.icon-hourglass:before {\n  content: "";\n}\n.icon-play:before {\n  content: "";\n}\n.icon-stop:before {\n  content: "";\n}\n.icon-email:before {\n  content: "";\n}\n.icon-comment:before {\n  content: "";\n}\n.icon-link:before {\n  content: "";\n}\n.icon-paperclip:before {\n  content: "";\n}\n.icon-box:before {\n  content: "";\n}\n.icon-structure:before {\n  content: "";\n}\n.icon-commit:before {\n  content: "";\n}\n.icon-cpu:before {\n  content: "";\n}\n.icon-memory:before {\n  content: "";\n}\n.icon-outbox:before {\n  content: "";\n}\n.icon-share:before {\n  content: "";\n}\n.icon-button:before {\n  content: "";\n}\n.icon-check:before {\n  content: "";\n}\n.icon-form:before {\n  content: "";\n}\n.icon-admin:before {\n  content: "";\n}\n.icon-paragraph:before {\n  content: "";\n}\n.icon-bell:before {\n  content: "";\n}\n.icon-rss:before {\n  content: "";\n}\n.icon-basket:before {\n  content: "";\n}\n.icon-credit:before {\n  content: "";\n}\n.icon-support:before {\n  content: "";\n}\n.icon-shield:before {\n  content: "";\n}\n.icon-beaker:before {\n  content: "";\n}\n.icon-google:before {\n  content: "";\n}\n.icon-gdrive:before {\n  content: "";\n}\n.icon-youtube:before {\n  content: "";\n}\n.icon-facebook:before {\n  content: "";\n}\n.icon-thumbs-up:before {\n  content: "";\n}\n.icon-twitter:before {\n  content: "";\n}\n.icon-github:before {\n  content: "";\n}\n.icon-meteor:before {\n  content: "";\n}\na {\n  -webkit-transition: all 200ms ease-in;\n  transition: all 200ms ease-in;\n  color: #5db9ff;\n  cursor: pointer;\n  text-decoration: none;\n}\na:hover {\n  color: #239da8;\n}\na:active {\n  color: #555;\n}\na:focus {\n  outline: none;\n}\n.list-heading {\n  letter-spacing: 0.3em;\n  text-indent: 0.3em;\n  text-transform: uppercase;\n  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-weight: 800;\n  font-size: 11px;\n  padding-left: 15px;\n  line-height: 40px;\n  background: #f8f8f8;\n  color: #aaa;\n}\n.list-heading .icon-sync {\n  opacity: 1;\n  -webkit-animation: spin 2s infinite linear;\n          animation: spin 2s infinite linear;\n  display: inline-block;\n  margin-right: 4px;\n}\n.list-item {\n  font-size: 14px;\n  line-height: 20px;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  height: 3rem;\n  width: 100%;\n  background: white;\n  -webkit-transition: all ease-out 150ms;\n  transition: all ease-out 150ms;\n}\n.list-item .title {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.list-item input[type=text] {\n  background: transparent;\n  width: 100%;\n}\n.list-item input[type=text]:focus {\n  cursor: text;\n}\n.list-item .actions {\n  -webkit-transition: all 200ms ease-in;\n  transition: all 200ms ease-in;\n  padding-right: 20px;\n}\n.list-item .actions a {\n  display: inline-block;\n  vertical-align: top;\n  text-align: center;\n  color: #eee;\n}\n.list-item .actions a:hover {\n  color: #2cc5d2;\n}\n.list-item .actions a:active {\n  color: #555;\n}\n.list-item .actions [class^=icon-] {\n  font-size: 16px;\n  line-height: 24px;\n  line-height: 3rem;\n  text-align: center;\n}\n.list-item.TASK_PINNED .icon-star {\n  color: #2cc5d2;\n}\n.list-item.TASK_ARCHIVED input[type=text] {\n  color: #aaa;\n}\n.list-item:hover {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#e5f9f7), to(#f0fffd));\n  background-image: linear-gradient(to bottom, #e5f9f7 0%, #f0fffd 100%);\n}\n.list-item:hover .checkbox {\n  cursor: pointer;\n}\n.list-item + .list-item {\n  border-top: 1px solid #f0f9fb;\n}\n.list-item.checked input[type=text] {\n  color: #ccc;\n  text-decoration: line-through;\n}\n.list-item.checked .delete-item {\n  display: inline-block;\n}\n.loading-item {\n  height: 3rem;\n  width: 100%;\n  background: white;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  line-height: 1rem;\n  padding-left: 16px;\n}\n.loading-item .glow-checkbox,\n.loading-item .glow-text span {\n  -webkit-animation: glow 1.5s ease-in-out infinite;\n          animation: glow 1.5s ease-in-out infinite;\n  background: #eee;\n  color: transparent;\n  cursor: progress;\n  display: inline-block;\n}\n.loading-item .glow-checkbox {\n  margin-right: 16px;\n  width: 12px;\n  height: 12px;\n}\n.loading-item + .loading-item {\n  border-top: 1px solid #f0f9fb;\n}\n.list-items {\n  position: relative;\n  background: white;\n  min-height: 288px;\n}\n.list-items .select-placeholder {\n  border: none;\n  width: 48px;\n}\n.wrapper-message {\n  position: absolute;\n  top: 45%;\n  right: 0;\n  bottom: auto;\n  left: 0;\n  width: auto;\n  height: auto;\n  -webkit-transform: translate3d(0, -50%, 0);\n          transform: translate3d(0, -50%, 0);\n  text-align: center;\n}\n.wrapper-message [class^=icon-],\n.wrapper-message [class*=" icon-"] {\n  font-size: 48px;\n  line-height: 56px;\n  color: #2cc5d2;\n  display: block;\n}\n.wrapper-message .title-message {\n  font-size: 16px;\n  line-height: 24px;\n  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-weight: 800;\n  color: #555;\n}\n.wrapper-message .subtitle-message {\n  font-size: 14px;\n  line-height: 20px;\n  color: #666;\n}\n.page.lists-show {\n  min-height: 100vh;\n  background: white;\n}\n.page.lists-show nav {\n  background: #d3edf4;\n  padding: 1.5rem 1.25rem;\n  text-align: center;\n}\n@media screen and (min-width: 40em) {\n  .page.lists-show nav {\n    text-align: left;\n  }\n}\n.page.lists-show nav .title-page {\n  font-size: 20px;\n  line-height: 24px;\n  line-height: 2rem;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.page.lists-show nav .title-page .title-wrapper {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-weight: 800;\n  color: #1c3f53;\n  display: inline-block;\n  vertical-align: top;\n  max-width: 100%;\n}',"",""]]},783:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var client=__webpack_require__(133),tslib_es6=__webpack_require__(0),core=__webpack_require__(1);let PureInboxScreenComponent=class PureInboxScreenComponent{constructor(){}ngOnInit(){}};tslib_es6.b([Object(core.Input)()],PureInboxScreenComponent.prototype,"error",void 0),PureInboxScreenComponent=tslib_es6.b([Object(core.Component)({selector:"app-pure-inbox-screen",template:'\n    <div *ngIf="error" class="page lists-show">\n      <div class="wrapper-message">\n        <span class="icon-face-sad"></span>\n        <div class="title-message">Oh no!</div>\n        <div class="subtitle-message">Something went wrong</div>\n      </div>\n    </div>\n\n    <div *ngIf="!error" class="page lists-show">\n      <nav>\n        <h1 class="title-page">\n          <span class="title-wrapper">Taskbox</span>\n        </h1>\n      </nav>\n      <app-task-list></app-task-list>\n    </div>\n  '})],PureInboxScreenComponent);var common=__webpack_require__(12),ngxs_store=__webpack_require__(50),task_component=__webpack_require__(80);const actions_ARCHIVE_TASK="ARCHIVE_TASK",actions_PIN_TASK="PIN_TASK",actions_ERROR="APP_ERROR";class ArchiveTask{constructor(payload){this.payload=payload}}ArchiveTask.type=actions_ARCHIVE_TASK;class PinTask{constructor(payload){this.payload=payload}}PinTask.type=actions_PIN_TASK;class AppError{constructor(payload){this.payload=payload}}AppError.type=actions_ERROR;let TasksState=class TasksState{static getAllTasks(state){const entities=state.entities;return Object.keys(entities).map(id=>entities[+id])}static getError(state){const{error:error}=state;return error}pinTask({patchState:patchState,getState:getState},{payload:payload}){const state=getState().entities;patchState({entities:Object.assign({},state,{[payload]:Object.assign({},state[payload],{state:"TASK_PINNED"})})})}archiveTask({patchState:patchState,getState:getState},{payload:payload}){const state=getState().entities;patchState({entities:Object.assign({},state,{[payload]:Object.assign({},state[payload],{state:"TASK_ARCHIVED"})})})}setAppError({patchState:patchState,getState:getState},{payload:payload}){patchState({error:!getState().error})}};tslib_es6.b([Object(ngxs_store.a)(PinTask)],TasksState.prototype,"pinTask",null),tslib_es6.b([Object(ngxs_store.a)(ArchiveTask)],TasksState.prototype,"archiveTask",null),tslib_es6.b([Object(ngxs_store.a)(AppError)],TasksState.prototype,"setAppError",null),tslib_es6.b([Object(ngxs_store.d)()],TasksState,"getAllTasks",null),tslib_es6.b([Object(ngxs_store.d)()],TasksState,"getError",null),TasksState=tslib_es6.b([Object(ngxs_store.e)({name:"tasks",defaults:{entities:{1:{id:"1",title:"Something",state:"TASK_INBOX"},2:{id:"2",title:"Something more",state:"TASK_INBOX"},3:{id:"3",title:"Something else",state:"TASK_INBOX"},4:{id:"4",title:"Something again",state:"TASK_INBOX"}},error:!1}})],TasksState);let task_list_component_TaskListComponent=class TaskListComponent{constructor(store){this.store=store}ngOnInit(){}archiveTask(id){this.store.dispatch(new ArchiveTask(id))}pinTask(id){this.store.dispatch(new PinTask(id))}};tslib_es6.b([Object(ngxs_store.c)(TasksState.getAllTasks)],task_list_component_TaskListComponent.prototype,"tasks$",void 0),task_list_component_TaskListComponent=tslib_es6.b([Object(core.Component)({selector:"app-task-list",template:'\n    <app-pure-task-list\n      [tasks]="tasks$ | async"\n      (onArchiveTask)="archiveTask($event)"\n      (onPinTask)="pinTask($event)"\n    ></app-pure-task-list>\n  '})],task_list_component_TaskListComponent);var pure_task_list_component=__webpack_require__(139);let TaskModule=class TaskModule{};TaskModule=tslib_es6.b([Object(core.NgModule)({imports:[common.a,ngxs_store.b.forFeature([TasksState])],exports:[task_component.a,task_list_component_TaskListComponent],declarations:[task_component.a,task_list_component_TaskListComponent,pure_task_list_component.a],providers:[]})],TaskModule),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"error",(function(){return error}));__webpack_exports__.default={title:"PureInboxScreen",decorators:[Object(client.moduleMetadata)({imports:[TaskModule,ngxs_store.b.forRoot([TasksState])],providers:[ngxs_store.f]})]};const Default=()=>({component:PureInboxScreenComponent}),error=()=>({component:PureInboxScreenComponent,props:{error:!0}})},80:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return TaskComponent}));var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1);let TaskComponent=class TaskComponent{constructor(){this.onPinTask=new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter,this.onArchiveTask=new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter}ngOnInit(){}onPin(id){this.onPinTask.emit(id)}onArchive(id){this.onArchiveTask.emit(id)}};tslib__WEBPACK_IMPORTED_MODULE_0__.b([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()],TaskComponent.prototype,"task",void 0),tslib__WEBPACK_IMPORTED_MODULE_0__.b([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output)()],TaskComponent.prototype,"onPinTask",void 0),tslib__WEBPACK_IMPORTED_MODULE_0__.b([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output)()],TaskComponent.prototype,"onArchiveTask",void 0),TaskComponent=tslib__WEBPACK_IMPORTED_MODULE_0__.b([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({selector:"app-task",template:(__webpack_require__(195).default||__webpack_require__(195)).length?__webpack_require__(195).default||__webpack_require__(195):"",styles:[(__webpack_require__(196).default||__webpack_require__(196)).length?__webpack_require__(196).default||__webpack_require__(196):""]})],TaskComponent)}},[[395,1,2]]]);
//# sourceMappingURL=main.d42d8a9c8b756e945546.bundle.js.map