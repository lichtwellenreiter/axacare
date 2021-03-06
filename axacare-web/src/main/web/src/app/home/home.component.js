"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var _services_1 = require("../_services");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(user, router) {
        this.user = user;
        this.router = router;
        this.users = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    HomeComponent.prototype.ngOnInit = function () {
        switch (this.user.getCurrentUserType()) {
            case 'patient':
                this.router.navigate(['/patient']);
                break;
            case 'doctor':
                this.router.navigate(['/doctor']);
                break;
            case 'pharmacy':
                this.router.navigate(['/pharmacy']);
                break;
            default:
                this.router.navigate(['/login']);
                break;
        }
    };
    HomeComponent = __decorate([
        core_1.Component({ templateUrl: 'home.component.html' }),
        __metadata("design:paramtypes", [_services_1.UserService, router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map