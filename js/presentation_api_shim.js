(function() {
    function Presentation() {
    }

    Presentation.prototype.requestShow = function(url) {
        return new Promise(function(resolve, reject) {
            presentationWindow = window.open(url, "", "presentation");
            if (presentationWindow)
                presentationWindow.onload = function() { resolve(presentationWindow); };
            else
                reject();
        });
    };
    navigator.presentation = new Presentation();
}());
