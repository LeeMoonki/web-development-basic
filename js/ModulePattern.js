// 모듈 패턴의 기본 패턴

// #1

(function (window) {
    var myLibrary = {
        helloWorld: function () {
            console.log("Hello World!");
        },
        hello: {
            world: function () {
                console.log("Hello Module");
            }
        }
    };

    window.myLibrary = myLibrary;
}(window));

myLibrary.helloWorld();
myLibrary.hello.world();

// #2

var myLibrary1 = (function (window) {
    var myLibrary = {
        helloWorld: function () {
            console.log("Hello World!");
        },
        hello: {
            world: function () {
                console.log("Hello Module");
            }
        }
    };

    return myLibrary;
}(window));

myLibrary1.helloWorld();
myLibrary1.hello.world();

// #3

var myLibrary2 = (function (window) {
    return {
        helloWorld: function () {
            console.log("Hello World!");
        },
        hello: {
            world: function () {
                console.log("Hello Module");
            }
        }
    };
}(window));

myLibrary2.helloWorld();
myLibrary2.hello.world();

// #4 네임스페이스 생성 방법

(function (window, undefined) {
    var _myLibrary = window.myLibrary;

    // myLibrary가 기존에 있었다면 해당 모듈에 원하는 기능만 추가하기 위해
    if (!_myLibrary) {
        _myLibrary = {};
    }

    if (!_myLibrary.wallah) {
        _myLibrary.wallah = {};
    }

    _myLibrary.wallah.sayHi = function () {
        console.log("Hello, my name is Wallah");
    };

    window.myLibrary = _myLibrary;
}(window));

myLibrary.wallah.sayHi();