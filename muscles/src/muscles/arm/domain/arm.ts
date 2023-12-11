export class Arm {
    constructor(
        public id: number,
        public userid: number,
        public exercises: number,
        public weight: number,
    
     ){}
    
  }

  export class TagsArm {
    constructor(
        public tagid: number,
        public userid: number,
        public descripcion: string,
        public autor: string,
    
     ){}
    
  }