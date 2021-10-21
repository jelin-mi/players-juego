/* 
1. Crear clase Player, que tenga las propiedades life y strength, y además tenga un método attack()

2. Las propiedades life y strength se cogen por parámetro y tendrán unos valores por default de 3  (life) y 50 (strength)

3. El método attack tiene que pintar un console.log que escriba "I am super strong. I have ___ strength". Este método tiene que pintar la fuerza del player en cuestión

4. Debéis crear las variables player1 y 2, cada una con una life y una strength diferentes 
*/


class Player {
    constructor(life = 3, strength = 50) {
      this.life = life;
      this.strength = strength;
    }
    
    attack() {
      console.log(`I am super strong. I have ${this.strength} strength.`);
    }
  }
  
  let player = new Player();
  let player2 = new Player(5, 20);
  
  
  player.attack();
  player2.attack();
  

  
  let obj = {
    life: 7,
    strength: 30,
    attack(){}
  }
  
  console.log(obj);