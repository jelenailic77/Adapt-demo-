define([
    'core/js/adapt'
], function (Adapt) {
    var SplashScreenView = Backbone.View.extend({
        tagName: "div",

        // className: 'splashScreen-scroll',

        events: {
            'click .splashScreen-start': 'removeView'
        },
        initialize: function () {
            this.render();
        },

        render: function () {
            $('html').addClass('onSplashScreen');
            var template = Handlebars.templates[this.constructor.template];
            this.$el.html(template(this.model));
        },

        removeView: function () {
            Adapt.offlineStorage.set('_splashScreen', true);
            $('html').removeClass('onSplashScreen');
            // _.delay(function () {
            this.remove();
            // }.bind(this), 500);
        }
    }, {
        template: 'splashScreen'
    });
    return SplashScreenView;

});