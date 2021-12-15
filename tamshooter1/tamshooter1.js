// title:  tamshooter1
// author: skz1024
// desc:   Shoot 'em up game - 2020/08/02
// script: js

var spriteId = {
UNUSED: 0,
PLAYER_SPRITE1:258,
PLAYER_SPRITE2:274,
//---
LASER_NORMAL:288,
LASER_GREEN:289,
LASER_BLUE:290,
LASER_GREY:291,
MISSILE:304,
ROCKET:306,
BOMB:292,
SNIPER:294,
CRESCENT:295,
STAR:310,
//---
ENEMY11:352,
ENEMY12:368,
ENEMY13:354,
ENEMY14:356,
ENEMY15:370,
ENEMY16:372,
ENEMY17:358,
ENEMY18:374,
//---
ENEMY21:386,
ENEMY22:387,
ENEMY23:388,
ENEMY24:389,
ENEMY25:402,
ENEMY26:403,
ENEMY27:404,
ENEMY28:405,
//---
ENEMY310:416,
ENEMY311:416,
ENEMY312:417,
ENEMY313:432,
ENEMY314:433,
ENEMY320:418,
ENEMY321:418,
ENEMY322:419,
ENEMY323:434,
ENEMY324:435,
ENEMY330:420,
ENEMY331:420,
ENEMY332:421,
ENEMY333:436,
ENEMY334:437,
ENEMY340:422,
ENEMY341:422,
ENEMY342:423,
ENEMY343:438,
ENEMY344:439,
//---
ENEMY41:450,
ENEMY42:451,
ENEMY43:452,
ENEMY44:453,
ENEMY45:484,
ENEMY46:485,
ENEMY47:454,
ENEMY48:455,
ENEMYBULLET41:482,
ENEMYBULLET42:483,
ENEMYBULLET43:498,
ENEMYBULLET44:499,
ENEMYBULLET45:456,
//---
BOSS1:384,
BOSS2:390,
BOSS3:448,
BOSS4:480,
//effect
EFFECT_SPLASH_BLUE:320,
EFFECT_SPLASH_SNIPER:324,
EFFECT_SPLASH_RED:336,
EFFECT_ENEMY_DIE1:360,
EFFECT_ENEMY_DIE2:376,
EFFECT_ENEMY_DIE3:392,
EFFECT_ENEMY_DIE4:408,
EFFECT_ENEMY_DIE5:424,
EFFECT_ENEMY_DIE6:440,
EFFECT_UNUSED:0,
//skill
SKILL_LASER:260,
SKILL_MISSILE:276,
SKILL_CRESCENT:262,
}
var FIELD_MAX_SIZE_X = 240;
var FIELD_MAX_SIZE_Y = 120;
var typeId = {
//weapon
LASER_NORMAL:0,
LASER_GREEN:1,
LASER_BLUE:2,
LASER_GREY:3,
MISSILE:4,
ROCKET:5,
BOMB:6,
SNIPER:7,
CRESCENT:8,
STAR:9,
//enemy
ENEMY11:0,
ENEMY12:1,
ENEMY13:2,
ENEMY14:3,
ENEMY15:4,
ENEMY16:5,
ENEMY17:6,
ENEMY18:7,
//---
ENEMY21:8,
ENEMY22:9,
ENEMY23:10,
ENEMY24:11,
ENEMY25:12,
ENEMY26:13,
ENEMY27:14,
ENEMY28:15,
ENEMY21BIG:16,
ENEMY22BIG:17,
ENEMY23BIG:18,
ENEMY24BIG:19,
ENEMY25BIG:20,
ENEMY26BIG:21,
ENEMY27BIG:22,
ENEMY28BIG:23,
//---
ENEMY310:24,
ENEMY311:25,
ENEMY312:26,
ENEMY313:27,
ENEMY314:28,
ENEMY320:29,
ENEMY321:30,
ENEMY322:31,
ENEMY323:32,
ENEMY324:33,
ENEMY330:34,
ENEMY331:35,
ENEMY332:36,
ENEMY333:37,
ENEMY334:38,
ENEMY340:39,
ENEMY341:40,
ENEMY342:41,
ENEMY343:42,
ENEMY344:43,
//---
ENEMY41:44,
ENEMY42:45,
ENEMY43:46,
ENEMY44:47,
ENEMY45:48,
ENEMY46:49,
ENEMY47:50,
ENEMY48:51,
//enemybullet
ENEMYBULLET41:0,
ENEMYBULLET42:1,
ENEMYBULLET43:2,
ENEMYBULLET44:3,
ENEMYBULLET45:4,
//boss
BOSS1:0,
BOSS2:1,
BOSS3:2,
BOSS4:3,
//effect
EFFECT_UNUSED:0,
EFFECT_SPLASH_BLUE:1,
EFFECT_SPLASH_SNIPER:2,
EFFECT_SPLASH_RED:3,
EFFECT_ENEMY_DIE1:4,
EFFECT_ENEMY_DIE2:5,
EFFECT_ENEMY_DIE3:6,
EFFECT_ENEMY_DIE4:7,
EFFECT_ENEMY_DIE5:8,
EFFECT_ENEMY_DIE6:9,
//skill
SKILL_LASER:10,
SKILL_MISSILE:11,
SKILL_CRESCENT:12,
}
var soundId = {
UNUSED: 0,
ENEMY17_DIE: 1,
ENEMY21_DIE: 2,
ENEMY21BIG_DIE: 3,
BOSS2_DIE: 4,
ENEMY310_DIE: 5,
ENEMY41_DIE: 6,
ENEMY43_DIE: 7,
ENEMY45_DIE: 8,
ENEMY47_DIE: 9,
SKILL_LASER: 10,
SKILL_LASER_SHOT: 11,
SKILL_MISSILE: 12,
ENEMY11_DIE: 13,
SKILL_MISSILE_HIT: 14,
PLAYER_DAMAGE1:15,
PLAYER_DAMAGE2:16,
PLAYER_DAMAGE3:17,
PLAYER_LEVELUP:18,
BOSS_KILL: 19,
SKILL_CRESCENT:20,
SKILL_CRESCENT_HIT:21,
}
//---
function FieldObject(){
  this.init = function(){
    this.x = 0;
    this.y = 0;
    this.w = 1;
    this.h = 1;
    this.speedX = 0;
    this.speedY = 0;
    this.moveType = '';
    this.moveX = 0;
    this.moveY = 0;
    this.gravity = 0;
    this.scale = 1;
    this.objectType = '';
    this.mainType = '';
    this.subType = '';
    this.typeId = 0;
    this.isUsing = false;
    this.spriteId = 0;
    this.filp = 0;
    this.rotate = 0;
    
    this.hp = 0;
    this.hpMax = 0;
    this.isChase = false;
    this.targetNumber = 0;
    this.attack = 0;
    this.attackDelay = 0;
    this.attackDelayCount = 0;
    this.attackMaxCount = 0;
    this.attackMaxMonster = 0;
    this.attackMonsterCount = 0;
    this.attackCount = 0;
    this.count = 0;
    this.countMax = 0;
    this.delay = 0;
    this.delayCount = 0;
    this.score = 0;
    this.repeatCount = 0;
    
    this.frame = 0;
    this.effectFrame = 0;
    this.deadSoundId = 0;
    this.deadEffectId = 0;
  };
  this.init();
  this.display = function(){ if(this.isUsing) displayObject(this);}
  this.delete = function(){ this.init();}
}
var fieldObject = new Array(10);
for(var i = 0; i < fieldObject.length; i++) fieldObject[i] = new FieldObject();
//---
function EnemyData(type, hp, attack, score, w, h, scale, speedX, speedY, deadSoundId, deadEffectId){
  this.type = type;
  this.hp = hp;
  this.attack = attack;
  this.score = score;
  this.w = w;
  this.h = h;
  this.scale = scale;
  this.speedX = speedX * -1;
  this.speedY = speedY;
  this.deadSoundId = deadSoundId;
  this.deadEffectId = deadEffectId;
}
var enemyData = new Array(77);
var bossData = new Array(4);
enemyData[0] = new EnemyData(typeId.ENEMY11, 2000, 22, 100, 2, 1, 1,   3, 0, soundId.ENEMY11_DIE, typeId.EFFECT_ENEMY_DIE1);
enemyData[1] = new EnemyData(typeId.ENEMY12, 2500, 22, 110, 2, 1, 1,   3, 0, 13, 4);
enemyData[2] = new EnemyData(typeId.ENEMY13,18000, 22, 155, 2, 1, 2,   2, 0, 13, typeId.EFFECT_ENEMY_DIE2);
enemyData[3] = new EnemyData(typeId.ENEMY14,19400, 21, 161, 2, 1, 2,   2, 0, 13, 5);
enemyData[4] = new EnemyData(typeId.ENEMY15,20800, 19, 192, 2, 1, 3,   1, 0, 13, 5);
enemyData[5] = new EnemyData(typeId.ENEMY16,24600, 18, 194, 2, 1, 4,   1, 0, 13, 5);
enemyData[6] = new EnemyData(typeId.ENEMY17,80000, 30, 320, 2, 1, 4, 0.5, 0, soundId.ENEMY17_DIE, 6);
enemyData[7] = new EnemyData(typeId.ENEMY18,85000, 30, 335, 2, 1, 4, 0.5, 0, soundId.ENEMY17_DIE, 6);
bossData[0]  = new EnemyData(typeId.BOSS1,2000000, 50,21900, 2, 2, 4,   0, 0, soundId.ENEMY17_DIE, typeId.EFFECT_UNUSED);
//
enemyData[8]  = new EnemyData(typeId.ENEMY21, 24400, 11, 200, 1, 1, 2, 1.3, 1.3, soundId.ENEMY21_DIE, typeId.EFFECT_ENEMY_DIE4);
enemyData[9]  = new EnemyData(typeId.ENEMY22, 24480, 11, 201, 1, 1, 2, 1.3,-1.3, 2, 7);
enemyData[10] = new EnemyData(typeId.ENEMY23, 24560, 11, 202, 1, 1, 2, 1.2, 1.5, 2, 7);
enemyData[11] = new EnemyData(typeId.ENEMY24, 24640, 11, 203, 1, 1, 2, 1.2,-1.5, 2, 7);
enemyData[12] = new EnemyData(typeId.ENEMY25, 24720, 11, 204, 1, 1, 2, 1.0, 1.1, 2, 7);
enemyData[13] = new EnemyData(typeId.ENEMY26, 24800, 11, 205, 1, 1, 2, 1.0,-1.0, 2, 7);
enemyData[14] = new EnemyData(typeId.ENEMY27, 24880, 11, 206, 1, 1, 2, 1.0,-1.4, 2, 7);
enemyData[15] = new EnemyData(typeId.ENEMY28, 24960, 11, 207, 1, 1, 2, 1.0,-1.0, 2, 7);
enemyData[16] = new EnemyData(typeId.ENEMY21BIG, 160100, 11, 400, 1, 1, 4, 0.8, 0.6, soundId.ENEMY21BIG_DIE, 7);
enemyData[17] = new EnemyData(typeId.ENEMY22BIG, 160200, 11, 402, 1, 1, 4, 0.8,-0.6, 3, 7);
enemyData[18] = new EnemyData(typeId.ENEMY23BIG, 160300, 11, 404, 1, 1, 4, 0.8, 1.2, 3, 7);
enemyData[19] = new EnemyData(typeId.ENEMY24BIG, 160400, 11, 406, 1, 1, 4, 0.8,-1.2, 3, 7);
enemyData[20] = new EnemyData(typeId.ENEMY25BIG, 160500, 11, 408, 1, 1, 4, 0.6, 0.4, 3, 7);
enemyData[21] = new EnemyData(typeId.ENEMY26BIG, 160600, 11, 410, 1, 1, 4, 0.6,-0.4, 3, 7);
enemyData[22] = new EnemyData(typeId.ENEMY27BIG, 160700, 11, 412, 1, 1, 4, 0.6,-0.7, 3, 7);
enemyData[23] = new EnemyData(typeId.ENEMY28BIG, 160800, 11, 414, 1, 1, 4, 0.6,-0.7, 3, 7);
bossData[1] = new EnemyData(typeId.BOSS2, 4670000, 22, 99000, 2, 2, 4, 0, 0, soundId.BOSS2_DIE, typeId.EFFECT_ENEMY_DIE4);
//
enemyData[24] = new EnemyData(typeId.ENEMY310, 160000, 25, 500, 2, 2, 2, 0.7, 0.7, 5, 0);
enemyData[25] = new EnemyData(typeId.ENEMY311, 250000, 25, 750, 1, 1, 2, 0.3,-0.3, 1, typeId.EFFECT_ENEMY_DIE5);
enemyData[26] = new EnemyData(typeId.ENEMY312, 250000, 25, 750, 1, 1, 2,-0.1,-0.3, 1, 8);
enemyData[27] = new EnemyData(typeId.ENEMY313, 250000, 25, 750, 1, 1, 2, 0.3, 0.3, 1, 8);
enemyData[28] = new EnemyData(typeId.ENEMY314, 250000, 25, 750, 1, 1, 2,-0.1, 0.3, 1, 8);
enemyData[29] = new EnemyData(typeId.ENEMY320, 170000, 25, 525, 2, 2, 2, 0.7, 0.7, 5, 0);
enemyData[30] = new EnemyData(typeId.ENEMY321, 260000, 25, 775, 1, 1, 2, 0.1,-0.1, 1, 8);
enemyData[31] = new EnemyData(typeId.ENEMY322, 260000, 25, 775, 1, 1, 2,-0.1,-0.1, 1, 8);
enemyData[32] = new EnemyData(typeId.ENEMY323, 260000, 25, 775, 1, 1, 2, 0.1, 0.1, 1, 8);
enemyData[33] = new EnemyData(typeId.ENEMY324, 260000, 25, 775, 1, 1, 2,-0.1, 0.1, 1, 8);
enemyData[34] = new EnemyData(typeId.ENEMY330, 215000, 25, 600, 2, 2, 2, 0.4, 0.4, 5, 0);
enemyData[35] = new EnemyData(typeId.ENEMY331, 290000, 25, 780, 1, 1, 2, 0.2,-0.2, 1, 8);
enemyData[36] = new EnemyData(typeId.ENEMY332, 290000, 25, 780, 1, 1, 2,-0.1,-0.2, 1, 8);
enemyData[37] = new EnemyData(typeId.ENEMY333, 290000, 25, 780, 1, 1, 2, 0.2, 0.2, 1, 8);
enemyData[38] = new EnemyData(typeId.ENEMY334, 290000, 25, 780, 1, 1, 2,-0.1, 0.2, 1, 8);
enemyData[39] = new EnemyData(typeId.ENEMY340, 240000, 25, 720, 2, 2, 2, 0.5, 0.5, 5, 0);
enemyData[40] = new EnemyData(typeId.ENEMY341, 330000, 25, 980, 1, 1, 2, 0.2,-0.1, 1, 8);
enemyData[41] = new EnemyData(typeId.ENEMY342, 330000, 25, 980, 1, 1, 2,-0.1,-0.1, 1, 8);
enemyData[42] = new EnemyData(typeId.ENEMY343, 330000, 25, 980, 1, 1, 2, 0.2, 0.7, 1, 8);
enemyData[43] = new EnemyData(typeId.ENEMY344, 330000, 25, 980, 1, 1, 2,-0.1, 0.7, 1, 8);
//
enemyData[44] = new EnemyData(typeId.ENEMY41, 410500, 4, 2000, 1, 2, 2, 1, 2, 6, 0);
enemyData[45] = new EnemyData(typeId.ENEMY42, 430700, 4, 2248, 1, 2, 2, 1, 2, 6, 0);
enemyData[46] = new EnemyData(typeId.ENEMY43, 486400, 4, 2952, 1, 2, 2, 1, 2, 7, 0);
enemyData[47] = new EnemyData(typeId.ENEMY44, 420500, 4, 3679, 1, 2, 2, 1, 2, 7, 0);
enemyData[48] = new EnemyData(typeId.ENEMY45, 900000, 20, 6000, 1, 2, 3, 0.1, 0, 8, 9);
enemyData[49] = new EnemyData(typeId.ENEMY46, 900000, 20, 6000, 1, 2, 3, 0.1, 0, 8, 9);
enemyData[50] = new EnemyData(typeId.ENEMY47, 2000000, 20, 10000, 1, 4, 2, 0.1, 0, 9, 9);
enemyData[51] = new EnemyData(typeId.ENEMY48, 2000000, 20, 10000, 1, 4, 2, 0.1, 0, 9, 9);
bossData[2] = new EnemyData(typeId.BOSS3, 16420000, 50, 40000, 2, 2, 4, 0, 0, soundId.ENEMY17_DIE, typeId.EFFECT_UNUSED);
//
bossData[3] = new EnemyData(typeId.BOSS4, 5539000, 50, 1, 2, 2, 4, 0, 0, 1, soundId.ENEMY17_DIE, typeId.EFFECT_UNUSED);

function EnemyObject(){
  this.move = function(){
    if(this.objectType == 'boss'){
      switch(this.typeId){
        case typeId.BOSS4:
          this.x = Math.random() * (120 - (this.w * this.scale * 8) ) + 120;
          this.y = Math.random() * (120 - (this.h * this.scale * 8) );
          break;
        default:
          if(this.x < 140) this.x++;
          else if(this.x > 160) this.x--;

          if(this.y < 30) this.y++;
          else if(this.y > 30) this.y--;
          break;
      }
      return;
    }

    switch(this.typeId){
      default:
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.y <= -20)  this.speedY = Math.abs(this.speedY) * 1;
        if(this.y >= FIELD_MAX_SIZE_Y + 24 - (this.scale * 8 * this.h) )  this.speedY = Math.abs(this.speedY) * -1;
        break;
      case typeId.ENEMY11: this.moveEnemy11(); break;
      case typeId.ENEMY12: this.moveEnemy12(); break;
      case typeId.ENEMY41: case typeId.ENEMY42: case typeId.ENEMY43: case typeId.ENEMY44: this.moveEnemy41(); break;
      case typeId.ENEMY45: case typeId.ENEMY46: case typeId.ENEMY47: case typeId.ENEMY48: this.moveEnemy45(); break;
    }
  }
  this.moveEnemy11 = function(){
    if(this.moveType == ''){
      this.x -= 3;
    } else if(this.moveType == 'down'){
      if(this.x >= 80){
        this.y += 2;
        this.x -= 2;
      } else if(this.x >= 40 && this.y <= FIELD_MAX_SIZE_Y - 40) {
        this.y += 4;
      } else{
        this.moveType = 'right';
      }
    } else if(this.moveType == 'up'){
      if(this.x >= 80){
        this.y -= 2;
        this.x -= 2;
      } else if(this.x >= 40 && this.y >= 40) {
        this.y -= 4;
      } else {
        this.moveType = 'right';
      }
    } else if(this.moveType == 'right'){
      this.x += 2;
    }

    if(this.moveType == '' && this.y <= FIELD_MAX_SIZE_Y / 2 && this.x <= 80){
      this.moveType = 'down';
    } else if(this.moveType == '' && this.y >= FIELD_MAX_SIZE_Y / 2 && this.x <= 80){
      this.moveType = 'up';
    }
  }
  this.moveEnemy12 = function(){
    this.count++;
    this.x -= 2;
    this.y += this.speedY;
    if(this.y <= 0){
      this.y = 0;
      this.speedY = 1;
    }
    if(this.y >= FIELD_MAX_SIZE_Y){
      this.y = FIELD_MAX_SIZE_Y;
      this.speedY = -1;
    }

    if(this.count >= 20){
      this.count = 0;
      this.x -= 2;
      this.speedY = Math.floor((Math.random() * 6) - 3);
      if(this.speedY == 0) this.speedY = 1;
    }
  }
  this.moveEnemy17 = function(){
    if(this.x <= 120 && this.x >= 60){
      this.speedX = 0.2;
    } else if(this.x <= 60){
      this.speedX = 0.1;
    }
  }
  this.moveEnemy41 = function(){
    if(this.x > FIELD_MAX_SIZE_X - 24){
      this.speedX = Math.abs(this.speedX) * -1;
      this.x += this.speedX;
    }

    if(this.y >= FIELD_MAX_SIZE_Y - 64){
      this.speedY = Math.abs(this.speedY) * -1;
      this.y += this.speedY;
    } else if(this.y < 0){
      this.speedY = Math.abs(this.speedY);
      this.y += this.speedY;
    }
  }
  this.moveEnemy45 = function(){
    if(this.y <= 0){
      this.y++;
    } else if(this.y + (this.h * this.scale * 8) >= FIELD_MAX_SIZE_Y){
      this.y--;
    }

    if(this.x >= FIELD_MAX_SIZE_X - 32){
      this.x -= 6;
    }

    this.x += this.speedX;
  }
  
  this.enemyAttack = function(){
    this.attackDelay++;
    if(this.attackDelay >= 180){
      this.attackDelay = 0;
      var bulletX = this.x+(this.scale/2);
      var bulletY = this.y+(this.scale/2);
      switch(this.typeId){
        case typeId.ENEMY41: insertEnemyBulletObject(typeId.ENEMYBULLET41, bulletX, bulletY, 0, 0, true); break;
        case typeId.ENEMY42: insertEnemyBulletObject(typeId.ENEMYBULLET42, bulletX, bulletY, 0, 0, true); break;
        case typeId.ENEMY43: insertEnemyBulletObject(typeId.ENEMYBULLET43, bulletX, bulletY, 0, 0, true); break;
        case typeId.ENEMY44: insertEnemyBulletObject(typeId.ENEMYBULLET44, bulletX, bulletY, 0, 0, true); break;
      }

      if(this.objectType == "boss" && this.typeId == typeId.BOSS3){
        insertEnemyBulletObject(typeId.ENEMYBULLET45, bulletX, bulletY, 0, 0, true);
      }
    }

    if(this.attackDelay >= 60 && collision(player, this)){
      player.damageInsert(this.attack);
      this.hp -= player.attack * 100;
      this.attackDelay = 0;
    }
  }

  this.process = function(){
    if(!this.isUsing) return;

    this.move();
    if(this.x <= -60) this.x = 280;

    if(this.hp <= 0){
      player.plusExp(this.score);
      soundPlay(this.deadSoundId);
      if(this.w == 2 && this.h == 2){
        insertEffectObject(this.deadEffectId, this.x, this.y, this.scale*2);
      } else {
        insertEffectObject(this.deadEffectId, this.x, this.y, this.scale);
        for(var i = 2; i <= this.h; i++){
          insertEffectObject(this.deadEffectId, this.x, this.y+(8*this.scale*(i-1)), this.scale);
        }
      }

      if(this.objectType == 'boss' && this.typeId != typeId.BOSS2){
        soundPlay(soundId.BOSS_KILL);
        for(var i = 0; i < 12; i++){
          insertEffectObject(typeId.EFFECT_ENEMY_DIE1, this.x + (Math.random() * 40) - 20, this.y + (Math.random() * 40) - 20, this.scale * 2, 20 * i);
          insertEffectObject(typeId.EFFECT_ENEMY_DIE2, this.x + (Math.random() * 40) - 20, this.y + (Math.random() * 40) - 20, this.scale * 2, 20 * i + 10);
        }
      }

      switch(this.typeId){
        case typeId.ENEMY310:
          insertEnemyObject(typeId.ENEMY311, this.x,   this.y, 2);
          insertEnemyObject(typeId.ENEMY312, this.x+8, this.y, 2);
          insertEnemyObject(typeId.ENEMY313, this.x,   this.y+8, 2);
          insertEnemyObject(typeId.ENEMY314, this.x+8, this.y+8, 2);
          break;
        case typeId.ENEMY320:
          insertEnemyObject(typeId.ENEMY321, this.x, this.y, 2);
          insertEnemyObject(typeId.ENEMY322, this.x+16, this.y, 2);
          insertEnemyObject(typeId.ENEMY323, this.x, this.y+16, 2);
          insertEnemyObject(typeId.ENEMY324, this.x+16, this.y+16, 2);
          break;
        case typeId.ENEMY330:
          insertEnemyObject(typeId.ENEMY331, this.x, this.y, 2);
          insertEnemyObject(typeId.ENEMY332, this.x+16, this.y, 2);
          insertEnemyObject(typeId.ENEMY333, this.x, this.y+16, 2);
          insertEnemyObject(typeId.ENEMY334, this.x+16, this.y+16, 2);
          break;
        case typeId.ENEMY340:
          insertEnemyObject(typeId.ENEMY341, this.x, this.y, 2);
          insertEnemyObject(typeId.ENEMY342, this.x+16, this.y, 2);
          insertEnemyObject(typeId.ENEMY343, this.x, this.y+16, 2);
          insertEnemyObject(typeId.ENEMY344, this.x+16, this.y+16, 2);
          break;
      }

      this.delete();
      return;
    }

    if(this.x <= -120 || this.x >= 320 || this.y <= -60 || this.y >= 140){
      this.delete();
      return;
    }

    this.enemyAttack();
  }
}
EnemyObject.prototype = new FieldObject();
var enemyObject = new Array(100);
for(var i = 0; i < enemyObject.length; i++) enemyObject[i] = new EnemyObject();

function EnemyBulletObject(){
  this.process = function(){
    if(!this.isUsing) return;

    this.x += this.speedX;
    this.y += this.speedY;
    if(this.x <= -120 || this.x >= 320 || this.y <= -60 || this.y >= 140){
      this.delete();
      return;
    }
    if(collision(player, this)){
      switch(this.typeId){
        case 0: player.damageInsert(10); break;
        case 1: player.damageInsert( 8); break;
        case 2: player.damageInsert(11); break;
        case 3: player.damageInsert(15); break;
        case 4: player.damageInsert(50); break;
      }
      this.delete();
      return;
    }
  }
}
EnemyBulletObject.prototype = new FieldObject();
var enemyBulletObject = new Array(100);
for(var i = 0; i < enemyBulletObject.length; i++) enemyBulletObject[i] = new EnemyBulletObject();

function WeaponObject(){
  this.setChaseTarget = function(){
    if(this.isChase) this.targetNumber = getEnemyRandomIndex();
    else this.targetNumber = null;
  }
  this.moveChase = function(){
    if(this.targetNumber != null && !enemyObject[this.targetNumber].isUsing) this.setChaseTarget();
    else if(this.targetNumber == null) this.setChaseTarget();
    if(this.targetNumber == null && this.typeId != typeId.SKILL_CRESCENT){
      this.isChase = false;
      return;
    }

    var enemyX = 0;
    var enemyY = 0;
    if(this.typeId == typeId.SKILL_CRESCENT && this.targetNumber == null){
      enemyX = player.x;
      enemyY = player.y;
    } else {
      enemyX = enemyObject[this.targetNumber].x + enemyObject[this.targetNumber].scale * 4;
      enemyY = enemyObject[this.targetNumber].y + enemyObject[this.targetNumber].scale * 4;
    }

    if(Math.abs(enemyX - this.x) <= 16){
      this.x = enemyX;
    } else {
      var speedX = (enemyX - this.x) / 10;
      if(speedX < 5 && speedX >= 0)  speedX = 5;
      else if(speedX > -5 && speedX <= 0)  speedX = -5;
      
      this.x += speedX;
    }

    if(Math.abs(enemyY - this.y) <= 16){
      this.y = enemyY;
    } else {
      var speedY = (enemyY - this.y) / 10;
      if(speedY < 5 && speedY >= 0)  speedY = 5;
      else if(speedY > -5 && speedY <= 0)  speedY = -5;
      
      this.y += speedY;
    }
  }
  this.moveDefault = function(){
    switch(this.typeId){
    case typeId.BOMB:
      if(this.count <= 2){
        this.speedX = Math.random() * 2 + 0.5;
      }
      this.count++;
      this.gravity = Math.floor((this.count - 30) / 10);
      this.x += this.speedX;
      this.y += this.speedY + this.gravity;
      break;
    default:
      this.x += this.speedX;
      this.y += this.speedY;
      break;
    }
  }
  this.move = function(){
    if(this.isChase) this.moveChase();
    else this.moveDefault();
  }
  this.processColisionMissile = function(){
    if(this.typeId == typeId.ROCKET){
      this.delayCount = 0;
      this.repeatCount--;
      this.x += 24;
      this.y -= 4;
      insertSplashObject(this);
      this.x -= 24;
      this.y += 4;
      this.scale = 1;
      if(this.repeatCount <= 0){
        this.delete();
      }
      return;
    }

    for(var enemyIndex = 0, length = enemyObject.length; enemyIndex < length; enemyIndex++){
      if(enemyObject[enemyIndex].isUsing && collision(this, enemyObject[enemyIndex])){
        insertSplashObject(this);
        if(this.typeId == typeId.SKILL_MISSILE) soundPlay(soundId.SKILL_MISSILE_HIT);
        this.delete();
        return;
      }
    } 
  }
  this.processCollisionCrescent = function(){
    for(var enemyIndex = 0, length = enemyObject.length; enemyIndex < length; enemyIndex++){
      if(enemyObject[enemyIndex].isUsing && collision(this, enemyObject[enemyIndex])){
        if(this.typeId == typeId.SKILL_CRESCENT) soundPlay(soundId.SKILL_CRESCENT_HIT);
        enemyObject[enemyIndex].hp -= this.attack;
        this.repeatCount--;
        if(this.repeatCount <= 0) this.delete();
        return;
      }
    }
  }
  this.processCollisionDefault = function(){
    for(var enemyIndex = 0, length = enemyObject.length; enemyIndex < length; enemyIndex++){
      if(enemyObject[enemyIndex].isUsing && collision(this, enemyObject[enemyIndex])){
        enemyObject[enemyIndex].hp -= this.attack;
        if(this.typeId == 'ball'){
          this.speedX *= -1;
          this.speedY *= -1;
          this.count--;
          if(this.count <= 0) this.delete();
        } else this.delete();
        return;
      }
    }
  }

  this.process = function(){
    if(!this.isUsing) return;
    
    this.move();
    this.delayCount++;
    if(this.delayCount >= this.delay){
      this.delayCount = 0;
      switch(this.typeId){ // 적 충돌 체크
        case typeId.MISSILE: case typeId.ROCKET: case typeId.SNIPER: case typeId.BOMB: case typeId.SKILL_MISSILE: this.processColisionMissile(); break;
        case typeId.CRESCENT: case typeId.STAR: case typeId.SKILL_CRESCENT: this.processCollisionCrescent(); break;
        default: this.processCollisionDefault(); break;
      }
    }

    // 무기이 바깥으로 가버리면 그냥 삭제
    if(this.x >= 320 || this.y >= 180 || this.x <= -60 || this.y <= -60) this.delete();
  }
}
WeaponObject.prototype = new FieldObject();
var weaponObject = new Array(300);
for(var i = 0; i < weaponObject.length; i++) weaponObject[i] = new WeaponObject();

function WeaponData(typeId, repeatCount, delay, w, h, scale, isChase){
  this.typeId = typeId;
  this.repeatCount = repeatCount;
  this.delay = delay;
  this.w = w;
  this.h = h;
  this.scale = scale;
  this.isChase = isChase;
}
var weaponData = new Array(100);
weaponData[typeId.LASER_NORMAL] = new WeaponData(typeId.LASER_NORMAL, 0, 0, 1, 1, 1, false);
weaponData[typeId.LASER_BLUE]   = new WeaponData(typeId.LASER_BLUE  , 0, 0, 1, 1, 1, true);
weaponData[typeId.LASER_GREEN]  = new WeaponData(typeId.LASER_GREEN , 0, 0, 1, 1, 1, false);
weaponData[typeId.LASER_GREY]   = new WeaponData(typeId.LASER_GREY  , 0, 0, 1, 1, 1, false);
weaponData[typeId.MISSILE] = new WeaponData(typeId.MISSILE  , 0, 0, 2, 1, 1, true);
weaponData[typeId.ROCKET]  = new WeaponData(typeId.ROCKET   ,12, 4, 2, 1, 1, false);
weaponData[typeId.BOMB]    = new WeaponData(typeId.BOMB     , 0, 0, 2, 2, 1, false);
weaponData[typeId.SNIPER]  = new WeaponData(typeId.SNIPER   , 0, 0, 1, 1, 1, true);
weaponData[typeId.CRESCENT]= new WeaponData(typeId.CRESCENT ,12, 0, 1, 2, 2, false);
weaponData[typeId.STAR]    = new WeaponData(typeId.STAR     , 5, 0, 1, 1, 2, false);
weaponData[typeId.SKILL_LASER]   = new WeaponData(typeId.SKILL_LASER, 0, 0, 2, 1, 2, true);
weaponData[typeId.SKILL_MISSILE] = new WeaponData(typeId.SKILL_MISSILE, 0, 0, 2, 1, 2, true);
weaponData[typeId.SKILL_CRESCENT] = new WeaponData(typeId.SKILL_CRESCENT, 60, 2, 2, 2, 1, true);

function SplashObject(){
  this.process = function(){
    this.attackDelayCount++;
    if(this.attackDelayCount >= this.attackDelay){
      
      this.attackDelayCount = 0;
      this.attackCount++;
      switch(this.typeId){
        case typeId.BOMB: insertEffectObject(typeId.EFFECT_SPLASH_RED, this.x, this.y, this.scale); break;
        case typeId.SNIPER: insertEffectObject(typeId.EFFECT_SPLASH_SNIPER, this.x, this.y, this.scale); break;
        case typeId.MISSILE: case typeId.ROCKET: default:
          insertEffectObject(typeId.EFFECT_SPLASH_BLUE, this.x, this.y, this.scale);
          break;
      }

      for(var enemyIndex = 0, length = enemyObject.length; enemyIndex < length; enemyIndex++){
        if(collision(this, enemyObject[enemyIndex])){
          enemyObject[enemyIndex].hp -= this.attack;
          this.attackMonsterCount++;
        }

        if(this.attackMonsterCount >= this.maxMonster){
          this.attackMonsterCount = 0;
          break;
        }
      } // for end

      if(this.attackCount >= this.repeatCount){
        this.delete();
        return;
      }
    }
  }
}
SplashObject.prototype = new FieldObject();
var splashObject = new Array(100);
for(var i = 0; i < splashObject.length; i++) splashObject[i] = new SplashObject();

function SplashData(typeId, attackDelay, repeatCount, maxMonster, scale){
  this.typeId = typeId;
  this.attackDelay = attackDelay;
  this.repeatCount = repeatCount;
  this.maxMonster = maxMonster;
  this.scale = scale;
}
var splashData = new Array(24);
splashData[typeId.MISSILE] = new SplashData(typeId.MISSILE, 6, 8, 10, 3);
splashData[typeId.ROCKET] = new SplashData(typeId.ROCKET, 6, 1, 12, 3);
splashData[typeId.SNIPER] = new SplashData(typeId.SNIPER, 2, 4, 4, 1);
splashData[typeId.BOMB] = new SplashData(typeId.BOMB, 0, 1, 100, 8);
splashData[typeId.SKILL_MISSILE] = new SplashData(typeId.SKILL_MISSILE, 4, 16, 10, 3);

function EffectObject(){
  this.process = function(){
    this.delayCount++;
    if(this.delayCount < 0) this.spriteId = 0;
    if(this.delayCount >= this.delay){
      this.delayCount = 0;
      this.frame++;
      this.spriteId = getSpriteId(this.objectType, this.typeId) + this.frame;

      if(this.frame >= this.effectFrame) this.delete();
    }
  }
}
EffectObject.prototype = new FieldObject();
var effectObject = new Array(100);
for(var i = 0; i < effectObject.length; i++) effectObject[i] = new EffectObject();

function EffectData(effectFrame, delay){
  this.effectFrame = effectFrame;
  this.delay = delay;
}
var effectData = new Array(24);
effectData[typeId.EFFECT_UNUSED] = new EffectData(0, 0);
effectData[typeId.EFFECT_SPLASH_RED] = new EffectData(8, 1);
effectData[typeId.EFFECT_SPLASH_BLUE] = new EffectData(4, 1);
effectData[typeId.EFFECT_SPLASH_SNIPER] = new EffectData(4, 1);
effectData[typeId.EFFECT_ENEMY_DIE1] = new EffectData(8, 2);
effectData[typeId.EFFECT_ENEMY_DIE2] = new EffectData(8, 2);
effectData[typeId.EFFECT_ENEMY_DIE3] = new EffectData(8, 2);
effectData[typeId.EFFECT_ENEMY_DIE4] = new EffectData(8, 2);
effectData[typeId.EFFECT_ENEMY_DIE5] = new EffectData(8, 2);
effectData[typeId.EFFECT_ENEMY_DIE6] = new EffectData(8, 2);

function collision(object1, object2){
  if(object1.x < object2.x + (object2.w * 8 * object2.scale) &&
      object1.x + (object1.w * 8 * object1.scale) > object2.x &&
      object1.y < object2.y + (object2.h * 8 * object2.scale) &&
      object1.y + (object1.h * 8 * object1.scale) > object2.y) return true;
  else return false;
}

function getUnusedArrayIndex(fieldObjectArray){
  for(var i = 0; i < fieldObjectArray.length; i++){
    if(fieldObjectArray[i].isUsing === false) return i;
  }
  return null;
}

function getSpriteId(objectTypeValue, typeIdValue){
if(objectTypeValue === 'enemy'){
  switch(typeIdValue){
  case typeId.ENEMY11: return spriteId.ENEMY11;
  case typeId.ENEMY12: return spriteId.ENEMY12;
  case typeId.ENEMY13: return spriteId.ENEMY13;
  case typeId.ENEMY14: return spriteId.ENEMY14;
  case typeId.ENEMY15: return spriteId.ENEMY15;
  case typeId.ENEMY16: return spriteId.ENEMY16;
  case typeId.ENEMY17: return spriteId.ENEMY17;
  case typeId.ENEMY18: return spriteId.ENEMY18;
  //
  case typeId.ENEMY21: case typeId.ENEMY21BIG: return spriteId.ENEMY21;
  case typeId.ENEMY22: case typeId.ENEMY22BIG: return spriteId.ENEMY22;
  case typeId.ENEMY23: case typeId.ENEMY23BIG: return spriteId.ENEMY23;
  case typeId.ENEMY24: case typeId.ENEMY24BIG: return spriteId.ENEMY24;
  case typeId.ENEMY25: case typeId.ENEMY25BIG: return spriteId.ENEMY25;
  case typeId.ENEMY26: case typeId.ENEMY26BIG: return spriteId.ENEMY26;
  case typeId.ENEMY27: case typeId.ENEMY27BIG: return spriteId.ENEMY27;
  case typeId.ENEMY28: case typeId.ENEMY28BIG: return spriteId.ENEMY28;
  //
  case typeId.ENEMY310: return spriteId.ENEMY310;
  case typeId.ENEMY311: return spriteId.ENEMY311;
  case typeId.ENEMY312: return spriteId.ENEMY312;
  case typeId.ENEMY313: return spriteId.ENEMY313;
  case typeId.ENEMY314: return spriteId.ENEMY314;
  case typeId.ENEMY320: return spriteId.ENEMY320;
  case typeId.ENEMY321: return spriteId.ENEMY321;
  case typeId.ENEMY322: return spriteId.ENEMY322;
  case typeId.ENEMY323: return spriteId.ENEMY323;
  case typeId.ENEMY324: return spriteId.ENEMY324;
  case typeId.ENEMY330: return spriteId.ENEMY330;
  case typeId.ENEMY331: return spriteId.ENEMY331;
  case typeId.ENEMY332: return spriteId.ENEMY332;
  case typeId.ENEMY333: return spriteId.ENEMY333;
  case typeId.ENEMY334: return spriteId.ENEMY334;
  case typeId.ENEMY340: return spriteId.ENEMY340;
  case typeId.ENEMY341: return spriteId.ENEMY341;
  case typeId.ENEMY342: return spriteId.ENEMY342;
  case typeId.ENEMY343: return spriteId.ENEMY343;
  case typeId.ENEMY344: return spriteId.ENEMY344;
  //
  case typeId.ENEMY41: return spriteId.ENEMY41;
  case typeId.ENEMY42: return spriteId.ENEMY42;
  case typeId.ENEMY43: return spriteId.ENEMY43;
  case typeId.ENEMY44: return spriteId.ENEMY44;
  case typeId.ENEMY45: return spriteId.ENEMY45;
  case typeId.ENEMY46: return spriteId.ENEMY46;
  case typeId.ENEMY47: return spriteId.ENEMY47;
  case typeId.ENEMY48: return spriteId.ENEMY48;
  }
} else if(objectTypeValue === 'weapon'){
  switch(typeIdValue){
  case typeId.LASER_NORMAL: return spriteId.LASER_NORMAL;
  case typeId.LASER_GREEN: return spriteId.LASER_GREEN;
  case typeId.LASER_BLUE: return spriteId.LASER_BLUE;
  case typeId.LASER_GREY: return spriteId.LASER_GREY;
  case typeId.MISSILE: return spriteId.MISSILE;
  case typeId.ROCKET: return spriteId.ROCKET;
  case typeId.BOMB: return spriteId.BOMB;
  case typeId.SNIPER: return spriteId.SNIPER;
  case typeId.STAR: return spriteId.STAR;
  case typeId.CRESCENT: return spriteId.CRESCENT;
  case typeId.SKILL_LASER: return spriteId.SKILL_LASER;
  case typeId.SKILL_MISSILE: return spriteId.SKILL_MISSILE;
  case typeId.SKILL_CRESCENT: return spriteId.SKILL_CRESCENT;
  }
} else if(objectTypeValue === 'effect'){
  switch(typeIdValue){
  case typeId.EFFECT_SPLASH_RED: return spriteId.EFFECT_SPLASH_RED;
  case typeId.EFFECT_SPLASH_BLUE: return spriteId.EFFECT_SPLASH_BLUE;
  case typeId.EFFECT_SPLASH_SNIPER: return spriteId.EFFECT_SPLASH_SNIPER;
  case typeId.EFFECT_ENEMY_DIE1: return spriteId.EFFECT_ENEMY_DIE1;
  case typeId.EFFECT_ENEMY_DIE2: return spriteId.EFFECT_ENEMY_DIE2;
  case typeId.EFFECT_ENEMY_DIE3: return spriteId.EFFECT_ENEMY_DIE3;
  case typeId.EFFECT_ENEMY_DIE4: return spriteId.EFFECT_ENEMY_DIE4;
  case typeId.EFFECT_ENEMY_DIE5: return spriteId.EFFECT_ENEMY_DIE5;
  case typeId.EFFECT_ENEMY_DIE6: return spriteId.EFFECT_ENEMY_DIE6;
  case typeId.EFFECT_UNUSED: return spriteId.UNUSED;
  }
} else if(objectTypeValue === 'boss'){
  switch(typeIdValue){
  case typeId.BOSS1: return spriteId.BOSS1;
  case typeId.BOSS2: return spriteId.BOSS2;
  case typeId.BOSS3: return spriteId.BOSS3;
  case typeId.BOSS4: return spriteId.BOSS4;
  }
} else if(objectTypeValue === 'enemybullet') {
  switch(typeIdValue){
  case typeId.ENEMYBULLET41: return spriteId.ENEMYBULLET41;
  case typeId.ENEMYBULLET42: return spriteId.ENEMYBULLET42;
  case typeId.ENEMYBULLET43: return spriteId.ENEMYBULLET43;
  case typeId.ENEMYBULLET44: return spriteId.ENEMYBULLET44;
  case typeId.ENEMYBULLET45: return spriteId.ENEMYBULLET45;
  }
} else {
  return spriteId.UNUSED;
}
}

function insertWeaponObject(weaponTypeId, attack, x, y, speedX, speedY){
  var arrayIndex = getUnusedArrayIndex(weaponObject);
  if(arrayIndex !== null){
  var f = weaponObject[arrayIndex];
  var g = weaponData[weaponTypeId];
  f.init();
  f.isUsing = true;
  f.objectType = 'weapon';
  f.typeId = weaponTypeId;
  f.spriteId = getSpriteId(f.objectType, f.typeId);
  f.x = x;
  f.y = y;
  f.attack = attack;
  f.speedX = speedX;
  f.speedY = speedY;
  f.w = g.w;
  f.h = g.h;
  f.scale = g.scale;
  f.repeatCount = g.repeatCount;
  f.isChase = g.isChase;
  f.delay = g.delay;
  if(f.isChase) f.setChaseTarget();
  }
}

function insertSplashObject(weaponObject){
  var arrayIndex = getUnusedArrayIndex(splashObject);
  if(arrayIndex !== null){
  var f = splashObject[arrayIndex];
  var a = weaponObject;
  var g = splashData[weaponObject.typeId];
  f.init();
  f.isUsing = true;
  f.objectType = 'splash';
  f.typeId = a.typeId;
  f.subType = a.subType;
  f.x = a.x;
  f.y = a.y;
  f.w = a.w;
  f.h = a.h;
  f.attack = a.attack;
  f.speedX = a.speedX;
  f.speedY = a.speedY;
  
  f.attackDelay = g.attackDelay;
  f.repeatCount = g.repeatCount;
  f.maxMonster = g.maxMonster;
  f.scale = g.scale;
  }
}

function insertEnemyBulletObject(typeIdValue, x, y, speedX, speedY, isChase){
  var arrayIndex = getUnusedArrayIndex(enemyBulletObject);
  if(arrayIndex !== null){
  var f = enemyBulletObject[arrayIndex];
  f.init();
  f.isUsing = true;
  f.objectType = 'enemybullet';
  f.typeId = typeIdValue;
  f.x = x;
  f.y = y;
  f.speedX = speedX;
  f.speedY = speedY;
  f.spriteId = getSpriteId(f.objectType, f.typeId);
  if(isChase = true){
    f.speedX = (player.x - f.x) / 120;
    if(f.speedX >= 1 && f.speedX <= 0) f.speedX = 1;
    else if(f.speedX <= -1 && f.speedX >= 0) f.speedX = -1;

    f.speedY = (player.y - f.y) / 120;
    if(f.speedY >= 1 && f.speedY <= 0) f.speedY = 1;
    else if(f.speedY <= -1 && f.speedY >= 0) f.speedY = -1;

    if(f.typeId == typeId.ENEMYBULLET45){
      f.scale = 12;
      // f.speedX = f.speedX / 4;
      // f.speedY = f.speedY / 4;
    }
  }
  }
}

function insertEnemyObject(enemytypeId, x, y){
  var arrayIndex = getUnusedArrayIndex(enemyObject);
  if(arrayIndex !== null){
  f = enemyObject[arrayIndex];
  g = enemyData[enemytypeId];
  f.init();
  f.objectType = 'enemy';
  f.typeId = enemytypeId;
  f.spriteId = getSpriteId(f.objectType, f.typeId);
  f.isUsing = true;
  
  f.hp = g.hp;
  f.hpMax = g.hp;
  f.attack = g.attack;
  f.score = g.score;
  f.x = x;
  f.y = y;
  f.w = g.w;
  f.h = g.h;
  f.scale = g.scale;
  f.speedX = g.speedX;
  f.speedY = g.speedY;
  f.deadSoundId = g.deadSoundId;
  f.deadEffectId = g.deadEffectId;
  }
}

function insertBossObject(bosstypeId, x, y){
  var arrayIndex = getUnusedArrayIndex(enemyObject);
  if(arrayIndex !== null){
  f = enemyObject[arrayIndex];
  g = bossData[bosstypeId];
  f.init();
  f.objectType = 'boss';
  f.typeId = bosstypeId;
  f.spriteId = getSpriteId(f.objectType, f.typeId);
  f.isUsing = true;

  f.hp = g.hp;
  f.hpMax = g.hp;
  f.attack = g.attack;
  f.score = g.score;
  f.x = x;
  f.y = y;
  f.w = g.w;
  f.h = g.h;
  f.scale = g.scale;
  f.speedX = g.speedX;
  f.speedY = g.speedY;
  f.deadSoundId = g.deadSoundId;
  f.deadEffectId = g.deadEffectId;
  }
}

function getCurrentBossCount(){
  var count = 0;
  for(var i = 0, l = enemyObject.length; i < l; i++){
    if(enemyObject[i].objectType == 'boss') count++;
  }
  return count;
}

function getCurrentUsingCount(fieldObjectArray){
  var count = 0;
  for(var i = 0, l = fieldObjectArray.length; i < l; i++){
    if(fieldObjectArray[i].isUsing) count++;
  }
  return count;
}

function getEnemyRandomIndex(){
  var enemyNumber = Math.floor(Math.random() * getCurrentUsingCount(enemyObject));
  for(var i = enemyNumber; i < enemyObject.length; i++){
    if(enemyObject[i].isUsing) return i;
  }
  for(var i = 0; i < enemyNumber; i++){
    if(enemyObject[i].isUsing) return i;
  }
  return null;
}

function insertEffectObject(effectTypeId, x, y, scale, afterFrame){
  var arrayIndex = getUnusedArrayIndex(effectObject);
  if(arrayIndex != null){
  var f = effectObject[arrayIndex];
  var g = effectData[effectTypeId];
  f.objectType = 'effect';
  f.typeId = effectTypeId;
  f.spriteId = getSpriteId(f.objectType, f.typeId);
  f.isUsing = true;

  f.x = x;
  f.y = y;
  f.speedX = 0;
  f.speedY = 0;
  f.scale = scale;
  f.delay = g.delay;
  f.effectFrame = g.effectFrame;
  f.frame = 0;
  f.delayCount = 0;
  if(typeof afterFrame != 'undefined') f.delayCount = -afterFrame;
  }
}

var player = {
//move stat
x:0, y:0, speedX:2, speedY:2, w:2, h:1, scale:1,

//sprite size
spriteId:spriteId.PLAYER_SPRITE1,

//hp, shield, mana
hp:120, hpMax:120,
shield:200, shieldMax:200, shieldRecovery:0,
mp:0, mpMax:1800, mpRecovery:0,
POS_LINE2: 128,  POS_SHIELD_X: 0,
COLOR_SHIELD:2,
POS_LINE1: 120, POS_HP_X: 0,
RECT_SIZE_HP:54, RECT_SIZE_LV:132,
COLOR_HP:6, COLOR_LV:4, COLOR_EXP:4, COLOR_GREY:7, COLOR_LV:2,
POS_LEVEL_X:60,
POS_ROUND_X:198,
POS_SKILL_X:60,

//damagestatus
damageDelayCount:0,

//lv, exp
lv:0, exp:0,
expTable: [1000,
  1000, 2000, 2500, 3000, 3500, 4000, 6000, 8000, 9000, 9900,
  11500, 12000, 12500, 13000, 13500, 14200, 14900, 15600, 16300, 17000,
  20000, 21000, 22000, 23000, 24000, 25000, 26000, 27000, 28000, 29000,
  30000, 32000, 34000, 36000, 38000, 40000, 50000, 60000, 70000, 80000,
  90000, 99999],

//attack
attack:500,
setCurrentAttack: function(){
  var baseAttack = 500 + (this.lv * 10);
  var levelBonus = baseAttack * (this.lv + 100) / 100;
  this.attack = Math.floor(baseAttack + levelBonus);
},
getExpMax: function(lv){
  if(lv >= this.expTable.length || this.lv >= this.expTable.length) return 0;
  else if(lv == null) return this.expTable[this.lv];
  else return this.expTable[lv];
},
lvUpCheck: function(){
  if(this.lv < this.expTable.length && this.exp >= this.getExpMax()){
    this.exp -= this.getExpMax();
    this.lv++;
    soundPlay(soundId.PLAYER_LEVELUP);
    return;
  }
},
plusExp: function(value){
  this.exp += value;
  this.lvUpCheck();
},
damageInsert: function(damageValue){
  if(damageValue <= 0) return;
  this.damageDelayCount += damageValue;
  if(this.shield >= damageValue){
    if(damageValue <= 16) soundPlay(soundId.PLAYER_DAMAGE1);
    else soundPlay(soundId.PLAYER_DAMAGE2);
    this.shield -= damageValue;
  } else if(this.shield >= 0 && this.shield <= damageValue){
    if(damageValue <= 12) soundPlay(soundId.PLAYER_DAMAGE2);
    else soundPlay(soundId.PLAYER_DAMAGE3);
    var leftValue = damageValue - this.shield;
    this.shield = 0;
    this.hp -= Math.floor(leftValue / 2);
  } else {
    if(damageValue <= 8) soundPlay(soundId.PLAYER_DAMAGE2);
    else soundPlay(soundId.PLAYER_DAMAGE3);
    if(damageValue <= 1) damageValue = 2;
    this.hp -= Math.floor(damageValue / 2);
  }
},
damageProcess: function(){
  if(this.damageDelayCount >= 1){
    this.damageDelayCount--;
    if(this.damageDelayCount % 2 == 1) this.spriteId = spriteId.PLAYER_SPRITE2;
    else this.spriteId = spriteId.PLAYER_SPRITE1;
  } else {
    this.spriteId = spriteId.PLAYER_SPRITE1;
    this.damageDelayCount = 0;
  }
},

skill : {
  typeId: [0, 0, 0],
  useMp: [0, 0, 0],
  coolTime: [0, 0, 0],
  defaultCoolTime: [0, 0, 0],
  count: [0, 0, 0],
  defaultCount: [0, 0, 0],
  delay: [0, 0, 0],
  delayCount: [0, 0, 0],
  setSkill: function(index, skillTypeId){
    this.typeId[index] = skillTypeId;
    var useMp = 0, defaultCoolTime = 0, defaultCount = 0, delay = 0;
    switch(skillTypeId){
      case typeId.SKILL_LASER: useMp = 1200, defaultCoolTime = 1260; delay = 5; defaultCount = 24; break;
      case typeId.SKILL_MISSILE: useMp = 1200, defaultCoolTime = 1380; delay = 20; defaultCount = 2; break;
      case typeId.SKILL_CRESCENT: userMp = 1440, defaultCoolTime = 1500; delay = 4; defaultCount = 1; break;
    }
    this.useMp[index] = useMp;
    this.defaultCoolTime[index] = defaultCoolTime;
    this.defaultCount[index] = defaultCount;
    this.delay[index] = delay;
  },
  coolTimeDown: function(){
    for(var i = 0; i < 3; i++){
      if(this.coolTime[i] > 0) this.coolTime[i]--;
    }
  },
  skillUse: function(index){
    if(this.coolTime[index] <= 0){
      this.coolTime[index] = this.defaultCoolTime[index];
      player.mp -= this.useMp[index];
      this.count[index] = this.defaultCount[index];
      if(this.typeId[index] == typeId.SKILL_LASER){
        soundPlay(soundId.SKILL_LASER);
        this.delayCount[index] = -60;
      }
    }
  },
  process: function(){
    this.coolTimeDown();
    for(var i = 0; i < 3; i++){
      this.delayCount[i]++;
      if(this.count[i] > 0 && this.delayCount[i] > this.delay[i]){
        this.count[i]--;
        this.delayCount[i] = 0;
        switch(this.typeId[i]){
          case typeId.SKILL_LASER: this.processSkillLaser(i); break;
          case typeId.SKILL_MISSILE: this.processSkillMissile(i); break;
          case typeId.SKILL_CRESCENT: this.processSkillCrescent(i); break;
        }
      }
    }
  },
  processSkillLaser: function(index){
    soundPlay(soundId.SKILL_LASER_SHOT);
    insertWeaponObject(this.typeId[index], player.attack*10, player.x, player.y-9, 4, 0);
    insertWeaponObject(this.typeId[index], player.attack*10, player.x, player.y+9, 4, 0);
    insertWeaponObject(this.typeId[index], player.attack*10, player.x, player.y-4, 4, 0);
    insertWeaponObject(this.typeId[index], player.attack*10, player.x, player.y+4, 4, 0);
    insertWeaponObject(this.typeId[index], player.attack*10, player.x, player.y  , 4, 0);
  },
  processSkillCrescent: function(index){
    soundPlay(soundId.SKILL_CRESCENT);
    insertWeaponObject(this.typeId[index], player.attack*10, player.x, player.y, 0, 0);
    insertWeaponObject(this.typeId[index], player.attack*10, player.x-24, player.y, 0, 0);
  },
  processSkillMissile: function(index){
    soundPlay(soundId.SKILL_MISSILE);
    insertWeaponObject(this.typeId[index], player.attack*16, player.x-40, player.y+40, 9, 0);
    insertWeaponObject(this.typeId[index], player.attack*16, player.x+40, player.y+40, 9, 0);
    insertWeaponObject(this.typeId[index], player.attack*16, player.x-40, player.y-40, 9, 0);
    insertWeaponObject(this.typeId[index], player.attack*16, player.x+40, player.y-40, 9, 0);
  },
},

currentWeapon: {
  delay: 0,
  delayCount: 0,
  w: 1, h: 1, scale: 1,
  type: '',
  isAuto: false,
  autoType: '',
  equipListIndex: 0,
  equipList: [typeId.LASER_NORMAL, typeId.MISSILE, typeId.BOMB, typeId.CRESCENT],
  firstWeaponSetting:function(){
    this.equipListIndex = this.equipList.length;
    this.weaponChange();
  },
  weaponChange: function(){
    this.equipListIndex++;
    if(this.equipList[this.equipListIndex] == null){
      for(var i = this.equipListIndex; i < this.equipList.length; i++){
        if(this.equipList[i] != null)  break;
      }
    }
    if(this.equipListIndex >= this.equipList.length) this.equipListIndex = 0;
    this.type = this.equipList[this.equipListIndex];
    switch(this.type){
      case typeId.LASER_NORMAL: this.delay = 10; break;
      case typeId.MISSILE: this.delay = 40; break;
      case typeId.BOMB: this.delay = 30; break;
      case typeId.CRESCENT: this.delay = 45; break;
    }
  }
},

init:function(){
  this.currentWeapon.firstWeaponSetting();
  this.skill.setSkill(0, typeId.SKILL_LASER);
  this.skill.setSkill(1, typeId.SKILL_MISSILE);
  this.skill.setSkill(2, typeId.SKILL_CRESCENT);
  this.x = 0;
  this.y = 64;
  this.currentWeapon.delayCount = 0;
  this.shield = this.shieldMax;
  this.hp = this.hpMax;
  this.shieldRecovery = 0;
  this.lv = 0;
  this.exp = 0;
},
move:function(){
    if (btn(btnId.UP) && this.y > 0) this.y -= this.speedY;
    if (btn(btnId.DOWN) && this.y + 8 < FIELD_MAX_SIZE_Y) this.y += this.speedY;
    if (btn(btnId.LEFT) && this.x > 0) this.x -= this.speedX;
    if (btn(btnId.RIGHT) && this.x + 16 < FIELD_MAX_SIZE_X) this.x += this.speedX;
},
display:function(){
  //상태창 검은색 배경
  displayRect(this.POS_SHIELD_X, this.POS_LINE2, 240, 16, 0);

  //플레이어
  displayObject(this);

  //퍼센트 계산
  var shieldPercent = (this.shield / this.shieldMax);
  var hpPercent = (this.hp / this.hpMax);

  var expPercent = Math.floor( ( this.exp / this.getExpMax() ) * 100);
  if(expPercent >= 100)  expPercent = 0;
  
  //bar background
  displayRect(this.POS_SHIELD_X, this.POS_LINE1, this.RECT_SIZE_HP, 8, this.COLOR_GREY);
  displayRect(this.POS_HP_X, this.POS_LINE2, this.RECT_SIZE_HP, 8, this.COLOR_GREY);
  displayRect(this.POS_LEVEL_X, this.POS_LINE2, this.RECT_SIZE_LV, 8, this.COLOR_GREY);

  //bar
  displayRect(this.POS_SHIELD_X, this.POS_LINE1, this.RECT_SIZE_HP*shieldPercent, 8, this.COLOR_SHIELD);
  displayRect(this.POS_HP_X, this.POS_LINE2, this.RECT_SIZE_HP*hpPercent, 8, this.COLOR_HP);
  displayRect(this.POS_LEVEL_X, this.POS_LINE2, this.RECT_SIZE_LV*expPercent/100, 8, this.COLOR_LV);

  //hp, shield
  displayText("S:" + this.shield +"/"+ this.shieldMax, this.POS_SHIELD_X, this.POS_LINE1);
  displayText("H:" + this.hp + "/" + this.hpMax, this.POS_HP_X, this.POS_LINE2);

  //level
  displayText("LV" + this.lv + " " + this.exp + "/" + this.getExpMax() + " " + expPercent + "%", this.POS_LEVEL_X, this.POS_LINE2);

  //round, time
  displayText("R" + field.round + ":" + field.roundCurrentTime, this.POS_ROUND_X, this.POS_LINE2);

  //스킬 표시
  var coolTimeA = Math.round(this.skill.coolTime[0]/60);
  var coolTimeB = Math.round(this.skill.coolTime[1]/60);
  var coolTimeC = Math.round(this.skill.coolTime[2]/60);
  displayText("SKILLcooltime: A:"+coolTimeA+" B:"+coolTimeB+" C:"+coolTimeC, this.POS_SKILL_X ,this.POS_LINE1);
},
processAttack:function(){
  this.currentWeapon.delayCount++;
  if(this.currentWeapon.delayCount >= this.currentWeapon.delay){
    this.currentWeapon.delayCount -= this.currentWeapon.delay;
    var x = this.x + this.w * 2;
    var y = this.y;
    var attack =  this.attack;
    var insW = insertWeaponObject;
    switch(this.currentWeapon.type){
    case typeId.LASER_NORMAL: //일반레이져 범위형
      attack *= 2;
      insW(typeId.LASER_NORMAL, attack, x, y-8, 8, 0);
      insW(typeId.LASER_NORMAL, attack, x, y+8, 8, 0);
      insW(typeId.LASER_GREEN, attack, x-4, y+4, 8,  1);
      insW(typeId.LASER_GREEN, attack, x-4, y-4, 8, -1);
      if(this.lv >= 2)  insW(typeId.LASER_BLUE, attack, x-16 , y, 8, 0);
      if(this.lv >= 4)  insW(typeId.LASER_BLUE, attack, x-32, y, 8, 0);
      if(this.lv >= 7){insW(typeId.LASER_GREEN, attack, x-16, y+8, 8,  1);
                        insW(typeId.LASER_GREEN, attack, x-16, y-8, 8, -1);}
      if(this.lv >= 10) insW(typeId.LASER_BLUE,  attack, x-32, y+16, 8, 0);
      if(this.lv >= 15) insW(typeId.LASER_NORMAL, attack, x+4, y-16, 8, 0);
      if(this.lv >= 20){insW(typeId.LASER_GREEN, attack, x-16, y+8, 8,  1);
                        insW(typeId.LASER_GREEN, attack, x-16, y-8, 8, -1);}
      if(this.lv >= 25) insW(typeId.LASER_BLUE,  attack, x-32, y+16, 8, 0);
      if(this.lv >= 30) insW(typeId.LASER_NORMAL, attack, x+4, y-16, 8, 0);
      break;
    case typeId.MISSILE:
      attack *= 1;
      insW(typeId.MISSILE, attack, x-8,  y, 8, 0);
      insW(typeId.MISSILE, attack, x-16, y, 8, 0);
      if(this.lv >= 2)  insW(typeId.ROCKET, attack, x-32, y, 4, 0.5);
      if(this.lv >= 4) insW(typeId.ROCKET, attack, x-32, y, 4, -0.5);
      if(this.lv >= 7) insW(typeId.ROCKET, attack, x-24, y, 4, 0.8);
      if(this.lv >= 10) insW(typeId.ROCKET, attack, x-24, y, 4, -0.8);
      if(this.lv >= 15){insW(typeId.MISSILE, attack, x-8,  y, 8, 0);
                        insW(typeId.MISSILE, attack, x-8,  y, 8, 0);}
      if(this.lv >= 20) insW(typeId.ROCKET, attack, x-32, y, 4, 0.2);
      if(this.lv >= 25) insW(typeId.ROCKET, attack, x-32, y, 4, -0.2);
      if(this.lv >= 30){insW(typeId.MISSILE, attack, x-8,  y, 8, 0);
                        insW(typeId.MISSILE, attack, x-8,  y, 8, 0);}
      break;
    case typeId.BOMB:
      attack *= 1;
      var bombCount = 2;
      var sniperCount = 1;
      if(this.lv >= 2 && this.lv <= 4){ bombCount = 3; sniperCount = 1;}
      else if(this.lv < 4){ bombCount = 3; sniperCount = 2;}
      else if(this.lv < 7){ bombCount = 3; sniperCount = 3;}
      else if(this.lv < 10){ bombCount = 3; sniperCount = 4;}
      else if(this.lv < 15){ bombCount = 4; sniperCount = 5;}
      else if(this.lv < 25){ bombCount = 5; sniperCount = 6;}
      else if(this.lv < 30){ bombCount = 5; sniperCount = 8;}
      else if(this.lv >= 30){ bombCount = 6; sniperCount = 10;}

      for(var i = 0; i < bombCount; i++) insW(typeId.BOMB, attack, x, y, 4, 0);
      for(var i = 0; i < sniperCount; i++)insW(typeId.SNIPER, attack, x, y, 4, 0);
      break;
    case typeId.CRESCENT:
      attack *= 2;
      insW(typeId.CRESCENT, attack, x, y, 3, 0);
      if(this.lv >= 2) insW(typeId.STAR, attack, x, y, 4, (Math.random() * 2) - 1);
      if(this.lv >= 4) insW(typeId.STAR, attack, x, y, 4, (Math.random() * 2) - 1);
      if(this.lv >= 7) insW(typeId.STAR, attack, x, y, 4, (Math.random() * 2) - 1);
      if(this.lv >= 10) insW(typeId.CRESCENT, attack, x-12, y, 3, 0);
      if(this.lv >= 15) insW(typeId.STAR, attack, x, y, 4, (Math.random() * 2) - 1);
      if(this.lv >= 20) insW(typeId.STAR, attack, x, y, 4, (Math.random() * 2) - 1);
      if(this.lv >= 25) insW(typeId.STAR, attack, x, y, 4, (Math.random() * 2) - 1);
      if(this.lv >= 30) insW(typeId.CRESCENT, attack, x-24, y, 3, 0);
      break;
    }
  }
},
process:function(){
  if(player.hp <= 0) return;

  if(btnp(btnId.A)) this.currentWeapon.weaponChange();
  if(btnp(btnId.B)) this.skill.skillUse(2);
  if(btnp(btnId.Y)) this.skill.skillUse(1);
  if(btnp(btnId.X)) this.skill.skillUse(0);
  
  this.shieldRecovery += 1;
  if(this.shieldRecovery >= 60 && this.shield < this.shieldMax){
    this.shield++;
    this.shieldRecovery = 0;
  }

  player.processAttack();
  player.move();
  player.display();
  player.skill.process();
  player.setCurrentAttack();
  player.damageProcess();
}
}
player.init();

var btnId = { UP:0, DOWN:1, LEFT:2, RIGHT:3, A:4, B:5, X:6, Y:7 }
var field = {
  round:1,
  maxRound:6,
  t:0,
  roundCompleteTime:0,
  roundCurrentTime:0,
  isRoundEndPostion:false,
  isRoundClear:false,
  roundCurrentTimeFrame:0,

  process:function(){
    this.t++;
    this.roundCurrentTimeFrame++;
    if(this.roundCurrentTimeFrame > 60){
      this.roundCurrentTimeFrame -= 60;
      this.roundCurrentTime++;
    }
    if(this.isRoundEndPostion && this.isRoundClear && this.round < this.maxRound){
      this.round++;
      this.currentRoundInit();
      musicStop();
    }
    this.display();
    if(field.t >= 10000) field.t = 0;
  },
  display:function(){
  },
  currentRoundInit: function(){
    this.roundCompleteTime = 0;
    this.roundCurrentTime = 0;
    this.isRoundEndPostion = false;
    this.isRoundClear = false;
    this.roundCurrentTimeFrame = 0;
    allEnemyDelete();
  },
  init:function(){
    this.round = 1;
    this.currentRoundInit();
  },
}

function display(){
  for(var i = 0; i < effectObject.length; i++){
    if(effectObject[i].isUsing){ effectObject[i].process(); effectObject[i].display();}
  }
  for(var i = 0; i < weaponObject.length; i++){
    if(weaponObject[i].isUsing){ weaponObject[i].process(); weaponObject[i].display();}
  }
  for(var i = 0; i < splashObject.length; i++){
    if(splashObject[i].isUsing){ splashObject[i].process();}
  }
  for(var i = 0; i < enemyObject.length; i++){
    if(enemyObject[i].isUsing){
      if(enemyObject[i].objectType == "boss"){
        var bossHp = enemyObject[i].hp;
        var bossHpPercent = enemyObject[i].hp / enemyObject[i].hpMax;
        displayRect(0, 0, 240, 8, 0);
        displayText("[Boss] hp: " + bossHp + "/" + enemyObject[i].hpMax);
        displayRect(0, 8, 240*bossHpPercent, 4, 14);
      }
      enemyObject[i].process(); enemyObject[i].display();
    }
  }
  for(var i = 0; i < enemyBulletObject.length; i++){
    if(enemyBulletObject[i].isUsing){ enemyBulletObject[i].display(); enemyBulletObject[i].process();}
  }
}

function mainMenu(){
  displayText("tamshotter", 0, 0);;
  displayText("option: music: " + !isMusicMute , 0, 8);
  displayText("B button is change music true/false", 0, 16);
  displayText("A button is game start", 0, 24);
  displayText("GAME HELP", 0, 40);
  displayText("A: weapon change, X,Y,B: skill", 0, 48);
}

//debug?
function initDebug(){
  //field.roundCurrentTime = 0;
  //field.round = 1;
  //player.lv = 0;
}

function allEnemyDelete(){
  for(var i = 0; i < enemyObject.length; i++){
    enemyObject[i].delete();
  }
  for(i = 0; i < enemyBulletObject.length; i++){
    enemyBulletObject[i].delete();
  }
}

initDebug();
var isMenu = true;
var isGameover = false;
function TIC(){
  cls(0);
  if(isMenu){
    isGameover = false;
    field.init();
    player.init();
    mainMenu();
    player.move();
    player.display();
    initDebug();
    if(btnp(btnId.A)){isMenu = false;}
    if(btnp(btnId.X)) isMusicMute = !isMusicMute;
  } else if(!isGameover) {
    if(player.hp <= 0){
      isGameover = true;
      field.isRoundEndPostion = false;
      musicStop();
      allEnemyDelete();
      soundPlay(soundId.ENEMY17_DIE);
      return;
    }
    backgroundProcess();
    createEnemyProcess();
    player.process();
    field.process();
  } else if(isGameover){
    displayText("continue?", 76, 40);
    displayText("A button to continue ", 48, 48);
    displayText("B button to gameover", 48, 56);
    if(btnp(btnId.A)){
      field.roundCurrentTime = Math.floor(field.roundCurrentTime/30) * 30;
      player.init();
      isGameover = false;
      player.lv = field.round * 5;
    } else if(btnp(btnId.B)) {
      isMenu = true;
    }
  }
  display();
}

var bgX = 0, bgY = 0;
var bgDelayCount = 0;
var bgDelay = 4;
var bgFrame = 0;
function backgroundProcess(){
  bgDelayCount++;
  if(bgDelay < bgDelayCount) return;
  else bgDelayCount = 0;

  var cTime = field.roundCurrentTime;
  if(cTime < 5) return;

  var mapCode = -1;
  switch(field.round){
    case 2: mapCode = 0; break;
    case 3: mapCode = 1; break;
    case 4:
      if(cTime <= 59) mapCode = 2;
      else if(cTime <= 89) mapCode = 3;
      else if(cTime <= 149) mapCode = 4;
      else mapCode = 5;
      break;
    default: mapCode = -1;
  }

  bgX++;
  //map [x=0 y=0] [w=30 h=17] [sx=0 sy=0] [colorkey=-1] [scale=1] [remap=nil]
  if(mapCode != -1) map(bgX+30, mapCode*17, 30, 17, 0, 0, -1, 1, null);
  if(bgX >= 30)  bgX = 0;
}

function createEnemyProcess(){
  var rNum = Math.floor(Math.random() * 100);
  var cTime = field.roundCurrentTime;
  var eCount = getCurrentUsingCount(enemyObject);
  var t = field.t;
  var enemyX = FIELD_MAX_SIZE_X + Math.floor(Math.random() *  40) + 40;
  var enemyY = Math.floor(Math.random() * FIELD_MAX_SIZE_Y - 40) + 40;
  var insE = insertEnemyObject;
  if(field.round <= 4 && cTime >= 5 && getCurrentBossCount() == 0){
    musicPlay(field.round);
  }

  switch(field.round){
  case 1:
  if(cTime <= 10 && eCount < 12 && t % 40 == 0){
    insE(typeId.ENEMY11, enemyX, enemyY );
  } else if(cTime >= 10 && cTime <= 16 && eCount < 16 && t % 32 == 0 ||
    cTime >= 20 && cTime <= 40 && eCount < 16 && t % 32 == 0 ){
    insE(typeId.ENEMY11, enemyX, enemyY );
    insE(typeId.ENEMY12, enemyX, enemyY );
  }
  if(cTime >= 25&& cTime <= 40 && eCount < 14 && t % 14 == 0 ||
    cTime >= 41 && cTime <= 60 && eCount < 15 && t % 13 == 0 ||
    cTime >= 61 && cTime <= 80 && eCount < 16 && t % 12 == 0 ||
    cTime >= 81 && cTime <= 99 && eCount < 17 && t % 66 == 0 ){
    if(rNum <= 14) insE(typeId.ENEMY13, enemyX, enemyY);
    else if(rNum <= 28) insE(typeId.ENEMY14, enemyX, enemyY);
    else if(rNum <= 42) insE(typeId.ENEMY15, enemyX, enemyY);
    else if(rNum <= 56) insE(typeId.ENEMY16, enemyX, enemyY);
  }
  if(cTime >= 81 && cTime <= 107 && eCount < 19 && t % 32 == 0){
    if(rNum >= 60 && rNum <= 80) insE(typeId.ENEMY17, enemyX, enemyY);
    else if(rNum >= 81 && rNum <= 99) insE(typeId.ENEMY17, enemyX, enemyY);
  }

  if(cTime >= 111 && getCurrentBossCount() < 1 && !field.isRoundEndPostion) {
    musicPlay(5);
    insertBossObject(typeId.BOSS1, 180, 0);
    field.isRoundEndPostion = true;
  }
  if(field.isRoundEndPostion && getCurrentBossCount() == 0){
    field.isRoundClear = true;
  }
  break;
  case 2:
  if(cTime >= 4 && cTime <= 14 && eCount < 8  && t % 50 == 0 || 
    cTime >= 15 && cTime <= 25 && eCount < 11 && t % 35 == 0 ||
    cTime >= 26 && cTime <= 35 && eCount < 12 && t % 30 == 0 ||
    cTime >= 40 && cTime <= 56 && eCount < 13 && t % 27 == 0 ||
    cTime >= 66 && cTime <= 88 && eCount < 14 && t % 39 == 0 ||
    cTime >= 89 && cTime <= 100&& eCount < 15 && t % 35 == 0 ||
    cTime >= 101&& cTime <= 120&& eCount < 16 && t % 33 == 0){
    if(rNum <= 12) insE(typeId.ENEMY21, enemyX, enemyY);
    else if(rNum <= 25) insE(typeId.ENEMY22, enemyX, enemyY);
    else if(rNum <= 37) insE(typeId.ENEMY23, enemyX, enemyY);
    else if(rNum <= 50) insE(typeId.ENEMY24, enemyX, enemyY);
    else if(rNum <= 62) insE(typeId.ENEMY25, enemyX, enemyY);
    else if(rNum <= 75) insE(typeId.ENEMY26, enemyX, enemyY);
    else if(rNum <= 87) insE(typeId.ENEMY27, enemyX, enemyY);
    else if(rNum <= 99) insE(typeId.ENEMY28, enemyX, enemyY);
  }
  if(cTime >=40 && cTime <= 65 && eCount < 17 && t % 45 == 0 ||
    cTime >= 66 && cTime <= 88 && eCount < 18 && t % 30 == 0 ||
    cTime >= 89 && cTime <= 120&& eCount < 19 && t % 22 == 0){
    if(rNum <= 12) insE(typeId.ENEMY21BIG, enemyX, enemyY);
    else if(rNum <= 25) insE(typeId.ENEMY22BIG, enemyX, enemyY);
    else if(rNum <= 37) insE(typeId.ENEMY23BIG, enemyX, enemyY);
    else if(rNum <= 50) insE(typeId.ENEMY24BIG, enemyX, enemyY);
    else if(rNum <= 62) insE(typeId.ENEMY25BIG, enemyX, enemyY);
    else if(rNum <= 75) insE(typeId.ENEMY26BIG, enemyX, enemyY);
    else if(rNum <= 87) insE(typeId.ENEMY27BIG, enemyX, enemyY);
    else if(rNum <= 99) insE(typeId.ENEMY28BIG, enemyX, enemyY);
  } else if(cTime >= 124 && getCurrentBossCount() < 1 && !field.isRoundEndPostion) {
    insertBossObject(typeId.BOSS2, 160, 40);
    field.isRoundEndPostion = true;
  }

  if(field.isRoundEndPostion && getCurrentBossCount() <= 0){
    field.isRoundClear = true;
  }
  break;
  case 3:
  if(cTime >= 5 && cTime <= 12 && eCount < 10 && t % 90 == 0 || 
    cTime >= 13 && cTime <= 24 && eCount < 12 && t % 82 == 0 ||
    cTime >= 25 && cTime <= 35 && eCount < 14 && t % 76 == 0 ||
    cTime >= 36 && cTime <= 55 && eCount < 16 && t % 65 == 0 ||
    cTime >= 56 && cTime <= 75 && eCount < 18 && t % 60 == 0 ||
    cTime >= 76 && cTime <= 90 && eCount < 20 && t % 45 == 0){
    if(rNum <= 24) insE(typeId.ENEMY310, enemyX, enemyY );
    else if(rNum <= 48) insE(typeId.ENEMY320, enemyX, enemyY );
    else if(rNum <= 72) insE(typeId.ENEMY330, enemyX, enemyY );
    else if(rNum <= 96) insE(typeId.ENEMY340, enemyX, enemyY );
  }
  if(cTime >= 95 && eCount < 10){
    field.isRoundEndPostion = true;
    field.isRoundClear = true;
  }
  break;
  case 4:
  if(cTime >= 4 && cTime <= 21 && eCount < 8 && t % 30 == 0 ||
    cTime >= 22 && cTime <= 41 && eCount < 10 && t % 30 == 0 ||
    cTime >= 42 && cTime <= 59 && eCount < 12 && t % 24 == 0 ||
    cTime >= 60 && cTime <= 89 && eCount < 14 && t % 21 == 0 ||
    cTime >= 90 && cTime <= 110&& eCount < 17 && t % 54 == 0 ||
    cTime >= 111&& cTime <= 130&& eCount < 15 && t % 72 == 0 ||
    cTime >= 131&& cTime <= 150&& eCount < 15 && t % 86 == 0){
    if(rNum <= 8) insE(typeId.ENEMY41, enemyX, enemyY);
    else if(rNum <= 16) insE(typeId.ENEMY42, enemyX, enemyY);
    else if(rNum <= 24) insE(typeId.ENEMY43, enemyX, enemyY);
    else if(rNum <= 32) insE(typeId.ENEMY44, enemyX, enemyY);
  }
  if(cTime >=59 && cTime <= 75 && eCount < 9  && t % 35 == 0 ||
    cTime >= 76 && cTime <= 95 && eCount < 11 && t % 33 == 0 ||
    cTime >= 96 && cTime <= 110&& eCount < 15 && t % 31 == 0 ||
    cTime >= 111&& cTime <= 130&& eCount < 16 && t % 27 == 0 ||
    cTime >= 131&& cTime <= 150&& eCount < 17 && t % 24 == 0 ||
    cTime >= 151&& cTime <= 180&& eCount < 18 && t % 21 == 0){
    if(rNum >= 40){
      if(rNum <= 47) insE(typeId.ENEMY45, enemyX, enemyY - 16);
      else if(rNum <= 54) insE(typeId.ENEMY46, enemyX, enemyY - 16);
      else if(rNum <= 58) insE(typeId.ENEMY47, enemyX, -8);
      else if(rNum <= 62) insE(typeId.ENEMY48, enemyX, -8);
    }
  }

  if(cTime >= 184 && getCurrentBossCount() < 1 && eCount < 3 && !field.isRoundEndPostion) {
    musicPlay(5);
    insertBossObject(typeId.BOSS3, 160, 40);
    field.isRoundEndPostion = true;
  }

  if(field.isRoundEndPostion && getCurrentBossCount() <= 0){
    field.isRoundClear = true;
  }
  break;
  case 5:
  if(cTime >= 4 && getCurrentBossCount() < 1 && eCount < 1 && !field.isRoundEndPostion) {
    musicPlay(6);
    insertBossObject(typeId.BOSS4, 120, 18);
    field.isRoundEndPostion = true;
  }

  if(field.isRoundEndPostion && getCurrentBossCount() <= 0){
    musicStop();
    field.isRoundClear = true;
  }
  break;
  case 6:
  if(cTime >= 5){
    musicPlay(7);
    displayText("congraturation!", 0, 0);
    displayText("ALL CLEAR!", 0, 8);
    if(cTime >= 12){
      displayText("A button to main", 0, 16);
      if(btnp(btnId.A)){
        isMenu = true;
      }
    }
  }
}
}

//display erase and set background black
function displayClear(){
  cls(0);
}
//spr spriteId x y [colorkey=-1] [scale=1] [flip=0] [rotate=0] [w=1 h=1]
function displayObject(fieldObject, spriteId, x, y, w, h){
  if(typeof fieldObject === 'object'){
    var spriteId = fieldObject.spriteId;
    var x = fieldObject.x;
    var y = fieldObject.y;
    var w = fieldObject.w;
    var h = fieldObject.h;
    var scale = fieldObject.scale;
    spr(spriteId, x, y, 0, scale, 0, 0, w, h);
  } else {
    spr(spriteId, x, y, 0, 1, 0, 0, w, h);
  }
}
//print text [x=0 y=0] [color=15] [fixed=false] [scale=1] [smallfont=false] -> wspriteIdth
//print color 0~15
function displayText(text, x, y){
  print(text, x, y, 15, true, 1, false);
}

var disDebugY = 0;
function displayDebugText(text){
  displayText(text, 0, disDebugY * 8);
  disDebugY++;
  if(disDebugY >= 13) disDebugY = 0;
}

//rect x y w h color (all number)
function displayRect(x, y, w, h, color){
  if(color == null)  color = 0;
  rect(x, y, w, h, color)
}

//music [track=-1] [frame=-1] [row=-1] [loop=true] [sustain=false]
var isMusicPlay = false;
var currentTrackNumber = 0;
var isMusicMute = false;
function musicPlay(trackNumber){
  if(isMusicMute) return;
  if(!isMusicPlay || currentTrackNumber != trackNumber){
    isMusicPlay = true;
    currentTrackNumber = trackNumber;
    if(trackNumber == 7) music(trackNumber, -1, -1, false, false);
    else music(trackNumber, -1, -1, true, false);
  }
}
function musicStop(){
  music();
  isMusicPlay = false;
  currentTrackNumber = 0;
}

//sfx spriteId [note] [duration=-1] [channel=0] [volume=15] [speed=0]
function SoundData(soundId, note, duration, channel, volume, speed){
  this.soundId = soundId;
  this.note = note;
  this.duration = duration;
  this.channel = channel;
  this.volume = volume;
  this.speed = speed;
}
var soundData = new Array();
soundData[soundId.UNUSED] = new SoundData(0, 'C-1', -1, 1, 0, 0);
soundData[soundId.ENEMY17_DIE] = new SoundData(1, 'C-4', -1, 1, 15, -1);
soundData[soundId.ENEMY21_DIE] = new SoundData(2, 'C-4', -1, 1, 15, -1);
soundData[soundId.ENEMY21BIG_DIE] = new SoundData(3, 'C-4', -1, 1, 15, -1);
soundData[soundId.BOSS2_DIE] = new SoundData(4, 'C-4', -1, 1, 15, -2);
soundData[soundId.ENEMY310_DIE] = new SoundData(5, 'C-4', -1, 1, 15, 0);
soundData[soundId.ENEMY41_DIE] = new SoundData(6, 'A-5', -1, 1, 15, -1);
soundData[soundId.ENEMY43_DIE] = new SoundData(7, 'G-4', -1, 1, 15, -2);
soundData[soundId.ENEMY45_DIE] = new SoundData(8, 'D-3', -1, 1, 15, -2);
soundData[soundId.ENEMY47_DIE] = new SoundData(9, 'D-5', -1, 1, 15, -2);
soundData[soundId.SKILL_LASER] = new SoundData(10, 'D-5', 60, 2, 15, 0);
soundData[soundId.SKILL_LASER_SHOT] = new SoundData(11, 'G-5', -1, 1, 15, 0);
soundData[soundId.SKILL_MISSILE] = new SoundData(12, 'C-2', -1, 1, 15, 0);
soundData[soundId.ENEMY11_DIE] = new SoundData(13, 'C-2', -1, 1, 15, 0);
soundData[soundId.SKILL_MISSILE_HIT] = new SoundData(14, 'D-2', -1, 1, 15, 0);
soundData[soundId.PLAYER_DAMAGE1] = new SoundData(15, 'A-7', -1, 2, 15, 1);
soundData[soundId.PLAYER_DAMAGE2] = new SoundData(16, 'A-7', -1, 2, 15, -1);
soundData[soundId.PLAYER_DAMAGE3] = new SoundData(17, 'F-5', -1, 2, 15, 0);
soundData[soundId.PLAYER_LEVELUP] = new SoundData(18, 'E-5', -1, 2, 15, -1);
soundData[soundId.BOSS_KILL] = new SoundData(19, 'G-4', 240, 1, 15, 0);
soundData[soundId.SKILL_CRESCENT] = new SoundData(20, 'F-4', -1, 1, 15, -2);
soundData[soundId.SKILL_CRESCENT_HIT] = new SoundData(21, 'F-4', -1, 1, 15, 3);
function soundPlay(soundName){
  var s = soundData[soundName];
  sfx(s.soundId, s.note, s.duration, s.channel, s.volume, s.speed);
}