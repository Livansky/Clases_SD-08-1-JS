// para usar el promp con node
import promptSync from 'prompt-sync';
const prompt = promptSync();

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
  levelUp(){
    const spar= Number(prompt("Cuantos combaste ganaste (c/u son 10 de xp)?"))
    const xpGanada= spar*10
    this.xp += xpGanada
    console.log(`El jugador ${this.name} nivel ${this.level} ganó ${xpGanada} de XP y ahora tiene ${this.xp} de XP en total`);
    while (this.xp >= 100){
        this.level = this.level +1
        this.xp =  this.xp -100
  }
  console.log(`El jugador ${this.name} subió a nivel ${this.level}`);
  
  }
}
const player1 = new Player("Carlos",80,10);
player1.levelUp();