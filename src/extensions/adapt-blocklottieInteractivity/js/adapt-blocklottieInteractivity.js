import Adapt from 'core/js/adapt';
import LottieInteractivityBlockView from './LottieInteractivityBlockView.js';

class LottieInteractivityModel extends Backbone.Controller {
    initialize() {
        this.listenTo(Adapt, 'app:dataReady', this._onDataReady);
      }
    
      _onDataReady() {
        this.setupEventListeners();
      }
    
      setupEventListeners() {
        this.listenTo(Adapt, {
         'articleView:postRender blockView:postRender': this.onPostRender
        });
    
      }
    
      onPostRender(view) {
        const viewModel = view.model;
    
        if (!this.checkIsEnabled(viewModel)) return;
        const LottieInteractivityModel = new Backbone.Model(viewModel.get('_lottie_block'));
        const lottieInteractivityBlockView = new LottieInteractivityBlockView({ model: viewModel });
        const _selector = LottieInteractivityModel.get('_selector');
        const el = _.isEmpty(_selector) ? view.$el : $(_selector);
        el.prepend(lottieInteractivityBlockView.el).addClass('has-lottieinteractivity')
      }
    
      checkIsEnabled(model) {
        const  LottieInteractivityModel = model.get('_lottie_block');
        if (!LottieInteractivityModel || !LottieInteractivityModel._isEnabled) return false;
        return true;
      }
}


export default new LottieInteractivityModel();