(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{299:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_react=__webpack_require__(0),_react2=_interopRequireDefault(_react),_propTypes2=_interopRequireDefault(__webpack_require__(288)),_classnames2=_interopRequireDefault(__webpack_require__(818)),_utils=__webpack_require__(819);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var ReactCodeInput=function(_Component){function ReactCodeInput(props){!function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,ReactCodeInput);var _this=function(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}(this,(ReactCodeInput.__proto__||Object.getPrototypeOf(ReactCodeInput)).call(this,props)),fields=props.fields,type=props.type,isValid=props.isValid,disabled=props.disabled,filterKeyCodes=props.filterKeyCodes,forceUppercase=props.forceUppercase,value=props.value;return forceUppercase&&(value=value.toUpperCase()),_this.state={value:value,fields:fields,type:type,input:[],isValid:isValid,disabled:disabled,filterKeyCodes:filterKeyCodes,defaultInputStyle:{fontFamily:"monospace",MozAppearance:"textfield",borderRadius:"6px",border:"1px solid",boxShadow:"0px 0px 10px 0px rgba(0,0,0,.10)",margin:"4px",paddingLeft:"8px",paddingRight:0,width:"36px",height:"42px",fontSize:"32px",boxSizing:"border-box"}},_this.state.input=_this.setInputArray(_this.state.value),_this.textInput=[],_this.uuid=(0,_utils.uuidv4)(),_this}return function(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}(ReactCodeInput,_Component),_createClass(ReactCodeInput,[{key:"UNSAFE_componentWillReceiveProps",value:function(nextProps){this.setState({isValid:nextProps.isValid,value:nextProps.value,disabled:nextProps.disabled,input:this.setInputArray(nextProps.value)})}},{key:"setInputArray",value:function(propsValue){propsValue=propsValue||"";for(var input=[],i=0;i<Number(this.state.fields);i+=1)if(i<32){var value=propsValue[i]||"";input.push(value)}return input}},{key:"handleBlur",value:function(e){this.handleTouch(e.target.value)}},{key:"handleTouch",value:function(value){var _props=this.props,touch=_props.touch,untouch=_props.untouch,name=_props.name;"function"==typeof touch&&"function"==typeof untouch&&(""===value?touch(name):untouch(name))}},{key:"handleChange",value:function(e){var _this2=this,_props2=this.props,filterChars=_props2.filterChars,filterCharsIsWhitelist=_props2.filterCharsIsWhitelist,value=String(e.target.value);this.props.forceUppercase&&(value=value.toUpperCase()),"number"===this.state.type&&(value=value.replace(/[^\d]/g,""));var fullValue=value=value.split("").filter((function(currChar){return filterCharsIsWhitelist?filterChars.includes(currChar):!filterChars.includes(currChar)})).join("");if(""!==value){var input=this.state.input.slice();value.length>1?value.split("").map((function(chart,i){return Number(e.target.dataset.id)+i<_this2.props.fields&&(input[Number(e.target.dataset.id)+i]=chart),!1})):input[Number(e.target.dataset.id)]=value,input.map((function(s,i){return _this2.textInput[i]&&(_this2.textInput[i].value=s),!1}));var newTarget=this.textInput[e.target.dataset.id<input.length?Number(e.target.dataset.id)+1:e.target.dataset.id];newTarget&&(newTarget.focus(),newTarget.select()),fullValue=input.join(""),this.setState({value:input.join(""),input:input})}this.props.onChange&&fullValue&&this.props.onChange(fullValue),this.handleTouch(fullValue)}},{key:"handleKeyDown",value:function(e){var target=Number(e.target.dataset.id),nextTarget=this.textInput[target+1],prevTarget=this.textInput[target-1],input=void 0,value=void 0;switch(this.state.filterKeyCodes.length>0&&this.state.filterKeyCodes.map((function(item){if(item===e.keyCode)return e.preventDefault(),!0})),e.keyCode){case 8:e.preventDefault(),this.textInput[target].value="",(input=this.state.input.slice())[target]="",value=input.join(""),this.setState({value:value,input:input}),""===this.textInput[target].value&&prevTarget&&(prevTarget.focus(),prevTarget.select()),this.props.onChange&&this.props.onChange(value);break;case 37:e.preventDefault(),prevTarget&&(prevTarget.focus(),prevTarget.select());break;case 39:e.preventDefault(),nextTarget&&(nextTarget.focus(),nextTarget.select());break;case 38:case 40:e.preventDefault();break;case 69:if("number"===e.target.type){e.preventDefault();break}}this.handleTouch(value)}},{key:"render",value:function(){var _this3=this,_props3=this.props,className=_props3.className,_props3$style=_props3.style,style=void 0===_props3$style?{}:_props3$style,_props3$inputStyle=_props3.inputStyle,inputStyle=void 0===_props3$inputStyle?{}:_props3$inputStyle,_props3$inputStyleInv=_props3.inputStyleInvalid,inputStyleInvalid=void 0===_props3$inputStyleInv?{}:_props3$inputStyleInv,type=_props3.type,autoFocus=_props3.autoFocus,pattern=_props3.pattern,inputMode=_props3.inputMode,_state=this.state,disabled=_state.disabled,input=_state.input,isValid=_state.isValid,defaultInputStyle=_state.defaultInputStyle,styles={container:_extends({display:"inline-block"},style),input:isValid?inputStyle:inputStyleInvalid};return className||0!==Object.keys(inputStyle).length||Object.assign(inputStyle,_extends({},defaultInputStyle,{color:"black",backgroundColor:"white",borderColor:"lightgrey"})),className||0!==Object.keys(inputStyleInvalid).length||Object.assign(inputStyleInvalid,_extends({},defaultInputStyle,{color:"#b94a48",backgroundColor:"#f2dede",borderColor:"#eed3d7"})),disabled&&Object.assign(styles.input,{cursor:"not-allowed",color:"lightgrey",borderColor:"lightgrey",backgroundColor:"#efeff1"}),_react2.default.createElement("div",{className:(0,_classnames2.default)(className,"react-code-input"),style:styles.container},input.map((function(value,i){return _react2.default.createElement("input",{ref:function(_ref){_this3.textInput[i]=_ref},id:_this3.uuid+"-"+i,"data-id":i,autoFocus:autoFocus&&0===i?"autoFocus":"",value:value,key:"input_"+i,type:type,min:0,max:9,maxLength:input.length===i+1?1:input.length,style:styles.input,autoComplete:"off",onFocus:function(e){return e.target.select(e)},onBlur:function(e){return _this3.handleBlur(e)},onChange:function(e){return _this3.handleChange(e)},onKeyDown:function(e){return _this3.handleKeyDown(e)},disabled:disabled,"data-valid":isValid,pattern:pattern,inputMode:inputMode})})))}}]),ReactCodeInput}(_react.Component);ReactCodeInput.defaultProps={autoFocus:!0,isValid:!0,disabled:!1,forceUppercase:!1,fields:4,value:"",type:"text",filterKeyCodes:[189,190],filterChars:["-","."],filterCharsIsWhitelist:!1},ReactCodeInput.propTypes={type:_propTypes2.default.oneOf(["text","number","password","tel"]),fields:_propTypes2.default.number,value:_propTypes2.default.string,onChange:_propTypes2.default.func,name:_propTypes2.default.string,touch:_propTypes2.default.func,untouch:_propTypes2.default.func,className:_propTypes2.default.string,isValid:_propTypes2.default.bool,disabled:_propTypes2.default.bool,style:_propTypes2.default.object,inputStyle:_propTypes2.default.object,inputStyleInvalid:_propTypes2.default.object,autoFocus:_propTypes2.default.bool,forceUppercase:_propTypes2.default.bool,filterKeyCodes:_propTypes2.default.array,filterChars:_propTypes2.default.array,filterCharsIsWhitelist:_propTypes2.default.bool,pattern:_propTypes2.default.string,inputMode:_propTypes2.default.oneOf(["verbatim","latin","latin-name","latin-prose","full-width-latin","kana","kana-name","katakana","numeric","tel","email","url"])},exports.default=ReactCodeInput,ReactCodeInput.__docgenInfo={description:"",methods:[{name:"UNSAFE_componentWillReceiveProps",docblock:null,modifiers:[],params:[{name:"nextProps",type:null}],returns:null},{name:"setInputArray",docblock:null,modifiers:[],params:[{name:"propsValue",type:null}],returns:null},{name:"handleBlur",docblock:null,modifiers:[],params:[{name:"e",type:null}],returns:null},{name:"handleTouch",docblock:null,modifiers:[],params:[{name:"value",type:null}],returns:null},{name:"handleChange",docblock:null,modifiers:[],params:[{name:"e",type:null}],returns:null},{name:"handleKeyDown",docblock:null,modifiers:[],params:[{name:"e",type:null}],returns:null}],displayName:"ReactCodeInput",props:{autoFocus:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""},isValid:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""},disabled:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},forceUppercase:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},fields:{defaultValue:{value:"4",computed:!1},type:{name:"number"},required:!1,description:""},value:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},type:{defaultValue:{value:"'text'",computed:!1},type:{name:"enum",value:[{value:"'text'",computed:!1},{value:"'number'",computed:!1},{value:"'password'",computed:!1},{value:"'tel'",computed:!1}]},required:!1,description:""},filterKeyCodes:{defaultValue:{value:"[189, 190]",computed:!1},type:{name:"array"},required:!1,description:""},filterChars:{defaultValue:{value:"['-', '.']",computed:!1},type:{name:"array"},required:!1,description:""},filterCharsIsWhitelist:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},onChange:{type:{name:"func"},required:!1,description:""},name:{type:{name:"string"},required:!1,description:""},touch:{type:{name:"func"},required:!1,description:""},untouch:{type:{name:"func"},required:!1,description:""},className:{type:{name:"string"},required:!1,description:""},style:{type:{name:"object"},required:!1,description:""},inputStyle:{type:{name:"object"},required:!1,description:""},inputStyleInvalid:{type:{name:"object"},required:!1,description:""},pattern:{type:{name:"string"},required:!1,description:""},inputMode:{type:{name:"enum",value:[{value:"'verbatim'",computed:!1},{value:"'latin'",computed:!1},{value:"'latin-name'",computed:!1},{value:"'latin-prose'",computed:!1},{value:"'full-width-latin'",computed:!1},{value:"'kana'",computed:!1},{value:"'kana-name'",computed:!1},{value:"'katakana'",computed:!1},{value:"'numeric'",computed:!1},{value:"'tel'",computed:!1},{value:"'email'",computed:!1},{value:"'url'",computed:!1}]},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ReactCodeInput.js"]={name:"ReactCodeInput",docgenInfo:ReactCodeInput.__docgenInfo,path:"src/ReactCodeInput.js"})},300:function(module,exports,__webpack_require__){__webpack_require__(301),__webpack_require__(504),module.exports=__webpack_require__(505)},369:function(module,exports){},505:function(module,exports,__webpack_require__){"use strict";(function(module){var _react=__webpack_require__(229),_addonInfo=__webpack_require__(260),req=__webpack_require__(750);(0,_react.configure)((function(){req.keys().forEach((function(filename){return req(filename)}))}),module),(0,_addonInfo.setDefaults)({header:!1})}).call(this,__webpack_require__(83)(module))},630:function(module,exports,__webpack_require__){var map={"./nestedObjectAssign":265,"./nestedObjectAssign.js":265};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=630},750:function(module,exports,__webpack_require__){var map={"./ReactCodeInput.stories.js":751};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=750},751:function(module,exports,__webpack_require__){"use strict";(function(module){var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_react2=_interopRequireDefault(__webpack_require__(0)),_react3=__webpack_require__(229),_addonActions=__webpack_require__(752),_addonKnobs=__webpack_require__(806),_addonInfo=__webpack_require__(260),_ReactCodeInput2=_interopRequireDefault(__webpack_require__(299)),_ReactCodeInput4=_interopRequireDefault(__webpack_require__(299));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var stories=(0,_react3.storiesOf)("ReactCodeInput",module),propVariantStories=(0,_react3.storiesOf)("ReactCodeInput/Props",module),typeOptions=["text","number","password","tel"],inputModeOptions=["verbatim","latin","latin-name","latin-prose","full-width-latin","kana","kana-name","katakana","numeric","tel","email","url"],inputStyle={fontFamily:"monospace",MozAppearance:"textfield",borderRadius:"6px",border:"1px solid",boxShadow:"0px 0px 10px 0px rgba(0,0,0,.10)",margin:"4px",paddingLeft:"8px",width:"36px",height:"42px",fontSize:"32px",boxSizing:"border-box",color:"black",backgroundColor:"white",borderColor:"lightgrey"},darkStyle={fontFamily:"monospace",MozAppearance:"textfield",borderRadius:"3px",border:"1px solid",margin:"4px",paddingLeft:"7px",width:"15px",height:"26px",fontSize:"14px",color:"lightskyblue",backgroundColor:"black",borderColor:"lightskyblue"};stories.addDecorator((function(story,context){return(0,_addonInfo.withInfo)("Details")(story)(context)})),stories.addDecorator(_addonKnobs.withKnobs),stories.add("Default",(function(){return _react2.default.createElement(_ReactCodeInput2.default,null)})).add("Dark Themed",(function(){return _react2.default.createElement("div",{style:{background:"#222",padding:"10px",width:"140px"}},_react2.default.createElement(_ReactCodeInput2.default,{inputStyle:darkStyle,type:"number"}))})).add("Force Uppercase",(function(){return _react2.default.createElement(_ReactCodeInput4.default,{fields:4,type:"text",forceUppercase:!0,value:"test",onChange:(0,_addonActions.action)("onChange")})})),propVariantStories.addDecorator((function(story,context){return(0,_addonInfo.withInfo)("Details")(story)(context)})),propVariantStories.addDecorator(_addonKnobs.withKnobs),propVariantStories.add("type",(function(){return _react2.default.createElement(_ReactCodeInput2.default,{type:(0,_addonKnobs.select)("Type",typeOptions,"text","Type")})})).add("fields",(function(){return _react2.default.createElement(_ReactCodeInput2.default,{fields:(0,_addonKnobs.number)("fields",6)})})).add("inputStyle",(function(){return _react2.default.createElement(_ReactCodeInput2.default,{inputStyle:(0,_addonKnobs.object)("inputStyle",inputStyle)})})).add("value",(function(){return _react2.default.createElement(_ReactCodeInput2.default,{value:(0,_addonKnobs.text)("value","1234")})})).add("isValid",(function(){return _react2.default.createElement(_ReactCodeInput2.default,{isValid:(0,_addonKnobs.boolean)("isValid",!1)})})).add("inputMode",(function(){return _react2.default.createElement(_ReactCodeInput2.default,{inputMode:(0,_addonKnobs.select)("inputMode",inputModeOptions)})})).add("onChange",(function(){return _react2.default.createElement(_ReactCodeInput2.default,{onChange:(0,_addonActions.action)("onChange")})})).add("pattern",(function(){return _react2.default.createElement("form",null,_react2.default.createElement(_ReactCodeInput2.default,{value:(0,_addonKnobs.text)("value","123"),pattern:(0,_addonKnobs.text)("pattern","[A-Z]")}),_react2.default.createElement("input",{style:_extends({},inputStyle,{width:"auto",backgroundColor:"lightgray"}),type:"submit",value:"Submit"}))})).add("touch",(function(){return _react2.default.createElement(_ReactCodeInput2.default,{touch:(0,_addonActions.action)("touch")})})).add("untouch",(function(){return _react2.default.createElement(_ReactCodeInput2.default,{untouch:(0,_addonActions.action)("untouch")})})).add("disabled",(function(){return _react2.default.createElement(_ReactCodeInput2.default,{disabled:(0,_addonKnobs.boolean)("disabled",!0)})}))}).call(this,__webpack_require__(83)(module))},819:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.uuidv4=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(c){var r=16*Math.random()|0;return("x"===c?r:3&r|8).toString(16)}))}}},[[300,1,2]]]);
//# sourceMappingURL=main.766c0d58a3c1d085d48b.bundle.js.map