export class Player {
  name;
  level;
  xp;
    constructor(name,level,xp) {
      this.name= name;
      this.level= level;
      this.xp=xp

      
    } 

  info(){
    return `${this.name} has reached Level ${this.level}`
    
  }
  }
const player1 = new Player("Carlos",80,10);
console.log(player1.info());