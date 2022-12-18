"use strict";
function showError(message) {
    throw new Error(message);
}
var n = 0;
function loopInfinito() {
    while (true) {
        console.log(n++);
    }
}
loopInfinito();
//# sourceMappingURL=never.js.map