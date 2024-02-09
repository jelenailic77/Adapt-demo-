define([
    'core/js/adapt',
    '../../../adapt-contrib-spoor/libraries/SCORM_API_wrapper'
],function(Adapt, pipwerks) {



    $("body").on('click', '.print-button', function() {
        var certConfig = Adapt.course.get('_certificate');

        var course = Adapt.course.get("displayTitle");
        var name = Adapt.offlineStorage.get('learnerinfo').name;
        var date = (new Date()).toLocaleDateString("en-GB");

        var scormName = getName()
;

        var domain = document.location.origin;
        var popup = window.open('course/en/document/certificate.html', 'bob');

        var message = _.extend(certConfig, {
            course: course,
            name: scormName.learnerName || s,
            id: scormName.learnerID || '',
            date: date,
        });

        window.addEventListener('message', function() {
            var e = JSON.parse(JSON.stringify(message))
            popup.postMessage(e, domain)
        });
    })  
    
        function getName(){
            let scormname = pipwerks.SCORM.API.get().LMSGetValue('cmi.core.student_name')
            let name = scormname.replaceAll(',', '');
            var nameID = {}
            var scorm = pipwerks.SCORM.version == '1.2'
            nameID.learnerName = scorm
              ? name
              : pipwerks.SCORM.API.get().LearnerName
              nameID.learnerID = scorm
              ? pipwerks.SCORM.API.get().LMSGetValue('cmi.core.student_id')
              : pipwerks.SCORM.API.get().learnerID
              console.log()
            return nameID
            
          }

 });
