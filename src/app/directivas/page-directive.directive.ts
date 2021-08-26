import { Directive, OnInit, Input, Renderer2, ViewContainerRef, ElementRef, TemplateRef, ViewChild} from '@angular/core';



@Directive({
  selector: '[cantidadPages]'
})
export class PageDirectiveDirective {
  @ViewChild('estedato') datoPoner:ElementRef;  
  @Input() set cantidadPages(valor){
    this.createPaginator(valor);
  }
  constructor(private elementR: ElementRef, private render2: Renderer2, private viewC: ViewContainerRef, private templateR: TemplateRef<any>) { 

  }

  createPaginator(valor){
    this.viewC.createEmbeddedView(this.templateR);
    for(let i = 0; i <= valor;i++){


      //const el = this.elementR.nativeElement;
      const vc = this.viewC;
      const templateR = this.templateR;


      //console.log(el);
      const numeroPage = this.render2.createElement('p');
      const textoNumber = this.render2.createText('Supp bitches');
      this.render2.appendChild(numeroPage, textoNumber);
      const divPage = this.render2.createElement('div');
      this.render2.appendChild(divPage, numeroPage);
      //console.log('This is elemento', el);
      //console.log('This is the numero',numeroPage);
      //console.log('this is something else',textoNumber);
      console.log('This is the templateR', this.templateR);
      this.render2.appendChild(this.elementR.nativeElement, divPage);

      //this.render2.appendChild(this.templateR, numeroPage);

      
      
      

      //this.render2.appendChild(numeroPage, textoNumber);
      //this.render2.appendChild(el, numeroPage);


      //const valorNumber = this.render2.setProperty(numeroPage, "innerText", i);
      //this.render2.appendChild(this.elementR.nativeElement, numeroPage);
  
      /*this.viewC.createEmbeddedView(this.templateR)*/

  }
}

ngOnInit(){
  //const c = this.elementR.nativeElement();
  //console.log('This is the element', c);
}

}
