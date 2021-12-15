// title:  tamshooter2
// author: skz1024 - 2021/04/25
// desc:   shoot them up game
// script: js

// 2020/08/02 start. but i rest for 4 months.
// init debug is a function at the bottom of the source. or search word init debug

var btnId = { UP:0, DOWN:1, LEFT:2, RIGHT:3, A:4, B:5, X:6, Y:7 }
var colorId = { BLACK:0, DARK_RED:1, DARK_BLUE:2, DARK_GRAY:3, BROWN:4, DARK_GREEN:5, RED:6, LIGHT_GRAY:7, LIGHT_BLUE:8, ORANGE:9, BLUE_GRAY:10, LIGHT_GREEN:11, PEACH:12, CYAN:13, YELLOW:14, WHITE:15}
var objId = { WEAPON:"weapon", ENEMY:"enemy", }
// sprId = spriteId
var sprId = {
  UNUSED:0,
  PLAYER:258,
  //weapon
  W_LASER:288, W_LASER_UP:289, W_LASER_DOWN:289, W_LASER_CHASE:290, W_LASER_BACK:291, SKILL_LASER:260,
  W_MISSILE:304, W_ROCKET_CENTER:306, W_ROCKET_UP:306, W_ROCKET_DOWN:306, SKILL_MISSILE:262,
  W_LINELASER:320, SKILL_LINELASER:276,
  W_SWORD:368, W_SHIELD:370, SKILL_SWORD:264,
  W_FIRE:336, SKILL_FIRE:266,
  W_THUNDER:352, SKILL_THUNDER:268, W_THUNDER_MINI:353,
  W_ARROW_BROWN:358, W_ARROW_GREEN:359, W_ARROW_GRAY:374, W_ARROW_DARKRED:375, SKILL_ARROW:270,
  //enemy
  E100:388,
  E101:384, E102:385, E103:400, E104:401,
  E111:386, E112:402,
  E121:387, E122:403, E123:389,
  E201:416, E202:417, E203:432, E204:433,
  E211:418, E212:419, E213:434, E214:435,

  E301:448, E302:449, E303:450, E304:451, E305:452, E306:453,
  E311:464, E312:465, E313:466, E314:467, 
  E321:468, E322:469,

  E401:480, E402:481, E403:482, E404:483,
  E405:480, E406:481, E407:482, E408:483,
  E411:484, E412:484, E413:485, E414:500, E415:501,
  E421:486, E422:486, E423:487, E424:502, E425:503,
  E431:400, E432:401,
  E441:387, E442:403,

  //r5 no enemy

  E601:490, E602:506, E603:387, E604:403,
  E611:400, E612:401, E613:386, E614:402,
  E621:416, E622:417, E623:432, E624:433,
  E631:448, E632:449, E633:450, E634:451,
  E641:480 ,E642:481, E643:482, E644:483,

  E701:494,
  E711:495, E712:510, E713:511,

  //boss
  BOSS1:390,
  BOSS2_1:420, BOSS2_2:422,
  BOSS3:454,
  BOSS4:488,
  BOSSF:492, BOSSF_0:492,
  BOSSF_1:492, BOSSF_2:493, BOSSF_3:508, BOSSF_4:509,

  //effect
  EFF_SPLASH_BLUE:308, EFF_SPLASH_GREEN:292, EFF_SPLASH_PINK:324,
  EFF_FIRE:336, EFF_THUNDER:354,
  EFF_SWORD:371,
  EFF_DIE_SMALL:296, EFF_DIE_MIDDLE:312, EFF_DIE_CAR:328, EFF_DIE_ROCKET:344,
  EFF_POTION_FIRE:360, EFF_POTION_WATER:376, EFF_POTION_POISON:392, EFF_POTION_CURSE:408,
  EFF_DIE_POTION_SMALL:424, EFF_DIE_POTION_MIDDLE:440,
  EFF_DIE_BUBBLE:456,
  EFF_DIE_BRICK:472,
  //system button
  BUTTONX:282, BUTTONY:283, BUTTONB:284,
  BUTTONX_DISABLE:285, BUTTONY_DISABLE:286, BUTTONB_DISABLE:287,
}
var sfxId = {
  UNUSED:0,
  CURSOR:1,
  SELECT:2,
  CANCEL:3,
  START:4,
  SKILL_LASER_PRE:5,
  SKILL_LASER_RUNCH:6,
  SKILL_MISSILE:7,
  SKILL_MISSILE_HIT:8,
  SKILL_LINELASER:9,
  SKILL_SWORD:10,
  SKILL_SWORD_HIT:11,
  SKILL_FIRE:12,
  SKILL_THUNDER:13,
  SKILL_THUNDER_RUNCH:14,
  SKILL_ARROW:15,
  LEVELUP:16,
  DAMAGE1:17,
  DAMAGE2:18,
  DAMAGE3:19,
  PLAYER_DIE:20,
  DIE_SMALL:21, DIE1:21,
  DIE_MIDDLE:22, DIE2:22,
  DIE_CAR:23, DIE3:23,
  DIE_ROCKET:24, DIE4:24,
  DIE_BOX:25, DIE5:25,
  DIE_BIG:26, DIE6:26,
  DIE_SUPER:27, DIE7:27,
  DIE_POTION1:28,
  DIE_POTION2:29,
  DIE_POTION3:30,
  DIE_POTION4:31,
  DIE_BUBBLE_SMALL:32,
  DIE_BUBBLE_BIG:33,
  DIE_BUBBLE_BOSS:34,
  R3_WATER:35,
  DIE_BRICK1:36,
  DIE_BRICK2:37,
  DIE_ZET:38,
  DIE_COIN:39,
  DIE_BOSS:40,
  DIE_R5:41,
}
var idxId = {
  UNUSED:-1, DEFAULT:0,
  W_LASER:1, W_LASER_UP:2, W_LASER_DOWN:3, W_LASER_CHASE:4, W_LASER_BACK:5, SKILL_LASER:6,
  W_MISSILE:7, W_ROCKET_CENTER:8, W_ROCKET_UP:9, W_ROCKET_DOWN:10, SKILL_MISSILE:11,
  W_LINELASER:12, SKILL_LINELASER:13,
  W_SWORD:14, W_SHIELD:15, SKILL_SWORD:17,
  W_FIRE:18, SKILL_FIRE:19, W_FIRE_UP:30, W_FIRE_DOWN:31,
  W_THUNDER:20, SKILL_THUNDER:21, 
  W_ARROW:22, W_ARROW_BROWN:22, W_ARROW_GREEN:23, W_ARROW_GRAY:24, W_ARROW_DARKRED:25, SKILL_ARROW:26,
  W_THUNDER_MINI:29,
  E101:1, E102:2, E103:3, E104:4,
  E111:5, E112:6,
  E121:7, E122:8, E123:9,
  BOSS1:10,
  E201:11, E202:12, E203:13, E204:14,
  E211:15, E212:16, E213:17, E214:18,
  E221:21,
  E231:22, E232:23,
  BOSS2_1:19, BOSS2_2:20,
  E301:24, E302:25, E303:26, E304:27, E305:28, E306:29,
  E311:30, E312:31, E313:32, E314:33, 
  E321:34, E322:35,
  BOSS3:36,
  E401:37, E402:38, E403:39, E404:40,
  E405:41, E406:42, E407:43, E408:44,
  E411:45, E412:46, E413:47, E414:48, E415:49,
  E421:50, E422:51, E423:52, E424:53, E425:54,
  E431:55, E432:56,
  E441:57, E442:58,
  
  E601:60, E602:61, E603:62, E604:63,
  E611:64, E612:65, E613:66, E614:67,
  E621:68, E622:69, E623:70, E624:71,
  E631:72, E632:73, E633:74, E634:75,
  E641:77, E642:78, E643:79, E644:80,
  BOSS4:59,
  BOSS5:76,
  BOSSF:81, BOSSF_0:82,
  BOSSF_1:83, BOSSF_2:84, BOSSF_3:85, BOSSF_4:86,

  E701:87,
  E711:88, E712:89, E713:90, E714:91,

  BOSS_TEST:92,

  EFF_SPLASH_BLUE:1, EFF_SPLASH_GREEN:2, EFF_SPLASH_PINK:5,
  EFF_FIRE:3, EFF_THUNDER:4, EFF_FIRE_FAST:7,
  EFF_SWORD:6,
  EFF_POTION_FIRE:8, EFF_POTION_WATER:9, EFF_POTION_POISON:10, EFF_POTION_CURSE:11,
  EFF_ENEMY_DIE_SMALL:12, EFF_ENEMY_DIE_MIDDIE:13, EFF_ENEMY_DIE_CAR:14, EFF_ENEMY_DIE_ROCKET:15,
  EFF_ENEMY_DIE_POTION_SMALL:16, EFF_ENEMY_DIE_POTION_MIDDLE:17,
  EFF_ENEMY_DIE_BUBBLE:18, EFF_ENEMY_DIE_BRICK:19,

  EBULLET_FIRE:1, EBULLET_POISON:3, EBULLET_CURSE:4,
  EBULLET_WATER_LEFT:2, EBULLET_WATER_RIGHT:9, EBULLET_WATER_UP:10, EBULLET_WATER_DOWN:11,
  EBULLET_WATER_LEFT_BIG:12, EBULLET_WATER_RIGHT_BIG:13, EBULLET_WATER_UP_BIG:14, EBULLET_WATER_DOWN_BIG:15,
  EBULLET_POISON_LEFTUP:16, EBULLET_POISON_LEFTDOWN:19, EBULLET_POISON_RIGHTUP:20, EBULLET_POISON_RIGHTDOWN:21,
  EBULLET_FIRE_BIG:5, EBULLET_WATER_BIG:6, EBULLET_WATER_BIG:7, EBULLET_CURSE_BIG:8,
}
//---
var musId = {
  ROUND1:1, // music number 2 using round 1
  ROUND2_POTION_BATTLE:0, // music number 1 using round 2
  ROUND3_BUBBLE_WATER:2,
  ROUND4_BRICK_SHOW:3,
  BOSS_BATTLE:4,
  ROUND5:5,
  ROUND6:0,
  ROUND7_COIN_FESTIVAL:6,
  ALL_CLEAR:7,
}
//---
var FIELDX = 240;
var FIELDY = 120;
//---
var i = 0;
//---
function FieldObject(){
  this.init();
  // this.x = 0;
  // this.y = 0;
  // this.w = 1;
  // this.h = 1;
  // this.scale = 1;
  // this.speedX = 0;
  // this.speedY = 0;
  // this.moveType = '';
  // this.moveX = 0;
  // this.moveY = 0;
  // this.gravity = 0;
  // this.objectType = '';
  // this.mainType = '';
  // this.subType = '';
  // this.idxId = 0;
  // this.sprId = 0;
  // this.isUsing = false;
  // this.filp = 0;
  // this.rotate = 0;
  
  // this.hp = 0;
  // this.hpMax = 0;
  // this.isChase = false;
  // this.targetNumber = 0;
  // this.attack = 0;
  // this.attackDelay = 0;
  // this.attackDelayCount = 0;
  // this.attackMaxCount = 0;
  // this.attackMaxMonster = 0;
  // this.attackMonsterCount = 0;
  // this.attackCount = 0;
  // this.count = 0;
  // this.countMax = 0;
  // this.delay = 0;
  // this.delayCount = 0;
  // this.score = 0;
  // this.repeatCount = 0;
  
  // this.frame = 0;
  // this.effectFrame = 0;
  // this.deadSoundId = 0;
  // this.deadEffectId = 0;
}
FieldObject.prototype.init = function(){
  this.x = 0;
  this.y = 0;
  this.w = 1;
  this.h = 1;
  this.scale = 1;
  this.speedX = 0;
  this.speedY = 0;
  this.moveType = '';
  this.moveX = 0;
  this.moveY = 0;
  this.gravity = 0;
  this.objectType = '';
  this.mainType = '';
  this.subType = '';
  this.idxId = 0;
  this.sprId = 0;
  this.isUsing = false;
  this.flip = 0;
  this.rotate = 0;
  
  this.hp = 0;
  this.hpMax = 0;
  this.isChase = false;
  this.targetNumber = -1;
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

  this.a = 0;
  this.b = 0;
  this.c = 0;
  this.d = 0;
}
FieldObject.prototype.display = function(){
  if(this.isUsing) display.object(this); 
}
FieldObject.prototype.process = function(){
  this.move();
}
FieldObject.prototype.move = function(){
  this.x += this.speedX;
  this.y += this.speedY;
  if(this.x >= 360 || this.y >= 240 || this.y <= -120 || this.x <= -240) this.init();
}
FieldObject.prototype.insert = function(objectType, idxId, spriteId, x, y, w, h, scale){
  this.objectType = objectType;
  this.idxId = idxId;
  this.sprId = spriteId;
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.scale = scale;
  this.isUsing = true;
}
FieldObject.prototype.delete = function(){
  this.init();
}
//---
function WeaponObject(){

}
WeaponObject.prototype = new FieldObject();
WeaponObject.prototype.process = function(){
  this.moveProcess();
  this.attackProcess();
  this.setTargetNumber();
}
WeaponObject.prototype.setTargetNumber = function(){
  if(this.isChase && (this.targetNumber < 0 || !enemyObject[this.targetNumber].isUsing) ){
    this.targetNumber = getRandomIndex(enemyObject);
    if(this.targetNumber == -1 && this.idxId != idxId.SKILL_THUNDER){
      this.isChase = false;
    }
  }
}
WeaponObject.prototype.changeTargetNumber = function(){
  if(this.isChase){
    this.targetNumber = getRandomIndex(enemyObject);
    if(this.targetNumber == -1){
      this.isChase = false;
    }
  }
}
WeaponObject.prototype.moveProcess = function(){
  if(this.isChase) this.moveChase();
  else this.move();

  switch(this.idxId){
    case idxId.W_SHIELD:
      this.gravity++;
      if(this.gravity >= 90){
        if(this.speedX <= 1.5) this.speedX += 0.05;
        this.move();
      }
      break;
    case idxId.SKILL_ARROW:
    case idxId.W_ARROW_BROWN:
    case idxId.W_ARROW_GREEN:
    case idxId.W_ARROW_GRAY:
    case idxId.W_ARROW_DARKRED:
      this.moveArrow();
      break;
  }

  if(this.x >= 360 || this.x <= -120 || this.y >= 180 || this.y <= -60){
    this.delete();
  }
}
WeaponObject.prototype.moveArrow = function(){
  if(this.x >= 240){ this.speedX = -Math.abs(this.speedX)-2; this.gravity++; this.x = 239; }
  if(this.x <=   0){ this.speedX =  Math.abs(this.speedX)+2; this.gravity++; this.x = 1; }
  if(this.y >= 120){ this.speedY = -Math.abs(this.speedY)-2; }
  if(this.y <=   0){ this.speedY =  Math.abs(this.speedY)+2; }

  if(this.gravity >= 2){
    if(this.idxId == idxId.SKILL_ARROW){
      insert.weapon(idxId.W_ARROW_DARKRED, this.attack, this.x, this.y);
      insert.weapon(idxId.W_ARROW_GRAY, this.attack, this.x, this.y);
      insert.weapon(idxId.W_ARROW_DARKRED, this.attack, this.x+16, this.y);
      insert.weapon(idxId.W_ARROW_GRAY, this.attack, this.x+16, this.y);
    } 
    this.delete();
  }
}
WeaponObject.prototype.moveChase = function(){
  if(this.targetNumber >= 0){
    var targetNumber = this.targetNumber;
    var enemyX = enemyObject[targetNumber].x + enemyObject[targetNumber].scale * 4;
    var enemyY = enemyObject[targetNumber].y + enemyObject[targetNumber].scale * 4;
    var distanceX = enemyX - this.x;
    var distanceY = enemyY - this.y;

    if(Math.abs(distanceX) >= 16){
      var speedX = distanceX / 8;
      this.x += speedX;
    } else{
      this.x = enemyX;
    }

    if(Math.abs(distanceY) >= 8){
      var speedY = distanceY / 4;
      this.y += speedY;
    } else{
      this.y = enemyY;
    }
  } else {
    this.move();
  }
}
WeaponObject.prototype.attackProcess = function(){
  this.delayCount++;
  if(this.delayCount >= this.delay){
    this.delayCount = 0;
    switch(this.idxId){
      case idxId.W_LINELASER:
      case idxId.SKILL_LINELASER:
      case idxId.W_SHIELD_GRAY:
      case idxId.W_SHIELD_GREEN:
        this.attackProcessPenetrate();
        break;
      case idxId.W_SWORD:
      case idxId.SKILL_SWORD:
        this.attackProcessSword();
        break;
      case idxId.W_MISSILE:
      case idxId.SKILL_MISSILE:
        this.attackProcessMissile();
        break;
      case idxId.W_ROCKET_CENTER:
      case idxId.W_ROCKET_DOWN:
      case idxId.W_ROCKET_UP:
        this.attackProcessRocket();
        break;
      case idxId.W_FIRE: case idxId.W_FIRE_UP: case idxId.W_FIRE_DOWN:
      case idxId.SKILL_FIRE:
        this.attackProcessSplash();
        break;
      case idxId.W_THUNDER:
      case idxId.W_THUNDER_MINI:
      case idxId.SKILL_THUNDER:
        this.attackProcessThunder();
        break;
      case idxId.SKILL_ARROW:
        this.attackProcessSkillArrow();
        break;
      default: 
        this.attackProcessNormal(); 
        break;
    }
  }
}
WeaponObject.prototype.attackProcessSword = function(){
  var area = { x:0, y:0, w:0, h:0, scale:1 };
  area.x = this.x - 8;
  area.y = this.y - 8;
  area.w = this.w * 2;
  area.h = this.h * 2;
  area.scale = 2;
  if(this.idxId == idxId.SKILL_SWORD){
    area.scale = 16;
    this.targetNumber = getRandomIndex(enemyObject);
    if(this.targetNumber >= 0){
      this.x = enemyObject[this.targetNumber].x;
      this.y = enemyObject[this.targetNumber].y;
      enemyObject[this.targetNumber].hp -= this.attack;
      sound.play(sfxId.SKILL_SWORD_HIT);
      insert.effect(idxId.EFF_SWORD, this.x, this.y, 2, 3);
      this.repeatCount--;
      if(this.repeatCount <= 0) this.delete();
      return;
    }
  }
  
  for(var i = 0, l = enemyObject.length; i < l; i++){
    if(enemyObject[i].isUsing && collision(area, enemyObject[i])){
      enemyObject[i].hp -= this.attack;
      this.x = enemyObject[i].x;
      this.y = enemyObject[i].y;
      this.repeatCount--;
      if(this.repeatCount <= 0) this.delete();  
      return;
    }
  }
}
WeaponObject.prototype.attackProcessNormal = function(){
  for(var i = 0, l = enemyObject.length; i < l; i++){
    if(enemyObject[i].isUsing && collision(this, enemyObject[i])){
      enemyObject[i].hp -= this.attack;
      this.repeatCount--;
      if(this.repeatCount <= 0) this.delete();
      return;
    }
  }
}
WeaponObject.prototype.attackProcessThunder = function(){
  var area = { x:this.x, y:this.y, h:this.h, w:this.w, scale:3 }
  for(var i = 0, l = enemyObject.length; i < l; i++){
    if(enemyObject[i].isUsing && collision(area, enemyObject[i])){
      this.x = enemyObject[i].x;
      this.y = enemyObject[i].y;
      enemyObject[i].hp -= this.attack;
      if(this.idxId == idxId.W_THUNDER){
        insert.weapon(idxId.W_THUNDER_MINI, this.attack, this.x, this.y);
      } else if(this.idxId == idxId.SKILL_THUNDER){
        insert.weapon(idxId.W_THUNDER, this.attack, this.x, this.y);
      }
      this.changeTargetNumber();

      this.repeatCount--;
      if(this.repeatCount <= 0){
        this.init();
      }
      return;
    }
  }
}
WeaponObject.prototype.attackProcessMissile = function(){
  if(this.subType == ""){
    for(var i = 0, l = enemyObject.length; i < l; i++){
      if(enemyObject[i].isUsing && collision(this, enemyObject[i])){
        enemyObject[i].hp -= this.attack;
        this.speedX = 0;
        this.speedY = 0;
        this.subType = "splash";
        this.isChase = false;
        this.targetNumber = -1;
        this.delayCount = this.delay;
        this.sprId = sprId.UNUSED;
        break;
      }
    }
  }
  
  if(this.subType == "splash"){
    var area = { x:this.x, y:this.y, h:this.h, w:this.w, scale:3 }

    if(this.idxId == idxId.SKILL_MISSILE){
      area.scale = 4;
      sound.play(sfxId.SKILL_MISSILE_HIT);
      insert.effect(idxId.EFF_SPLASH_PINK, area.x, area.y, area.scale);
    } else {
      insert.effect(idxId.EFF_SPLASH_GREEN, area.x, area.y, area.scale);
    }
    
    for(var i = 0, l = enemyObject.length; i < l; i++){
      if(collision(area, enemyObject[i])){
        enemyObject[i].hp -= this.attack;
      }
    }

    this.repeatCount--;
    if(this.repeatCount <= 0) this.delete();
  }
  
}
WeaponObject.prototype.attackProcessRocket = function(){
  var area = {
    x:this.x,
    y:this.y-8,
    w:this.w,
    h:this.h,
    scale:3
  }

  for(var i = 0, l = enemyObject.length; i < l; i++){
    if(enemyObject[i].isUsing && collision(area, enemyObject[i])){
      enemyObject[i].hp -= this.attack;
    }
  }
  
  insert.effect(idxId.EFF_SPLASH_BLUE, area.x, area.y, area.scale);
  this.repeatCount--;
  if(this.repeatCount < 0) this.delete();
}
WeaponObject.prototype.attackProcessSplash = function(){
  for(var i = 0, l = enemyObject.length; i < l; i++){
    if(enemyObject[i].isUsing && collision(this, enemyObject[i])){
      enemyObject[i].hp -= this.attack;
    }
  }

  switch(this.idxId){
    case idxId.W_FIRE: case idxId.W_FIRE_DOWN: case idxId.W_FIRE_UP:
      insert.effect(idxId.EFF_FIRE_FAST, this.x, this.y, this.scale);
      break;
    case idxId.SKILL_FIRE:
      insert.effect(idxId.EFF_FIRE, Math.random()*240, Math.random()*120, Math.random()*6);
      break;
  }

  this.repeatCount--;
  if(this.repeatCount <= 0) this.delete();
}
WeaponObject.prototype.attackProcessPenetrate = function(){
  for(var i = 0, l = enemyObject.length; i < l; i++){
    if(enemyObject[i].isUsing && collision(this, enemyObject[i])){
      enemyObject[i].hp -= this.attack;
      this.repeatCount--;

      if(this.repeatCount <= 0){
        this.delete();
        return;
      }
    }
  }
}
WeaponObject.prototype.attackProcessSkillArrow = function(){
  for(var i = 0, l = enemyObject.length; i < l; i++){
    if(enemyObject[i].isUsing && collision(this, enemyObject[i])){
      enemyObject[i].hp -= this.attack;
      insert.weapon(idxId.W_ARROW_DARKRED, this.attack, this.x+enemyObject[i].scale*8+8, this.y);
      insert.weapon(idxId.W_ARROW_GRAY, this.attack, this.x+enemyObject[i].scale*8+8, this.y);
      insert.weapon(idxId.W_ARROW_DARKRED, this.attack, this.x+enemyObject[i].scale*8+24, this.y);
      insert.weapon(idxId.W_ARROW_GRAY, this.attack, this.x+enemyObject[i].scale*8+24, this.y);
      this.delete();
      return;
    }
  }
}
WeaponObject.prototype.insert = function(idxIdValue, attack, x, y){
  var get = weaponData[idxIdValue];
  this.objectType = objId.WEAPON;
  this.idxId = idxIdValue;
  this.sprId = get.sprId;
  this.attack = attack;
  this.x = x;
  this.y = y;
  this.w = get.w;
  this.h = get.h;
  this.subType = "";
  this.mainType = "";
  this.speedX = get.speedX; 
  this.speedY = get.speedY;
  this.scale = get.scale;
  this.isUsing = true;
  this.delay = get.delay;
  this.delayCount = 0;
  this.repeatCount = get.repeatCount;
  this.isChase = get.isChase;

  var randomNumber = 0;
  switch(idxIdValue){
    case idxId.W_LINELASER:
      randomNumber = Math.floor(Math.random() * 16) - 8;
      this.y = y + randomNumber;
      break;
    case idxId.SKILL_SWORD:
      this.delayCount = -30;
      break;
  }
}

function WeaponData(idxId, sprId, speedX, speedY, w, h, scale, isChase, repeatCount, delay){
  this.idxId = idxId;
  this.sprId = sprId;
  this.speedX = speedX;
  this.speedY = speedY;
  this.w = w;
  this.h = h;
  this.scale = scale;
  
  if(isChase) this.isChase = true;
  else this.isChase = false;
  if(repeatCount != null) this.repeatCount = repeatCount;
  else this.repeatCount = 0;
  if(delay != null) this.delay = delay;
  else this.delay = 0;
}
var weaponData = new Array(100);
(function(){
  var w = weaponData;
  var W = WeaponData;
  w[0] = new W(0, sprId.W_LASER1, 5, 0, 1, 1, 1);
  w[1] = new W(idxId.W_LASER, sprId.W_LASER, 12, 0, 1, 1, 1);
  w[2] = new W(idxId.W_LASER_UP, sprId.W_LASER_UP, 12,-1, 1, 1, 1);
  w[3] = new W(idxId.W_LASER_DOWN, sprId.W_LASER_DOWN, 12, 1, 1, 1, 1);
  w[4] = new W(idxId.W_LASER_CHASE, sprId.W_LASER_CHASE, 12, 0, 1, 1, 1, true);
  w[5] = new W(idxId.W_LASER_BACK, sprId.W_LASER_BACK, 12, 0, 1, 1, 2);
  w[6] = new W(idxId.SKILL_LASER, sprId.SKILL_LASER, 12, 0, 2, 1, 2, true);
  w[7] = new W(idxId.W_MISSILE, sprId.W_MISSILE, 4, 0, 2, 1, 1, true, 8, 4);
  w[8] = new W(idxId.W_ROCKET_CENTER, sprId.W_ROCKET_CENTER, 3, 0, 2, 1, 1, false, 16, 4);
  w[9] = new W(idxId.W_ROCKET_UP, sprId.W_ROCKET_UP, 3, -0.5, 2, 1, 1, false, 16, 4);
  w[10] = new W(idxId.W_ROCKET_CENTER, sprId.W_ROCKET_DOWN, 3, 0.5, 2, 1, 1, false, 16, 4);
  w[11] = new W(idxId.SKILL_MISSILE, sprId.SKILL_MISSILE, 6, 0, 2, 1, 1, true, 16, 4);
  w[12] = new W(idxId.W_LINELASER, sprId.W_LINELASER, 5, 0, 4, 1, 1, false, 10);
  w[13] = new W(idxId.SKILL_LINELASER, sprId.SKILL_LINELASER, 6, 0, 4, 1, 1, false, 10);
  w[14] = new W(idxId.W_SWORD, sprId.W_SWORD, 1, 0, 2, 1, 1, false, 15, 3);
  w[15] = new W(idxId.W_SHIELD, sprId.W_SHIELD, 0, 0, 1, 1, 2, false, 30, 0);
  //w[16] = new W(idxId.W_SHIELD_GRAY, sprId.W_SHIELD_GRAY, 0, 0, 1, 1, 4, false, 25);
  w[17] = new W(idxId.SKILL_SWORD, sprId.SKILL_SWORD, 1, 0, 2, 1, 1, false, 40, 6);
  w[18] = new W(idxId.W_FIRE, sprId.UNUSED, 10, 0, 1, 1, 2, false, 10);
  w[30] = new W(idxId.W_FIRE_UP, sprId.UNUSED, 10, 1, 1, 1, 2, false, 10);
  w[31] = new W(idxId.W_FIRE_DOWN, sprId.UNUSED, 10, -1, 1, 1, 2, false, 10);
  w[19] = new W(idxId.SKILL_FIRE, sprId.UNUSED, 0, 0, 2, 1, 20, false, 240);
  w[20] = new W(idxId.W_THUNDER, sprId.W_THUNDER, 3, 0, 1, 1, 2, true, 4, 2);
  w[21] = new W(idxId.SKILL_THUNDER, sprId.SKILL_THUNDER, 9, 0, 2, 1, 2, true, 4, 4);
  w[22] = new W(idxId.W_ARROW_BROWN, sprId.W_ARROW_BROWN, 12, -2, 1, 1, 1);
  w[23] = new W(idxId.W_ARROW_GREEN, sprId.W_ARROW_GREEN, 12,  2, 1, 1, 1);
  w[24] = new W(idxId.W_ARROW_GRAY, sprId.W_ARROW_GRAY, 12, -2, 1, 1, 1);
  w[25] = new W(idxId.W_ARROW_DARKRED, sprId.W_ARROW_DARKRED, 12, 2, 1, 1, 1);
  w[26] = new W(idxId.SKILL_ARROW, sprId.SKILL_ARROW, 7, 0, 2, 1, 1);
  w[29] = new W(idxId.W_THUNDER_MINI, sprId.W_THUNDER_MINI, 3, 0, 1, 1, 1, true, 4, 6);
})();




//---
function EnemyData(idxId, sprId, hp, attack, score, w, h, scale, speedX, speedY, deadSoundId, deadEffectId){
  this.idxId = idxId;
  this.sprId = sprId;
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
var enemyData = new Array(100);
(function(){
  var e = enemyData;
  var E = EnemyData;
  e[0] = new E(0, sprId.E100, 1, 10, 100, 2, 2, 4, 0, 0, sfxId.DIE1, idxId.EFF_ENEMY_DIE_CAR);
  e[1] = new E(idxId.E101, sprId.E101, 600, 15, 60, 1, 1, 1, 1, 0, sfxId.DIE_SMALL, idxId.EFF_ENEMY_DIE_SMALL);
  e[2] = new E(idxId.E102, sprId.E102, 700, 15, 70, 1, 1, 1, 1, 0, sfxId.DIE_SMALL, idxId.EFF_ENEMY_DIE_SMALL);
  e[3] = new E(idxId.E103, sprId.E103, 900, 15, 90, 1, 1, 3, 1, 0, sfxId.DIE_MIDDLE, idxId.EFF_ENEMY_DIE_MIDDIE);
  e[4] = new E(idxId.E104, sprId.E104, 900, 15, 90, 1, 1, 2, 2, 0, sfxId.DIE_MIDDLE, idxId.EFF_ENEMY_DIE_MIDDIE);
  e[5] = new E(idxId.E111, sprId.E111, 1000, 10, 100, 1, 1, 3, 1, 0, sfxId.DIE_CAR, idxId.EFF_ENEMY_DIE_CAR);
  e[6] = new E(idxId.E112, sprId.E112, 1100, 10, 110, 1, 1, 3, 2, 0, sfxId.DIE_CAR, idxId.EFF_ENEMY_DIE_CAR);
  e[7] = new E(idxId.E121, sprId.E121, 1200, 10, 120, 2, 1, 2, 2, 0, sfxId.DIE_ROCKET, idxId.EFF_ENEMY_DIE_ROCKET);
  e[8] = new E(idxId.E122, sprId.E122, 2500, 10, 250, 2, 1, 2, 3, 0, sfxId.DIE_ROCKET, idxId.EFF_ENEMY_DIE_ROCKET);
  e[9] = new E(idxId.E123, sprId.E123, 5000, 15, 500, 1, 2, 4, 0.8, 0, sfxId.DIE_BIG, idxId.EFF_ENEMY_DIE_ROCKET);
  e[10] = new E(idxId.BOSS1, sprId.BOSS1, 100000, 30, 5000, 2, 2, 4, 0, 0, sfxId.DIE_BOSS, idxId.EFF_ENEMY_DIE_CAR);
  //---
  e[11] = new E(idxId.E201, sprId.E201, 1200, 12, 120, 1, 1, 2, 1, 0, sfxId.DIE_POTION1, idxId.EFF_ENEMY_DIE_POTION_SMALL);
  e[12] = new E(idxId.E202, sprId.E202, 1200, 12, 120, 1, 1, 2, 1, 0, sfxId.DIE_POTION2, idxId.EFF_ENEMY_DIE_POTION_SMALL);
  e[13] = new E(idxId.E203, sprId.E203, 1300, 12, 130, 1, 1, 2, 1, 0, sfxId.DIE_POTION3, idxId.EFF_ENEMY_DIE_POTION_SMALL);
  e[14] = new E(idxId.E204, sprId.E204, 1500, 12, 150, 1, 1, 2, 1, 0, sfxId.DIE_POTION4, idxId.EFF_ENEMY_DIE_POTION_SMALL);
  e[15] = new E(idxId.E211, sprId.E211, 2400, 12, 240, 1, 1, 3, 0.5, 0, sfxId.DIE_POTION1, idxId.EFF_ENEMY_DIE_POTION_MIDDLE);
  e[16] = new E(idxId.E212, sprId.E212, 2400, 12, 240, 1, 1, 3, 0.5, 0, sfxId.DIE_POTION2, idxId.EFF_ENEMY_DIE_POTION_MIDDLE);
  e[17] = new E(idxId.E213, sprId.E213, 2600, 12, 260, 1, 1, 3, 0.5, 0, sfxId.DIE_POTION3, idxId.EFF_ENEMY_DIE_POTION_MIDDLE);
  e[18] = new E(idxId.E214, sprId.E214, 3000, 12, 300, 1, 1, 3, 0.5, 0, sfxId.DIE_POTION4, idxId.EFF_ENEMY_DIE_POTION_MIDDLE);
  e[21] = new E(idxId.E221, sprId.E104, 1700, 14, 170, 1, 1, 2, 1, 0, sfxId.DIE_MIDDLE, idxId.EFF_ENEMY_DIE_ROCKET);
  e[22] = new E(idxId.E231, sprId.E111, 1800, 14, 185, 1, 1, 3, 1, 0, sfxId.DIE_CAR, idxId.EFF_ENEMY_DIE_CAR);
  e[23] = new E(idxId.E232, sprId.E112, 1800, 14, 185, 1, 1, 3, 1, 0, sfxId.DIE_CAR, idxId.EFF_ENEMY_DIE_CAR);
  e[19] = new E(idxId.BOSS2_1, sprId.BOSS2_1, 70000,  6, 4000, 2, 2, 4, 0, 0, sfxId.DIE_BOSS, idxId.EFF_ENEMY_DIE_POTION_MIDDLE);
  e[20] = new E(idxId.BOSS2_2, sprId.BOSS2_2, 70000,  6, 4000, 2, 2, 4, 0, 1, sfxId.DIE_BOSS, idxId.EFF_ENEMY_DIE_POTION_MIDDLE);
  //---
  e[24] = new E(idxId.E301, sprId.E301, 1800, 10, 180, 1, 1, 1, 0, 1, sfxId.DIE_BUBBLE_SMALL, idxId.EFF_ENEMY_DIE_BUBBLE);
  e[25] = new E(idxId.E302, sprId.E302, 1900, 10, 190, 1, 1, 1, 0, 1, sfxId.DIE_BUBBLE_SMALL, idxId.EFF_ENEMY_DIE_BUBBLE);
  e[26] = new E(idxId.E303, sprId.E303, 2000, 10, 200, 1, 1, 1, 0, 1, sfxId.DIE_BUBBLE_SMALL, idxId.EFF_ENEMY_DIE_BUBBLE);
  e[27] = new E(idxId.E304, sprId.E304, 2100, 10, 210, 1, 1, 1, 0, 1, sfxId.DIE_BUBBLE_SMALL, idxId.EFF_ENEMY_DIE_BUBBLE);
  e[28] = new E(idxId.E305, sprId.E305, 2200, 10, 220, 1, 1, 1, 0, 1, sfxId.DIE_BUBBLE_SMALL, idxId.EFF_ENEMY_DIE_BUBBLE);
  e[29] = new E(idxId.E306, sprId.E306, 2300, 10, 230, 1, 1, 1, 0, 1, sfxId.DIE_BUBBLE_SMALL, idxId.EFF_ENEMY_DIE_BUBBLE);
  e[30] = new E(idxId.E311, sprId.E311, 4000, 10, 400, 1, 1, 2, 0, 1, sfxId.DIE_BUBBLE_BIG, idxId.EFF_ENEMY_DIE_BUBBLE);
  e[31] = new E(idxId.E312, sprId.E312, 4200, 10, 420, 1, 1, 2, 0, 1, sfxId.DIE_BUBBLE_BIG, idxId.EFF_ENEMY_DIE_BUBBLE);
  e[32] = new E(idxId.E313, sprId.E313, 4400, 10, 440, 1, 1, 2, 0, 1, sfxId.DIE_BUBBLE_BIG, idxId.EFF_ENEMY_DIE_BUBBLE);
  e[33] = new E(idxId.E314, sprId.E314, 4600, 10, 460, 1, 1, 2, 0, 1, sfxId.DIE_BUBBLE_BIG, idxId.EFF_ENEMY_DIE_BUBBLE);
  e[34] = new E(idxId.E321, sprId.E321, 7000, 10, 700, 1, 1, 6, 0, 1, sfxId.DIE_BUBBLE_BOSS, idxId.EFF_ENEMY_DIE_BUBBLE);
  e[35] = new E(idxId.E322, sprId.E322, 7300, 10, 730, 1, 1, 6, 0, 1, sfxId.DIE_BUBBLE_BOSS, idxId.EFF_ENEMY_DIE_BUBBLE);
  e[36] = new E(idxId.BOSS3, sprId.BOSS3, 200000, 10, 9000, 2, 2, 4, 0, 1, sfxId.DIE_BUBBLE_BOSS, idxId.EFF_ENEMY_DIE_BUBBLE);
  //---
  e[37] = new E(idxId.E401, sprId.E401, 3000, 15, 300, 1, 1, 2, 1, 0, sfxId.DIE_BRICK1, idxId.EFF_ENEMY_DIE_BRICK);
  e[38] = new E(idxId.E402, sprId.E402, 3200, 15, 320, 1, 1, 2, 1, 0, sfxId.DIE_BRICK1, idxId.EFF_ENEMY_DIE_BRICK);
  e[39] = new E(idxId.E403, sprId.E403, 3400, 15, 340, 1, 1, 2, 1, 0, sfxId.DIE_BRICK1, idxId.EFF_ENEMY_DIE_BRICK);
  e[40] = new E(idxId.E404, sprId.E404, 3600, 20, 360, 1, 1, 4, 1, 0, sfxId.DIE_BRICK1, idxId.EFF_ENEMY_DIE_BRICK);
  e[41] = new E(idxId.E405, sprId.E405, 5000, 15, 500, 1, 2, 3, 1, 0, sfxId.DIE_BRICK2, idxId.EFF_ENEMY_DIE_BRICK);
  e[42] = new E(idxId.E406, sprId.E406, 5200, 15, 520, 1, 2, 3, 1, 0, sfxId.DIE_BRICK2, idxId.EFF_ENEMY_DIE_BRICK);
  e[43] = new E(idxId.E407, sprId.E407, 5400, 15, 540, 1, 2, 3, 1, 0, sfxId.DIE_BRICK2, idxId.EFF_ENEMY_DIE_BRICK);
  e[44] = new E(idxId.E408, sprId.E408, 5600, 20, 560, 1, 2, 6, 1, 0, sfxId.DIE_BRICK2, idxId.EFF_ENEMY_DIE_BRICK);
  e[45] = new E(idxId.E411, sprId.E411, 4000, 11, 400, 2, 2, 2, 0.5, 0.5, sfxId.DIE_SMALL, 0);
  e[46] = new E(idxId.E412, sprId.E412, 1500, 11, 150, 1, 1, 2, 0.6,-0.6, sfxId.DIE_SMALL, idxId.EFF_ENEMY_DIE_SMALL);
  e[47] = new E(idxId.E413, sprId.E413, 1500, 11, 150, 1, 1, 2,-0.6,-0.6, sfxId.DIE_SMALL, idxId.EFF_ENEMY_DIE_SMALL);
  e[48] = new E(idxId.E414, sprId.E414, 1500, 11, 150, 1, 1, 2, 0.6, 0.6, sfxId.DIE_SMALL, idxId.EFF_ENEMY_DIE_SMALL);
  e[49] = new E(idxId.E415, sprId.E415, 1500, 11, 150, 1, 1, 2,-0.6, 0.6, sfxId.DIE_SMALL, idxId.EFF_ENEMY_DIE_SMALL);
  e[50] = new E(idxId.E421, sprId.E421, 5000, 11, 500, 2, 2, 2, 0.8,-0.4, sfxId.DIE_SMALL, 0);
  e[51] = new E(idxId.E422, sprId.E422, 2000, 11, 200, 1, 1, 2, 0.4,-0.4, sfxId.DIE_SMALL, idxId.EFF_ENEMY_DIE_MIDDIE);
  e[52] = new E(idxId.E423, sprId.E423, 2000, 11, 200, 1, 1, 2,-0.4,-0.4, sfxId.DIE_SMALL, idxId.EFF_ENEMY_DIE_MIDDIE);
  e[53] = new E(idxId.E424, sprId.E424, 2000, 11, 200, 1, 1, 2, 0.4, 0.4, sfxId.DIE_SMALL, idxId.EFF_ENEMY_DIE_MIDDIE);
  e[54] = new E(idxId.E425, sprId.E425, 2000, 11, 200, 1, 1, 2,-0.4, 0.4, sfxId.DIE_SMALL, idxId.EFF_ENEMY_DIE_MIDDIE);
  e[55] = new E(idxId.E431, sprId.E431, 3500,  8, 350, 1, 1, 2, 1, 0, sfxId.DIE_CAR, idxId.EFF_ENEMY_DIE_CAR);
  e[56] = new E(idxId.E432, sprId.E432, 3500,  8, 350, 1, 1, 2, 1, 0, sfxId.DIE_CAR, idxId.EFF_ENEMY_DIE_CAR);
  e[57] = new E(idxId.E441, sprId.E441, 4000, 10, 400, 2, 1, 2, 1.2, 0, sfxId.DIE_ROCKET, idxId.EFF_ENEMY_DIE_ROCKET);
  e[58] = new E(idxId.E442, sprId.E442, 4000, 10, 400, 2, 1, 3, 1.6, 0, sfxId.DIE_ROCKET, idxId.EFF_ENEMY_DIE_ROCKET);
  //---
  e[59] = new E(idxId.BOSS4, sprId.BOSS4, 500000, 0, 20000, 2, 2, 4, 0.1, 0, sfxId.DIE_R5, 0);
  //---
  e[60] = new E(idxId.E601, sprId.E601, 15000, 12, 1500, 2, 1, 3, 2, 2, sfxId.DIE_ZET, idxId.EFF_ENEMY_DIE_ROCKET);
  e[61] = new E(idxId.E602, sprId.E602, 15000, 12, 1500, 2, 1, 3, 0, 1, sfxId.DIE_ZET, idxId.EFF_ENEMY_DIE_ROCKET);
  e[62] = new E(idxId.E603, sprId.E603, 3000, 11, 300, 2, 1, 2, 3, 0, sfxId.DIE_ROCKET, idxId.EFF_ENEMY_DIE_ROCKET);
  e[63] = new E(idxId.E604, sprId.E604, 3000, 11, 300, 2, 1, 2, 3, 0, sfxId.DIE_ROCKET, idxId.EFF_ENEMY_DIE_ROCKET);
  e[64] = new E(idxId.E611, sprId.E611, 3200,  9, 320, 1, 1, 3, 0, 0, sfxId.DIE_ROCKET, idxId.EFF_ENEMY_DIE_MIDDIE);
  e[65] = new E(idxId.E612, sprId.E612, 3200,  9, 320, 1, 1, 3, 0, 0, sfxId.DIE_ROCKET, idxId.EFF_ENEMY_DIE_MIDDIE);
  e[66] = new E(idxId.E613, sprId.E613, 3200,  8, 320, 1, 1, 3, 0, 0, sfxId.DIE_CAR, idxId.EFF_ENEMY_DIE_CAR);
  e[67] = new E(idxId.E614, sprId.E614, 3200,  8, 320, 1, 1, 3, 0, 0, sfxId.DIE_CAR, idxId.EFF_ENEMY_DIE_CAR);
  e[68] = new E(idxId.E621, sprId.E621, 2000,  7, 300, 1, 1, 3, 1, 0, sfxId.DIE_POTION1, idxId.EFF_ENEMY_DIE_POTION_SMALL);
  e[69] = new E(idxId.E622, sprId.E622, 2000,  7, 300, 1, 1, 3, 1, 0, sfxId.DIE_POTION2, idxId.EFF_ENEMY_DIE_POTION_SMALL);
  e[70] = new E(idxId.E623, sprId.E623, 2000,  7, 300, 1, 1, 3, 1, 0, sfxId.DIE_POTION3, idxId.EFF_ENEMY_DIE_POTION_SMALL);
  e[71] = new E(idxId.E624, sprId.E624, 2000,  7, 300, 1, 1, 3, 1, 0, sfxId.DIE_POTION4, idxId.EFF_ENEMY_DIE_POTION_SMALL);
  e[72] = new E(idxId.E631, sprId.E631, 3200, 10, 320, 1, 1, 3, 1, 0.5, sfxId.DIE_BUBBLE_SMALL, idxId.EFF_ENEMY_DIE_BUBBLE);
  e[73] = new E(idxId.E632, sprId.E632, 3200, 10, 320, 1, 1, 3, 1, 0.8, sfxId.DIE_BUBBLE_SMALL, idxId.EFF_ENEMY_DIE_BUBBLE);
  e[74] = new E(idxId.E633, sprId.E633, 3200, 10, 320, 1, 1, 3, 1, 1, sfxId.DIE_BUBBLE_BIG, idxId.EFF_ENEMY_DIE_BUBBLE);
  e[75] = new E(idxId.E634, sprId.E634, 3200, 10, 320, 1, 1, 3, 1, 1.2, sfxId.DIE_BUBBLE_BIG, idxId.EFF_ENEMY_DIE_BUBBLE);
  e[77] = new E(idxId.E641, sprId.E641, 3200, 10, 320, 1, 1, 2, 1, 0, sfxId.DIE_BRICK1, idxId.EFF_ENEMY_DIE_BRICK);
  e[78] = new E(idxId.E642, sprId.E642, 3200, 10, 320, 1, 1, 2, 1, 0, sfxId.DIE_BRICK1, idxId.EFF_ENEMY_DIE_BRICK);
  e[79] = new E(idxId.E643, sprId.E643, 3200, 10, 320, 1, 2, 3, 1, 0, sfxId.DIE_BRICK2, idxId.EFF_ENEMY_DIE_BRICK);
  e[80] = new E(idxId.E644, sprId.E644, 3200, 10, 320, 1, 2, 3, 1, 0, sfxId.DIE_BRICK2, idxId.EFF_ENEMY_DIE_BRICK);
  e[76] = new E(idxId.BOSS5, sprId.BOSS1, 60000, 1, 6000, 2, 2, 4, 0, 0, sfxId.DIE_BOSS, idxId.EFF_ENEMY_DIE_ROCKET);
  e[81] = new E(idxId.BOSSF, sprId.BOSSF, 400000, 10, 40000, 2, 2, 4, 0.5, 0.5, sfxId.DIE_BOSS, idxId.EFF_ENEMY_DIE_ROCKET);
  e[82] = new E(idxId.BOSSF_0, sprId.BOSSF_0, 150000, 4, 15000, 2, 2, 2, 0, 0, sfxId.DIE_BOSS, idxId.EFF_ENEMY_DIE_ROCKET);
  e[83] = new E(idxId.BOSSF_1, sprId.BOSSF_1, 40000, 2, 4000, 1, 1, 2, 0, 0, sfxId.DIE_BOSS, idxId.EFF_ENEMY_DIE_ROCKET);
  e[84] = new E(idxId.BOSSF_2, sprId.BOSSF_2, 40000, 2, 4000, 1, 1, 2, 0, 0, sfxId.DIE_BOSS, idxId.EFF_ENEMY_DIE_ROCKET);
  e[85] = new E(idxId.BOSSF_3, sprId.BOSSF_3, 40000, 2, 4000, 1, 1, 2, 0, 0, sfxId.DIE_BOSS, idxId.EFF_ENEMY_DIE_ROCKET);
  e[86] = new E(idxId.BOSSF_4, sprId.BOSSF_4, 40000, 2, 4000, 1, 1, 2, 0, 0, sfxId.DIE_BOSS, idxId.EFF_ENEMY_DIE_ROCKET);
  //--
  e[87] = new E(idxId.E701, sprId.E701, 4000, 0, 1000, 1, 1, 4, 0, 0, sfxId.DIE_COIN, 0);
  e[88] = new E(idxId.E711, sprId.E711, 2400, 0, 240, 1, 1, 2, 0, 0, sfxId.DIE_COIN, 0);
  e[89] = new E(idxId.E712, sprId.E712, 2400, 0, 250, 1, 1, 2, 0, 0, sfxId.DIE_COIN, 0);
  e[90] = new E(idxId.E713, sprId.E713, 2400, 0, 260, 1, 1, 2, 0, 0, sfxId.DIE_COIN, 0);
  //--
  e[92] = new E(idxId.BOSS_TEST, sprId.BOSS1, 1000000, 10000, 1000, 2, 2, 4, 0, 0, sfxId.DIE_BOSS, idxId.EFF_ENEMY_DIE_ROCKET);
})();
function EnemyObject(){
  this.isBoss = false;
}
EnemyObject.prototype = new FieldObject();
EnemyObject.prototype.insert = function(idxIdValue, x, y, isBoss){
  var get = enemyData[idxIdValue];
  this.idxId = idxIdValue;
  this.sprId = get.sprId;
  this.hp = get.hp;
  this.hpMax = get.hp;
  this.attack = get.attack;
  this.x = x;
  this.y = y;
  this.w = get.w;
  this.h = get.h;
  this.speedX = get.speedX; 
  this.speedY = get.speedY;
  this.scale = get.scale;
  this.isUsing = true;
  this.score = get.score;
  this.deadSoundId = get.deadSoundId;
  this.deadEffectId = get.deadEffectId;

  if(isBoss){
    this.isBoss = true;
  } else {
    this.isBoss = false;
  }
}
EnemyObject.prototype.process = function(){
  if(!this.isUsing) return;

  this.moveProcess();
  if(this.isBoss) this.bossProcess();

  if(this.hp <= 0){
    this.dieProcess();
    return;
  }

  if(this.x <= -120 || this.x >= 360 || this.y <= -60 || this.y >= 180){
  // if(this.x <= -120) this.x = 240 + this.h * this.scale;
  // else if(this.x >= 360){ this.delete(); return; }
  // else if(this.y <= -60){ this.y = 59; this.speedY = Math.abs(this.speedY); }
  // else if(this.y >= 180){ this.y = 179; this.speedY = Math.abs(this.speedY) * -1; }
    this.delete();
    return;
  }

  this.attackDelayCount++;
  if(this.attackDelayCount >= 0 && collision(this, player)){
    player.damageInsert(this.attack);
    this.attackDelayCount = -60;
  }
}
EnemyObject.prototype.bossProcess = function(){
  switch(this.idxId){
    case idxId.BOSS2_1:
      this.gravity++;
      if(this.gravity >= 60){
        this.gravity = 0;
        insert.enemyBullet(idxId.EBULLET_FIRE_BIG, this.x, this.y);
        insert.enemyBullet(idxId.EBULLET_FIRE_BIG, this.x, this.y);
      }
      break;
    case idxId.BOSS2_2:
      this.gravity++;
      if(this.gravity >= 60){
        this.gravity = 0;
        insert.enemyBullet(idxId.EBULLET_WATER_LEFT_BIG, this.x, this.y - 12);
        insert.enemyBullet(idxId.EBULLET_WATER_RIGHT_BIG, this.x, this.y - 12);
        insert.enemyBullet(idxId.EBULLET_WATER_UP_BIG, this.x, this.y - 12);
        insert.enemyBullet(idxId.EBULLET_WATER_DOWN_BIG, this.x, this.y - 12);
        insert.enemyBullet(idxId.EBULLET_WATER_LEFT_BIG, this.x, this.y + 12);
        insert.enemyBullet(idxId.EBULLET_WATER_RIGHT_BIG, this.x, this.y + 12);
        insert.enemyBullet(idxId.EBULLET_WATER_UP_BIG, this.x, this.y + 12);
        insert.enemyBullet(idxId.EBULLET_WATER_DOWN_BIG, this.x, this.y + 12);
      }
      break;
  }
}
EnemyObject.prototype.dieProcess = function(){
  switch(this.idxId){
    case idxId.E201: case idxId.E621: insert.enemyBullet(idxId.EBULLET_FIRE, this.x, this.y); break;
    case idxId.E202: case idxId.E622:
      insert.enemyBullet(idxId.EBULLET_WATER_LEFT, this.x, this.y);
      insert.enemyBullet(idxId.EBULLET_WATER_RIGHT, this.x, this.y);
      insert.enemyBullet(idxId.EBULLET_WATER_UP, this.x, this.y);
      insert.enemyBullet(idxId.EBULLET_WATER_DOWN, this.x, this.y);
      break;
    case idxId.E203: case idxId.E623:
      insert.enemyBullet(idxId.EBULLET_POISON, this.x, this.y);
      break;
    case idxId.E204: case idxId.E624:
      insert.enemyBullet(idxId.EBULLET_CURSE, this.x, this.y); 
      break;
    case idxId.E211: 
      insert.enemyBullet(idxId.EBULLET_FIRE_BIG, this.x, this.y);
      insert.enemyBullet(idxId.EBULLET_FIRE_BIG, this.x, this.y); 
      break;
    case idxId.E212: 
    case idxId.E321:
      insert.enemyBullet(idxId.EBULLET_WATER_LEFT_BIG, this.x, this.y);
      insert.enemyBullet(idxId.EBULLET_WATER_RIGHT_BIG, this.x, this.y);
      insert.enemyBullet(idxId.EBULLET_WATER_UP_BIG, this.x, this.y);
      insert.enemyBullet(idxId.EBULLET_WATER_DOWN_BIG, this.x, this.y);
      break;
    case idxId.E213:
    case idxId.E322:
      insert.enemyBullet(idxId.EBULLET_POISON_LEFTDOWN, this.x, this.y);
      insert.enemyBullet(idxId.EBULLET_POISON_LEFTUP, this.x, this.y);
      insert.enemyBullet(idxId.EBULLET_POISON_RIGHTDOWN, this.x, this.y);
      insert.enemyBullet(idxId.EBULLET_POISON_RIGHTUP, this.x, this.y);
      break;
    case idxId.E214: 
      insert.enemyBullet(idxId.EBULLET_CURSE_BIG, this.x, this.y);
      break;
    case idxId.E411:
      insert.enemy(idxId.E412, this.x, this.y);
      insert.enemy(idxId.E413, this.x+(this.scale*8), this.y);
      insert.enemy(idxId.E414, this.x, this.y+(this.scale*8));
      insert.enemy(idxId.E415, this.x+(this.scale*8), this.y+(this.scale*8));
      break;
    case idxId.E421:
      insert.enemy(idxId.E422, this.x, this.y);
      insert.enemy(idxId.E423, this.x+(this.scale*8), this.y);
      insert.enemy(idxId.E424, this.x, this.y+(this.scale*8));
      insert.enemy(idxId.E425, this.x+(this.scale*8), this.y+(this.scale*8));
      break;
    case idxId.BOSSF:
      insert.boss(idxId.BOSSF_0, this.x,    this.y);
      insert.boss(idxId.BOSSF_0, this.x+32, this.y);
      insert.boss(idxId.BOSSF_0, this.x,    this.y-16);
      insert.boss(idxId.BOSSF_0, this.x+32, this.y-16);
      break;
    case idxId.BOSSF_0:
      insert.boss(idxId.BOSSF_1, this.x+8, this.y);
      insert.boss(idxId.BOSSF_2, this.x+(this.scale*8), this.y);
      insert.boss(idxId.BOSSF_3, this.x, this.y+(this.scale*8));
      insert.boss(idxId.BOSSF_4, this.x+(this.scale*8), this.y+(this.scale*8));
      break;
  }

  if(this.deadSoundId != 0) sound.play(this.deadSoundId);
  player.plusExp(this.score);

  if(this.deadEffectId != 0){
    if(this.w >= 2 && this.h >= 2) insert.effect(this.deadEffectId, this.x, this.y, this.scale*2, 1, 0);
    else insert.effect(this.deadEffectId, this.x, this.y, this.scale, 1, 0);
  }
  this.delete();
}
EnemyObject.prototype.moveProcess = function(){
  switch(this.idxId){
    case idxId.E101: case idxId.E102: case idxId.E103: case idxId.E104: 
    case idxId.E111: case idxId.E112:
    case idxId.E221: case idxId.E231: case idxId.E232:
      this.moveGroup101(); break;
    case idxId.BOSS1: case idxId.BOSS2_1: case idxId.BOSS2_2: case idxId.BOSS3: case idxId.BOSS4:
    case idxId.BOSS5:
    case idxId.BOSSF: case idxId.BOSSF_0: case idxId.BOSSF_1: case idxId.BOSSF_2: case idxId.BOSSF_3: case idxId.BOSSF_4:
    case idxId.BOSS_TEST:
      this.moveProcessBoss(); break;
    case idxId.E301: case idxId.E302: case idxId.E303: case idxId.E304: case idxId.E305: case idxId.E306:
    case idxId.E311: case idxId.E312: case idxId.E313: case idxId.E314:
    case idxId.E321: case idxId.E322:
      this.moveGroup301(); break;
    case idxId.E401: case idxId.E402: case idxId.E403: case idxId.E404:
    case idxId.E405: case idxId.E406: case idxId.E407: case idxId.E408:
      this.moveGroup401(); break;
    case idxId.E431: case idxId.E432:
      this.moveGroup431(); break;
    case idxId.E411: case idxId.E412: case idxId.E413: case idxId.E414: case idxId.E415:
    case idxId.E421: case idxId.E422: case idxId.E423: case idxId.E424: case idxId.E425:
      this.moveInsideArea(); break;
    case idxId.E601: case idxId.E602:
    case idxId.E611: case idxId.E612: case idxId.E613: case idxId.E614:
    case idxId.E621: case idxId.E622: case idxId.E623: case idxId.E624:
    case idxId.E631: case idxId.E632: case idxId.E633: case idxId.E634:
    case idxId.E641: case idxId.E642: case idxId.E643: case idxId.E644:
      this.moveGroup601(); break;
    case idxId.E701: case idxId.E711: case idxId.E712: case idxId.E713:
      this.moveGroup701(); break;
  }

  this.move();
}
EnemyObject.prototype.moveProcessBoss = function(){
  var random = 0;

  switch(this.idxId){
    case idxId.BOSS1: case idxId.BOSS5:
      this.gravity++;

      if((this.idxId == idxId.BOSS1 && this.gravity >= 90) || (this.idxId == idxId.BOSS5 && this.gravity >= 30) && this.moveType != ""){
        random = Math.floor(Math.random() * 2) + 1;
        this.gravity = 0;

        if(this.moveType == "leftUp" && random == 1) this.moveType = "leftDown";
        else if(this.moveType == "leftUp" && random == 2) this.moveType = "rightUp";
        else if(this.moveType == "leftDown" && random == 1) this.moveType = "leftUp";
        else if(this.moveType == "leftDown" && random == 2) this.moveType = "rightDown";
        else if(this.moveType == "rightUp" && random == 1) this.moveType = "leftUp";
        else if(this.moveType == "rightUp" && random == 2) this.moveType = "rightDown";
        else if(this.moveType == "rightDown" && random == 1) this.moveType = "leftDown";
        else if(this.moveType == "rightDown" && random == 2) this.moveType = "rightUp";
      }

      if(this.moveType == ""){
        this.moveType = "rightUp";
        if(this.idxId == idxId.BOSS5){
          random = Math.random() * 100;
          if(random <= 25){
            this.moveType = "rightUp";
          } else if(random <= 50){
            this.moveType = "rightDown";
          } else if(random <= 75){
            this.moveType = "leftUp";
          } else {
            this.moveType = "leftDown";
          }
        }
      } else if(this.moveType == "leftUp"){
        if(this.x >= 1){
          this.speedX -= 0.5;
        } else {
          this.x = 0;
          this.speedX = 0;
        }

        if(this.y >= 1){
          this.speedY -= 0.5;
        } else {
          this.y = 0;
          this.speedY = 0;
        }
      } else if(this.moveType == "leftDown"){
        if(this.x >= 1){
          this.speedX -= 0.5;
        } else {
          this.x = 0;
          this.speedX = 0;
        }

        if(this.y < 120 - (this.scale * this.h * 8) ){
          this.speedY += 0.5;
        } else {
          this.y = 120 - (this.scale * this.h * 8);
          this.speedY = 0;
        }
      } else if(this.moveType == "rightUp"){
        if(this.x < 240 - (this.scale * this.w * 8) ){
          this.speedX += 0.5;
        } else {
          this.x = 240 - (this.scale * this.w * 8);
          this.speedX = 0;
        }

        if(this.y >= 1){
          this.speedY -= 0.5;
        } else {
          this.y = 0;
          this.speedY = 0;
        }
      } else if(this.moveType == "rightDown"){
        if(this.x < 240 - (this.scale * this.w * 8) ){
          this.speedX += 0.5;
        } else {
          this.x = 240 - (this.scale * this.w * 8);
          this.speedX = 0;
        }

        if(this.y < 120 - (this.scale * this.h * 8) ){
          this.speedY += 0.5;
        } else {
          this.y = 120 - (this.scale * this.h * 8);
          this.speedY = 0;
        }
      }

      break;
    case idxId.BOSS2_1: case idxId.BOSS2_2:
      if(this.y < 20){
        this.y++;
        this.speedY = Math.abs(this.speedY);
      }
      if(this.y > 100 - (this.scale * this.h * 8)){
        this.y--;
        this.speedY = -Math.abs(this.speedY);
      }

      if(this.moveType == ""){
        this.moveType = "left";
      } else if(this.moveType == "left"){
        this.x--;
        if(this.x <= 0){
          this.moveType = "right";
        }
      } else if(this.moveType == "right"){
        this.x++;
        if(this.x >= 240 - (this.scale * this.w * 8)){
          this.moveType = "left";
        }
      }

      break;
    case idxId.BOSS3:
      if(this.speedX == 0){
        this.speedX = -0.2;
        this.speedY = 0.2;
      }
    
      if(this.x + (this.scale * 8) <= 0){
        this.x = 240 + 8;
      }
      if(this.x >= 240 + (this.w * this.scale * 8)){
        this.speedX = Math.abs(this.speedX);
      }
      if(this.y <= 0){
        this.speedY = Math.abs(this.speedY);
      }
      if(this.y + (this.h * this.scale * 8) >= 120){
        this.speedY = Math.abs(this.speedY) * -1;
      }
      break;
    case idxId.BOSS4:
      if(this.y != 40){
        this.y = 40;
      }

      if(this.x >= 90){
        this.speedX = -0.4;
      } else {
        this.speedX = 0;
        this.gravity++;
      }

      if(this.gravity >= 1200){
        this.delete();
      }
      break;
    case idxId.BOSSF: case idxId.BOSSF_0:
    case idxId.BOSSF_1: case idxId.BOSSF_2: case idxId.BOSSF_3: case idxId.BOSSF_4:
      if(this.x <= 0){
        this.speedX = Math.abs(this.speedX);
      } else if(this.x + (this.w*this.scale*8) >= 240){
        this.speedX = -Math.abs(this.speedX);
      }
      
      if(this.y <= 0){
        this.speedY = Math.abs(this.speedY);
      } else if(this.y + (this.h * this.scale * 8) >= 120){
        this.speedY = -Math.abs(this.speedY);
      }

      this.gravity++;
      if(this.gravity == 40){
        this.speedX = this.speedX * 4;
        this.speedY = this.speedY * 4;
      } else if(this.gravity == 60){
        this.speedX = this.speedX / 4;
        this.speedY = this.speedY / 4;
      } else if(this.gravity >= 61){
        this.gravity = 0;
      }

      if(this.speedX == 0 && this.speedY == 0){
        this.speedX = -2 + (Math.random() * 4);
        this.speedY = -2 + (Math.random() * 4);
      }

      break;
  }

  if(this.x + (this.w*this.scale*8) > 240) this.x--;
  if(this.y < 0) this.y++;
  if(this.y + (this.h*this.scale*8) > 120) this.y--;
}
EnemyObject.prototype.moveInsideArea = function(){
  if(this.y <= 0){
    this.speedY = Math.abs(this.speedY);
  } else if(this.y + (this.h * this.scale * 8) >= 120){
    this.speedY = -Math.abs(this.speedY);
  }
}
EnemyObject.prototype.moveGroup101 = function(){
  var number = 0;
  switch(this.idxId){
    case idxId.E101:
      if(this.moveType == ''){
        this.speedX = ((this.x - 64) / 30) + 0.4;
        this.speedX *= -1;

        if(this.x <= 64){
          this.moveType = 'back';
          this.gravity = 0;
        }
      } else {
        this.gravity++;
        this.speedX = (this.gravity / 30) + 0.6;
      }
      break;
    case idxId.E102:
      this.gravity++;
      if(this.gravity >= 30){
        number = Math.floor(Math.random() * 2);
        if(number == 1) this.speedY = 1;
        else this.speedY = -1;
        this.gravity = 0;
      }

      if(this.y <= 0) this.speedY = 1;
      if(this.y >= 120) this.speedY = -1;
      break;
    case idxId.E103:
      this.gravity++;
      if(this.gravity >= 45){
        this.gravity = 0;
        if(this.moveType == ''){
          this.moveType = 'nomove';
        } else if(this.moveType == 'nomove'){
          this.moveType = '';
          this.speedX = 0.8 + (Math.random() * 1);
          this.speedX *= -1;
        }
      }

      if(this.moveType == ''){
        
      } else if(this.moveType == 'nomove'){
        this.speedX = 0;
      }
      break;
    case idxId.E104: case idxId.E221:
      this.gravity++;
      if(this.gravity >= 60){
        this.gravity = 0;
        number = Math.floor(Math.random() * 2);
        if(number == 1) this.speedX = 1;
        else this.speedX = -1;

        number = Math.floor(Math.random() * 3);
        if(number == 1) this.speedY = 1;
        else if(number == 2) this.speedY = 0;
        else this.speedY = -1;
      }

      if(this.y <= 0) this.speedY = 1;
      if(this.y >= 120) this.speedY = -1;
      if(this.x >= 280) this.speedX = -1;

      break;
    case idxId.E111: case idxId.E231:
      if(this.y >= player.y - 16 && this.y <= player.y + 24 && this.x <= 224){
        this.gravity++;
      }

      if(this.gravity == 0){
        this.speedX = 0.5;
      } else if(this.gravity >= 1){
        this.gravity++;
        this.speedX = 1 + (this.gravity / 20);
      }
      this.speedX *= -1;

      break;
    case idxId.E112: case idxId.E232:
      if(this.x >= 241){
        this.speedX = 4;
      } else if(this.x >= 220 && this.x <= 241){
        this.speedX = 0.5;
      } else if(this.x <= 219){
        this.gravity++;
        this.speedX = 0.5 + (this.gravity / 18);
        
        if(this.speedY == 0){
          this.speedY = -0.5 + (Math.random() * 1);
        }
      } else {
        this.speedX = 1;
      }

      this.speedX *= -1;
      break;
  }
}
EnemyObject.prototype.moveGroup301 = function(){
  if(this.speedX == 0){
    this.speedX = Math.random() * 1.5 + 0.5;
    this.speedX *= -1;

    this.speedY = Math.random() * 2;
  }

  if(this.x + (this.scale * 8) <= 0){
    this.x = 240 + 8;
  }
  if(this.x >= 240 + (this.scale * 8)){
    this.speedX = Math.abs(this.speedX);
  }
  if(this.y <= 0){
    this.speedY = Math.abs(this.speedY);
  }
  if(this.y + (this.scale * 8) >= 120){
    this.speedY = Math.abs(this.speedY) * -1;
  }
}
EnemyObject.prototype.moveGroup401 = function(){
  if(this.x >= 240 - (this.scale * 8)){
    this.speedX = -5;
  } else {
    this.speedX = -0.2;
  }

  switch(this.idxId){
    case idxId.E402: case idxId.E406:
      if(this.speedY == 0) this.speedY = 1;
      this.speedX = -0.4;

      if(this.y <= 0){
        this.speedY = 1;
      } else if(this.y + (this.scale * this.h) >= 120){
        this.speedY = -1;
      }
      break;
    case idxId.E403: case idxId.E407:
      this.speedX = -0.8;
      if(this.moveType == ""){
        this.moveType = "down";
        this.y = -10;
        this.gravity = 0;
        this.speedY = 0;
      }

      if(this.moveType == "down"){
        this.gravity++;
        this.speedY = 0.05 * this.gravity;
        if(this.y + (this.h * this.scale * 8) >= 120){
          this.moveType = "up";
        }
      } else if(this.moveType == "up"){
        if(this.gravity >= 0) this.gravity--;
        this.speedY = -(0.05 * this.gravity);

        if(this.y <= 0 || this.gravity <= 0){
          this.gravity = 0;
          this.moveType = "down";
        }
      }
      break;
  }
}
EnemyObject.prototype.moveGroup431 = function(){
  switch(this.idxId){
    case idxId.E431:
      if(this.x <= 180 && this.moveType == ""){
        this.moveType = "attack";
      }

      if(this.moveType == "attack"){
        this.speedX = (player.x - this.x) / 60;
        this.speedY = (player.y - this.y) / 60;
        if(this.speedX >= 4) this.speedX = 4;
        if(this.speedY >= 4) this.speedY = 4;
        if(this.speedX <= -4) this.speedX = -4;
        if(this.speedY <= -4) this.speedY = -4;
        this.moveType = "finish";
      }
      break;
    case idxId.E432:
      this.gravity++;
      if(this.gravity % 60 == 0){
        this.speedY = -1 + Math.random() * 2;
        if(this.x <= 120){
          this.speedX = Math.floor(this.gravity/60);
        } else if(this.gravity <= 180) {
          this.speedX = -Math.floor(this.gravity/60);
        } else {
          this.speedX = 6;
        }
      }
      break;
  }
}
EnemyObject.prototype.moveGroup601 = function(){
  switch(this.idxId){
    case idxId.E601:
      if(this.y <= 0){
        this.speedY = Math.abs(this.speedY);
      }
      if(this.y + (this.h * this.scale * 8) >= 120){
        this.speedY = -Math.abs(this.speedY);
      }

      this.gravity++;

      if(this.gravity % 120 == 0){
        insert.enemyBullet(idxId.EBULLET_POISON, this.x, this.y);
      }
      if(this.gravity % 20 == 0){
        this.speedX = -2 + Math.random() * 4;
        if(this.x >= 180){
          this.speedX = -Math.abs(this.speedX);
        }

        this.speedY = -2 + Math.random() * 4;
      }

      if(this.gravity >= 1200){
        this.delete();
      }
      break;
    case idxId.E602:
      if(this.speedY <= 1 && this.speedY >= -1) this.speedY = 2;
      if(this.x + (this.w * this.scale * 8) >= 240){
        this.x--;
      }

      if(this.y <= 0){
        this.speedY = 2;
      }
      if(this.y + (this.h * this.scale * 8) >= 120){
        this.speedY = -2;
      }

      if(this.gravity % 120 == 0){
        insert.enemyBullet(idxId.EBULLET_WATER_LEFT, this.x, this.y);
      }

      this.gravity++;
      if(this.gravity >= 1200){
        this.delete();
      }
      break;
    case idxId.E611:
      this.gravity++;
      if(this.gravity <= 20){
        this.speedX = -4;
        if(this.gravity >= 12){
          this.speedY = 0;
        }
      } else if(this.gravity <= 80){
        this.speedX = 0;
      } else if(this.gravity >= 81){
        this.gravity = 0;
        this.speedY = (Math.random() * 6) - 3;
      }
      break;
    case idxId.E612:
      this.gravity++;
      if(this.gravity % 30 == 0){
        var a = Math.floor(this.gravity/60);
        if(a >= 3) a = 2;
        this.speedX = (-a * 2) + (Math.random() * 2 * a);
        this.speedY = -a + (Math.random() * 2 * a);
      }

      if(this.y <= 0){
        this.speedY = Math.abs(this.speedY);
      }
      if(this.y + (this.h * this.scale * 8) >= 120){
        this.speedY = -Math.abs(this.speedY);
      }
      break;
    case idxId.E613:
      this.gravity++;
      if(this.gravity <= 20){
        this.speedX = -1;
      } else if(this.gravity <= 40){
        this.speedX = -2;
      } else if(this.gravity <= 60){
        this.speedX = -3;
      } else if(this.gravity <= 80){
        this.speedX = -4;
      } else if(this.gravity <= 100){
        this.speedX = -5;
      }
      break;
    case idxId.E614:
      this.gravity++;
      if(this.gravity <= 60){
        this.x = 240 - (this.scale * 8 * this.w);
      } else if(this.gravity == 61){
        this.speedX = (player.x - this.x) / 40;
        this.speedY = (player.y - this.y) / 40;
        if(this.speedX >= 3) this.speedX = 3;
        if(this.speedY >= 3) this.speedY = 3;
        if(this.speedX <= -3) this.speedX = -3;
        if(this.speedY <= -3) this.speedY = -3;
      }
      break;
    case idxId.E621: case idxId.E622: case idxId.E623: case idxId.E624:
      this.gravity++;
      if(this.gravity <= 150){
        this.speedX = (player.x - this.x);
        this.speedY = (player.y - this.y);
        if(this.speedX > 0) this.speedX = 1;
        if(this.speedY > 0) this.speedY = 1;
        if(this.speedX < 0) this.speedX = -1;
        if(this.speedY < 0) this.speedY = -1;
      }
      break;
    case idxId.E631: case idxId.E632: case idxId.E633: case idxId.E634:
      this.gravity++;
      if(this.gravity == 60 || this.gravity == 120 || this.gravity == 180){
        this.speedX *= 1.2;
        this.speedY *= 1.2;
      }

      if(this.x + (this.scale * 8) <= 0){
        this.x = 240 + 8;
      }
      if(this.x >= 240 + (this.scale * 8)){
        this.speedX = Math.abs(this.speedX);
      }
      if(this.y <= 0){
        this.speedY = Math.abs(this.speedY);
      }
      if(this.y + (this.scale * 8) >= 120){
        this.speedY = Math.abs(this.speedY) * -1;
      }
      break;
    case idxId.E642:
      if(this.speedY == 0) this.speedY = 1;
      this.speedX = -0.4;

      if(this.y <= 0){
        this.speedY = 1;
      } else if(this.y + (this.scale * this.h) >= 120){
        this.speedY = -1;
      }
      break;
    case idxId.E643:
      this.speedX = -0.8;
      if(this.moveType == ""){
        this.moveType = "down";
        this.y = -10;
        this.gravity = 0;
        this.speedY = 0;
      }

      if(this.moveType == "down"){
        this.gravity++;
        this.speedY = 0.05 * this.gravity;
        if(this.y + (this.h * this.scale * 8) >= 120){
          this.moveType = "up";
        }
      } else if(this.moveType == "up"){
        if(this.gravity >= 0) this.gravity--;
        this.speedY = -(0.05 * this.gravity);

        if(this.y <= 0 || this.gravity <= 0){
          this.gravity = 0;
          this.moveType = "down";
        }
      }
      break;
  }
}
EnemyObject.prototype.moveGroup701 = function(){
  if(this.moveType == ""){
    this.moveType = "coinUp";
    this.x = 30 + (Math.random() * 180);
    this.y = 120;
    this.speedX = (Math.random() * 4) - 2;
  }

  if(this.x <= 0){
    this.speedX = Math.abs(this.speedX);
  } else if(this.x + (this.scale * 8) >= 240){
    this.speedX = -Math.abs(this.speedX);
  }

  this.gravity++;
  if(this.moveType == "coinUp"){
    this.speedY = -(this.gravity/20);
    if(this.y <= 0){
      this.moveType = "coinDown";
      this.gravity = 0;
    }
  } else if(this.moveType == "coinDown"){
    this.speedY = (this.gravity/40);
  }
}
EnemyObject.prototype.delete = function(){
  FieldObject.prototype.delete.call(this);
  this.isBoss = false;
}

function EnemyBulletObject(){

}
EnemyBulletObject.prototype = new FieldObject();
EnemyBulletObject.prototype.insert = function(idxIdValue, x, y){
  this.objectType = "enemyBullet";
  this.idxId = idxIdValue;
  this.sprId = 0;
  this.x = x;
  this.y = y;
  this.w = 1;
  this.h = 1;
  this.scale = 1;
  this.isUsing = true;
  this.repeatCount = 1;
  this.attack = 10;

  switch(idxIdValue){
    case idxId.EBULLET_FIRE:
      this.repeatCount = 20; this.delay = 4; this.scale = 3; this.attack = 6;
      break;
    case idxId.EBULLET_FIRE_BIG:
      this.repeatCount = 24; this.delay = 4; this.scale = 5; this.attack = 6;
      break;
    case idxId.EBULLET_WATER_LEFT: case idxId.EBULLET_WATER_RIGHT: case idxId.EBULLET_WATER_UP: case idxId.EBULLET_WATER_DOWN:
      this.repeatCount = 32; this.delay = 2; this.scale = 2; this.attack = 8; 
      break;
    case idxId.EBULLET_WATER_LEFT_BIG: case idxId.EBULLET_WATER_RIGHT_BIG: case idxId.EBULLET_WATER_UP_BIG: case idxId.EBULLET_WATER_DOWN_BIG:
      this.repeatCount = 32; this.delay = 2; this.scale = 4; this.attack = 8; 
      break;
    case idxId.EBULLET_POISON:
    case idxId.EBULLET_POISON_LEFTDOWN: case idxId.EBULLET_POISON_LEFTUP: case idxId.EBULLET_POISON_RIGHTDOWN: case idxId.EBULLET_POISON_RIGHTUP:
      this.repeatCount = 24; this.delay = 4; this.scale = 1; this.attack = 6; 
      break;
    case idxId.EBULLET_CURSE:
      this.repeatCount = 24; this.delay = 2; this.scale = 2; this.attack = 6;
      break;
    case idxId.EBULLET_CURSE_BIG:
      this.repeatCount = 24; this.delay = 2; this.scale = 4; this.attack = 6;
      break;
  }
}
EnemyBulletObject.prototype.process = function(){
  var mx = 0;
  var my = 0;
  this.delayCount++;
  if(this.delayCount >= this.delay){
    this.delayCount = 0;
    this.repeatCount--;
    switch(this.idxId){
      case idxId.EBULLET_FIRE:
      case idxId.EBULLET_FIRE_BIG:
        insert.effect(idxId.EFF_POTION_FIRE, this.x, this.y, this.scale, 1, 0);
        this.x = this.x + ((Math.random() * 24) - 12);
        this.y = this.y + ((Math.random() * 24) - 12);
        if(this.idxId == idxId.EBULLET_FIRE_BIG){
          this.x = this.x + ((Math.random() * 48) - 24);
          this.y = this.y + ((Math.random() * 48) - 24);
        }
        break;
      case idxId.EBULLET_WATER_LEFT: case idxId.EBULLET_WATER_LEFT_BIG: 
        insert.effect(idxId.EFF_POTION_WATER, this.x, this.y, this.scale, 1, null, 0);
        this.x = this.x - 8;
        break;
      case idxId.EBULLET_WATER_RIGHT: case idxId.EBULLET_WATER_RIGHT_BIG:
        insert.effect(idxId.EFF_POTION_WATER, this.x, this.y, this.scale, 1, null, 2);
        this.x = this.x + 8;
        break;
      case idxId.EBULLET_WATER_UP: case idxId.EBULLET_WATER_UP_BIG:
        insert.effect(idxId.EFF_POTION_WATER, this.x, this.y, this.scale, 1, null, 1);
        this.y = this.y - 8;
        break;
      case idxId.EBULLET_WATER_DOWN: case idxId.EBULLET_WATER_DOWN_BIG:
        insert.effect(idxId.EFF_POTION_WATER, this.x, this.y, this.scale, 1, null, 3);
        this.y = this.y + 8;
        break;
      case idxId.EBULLET_POISON:
      case idxId.EBULLET_POISON_LEFTDOWN: case idxId.EBULLET_POISON_LEFTUP: case idxId.EBULLET_POISON_RIGHTUP: case idxId.EBULLET_POISON_RIGHTDOWN:
        if(this.repeatCount == 20){
          this.scale = 2;
          this.x -= 4;
          this.y -= 4;
        } else if(this.repeatCount == 18){
          this.scale = 3;
          this.x -= 4;
          this.y -= 4;
        } else if(this.repeatCount == 16){
          this.scale = 4;
          this.x -= 4;
          this.y -= 4;
        } else if(this.repeatCount == 14){
          this.scale = 5;
          this.x -= 4;
          this.y -= 4;
        } else if(this.repeatCount == 12){
          this.scale = 6;
          this.x -= 4;
          this.y -= 4;
        }

        if(this.idxId == idxId.EBULLET_POISON_LEFTDOWN){
          this.x -= 2.2;
          this.y += 2.2;
        } else if(this.idxId == idxId.EBULLET_POISON_LEFTUP){
          this.x -= 2.2;
          this.y -= 2.2;
        } else if(this.idxId == idxId.EBULLET_POISON_RIGHTDOWN){
          this.x += 2.2;
          this.y += 2.2;
        } else if(this.idxId == idxId.EBULLET_POISON_RIGHTUP){
          this.x += 2.2;
          this.y -= 2.2;
        }

        insert.effect(idxId.EFF_POTION_POISON, this.x, this.y, this.scale, 1);
        break;
      case idxId.EBULLET_CURSE:
      case idxId.EBULLET_CURSE_BIG:
        mx = (player.x - this.x) / 25;
        my = (player.y - this.y) / 25;

        if(mx < 1 && mx >= 0) mx = 1;
        else if(mx > -1 && mx <= 0) mx = -1;
        if(my < 1 && my >= 0) my = 1;
        else if(my > -1 && my <= 0) my = -1;

        this.x += mx;
        this.y += my;
        this.gravity++;
        insert.effect(idxId.EFF_POTION_CURSE, this.x, this.y, this.scale, 1);
        break;
    }
  }

  this.attackDelayCount++;
  if(this.attackDelayCount >= 0 && collision(player, this)){
    this.attackDelayCount = -60;
    player.damageInsert(this.attack);
  }

  if(this.repeatCount <= 0) this.delete();
}



function SplashData(idxId, attackDelay, repeatCount, maxMonster, scale){
  this.idxId = idxId;
  this.attackDelay = attackDelay;
  this.repeatCount = repeatCount;
  this.maxMonster = maxMonster;
  this.scale = scale;
}
var splashData = new Array(100);

function EffectData(idxId, sprId, effectFrame, delay){
  this.idxId = idxId;
  this.sprId = sprId;
  this.effectFrame = effectFrame;
  this.delay = delay;
}
var effectData = new Array(100);
(function(){
  var e = effectData;
  var E = EffectData;
  e[0] = new E(0, 0, 0, 0);
  e[1] = new E(idxId.EFF_SPLASH_BLUE, sprId.EFF_SPLASH_BLUE, 4, 1);
  e[2] = new E(idxId.EFF_SPLASH_GREEN, sprId.EFF_SPLASH_GREEN, 4, 1);
  e[3] = new E(idxId.EFF_FIRE, sprId.EFF_FIRE, 8, 3);
  e[4] = new E(idxId.EFF_THUNDER, sprId.EFF_THUNDER, 4, 2);
  e[5] = new E(idxId.EFF_SPLASH_PINK, sprId.EFF_SPLASH_PINK, 4, 1);
  e[6] = new E(idxId.EFF_SWORD, sprId.EFF_SWORD, 3, 0);
  e[7] = new E(idxId.EFF_FIRE_FAST, sprId.EFF_FIRE, 8, 0);
  e[8] = new E(idxId.EFF_POTION_FIRE, sprId.EFF_POTION_FIRE, 8, 1);
  e[9] = new E(idxId.EFF_POTION_WATER, sprId.EFF_POTION_WATER, 8, 1);
  e[10] = new E(idxId.EFF_POTION_POISON, sprId.EFF_POTION_POISON, 8, 1);
  e[11] = new E(idxId.EFF_POTION_CURSE, sprId.EFF_POTION_CURSE, 8, 1);
  e[12] = new E(idxId.EFF_ENEMY_DIE_SMALL, sprId.EFF_DIE_SMALL, 8, 1);
  e[13] = new E(idxId.EFF_ENEMY_DIE_MIDDIE, sprId.EFF_DIE_MIDDLE, 8, 1);
  e[14] = new E(idxId.EFF_ENEMY_DIE_CAR, sprId.EFF_DIE_CAR, 8, 1);
  e[15] = new E(idxId.EFF_ENEMY_DIE_ROCKET, sprId.EFF_DIE_ROCKET, 8, 1);
  e[16] = new E(idxId.EFF_ENEMY_DIE_POTION_SMALL, sprId.EFF_DIE_POTION_SMALL, 8, 1);
  e[17] = new E(idxId.EFF_ENEMY_DIE_POTION_MIDDLE, sprId.EFF_DIE_POTION_MIDDLE, 8, 1);
  e[18] = new E(idxId.EFF_ENEMY_DIE_BUBBLE, sprId.EFF_DIE_BUBBLE, 8, 1);
  e[19] = new E(idxId.EFF_ENEMY_DIE_BRICK, sprId.EFF_DIE_BRICK, 8, 1);
})();

function EffectObject(){
  this.defaultSprId = 0;
}
EffectObject.prototype = new FieldObject();
EffectObject.prototype.insert = function(idxIdValue, x, y, scale, repeatCount, afterDelay, rotateNumber){
  var get = effectData[idxIdValue];
  this.x = x;
  this.y = y;
  this.idxId = idxIdValue;
  this.sprId = get.sprId;
  this.defaultSprId = get.sprId;
  this.frame = 0;
  this.effectFrame = get.effectFrame;
  this.delay = get.delay;
  this.isUsing = true;

  if(scale != null) this.scale = scale;
  else this.scale = 1;
  if(repeatCount != null) this.repeatCount = repeatCount;
  else this.repeatCount = 0;
  if(afterDelay != null) this.delayCount = -afterDelay;
  else this.delayCount = 0;
  if(rotateNumber != null)  this.rotate = rotateNumber;
  else this.rotate = 0;

}
EffectObject.prototype.process = function(){
  if(this.sprId == 0){
    this.processDisplay();
  }

  this.delayCount++;
  if(this.delayCount >= this.delay){
    this.delayCount = 0;
    if(this.sprId != 0){
      this.sprId = this.defaultSprId + this.frame;
    }

    this.frame++;
    if(this.frame > this.effectFrame){
      this.repeatCount--;
      if(this.repeatCount <= 0){
        this.delete();
        return;
      } else {
        this.frame = 0;
      }
    }
  }
}
EffectObject.prototype.processDisplay = function(){
  var centerX = this.x + (this.scale*8/2);
  var centerY = this.y + (this.scale*8/2);
  // var randomX = Math.random() * 8;
  // var randomY = Math.random() * 8;

  switch (this.idxId) {
    case idxId.EFF_ENEMY_DIE_SMALL:
      this.centerRect(centerX, centerY, this.frame, colorId.RED);
      if(this.frame >= 4) this.centerRect(centerX, centerY, (this.frame-4)*this.scale, colorId.RED);
      break;
    case idxId.EFF_ENEMY_DIE_MIDDIE:
      this.centerRect(centerX, centerY, this.frame, colorId.RED);
      this.centerRect(centerX + (4 - (Math.random() * 8)), centerY + (4 - (Math.random() * 8)), this.frame*this.scale, colorId.RED);
      break;
    case idxId.EFF_ENEMY_DIE_CAR:
      if(this.frame >= 0 && this.frame <= 8) this.centerRect(centerX + (4 - (Math.random() * 8)), centerY + (4 - (Math.random() * 8)), (this.frame-0)*this.scale, colorId.ORANGE);
      if(this.frame >= 4 && this.frame <=12) this.centerRect(centerX + (4 - (Math.random() * 8)), centerY + (4 - (Math.random() * 8)), (this.frame-4)*this.scale, colorId.ORANGE);
      if(this.frame >= 8 && this.frame <=16) this.centerRect(centerX + (4 - (Math.random() * 8)), centerY + (4 - (Math.random() * 8)), (this.frame-8)*this.scale, colorId.ORANGE);
      if(this.frame >=12 && this.frame <=16) this.centerRect(centerX + (4 - (Math.random() * 8)), centerY + (4 - (Math.random() * 8)), (this.frame-12)*this.scale, colorId.ORANGE);
    default:
      break;
  }
}
EffectObject.prototype.centerRect = function(centerX, centerY, rectSize, colorId){
  if(rectSize < 0) rectSize = 0;
  display.strokeRect(centerX-(rectSize/2), centerY-(rectSize/2), rectSize, rectSize, colorId);
}


function collision(object1, object2){
  if(object1.x < object2.x + (object2.w * 8 * object2.scale) &&
      object1.x + (object1.w * 8 * object1.scale) > object2.x &&
      object1.y < object2.y + (object2.h * 8 * object2.scale) &&
      object1.y + (object1.h * 8 * object1.scale) > object2.y) return true;
  else return false;
}

function getUnusedIndex(fieldObjectArray){
  var i = 0;
  for(i = 0; i < fieldObjectArray.length; i++){
    if(!fieldObjectArray[i].isUsing) return i;
  }
  return -1;
}

function getCurrentBossCount(){
  var i = 0;
  var count = 0;
  for(i = 0, l = enemyObject.length; i < l; i++){
    if(enemyObject[i].isBoss) count++;
  }
  return count;
}

function getUsingCount(fieldObjectArray){
  var i = 0;
  var count = 0;
  for(i = 0, l = fieldObjectArray.length; i < l; i++){
    if(fieldObjectArray[i].isUsing) count++;
  }
  return count;
}

function getCurrentEnemyCount(idxIdValue){
  var i = 0;
  var count = 0;
  for(i = 0, l = enemyObject.length; i < l; i++){
    if(enemyObject[i].idxId == idxIdValue) count++;
  }
  return count;
}

function getRandomIndex(fieldObjectArray){
  var i = 0;
  var randomIndex = Math.floor(Math.random() * getUsingCount(fieldObjectArray));
  for(i = randomIndex; i < fieldObjectArray.length; i++){
    if(fieldObjectArray[i].isUsing) return i;
  }
  for(i = 0; i < randomIndex; i++){
    if(fieldObjectArray[i].isUsing) return i;
  }
  return -1;
}

function allEnemyDie(){
  var i;
  for(i = 0; i < enemyObject.length; i++){
    if(enemyObject[i].isUsing){
      enemyObject[i].hp = 0;
    }
  }
}

var weaponObject = new Array(100);
for(i = 0; i < weaponObject.length; i++) weaponObject[i] = new WeaponObject();
var enemyObject = new Array(100);
for(i = 0; i < enemyObject.length; i++) enemyObject[i] = new EnemyObject();
var effectObject = new Array(100);
for(i = 0; i < effectObject.length; i++) effectObject[i] = new EffectObject();
var enemyBulletObject = new Array(100);
for(i = 0; i < enemyBulletObject.length; i++) enemyBulletObject[i] = new EnemyBulletObject();

var insert = {
  weapon: function(idxId, attack, x, y){
    var index = getUnusedIndex(weaponObject);
    if(index >= 0){
      weaponObject[index].insert(idxId, attack, x, y);
    }
  },
  // FieldObject.prototype.insert = function(objectType, idxId, spriteId, x, y, w, h, scale)
  enemy: function(idxId, x, y){
    var index = getUnusedIndex(enemyObject);
    if(index >= 0){
      enemyObject[index].insert(idxId, x, y);
    }
  },
  boss: function(idxId, x, y){
    var index = getUnusedIndex(enemyObject);
    if(x == null) x = (Math.random() * 40) + 240;
    if(y == null) y = (Math.random() * 120);
    if(index >= 0){
      enemyObject[index].insert(idxId, x, y, true);
    }
  },
  effect: function(idxId, x, y, scale, repeatCount, afterDelay, rotateNumber){
    var index = getUnusedIndex(effectObject);
    if(index >= 0){
      effectObject[index].insert(idxId, x, y, scale, repeatCount, afterDelay, rotateNumber);
    }
  },
  enemyBullet: function(idxId, x, y){
    var index = getUnusedIndex(enemyBulletObject);
    if(index >= 0){
      enemyBulletObject[index].insert(idxId, x, y);
    }
  }
}

var player = {
//move stat
x:0, y:0, speedX:2, speedY:2, w:2, h:1, scale:1,

//sprite
sprId: sprId.PLAYER,

//hp, shield, mana
hp:120, hpMax:120,
shield:200, shieldMax:200, shieldRecovery:0,
mp:0, mpMax:1800, mpRecovery:0,
damage:0,

//lv, exp
lv:0, exp:0, lvMax:40,
expTable: [ 5000,
  5000, 5500, 6000, 6500, 7000, 10000, 10000, 10000, 12000, 12500,
  14000, 14000, 14000, 15000, 15000, 16000, 17000, 18000, 19000, 20000,
  21200, 22400, 23600, 24800, 25000, 26000, 27000, 28000, 29000, 30000,
  33000, 33300, 33600, 33900, 34200, 35000, 59000, 75000, 90000, 99000,
  99000],
expGain:0,

//attack
attack:100,
setAttackValue: function(){
  var baseAttack = 100 + (this.lv * 1);
  var levelBonus = (baseAttack / 100) * (this.lv);
  this.attack = Math.floor(baseAttack + levelBonus);
},
getExpMax: function(lv){
  if(lv >= this.expTable.length || this.lv >= this.expTable.length) return -1;
  else if(lv == null) return this.expTable[this.lv];
  else return this.expTable[lv];
},
lvUpCheck: function(){
  var isLvUp = false;
  while(this.lv < this.expTable.length && this.exp >= this.getExpMax()){
    this.exp -= this.getExpMax();
    this.lv++;
    isLvUp = true;
  }
  if(isLvUp) sound.play(sfxId.LEVELUP);
},
plusExp: function(value){
  this.exp += value;
  if(this.lv < this.lvMax){
    this.lvUpCheck();
  } else if(this.lv >= this.lvMax){
    this.lv = this.lvMax;
  }
},
damageInsert: function(damageValue){
  if(damageValue <= 0) return;
  this.damage += damageValue;
},
levelAdjust: function(roundNumber){
  if(roundNumber == 0){
    return;
  } else if(roundNumber >= 1 && roundNumber <= 5){
    this.lv = (roundNumber - 1) * 5;
  } else if(roundNumber >= 6){
    this.lv = 25;
  }
},

skill : [
  {
    delay: 0,
    delayCount: 0,
    idxId: idxId.SKILL_LASER,
    repeatCount: 0,
    coolTime: 0
  },
  {
    delay: 0,
    delayCount: 0,
    idxId: idxId.SKILL_LINELASER,
    repeatCount: 0,
    coolTime: 0
  },
  {
    delay: 0,
    delayCount: 0,
    idxId: idxId.SKILL_SWORD,
    repeatCount: 0,
    coolTime: 0
  }
],
skillInsert: function(index, idxId){
  this.skill[index].idxId = idxId;
},
skillSetting: function(idxId1, idxId2, idxId3){
  this.skill[0].idxId = idxId1;
  this.skill[1].idxId = idxId2;
  this.skill[2].idxId = idxId3;
},
skillUse: function(index){
  var skill = this.skill[index];
  if(skill.coolTime >= 1) return;

  var delay = 0;
  var delayCount = 0;
  var repeatCount = 1;
  var coolTime = 0;
  switch(skill.idxId){
    case idxId.SKILL_LASER: delay = 6, repeatCount = 40, coolTime = 60*20, delayCount = -30; sound.play(sfxId.SKILL_LASER_PRE); break; 
    case idxId.SKILL_MISSILE: delay = 20, repeatCount = 2, coolTime = 60*24; break;
    case idxId.SKILL_LINELASER: coolTime = 60*24, repeatCount = 40; delay = 6; break;
    case idxId.SKILL_SWORD: coolTime = 60*24; break;
    case idxId.SKILL_FIRE: coolTime = 60*30; break;
    case idxId.SKILL_THUNDER: delay = 30, repeatCount = 4, coolTime = 60*30; delayCount = -12; sound.play(sfxId.SKILL_THUNDER); break;
    case idxId.SKILL_ARROW: delay = 12, repeatCount = 20, coolTime = 60*20; break;
  }

  skill.delay = delay;
  skill.delayCount = delayCount;
  skill.coolTime = coolTime;
  skill.repeatCount = repeatCount;
},
skillProcess: function(){
  for(var i = 0; i < this.skill.length; i++){
    var skill = this.skill[i];
    var x = this.x;
    var y = this.y;
    var attack = this.attack;

    skill.delayCount++;
    skill.coolTime--;
    if(skill.delayCount >= skill.delay && skill.repeatCount > 0){
      skill.delayCount = 0;
      skill.repeatCount--;
      switch(skill.idxId){
        case idxId.SKILL_LASER:
          // attack ( 500% x 5 ) x shot 40 = 100000%
          // 20 second: 5000%/second
          attack *= 5;
          sound.play(sfxId.SKILL_LASER_RUNCH);
          insert.weapon(idxId.SKILL_LASER, attack, x, y+24);
          insert.weapon(idxId.SKILL_LASER, attack, x, y+12);
          insert.weapon(idxId.SKILL_LASER, attack, x, y);
          insert.weapon(idxId.SKILL_LASER, attack, x, y-12);
          insert.weapon(idxId.SKILL_LASER, attack, x, y-24);
          break;
        case idxId.SKILL_MISSILE:
          // attack ( 1050% x 17 ) x shot 8 = 142800%
          // 24 second: 2380%/second
          attack *= 10.5;
          sound.play(sfxId.SKILL_MISSILE);
          insert.weapon(idxId.SKILL_MISSILE, attack, x-64, y+24);
          insert.weapon(idxId.SKILL_MISSILE, attack, x+32, y+24);
          insert.weapon(idxId.SKILL_MISSILE, attack, x-64, y-24);
          insert.weapon(idxId.SKILL_MISSILE, attack, x+32, y-24);
          break;
        case idxId.SKILL_LINELASER:
          // attack ( 100% ) x 3 x 10 x 40 = 120000%
          // 24 second: 5000%/second
          attack *= 1;
          sound.play(sfxId.SKILL_LINELASER);
          insert.weapon(idxId.SKILL_LINELASER, attack, x-16, y-24+(Math.random()*48));
          insert.weapon(idxId.SKILL_LINELASER, attack, x-16, y-24+(Math.random()*48));
          insert.weapon(idxId.SKILL_LINELASER, attack, x-16, y-24+(Math.random()*48));
          break;
        case idxId.SKILL_FIRE:
          // attack ( 300% ) x 240 = 72000%
          // 30 second: 2400%/second
          attack *= 3;
          sound.play(sfxId.SKILL_FIRE);
          insert.weapon(idxId.SKILL_FIRE, attack, 0, 0);
          break;
        case idxId.SKILL_THUNDER:
          // attack ( 450% x 84(21x4) ) x 4 = 151200%
          // 24 second: 5040%/second
          attack *= 4.5;
          sound.play(sfxId.SKILL_THUNDER_RUNCH);
          insert.weapon(idxId.SKILL_THUNDER, attack, x-24, y);
          break;
        case idxId.SKILL_SWORD:
          // attack ( 3000% ) x 40 = 120000%
          // 24 second: 5000%/second
          attack *= 30;
          sound.play(sfxId.SKILL_SWORD);
          insert.weapon(idxId.SKILL_SWORD, attack, x, y);
          break;
        case idxId.SKILL_ARROW:
          // attack ( 250% x 5 ) x shot 4 x 20 = 100000%
          // 20 second: 5000%/second
          attack *= 2.5;
          sound.play(sfxId.SKILL_ARROW);
          insert.weapon(idxId.SKILL_ARROW, attack, x, y-16+((skill.repeatCount % 4) * 8));
          insert.weapon(idxId.SKILL_ARROW, attack, x, y-8+((skill.repeatCount % 4) * 8));
          insert.weapon(idxId.SKILL_ARROW, attack, x-16, y-16+((skill.repeatCount % 4) * 8));
          insert.weapon(idxId.SKILL_ARROW, attack, x-16, y-8+((skill.repeatCount % 4) * 8));
          break;
      }
    }
  }
},

weapon: {
  delay: 6,
  delayCount: 0,
  w: 1, h: 1, scale: 1,
  idxId: idxId.W_LASER,
  isAuto: false,
  autoType: '',
  equipListIndex: 0,
  // equipList: [idxId.W_LASER, idxId.W_MISSILE, idxId.W_LINELASER, idxId.W_SWORD],
  equipList: [idxId.W_LASER, idxId.W_FIRE, idxId.W_THUNDER, idxId.W_ARROW],
  // equipList: [idxId.W_LASER, idxId.W_LASER, idxId.W_LASER, idxId.W_LASER],
  weaponInit: function(){
    this.equipListIndex = 4;
    this.weaponChange();
  },
  weaponChange: function(){
    this.equipListIndex++;
    if(this.equipList[this.equipListIndex] == idxId.UNUSED){
      for(i = this.equipListIndex; i < this.equipList.length; i++){
        if(this.equipList[i] != idxId.UNUSED)  break;
      }
    }
    if(this.equipListIndex >= this.equipList.length) this.equipListIndex = 0;
    this.idxId = this.equipList[this.equipListIndex];
    switch(this.idxId){
      case idxId.W_LASER: this.delay = 6; break;
      case idxId.W_MISSILE: this.delay = 60; break;
      case idxId.W_LINELASER: this.delay = 15; break;
      case idxId.W_SWORD: this.delay = 120; break;
      case idxId.W_FIRE: this.delay = 12; break;
      case idxId.W_THUNDER: this.delay = 60; break;
      case idxId.W_ARROW: this.delay = 6; break;
    }
  }
},
weaponInsert:function(index, idxIdValue){
  this.weapon.equipList[index] = idxIdValue;
  this.weapon.weaponInit();
},

init:function(){
  this.x = 0;
  this.y = 64;
  this.lv = 0;
  this.exp = 0;
  this.hp = this.hpMax;
  this.shield = this.shieldMax;
  this.shieldRecovery = 0;
  this.weapon.weaponInit();
  //this.skillSetting(idxId.SKILL_LASER, idxId.SKILL_LINELASER, idxId.SKILL_SWORD);
  this.skill[0].coolTime = 0;
  this.skill[1].coolTime = 0;
  this.skill[2].coolTime = 0;
  this.damage = 0;
},
move:function(){
  if (btn(btnId.LEFT) && this.x > 0) this.x -= this.speedX;
  if (btn(btnId.RIGHT) && this.x + 16 < FIELDX) this.x += this.speedX;
  if (btn(btnId.UP) && this.y > 0) this.y -= this.speedY;
  if (btn(btnId.DOWN) && this.y + 8 < FIELDY) this.y += this.speedY;
},
display:function(){

  //player
  display.object(this);

  //percent calculator
  var shieldPercent = (this.shield / this.shieldMax);
  var hpPercent = (this.hp / this.hpMax);
  var expPercent = Math.floor( ( this.exp / this.getExpMax() ) * 100);
  if(expPercent >= 100)  expPercent = 100;

  //view position
  var LINE1 = 120, LINE2 = 128, POSX = 128;
  var FONT_SMALL_WIDTH = 4, FONT_SMALL_HEIGHT = 5;
  var SHIELD_X = 0, HP_X = 0, LV_X = 0;
  var RECT_SIZE = 120, RECT_HALF = 60;
  
  //bar background
  display.rect(HP_X, LINE1, RECT_HALF, 8, colorId.DARK_GRAY);
  display.rect(SHIELD_X+RECT_HALF, LINE1, RECT_HALF, 8, colorId.DARK_GRAY);
  display.rect(LV_X, LINE2, RECT_SIZE, 8, colorId.DARK_GRAY);

  //bar
  display.shadowRect(HP_X, LINE1, RECT_HALF*hpPercent, 8, colorId.DARK_BLUE, colorId.BLUE_GRAY);
  display.shadowRect(SHIELD_X+(RECT_SIZE/2*hpPercent), LINE1, RECT_HALF*shieldPercent, 8, colorId.LIGHT_BLUE, colorId.BLUE_GRAY);
  display.shadowRect(LV_X, LINE2, RECT_SIZE*expPercent/100, 8, colorId.BROWN, colorId.DARK_RED);

  //hp, shield, level
  display.smallText(this.hp + " + " + this.shield +"/"+ this.shieldMax, SHIELD_X, LINE1, colorId.WHITE, colorId.BLACK);
  display.smallText("LV " + this.lv + ": " + this.exp + "/" + this.getExpMax() + " " + expPercent + "%", LV_X, LINE2, colorId.YELLOW, colorId.BLACK);

  //skill
  for(var i = 0; i < 3; i++){
    var coolTime = Math.round(this.skill[i].coolTime/60);
    if(coolTime <= 0) coolTime = 0;

    if(coolTime >= 1){
      display.sprite(sprId.BUTTONX_DISABLE+i, POSX+(i*32), LINE1, 1, 1, 1);
      display.smallText(coolTime, POSX+10+(i*32), LINE1, colorId.WHITE, colorId.LIGHT_GRAY);
    } else {
      display.sprite(sprId.BUTTONX+i, POSX+(i*32), LINE1, 1, 1, 1);
      switch(this.skill[i].idxId){
        case idxId.SKILL_LASER: display.sprite(sprId.SKILL_LASER, POSX+10+(i*32), LINE1, 2, 1, 1); break;
        case idxId.SKILL_MISSILE: display.sprite(sprId.SKILL_MISSILE, POSX+10+(i*32), LINE1, 2, 1, 1); break;
        case idxId.SKILL_LINELASER: display.sprite(sprId.SKILL_LINELASER, POSX+10+(i*32), LINE1, 2, 1, 1); break;
        case idxId.SKILL_SWORD: display.sprite(sprId.SKILL_SWORD, POSX+10+(i*32), LINE1, 2, 1, 1); break;
        case idxId.SKILL_FIRE: display.sprite(sprId.SKILL_FIRE, POSX+10+(i*32), LINE1, 2, 1, 1); break;
        case idxId.SKILL_THUNDER: display.sprite(sprId.SKILL_THUNDER, POSX+10+(i*32), LINE1, 2, 1, 1); break;
        case idxId.SKILL_ARROW: display.sprite(sprId.SKILL_ARROW, POSX+10+(i*32), LINE1, 2, 1, 1); break;
        
      }
    }
    
  }
},
processAttack:function(){
  this.weapon.delayCount++;
  if(this.weapon.delayCount >= this.weapon.delay){
    this.weapon.delayCount -= this.weapon.delay;

    var id = this.weapon.idxId;
    var x = this.x+8;
    var y = this.y;
    var attack = this.attack;
    var lv = this.lv;
    switch(id){
      case idxId.W_LASER:
        // attack 100% x per shot 4 x second per 10 = 4000%
        // every level +5, attack 100% x per shot 1 x second per 10 = 1000%
        // max level 20, max total 8000%
        insert.weapon(idxId.W_LASER, attack, x, y);
        insert.weapon(idxId.W_LASER, attack, x, y+8);
        insert.weapon(idxId.W_LASER_UP, attack, x, y-8);
        insert.weapon(idxId.W_LASER_DOWN, attack, x, y+8);
        if(lv >= 5)  insert.weapon(idxId.W_LASER, attack, x, y+4);
        if(lv >= 10) insert.weapon(idxId.W_LASER, attack, x, y-4);
        if(lv >= 15) insert.weapon(idxId.W_LASER_UP, attack, x, y-12);
        if(lv >= 20) insert.weapon(idxId.W_LASER_DOWN, attack, x, y+12);
        break;
      case idxId.W_MISSILE:
        // missile: attack ( 100%x1 + 100%x8 ) x per shot 2 x second per 1 = 1800%
        // rocket: 100% x per shot 3 x avg hit 6(max hit 15) = 1800%
        // every level +5, missile: attack ( 100%x1 + 100%x8 ) x per shot 1 x second per 1 = 900%
        // max level 20, max total: 7200%
        insert.weapon(idxId.W_ROCKET_DOWN, attack, x, y);
        insert.weapon(idxId.W_ROCKET_UP, attack, x, y);
        insert.weapon(idxId.W_ROCKET_CENTER, attack, x, y);
        insert.weapon(id, attack, x, y);
        insert.weapon(id, attack, x, y);
        if(lv >= 5) insert.weapon(id, attack, x, y);
        if(lv >= 10) insert.weapon(id, attack, x, y);
        if(lv >= 15) insert.weapon(id, attack, x, y);
        if(lv >= 20) insert.weapon(id, attack, x, y);
        break;
      case idxId.W_LINELASER:
        // attack ( 50%x10 ) x per shot 2 x second per 4 = 4000%
        // every level +10, ttack ( 50%x10 ) x per shot 1 x second per 4 = 2000%
        // max level 20, total 8000%
        insert.weapon(id, attack*0.5, x, y);
        insert.weapon(id, attack*0.5, x, y);
        if(lv >= 10) insert.weapon(id, attack*0.5, x, y+10);
        if(lv >= 20) insert.weapon(id, attack*0.5, x, y-10);
        break;
      case idxId.W_SWORD:
        // sword: attack ( 100%x15 ) x per shot 2 x second per 0.5 = 1500%
        // shield: attack ( 100%x30 ) x per shot 2 x second per 0.5 = 3000%
        // max level 20, total 3750% + 4500%
        insert.weapon(id, attack, x, y+12);
        insert.weapon(id, attack, x, y-12);
        insert.weapon(idxId.W_SHIELD, attack, x+24, y-12);
        insert.weapon(idxId.W_SHIELD, attack, x+24, y+12);
        if(lv >=  5) insert.weapon(id, attack, x, y+24);
        if(lv >= 10) insert.weapon(id, attack, x, y-24);
        if(lv >= 15) insert.weapon(idxId.W_SHIELD, attack, x+24, y);
        if(lv >= 20) insert.weapon(id, attack, x, y);
        break;
      case idxId.W_FIRE:
        // fire: attack ( 50%x10 ) per shot 4 x second per 5 = 10000%
        // max level 20, total: 20000%
        insert.weapon(id, attack*0.5, x, y-8+(Math.random()*24));
        insert.weapon(id, attack*0.5, x, y-8+(Math.random()*24));
        insert.weapon(idxId.W_FIRE_UP, attack*0.5, x, y-8+(Math.random()*24));
        insert.weapon(idxId.W_FIRE_DOWN, attack*0.5, x, y-8+(Math.random()*24));
        if(lv >=  5) insert.weapon(id, attack*0.5, x+24, y-8+(Math.random()*24));
        if(lv >= 10) insert.weapon(id, attack*0.5, x+24, y-8+(Math.random()*24));
        if(lv >= 15) insert.weapon(id, attack*0.5, x+24, y-8+(Math.random()*24));
        if(lv >= 20) insert.weapon(id, attack*0.5, x+24, y-8+(Math.random()*24));
        break;
      case idxId.W_THUNDER:
        // thunder: attack ((100%x1) + (100%x4)) x 4 x per shot 2 x second per 1 = 4000%
        // max level 20, total: 4000%
        insert.weapon(id, attack, x, y);
        insert.weapon(id, attack, x, y-8);
        if(lv >= 10) insert.weapon(id, attack, x, y+8);
        if(lv >= 20) insert.weapon(id, attack, x, y+16);
        break;
      case idxId.W_ARROW:
        // arrow: attack 100% x per shot 4 x second per 10 = 4000%
        // max level 20, total: 8000%
        insert.weapon(idxId.W_ARROW_BROWN, attack, x, y-8);
        insert.weapon(idxId.W_ARROW_BROWN, attack, x, y-6);
        insert.weapon(idxId.W_ARROW_GREEN, attack, x, y+6);
        insert.weapon(idxId.W_ARROW_GREEN, attack, x, y+8);
        if(lv >= 5)  insert.weapon(idxId.W_ARROW_BROWN, attack, x, y);
        if(lv >= 10) insert.weapon(idxId.W_ARROW_GREEN, attack, x, y);
        if(lv >= 15) insert.weapon(idxId.W_ARROW_BROWN, attack, x, y+2);
        if(lv >= 20) insert.weapon(idxId.W_ARROW_GREEN, attack, x, y-2);
        break;
      default:
        //insert.weapon(this.weapon.idxId, this.attack, this.x, this.y);
        break;
    }
  }
},
processDamage:function(){
  if(this.damage <= 0) return;

  if(this.shield >= this.damage){
    if(this.damage <= 16) sound.play(sfxId.DAMAGE1);
    else sound.play(sfxId.DAMAGE2);
    this.shield -= this.damage;
  } else if(this.shield >= 0 && this.shield <= this.damage){
    if(this.damage <= 12) sound.play(sfxId.DAMAGE2);
    else sound.play(sfxId.DAMAGE3);
    var leftValue = this.damage - this.shield;
    this.shield = 0;
    this.hp -= Math.floor(leftValue / 2);
  } else {
    if(this.damage <= 8) sound.play(sfxId.DAMAGE2);
    else sound.play(sfxId.DAMAGE3);
    if(this.damage <= 1) this.damage = 2;
    this.hp -= Math.floor(this.damage / 2);
  }
  this.damage = 0;

  if(player.hp <= 0){
    sound.play(sfxId.PLAYER_DIE);
  }
},
process:function(){
  if(player.hp <= 0) return;

  if(btnp(btnId.A)) this.weapon.weaponChange();
  if(btnp(btnId.X)) this.skillUse(0);
  if(btnp(btnId.Y)) this.skillUse(1);
  if(btnp(btnId.B)) this.skillUse(2);
  
  this.shieldRecovery += 1;
  if(this.shieldRecovery >= 60 && this.shield < this.shieldMax){
    this.shield++;
    this.shieldRecovery = 0;
  }

  this.move();
  this.display();
  this.processAttack();
  this.processDamage();
  this.skillProcess();
  this.setAttackValue();
}
}

var field = {
  round:1,
  time:0,
  timeEndPosition: [0, 170, 180, 120, 210, 24, 160, 45, 20, 0, 0, 0, 0],
  timeFrame:0,
  timeTotalFrame:0,
  timeStopTime:0,
  timeStopFrame:0,
  timeStopTotalFrame:0,
  flagNumber:0,
  delay:0,
  delayCount:0,
  isBossMode:false,
  isRoundClear:false,
  isTimeStop:false,

  init:function(){
    this.roundStatInit();
    //this.round = 1;
  },

  display: function(){
    // this.backgroundDisplay();

    var LINE1 = 120, LINE2 = 128, POSX = 128;
    display.rect(POSX, LINE2, 120, 8, colorId.DARK_GRAY);
    display.smallText("ROUND: " + this.round + " TIME: " + this.time + "/" + this.timeEndPosition[this.round] + ",+" + this.timeStopTime, POSX, LINE2, colorId.PEACH, colorId.DARK_RED);

    if(this.isBossMode){
      for(i = 0, l = enemyObject.length; i < l; i++){
        if(enemyObject[i].isUsing && enemyObject[i].isBoss){
          var bossHpPercent = enemyObject[i].hp / enemyObject[i].hpMax;
          display.rect(0, 0, 240, 8, colorId.DARK_GRAY);
          display.shadowRect(0, 0, 240*bossHpPercent, 8, colorId.LIGHT_GREEN, colorId.DARK_GREEN);
          
          display.smallText("boss hp: " + enemyObject[i].hp + "/" + enemyObject[i].hpMax, 0, 0, colorId.WHITE, colorId.DARK_BLUE);
          break;
        }
      }
    }
  },

  backgroundX:0,
  backgroundY:0,
  backgroundSpeedX:0,
  backgroundNumber:0,
  backgroundInit:function(){
    this.backgroundX = 0;
    this.backgroundY = 0;
    this.backgroundSpeedX = 0;
    this.backgroundNumber = 0;
  },
  backgroundDisplay: function(){
    var tileX = Math.floor(this.backgroundX / 8);
    var outputX = this.backgroundX % 8;
    
    switch(this.round){
      case 1:
        this.backgroundY = 17*6;
        if(this.backgroundX <= 240*8){
          this.backgroundX += 2;
        } else {
          this.backgroundX = 0;
        }
        break;
      case 2:
        this.backgroundY = 17*1;
        if(this.backgroundX < 240*7){
          this.backgroundX += 0.17;
        } else {
          this.backgroundX = 240*7;
        }
        break;
      case 3:
        if(this.time <= 20){
          this.backgroundX += 1;
          this.backgroundY = 17*2;
          if(this.backgroundX >= 240*1){
            this.backgroundX = 0;
          }
        } else if(this.time <= 40){
          this.backgroundX += 1;
          this.backgroundY = 17*2;
          if(this.backgroundX >= 240*3){
            this.backgroundX = 240*2;
          }
        } else if(this.time <= 60){
          this.backgroundX += 1;
          this.backgroundY = 17*2;
          if(this.backgroundX >= 240*5){
            this.backgroundX = 240*4;
          }
        } else if(this.time <= 80){
          this.backgroundX += 1;
          this.backgroundY = 17*2;
          if(this.backgroundX >= 240*7){
            this.backgroundX = 240*6;
          }
        } else if(this.time >= 81){
          if(this.backgroundX < 240*7 && this.backgroundY == 17*2){
            this.backgroundY = 17*2;
            this.backgroundX += 1;
          } else if(this.backgroundX >= 240*7 && this.backgroundY == 17*2){
            this.backgroundY = 17*3;
            this.backgroundX = 0;
          } else if(this.backgroundX < 240*5 && this.backgroundY == 17*3){
            this.backgroundY = 17*3;
            this.backgroundX += 1;
          }
        }
        break;
      case 4:
        if(this.backgroundY != 17*4 && this.backgroundY != 17*5){
          this.backgroundY = 17*4;
        }

        if(this.backgroundX < 240*7 && this.backgroundY == 17*4){
          this.backgroundY = 17*4;
          this.backgroundX += 0.28;
        } else if(this.backgroundX >= 240*7 && this.backgroundY == 17*4){
          this.backgroundY = 17*5;
          this.backgroundX = 0.28;
        } else if(this.backgroundX < 240*7 && this.backgroundY == 17*5){
          this.backgroundY = 17*5;
          this.backgroundX += 0.28;
        }
      break;
    case 5:
      if(this.time >= 5 && this.time <= 20 && this.time % 2 == 0){
        this.backgroundX = 240*2;
        this.backgroundY = 17*0;
      } else if(this.time >= 5 && this.time <= 20) {
        this.backgroundX = 240*3;
        this.backgroundY = 17*0;
      } else if(this.time >= 21){
        this.backgroundX = 0;
        this.backgroundY = 0;
      }
      break;
    case 6:
      if(this.time <= this.timeEndPosition[6] - 20){
        this.backgroundY = 17*6;
        if(this.backgroundX <= 240*8){
          this.backgroundX += 2;
        } else {
          this.backgroundX = 0;
        }
      } else if(this.time <= this.timeEndPosition[6] - 2){
        if(this.backgroundY == 17*6){
          if(this.backgroundX % 240 >= 8 && this.backgroundX % 240 <= 240){
            this.backgroundX += 2;
          } else {
            this.backgroundY = 17*7;
            this.backgroundX = 0;
          }
        } else {
          this.backgroundY = 17*7;
          if(this.backgroundX < 240*3){
            this.backgroundX += 1;
          } else {
            
          }
        }
      }
      break;
    case 7:
      if(this.time >= 0){
        this.backgroundX = 240*4;
        this.backgroundY = 17*0;
      }
      break;
    default:
      this.backgroundX = 0;
      this.backgroundY = 0;
      break;
    }

    display.map(tileX, this.backgroundY, 30+1, 17, 0-outputX, 0);
  },
  objectProcess: function(){
    var i;
    for(i = 0, l = enemyObject.length; i < l; i++){
      if(enemyObject[i].isUsing){
        enemyObject[i].process();
        enemyObject[i].display();
      }
    }
    for(i = 0, l = weaponObject.length; i < l; i++){
      if(weaponObject[i].isUsing){
        weaponObject[i].process();
        weaponObject[i].display();
      }
    }
    for(i = 0, l = effectObject.length; i < l; i++){
      if(effectObject[i].isUsing){
        effectObject[i].process();
        effectObject[i].display();
      }
    }
    for(i = 0, l = enemyBulletObject.length; i < l; i++){
      if(enemyBulletObject[i].isUsing){
        enemyBulletObject[i].process();
        enemyBulletObject[i].display();
      }
    }
  },
  timeProcess: function(){
    this.delayCount++;
    if(this.isTimeStop){
      this.timeStopFrame++;
      this.timeStopTotalFrame++;
      if(this.timeStopFrame >= 60){
        this.timeStopFrame -= 60;
        this.timeStopTime++;
      }
    } else {
      this.timeFrame++;
      this.timeTotalFrame++;
      if(this.timeFrame >= 60){
        this.timeFrame -= 60;
        this.time++;
      }
    }
  },
  roundProcess: function(){
    if(mainSystem.playerDieDelay >= 1){
      return;
    }

    switch(this.round){
      case 0: this.test(); break;
      case 1: this.r1(); break;
      case 2: this.r2(); break;
      case 3: this.r3(); break;
      case 4: this.r4(); break;
      case 5: this.r5(); break;
      case 6: this.r6(); break;
      case 7: this.r7(); break;
    }

    if(this.isRoundClear){
      this.roundStatInit();
      this.round++;
    }
  },
  roundStatInit: function(){
    this.time = 0;
    this.timeFrame = 0;
    this.timeTotalFrame = 0;
    this.timeStopTime = 0;
    this.timeStopFrame = 0;
    this.timeStopTotalFrame = 0;
    this.flagNumber = 0;
    this.isBossMode = false;
    this.isRoundClear = false;
    this.isTimeStop = false;
    this.backgroundInit();
  },
  process: function(){
    this.backgroundDisplay();
    this.objectProcess();
    this.timeProcess();
    this.roundProcess();
    this.display();
  },
  test:function(){
    var time = this.time;
    if(time >= 1 && time <= 120){
      this.isBossMode = true;
      if(getCurrentBossCount() <= 0){
        insert.boss(idxId.BOSS_TEST);
      }
    }

    if(time >= 1 && time <= 20){
      display.text("this is test round.", 0, 16)
      display.text("if you want exit this round", 0, 24);
      display.text("move to boss and die.", 0, 32);
      display.text("or 120 seconds wait.", 0, 40)
    }

    if(time >= 121){
      display.text("test will end. you will die.", 0, 16, colorId.RED, 1);
    }

    if(time >= 125){
      player.damageInsert(1000);
    }
  },
  enemyInsert:function(idxIdValue, timeRangeMin, timeRangeMax, currentEnemyLimit, fieldEnemyLimit, delay, encounterPercent){
    var currentEnemyCount = getCurrentEnemyCount(idxIdValue);
    var fieldEnemyCount = getUsingCount(enemyObject);
    var time = this.time;
    var frame = this.timeFrame;
    var x = (Math.random() * 40) + 240;
    var y = (Math.random() * 120);
    var d = this.delayCount;0
    var randomNumber = Math.floor(Math.random() * 100) + 1;

    if(encounterPercent == null) encounterPercent = 100;
    if(fieldEnemyLimit == null) fieldEnemyLimit = 100;
 
    if(time >= timeRangeMin && time <= timeRangeMax 
       && currentEnemyCount < currentEnemyLimit && fieldEnemyCount < fieldEnemyLimit 
       && d % delay == 0 && randomNumber <= encounterPercent){
      insert.enemy(idxIdValue, x, y);
    }
  },
  r1:function(){
    var time = this.time;
    if(time >= 1 && time <= this.timeEndPosition[1] - 10){
      musicSystem.play(musId.ROUND1);
    }

    if(time >= 2 && time <= 30){
      this.enemyInsert(idxId.E101, 2,  30, 6, 18, 30);
      this.enemyInsert(idxId.E102, 11, 20, 6, 18, 30);
      this.enemyInsert(idxId.E103, 21, 30, 6, 18, 30);
    } else if(time >= 31 && time <= 60){
      this.enemyInsert(idxId.E111, 33, 41, 8, 12, 30);
      this.enemyInsert(idxId.E112, 42, 50, 8, 12, 30);
      
      this.enemyInsert(idxId.E111, 51, 60, 8, 16, 20);
      this.enemyInsert(idxId.E112, 51, 60, 8, 16, 20);
    } else if(time >= 61 && time <= 90){
      this.enemyInsert(idxId.E104, 61, 70, 16, 16, 15);

      this.enemyInsert(idxId.E121, 68, 80,  6, 16, 30, 50);
      this.enemyInsert(idxId.E122, 68, 80,  6, 16, 30, 50);

      this.enemyInsert(idxId.E121, 81, 90,  6, 16, 12, 60);
      this.enemyInsert(idxId.E122, 81, 90,  6, 16, 12, 40);
      this.enemyInsert(idxId.E103, 81, 90,  5, 16, 12, 50);
      this.enemyInsert(idxId.E104, 81, 90,  5, 16, 12, 50);
    } else if(time >= 91 && time <= 120){
      this.enemyInsert(idxId.E101, 91, 99, 10, 30, 20);
      this.enemyInsert(idxId.E102, 91, 99, 10, 30, 20);
      this.enemyInsert(idxId.E103, 91, 99,  5, 30, 30);
      this.enemyInsert(idxId.E104, 91, 99,  5, 30, 30);

      this.enemyInsert(idxId.E103, 100, 120, 5, 30, 40);
      this.enemyInsert(idxId.E104, 100, 120, 5, 30, 40);
      this.enemyInsert(idxId.E111, 100, 120, 5, 30, 40);
      this.enemyInsert(idxId.E112, 100, 120, 5, 30, 40);
      this.enemyInsert(idxId.E121, 100, 120, 5, 30, 40);
      this.enemyInsert(idxId.E122, 100, 120, 5, 30, 40);
    } else if(time >= 121 && time <= this.timeEndPosition[1] - 10){
      this.enemyInsert(idxId.E121, 121, 135, 8, 16, 30);
      this.enemyInsert(idxId.E122, 121, 135, 8, 16, 30);

      this.enemyInsert(idxId.E121, 136, 150, 7, 16, 30);
      this.enemyInsert(idxId.E122, 136, 150, 7, 16, 30);
      this.enemyInsert(idxId.E123, 132, 145, 2, 16, 60);
      this.enemyInsert(idxId.E123, 146, 160, 8, 16, 60);
    }

    if(time == this.timeEndPosition[1] - 5 && !this.isBossMode && getCurrentBossCount() <= 0 && this.flagNumber == 0){
      this.isBossMode = true;
      this.isRoundClear = false;
      this.isTimeStop = true;
      insert.boss(idxId.BOSS1);
      musicSystem.play(musId.BOSS_BATTLE);
      this.flagNumber = 1;
    }

    if(this.isBossMode && getCurrentBossCount() <= 0){
      this.isTimeStop = false;
      musicSystem.stop();
    }

    if(time >= this.timeEndPosition[1]){
      this.isRoundClear = true;
    }
  },
  r2:function(){
    var time = this.time;
    if(time >= 1 && time <= this.timeEndPosition[2] - 15){
      musicSystem.play(musId.ROUND2_POTION_BATTLE);
    }


    if(time >= 2 && time <= 40){
      this.enemyInsert(idxId.E201, 2,  7,  6, 10, 30);
      this.enemyInsert(idxId.E202, 8,  14, 6, 10, 30);
      this.enemyInsert(idxId.E203, 15, 21, 6, 10, 30);
      this.enemyInsert(idxId.E204, 22, 28, 6, 10, 30);

      this.enemyInsert(idxId.E201, 29, 40, 3, 12, 20, 30);
      this.enemyInsert(idxId.E202, 29, 40, 3, 12, 20, 30);
      this.enemyInsert(idxId.E203, 29, 40, 3, 12, 20, 30);
      this.enemyInsert(idxId.E204, 29, 40, 3, 12, 20, 30);
    } else if(time >= 41 && time <= 80){
      this.enemyInsert(idxId.E211, 41, 47, 6, 10, 30);
      this.enemyInsert(idxId.E212, 48, 54, 6, 10, 30);
      this.enemyInsert(idxId.E213, 55, 61, 6, 10, 30);
      this.enemyInsert(idxId.E214, 62, 68, 6, 10, 30);

      this.enemyInsert(idxId.E211, 69, 80, 3, 12, 20, 30);
      this.enemyInsert(idxId.E212, 69, 80, 3, 12, 20, 30);
      this.enemyInsert(idxId.E213, 69, 80, 3, 12, 20, 30);
      this.enemyInsert(idxId.E214, 69, 80, 3, 12, 20, 30);
    } else if(time >= 81 && time <= 120){
      this.enemyInsert(idxId.E221, 81,  95, 16, 16, 20);

      this.enemyInsert(idxId.E221, 96,  120, 10, 20, 60);
      this.enemyInsert(idxId.E231, 96,  120, 4, 20, 60);
      this.enemyInsert(idxId.E232, 96,  120, 4, 20, 60);
      this.enemyInsert(idxId.E211, 104, 120, 1, 20, 60);
      this.enemyInsert(idxId.E212, 104, 120, 1, 20, 60);
      this.enemyInsert(idxId.E213, 104, 120, 1, 20, 60);
      this.enemyInsert(idxId.E214, 104, 120, 1, 20, 60);
    } else if(time >= 121 && time <= this.timeEndPosition[2] - 15){
      this.enemyInsert(idxId.E201, 121, 150, 1, 20, 60, 50);
      this.enemyInsert(idxId.E202, 121, 150, 1, 20, 60, 50);
      this.enemyInsert(idxId.E203, 121, 150, 1, 20, 60, 50);
      this.enemyInsert(idxId.E204, 121, 150, 1, 20, 60, 50);
      this.enemyInsert(idxId.E211, 121, 158, 1, 20, 60, 50);
      this.enemyInsert(idxId.E212, 121, 158, 1, 20, 60, 50);
      this.enemyInsert(idxId.E213, 121, 158, 1, 20, 60, 50);
      this.enemyInsert(idxId.E214, 121, 158, 1, 20, 60, 50);

      this.enemyInsert(idxId.E221, 130, 165, 4, 20, 60);
      this.enemyInsert(idxId.E231, 130, 165, 4, 20, 60);
      this.enemyInsert(idxId.E232, 130, 165, 4, 20, 60);
    }

    if(time >= this.timeEndPosition[2] - 12 && this.flagNumber == 0 && !this.isBossMode && getCurrentBossCount() <= 0){
      this.isBossMode = true;
      this.isRoundClear = false;
      this.isTimeStop = true;
      this.flagNumber = 1;

      insert.boss(idxId.BOSS2_1);
      musicSystem.play(musId.BOSS_BATTLE);
    }

    if(time >= this.timeEndPosition[2] - 9 && this.flagNumber == 1 && this.isBossMode && getCurrentBossCount() <= 0){
      this.isTimeStop = true;
      this.flagNumber = 2;
      insert.boss(idxId.BOSS2_2);
      musicSystem.play(musId.BOSS_BATTLE);
    }

    if(time >= this.timeEndPosition[2] - 5 && this.flagNumber == 2 && this.isBossMode && getCurrentBossCount() <= 0){
      this.isTimeStop = true;
      this.flagNumber = 3;
      insert.boss(idxId.BOSS2_1, 240, 0);
      insert.boss(idxId.BOSS2_2, 240, 120);
      musicSystem.play(musId.BOSS_BATTLE);
    }

    if(this.isBossMode && getCurrentBossCount() <= 0){
      this.isTimeStop = false;
      musicSystem.stop();
    }

    if(time >= this.timeEndPosition[2] && this.flagNumber == 3 && this.isBossMode && getCurrentBossCount() <= 0 ){
      this.isRoundClear = true;
    }
  },
  r3:function(){
    var time = this.time;
    if(time >= 1 && time <= this.timeEndPosition[3] - 5){
      musicSystem.play(musId.ROUND3_BUBBLE_WATER);
    }

    if(time >= 3 && time <= 30){
      this.enemyInsert(idxId.E301,  3, 30, 5, 20, 30);
      this.enemyInsert(idxId.E302,  7, 30, 5, 20, 30);
      this.enemyInsert(idxId.E303, 11, 30, 5, 20, 30);
      this.enemyInsert(idxId.E304, 15, 30, 5, 20, 30);
      this.enemyInsert(idxId.E305, 19, 30, 5, 20, 30);
      this.enemyInsert(idxId.E306, 23, 30, 5, 20, 30);
    } else if(time >= 36 && time <= 60){
      this.enemyInsert(idxId.E301, 36, 60, 3, 25, 30);
      this.enemyInsert(idxId.E302, 36, 60, 3, 25, 30);
      this.enemyInsert(idxId.E303, 36, 60, 3, 25, 30);
      this.enemyInsert(idxId.E304, 36, 60, 3, 25, 30);
      this.enemyInsert(idxId.E305, 36, 60, 3, 25, 30);
      this.enemyInsert(idxId.E306, 36, 60, 3, 25, 30);

      this.enemyInsert(idxId.E311, 36, 60, 3, 25, 20);
      this.enemyInsert(idxId.E312, 40, 60, 3, 25, 20);
      this.enemyInsert(idxId.E313, 44, 60, 3, 25, 20);
      this.enemyInsert(idxId.E314, 48, 60, 3, 25, 20);
    } else if(time >= 66 && time <= 112){
      this.enemyInsert(idxId.E301, 66, 116, 2, 25, 60);
      this.enemyInsert(idxId.E302, 72, 116, 2, 25, 60);
      this.enemyInsert(idxId.E303, 78, 116, 2, 25, 60);
      this.enemyInsert(idxId.E304, 84, 116, 2, 25, 60);
      this.enemyInsert(idxId.E305, 90, 116, 2, 25, 60);
      this.enemyInsert(idxId.E306, 96, 116, 2, 25, 60);
      this.enemyInsert(idxId.E311, 66, 116, 3, 25, 60);
      this.enemyInsert(idxId.E312, 72, 116, 3, 25, 60);
      this.enemyInsert(idxId.E313, 78, 116, 3, 25, 60);
      this.enemyInsert(idxId.E314, 84, 116, 3, 25, 60);
      this.enemyInsert(idxId.E321, 90, 116, 1, 25, 120);
      this.enemyInsert(idxId.E322, 96, 116, 1, 25, 120);
    }

    if(time >= this.timeEndPosition[3] - 5 && !this.isBossMode && getCurrentBossCount() <= 0){
      this.isBossMode = true;
      this.isTimeStop = true;
      this.flagNumber = 1;
      insert.boss(idxId.BOSS3);
    }

    if(time >= this.timeEndPosition[3] - 5 && this.isBossMode && this.flagNumber == 1 && getCurrentBossCount() <= 0){
      this.isTimeStop = false;
      musicSystem.stop();
    }
    
    if(time >= this.timeEndPosition[3]){
      this.isRoundClear = true;
    }
  },
  r4:function(){
    var time = this.time;
    if(time >= 1 && time <= this.timeEndPosition[4]){
      musicSystem.play(musId.ROUND4_BRICK_SHOW);
    }

    if(time >= 1 && time <= 40){
      this.enemyInsert(idxId.E401,  2, 20, 4, 20, 30);
      this.enemyInsert(idxId.E402,  2, 20, 4, 20, 30);
      this.enemyInsert(idxId.E403,  2, 20, 4, 20, 30);
      this.enemyInsert(idxId.E404,  2, 20, 4, 20, 30);

      this.enemyInsert(idxId.E401,  21, 40, 4, 20, 60);
      this.enemyInsert(idxId.E402,  21, 40, 4, 20, 60);
      this.enemyInsert(idxId.E403,  21, 40, 4, 20, 60);
      this.enemyInsert(idxId.E404,  21, 40, 4, 20, 60);
      this.enemyInsert(idxId.E405,  21, 40, 4, 20, 60);
      this.enemyInsert(idxId.E406,  21, 40, 4, 20, 60);
      this.enemyInsert(idxId.E407,  21, 40, 4, 20, 60);
      this.enemyInsert(idxId.E408,  21, 40, 4, 20, 60);
    } else if(time >= 41 && time <= 80){
      this.enemyInsert(idxId.E402,  41, 48, 2, 24, 30);
      this.enemyInsert(idxId.E403,  51, 58, 2, 24, 30);
      this.enemyInsert(idxId.E411,  41, 50, 6, 24, 90);
      this.enemyInsert(idxId.E421,  51, 60, 6, 24, 90);

      this.enemyInsert(idxId.E404,  64, 72, 2, 24, 30);
      this.enemyInsert(idxId.E408,  64, 72, 2, 24, 30);
      this.enemyInsert(idxId.E411,  61, 80, 6, 24, 60);
      this.enemyInsert(idxId.E421,  61, 80, 6, 24, 60);
    } else if(time >= 81 && time <= 120){
      this.enemyInsert(idxId.E441,  81, 88, 6, 42, 45);
      this.enemyInsert(idxId.E442,  89, 96, 6, 42, 45);

      this.enemyInsert(idxId.E431,  97, 102, 6, 42, 45);
      this.enemyInsert(idxId.E432,  103, 108, 6, 24, 45);

      this.enemyInsert(idxId.E431,  110, 120, 6, 24, 45);
      this.enemyInsert(idxId.E432,  110, 120, 6, 24, 45);
      this.enemyInsert(idxId.E441,  105, 120, 6, 24, 45);
      this.enemyInsert(idxId.E442,  105, 120, 6, 24, 45);
    } else if(time >= 121 && time <= 160){
      this.enemyInsert(idxId.E404,  121, 150, 4, 24, 90);
      this.enemyInsert(idxId.E408,  121, 150, 4, 24, 90);
      this.enemyInsert(idxId.E403,  132, 155, 4, 24, 90);
      this.enemyInsert(idxId.E407,  132, 155, 4, 24, 90);
      this.enemyInsert(idxId.E402,  144, 160, 4, 24, 00);
      this.enemyInsert(idxId.E405,  144, 160, 4, 24, 90);

      this.enemyInsert(idxId.E411, 125, 140, 8, 24, 90);
      this.enemyInsert(idxId.E421, 125, 140, 8, 24, 90);

      this.enemyInsert(idxId.E411, 141, 160, 5, 24, 60);
      this.enemyInsert(idxId.E421, 141, 160, 5, 24, 60);
      this.enemyInsert(idxId.E412, 132, 160, 6, 24, 30);
      this.enemyInsert(idxId.E414, 132, 160, 6, 24, 30);
      this.enemyInsert(idxId.E422, 132, 160, 6, 24, 30);
      this.enemyInsert(idxId.E424, 132, 160, 6, 24, 30);

      this.enemyInsert(idxId.E431, 121, 160, 6, 24, 60);
      this.enemyInsert(idxId.E432, 121, 160, 6, 24, 60);
    } else if(time >= 161 && time <= 180){
      this.enemyInsert(idxId.E431, 161, 169, 20, 20, 10);

      this.enemyInsert(idxId.E431, 170, 180, 12, 24, 20);
      this.enemyInsert(idxId.E432, 170, 180, 12, 24, 20);
    } else if(time >= 181 && time <= 200){
      this.enemyInsert(idxId.E412, 181, 192, 6, 36, 20);
      this.enemyInsert(idxId.E414, 181, 192, 6, 36, 20);
      this.enemyInsert(idxId.E422, 181, 200, 6, 36, 20);
      this.enemyInsert(idxId.E424, 181, 200, 6, 36, 20);

      this.enemyInsert(idxId.E401, 184, 192, 6, 36, 20);
      this.enemyInsert(idxId.E402, 184, 192, 6, 36, 20);
      this.enemyInsert(idxId.E403, 184, 200, 6, 36, 20);
      this.enemyInsert(idxId.E404, 184, 200, 6, 36, 20);

      this.enemyInsert(idxId.E431, 193, 200, 6, 36, 20);
      this.enemyInsert(idxId.E432, 193, 200, 6, 36, 20);
    } else if(time >= this.timeEndPosition[4]){
      this.isRoundClear = true;
      musicSystem.stop();
    }
  },
  r5:function(){
    var time = this.time;
    if(time == 5 && getCurrentBossCount() <= 0){
      insert.boss(idxId.BOSS4);
      this.isBossMode = true;
      musicSystem.play(musId.ROUND5);
    }
    if(time >= this.timeEndPosition[5]-5 && getCurrentBossCount() >= 1){
      this.isTimeStop = true;
    } else {
      this.isTimeStop = false;
    }

    if(time >= this.timeEndPosition[5]){
      this.isRoundClear = true;
      musicSystem.stop();
    }
  },
  r6:function(){
    var time = this.time;
    if(time == 5 && this.flagNumber == 0){
      insert.boss(idxId.BOSS5);
      insert.boss(idxId.BOSS5);
      insert.boss(idxId.BOSS5);
      insert.boss(idxId.BOSS5);
      insert.boss(idxId.BOSS5);
      insert.boss(idxId.BOSS5);
      insert.boss(idxId.BOSS5);
      insert.boss(idxId.BOSS5);
      insert.boss(idxId.BOSS5);
      insert.boss(idxId.BOSS5);
      this.isTimeStop = true;
      this.isBossMode = true;
      this.flagNumber = 1;
      musicSystem.play(musId.BOSS_BATTLE);
    } else if(time == 5 && this.flagNumber == 1 && getCurrentBossCount() <= 0){
      this.isTimeStop = false;
      this.flagNumber = 2;
      musicSystem.stop();
    } else if(time == 10 && this.flagNumber == 2){
      insert.boss(idxId.BOSS2_1);
      insert.boss(idxId.BOSS2_2);
      musicSystem.play(musId.BOSS_BATTLE);
      this.flagNumber = 3;
      this.isTimeStop = true;
    } else if(time == 10 && this.flagNumber == 3 && getCurrentBossCount() <= 0){
      this.isTimeStop = false;
      this.isBossMode = false;
      this.flagNumber = 10;
      musicSystem.stop();
    }

    if(time >= 15 && time <= this.timeEndPosition[6]-10){
      musicSystem.play(musId.ROUND2_POTION_BATTLE);
    }

    if(time >= 15 && time <= 30){
      this.enemyInsert(idxId.E601, 15, 30, 3, 6, 60);
      this.enemyInsert(idxId.E602, 15, 30, 3, 6, 60);
    } else if(time >= 31 && time <= 60){
      this.enemyInsert(idxId.E601, 45, 60, 2, 24, 60);
      this.enemyInsert(idxId.E602, 45, 60, 2, 24, 60);
  
      this.enemyInsert(idxId.E603, 31, 40, 3, 16, 30);
      this.enemyInsert(idxId.E604, 31, 40, 3, 16, 30);
      this.enemyInsert(idxId.E603, 41, 60, 3, 16, 20);
      this.enemyInsert(idxId.E604, 41, 60, 3, 16, 20);

      this.enemyInsert(idxId.E611, 36, 60, 4, 24, 30);
      this.enemyInsert(idxId.E612, 36, 60, 4, 24, 30);
      this.enemyInsert(idxId.E611, 36, 60, 4, 24, 30);
      this.enemyInsert(idxId.E612, 36, 60, 4, 24, 30);
    } else if(time >= 61 && time <= 90){
      this.enemyInsert(idxId.E601, 66, 80, 5, 24, 60);

      this.enemyInsert(idxId.E621, 61, 90, 1, 16, 30, 40);
      this.enemyInsert(idxId.E622, 61, 90, 1, 16, 30, 40);
      this.enemyInsert(idxId.E623, 61, 90, 1, 16, 30, 40);
      this.enemyInsert(idxId.E624, 61, 90, 1, 16, 30, 40);

      this.enemyInsert(idxId.E631, 61, 90, 3, 16, 30, 70);
      this.enemyInsert(idxId.E632, 61, 90, 3, 16, 30, 70);
      this.enemyInsert(idxId.E633, 61, 90, 3, 16, 30, 70);
      this.enemyInsert(idxId.E634, 61, 90, 3, 16, 30, 70);
    } else if(time >= 91 && time <= 120){
      this.enemyInsert(idxId.E602, 91,  100, 4, 24, 60, 30);
      this.enemyInsert(idxId.E602, 101, 110, 4, 24, 60, 75);
      this.enemyInsert(idxId.E602, 111, 120, 4, 24, 75);

      this.enemyInsert(idxId.E621, 91, 100, 2, 16, 60);
      this.enemyInsert(idxId.E622, 91, 100, 2, 16, 60);
      this.enemyInsert(idxId.E623, 91, 100, 2, 16, 60);
      this.enemyInsert(idxId.E624, 91, 100, 2, 16, 60);

      this.enemyInsert(idxId.E641, 101, 120, 2, 20, 60, 70);
      this.enemyInsert(idxId.E642, 101, 120, 2, 20, 60, 70);
      this.enemyInsert(idxId.E643, 101, 120, 2, 20, 60, 70);
      this.enemyInsert(idxId.E644, 101, 120, 2, 20, 60, 70);
      this.enemyInsert(idxId.E621, 111, 120, 2, 20, 60, 70);
      this.enemyInsert(idxId.E622, 111, 120, 2, 20, 60, 80);
      this.enemyInsert(idxId.E623, 111, 120, 2, 20, 60, 80);
      this.enemyInsert(idxId.E624, 111, 120, 2, 20, 60, 80);
    } else if(time >= 124 && time <= this.timeEndPosition[6] - 10){
      this.enemyInsert(idxId.E601, 124, 141, 6, 10, 60);
      this.enemyInsert(idxId.E602, 124, 141, 4, 10, 60);
    }


    if(time >= this.timeEndPosition[6] - 10 && time <= this.timeEndPosition[6] - 8){
      musicSystem.stop();
    }

    if(time == this.timeEndPosition[6]-5 && this.flagNumber != 11){
      this.flagNumber = 11;
      this.isTimeStop = true;
      this.isBossMode = true;
      insert.boss(idxId.BOSSF);
      musicSystem.play(musId.BOSS_BATTLE);
    }

    if(time == this.timeEndPosition[6]-5 && this.flagNumber == 11 && getCurrentBossCount() <= 0){
      this.isTimeStop = false;
      musicSystem.stop();
    }

    if(time >= this.timeEndPosition[6]){
      this.isRoundClear = true;
    }

  },
  r7:function(){
    var time = this.time;
    if(time >= 5 && time <= 40){
      musicSystem.play(musId.ROUND7_COIN_FESTIVAL);
      this.enemyInsert(idxId.E701, 5, 20, 4, 16, 10, 10);
      this.enemyInsert(idxId.E711, 5, 20, 4, 16, 10, 30);
      this.enemyInsert(idxId.E712, 5, 20, 4, 16, 10, 30);
      this.enemyInsert(idxId.E713, 5, 20, 4, 16, 10, 30);

      this.enemyInsert(idxId.E701, 21, 30, 6, 24, 10, 20);
      this.enemyInsert(idxId.E711, 21, 30, 6, 24, 10);
      this.enemyInsert(idxId.E712, 21, 30, 6, 24, 10);
      this.enemyInsert(idxId.E713, 21, 30, 6, 24, 10);

      this.enemyInsert(idxId.E701, 31, 40, 8, 32, 10, 40);
      this.enemyInsert(idxId.E711, 31, 40, 8, 32, 5);
      this.enemyInsert(idxId.E712, 31, 40, 8, 32, 5);
      this.enemyInsert(idxId.E713, 31, 40, 8, 32, 5);
    }

    if(time >= this.timeEndPosition[7]){
      display.text("congratulation!", 0, 8, colorId.LIGHT_BLUE)
      display.text("round all clear!", 0, 16, colorId.LIGHT_BLUE);
      display.text("this tamsaseon(probe) found the treasure.", 0, 24);
      display.text("In fact, there is no story.", 0, 32);
      display.text("THE END.", 0, 40, colorId.RED);
      display.text("after 20 seconds you will die.", 0, 48, colorId.BROWN);
      display.text("and go to main menu", 0, 56, colorId.BROWN);
    }

    if(time == this.timeEndPosition[7]){
      musicSystem.play(musId.ALL_CLEAR);
    } else if(time == this.timeEndPosition[7] + 10){
      musicSystem.stop();
    }

    if(time >= this.timeEndPosition[7] + 20){
      player.damageInsert(1000);
      this.round = 1;
    }
  }
}


var mainSystem = {
  GAMEMODE_MAIN:"main",
  GAMEMODE_FIELD:"field",
  gameMode: "main",
  menuCursorNumber:0,
  menuSideSelecting:false,
  menuSideCursorNumber:0,
  menuSideSelectCount:0,
  playerDieDelay:0,

  process:function(){
    var MENU_WEAPON_CHANGE = 0;
    var MENU_SKILL_CHANGE = 1;
    var MENU_ROUND_SELECT = 2;
    var MENU_MUSIC_ONOFF = 3;
    var MENU_SOUND_ONOFF = 4;
    var MENU_GAME_START = 5;
    var LIST_WEAPON_CHANGE = 7;
    var LIST_SKILL_CHANGE = 7;
    var LIST_ROUND_SELECT = 7;
    var LIST_MENU = 5;

    if(btnp(btnId.A)){
      if(!this.menuSideSelecting && this.menuCursorNumber >= 0 && this.menuCursorNumber <= 2){
        sound.play(sfxId.SELECT);
        this.menuSideSelecting = true;
        this.menuSideCursorNumber = 0;
        this.menuSideSelectCount = 0;
      } else if(this.menuCursorNumber == MENU_MUSIC_ONOFF){
        sound.play(sfxId.CURSOR);
        musicSystem.isMute = !musicSystem.isMute;
      } else if(this.menuCursorNumber == MENU_SOUND_ONOFF){
        sound.play(sfxId.CURSOR);
        sound.isMute = !sound.isMute;
      } else if(this.menuCursorNumber == MENU_GAME_START){
        this.gameMode = this.GAMEMODE_FIELD;
        sound.play(sfxId.START);
      } else if(this.menuSideSelecting){
        sound.play(sfxId.SELECT);
        switch(this.menuCursorNumber){
          case MENU_WEAPON_CHANGE:
            switch(this.menuSideCursorNumber){
              case 0: player.weaponInsert(this.menuSideSelectCount, idxId.W_LASER); break;
              case 1: player.weaponInsert(this.menuSideSelectCount, idxId.W_MISSILE); break;
              case 2: player.weaponInsert(this.menuSideSelectCount, idxId.W_LINELASER); break;
              case 3: player.weaponInsert(this.menuSideSelectCount, idxId.W_FIRE); break;
              case 4: player.weaponInsert(this.menuSideSelectCount, idxId.W_THUNDER); break;
              case 5: player.weaponInsert(this.menuSideSelectCount, idxId.W_SWORD); break;
              case 6: player.weaponInsert(this.menuSideSelectCount, idxId.W_ARROW); break;
              case 7: player.weaponInsert(this.menuSideSelectCount, 0);
            }
            
            this.menuSideSelectCount++;
            if(this.menuSideSelectCount > 3){
              this.menuSideSelecting = false;
            }
            break;
          case MENU_SKILL_CHANGE:
            switch(this.menuSideCursorNumber){
              case 0: player.skillInsert(this.menuSideSelectCount, idxId.SKILL_LASER); break;
              case 1: player.skillInsert(this.menuSideSelectCount, idxId.SKILL_MISSILE); break;
              case 2: player.skillInsert(this.menuSideSelectCount, idxId.SKILL_LINELASER); break;
              case 3: player.skillInsert(this.menuSideSelectCount, idxId.SKILL_FIRE); break;
              case 4: player.skillInsert(this.menuSideSelectCount, idxId.SKILL_THUNDER); break;
              case 5: player.skillInsert(this.menuSideSelectCount, idxId.SKILL_SWORD); break;
              case 6: player.skillInsert(this.menuSideSelectCount, idxId.SKILL_ARROW); break;
              case 7: player.skillInsert(this.menuSideSelectCount, 0);
            }
            
            this.menuSideSelectCount++;
            if(this.menuSideSelectCount > 2){
              this.menuSideSelecting = false;
            }
            break;
          case MENU_ROUND_SELECT:
            field.round = this.menuSideCursorNumber;
            player.levelAdjust(field.round);
            break;
        }
      }
    }
    if(btnp(btnId.B)){
      if(this.menuSideSelecting){
        sound.play(sfxId.CANCEL);
        this.menuSideSelecting = false;
      }
    }
    if(btnp(btnId.RIGHT) || btnp(btnId.LEFT)){
      if(this.menuCursorNumber == MENU_MUSIC_ONOFF){
        sound.play(sfxId.CURSOR);
        musicSystem.isMute = !musicSystem.isMute;
      } else if(this.menuCursorNumber == MENU_SOUND_ONOFF){
        sound.play(sfxId.CURSOR);
        sound.isMute = !sound.isMute;
      }
    }
    if(btnp(btnId.UP)){
      if(this.menuSideSelecting && this.menuSideCursorNumber > 0){
        sound.play(sfxId.CURSOR);
        this.menuSideCursorNumber--;
      } else if(!this.menuSideSelecting && this.menuCursorNumber > 0) {
        sound.play(sfxId.CURSOR);
        this.menuCursorNumber--;
      }
    }
    if(btnp(btnId.DOWN)){
      if(this.menuSideSelecting){
        if(this.menuCursorNumber == MENU_WEAPON_CHANGE && this.menuSideCursorNumber < LIST_WEAPON_CHANGE ||
           this.menuCursorNumber == MENU_SKILL_CHANGE && this.menuSideCursorNumber < LIST_SKILL_CHANGE ||
           this.menuCursorNumber == MENU_ROUND_SELECT && this.menuSideCursorNumber < LIST_ROUND_SELECT){
          sound.play(sfxId.CURSOR);
          this.menuSideCursorNumber++;
        }
      } else if(!this.menuSideSelecting && this.menuCursorNumber < LIST_MENU) {
        sound.play(sfxId.CURSOR);
        this.menuCursorNumber++;
      }
    }

    this.display();
  },
  display:function(){
    var MENU_WEAPON_CHANGE = 0;
    var MENU_SKILL_CHANGE = 1;
    var MENU_ROUND_SELECT = 2;
    var MENU_MUSIC_ONOFF = 3;
    var MENU_SOUND_ONOFF = 4;
    var MENU_GAME_START = 5;
    var LIST_WEAPON_CHANGE = 6;
    var LIST_SKILL_CHANGE = 6;
    var LIST_ROUND_SELECT = 7;
    var LIST_MENU = 5;
    var UNUSED_LINEVALUE = 7;

    var soundOption = "";
    if(sound.isMute){
      soundOption = "off";
    } else {
      soundOption = "on";
    }

    var musicOption = "";
    if(musicSystem.isMute){
      musicOption = "off";
    } else {
      musicOption = "on";
    }

    display.text("tamshooter 2 | 2021/04/25", 0, 8*0, colorId.LIGHT_BLUE);
    display.text("created by skz1024", 0, 8*1, colorId.LIGHT_BLUE);
    display.text("-- MENU --", 0, 8*3);
    display.text("1. weapon change", 0, 8*4);
    display.text("2. skill change", 0, 8*5);
    display.text("3. round select", 0, 8*6);
    display.text("4. music on/off: " + musicOption, 0, 8*7);
    display.text("5. sound on/off: " + soundOption, 0, 8*8);
    display.text("6. game start", 0, 8*9);

    var sideMenuX = 136;
    var viewPlayerWeaponX = 16;
    var viewPlayerWeaponY = 108;

    player.x = this.menuSideSelecting ? sideMenuX-8 : 0;
    player.y = this.menuSideSelecting ? (8*4)+(8*this.menuSideCursorNumber) : (8*4)+(8*this.menuCursorNumber) ;
    
    switch(this.menuCursorNumber){
      case MENU_WEAPON_CHANGE:
        display.sprite(sprId.W_LASER, sideMenuX, 8*4, 1, 1, 1);
        display.text("laser", sideMenuX+16, 8*4, colorId.WHITE);
        //
        display.sprite(sprId.W_MISSILE, sideMenuX, 8*5, 2, 1, 1);
        display.text("missile", sideMenuX+16, 8*5, colorId.WHITE);
        //
        display.sprite(sprId.W_LINELASER, sideMenuX, 8*6, 2, 1, 1);
        display.text("linelaser", sideMenuX+16, 8*6, colorId.WHITE);
        //
        display.sprite(sprId.W_FIRE, sideMenuX, 8*7, 1, 1, 1);
        display.text("fire", sideMenuX+16, 8*7, colorId.WHITE);
        //
        display.sprite(sprId.W_THUNDER, sideMenuX, 8*8, 1, 1, 1);
        display.text("thunder", sideMenuX+16, 8*8, colorId.WHITE);
        //
        display.sprite(sprId.W_SWORD, sideMenuX, 8*9, 2, 1, 1);
        display.text("sword", sideMenuX+16, 8*9, colorId.WHITE);
        //
        display.sprite(sprId.W_ARROW_BROWN, sideMenuX, 8*10, 1, 1, 1);
        display.text("arrow", sideMenuX+16, 8*10, colorId.WHITE);
        //
        display.text("unused", sideMenuX+16, 8*11, colorId.WHITE);
        break;
      case MENU_SKILL_CHANGE:
        display.sprite(sprId.SKILL_LASER, sideMenuX, 8*4, 2, 1, 1);
        display.sprite(sprId.SKILL_MISSILE, sideMenuX, 8*5, 2, 1, 1);
        display.sprite(sprId.SKILL_LINELASER, sideMenuX, 8*6, 2, 1, 1);
        display.sprite(sprId.SKILL_FIRE, sideMenuX, 8*7, 2, 1, 1);
        display.sprite(sprId.SKILL_THUNDER, sideMenuX, 8*8, 2, 1, 1);
        display.sprite(sprId.SKILL_SWORD, sideMenuX, 8*9, 2, 1, 1);
        display.sprite(sprId.SKILL_ARROW, sideMenuX, 8*10, 2, 1, 1);
        display.text("unused", sideMenuX+16, 8*11, colorId.WHITE);
        //
        switch(this.menuSideCursorNumber){
          case 0: display.smallText("laser\n500%*5*40 damage\ntotal: 100000%, cooltime:20\nchase type", sideMenuX-16, 8*12, colorId.PEACH); break;
          case 1: display.smallText("missile\n1050%*17*8 damage\ntotal: 142800%, cooltime:24\nchase type, splash", sideMenuX-16, 8*12, colorId.PEACH); break;
          case 2: display.smallText("linelaser\n100%*3*10*40 damage\ntotal: 120000%, cooltime:24\npenetrate", sideMenuX-16, 8*12, colorId.PEACH); break;
          case 3: display.smallText("fire\n300%*240 damage\ntotal: 72000%, cooltime:30\nallareasplash", sideMenuX-16, 8*12, colorId.PEACH); break;
          case 4: display.smallText("thunder\n450%*21*4*4 damage\ntotal: 151200%, cooltime:30\nsuperattack", sideMenuX-16, 8*12, colorId.PEACH); break;
          case 5: display.smallText("sword\n3000%*40 damage\ntotal: 120000%, cooltime:24\nchase, bigattack", sideMenuX-16, 8*12, colorId.PEACH); break;
          case 6: display.smallText("arrow\n250%*5*4*20 damage\ntotal: 100000%, cooltime:20\nsuper rapid", sideMenuX-16, 8*12, colorId.PEACH); break;
        }
        break;
      case MENU_ROUND_SELECT:
        for(var i = 0; i < 8; i++){
          display.text("round " + i, sideMenuX, 8*(4+i), colorId.LIGHT_GREEN);
        }
        display.text("round 0 is test", sideMenuX, 8*12);
    }

    display.text("player weapon", viewPlayerWeaponX, viewPlayerWeaponY-8);
    for(var i = 0; i < 4; i++){
      switch(player.weapon.equipList[i]){
        case idxId.W_LASER:
          display.sprite(sprId.W_LASER, viewPlayerWeaponX + (i*24), viewPlayerWeaponY, 1, 1, 1);
          break;
        case idxId.W_MISSILE:
          display.sprite(sprId.W_MISSILE, viewPlayerWeaponX + (i*24), viewPlayerWeaponY, 2, 1, 1);
          break;
        case idxId.W_LINELASER:
          display.sprite(sprId.W_LINELASER, viewPlayerWeaponX + (i*24), viewPlayerWeaponY, 2, 1, 1);
          break;
        case idxId.W_FIRE:
          display.sprite(sprId.W_FIRE, viewPlayerWeaponX + (i*24), viewPlayerWeaponY, 1, 1, 1);
          break;
        case idxId.W_THUNDER:
          display.sprite(sprId.W_THUNDER, viewPlayerWeaponX + (i*24), viewPlayerWeaponY, 1, 1, 1);
          break;
        case idxId.W_SWORD:
          display.sprite(sprId.W_SWORD, viewPlayerWeaponX + (i*24), viewPlayerWeaponY, 2, 1, 1);
          break;
        case idxId.W_ARROW:
          display.sprite(sprId.W_ARROW_BROWN, viewPlayerWeaponX + (i*24), viewPlayerWeaponY, 1, 1, 1);
          break;
      }
    }

    field.display();
    player.display();
  }
}

player.init();
field.roundStatInit();
var t = 0;
function TIC(){
  display.clear();
  if(mainSystem.gameMode == mainSystem.GAMEMODE_MAIN){
    mainSystem.process();
  } else if(mainSystem.gameMode == mainSystem.GAMEMODE_FIELD){
    field.process();
    player.process();

    if(player.hp <= 0){
      mainSystem.playerDieDelay++;
      musicSystem.stop();
      if(mainSystem.playerDieDelay % 3 == 0) display.text("game over", 16, 48, colorId.LIGHT_GRAY, 2);
      else if(mainSystem.playerDieDelay % 2 == 0) display.text("game over", 16, 48, colorId.RED, 2);
      else display.text("game over", 16, 48, colorId.DARK_RED, 2);
      if(mainSystem.playerDieDelay >= 60){
        allEnemyDie();
      }

      if(mainSystem.playerDieDelay >= 180){
        mainSystem.playerDieDelay = 0;
        mainSystem.gameMode = mainSystem.GAMEMODE_MAIN;
        player.init();
        field.init();
        allEnemyDie();

        player.levelAdjust(field.round);
      }
    }
  }
}

//init debug
(function(){
  // field.round = 7;
  // field.time = 114;
  // player.lv = 0;
  //player.weapon.equipList = [idxId.W_ARROW, idxId.W_LASER, idxId.W_MISSILE, idxId.W_THUNDER];
  //player.skillInsert(0, idxId.SKILL_MISSILE);
})();

var display = {
  //display erase and set background black
  clear: function(){cls(0);},
  
  //spr spriteId x y [colorkey=-1] [scale=1] [flip=0] [rotate=0] [w=1 h=1]
  object: function(fieldObject){
    var f = fieldObject
    var sprId = f.sprId;
    var x = f.x;
    var y = f.y;
    var w = f.w;
    var h = f.h;
    var scale = f.scale;
    var flip = f.flip;
    var rotate = f.rotate;
    spr(sprId, x, y, 0, scale, flip, rotate, w, h);
  },
  sprite: function(sprId, x, y, w, h, scale){
    spr(sprId, x, y, 0, scale, 0, 0, w, h);
  },

  //print text [x=0 y=0] [color=15] [fixed=false] [scale=1] [smallfont=false]
  text: function(text, x, y, color, scale){
    if(color == null) color = 15;
    if(scale == null) scale = 1;
    print(text, x, y, color, true, scale);
  },
  smallText: function(text, x, y, color, shadowColor){
    if(color == null) color = 15;
    if(shadowColor != null) print(text, x+1, y+1, shadowColor, true, 1, true);
    print(text, x, y, color, true, 1, true);
  },

  //rect x y w h color (all number)
  rect: function(x, y, w, h, color){
    if(color == null)  color = 0;
    rect(x, y, w, h, color);
  },
  shadowRect: function(x, y, w, h, color, shadowColor){
    if(shadowColor != null) rect(x+1, y+1, w-1, h-1, shadowColor);
    rect(x, y, w-1, h-1, color);
  },
  //rectb x y w h color
  strokeRect: function(x, y, w, h, color){
    rectb(x, y, w, h, color);
  },

  // map [x=0 y=0] [w=30 h=17] [sx=0 sy=0] [colorkey=-1] [scale=1] [remap=nil]
  map:function(x, y, w, h, sx, sy){
    map(x, y, w, h, sx, sy, -1, 1);
  },
}


var musicSystem = {
  isPlay: false,
  isMute: false,
  trackNumber: -1,
  //music [track=-1] [frame=-1] [row=-1] [loop=true] [sustain=false]
  play: function(trackNumber, noLoop){
    if(/*!this.isPlay && */ !this.isMute && trackNumber != -1 && this.trackNumber != trackNumber ){
      this.trackNumber = trackNumber;
      //this.isPlay = true;

      // if(noLoop) music(trackNumber, -1, -1, 0);
      // else music(trackNumber);
      music(trackNumber)
    }
  },
  playEffect: function(trackNumber, frame, row){
    if(frame != null && row != null){
      music(trackNumber, frame, row, false);
    }
  },
  stop: function(){
    this.isPlay = false;
    this.trackNumber = -1;
    music();
  },
  sound: function(soundId){
    sfx(soundId);
  },
  setMute: function(boolValue){
    if(typeof boolValue == "boolean"){
      this.isMute = boolValue;
      if(boolValue == true){
        music.stop();
      } else {
        music.play();
      }
    } else {
      this.isMute = false;
      music.play();
    }
  }
}

var sound = {
  isMute:false,
  //sfx spriteId [note] [duration=-1] [channel=0] [volume=15] [speed=0]
  play: function(soundId){
    if(this.isMute) return;
    sfx(soundId);
  },
}

var debug = {
  logCount: 0,
  log: function(args){
    var str = "";
    for(var i = 0; i < arguments.length; i++){
      str = str + arguments[i] + ", ";
    }
    display.text(str, 0, 0, 15, 1);
  },
  logLine: function(lineNumber, args){
    var str = "";
    for(var i = 1; i < arguments.length; i++){
      str = str + arguments[i] + ", ";
    }
    display.text(str, 0, lineNumber*8, 15, 1);
  },
}