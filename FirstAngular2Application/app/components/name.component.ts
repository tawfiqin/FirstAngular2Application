import {Component} from "@angular/core";
@Component({
    selector: 'name-comp',
    templateUrl: "app/components/name-view.html"
})

export class NameComponent {
    public name: string;
    public welcomeOut: string;
    public welcome() {
        this.welcomeOut = "Salam " + this.name + " this is welcome function";
    }
}