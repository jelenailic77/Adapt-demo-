import Adapt from 'core/js/adapt';
import '../libraries/lottie-player';
import { templates } from 'core/js/reactHelpers';
import React from 'react';
import ReactDOM from 'react-dom';
import * as LottieInteractivity from '../libraries/lottie-interactivity.min';

class LottieInteractivityView extends Backbone.View {
  className() {
    return 'lottie';
  }
  initialize() {
    this.preRender();
    this.render();
  }


  preRender() {
    const lottieModel = this.model.get('_lottie_block');
    const lottieplayerEl = document.createElement('lottie-player');

    lottieModel.controls && lottieplayerEl.setAttribute('controls', lottieModel.controls);
    if (lottieModel.loop !== -1) {
      lottieplayerEl.setAttribute('loop', true);
      lottieplayerEl.setAttribute('count', lottieModel.loop);
    }
    lottieModel.autoplay && lottieplayerEl.setAttribute('autoplay', lottieModel.autoplay);
    lottieModel.speed && lottieModel.speed > 1 && lottieplayerEl.setAttribute('speed', lottieModel.speed);
    lottieModel.style && lottieplayerEl.setAttribute('style', lottieModel.style);
    lottieModel.renderer && lottieplayerEl.setAttribute('renderer', lottieModel.renderer);
    lottieModel.background && lottieplayerEl.setAttribute('background', lottieModel.background);
    lottieModel.preserveAspectRatio && lottieplayerEl.setAttribute('preserveAspectRatio', lottieModel.preserveAspectRatio);
    lottieplayerEl.setAttribute('src', lottieModel.src);

    this.model.set('lottieplayer', lottieplayerEl.outerHTML);

    // this.$el.on('onscreen', this.onScreenChange.bind(this));
  }

  postRender() {
    const lottieplayer = this.$('lottie-player')[0];
    lottieplayer.addEventListener('ready', () => {
      Adapt.trigger('lottie:ready', this);
      this.setReadyStatus();
    });
    lottieplayer.addEventListener('error', () => {
      this.setReadyStatus();
      this.model.set('failed', this.model.get('_lottie').failed);
    });
    lottieplayer.addEventListener('play', () => {
      Adapt.trigger('lottie:play', this);
    });
    lottieplayer.addEventListener('pause', () => {
      Adapt.trigger('lottie:pause', this);
    });
    const interactivity = this.model.get('_lottie').interactivity;
    if (interactivity) {
      interactivity.player = lottieplayer;
      LottieInteractivity.create(interactivity);
    }
  }

  render() {
    const props = { ...this.model.toJSON() };
    const Template = templates[this.constructor.template.replace('.jsx', '')];
    ReactDOM.render(<Template {...props} />, this.el);
  }
}

LottieInteractivityView.template = 'lottieInteractivity.jsx';

export default LottieInteractivityView;
