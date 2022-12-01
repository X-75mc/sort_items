var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var fetchUrl = './items.json';
var itemsOnPage = 6;
var ulContainer = document.querySelector('.ulContainer');
var containerItems = document.querySelector('.container__sort');
var priceChange = document.querySelector('.priceChange');
var lowPrice = 'low';
var hightPrice = 'hight';
showItems();
function fetchItems(url) {
    return __awaiter(this, void 0, void 0, function () {
        var response, body;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    body = _a.sent();
                    return [2 /*return*/, body];
            }
        });
    });
}
function showItems() {
    return __awaiter(this, void 0, void 0, function () {
        var itemsList;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchItems(fetchUrl)];
                case 1:
                    itemsList = _a.sent();
                    // Display the contents of the first item in the response
                    itemsRender(itemsList);
                    return [2 /*return*/];
            }
        });
    });
}
function itemsRender(itemsList) {
    var countOfItems = Math.ceil(itemsList.length / itemsOnPage);
    priceChange.addEventListener('change', function () {
        if (priceChange.value === lowPrice) {
            firstPage();
            itemsList.sort(function (a, b) {
                return a.price - b.price;
            });
        }
        var firstItems = __spreadArray([], itemsList, true);
        firstItems.length = 6;
        containerItems.innerHTML = '';
        firstItems.forEach(function (noteOne) {
            var itemCake = "<div class=\"container__item__sort\">\n    \n                                            <div class=\"img__div\">\n    \n                                                <img  src=\"./img/".concat(noteOne.imgItems, "\" alt=\"\">\n    \n                                            </div>\n    \n                                           <div class=\"tittle__item__sort\">\n                                               <h2>").concat(noteOne.tittle, "</h2>\n                                            </div>\n    \n                                            <div class=\"discription__item__sort\">\n                                                <p>").concat(noteOne.discription, "</p>\n                                            </div>\n    \n                                            <div class=\"price__item__sort\">\n                                                <p>$").concat(noteOne.price, "</p>\n                                            </div>\n    \n                                        </div>");
            containerItems.insertAdjacentHTML('beforeend', itemCake);
        });
        if (priceChange.value === hightPrice) {
            containerItems.innerHTML = '';
            console.log('no');
            itemsList.sort(function (a, b) {
                return b.price - a.price;
            });
        }
        var secondItems = __spreadArray([], itemsList, true);
        secondItems.length = 6;
        containerItems.innerHTML = '';
        secondItems.forEach(function (noteOne) {
            var itemCake = "<div class=\"container__item__sort\">\n    \n                                            <div class=\"img__div\">\n    \n                                                <img  src=\"./img/".concat(noteOne.imgItems, "\" alt=\"\">\n    \n                                            </div>\n    \n                                           <div class=\"tittle__item__sort\">\n                                               <h2>").concat(noteOne.tittle, "</h2>\n                                            </div>\n    \n                                            <div class=\"discription__item__sort\">\n                                                <p>").concat(noteOne.discription, "</p>\n                                            </div>\n    \n                                            <div class=\"price__item__sort\">\n                                                <p>$").concat(noteOne.price, "</p>\n                                            </div>\n    \n                                        </div>");
            containerItems.insertAdjacentHTML('beforeend', itemCake);
        });
    });
    function firstPage() {
        var firstItems = __spreadArray([], itemsList, true);
        firstItems.length = 6;
        firstItems.forEach(function (noteOne) {
            var itemCake = "<div class=\"container__item__sort\">\n    \n                                            <div class=\"img__div\">\n    \n                                                <img  src=\"./img/".concat(noteOne.imgItems, "\" alt=\"\">\n    \n                                            </div>\n    \n                                           <div class=\"tittle__item__sort\">\n                                               <h2>").concat(noteOne.tittle, "</h2>\n                                            </div>\n    \n                                            <div class=\"discription__item__sort\">\n                                                <p>").concat(noteOne.discription, "</p>\n                                            </div>\n    \n                                            <div class=\"price__item__sort\">\n                                                <p>$").concat(noteOne.price, "</p>\n                                            </div>\n    \n                                        </div>");
            containerItems.insertAdjacentHTML('beforeend', itemCake);
        });
    }
    for (var i = 1; i <= countOfItems; i++) {
        var itemLi = "<li class = \"LiArr\">".concat(i, "</li>");
        ulContainer.insertAdjacentHTML('beforeend', itemLi);
    }
    var paginationButtons = document.querySelectorAll('.LiArr');
    paginationButtons.forEach(function (item) {
        item.addEventListener('click', function () {
            var numPagr = +item.innerHTML;
            var start = (numPagr - 1) * itemsOnPage;
            var end = start + itemsOnPage;
            var notes = itemsList.slice(start, end);
            containerItems.innerHTML = '';
            notes.forEach(function (note) {
                var itemCake = "<div class=\"container__item__sort\">\n\n                                                <div class=\"img__div\">\n\n                                                    <img  src=\"./img/".concat(note.imgItems, "\" alt=\"\">\n\n                                                </div>\n\n                                                <div class=\"tittle__item__sort\">\n                                                    <h2>").concat(note.tittle, "</h2>\n                                                </div>\n\n                                                <div class=\"discription__item__sort\">\n                                                    <p>").concat(note.discription, "</p>\n                                                </div>\n\n                                                <div class=\"price__item__sort\">\n                                                    <p>$").concat(note.price, "</p>\n                                                </div>\n\n                                            </div>");
                containerItems.insertAdjacentHTML('beforeend', itemCake);
            });
        });
    });
    firstPage();
}
