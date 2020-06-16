export class Quote {
    showMore: boolean;
    constructor(public id: number,public name: string,public more: string, public words:string,public author:string, public publishDate: Date){
      this.showMore=false;
    }
  }