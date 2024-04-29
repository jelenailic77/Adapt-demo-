import ComponentView from 'core/js/views/componentView';
import gsap from '.../libraries/gsap.min';
import ScrollTrigger from '.../libraries/ScrollTrigger.min';


class TextView extends ComponentView {

  events() {
    return {
      'click .close': 'onCloseClicked'
    };
  }

  postRender() {
    this.setReadyStatus();
    this.setupInview();
    this.gsapTest();

  }

  setupInview() {
    const selector = this.getInviewElementSelector();
    if (!selector) return this.setCompletionStatus();
    this.setupInviewCompletion(selector);
  }

  /**
   * determines which element should be used for inview logic - body, instruction or title - and returns the selector for that element
   */
  getInviewElementSelector() {
    if (this.model.get('body')) return '.component__body';
    if (this.model.get('instruction')) return '.component__instruction';
    if (this.model.get('displayTitle')) return '.component__title';
    return null;
  }

  onCloseClicked() {
    var e = top.window || window
    e.close()
  }

 
  gsapTest(){
   gsap.registerPlugin(ScrollTrigger);
   console.log(ScrollTrigger.version)
 
   ScrollTrigger.matchMedia({	
    // desktop
    "(min-width: 800px)": function() {

    gsap.to('.bg-section',{

      scrollTrigger: {
          trigger:'.bg-section',
          start:'-450px center',
          end: '700px center',
          scrub: true
        },
        width:'100%',
        duration: 1
      });

      gsap.to('.tabs',{

        scrollTrigger: {
            trigger:'.tabs',
            start:'50px center',
            end: '750px bottom',
            scrub: true
          },
          x:'0',
          autoAlpha: '1',
          ease: Power4.easeOut,
          duration: 1.5
        });

        gsap.to('.flex',{

          scrollTrigger: {
              trigger:'.flex',
              start:'50px center',
              end: '750px bottom',
              scrub: true
            },
            x:'0',
            autoAlpha: '1',
            duration: 1.5
          });


          gsap.to('.cards__item[data-index="0"]',{

            scrollTrigger: {
                trigger:'.cards__item[data-index="0"]',
                start:'50px center',
                end: '850px bottom',
                scrub: true
              },
              x:'-490px',
              duration: 1.5
            });


            gsap.to('.cards__item[data-index="1"]',{

              scrollTrigger: {
                  trigger:'.cards__item[data-index="1"]',
                  start:'50px center',
                  end: '850px bottom',
                  scrub: true
                },
                x:'490px',
                duration: 1.5
              });

                gsap.to('.graphiccompare',{
                    
                  y: '0',
                  opacity: '1',
                  duration: 1.5,
                  scrollTrigger: {
                      trigger:'.graphiccompare',
                      start:'0px center',
                      end: '750px bottom',
                      scrub: true
                    },
                    
                  });

                  gsap.to('.narrative',{
                
                    scrollTrigger: {
                        trigger:'.narrative',
                        start:'550px bottom',
                        end: '750px bottom',
                        scrub: true
                      },
                      autoAlpha: '1',
                      duration: 3
                    });

                    gsap.utils.toArray('.talk__chat-character-1').forEach(element => {
                      
                    gsap.to(element,{
                
                      scrollTrigger: {
                          trigger: element,
                          start:'0px center',
                          end: '0px bottom',
                          scrub: false
                        },
                        x: '0',
                        autoAlpha: '1',
                        duration: 1
                      })
                    });

                    gsap.utils.toArray('.talk__chat-character-2').forEach(ele => {
                      
                      gsap.to(ele,{
                  
                        scrollTrigger: {
                            trigger: ele,
                            start:'0px center',
                            end: '0px bottom',
                            scrub: false
                          },
                          x: '0',
                          autoAlpha: '1',
                          duration: 1
                        })
                      });
        
  }
  })};


}

TextView.template = 'text.jsx';

export default TextView;
