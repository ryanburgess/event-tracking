module.exports = function(){
  'use strict';
  document.querySelector('body').addEventListener('click', function(event) {
    var classNames = event.target.className;
    var dataAction = event.target.dataset.action;
    var dataLabel = event.target.dataset.label;
    var eventType;

    classNames = classNames.split(' ');
    for(i = 0; i < classNames.length; i++){  
      switch(classNames[i]) {
        case 'click-tracking':
        eventType = 'Click Event';
        if (dataAction === undefined) {
          dataAction = 'click';
        }
        sendEvent(eventType, dataAction, dataLabel);
        break;
        case 'exit-tracking':
        eventType = 'Exit Links';
        if (dataAction === undefined){
          dataAction = 'Exit';
        }
        sendEvent(eventType, dataAction, dataLabel);
        break;
      }
    }
  }); 


  function sendEvent(event, action, label){
    //output to GA events
    ga('send', 'event', 'Click Event', dataAction, dataLabel);
  }
};