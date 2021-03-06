// execute the passed actions on enter-key-press
// http://stackoverflow.com/a/17472118
(function () {
    app.directive('ngEnter', function () {
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if (event.which === 13 && !event.altKey && !event.shiftKey && !event.ctrlKey) {
                    scope.$apply(function () {
                        scope.$eval(attrs.ngEnter);
                    });

                    event.preventDefault();
                }
            });
        };
    });
})();