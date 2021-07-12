var t;t=function(t){function e(t,e){this.elem=t,this.set=e}e.prototype={addAnimation:function(){switch(this.set.animation){case"none":break;case"fadeIn":this.obj.addClass("animated fadeIn");break;case"flipIn":switch(this.set.gravity){case"top":this.obj.addClass("animated flipInTop");break;case"bottom":this.obj.addClass("animated flipInBottom");break;case"left":this.obj.addClass("animated flipInLeft");break;case"right":this.obj.addClass("animated flipInRight")}break;case"moveInLeft":this.obj.addClass("animated moveLeft");break;case"moveInTop":this.obj.addClass("animated moveTop");break;case"moveInBottom":this.obj.addClass("animated moveBottom");break;case"moveInRight":this.obj.addClass("animated moveRight")}},close:function(){this.obj.remove(),this.elem.removeAttr("just-open")},setPosition:function(){if(""!=this.set.contents){var e={},s={x:this.elem.offset().left,y:this.elem.offset().top},i={w:this.elem.outerWidth(),h:this.elem.outerHeight()},o=s.x+i.w/2+this.obj.outerWidth()/2,n=s.x+i.w/2-this.obj.outerWidth()/2;switch(this.set.gravity){case"top":o>t(window).width()?(e={x:s.x+i.w-this.obj.outerWidth(),y:s.y-this.obj.outerHeight()-this.set.distance},this.obj.find(".just-"+this.set.gravity).css("left",this.obj.outerWidth()-i.w/2+"px")):n<0?(e={x:s.x,y:s.y-this.obj.outerHeight()-this.set.distance},this.obj.find(".just-"+this.set.gravity).css("left",i.w/2+"px")):e={x:s.x-(this.obj.outerWidth()-i.w)/2,y:s.y-this.obj.outerHeight()-this.set.distance};break;case"bottom":o>t(window).width()?(e={x:s.x+i.w-this.obj.outerWidth(),y:s.y+i.h+this.set.distance},this.obj.find(".just-"+this.set.gravity).css("left",this.obj.outerWidth()-i.w/2+"px")):n<0?(e={x:s.x,y:s.y+i.h+this.set.distance},this.obj.find(".just-"+this.set.gravity).css("left",i.w/2+"px")):e={x:s.x-(this.obj.outerWidth()-i.w)/2,y:s.y+i.h+this.set.distance};break;case"left":e={x:s.x-this.obj.outerWidth()-this.set.distance,y:s.y-(this.obj.outerHeight()-i.h)/2};break;case"right":e={x:s.x+i.w+this.set.distance,y:s.y-(this.obj.outerHeight()-i.h)/2}}this.obj.css({left:e.x+"px",top:e.y+"px"})}},setEvent:function(){var t=this;"click"!=t.set.events&&"onclick"!=t.set.events||t.obj.one("click",(function(t){console.log(1)})),"mouseover"!=t.set.events&&"onmouseover"!=t.set.events&&"mouseenter"!=t.set.events||this.elem.one("mouseout, mouseleave",(function(){console.log(2),t.close()})).one("click",(function(t){console.log(3)}))},setConfirmEvents:function(){var t=this,e=this.obj.find(".just-yes"),s=this.obj.find(".just-no");e.click((function(){1==t.set.onYes(t)&&t.close()})),s.click((function(){t.close(),t.set.onNo(t)}))},addConfirm:function(){this.obj.append("<div class='just-confirm'><button type='button' class='just-yes'>"+this.set.yes+"</button><button type='button' class='just-no'>"+this.set.no+"</button></div>"),this.setConfirmEvents()},setContent:function(){""!=this.set.contents&&(this.obj=t("<div class='just-tooltip "+this.set.theme+"'style='width:"+this.set.width+"'><div class='just-con'>"+this.set.contents+"</div><span class='just-"+this.set.gravity+"'></span></div>"),1==this.set.confirm&&this.addConfirm(),t("body").append(this.obj),this.setEvent(),this.addAnimation())},getEvent:function(){if(window.event)return window.event;for(var t=this.getEvent.caller;null!=t;){var e=t.arguments[0];if(e&&(console.log(e.constructor),e.constructor==Event||e.constructor==MouseEvent||"object"==typeof e&&e.preventDefault&&e.stopPropagation))return e;t=t.caller}return null},destroy:function(){t("div[just-open]").removeAttr("just-open"),t(".just-tooltip").remove()},init:function(){var e=this,s=e.getEvent();e.set.events=s.type,s.preventDefault(),s.stopPropagation(),$document=t(document),"click"!=e.set.events&&"onclick"!=e.set.events||(e.destroy(),$document.one("click",(function(t){e.destroy()}))),e.setContent(),e.setPosition(),$document.one("resize",(function(){e.setPosition()}))}},t.fn.justToolsTip=function(s){if(!this.attr("just-open")){this.attr("just-open","show");var i={id:(new Date).getTime(),height:"auto",width:"auto",contents:"",gravity:"top",theme:"",distance:10,animation:"none",confirm:!1,yes:"确定",no:"取消",onYes:function(){},onNo:function(){}};this.each((function(o){s=t.extend(i,s),new e(t(this),s).init()}))}}},"function"==typeof ymq_define&&ymq_define.amd?ymq_define(["jquery"],t):t(ymqJq);