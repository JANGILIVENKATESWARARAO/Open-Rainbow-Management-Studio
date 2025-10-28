import {
  ComponentFactoryResolver,
  Injector,
  ApplicationRef,
  ElementRef,
} from '@angular/core';
import { TooltipDirective } from './tooltip.directive';
import { DOCUMENT } from '@angular/common';

describe('TooltipDirective', () => {
  let elementRefMock: ElementRef;
  let componentFactoryResolverMock: jasmine.SpyObj<ComponentFactoryResolver>;
  let injectorMock: jasmine.SpyObj<Injector>;
  let appRefMock: jasmine.SpyObj<ApplicationRef>;
  let documentMock: Document;

  beforeEach(() => {
    elementRefMock = new ElementRef(document.createElement('div'));

    componentFactoryResolverMock = jasmine.createSpyObj(
      'ComponentFactoryResolver',
      ['resolveComponentFactory']
    );
    injectorMock = jasmine.createSpyObj('Injector', ['get']);
    appRefMock = jasmine.createSpyObj('ApplicationRef', [
      'attachView',
      'detachView',
    ]);

    documentMock = document;
  });

  it('should create an instance', () => {
    const directive = new TooltipDirective(
      componentFactoryResolverMock,
      injectorMock,
      elementRefMock,
      appRefMock,
      documentMock
    );
    expect(directive).toBeTruthy();
  });
});
