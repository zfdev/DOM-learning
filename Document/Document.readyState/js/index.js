const debug = function(...args){
    console.log.call(null, Date.now(), ...args);
}

if(document.readyState === 'loading'){
    debug('DOM is loading now');
}

document.addEventListener('readystatechange', function(e){
    debug('Document readyState is ' + e.target.readyState);
});

document.querySelector('img').addEventListener('load', function(e){
    debug(`Image ${e.target.src} has loaded successful.`);
});

document.addEventListener('DOMContentLoaded', function(){
    debug('DOM Content Loaded');
});

window.addEventListener('load', function(){
    debug('window loaded');
});

$(function(){
    debug('JQuery Ready')
});

J = window.J || {};
J.ready = function(callback){
    // if the ready state of document is loading, bind the callback to the DOMContentLoaded event.
    if(document.readyState === 'loading'){
        document.addEventListener('DOMContentLoaded', callback);
    }else{
        //If the ready state is interative or complete.
        //DOMContentLoaded event has already fired.
        callback();
    }
}
const jasonReady = function(){
    debug('Jason ready has already fired.');
}
J.ready(jasonReady);

console.dir(document.styleSheets[0].cssRules);