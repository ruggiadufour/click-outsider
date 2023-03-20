var clickOutsider = (function () {
    'use strict';

    var clickOutside = /** @class */ (function () {
        function clickOutside() {
        }
        clickOutside.add = function (element, callback) {
            clickOutside.elementActions.push({ element: element, callback: callback });
        };
        clickOutside.remove = function (element) {
            clickOutside.elementActions = clickOutside.elementActions.filter(function (elementAction) { return elementAction.element !== element; });
        };
        clickOutside.elementActions = [];
        (function () {
            document.addEventListener("click", function (event) {
                clickOutside.elementActions.forEach(function (elementAction) {
                    var _a;
                    if (!elementAction.element.contains(event.target)) {
                        console.log("clickOutside");
                        (_a = elementAction.callback) === null || _a === void 0 ? void 0 : _a.call(elementAction);
                    }
                });
            });
        })();
        return clickOutside;
    }());

    return clickOutside;

})();
