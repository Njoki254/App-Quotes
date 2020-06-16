export class Quote {
    showTheme: boolean;
    constructor(public id: number,public words: string,public theme: string, public submitter:string,public author:string, public publishDate: Date){
      this.showTheme=false;
    }
  }