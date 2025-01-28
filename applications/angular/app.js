const { Component, NgModule } = ng.core;
@Component({
  selector: "counter-app",
  template: `<button (click)="count++">Click!</button>
    <div>Clicks: {{ count }}</div>`,
})
class A {
  count = 0;
}
@NgModule({
  declarations: [A],
  bootstrap: [A],
})
class B {}
ng.platformBrowserDynamic().bootstrapModule(B);
