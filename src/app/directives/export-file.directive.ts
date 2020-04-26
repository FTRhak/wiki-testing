import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[exportFile]'
})
export class ExportFileDirective {
  public fileContent = '';
  @Input('exportFile') dataModel;
  private fileType = 'json';

  @HostListener('click', ['$event']) onClick($event) {
    const fileContent = JSON.stringify(this.dataModel);
    const blob = new Blob([fileContent], { type: 'text/json;charset=utf-8' });
    const dwnUrl = window.URL || window['webkitURL'] || window;
    if (navigator.appVersion.toString().indexOf('.NET') > 0) {
      window.navigator.msSaveBlob(blob, 'README.' + this.fileType);
    } else if (dwnUrl && dwnUrl['createObjectURL']) {
      const url = dwnUrl['createObjectURL'](blob);
      this.sendDataToLink(url);
    }
  }

  sendDataToLink(data) {
    const link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
    link.setAttribute('href', data);
    link.setAttribute('download', 'README.' + this.fileType);
    const event = document.createEvent('MouseEvents');
    event.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
    link.dispatchEvent(event);
  }
  constructor() { }

}
