define(['handlebars'], function(Handlebars) {

this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

Handlebars.registerPartial("component", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__header "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":5,"column":30},"end":{"line":5,"column":54}}}))
    + "__header\" id=\""
    + alias3(((helper = (helper = lookupProperty(helpers,"_id") || (depth0 != null ? lookupProperty(depth0,"_id") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":5,"column":68},"end":{"line":5,"column":75}}}) : helper)))
    + "-header\">\r\n  <div class=\"component__header-inner "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":6,"column":38},"end":{"line":6,"column":62}}}))
    + "__header-inner\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":20,"column":11}}})) != null ? stack1 : "")
    + "\r\n    "
    + alias3(((helper = (helper = lookupProperty(helpers,"component_description") || (depth0 != null ? lookupProperty(depth0,"component_description") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"component_description","hash":{},"data":data,"loc":{"start":{"line":22,"column":4},"end":{"line":22,"column":29}}}) : helper)))
    + "\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":4},"end":{"line":30,"column":11}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),(depth0 != null ? lookupProperty(depth0,"mobileInstruction") : depth0),{"name":"any","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":4},"end":{"line":38,"column":12}}})) != null ? stack1 : "")
    + "\r\n  </div>\r\n</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"component__title "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":9,"column":33},"end":{"line":9,"column":57}}}))
    + "__title\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibilityState") : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":6},"end":{"line":13,"column":19}}})) != null ? stack1 : "")
    + "<div class=\"component__title-inner "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":15,"column":41},"end":{"line":15,"column":65}}}))
    + "__title-inner\""
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibilityState") : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":79},"end":{"line":15,"column":147}}})) != null ? stack1 : "")
    + ">"
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":16,"column":8},"end":{"line":16,"column":36}}})) != null ? stack1 : "")
    + "</div>\r\n\r\n    </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "      <div class=\"js-heading\"></div>";
},"5":function(container,depth0,helpers,partials,data) {
    return " aria-hidden=\"true\"";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"component__body "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":25,"column":32},"end":{"line":25,"column":56}}}))
    + "__body\">\r\n      <div class=\"component__body-inner "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":26,"column":40},"end":{"line":26,"column":64}}}))
    + "__body-inner\">\r\n        "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":27,"column":8},"end":{"line":27,"column":26}}})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"component__instruction "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":33,"column":39},"end":{"line":33,"column":63}}}))
    + "__instruction\">\r\n      <div class=\"component__instruction-inner "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":34,"column":47},"end":{"line":34,"column":71}}}))
    + "__instruction-inner\">\r\n        "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":35,"column":8},"end":{"line":35,"column":33}}})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"component_description") || (depth0 != null ? lookupProperty(depth0,"component_description") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"component_description","hash":{},"data":data,"loc":{"start":{"line":43,"column":0},"end":{"line":43,"column":25}}}) : helper)))
    + "\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\r\n\r\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),(depth0 != null ? lookupProperty(depth0,"body") : depth0),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"any","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":4,"column":0},"end":{"line":44,"column":8}}})) != null ? stack1 : "");
},"useData":true}));

Handlebars.registerPartial("pageNav-item", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<button\n  class=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_iconClass") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":9},"end":{"line":4,"column":42}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"text") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":42},"end":{"line":4,"column":70}}})) != null ? stack1 : "")
    + " pagenav__btn"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isHidden") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":83},"end":{"line":4,"column":129}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"locked") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":129},"end":{"line":4,"column":172}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_classes") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":172},"end":{"line":4,"column":208}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"text") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":208},"end":{"line":4,"column":236}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_iconClass") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":236},"end":{"line":4,"column":270}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_alignIconRight") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.program(18, data, 0),"data":data,"loc":{"start":{"line":4,"column":270},"end":{"line":4,"column":335}}})) != null ? stack1 : "")
    + " js-pagenav-btn\"\n  role=\"link\"\n  data-type=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":6,"column":13},"end":{"line":6,"column":21}}}) : helper)))
    + "\"\n  data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_id") || (depth0 != null ? lookupProperty(depth0,"_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":7,"column":11},"end":{"line":7,"column":18}}}) : helper)))
    + "\"\n  data-item-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":8,"column":19},"end":{"line":8,"column":29}}}) : helper)))
    + "\"\n  "
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_isHidden") : depth0),(depth0 != null ? lookupProperty(depth0,"locked") : depth0),{"name":"any","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":2},"end":{"line":9,"column":55}}})) != null ? stack1 : "")
    + "\n  aria-label=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"locked") : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":14},"end":{"line":10,"column":89}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"ariaLabel") : depth0),depth0,{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":10,"column":89},"end":{"line":10,"column":117}}})) != null ? stack1 : "")
    + "\"\n  data-tooltip=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_showTooltip") : depth0),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":16},"end":{"line":11,"column":69}}})) != null ? stack1 : "")
    + "\">\n\n  <span class=\"pagenav__btn-inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_alignIconRight") : depth0),{"name":"unless","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":4},"end":{"line":21,"column":15}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"text") : depth0),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":4},"end":{"line":29,"column":11}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_alignIconRight") : depth0),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":4},"end":{"line":37,"column":11}}})) != null ? stack1 : "")
    + "\n  </span>\n\n</button>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "btn-icon";
},"4":function(container,depth0,helpers,partials,data) {
    return " btn-text";
},"6":function(container,depth0,helpers,partials,data) {
    return " is-hidden is-disabled";
},"8":function(container,depth0,helpers,partials,data) {
    return " is-locked is-disabled";
},"10":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_classes") || (depth0 != null ? lookupProperty(depth0,"_classes") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_classes","hash":{},"data":data,"loc":{"start":{"line":4,"column":189},"end":{"line":4,"column":201}}}) : helper)));
},"12":function(container,depth0,helpers,partials,data) {
    return " has-text";
},"14":function(container,depth0,helpers,partials,data) {
    return " has-icon";
},"16":function(container,depth0,helpers,partials,data) {
    return " icon-is-right";
},"18":function(container,depth0,helpers,partials,data) {
    return " icon-is-left";
},"20":function(container,depth0,helpers,partials,data) {
    return " disabled=\"disabled\"";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"_globals"))) && lookupProperty(stack1,"_accessibility"))) && lookupProperty(stack1,"_ariaLabels"))) && lookupProperty(stack1,"locked")), depth0))
    + ". ";
},"24":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"tooltip") : depth0),depth0,{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":11,"column":36},"end":{"line":11,"column":62}}})) != null ? stack1 : "");
},"26":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_iconClass") : depth0),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":4},"end":{"line":20,"column":11}}})) != null ? stack1 : "");
},"27":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <span class=\"pagenav__btn-icon\" aria-hidden=\"true\">\n      <span class=\"icon "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_iconClass") || (depth0 != null ? lookupProperty(depth0,"_iconClass") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_iconClass","hash":{},"data":data,"loc":{"start":{"line":18,"column":24},"end":{"line":18,"column":38}}}) : helper)))
    + "\"></span>\n    </span>\n";
},"29":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <span class=\"pagenav__btn-text\">\n      <span class=\"pagenav__btn-text-inner\">\n        "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"text") : depth0),depth0,{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":26,"column":8},"end":{"line":26,"column":31}}})) != null ? stack1 : "")
    + "\n      </span>\n    </span>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":42,"column":7}}})) != null ? stack1 : "");
},"useData":true}));

this["Handlebars"]["templates"]["article"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"article__header\">\r\n    <div class=\"article__header-inner\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":22,"column":13}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":6},"end":{"line":30,"column":13}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":6},"end":{"line":38,"column":13}}})) != null ? stack1 : "")
    + "\r\n    </div>\r\n  </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"article__title\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibilityState") : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":8},"end":{"line":15,"column":21}}})) != null ? stack1 : "")
    + "<div class=\"article__title-inner\""
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibilityState") : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":41},"end":{"line":17,"column":109}}})) != null ? stack1 : "")
    + ">\r\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":18,"column":10},"end":{"line":18,"column":36}}})) != null ? stack1 : "")
    + "\r\n        </div>\r\n\r\n      </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"js-heading\"></div>";
},"5":function(container,depth0,helpers,partials,data) {
    return " aria-hidden=\"true\"";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"article__body\">\r\n        <div class=\"article__body-inner\">\r\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":27,"column":10},"end":{"line":27,"column":28}}})) != null ? stack1 : "")
    + "\r\n        </div>\r\n      </div>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"article__instruction\">\r\n        <div class=\"article__instruction-inner\">\r\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":35,"column":10},"end":{"line":35,"column":35}}})) != null ? stack1 : "")
    + "\r\n        </div>\r\n      </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\r\n\r\n<div class=\"article__inner\">\r\n\r\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),(depth0 != null ? lookupProperty(depth0,"body") : depth0),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"any","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":42,"column":10}}})) != null ? stack1 : "")
    + "\r\n  <div class=\"block__container\">\r\n  </div>\r\n\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["block"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"block__header\">\r\n    <div class=\"block__header-inner\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":22,"column":13}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":6},"end":{"line":30,"column":13}}})) != null ? stack1 : "")
    + "\r\n        \r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":6},"end":{"line":40,"column":13}}})) != null ? stack1 : "")
    + "\r\n    </div>\r\n  </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"block__title\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibilityState") : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":8},"end":{"line":15,"column":21}}})) != null ? stack1 : "")
    + "<div class=\"block__title-inner\""
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibilityState") : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":39},"end":{"line":17,"column":107}}})) != null ? stack1 : "")
    + ">\r\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":18,"column":10},"end":{"line":18,"column":36}}})) != null ? stack1 : "")
    + "\r\n        </div>\r\n\r\n      </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"js-heading\"></div>";
},"5":function(container,depth0,helpers,partials,data) {
    return " aria-hidden=\"true\"";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"block__body\">\r\n        <div class=\"block__body-inner\">\r\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":27,"column":10},"end":{"line":27,"column":28}}})) != null ? stack1 : "")
    + "\r\n        </div>\r\n      </div>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"block__instruction\">\r\n        <div class=\"block__instruction-inner\">\r\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":37,"column":10},"end":{"line":37,"column":35}}})) != null ? stack1 : "")
    + "\r\n        </div>\r\n      </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\r\n\r\n<div class=\"block__inner\">\r\n\r\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),(depth0 != null ? lookupProperty(depth0,"body") : depth0),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"any","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":44,"column":10}}})) != null ? stack1 : "")
    + "\r\n  <div class=\"component__container\">\r\n  </div>\r\n\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["buttons"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "  <div class=\"js-answer-live-region aria-label\" aria-live=\"assertive\" aria-atomic=\"true\"></div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isCorrect") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":15,"column":110},"end":{"line":15,"column":271}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"_globals"))) && lookupProperty(stack1,"_accessibility"))) && lookupProperty(stack1,"_ariaLabels"))) && lookupProperty(stack1,"answeredCorrectly")), depth0));
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"_globals"))) && lookupProperty(stack1,"_accessibility"))) && lookupProperty(stack1,"_ariaLabels"))) && lookupProperty(stack1,"answeredIncorrectly")), depth0));
},"8":function(container,depth0,helpers,partials,data) {
    return "<div class=\"btn__display js-display-attempts\">\r\n  <div class=\"btn__display-inner js-insert-attempts-string\" aria-live=\"assertive\">\r\n  </div>\r\n</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"btn__response-container\">\r\n\r\n  <div class=\"btn__marking js-btn-marking u-display-none\">\r\n    <div class=\"icon\" aria-hidden=\"true\"></div>\r\n  </div>\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_canShowModelAnswer") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":2},"end":{"line":9,"column":9}}})) != null ? stack1 : "")
    + "\r\n  <button class=\"btn-text btn__action js-btn-action\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_buttons") : depth0)) != null ? lookupProperty(stack1,"_submit") : stack1)) != null ? lookupProperty(stack1,"ariaLabel") : stack1), depth0))
    + "\">\r\n    "
    + ((stack1 = alias2(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_buttons") : depth0)) != null ? lookupProperty(stack1,"_submit") : stack1)) != null ? lookupProperty(stack1,"buttonText") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n  </button>\r\n  \r\n  <span class=\"js-btn-marking-label aria-label u-display-none\">"
    + ((stack1 = (lookupProperty(helpers,"all")||(depth0 && lookupProperty(depth0,"all"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"_isInteractionComplete") : depth0),(depth0 != null ? lookupProperty(depth0,"_canShowMarking") : depth0),{"name":"all","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":63},"end":{"line":15,"column":279}}})) != null ? stack1 : "")
    + "</span>\r\n\r\n  <button class=\"btn-text btn__feedback js-btn-feedback is-disabled\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_buttons") : depth0)) != null ? lookupProperty(stack1,"_showFeedback") : stack1)) != null ? lookupProperty(stack1,"ariaLabel") : stack1), depth0))
    + "\" aria-disabled=\"true\">\r\n    "
    + ((stack1 = alias2(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_buttons") : depth0)) != null ? lookupProperty(stack1,"_showFeedback") : stack1)) != null ? lookupProperty(stack1,"buttonText") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n  </button>\r\n\r\n</div>\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_shouldDisplayAttempts") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":0},"end":{"line":29,"column":7}}})) != null ? stack1 : "");
},"useData":true});

this["Handlebars"]["templates"]["drawer"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"drawer__inner\">\r\n\r\n  <span id=\"drawer-heading\" class=\"aria-label\">"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"drawer") : stack1), depth0))
    + "</span>\r\n\r\n  <div class=\"drawer__toolbar u-clearfix\">\r\n\r\n    <div class=\"drawer__back\">\r\n      <button class=\"btn-icon drawer__btn drawer__back-btn js-drawer-back-btn\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"previous") : stack1), depth0))
    + "\">\r\n        <span class=\"icon\"></span>\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"drawer__close\">\r\n      <button class=\"btn-icon drawer__btn drawer__close-btn js-drawer-close-btn\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"closeDrawer") : stack1), depth0))
    + "\">\r\n        <span class=\"icon\"></span>\r\n      </button>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"drawer__holder js-drawer-holder\"></div>\r\n\r\n  "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"a11y_wrap_focus") || (depth0 != null ? lookupProperty(depth0,"a11y_wrap_focus") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"a11y_wrap_focus","hash":{},"data":data,"loc":{"start":{"line":23,"column":2},"end":{"line":23,"column":23}}}) : helper))) != null ? stack1 : "")
    + "\r\n\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["drawerItem"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"className") || (depth0 != null ? lookupProperty(depth0,"className") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"className","hash":{},"data":data,"loc":{"start":{"line":2,"column":68},"end":{"line":2,"column":81}}}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <span class=\"drawer__menu-title drawer__item-title\">\r\n      <span class=\"drawer__menu-title-inner drawer__item-title-inner\">\r\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":7,"column":8},"end":{"line":7,"column":19}}}) : helper))) != null ? stack1 : "")
    + "\r\n      </span>\r\n    </span>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <span class=\"drawer__menu-body drawer__item-body\">\r\n      <span class=\"drawer__menu-body-inner drawer__item-body-inner\">\r\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data,"loc":{"start":{"line":15,"column":8},"end":{"line":15,"column":25}}}) : helper))) != null ? stack1 : "")
    + "\r\n      </span>\r\n    </span>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"drawer__menu-inner drawer__item-inner\">\r\n  <button class=\"drawer__menu-btn drawer__item-btn"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"className") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":50},"end":{"line":2,"column":88}}})) != null ? stack1 : "")
    + "\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":10,"column":11}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":4},"end":{"line":18,"column":11}}})) != null ? stack1 : "")
    + "\r\n  </button>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["heading"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isOptional") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":13,"column":11}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":8,"column":6},"end":{"line":8,"column":25}}})) != null ? stack1 : "")
    + "\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isComplete") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":13,"column":4}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":10,"column":25}}})) != null ? stack1 : "")
    + " ("
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"complete") : stack1), depth0))
    + ")\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":12,"column":6},"end":{"line":12,"column":25}}})) != null ? stack1 : "")
    + " ("
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"incomplete") : stack1), depth0))
    + ")\r\n    ";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":15,"column":4},"end":{"line":15,"column":23}}})) != null ? stack1 : "")
    + "\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias4(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\r\n\r\n<div id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_id") || (depth0 != null ? lookupProperty(depth0,"_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":3,"column":9},"end":{"line":3,"column":16}}}) : helper)))
    + "-heading\" class=\"js-heading-inner\" role=\"heading\" aria-level=\""
    + alias4((lookupProperty(helpers,"a11y_aria_level")||(depth0 && lookupProperty(depth0,"a11y_aria_level"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_id") : depth0),(depth0 != null ? lookupProperty(depth0,"_type") : depth0),(depth0 != null ? lookupProperty(depth0,"_ariaLevel") : depth0),{"name":"a11y_aria_level","hash":{},"data":data,"loc":{"start":{"line":3,"column":78},"end":{"line":3,"column":118}}}))
    + "\">\r\n\r\n  <span class=\"aria-label\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isA11yCompletionDescriptionEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":16,"column":9}}})) != null ? stack1 : "")
    + "  </span>\r\n\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["loading"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"loading js-loading\">\r\n  <div class=\"loading__inner\">\r\n    Loading...\r\n  </div>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["nav"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <button class=\"btn-text nav__btn nav__skip-btn\" data-event=\"skipNavigation\" aria-label=\""
    + container.escapeExpression(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"skipNavigation") : stack1), depth0))
    + "\">\r\n    "
    + ((stack1 = alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"skipNavigationText") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n  </button>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, alias3=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias2(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\r\n\r\n<div class=\"nav__inner u-clearfix\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_accessibility") : depth0)) != null ? lookupProperty(stack1,"_isSkipNavigationEnabled") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":2},"end":{"line":11,"column":9}}})) != null ? stack1 : "")
    + "\r\n  <button class=\"btn-icon nav__btn nav__back-btn js-nav-back-btn u-display-none\" data-event=\"backButton\" aria-label=\""
    + alias2(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"previous") : stack1), depth0))
    + "\" role=\"link\">\r\n    <span class=\"icon\"></span>\r\n  </button>\r\n\r\n  <button class=\"btn-icon nav__btn nav__drawer-btn js-nav-drawer-btn\" data-event=\"toggleDrawer\" aria-label=\""
    + alias2(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"navigationDrawer") : stack1), depth0))
    + "\" data-order=\""
    + alias2(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_extensions") : stack1)) != null ? lookupProperty(stack1,"_drawer") : stack1)) != null ? lookupProperty(stack1,"_navOrder") : stack1), depth0))
    + "\">\r\n    <span class=\"icon\"></span>\r\n  </button>\r\n\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["notify"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"notify__container-inner\">\r\n  <div class=\"notify__push-container\" aria-live=\"assertive\" aria-atomic=\"true\"></div>\r\n  <div class=\"notify__popup-container\"></div>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["notifyPopup"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias1(((helper = (helper = lookupProperty(helpers,"key") || (data && lookupProperty(data,"key"))) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"key","hash":{},"data":data,"loc":{"start":{"line":4,"column":26},"end":{"line":4,"column":34}}}) : helper)))
    + "=\""
    + alias1(container.lambda(depth0, depth0))
    + "\" ";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_classes") || (depth0 != null ? lookupProperty(depth0,"_classes") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_classes","hash":{},"data":data,"loc":{"start":{"line":4,"column":122},"end":{"line":4,"column":134}}}) : helper)));
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"notify__icon\">\r\n          <div class=\"icon"
    + ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_type") : depth0),"prompt",{"name":"equals","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":26},"end":{"line":12,"column":73}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_type") : depth0),"alert",{"name":"equals","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":73},"end":{"line":12,"column":118}}})) != null ? stack1 : "")
    + "\"></div>\r\n        </div>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    return " is-prompt";
},"8":function(container,depth0,helpers,partials,data) {
    return " is-alert";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"notify__title\" id=\"notify-heading\">\r\n          <div class=\"notify__title-inner\" "
    + ((stack1 = (lookupProperty(helpers,"a11y_attrs_heading")||(depth0 && lookupProperty(depth0,"a11y_attrs_heading"))||alias2).call(alias1,"notify",{"name":"a11y_attrs_heading","hash":{},"data":data,"loc":{"start":{"line":18,"column":43},"end":{"line":18,"column":76}}})) != null ? stack1 : "")
    + ">\r\n            "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":19,"column":12},"end":{"line":19,"column":31}}})) != null ? stack1 : "")
    + "\r\n          </div>\r\n        </div>\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"notify__body\">\r\n          <div class=\"notify__body-inner\">\r\n            "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":27,"column":12},"end":{"line":27,"column":30}}})) != null ? stack1 : "")
    + "\r\n          </div>\r\n        </div>\r\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"notify__btn-container\">\r\n          <button class=\"btn-text notify__btn notify__btn-alert js-notify-btn-alert\" aria-label=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"confirmText") || (depth0 != null ? lookupProperty(depth0,"confirmText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"confirmText","hash":{},"data":data,"loc":{"start":{"line":34,"column":97},"end":{"line":34,"column":114}}}) : helper))) != null ? stack1 : "")
    + "\">\r\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"confirmText") || (depth0 != null ? lookupProperty(depth0,"confirmText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"confirmText","hash":{},"data":data,"loc":{"start":{"line":35,"column":12},"end":{"line":35,"column":29}}}) : helper))) != null ? stack1 : "")
    + "\r\n          </button>\r\n        </div>\r\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"notify__btn-container\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_prompts") : depth0),{"name":"each","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":42,"column":10},"end":{"line":46,"column":19}}})) != null ? stack1 : "")
    + "        </div>\r\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <button class=\"btn-text notify__btn notify__btn-prompt js-notify-btn-prompt\" data-event=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_callbackEvent") || (depth0 != null ? lookupProperty(depth0,"_callbackEvent") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_callbackEvent","hash":{},"data":data,"loc":{"start":{"line":43,"column":99},"end":{"line":43,"column":117}}}) : helper)))
    + "\" aria-label=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"promptText") || (depth0 != null ? lookupProperty(depth0,"promptText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"promptText","hash":{},"data":data,"loc":{"start":{"line":43,"column":131},"end":{"line":43,"column":147}}}) : helper))) != null ? stack1 : "")
    + "\">\r\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"promptText") || (depth0 != null ? lookupProperty(depth0,"promptText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"promptText","hash":{},"data":data,"loc":{"start":{"line":44,"column":12},"end":{"line":44,"column":28}}}) : helper))) != null ? stack1 : "")
    + "\r\n          </button>\r\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_type") : depth0),"popup",{"name":"equals","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":55,"column":4},"end":{"line":59,"column":15}}})) != null ? stack1 : "");
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <button class=\"btn-icon notify__btn-icon notify__close-btn js-notify-close-btn\" aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"closePopup") : stack1), depth0))
    + "\">\r\n      <span class=\"icon\"></span>\r\n    </button>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias4(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\r\n\r\n<div "
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_attributes") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":5},"end":{"line":4,"column":55}}})) != null ? stack1 : "")
    + " class=\"notify__popup notify__popup-type-"
    + alias4(((helper = (helper = lookupProperty(helpers,"_type") || (depth0 != null ? lookupProperty(depth0,"_type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data,"loc":{"start":{"line":4,"column":96},"end":{"line":4,"column":105}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_classes") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":105},"end":{"line":4,"column":141}}})) != null ? stack1 : "")
    + "\">\r\n  <div class=\"notify__popup-inner\">\r\n\r\n    <div class=\"notify__content\">\r\n      <div class=\"notify__content-inner\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_showIcon") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":8},"end":{"line":14,"column":15}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":8},"end":{"line":22,"column":15}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":8},"end":{"line":30,"column":15}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_type") : depth0),"alert",{"name":"equals","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":8},"end":{"line":38,"column":19}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_type") : depth0),"prompt",{"name":"equals","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":8},"end":{"line":48,"column":19}}})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n\r\n"
    + ((stack1 = (lookupProperty(helpers,"all")||(depth0 && lookupProperty(depth0,"all"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_isCancellable") : depth0),(depth0 != null ? lookupProperty(depth0,"_showCloseButton") : depth0),{"name":"all","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":54,"column":4},"end":{"line":60,"column":12}}})) != null ? stack1 : "")
    + "\r\n  </div>\r\n\r\n  "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"a11y_wrap_focus") || (depth0 != null ? lookupProperty(depth0,"a11y_wrap_focus") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"a11y_wrap_focus","hash":{},"data":data,"loc":{"start":{"line":64,"column":2},"end":{"line":64,"column":23}}}) : helper))) != null ? stack1 : "")
    + "\r\n\r\n</div>\r\n\r\n<div class=\"shadow notify__shadow js-notify-shadow-click\"></div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["notifyPush"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"notify-push__title\">\r\n    <div class=\"notify-push__title-inner\" "
    + ((stack1 = (lookupProperty(helpers,"a11y_attrs_heading")||(depth0 && lookupProperty(depth0,"a11y_attrs_heading"))||alias2).call(alias1,"notify",{"name":"a11y_attrs_heading","hash":{},"data":data,"loc":{"start":{"line":8,"column":42},"end":{"line":8,"column":75}}})) != null ? stack1 : "")
    + ">\r\n      "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":9,"column":25}}})) != null ? stack1 : "")
    + "\r\n    </div>\r\n  </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"notify-push__body\">\r\n    <div class=\"notify-push__body-inner\">\r\n      "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":17,"column":6},"end":{"line":17,"column":24}}})) != null ? stack1 : "")
    + "\r\n    </div>\r\n  </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias2(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\r\n\r\n<div id=\"notify-push-heading\" class=\"notify-push__inner js-notify-push-inner\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":12,"column":9}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":2},"end":{"line":20,"column":9}}})) != null ? stack1 : "")
    + "\r\n</div>\r\n\r\n<button class=\"btn-icon notify-push__close-btn js-notify-push-close-btn\" aria-label=\""
    + alias2(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"closePopup") : stack1), depth0))
    + "\">\r\n  <span class=\"icon\"></span>\r\n</button>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["page"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"page__header\">\r\n    <div class=\"page__header-inner\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":22,"column":13}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"subtitle") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":6},"end":{"line":30,"column":13}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),(depth0 != null ? lookupProperty(depth0,"pageBody") : depth0),{"name":"any","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":6},"end":{"line":42,"column":14}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":6},"end":{"line":50,"column":13}}})) != null ? stack1 : "")
    + "\r\n    </div>\r\n  </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"page__title\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibilityState") : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":8},"end":{"line":15,"column":21}}})) != null ? stack1 : "")
    + "<div class=\"page__title-inner\" "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibilityState") : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":39},"end":{"line":17,"column":106}}})) != null ? stack1 : "")
    + ">\r\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":18,"column":10},"end":{"line":18,"column":36}}})) != null ? stack1 : "")
    + "\r\n        </div>\r\n\r\n      </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"js-heading\"></div>";
},"5":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"page__subtitle\">\r\n        <div class=\"page__subtitle-inner\">\r\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"subtitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":27,"column":10},"end":{"line":27,"column":32}}})) != null ? stack1 : "")
    + "\r\n        </div>\r\n      </div>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"page__body\">\r\n        <div class=\"page__body-inner\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"pageBody") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":35,"column":10},"end":{"line":39,"column":17}}})) != null ? stack1 : "")
    + "        </div>\r\n      </div>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"pageBody") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":36,"column":10},"end":{"line":36,"column":32}}})) != null ? stack1 : "")
    + "\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":38,"column":10},"end":{"line":38,"column":28}}})) != null ? stack1 : "")
    + "\r\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"page__instruction\">\r\n        <div class=\"page__instruction-inner\">\r\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":47,"column":10},"end":{"line":47,"column":35}}})) != null ? stack1 : "")
    + "\r\n        </div>\r\n      </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\r\n\r\n<div class=\"page__inner\">\r\n\r\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),(depth0 != null ? lookupProperty(depth0,"subtitle") : depth0),(depth0 != null ? lookupProperty(depth0,"body") : depth0),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"any","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":54,"column":10}}})) != null ? stack1 : "")
    + "\r\n  <div class=\"article__container\">\r\n  </div>\r\n\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["shadow"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"shadow\" class=\"shadow js-shadow u-display-none\"></div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["assessmentResults"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"component__feedback assessmentresults__feedback\">\n      <div class=\"component__feedback-inner assessmentresults__feedback-inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"retryFeedback") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":8},"end":{"line":20,"column":15}}})) != null ? stack1 : "")
    + "\n        <button class=\"btn-text assessmentresults__retry-btn js-assessment-retry-btn\">\n          <span>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_retry") : depth0)) != null ? lookupProperty(stack1,"button") : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":24,"column":12},"end":{"line":28,"column":19}}})) != null ? stack1 : "")
    + "          </span>\n        </button>\n\n      </div>\n    </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"assessmentresults__retry-feedback\">\n          <div class=\"assessmentresults__retry-feedback-inner\">\n            "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"retryFeedback") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":17,"column":12},"end":{"line":17,"column":39}}})) != null ? stack1 : "")
    + "\n          </div>\n        </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_retry") : depth0)) != null ? lookupProperty(stack1,"button") : stack1), depth0))
    + "\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "            Retry\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<div class=\"component__inner assessmentresults__inner\">\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n  <div class=\"component__widget assessmentresults__widget\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isRetryEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":4},"end":{"line":34,"column":11}}})) != null ? stack1 : "")
    + "\n  </div>\n\n</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["blank"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"component__inner blank__inner\"></div>\n";
},"useData":true});

this["Handlebars"]["templates"]["flipcard"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, alias3=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"flipcard__item component__item item-"
    + alias2(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":6,"column":56},"end":{"line":6,"column":66}}}) : helper)))
    + "\">\n            <div class=\"flipcard__item-face flipcard__item-front\">\n                <img src=\""
    + alias2(alias3(((stack1 = (depth0 != null ? lookupProperty(depth0,"frontImage") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + "\" class=\"flipcard__item-frontImage\" aria-label=\""
    + alias2(alias3(((stack1 = (depth0 != null ? lookupProperty(depth0,"frontImage") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1), depth0))
    + "\" tabindex=\"0\">\n            </div>\n\n            <div class=\"flipcard__item-face flipcard__item-back\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"backTitle") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":16},"end":{"line":16,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"backBody") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":16},"end":{"line":21,"column":23}}})) != null ? stack1 : "")
    + "            </div>\n        </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"flipcard__item-back-title\">\n                "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"backTitle") || (depth0 != null ? lookupProperty(depth0,"backTitle") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"backTitle","hash":{},"data":data,"loc":{"start":{"line":14,"column":16},"end":{"line":14,"column":31}}}) : helper))) != null ? stack1 : "")
    + "\n                </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"flipcard__item-back-body\">\n                "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"backBody") || (depth0 != null ? lookupProperty(depth0,"backBody") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"backBody","hash":{},"data":data,"loc":{"start":{"line":19,"column":16},"end":{"line":19,"column":30}}}) : helper))) != null ? stack1 : "")
    + "\n                </div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"flipcard__notes\">\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"notes") || (depth0 != null ? lookupProperty(depth0,"notes") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"notes","hash":{},"data":data,"loc":{"start":{"line":29,"column":8},"end":{"line":29,"column":19}}}) : helper))) != null ? stack1 : "")
    + "\n    </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"flipcard__inner component__inner\" role=\"region\" aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_components") : stack1)) != null ? lookupProperty(stack1,"_flipcard") : stack1)) != null ? lookupProperty(stack1,"ariaRegion") : stack1), depth0))
    + "\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <div class=\"flipcard__widget component__widget clearfix\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":8},"end":{"line":24,"column":17}}})) != null ? stack1 : "")
    + "    </div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"notes") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":4},"end":{"line":31,"column":11}}})) != null ? stack1 : "")
    + "</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["hotgraphic"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " is-pin";
},"3":function(container,depth0,helpers,partials,data) {
    return " is-tile";
},"5":function(container,depth0,helpers,partials,data) {
    return " has-attribution";
},"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n    <img class=\"hotgraphic__image\" src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.program(10, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":9,"column":58},"end":{"line":9,"column":142}}})) != null ? stack1 : "")
    + ">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":4},"end":{"line":17,"column":11}}})) != null ? stack1 : "")
    + "\n    <div class=\"hotgraphic__pin-item-container\" role=\"list\">\n\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":6},"end":{"line":47,"column":15}}})) != null ? stack1 : "")
    + "\n    </div>\n\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "aria-label=\""
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1), depth0)) != null ? stack1 : "")
    + "\"";
},"10":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"component__attribution hotgraphic__attribution\">\n      <div class=\"component__attribution-inner hotgraphic__attribution-inner\">\n        "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1), depth0)) != null ? stack1 : "")
    + "\n      </div>\n    </div>\n";
},"14":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"hotgraphic__pin-item\" role=\"listitem\">\n\n        <button class=\"btn-icon hotgraphic__pin item-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":24,"column":53},"end":{"line":24,"column":63}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_classes") : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":63},"end":{"line":24,"column":117}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_pin") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":117},"end":{"line":24,"column":154}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":154},"end":{"line":24,"column":190}}})) != null ? stack1 : "")
    + " js-hotgraphic-item-click\" data-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":24,"column":229},"end":{"line":24,"column":239}}}) : helper)))
    + "\" style=\"top: "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"_top") || (depth0 != null ? lookupProperty(depth0,"_top") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_top","hash":{},"data":data,"loc":{"start":{"line":24,"column":253},"end":{"line":24,"column":263}}}) : helper))) != null ? stack1 : "")
    + "%; left: "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"_left") || (depth0 != null ? lookupProperty(depth0,"_left") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_left","hash":{},"data":data,"loc":{"start":{"line":24,"column":272},"end":{"line":24,"column":283}}}) : helper))) != null ? stack1 : "")
    + "%;\">\n\n          <span class=\"aria-label\">"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_useNumberedPins") : depths[1]),{"name":"if","hash":{},"fn":container.program(21, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":35},"end":{"line":26,"column":91}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_pin") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),{"name":"if","hash":{},"fn":container.program(23, data, 0, blockParams, depths),"inverse":container.program(25, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":26,"column":91},"end":{"line":26,"column":163}}})) != null ? stack1 : "")
    + ".</span>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_pin") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),{"name":"if","hash":{},"fn":container.program(27, data, 0, blockParams, depths),"inverse":container.program(29, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":28,"column":10},"end":{"line":42,"column":17}}})) != null ? stack1 : "")
    + "\n        </button>\n\n      </div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_classes") : stack1), depth0));
},"17":function(container,depth0,helpers,partials,data) {
    return " has-pin-image";
},"19":function(container,depth0,helpers,partials,data) {
    return " is-visited";
},"21":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression((lookupProperty(helpers,"math")||(depth0 && lookupProperty(depth0,"math"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(data && lookupProperty(data,"index")),"+",1,{"name":"math","hash":{},"data":data,"loc":{"start":{"line":26,"column":62},"end":{"line":26,"column":83}}}))
    + " ";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_pin") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":26,"column":107},"end":{"line":26,"column":129}}})) != null ? stack1 : "");
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":26,"column":137},"end":{"line":26,"column":156}}})) != null ? stack1 : "");
},"27":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <span class=\"hotgraphic__pin-image-container item-"
    + alias1(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data,"loc":{"start":{"line":29,"column":60},"end":{"line":29,"column":70}}}) : helper)))
    + "\">\n            <img class=\"hotgraphic__pin-image\" src=\""
    + alias1(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_pin") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + "\" aria-hidden=\"true\">\n          </span>\n";
},"29":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? lookupProperty(depths[1],"_useNumberedPins") : depths[1]),{"name":"if","hash":{},"fn":container.program(30, data, 0, blockParams, depths),"inverse":container.program(32, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":34,"column":10},"end":{"line":40,"column":17}}})) != null ? stack1 : "")
    + "\n";
},"30":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <span class=\"hotgraphic__pin-number\" aria-hidden=\"true\">\n            "
    + container.escapeExpression((lookupProperty(helpers,"math")||(depth0 && lookupProperty(depth0,"math"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(data && lookupProperty(data,"index")),"+",1,{"name":"math","hash":{},"data":data,"loc":{"start":{"line":36,"column":12},"end":{"line":36,"column":33}}}))
    + "\n          </span>\n";
},"32":function(container,depth0,helpers,partials,data) {
    return "          <span class=\"icon\" aria-hidden=\"true\"></span>\n";
},"34":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n    <div class=\"hotgraphic__tile-item-container\" role=\"list\">\n\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(35, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":55,"column":6},"end":{"line":69,"column":15}}})) != null ? stack1 : "")
    + "\n    </div>\n\n";
},"35":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"hotgraphic__tile-item\" role=\"listitem\">\n\n        <button class=\"hotgraphic__tile item-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":58,"column":45},"end":{"line":58,"column":55}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_classes") : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":58,"column":55},"end":{"line":58,"column":109}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":58,"column":109},"end":{"line":58,"column":145}}})) != null ? stack1 : "")
    + " js-hotgraphic-item-click\" data-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":58,"column":184},"end":{"line":58,"column":194}}}) : helper)))
    + "\">\n\n          <span class=\"aria-label\">"
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":60,"column":35},"end":{"line":60,"column":54}}})) != null ? stack1 : "")
    + ".</span>\n\n          <img class=\"hotgraphic__tile-image\" src=\""
    + alias4(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + "\">\n\n          <div class=\"icon\" aria-hidden=\"true\"></div>\n\n        </button>\n\n      </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner hotgraphic__inner\">\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n  <div class=\"component__widget hotgraphic__widget"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_useGraphicsAsPins") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(3, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":5,"column":50},"end":{"line":5,"column":114}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":114},"end":{"line":5,"column":165}}})) != null ? stack1 : "")
    + "\">\n\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_useGraphicsAsPins") : depth0),{"name":"unless","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.program(34, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":73,"column":15}}})) != null ? stack1 : "")
    + "\n  </div>\n\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["hotgraphicPopup"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"hotgraphic-popup__item"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_classes") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":36},"end":{"line":4,"column":72}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":72},"end":{"line":4,"column":108}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isActive") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":108},"end":{"line":4,"column":142}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isRound") : depths[1]),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":142},"end":{"line":4,"column":177}}})) != null ? stack1 : "")
    + "\" data-index="
    + alias2(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":4,"column":190},"end":{"line":4,"column":200}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isActive") : depth0),{"name":"unless","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":200},"end":{"line":4,"column":251}}})) != null ? stack1 : "")
    + ">\n\n    <div class=\"hotgraphic-popup__item-content\">\n      <div class=\"hotgraphic-popup__item-content-inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":8},"end":{"line":15,"column":15}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":8},"end":{"line":23,"column":15}}})) != null ? stack1 : "")
    + "\n      </div>\n    </div>\n\n    <div class=\"hotgraphic-popup__item-image-container"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":54},"end":{"line":28,"column":105}}})) != null ? stack1 : "")
    + "\">\n\n      <img class=\"hotgraphic-popup__item-image\" src=\""
    + alias2(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0, blockParams, depths),"inverse":container.program(21, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":30,"column":71},"end":{"line":30,"column":155}}})) != null ? stack1 : "")
    + ">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(23, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":6},"end":{"line":38,"column":13}}})) != null ? stack1 : "")
    + "\n    </div>\n\n  </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_classes") || (depth0 != null ? lookupProperty(depth0,"_classes") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_classes","hash":{},"data":data,"loc":{"start":{"line":4,"column":53},"end":{"line":4,"column":65}}}) : helper)));
},"4":function(container,depth0,helpers,partials,data) {
    return " is-visited";
},"6":function(container,depth0,helpers,partials,data) {
    return " is-active";
},"8":function(container,depth0,helpers,partials,data) {
    return " is-round";
},"10":function(container,depth0,helpers,partials,data) {
    return " aria-hidden=\"true\"";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isActive") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":12},"end":{"line":10,"column":56}}})) != null ? stack1 : "")
    + " class=\"hotgraphic-popup__item-title\" "
    + container.escapeExpression((lookupProperty(helpers,"a11y_attrs_heading")||(depth0 && lookupProperty(depth0,"a11y_attrs_heading"))||alias2).call(alias1,"notify",{"name":"a11y_attrs_heading","hash":{},"data":data,"loc":{"start":{"line":10,"column":94},"end":{"line":10,"column":125}}}))
    + ">\n          <div class=\"hotgraphic-popup__item-title-inner\">\n            "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":12,"column":12},"end":{"line":12,"column":31}}})) != null ? stack1 : "")
    + "\n          </div>\n        </div>\n";
},"13":function(container,depth0,helpers,partials,data) {
    return " id=\"notify-heading\"";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"hotgraphic-popup__item-body\">\n          <div class=\"hotgraphic-popup__item-body-inner\">\n            "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":20,"column":12},"end":{"line":20,"column":30}}})) != null ? stack1 : "")
    + "\n          </div>\n        </div>\n";
},"17":function(container,depth0,helpers,partials,data) {
    return " has-attribution";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "aria-label=\""
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1), depth0)) != null ? stack1 : "")
    + "\"";
},"21":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"component__attribution hotgraphic-popup__item-attribution\">\n        <div class=\"component__attribution-inner hotgraphic-popup__item-attribution-inner\">\n          "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1), depth0)) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"25":function(container,depth0,helpers,partials,data) {
    return " hide-pagination";
},"27":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"hotgraphic-popup__nav\">\n\n    <button data-direction=\"back\" class=\"btn-icon hotgraphic-popup__controls back js-hotgraphic-controls-click\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"previous") : stack1), depth0))
    + "\">\n      <span class=\"icon\"></span>\n    </button>\n\n    <div class=\"hotgraphic-popup__count\"></div>\n\n    <button data-direction=\"next\" class=\"btn-icon hotgraphic-popup__controls next js-hotgraphic-controls-click\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"next") : stack1), depth0))
    + "\">\n      <span class=\"icon\"></span>\n    </button>\n\n  </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"hotgraphic-popup__inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":43,"column":11}}})) != null ? stack1 : "")
    + "\n</div>\n\n<div class=\"hotgraphic-popup__toolbar"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_hidePagination") : depth0),{"name":"if","hash":{},"fn":container.program(25, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":37},"end":{"line":47,"column":83}}})) != null ? stack1 : "")
    + "\">\n\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_hidePagination") : depth0),{"name":"unless","hash":{},"fn":container.program(27, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":49,"column":2},"end":{"line":63,"column":13}}})) != null ? stack1 : "")
    + "\n  <button class=\"btn-icon hotgraphic-popup__close js-hotgraphic-popup-close\" aria-label=\""
    + alias2(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"closePopup") : stack1), depth0))
    + "\">\n    <span class=\"icon\"></span>\n  </button>\n\n</div>\n\n"
    + alias2(((helper = (helper = lookupProperty(helpers,"a11y_wrap_focus") || (depth0 != null ? lookupProperty(depth0,"a11y_wrap_focus") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"a11y_wrap_focus","hash":{},"data":data,"loc":{"start":{"line":71,"column":0},"end":{"line":71,"column":19}}}) : helper)))
    + "\n";
},"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["media"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <button class=\"aria-label js-skip-to-transcript\" tabindex=\"-1\" aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_components") : stack1)) != null ? lookupProperty(stack1,"_media") : stack1)) != null ? lookupProperty(stack1,"skipToTranscript") : stack1), depth0))
    + "\"></button>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"poster") : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":4},"end":{"line":15,"column":11}}})) != null ? stack1 : "")
    + "    <audio src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"mp3") : stack1), depth0))
    + "\" type=\"audio/mp3\" style=\"width: 100%; height: 100%;\"/>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <img class=\"media_poster is-audio\" src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"poster") : stack1), depth0))
    + "\">\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"ogg") : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":18,"column":4},"end":{"line":46,"column":11}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <audio src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"ogg") : stack1), depth0))
    + "\" type=\"audio/ogg\" style=\"width: 100%; height: 100%;\"/>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <video aria-hidden=\"true\" preload=\"none\"\n        "
    + ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_aspectRatio") : depth0),"square",{"name":"equals","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":22,"column":8},"end":{"line":25,"column":19}}})) != null ? stack1 : "")
    + "        "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_playsinline") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":8},"end":{"line":26,"column":47}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"type") : stack1),"video/vimeo",{"name":"equals","hash":{},"fn":container.program(19, data, 0),"inverse":container.program(21, data, 0),"data":data,"loc":{"start":{"line":26,"column":48},"end":{"line":26,"column":130}}})) != null ? stack1 : "")
    + " style=\"width:100%; height:100%;\" controls=\"controls\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"source") : stack1),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.program(25, data, 0),"data":data,"loc":{"start":{"line":27,"column":8},"end":{"line":39,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_useClosedCaptions") : depth0),{"name":"if","hash":{},"fn":container.program(32, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":8},"end":{"line":44,"column":15}}})) != null ? stack1 : "")
    + "      </video>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return " width=\"640\" height=\"640\"\n        ";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_aspectRatio") : depth0),"portrait",{"name":"equals","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(15, data, 0),"data":data,"loc":{"start":{"line":23,"column":8},"end":{"line":25,"column":8}}})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    return " width=\"540\" height=\"960\"\n        ";
},"15":function(container,depth0,helpers,partials,data) {
    return " width=\"640\" height=\"360\"\n        ";
},"17":function(container,depth0,helpers,partials,data) {
    return " playsinline";
},"19":function(container,depth0,helpers,partials,data) {
    return "";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "poster=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"poster") : stack1), depth0))
    + "\"";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <source src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"source") : stack1), depth0))
    + "\" type=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"type") : stack1), depth0))
    + "\"/>\n";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"mp4") : stack1),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":10},"end":{"line":32,"column":17}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"ogv") : stack1),{"name":"if","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":10},"end":{"line":35,"column":17}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"webm") : stack1),{"name":"if","hash":{},"fn":container.program(30, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":10},"end":{"line":38,"column":17}}})) != null ? stack1 : "");
},"26":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <source src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"mp4") : stack1), depth0))
    + "\" type=\"video/mp4\"/>\n";
},"28":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <source src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"ogv") : stack1), depth0))
    + "\" type=\"video/ogg\"/>\n";
},"30":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <source src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"webm") : stack1), depth0))
    + "\" type=\"video/webm\"/>\n";
},"32":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"cc") : stack1),{"name":"each","hash":{},"fn":container.program(33, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":41,"column":10},"end":{"line":43,"column":19}}})) != null ? stack1 : "");
},"33":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <track kind=\"subtitles\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"src") || (depth0 != null ? lookupProperty(depth0,"src") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data,"loc":{"start":{"line":42,"column":41},"end":{"line":42,"column":48}}}) : helper)))
    + "\" type=\"text/vtt\" srclang=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"srclang") || (depth0 != null ? lookupProperty(depth0,"srclang") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"srclang","hash":{},"data":data,"loc":{"start":{"line":42,"column":75},"end":{"line":42,"column":86}}}) : helper)))
    + "\" />\n";
},"35":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"media__transcript-container\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"_inlineTranscript") : stack1),{"name":"if","hash":{},"fn":container.program(36, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":53,"column":4},"end":{"line":63,"column":11}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"_externalTranscript") : stack1),{"name":"if","hash":{},"fn":container.program(41, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":65,"column":4},"end":{"line":75,"column":11}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"_inlineTranscript") : stack1),{"name":"if","hash":{},"fn":container.program(44, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":77,"column":4},"end":{"line":83,"column":11}}})) != null ? stack1 : "")
    + "\n  </div>\n";
},"36":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <button class=\"media__transcript-btn media__transcript-btn-inline js-media-inline-transcript-toggle\" aria-expanded=\"false\">\n      <span class=\"media__transcript-btn-text\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"inlineTranscriptButton") : stack1),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.program(39, data, 0),"data":data,"loc":{"start":{"line":56,"column":8},"end":{"line":60,"column":15}}})) != null ? stack1 : "")
    + "      </span>\n    </button>\n";
},"37":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"inlineTranscriptButton") : stack1), depth0))
    + "\n";
},"39":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"transcriptLink") : stack1), depth0))
    + "\n";
},"41":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <button class=\"media__transcript-btn media__transcript-btn-external js-media-external-transcript-click\" onclick=\"window.open('"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"transcriptLink") : stack1), depth0))
    + "')\">\n      <span class=\"media__transcript-btn-text\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"transcriptLinkButton") : stack1),{"name":"if","hash":{},"fn":container.program(42, data, 0),"inverse":container.program(39, data, 0),"data":data,"loc":{"start":{"line":68,"column":8},"end":{"line":72,"column":15}}})) != null ? stack1 : "")
    + "      </span>\n    </button>\n";
},"42":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"transcriptLinkButton") : stack1), depth0))
    + "\n";
},"44":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"media__transcript-body-inline\" role=\"region\" aria-label=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"inlineTranscriptButton") : stack1),{"name":"if","hash":{},"fn":container.program(45, data, 0),"inverse":container.program(47, data, 0),"data":data,"loc":{"start":{"line":78,"column":73},"end":{"line":78,"column":198}}})) != null ? stack1 : "")
    + "\">\n      <div class=\"media__transcript-body-inline-inner\">\n        "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"inlineTranscriptBody") : stack1),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":80,"column":8},"end":{"line":80,"column":54}}})) != null ? stack1 : "")
    + "\n      </div>\n    </div>\n";
},"45":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"inlineTranscriptButton") : stack1), depth0));
},"47":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"transcriptLink") : stack1), depth0));
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\n<div class=\"component__inner media__inner\">\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"_externalTranscript") : stack1),((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"_inlineTranscript") : stack1),{"name":"any","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":8,"column":10}}})) != null ? stack1 : "")
    + "\n  <div class=\"component__widget media__widget\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"mp3") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":12,"column":2},"end":{"line":47,"column":9}}})) != null ? stack1 : "")
    + "  </div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_transcript") : depth0),{"name":"if","hash":{},"fn":container.program(35, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":50,"column":2},"end":{"line":86,"column":9}}})) != null ? stack1 : "")
    + "\n</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["narrative"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " narrative__text-controls";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"narrative__content-item"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":43},"end":{"line":11,"column":79}}})) != null ? stack1 : "")
    + "\" data-index=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":11,"column":93},"end":{"line":11,"column":103}}}) : helper)))
    + "\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":10},"end":{"line":19,"column":17}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":10},"end":{"line":27,"column":17}}})) != null ? stack1 : "")
    + "\n        </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return " is-visited";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"narrative__content-title\">\n            <div class=\"narrative__content-title-inner\" role=\"heading\" aria-level=\""
    + container.escapeExpression((lookupProperty(helpers,"a11y_aria_level")||(depth0 && lookupProperty(depth0,"a11y_aria_level"))||alias2).call(alias1,((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"_id")),"componentItem",(depth0 != null ? lookupProperty(depth0,"_ariaLevel") : depth0),{"name":"a11y_aria_level","hash":{},"data":data,"loc":{"start":{"line":15,"column":83},"end":{"line":15,"column":139}}}))
    + "\">\n              "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":16,"column":14},"end":{"line":16,"column":33}}})) != null ? stack1 : "")
    + "\n            </div>\n          </div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"narrative__content-body\">\n            <div class=\"narrative__content-body-inner\">\n              "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":24,"column":14},"end":{"line":24,"column":32}}})) != null ? stack1 : "")
    + "\n            </div>\n          </div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"narrative__progress js-narrative-progress-click"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":71},"end":{"line":40,"column":107}}})) != null ? stack1 : "")
    + "\" data-index=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":40,"column":121},"end":{"line":40,"column":131}}}) : helper)))
    + "\"></div>\n";
},"12":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <button class=\"narrative__strapline-btn js-narrative-strapline-open-popup"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":58,"column":83},"end":{"line":58,"column":119}}})) != null ? stack1 : "")
    + "\" aria-label=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"strapline") || (depth0 != null ? lookupProperty(depth0,"strapline") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"strapline","hash":{},"data":data,"loc":{"start":{"line":58,"column":133},"end":{"line":58,"column":148}}}) : helper))) != null ? stack1 : "")
    + "\" style=\"width: "
    + alias4(container.lambda((depths[1] != null ? lookupProperty(depths[1],"_itemWidth") : depths[1]), depth0))
    + "%\" data-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":58,"column":196},"end":{"line":58,"column":206}}}) : helper)))
    + "\">\n\n            <span class=\"narrative__strapline-title\">\n              <span class=\"narrative__strapline-title-inner\">\n                "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"strapline") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":62,"column":16},"end":{"line":62,"column":39}}})) != null ? stack1 : "")
    + "\n              </span>\n            </span>\n\n            <span class=\"btn-icon narrative__strapline-icon\">\n              <span class=\"icon\" aria-hidden=\"true\"></span>\n            </span>\n\n          </button>\n";
},"14":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"narrative__slider-image-container"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":83,"column":53},"end":{"line":83,"column":89}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":83,"column":89},"end":{"line":83,"column":140}}})) != null ? stack1 : "")
    + "\" style=\"width: "
    + alias3(alias2((depths[1] != null ? lookupProperty(depths[1],"_itemWidth") : depths[1]), depth0))
    + "%\" data-index=\""
    + alias3(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":83,"column":188},"end":{"line":83,"column":198}}}) : helper)))
    + "\">\n\n          <img class=\"narrative__slider-image js-narrative-swipe\" src=\""
    + alias3(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.program(19, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":85,"column":89},"end":{"line":85,"column":186}}})) != null ? stack1 : "")
    + ">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(21, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":87,"column":10},"end":{"line":93,"column":17}}})) != null ? stack1 : "")
    + "\n        </div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    return " has-attribution";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "aria-label=\""
    + container.escapeExpression((lookupProperty(helpers,"a11y_normalize")||(depth0 && lookupProperty(depth0,"a11y_normalize"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),{"name":"a11y_normalize","hash":{},"data":data,"loc":{"start":{"line":85,"column":121},"end":{"line":85,"column":152}}}))
    + "\"";
},"19":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"component__attribution narrative__attribution\">\n            <div class=\"component__attribution-inner narrative__attribution-inner\">\n              "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1), depth0)) != null ? stack1 : "")
    + "\n            </div>\n          </div>\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"narrative__progress js-narrative-progress-click"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":113,"column":65},"end":{"line":113,"column":101}}})) != null ? stack1 : "")
    + "\" data-index=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":113,"column":115},"end":{"line":113,"column":125}}}) : helper)))
    + "\"> </div>\n";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      \n      \n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":120,"column":7},"end":{"line":126,"column":17}}})) != null ? stack1 : "");
},"26":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"narrative__content-title\">\n            <div class=\"narrative__content-title-inner js-narrative-progress-click"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":122,"column":82},"end":{"line":122,"column":118}}})) != null ? stack1 : "")
    + "\" data-index=\""
    + alias3(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":122,"column":132},"end":{"line":122,"column":142}}}) : helper)))
    + "\" role=\"heading\" aria-level=\""
    + alias3((lookupProperty(helpers,"a11y_aria_level")||(depth0 && lookupProperty(depth0,"a11y_aria_level"))||alias2).call(alias1,((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"_id")),"componentItem",(depth0 != null ? lookupProperty(depth0,"_ariaLevel") : depth0),{"name":"a11y_aria_level","hash":{},"data":data,"loc":{"start":{"line":122,"column":171},"end":{"line":122,"column":227}}}))
    + "\">\n              "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":123,"column":14},"end":{"line":123,"column":33}}})) != null ? stack1 : "")
    + "\n            </div>\n          </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression, alias4=container.hooks.helperMissing, alias5="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner narrative__inner\">\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n  <div class=\"component__widget narrative__widget"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_hasNavigationInTextArea") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":49},"end":{"line":5,"column":113}}})) != null ? stack1 : "")
    + "\">\n\n    <div class=\"narrative__content\">\n      <div class=\"narrative__content-inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":8},"end":{"line":30,"column":17}}})) != null ? stack1 : "")
    + "\n        <div class=\"narrative__controls-container u-clearfix\">\n\n          <button data-direction=\"left\" class=\"btn-icon narrative__controls narrative__controls-left js-narrative-controls-click\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"previous") : stack1), depth0))
    + "\">\n            <span class=\"icon\" aria-hidden=\"true\"></span>\n          </button>\n\n          <div class=\"narrative__indicators\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":39,"column":12},"end":{"line":41,"column":21}}})) != null ? stack1 : "")
    + "          </div>\n\n          <button data-direction=\"right\" class=\"btn-icon narrative__controls narrative__controls-right js-narrative-controls-click\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"next") : stack1), depth0))
    + "\">\n            <span class=\"icon\" aria-hidden=\"true\"></span>\n          </button>\n        </div>\n\n      </div>\n    </div>\n\n    <div class=\"narrative__strapline\">\n\n      <div class=\"narrative__strapline-header\">\n        <div class=\"narrative__strapline-header-inner u-clearfix\" style=\"width: "
    + alias3(((helper = (helper = lookupProperty(helpers,"_totalWidth") || (depth0 != null ? lookupProperty(depth0,"_totalWidth") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias1,{"name":"_totalWidth","hash":{},"data":data,"loc":{"start":{"line":55,"column":80},"end":{"line":55,"column":95}}}) : helper)))
    + "%\">\n\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":57,"column":10},"end":{"line":71,"column":19}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"narrative__slide-container\">\n\n      <div class=\"narrative__slider u-clearfix\" style=\"width: "
    + alias3(((helper = (helper = lookupProperty(helpers,"_totalWidth") || (depth0 != null ? lookupProperty(depth0,"_totalWidth") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias1,{"name":"_totalWidth","hash":{},"data":data,"loc":{"start":{"line":80,"column":62},"end":{"line":80,"column":77}}}) : helper)))
    + "%\">\n\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":82,"column":8},"end":{"line":96,"column":17}}})) != null ? stack1 : "")
    + "\n      </div>\n\n      <button data-direction=\"left\" class=\"btn-icon narrative__controls narrative__controls-left js-narrative-controls-click\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"previous") : stack1), depth0))
    + "\">\n        <span class=\"icon\" aria-hidden=\"true\"></span>\n      </button>\n\n      <button data-direction=\"right\" class=\"btn-icon narrative__controls narrative__controls-right js-narrative-controls-click\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"next") : stack1), depth0))
    + "\">\n        <span class=\"icon\" aria-hidden=\"true\"></span>\n      </button>\n\n    </div>\n\n    <div class=\"narrative__indicators narrative__slide-indicators\">\n      <div class=\"indicators\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(23, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":112,"column":6},"end":{"line":114,"column":15}}})) != null ? stack1 : "")
    + "      </div>\n      <div class=\"titles\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(25, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":117,"column":6},"end":{"line":127,"column":16}}})) != null ? stack1 : "")
    + "       </div>\n\n    </div>\n\n  </div>\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["slider"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " is-disabled"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isInteractionComplete") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":80},"end":{"line":5,"column":246}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " is-complete is-submitted show-user-answer"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_canShowMarking") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":152},"end":{"line":5,"column":239}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isCorrect") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":5,"column":175},"end":{"line":5,"column":232}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return " is-correct";
},"6":function(container,depth0,helpers,partials,data) {
    return " is-incorrect";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"slider__label-container js-slider-label-container\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"labelStart") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":16,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"labelEnd") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":6},"end":{"line":24,"column":13}}})) != null ? stack1 : "")
    + "\n    </div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"slider__label-start\" aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_components") : stack1)) != null ? lookupProperty(stack1,"_slider") : stack1)) != null ? lookupProperty(stack1,"labelStart") : stack1), depth0))
    + "\">\n        <div class=\"slider__label-start-inner\">\n          "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"labelStart") || (depth0 != null ? lookupProperty(depth0,"labelStart") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"labelStart","hash":{},"data":data,"loc":{"start":{"line":13,"column":10},"end":{"line":13,"column":26}}}) : helper))) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"slider__label-end\" aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_components") : stack1)) != null ? lookupProperty(stack1,"_slider") : stack1)) != null ? lookupProperty(stack1,"labelEnd") : stack1), depth0))
    + "\">\n        <div class=\"slider__label-end-inner\">\n          "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"labelEnd") || (depth0 != null ? lookupProperty(depth0,"labelEnd") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"labelEnd","hash":{},"data":data,"loc":{"start":{"line":21,"column":10},"end":{"line":21,"column":24}}}) : helper))) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"slider__number js-slider-number js-slider-number-click\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"value") || (depth0 != null ? lookupProperty(depth0,"value") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data,"loc":{"start":{"line":31,"column":83},"end":{"line":31,"column":92}}}) : helper)))
    + "\" aria-hidden=\"true\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"value") || (depth0 != null ? lookupProperty(depth0,"value") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data,"loc":{"start":{"line":31,"column":113},"end":{"line":31,"column":122}}}) : helper)))
    + "</div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_userAnswer") || (depth0 != null ? lookupProperty(depth0,"_userAnswer") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_userAnswer","hash":{},"data":data,"loc":{"start":{"line":45,"column":100},"end":{"line":45,"column":115}}}) : helper)));
},"17":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_scaleStart") || (depth0 != null ? lookupProperty(depth0,"_scaleStart") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_scaleStart","hash":{},"data":data,"loc":{"start":{"line":45,"column":123},"end":{"line":45,"column":138}}}) : helper)));
},"19":function(container,depth0,helpers,partials,data) {
    return "rtl";
},"21":function(container,depth0,helpers,partials,data) {
    return " disabled";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner slider__inner\">\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n  <div class=\"component__widget slider__widget"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isEnabled") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":46},"end":{"line":5,"column":257}}})) != null ? stack1 : "")
    + "\">\n\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"labelStart") : depth0),(depth0 != null ? lookupProperty(depth0,"labelEnd") : depth0),{"name":"any","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":27,"column":12}}})) != null ? stack1 : "")
    + "\n    <div class=\"slider__number-container\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":6},"end":{"line":32,"column":15}}})) != null ? stack1 : "")
    + "      <div class=\"slider__number-model-range js-slider-model-range\"></div>\n      <div class=\"slider__number-answer\"></div>\n      <div class=\"slider__number-selection js-slider-number-selection a11y-ignore\" aria-hidden=\"true\" tabindex=\"-1\"></div>\n    </div>\n\n    <div class=\"slider__scale-container js-slider-scale\">\n      <div class=\"slider__scale-notch slider__scale-notch-start\"></div>\n      <div class=\"slider__scale-notch-container js-slider-scale-notch-container\"></div>\n      <div class=\"slider__scale-notch slider__scale-notch-end\"></div>\n    </div>\n\n    <div class=\"slider__item"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isEnabled") : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":28},"end":{"line":44,"column":118}}})) != null ? stack1 : "")
    + "\">\n      <input class=\"slider__item-input js-slider-item-input\" type=\"range\" value=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_userAnswer") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(17, data, 0),"data":data,"loc":{"start":{"line":45,"column":81},"end":{"line":45,"column":145}}})) != null ? stack1 : "")
    + "\" min=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_scaleStart") || (depth0 != null ? lookupProperty(depth0,"_scaleStart") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_scaleStart","hash":{},"data":data,"loc":{"start":{"line":45,"column":152},"end":{"line":45,"column":167}}}) : helper)))
    + "\" max=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_scaleEnd") || (depth0 != null ? lookupProperty(depth0,"_scaleEnd") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_scaleEnd","hash":{},"data":data,"loc":{"start":{"line":45,"column":174},"end":{"line":45,"column":187}}}) : helper)))
    + "\" aria-valuenow=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_userAnswer") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(17, data, 0),"data":data,"loc":{"start":{"line":45,"column":204},"end":{"line":45,"column":268}}})) != null ? stack1 : "")
    + "\" aria-valuemin=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_scaleStart") || (depth0 != null ? lookupProperty(depth0,"_scaleStart") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_scaleStart","hash":{},"data":data,"loc":{"start":{"line":45,"column":285},"end":{"line":45,"column":300}}}) : helper)))
    + "\" aria-valuemax=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_scaleEnd") || (depth0 != null ? lookupProperty(depth0,"_scaleEnd") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_scaleEnd","hash":{},"data":data,"loc":{"start":{"line":45,"column":317},"end":{"line":45,"column":330}}}) : helper)))
    + "\" data-direction=\""
    + ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_marginDir") : depth0),"right",{"name":"equals","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":45,"column":348},"end":{"line":45,"column":392}}})) != null ? stack1 : "")
    + "\" "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isEnabled") : depth0),{"name":"unless","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":45,"column":394},"end":{"line":45,"column":436}}})) != null ? stack1 : "")
    + ">\n    </div>\n\n  </div>\n\n  <div class=\"btn__container\"></div>\n\n</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["flipper"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					<div class=\"flipper-item nth-child-"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":8,"column":40},"end":{"line":8,"column":50}}}) : helper)))
    + " state-0\">\n						"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":9,"column":85}}})) != null ? stack1 : "")
    + "\n						"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":10,"column":82}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_graphic") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":6},"end":{"line":13,"column":13}}})) != null ? stack1 : "")
    + "						"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":6},"end":{"line":14,"column":103}}})) != null ? stack1 : "")
    + "\n					</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"flipper-item-title\">"
    + ((stack1 = (lookupProperty(helpers,"a11y_text")||(depth0 && lookupProperty(depth0,"a11y_text"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"a11y_text","hash":{},"data":data,"loc":{"start":{"line":9,"column":51},"end":{"line":9,"column":72}}})) != null ? stack1 : "")
    + "</div>";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"flipper-item-body\">"
    + ((stack1 = (lookupProperty(helpers,"a11y_text")||(depth0 && lookupProperty(depth0,"a11y_text"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"a11y_text","hash":{},"data":data,"loc":{"start":{"line":10,"column":49},"end":{"line":10,"column":69}}})) != null ? stack1 : "")
    + "</div>";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "							"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":7},"end":{"line":12,"column":110}}})) != null ? stack1 : "")
    + "\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<img class=\"flipper-item-img\" src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + "\" alt=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1), depth0))
    + "\">";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"flipper-item-instruction\">"
    + ((stack1 = (lookupProperty(helpers,"a11y_text")||(depth0 && lookupProperty(depth0,"a11y_text"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"a11y_text","hash":{},"data":data,"loc":{"start":{"line":14,"column":63},"end":{"line":14,"column":90}}})) != null ? stack1 : "")
    + "</div>";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "						"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_image") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":6},"end":{"line":20,"column":95}}})) != null ? stack1 : "")
    + "\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<img class=\"item-img\" src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"_image") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + "\" alt=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"_image") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1), depth0))
    + "\">";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"flipper-inner component-inner\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "	<div class=\"flipper-widget component-widget\">\n		<div class=\"flipper-container\">\n			\n			<div class=\"flipper stage-0\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":16,"column":13}}})) != null ? stack1 : "")
    + "			</div>\n			<div class=\"image-container\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_image") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":4},"end":{"line":21,"column":11}}})) != null ? stack1 : "")
    + "			</div>\n		</div>\n	</div>\n</div>";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["pageNav-tooltip"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"pagenav__tooltip-text\">\n  <div class=\"pagenav__tooltip-text-inner\">\n    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"tooltip") || (depth0 != null ? lookupProperty(depth0,"tooltip") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"tooltip","hash":{},"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":3,"column":17}}}) : helper))) != null ? stack1 : "")
    + "\n  </div>\n</div>\n\n<div class=\"pagenav__triangle\"></div>\n";
},"useData":true});

this["Handlebars"]["templates"]["pageNav"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"pageNav-item"),depth0,{"name":"pageNav-item","data":data,"indent":"      ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner pagenav__inner\">\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n  <div class=\"component__widget pagenav__widget\">\n\n    <div class=\"pagenav__tooltip-container\"></div>\n\n    <div class=\"pagenav__btn-container\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":12,"column":15}}})) != null ? stack1 : "")
    + "    </div>\n\n  </div>\n\n</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["languagePickerDrawerView"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"languagepicker-drawer__item drawer__item is-"
    + alias4(((helper = (helper = lookupProperty(helpers,"_language") || (depth0 != null ? lookupProperty(depth0,"_language") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_language","hash":{},"data":data,"loc":{"start":{"line":10,"column":60},"end":{"line":10,"column":73}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isSelected") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":73},"end":{"line":10,"column":111}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_direction") : depth0),"ltr",{"name":"equals","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":111},"end":{"line":10,"column":157}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_direction") : depth0),"rtl",{"name":"equals","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":157},"end":{"line":10,"column":203}}})) != null ? stack1 : "")
    + "\" role=\"listitem\">\n\n        <button class=\"languagepicker-drawer__item-btn drawer__item-btn js-languagepicker-item-btn"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_isSelected") : depth0),(depth0 != null ? lookupProperty(depth0,"_isDisabled") : depth0),{"name":"any","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":98},"end":{"line":12,"column":150}}})) != null ? stack1 : "")
    + "\" data-language=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_language") || (depth0 != null ? lookupProperty(depth0,"_language") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_language","hash":{},"data":data,"loc":{"start":{"line":12,"column":167},"end":{"line":12,"column":180}}}) : helper)))
    + "\""
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_isSelected") : depth0),(depth0 != null ? lookupProperty(depth0,"_isDisabled") : depth0),{"name":"any","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":181},"end":{"line":12,"column":256}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isSelected") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":256},"end":{"line":12,"column":302}}})) != null ? stack1 : "")
    + " lang=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_language") || (depth0 != null ? lookupProperty(depth0,"_language") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_language","hash":{},"data":data,"loc":{"start":{"line":12,"column":309},"end":{"line":12,"column":322}}}) : helper)))
    + "\">\n          <span class=\"languagepicker-drawer__title drawer__item-title\">\n            <span class=\"languagepicker-drawer__title-inner drawer__item-title-inner\">\n              "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayName") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":15,"column":14},"end":{"line":15,"column":39}}})) != null ? stack1 : "")
    + "\n            </span>\n          </span>\n        </button>\n\n    </div>\n\n";
},"2":function(container,depth0,helpers,partials,data) {
    return " is-selected";
},"4":function(container,depth0,helpers,partials,data) {
    return " is-ltr";
},"6":function(container,depth0,helpers,partials,data) {
    return " is-rtl";
},"8":function(container,depth0,helpers,partials,data) {
    return " is-disabled";
},"10":function(container,depth0,helpers,partials,data) {
    return " aria-disabled=\"true\" tabindex=\"-1\"";
},"12":function(container,depth0,helpers,partials,data) {
    return " aria-current='true'";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<div class=\"languagepicker-drawer\">\n  "
    + ((stack1 = (lookupProperty(helpers,"a11y_aria_label")||(depth0 && lookupProperty(depth0,"a11y_aria_label"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_extensions") : stack1)) != null ? lookupProperty(stack1,"_languagePicker") : stack1)) != null ? lookupProperty(stack1,"languageSelector") : stack1),{"name":"a11y_aria_label","hash":{},"data":data,"loc":{"start":{"line":5,"column":2},"end":{"line":5,"column":77}}})) != null ? stack1 : "")
    + "\n\n  <div class=\"languagepicker-drawer__inner\" role=\"list\">\n\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_languages") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":4},"end":{"line":22,"column":13}}})) != null ? stack1 : "")
    + "  </div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["languagePickerNavigation"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"nav__inner\"></div>\n";
},"useData":true});

this["Handlebars"]["templates"]["languagePickerView"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"languagepicker__title\">\n    <div class=\"languagepicker__title-inner\" role=\"heading\" aria-level=\"1\">\n      "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":6,"column":6},"end":{"line":6,"column":32}}})) != null ? stack1 : "")
    + "\n    </div>\n  </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"languagepicker__body\">\n    <div class=\"languagepicker__body-inner\">\n      "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":14,"column":6},"end":{"line":14,"column":24}}})) != null ? stack1 : "")
    + "\n    </div>\n  </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <button class=\"btn-text languagepicker__language-btn is-"
    + alias4(((helper = (helper = lookupProperty(helpers,"_language") || (depth0 != null ? lookupProperty(depth0,"_language") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_language","hash":{},"data":data,"loc":{"start":{"line":23,"column":62},"end":{"line":23,"column":75}}}) : helper)))
    + " js-languagepicker-btn-click"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isDisabled") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":103},"end":{"line":23,"column":141}}})) != null ? stack1 : "")
    + "\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_language") || (depth0 != null ? lookupProperty(depth0,"_language") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_language","hash":{},"data":data,"loc":{"start":{"line":23,"column":150},"end":{"line":23,"column":163}}}) : helper)))
    + "\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isDisabled") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":164},"end":{"line":23,"column":225}}})) != null ? stack1 : "")
    + " lang=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_language") || (depth0 != null ? lookupProperty(depth0,"_language") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_language","hash":{},"data":data,"loc":{"start":{"line":23,"column":232},"end":{"line":23,"column":245}}}) : helper)))
    + "\">\n        "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayName") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":24,"column":8},"end":{"line":24,"column":33}}})) != null ? stack1 : "")
    + "\n      </button>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return " is-disabled";
},"8":function(container,depth0,helpers,partials,data) {
    return " aria-disabled=\"true\" tabindex=\"-1\"";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"languagepicker__inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":9,"column":9}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":2},"end":{"line":17,"column":9}}})) != null ? stack1 : "")
    + "\n  <div class=\"languagepicker__languages\">\n    <div class=\"languagepicker__languages-inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_languages") : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":6},"end":{"line":26,"column":15}}})) != null ? stack1 : "")
    + "\n    </div>\n  </div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["pageLevelProgress"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<div class=\"pagelevelprogress__inner\">\n  "
    + ((stack1 = (lookupProperty(helpers,"a11y_aria_label")||(depth0 && lookupProperty(depth0,"a11y_aria_label"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_extensions") : stack1)) != null ? lookupProperty(stack1,"_pageLevelProgress") : stack1)) != null ? lookupProperty(stack1,"pageLevelProgress") : stack1),{"name":"a11y_aria_label","hash":{},"data":data,"loc":{"start":{"line":5,"column":2},"end":{"line":5,"column":81}}})) != null ? stack1 : "")
    + "\n\n  <div role=\"list\" class=\"js-children\">\n  </div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["pageLevelProgressIndicator"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <span class=\"aria-label js-indicator-aria-label\">\n    "
    + container.escapeExpression((lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"ariaLabel") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":10,"column":4},"end":{"line":10,"column":25}}}))
    + "\n  </span>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias4(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<span class=\"pagelevelprogress__indicator-inner\">\n\n  <span class=\"pagelevelprogress__indicator-bar js-indicator-bar\" style=\"width: "
    + alias4(((helper = (helper = lookupProperty(helpers,"percentageComplete") || (depth0 != null ? lookupProperty(depth0,"percentageComplete") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"percentageComplete","hash":{},"data":data,"loc":{"start":{"line":6,"column":80},"end":{"line":6,"column":102}}}) : helper)))
    + "%;\"></span>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"ariaLabel") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":2},"end":{"line":12,"column":9}}})) != null ? stack1 : "")
    + "\n</span>\n";
},"useData":true});

this["Handlebars"]["templates"]["pageLevelProgressItem"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " is-disabled";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"locked") : stack1), depth0))
    + ".";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_extensions") : stack1)) != null ? lookupProperty(stack1,"_pageLevelProgress") : stack1)) != null ? lookupProperty(stack1,"optionalContent") : stack1), depth0))
    + ".";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isComplete") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":5,"column":193},"end":{"line":5,"column":329}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"complete") : stack1), depth0))
    + ".";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"incomplete") : stack1), depth0))
    + ".";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <span class=\"pagelevelprogress__item-optional\">\n    <span class=\"pagelevelprogress__item-optional-inner\">\n      "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_extensions") : stack1)) != null ? lookupProperty(stack1,"_pageLevelProgress") : stack1)) != null ? lookupProperty(stack1,"optionalContent") : stack1), depth0))
    + "\n    </span>\n  </span>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias4(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\n<button\n  class=\"pagelevelprogress__item-btn drawer__item-btn"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_isLocked") : depth0),(lookupProperty(helpers,"none")||(depth0 && lookupProperty(depth0,"none"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisible") : depth0),{"name":"none","hash":{},"data":data,"loc":{"start":{"line":3,"column":70},"end":{"line":3,"column":87}}}),{"name":"any","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":53},"end":{"line":3,"column":109}}})) != null ? stack1 : "")
    + " js-indicator js-pagelevelprogress-item-click\"\n  data-pagelevelprogress-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_id") || (depth0 != null ? lookupProperty(depth0,"_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":4,"column":29},"end":{"line":4,"column":36}}}) : helper)))
    + "\"\n  aria-label=\""
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_isLocked") : depth0),(lookupProperty(helpers,"none")||(depth0 && lookupProperty(depth0,"none"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisible") : depth0),{"name":"none","hash":{},"data":data,"loc":{"start":{"line":5,"column":31},"end":{"line":5,"column":48}}}),{"name":"any","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":14},"end":{"line":5,"column":105}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isOptional") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":5,"column":105},"end":{"line":5,"column":336}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = (lookupProperty(helpers,"compile_a11y_normalize")||(depth0 && lookupProperty(depth0,"compile_a11y_normalize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile_a11y_normalize","hash":{},"data":data,"loc":{"start":{"line":5,"column":337},"end":{"line":5,"column":371}}})) != null ? stack1 : "")
    + "\">\n\n  <span class=\"pagelevelprogress__item-title drawer__item-title\">\n    <span class=\"pagelevelprogress__item-title-inner drawer__item-title-inner\">\n      "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":9,"column":25}}})) != null ? stack1 : "")
    + "\n    </span>\n  </span>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isOptional") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":2},"end":{"line":19,"column":9}}})) != null ? stack1 : "")
    + "\n</button>\n";
},"useData":true});

this["Handlebars"]["templates"]["pageLevelProgressNavigation"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias1(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<span class=\"tooltip\">\n  "
    + alias1(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"progress") : stack1), depth0))
    + "\n</span>\n";
},"useData":true});

this["Handlebars"]["templates"]["resources"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"resources__filter has-"
    + alias3((lookupProperty(helpers,"resources_get_column_count")||(depth0 && lookupProperty(depth0,"resources_get_column_count"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"resources") : depth0),{"name":"resources_get_column_count","hash":{},"data":data,"loc":{"start":{"line":7,"column":36},"end":{"line":7,"column":76}}}))
    + "-columns\">\n    <div class=\"resources__filter-inner\" role=\"tablist\">\n\n      <div class=\"aria-label\" aria-label=\""
    + ((stack1 = alias4(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_extensions") : stack1)) != null ? lookupProperty(stack1,"_resources") : stack1)) != null ? lookupProperty(stack1,"resources") : stack1), depth0)) != null ? stack1 : "")
    + "\"></div>\n\n      <button id=\"resources__show-all\" class=\"resources__filter-btn resources__show-all is-selected js-resources-filter-btn-click\" data-filter=\"all\" aria-label=\""
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"model") : depth0)) != null ? lookupProperty(stack1,"_filterAria") : stack1)) != null ? lookupProperty(stack1,"allAria") : stack1), depth0))
    + "\" role=\"tab\" aria-selected=\"true\" aria-controls=\"resources\">\n        "
    + ((stack1 = alias4(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"model") : depth0)) != null ? lookupProperty(stack1,"_filterButtons") : stack1)) != null ? lookupProperty(stack1,"all") : stack1), depth0)) != null ? stack1 : "")
    + "\n      </button>\n\n"
    + ((stack1 = (lookupProperty(helpers,"resources_has_type")||(depth0 && lookupProperty(depth0,"resources_has_type"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"resources") : depth0),"document",{"name":"resources_has_type","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":6},"end":{"line":20,"column":29}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"resources_has_type")||(depth0 && lookupProperty(depth0,"resources_has_type"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"resources") : depth0),"media",{"name":"resources_has_type","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":6},"end":{"line":26,"column":29}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"resources_has_type")||(depth0 && lookupProperty(depth0,"resources_has_type"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"resources") : depth0),"link",{"name":"resources_has_type","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":6},"end":{"line":32,"column":29}}})) != null ? stack1 : "")
    + "\n    </div>\n  </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <button id=\"resources__document\" class=\"resources__filter-btn resources__show-document js-resources-filter-btn-click\" data-filter=\"document\" aria-label=\""
    + container.escapeExpression(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"model") : depth0)) != null ? lookupProperty(stack1,"_filterAria") : stack1)) != null ? lookupProperty(stack1,"documentAria") : stack1), depth0))
    + "\" role=\"tab\" aria-selected=\"false\" aria-controls=\"resources\">\n        "
    + ((stack1 = alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"model") : depth0)) != null ? lookupProperty(stack1,"_filterButtons") : stack1)) != null ? lookupProperty(stack1,"document") : stack1), depth0)) != null ? stack1 : "")
    + "\n      </button>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <button id=\"resources__media\" class=\"resources__filter-btn resources__show-media js-resources-filter-btn-click\" data-filter=\"media\" aria-label=\""
    + container.escapeExpression(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"model") : depth0)) != null ? lookupProperty(stack1,"_filterAria") : stack1)) != null ? lookupProperty(stack1,"mediaAria") : stack1), depth0))
    + "\" role=\"tab\" aria-selected=\"false\" aria-controls=\"resources\">\n        "
    + ((stack1 = alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"model") : depth0)) != null ? lookupProperty(stack1,"_filterButtons") : stack1)) != null ? lookupProperty(stack1,"media") : stack1), depth0)) != null ? stack1 : "")
    + "\n      </button>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <button id=\"resources__link\" class=\"resources__filter-btn resources__show-link js-resources-filter-btn-click\" data-filter=\"link\" aria-label=\""
    + container.escapeExpression(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"model") : depth0)) != null ? lookupProperty(stack1,"_filterAria") : stack1)) != null ? lookupProperty(stack1,"linkAria") : stack1), depth0))
    + "\" role=\"tab\" aria-selected=\"false\" aria-controls=\"resources\">\n        "
    + ((stack1 = alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"model") : depth0)) != null ? lookupProperty(stack1,"_filterButtons") : stack1)) != null ? lookupProperty(stack1,"link") : stack1), depth0)) != null ? stack1 : "")
    + "\n      </button>\n";
},"8":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"resources__item drawer__item is-"
    + alias4(((helper = (helper = lookupProperty(helpers,"_type") || (depth0 != null ? lookupProperty(depth0,"_type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data,"loc":{"start":{"line":43,"column":50},"end":{"line":43,"column":59}}}) : helper)))
    + " js-resources-item\" role=\"listitem\">\n\n        <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_link") || (depth0 != null ? lookupProperty(depth0,"_link") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_link","hash":{},"data":data,"loc":{"start":{"line":45,"column":17},"end":{"line":45,"column":26}}}) : helper)))
    + "\" class=\"resources__item-btn drawer__item-btn js-resources-item-btn-click\"\n          data-type=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_type") || (depth0 != null ? lookupProperty(depth0,"_type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data,"loc":{"start":{"line":46,"column":21},"end":{"line":46,"column":30}}}) : helper)))
    + "\"\n"
    + ((stack1 = (lookupProperty(helpers,"resources_force_download")||(depth0 && lookupProperty(depth0,"resources_force_download"))||alias2).call(alias1,depth0,{"name":"resources_force_download","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":10},"end":{"line":49,"column":39}}})) != null ? stack1 : "")
    + "          target=\"_blank\"\n          aria-label=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":51,"column":22},"end":{"line":51,"column":33}}}) : helper))) != null ? stack1 : "")
    + ". "
    + alias4(lookupProperty(helpers,"lookup").call(alias1,((stack1 = (depths[1] != null ? lookupProperty(depths[1],"model") : depths[1])) != null ? lookupProperty(stack1,"_filterButtons") : stack1),(depth0 != null ? lookupProperty(depth0,"_type") : depth0),{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":51,"column":35},"end":{"line":51,"column":75}}}))
    + "."
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":51,"column":76},"end":{"line":51,"column":121}}})) != null ? stack1 : "")
    + "\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":53,"column":10},"end":{"line":59,"column":17}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":61,"column":10},"end":{"line":67,"column":17}}})) != null ? stack1 : "")
    + "\n        </a>\n\n      </div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          download=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"filename") || (depth0 != null ? lookupProperty(depth0,"filename") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"filename","hash":{},"data":data,"loc":{"start":{"line":48,"column":20},"end":{"line":48,"column":32}}}) : helper)))
    + "\"\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data,"loc":{"start":{"line":51,"column":96},"end":{"line":51,"column":113}}}) : helper))) != null ? stack1 : "")
    + ".";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"resources__item-title drawer__item-title\">\n            <div class=\"resources__item-title-inner drawer__item-title-inner\">\n              "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":56,"column":14},"end":{"line":56,"column":33}}})) != null ? stack1 : "")
    + "\n            </div>\n          </div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"resources__item-body drawer__item-body\">\n            <div class=\"resources__item-body-inner drawer__item-body-inner\">\n              "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":64,"column":14},"end":{"line":64,"column":39}}})) != null ? stack1 : "")
    + "\n            </div>\n          </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<div class=\"resources__inner\">\n\n"
    + ((stack1 = (lookupProperty(helpers,"resources_has_multiple_types")||(depth0 && lookupProperty(depth0,"resources_has_multiple_types"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"resources") : depth0),{"name":"resources_has_multiple_types","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":36,"column":35}}})) != null ? stack1 : "")
    + "\n  <div id=\"resources\" class=\"resources__item-container\" role=\"tabpanel\" aria-labelledby=\"resources__show-all\">\n\n    <div role=\"list\">\n\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"resources") : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":42,"column":6},"end":{"line":72,"column":15}}})) != null ? stack1 : "")
    + "\n    </div>\n\n  </div>\n\n</div>\n";
},"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["trickle-button"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " u-display-none";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "aria-label=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"buttonAriaLabel") || (depth0 != null ? lookupProperty(depth0,"buttonAriaLabel") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"buttonAriaLabel","hash":{},"data":data,"loc":{"start":{"line":5,"column":45},"end":{"line":5,"column":64}}}) : helper)))
    + "\" ";
},"5":function(container,depth0,helpers,partials,data) {
    return " is-disabled";
},"7":function(container,depth0,helpers,partials,data) {
    return " btn-icon";
},"9":function(container,depth0,helpers,partials,data) {
    return " btn-text";
},"11":function(container,depth0,helpers,partials,data) {
    return " aria-disabled=\"true\"";
},"13":function(container,depth0,helpers,partials,data) {
    return "    <span class=\"trickle__btn-icon\">\n      <span class=\"icon\"></span>\n    </span>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <span class=\"trickle__btn-text\">\n      <span class=\"trickle__btn-text-inner js-trickle-btn-text\">\n        "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"buttonText") || (depth0 != null ? lookupProperty(depth0,"buttonText") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"buttonText","hash":{},"data":data,"loc":{"start":{"line":16,"column":8},"end":{"line":16,"column":22}}}) : helper)))
    + "\n      </span>\n    </span>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"a11y_aria_label")||(depth0 && lookupProperty(depth0,"a11y_aria_label"))||container.hooks.helperMissing).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_extensions") : stack1)) != null ? lookupProperty(stack1,"_trickle") : stack1)) != null ? lookupProperty(stack1,"incompleteContent") : stack1),{"name":"a11y_aria_label","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":69}}})) != null ? stack1 : "")
    + "\n\n<div class=\"trickle__inner js-trickle-btn-container "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_trickle") : depth0)) != null ? lookupProperty(stack1,"_button") : stack1)) != null ? lookupProperty(stack1,"_component") : stack1), depth0))
    + "__inner "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isButtonVisible") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":91},"end":{"line":3,"column":145}}})) != null ? stack1 : "")
    + "\">\n\n  <button "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"buttonAriaLabel") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":10},"end":{"line":5,"column":73}}})) != null ? stack1 : "")
    + "class=\"trickle__btn js-trickle-btn "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isButtonDisabled") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":108},"end":{"line":5,"column":152}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_trickle") : depth0)) != null ? lookupProperty(stack1,"_button") : stack1)) != null ? lookupProperty(stack1,"_hasIcon") : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":152},"end":{"line":5,"column":201}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"buttonText") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":201},"end":{"line":5,"column":235}}})) != null ? stack1 : "")
    + "\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isButtonDisabled") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":236},"end":{"line":5,"column":289}}})) != null ? stack1 : "")
    + ">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_trickle") : depth0)) != null ? lookupProperty(stack1,"_button") : stack1)) != null ? lookupProperty(stack1,"_hasIcon") : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":11,"column":11}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"buttonText") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":4},"end":{"line":19,"column":11}}})) != null ? stack1 : "")
    + "\n  </button>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["logo"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "  <button class=\"btn-icon nav__btn logo__btn js-nav-logo-btn\">\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "  </button>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"logo__inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_link") : depth0)) != null ? lookupProperty(stack1,"_isEnabled") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":5,"column":9}}})) != null ? stack1 : "")
    + "\n    <div class=\"logo__image\">\n      <img src=\"\" class=\"a11y-ignore\" aria-hidden=\"true\"/>\n    </div>\n    <div class=\"logo__title\"></div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_link") : depth0)) != null ? lookupProperty(stack1,"_isEnabled") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":2},"end":{"line":14,"column":9}}})) != null ? stack1 : "")
    + "\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["splashScreen"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_classes") || (depth0 != null ? lookupProperty(depth0,"_classes") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_classes","hash":{},"data":data,"loc":{"start":{"line":1,"column":42},"end":{"line":1,"column":54}}}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <li><img src=\""
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"_src") : depth0), depth0))
    + "\"></li>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div class=\"splashScreen_title\">\r\n                        <div class=\"splashScreen_title-inner\">\r\n                            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"_title") || (depth0 != null ? lookupProperty(depth0,"_title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_title","hash":{},"data":data,"loc":{"start":{"line":14,"column":28},"end":{"line":14,"column":40}}}) : helper))) != null ? stack1 : "")
    + "\r\n                        </div>\r\n                    </div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    \r\n                    <div class=\"splashScreen_body\">\r\n                        <div class=\"splashScreen-inner_body\">\r\n                            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"_body") || (depth0 != null ? lookupProperty(depth0,"_body") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_body","hash":{},"data":data,"loc":{"start":{"line":24,"column":28},"end":{"line":24,"column":39}}}) : helper))) != null ? stack1 : "")
    + "\r\n                        </div>\r\n                         <button class=\"splashScreen-start\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"_button") || (depth0 != null ? lookupProperty(depth0,"_button") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_button","hash":{},"data":data,"loc":{"start":{"line":26,"column":60},"end":{"line":26,"column":73}}}) : helper))) != null ? stack1 : "")
    + "</button>\r\n                    </div>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div class=\"splashScreen_body_graphic\">\r\n                        <div class=\"splashScreen-inner_body_graphic\">\r\n                            \r\n                                 <img src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + "\"/>\r\n                           \r\n                        </div>\r\n                    </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"splashScreen  "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_classes") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":26},"end":{"line":1,"column":61}}})) != null ? stack1 : "")
    + "\">\r\n    <div class=\"splashScreen-wrapper\">\r\n        <ul class=\"splashScreen-slideshow\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_images") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":12},"end":{"line":6,"column":21}}})) != null ? stack1 : "")
    + "        </ul>\r\n        <div class=\"splashScreen-container\">\r\n            <div class=\"splashScreen-inner\">\r\n                <div class=\"splashScreen_body-container\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_title") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":20},"end":{"line":17,"column":27}}})) != null ? stack1 : "")
    + "\r\n                  <div class=\"container-splashScreen\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_body") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":20},"end":{"line":28,"column":27}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_graphic") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":21},"end":{"line":38,"column":29}}})) != null ? stack1 : "")
    + "                  </div>  \r\n                    \r\n                    \r\n                </div>\r\n                \r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["boxMenu"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"menu__header boxmenu__header\">\n    <div class=\"menu__header-inner boxmenu__header-inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":21,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"subtitle") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":6},"end":{"line":29,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":6},"end":{"line":37,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":39,"column":6},"end":{"line":45,"column":13}}})) != null ? stack1 : "")
    + "\n    </div>\n  </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"menu__title boxmenu__title\">\n\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibleState") : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":8},"end":{"line":14,"column":19}}})) != null ? stack1 : "")
    + "\n        <div class=\"menu__title-inner boxmenu__title-inner\" "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibleState") : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":60},"end":{"line":16,"column":124}}})) != null ? stack1 : "")
    + ">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":17,"column":10},"end":{"line":17,"column":36}}})) != null ? stack1 : "")
    + "\n        </div>\n\n      </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"js-heading\"></div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"menu__subtitle boxmenu__subtitle\">\n        <div class=\"menu__subtitle-inner boxmenu__subtitle-inner\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"subtitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":26,"column":10},"end":{"line":26,"column":32}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"menu__body boxmenu__body\">\n        <div class=\"menu__body-inner boxmenu__body-inner\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":34,"column":10},"end":{"line":34,"column":28}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"menu__instruction boxmenu__instruction\">\n        <div class=\"menu__instruction-inner boxmenu__instruction-inner\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":42,"column":10},"end":{"line":42,"column":35}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\n\n<div class=\"menu__inner boxmenu__inner\">\n\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),(depth0 != null ? lookupProperty(depth0,"subtitle") : depth0),(depth0 != null ? lookupProperty(depth0,"body") : depth0),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"any","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":2},"end":{"line":49,"column":10}}})) != null ? stack1 : "")
    + "\n  <div class=\"menu__item-container boxmenu__item-container\">\n    <div class=\"menu__item-container-inner boxmenu__item-container-inner js-children\" role=\"list\">\n    </div>\n  </div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["boxMenuGroup"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"menu-group__title boxmenu-group__title\">\n        <div class=\"js-heading\" data-a11y-heading-type=\"menuGroup\"></div>\n\n        <div class=\"menu-group__title-inner boxmenu-group__title-inner accessible-text-block\" aria-hidden=\"true\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":13,"column":10},"end":{"line":13,"column":36}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"menu-group__body boxmenu-group__body\">\n        <div class=\"menu-group__body-inner boxmenu-group__body-inner\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":21,"column":10},"end":{"line":21,"column":28}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"menu-group__instruction boxmenu-group__instruction\">\n        <div class=\"menu-group__instruction-inner boxmenu-group__instruction-inner\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":29,"column":10},"end":{"line":29,"column":35}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\n\n<div class=\"menu-group__inner boxmenu-group__inner\">\n\n  <div class=\"menu-group__header boxmenu-group__header\">\n    <div class=\"menu-group__header-inner boxmenu-group__header-inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":6},"end":{"line":16,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":6},"end":{"line":24,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":6},"end":{"line":32,"column":13}}})) != null ? stack1 : "")
    + "\n      <div class=\"menu-group__progress boxmenu-group__progress js-menu-item-progress\">\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"menu-group__container boxmenu-group__container\">\n    <div class=\"menu-group__item-container-inner boxmenu-group__item-container-inner js-group-children\" role=\"list\">\n    </div>\n  </div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["boxMenuItem"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"menu-item__image-container boxmenu-item__image-container\">\n    <img class=\"menu-item__image boxmenu-item__image\" src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + "\" aria-hidden=\"true\">\n  </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"menu-item__title boxmenu-item__title\">\n        <div class=\"js-heading\" data-a11y-heading-type=\"menuItem\"></div>\n\n        <div class=\"menu-item__title-inner boxmenu-item__title-inner\" aria-hidden=\"true\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":19,"column":10},"end":{"line":19,"column":36}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression((lookupProperty(helpers,"a11y_aria_image")||(depth0 && lookupProperty(depth0,"a11y_aria_image"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),{"name":"a11y_aria_image","hash":{},"data":data,"loc":{"start":{"line":24,"column":26},"end":{"line":24,"column":58}}}));
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"menu-item__body boxmenu-item__body\">\n        <div class=\"menu-item__body-inner boxmenu-item__body-inner\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":29,"column":10},"end":{"line":29,"column":28}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"menu-item__duration boxmenu-item__duration\">\n        <div class=\"menu-item__duration-inner boxmenu-item__duration-inner\">\n          "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_menu") : stack1)) != null ? lookupProperty(stack1,"_boxMenu") : stack1)) != null ? lookupProperty(stack1,"durationLabel") : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":37,"column":10},"end":{"line":37,"column":105}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"duration") || (depth0 != null ? lookupProperty(depth0,"duration") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"duration","hash":{},"data":data,"loc":{"start":{"line":37,"column":106},"end":{"line":37,"column":120}}}) : helper))) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_menu") : stack1)) != null ? lookupProperty(stack1,"_boxMenu") : stack1)) != null ? lookupProperty(stack1,"durationLabel") : stack1), depth0)) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    return " is-visited";
},"14":function(container,depth0,helpers,partials,data) {
    return " is-locked";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"visited") : stack1), depth0));
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"optional") : stack1), depth0));
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"complete") : stack1), depth0));
},"22":function(container,depth0,helpers,partials,data) {
    return " aria-disabled=\"true\"";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias4(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\n\n<div class=\"menu-item__inner boxmenu-item__inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":2},"end":{"line":9,"column":9}}})) != null ? stack1 : "")
    + "\n  <div class=\"menu-item__details boxmenu-item__details\">\n    <div class=\"menu-item__details-inner boxmenu-item__details-inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":6},"end":{"line":22,"column":13}}})) != null ? stack1 : "")
    + "\n      "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":6},"end":{"line":24,"column":65}}})) != null ? stack1 : "")
    + "\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":6},"end":{"line":32,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"duration") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":6},"end":{"line":40,"column":13}}})) != null ? stack1 : "")
    + "\n     \n      <div class=\"menu-item__button_progress-container\">\n        <div class=\"menu-item__progress boxmenu-item__progress js-menu-item-progress\">\n      </div>\n      <div class=\"menu-item__button-container boxmenu-item__button-container\">\n        <button class=\"btn-text menu-item__button boxmenu-item__button js-btn-click"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":48,"column":83},"end":{"line":48,"column":119}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isLocked") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":48,"column":119},"end":{"line":48,"column":153}}})) != null ? stack1 : "")
    + "\" aria-label=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_nthChild") || (depth0 != null ? lookupProperty(depth0,"_nthChild") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_nthChild","hash":{},"data":data,"loc":{"start":{"line":48,"column":167},"end":{"line":48,"column":180}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":48,"column":181},"end":{"line":48,"column":190}}}) : helper)))
    + "."
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":48,"column":191},"end":{"line":48,"column":264}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isOptional") : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":48,"column":264},"end":{"line":48,"column":339}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isComplete") : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":48,"column":339},"end":{"line":48,"column":414}}})) != null ? stack1 : "")
    + "\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isLocked") : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":48,"column":415},"end":{"line":48,"column":460}}})) != null ? stack1 : "")
    + ">\n          "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"linkText") || (depth0 != null ? lookupProperty(depth0,"linkText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkText","hash":{},"data":data,"loc":{"start":{"line":49,"column":10},"end":{"line":49,"column":24}}}) : helper))) != null ? stack1 : "")
    + "\n        </button>\n      </div>\n\n       \n      </div>\n\n    </div>\n  </div>\n\n</div>\n";
},"useData":true});

return this["Handlebars"];

});