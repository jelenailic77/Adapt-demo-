define([
  'core/js/adapt',
  './splashScreenView'
], function (Adapt, SplashScreenView) {


  function createDrawer() {
    if (!!Adapt.offlineStorage.get('_splashScreen')) return;
    var splashScreen = Adapt.course.get('_splashScreen');
    if (!splashScreen || !splashScreen._isEnabled) return;
    var splashScreenView = new SplashScreenView({ model: { _classes: splashScreen._classes, _title: splashScreen._title, _body: splashScreen._body, _button: splashScreen._button,_graphic:splashScreen._graphic, _images:splashScreen._images } });
    $("body").append(splashScreenView.$el);
  }
  Adapt.once('adapt:start', createDrawer);
});
