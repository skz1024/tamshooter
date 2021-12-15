// title:  tamshooter3
// author: skz1024
// desc:   Shoot 'em up + Dungeon RPG game
// script: js
// saveid: tamshooter3

/*
start: 2021/05/01
v0.1 2021/05/21 R1-3
v0.2 2021/05/29 R2-3
v0.3 2021/06/02 R3-3
v0.4 2021/06/07 R4-4
v0.5 2021/06/11 R6-5
v0.55 2021/06/16 R7-4
v0.6 2021/06/23 R8-4
v0.7 2021/07/01 R9-2
v1.0 2021/07/23 Final
javascript style using esline and javascript standard style
but javascript standard style not support ecmascript5. therefore i some using rules.
*/

var i = 0
var VERSION_TEXT = 'version 1.0 (final) - 2021/07/23'
function TIC(){
  displaySystem.clear()
  mainSystem.display()
  mainSystem.process()
}
function GradientData(sR, sG, sB, eR, eG, eB){
  this.sR = sR
  this.sG = sG
  this.sB = sB
  this.eR = eR
  this.eG = eG
  this.eB = eB
}
var gradientData = [new GradientData(0x00, 0x00, 0x00, 0x00, 0x00, 0x00)] // TEST: 0
gradientData.push(new GradientData(0xD3, 0xDF, 0xEA, 0x26, 0x76, 0xC6)) // 1-1: 1
gradientData.push(new GradientData(0xFC, 0xF7, 0xCF, 0xFF, 0x97, 0x00))
gradientData.push(new GradientData(0x19, 0x02, 0x25, 0x00, 0x00, 0x00))
gradientData.push(new GradientData(0x70, 0x17, 0x00, 0x10, 0x25, 0x00)) // 2-1: 4
gradientData.push(new GradientData(0x4C, 0x4E, 0x10, 0x23, 0x20, 0x04))
gradientData.push(new GradientData(0x1C, 0x24, 0x4C, 0x04, 0x18, 0x29))
gradientData.push(new GradientData(0x73, 0x73, 0x73, 0x1F, 0x1F, 0x1F)) // 3-1: 7
gradientData.push(new GradientData(0x4F, 0x00, 0x00, 0x00, 0x00, 0x4F))
gradientData.push(new GradientData(0x9F, 0xBB, 0x32, 0x08, 0x68, 0x1B))
gradientData.push(new GradientData(0xFA, 0xC0, 0x59, 0xA2, 0xDF, 0xAE)) // 4-1: 10
gradientData.push(new GradientData(0x19, 0x1B, 0x48, 0x00, 0x00, 0x00))
gradientData.push(new GradientData(0x84, 0x84, 0x84, 0x9E, 0xCA, 0xA3))
gradientData.push(new GradientData(0x48, 0x0F, 0x0F, 0x1E, 0x0A, 0x0A))
gradientData.push(new GradientData(0x1E, 0x0A, 0x0A, 0x7C, 0x00, 0x00)) // 5-1: 14
gradientData.push(new GradientData(0x7C, 0x00, 0x00, 0x00, 0x35, 0x64)) // 6-1: 15
gradientData.push(new GradientData(0xF0, 0xF8, 0xD0, 0x00, 0x2F, 0x57)) 
gradientData.push(new GradientData(0x3F, 0x87, 0xD3, 0x0D, 0x09, 0x39))
gradientData.push(new GradientData(0x0E, 0x3A, 0x55, 0x12, 0x0F, 0x32))
gradientData.push(new GradientData(0x0C, 0x11, 0x34, 0x84, 0x48, 0x14))
gradientData.push(new GradientData(0x6E, 0x5A, 0x93, 0x93, 0x4E, 0x00)) // 7-1: 20
gradientData.push(new GradientData(0xA7, 0x7E, 0xF2, 0xFF, 0xA5, 0x40))
gradientData.push(new GradientData(0xB5, 0x9F, 0xDD, 0xD4, 0xC5, 0x7B))
gradientData.push(new GradientData(0x8A, 0xBF, 0xFF, 0x50, 0xA3, 0x5F)) 
gradientData.push(new GradientData(0x5D, 0x40, 0x6C, 0xE5, 0xCA, 0xFF)) // 8-1: 24
gradientData.push(new GradientData(0xED, 0x69, 0xAA, 0x7A, 0x28, 0xC9)) // 8-3: 25
gradientData.push(new GradientData(0xC8, 0x00, 0x69, 0x29, 0x08, 0x38)) // 9-1: 26
gradientData.push(new GradientData(0x4E, 0x00, 0x22, 0x07, 0x00, 0x2C))
gradientData.push(new GradientData(0x30, 0x00, 0x2E, 0x00, 0x30, 0x21)) // 3-A: 28
gradientData.push(new GradientData(0x06, 0x04, 0x04, 0x38, 0x11, 0x11))
gradientData.push(new GradientData(0xFC, 0xFF, 0x86, 0xC0, 0xC1, 0x9A))
gradientData.push(new GradientData(0xE5, 0xFE, 0xC8, 0x48, 0xBD, 0x59))
function SCN(scanline){
  var ADDR = 0x3FC0
  var LINE = 135
  var index = fieldSystem.background.number
  if(index < gradientData.length){
    var dR = gradientData[index].sR - gradientData[index].eR
    var dG = gradientData[index].sG - gradientData[index].eG
    var dB = gradientData[index].sB - gradientData[index].eB
    var vR = Math.floor((dR/LINE) * scanline)
    var vG = Math.floor((dG/LINE) * scanline)
    var vB = Math.floor((dB/LINE) * scanline)
  
    poke(ADDR+0, gradientData[index].sR - vR)
    poke(ADDR+1, gradientData[index].sG - vG)
    poke(ADDR+2, gradientData[index].sB - vB)
  } else {
    poke(ADDR+0, 0x00)
    poke(ADDR+1, 0x00)
    poke(ADDR+2, 0x00)
  }
}
var colorId = { BLACK:0, PURPLE:1, RED:2, ORANGE:3, YELLOW:4, LIGHT_GREEN:5, GREEN:6,
  DARK_GREEN:7, DARK_BLUE:8, BLUE:9, LIGHT_BLUE:10, CYAN:11, WHITE:12, LIGHT_GREY:13, GREY:14, DARK_GREY:15}
var buttonId = { UP:0, DOWN:1, LEFT:2, RIGHT:3, A:4, B:5, X:6, Y:7 }
var soundId = {
  unused:0,
  systemCursor:1,
  systemSelect:2,
  systemCancle:3,
  enemyDieSmall:4,
  enemyDieBullon:5,
  enemyDieDrink:6,
  enemyDieCar:7,
  enemyDieMiddle:8,
  enemyDieBig:9,
  enemyDiePillar:10,
  enemyDieMonster:11,
  enemyDieRocket:12,
  carHorn1:13,
  systemBuzzer:14,
  score:15,
  skillLaserUse:16,
  skillLaserShot:17,
  skillMissileShot:18,
  skillMissileHit:19,
  skillSapiaUse:20,
  skillSapiaHit:21,
  enemyDieGemA:22,
  enemyDieGemB:23,
  enemyDieGemC:24,
  levelUp:25,
  damageSmall:26,
  damageMiddle:27,
  damageBig:28,
  playerDie:29,
  enemyDieRobotA:30,
  enemyDieRobotB:31,
  enemyDieMetal:32,
  enemyDieElectronic:33,
  enemyDieCharacter:34,
  enemyDieMaster:35,
  enemyDieBrick:36,
  enemyDieBubble:37,
  enemyDieBubbleBig:38,
  enemyDiePotion:39,
  skillSwordUse:40,
  skillSwordHit:41,
  skillBlaster:42,
  enemyDieCube:43,
  skillLinelaser:44,
  skillThunder:45,
  skillRipple:46,
  skillBomb:47,
  skillAirplane:56,
  skillCrescent:57,
  skillSkull:58,
}
var musicId = {
  stop:-1,
  r1_1:0, r1_2:1, r1_3:2, r1_b:3,
  r2_1:4, r2_2:5, r2_3:6,
  r3_1:7, r3_2:8, r3_b:9,
  r4_1:10, r4_2:11, r4_4:12,
  r5_1:13,
  r6_1:14, r6_3:15,
  r7_1:16, r7_4:17,
  r8_1:18,
  r9_1:19, r9_2:20
}
var spriteId = {
  mainSystemArrowLeft:286,
  mainSystemArrowUp:287,
  player:256,
  roundTestBox:2,
  digitalNumber:262,
  buttonX:280,
  buttonY:281,
  buttonB:282,
  buttonDisableX:283,
  buttonDisableY:284,
  buttonDisableB:285,
  checkBoxUnchecked:278,
  checkBoxChecked:279,
  unused:0,

  weaponLaserA:272,
  weaponLaserB:273,
  weaponMissileA:258,
  weaponMissileB:260,
  weaponMissileEffect:288,
  weaponArrowA:274,
  weaponArrowB:275,

  skillLaser:276,
  skillMissile:292,
  skillMissileEffect:304,
  skillSapia:309,
  skillSapiaSub:308,
  skillBlaster:310,
  skillBlasterShot:311,
  skillSword:294,
  skillLineLaser:100,
  skillThunder:101,
  skillRipple:116,
  skillBomb:102,
  skillBombEffect:104,
  skillHyperBall:103,
  skillWhiteFlash:119,
  skillCrescent:120,
  skillCrescentSub:121,
  skillAirplane:122,
  skillSkull:108,

  enemyTest:306,
  enemyBullonRed:296,
  enemyBullonBlue:297,
  enemyDrinkWater:328,
  enemyDrinkEnergy:329,
  enemyRocketA:298,
  enemyRocketB:314,
  enemyDrawer:330,
  enemySunglasses:346,
  enemyBigCar:300,
  enemyBigBall:332,
  enemyBigBox:302,
  enemyBigRedMonster:334,
  enemyStreetLight:360,
  enemyUtilityPole:361,
  enemyCar:362,
  enemyBus:378,
  enemyBigVendingMachine:364,
  enemyTrafficLightGreen:382,
  enemyTrafficLightRed:366,

  enemyHammer:392,
  enemyTorch:393,
  enemyBigStone:394,
  enemyBigBlueMonster:396,
  enemyStone1:394,
  enemyStone2:395,
  enemyStone3:410,
  enemyStone4:411,
  enemyGarnet:424,
  enemyAmethyst:440,
  enemyEmerald:425,
  enemySapphire:441,
  enemyGold:426,
  enemySilver:442,
  enemyDiamond:428,
  enemyTreasureChest:430,
  enemyDrill:399,
  enemyCart:456,
  enemyBigCart:458,
  enemyMagnet:472,
  enemyEnergyCart:460,

  enemyRobotRed:492,
  enemyRobotBlue:493,
  enemyRobotGreen:494,
  enemyRobotWhite:495,
  enemyOutlet:488,
  enemyMetalBlue:489,
  enemyMetalGreen:504,
  enemyMetalRed:505,
  enemyElectronicA:490,
  enemyElectronicB:506,
  enemyComputerBooting:462,
  enemyComputerDesktop:478,
  enemyComputerBlueScreen:463,
  enemyComputerDie:479,
  enemyBigLever:454,
  enemyRobotOrange:232,
  enemyRobotCyan:233,
  enemySuperElectronicA:234,
  enemySuperElectronicB:250,
  enemyComputerMyComputer:236,
  enemyComputerEnternet:237,
  enemyComputerSmlie:252,
  enemyComputerRedScreen:253,

  enemyCharacter1:448,
  enemyCharacter2:449,
  enemyCharacter3:450,
  enemyCharacter4:451,
  enemyBigMaster1:480,
  enemyBigMaster2:482,
  enemyBigMaster3:484,
  enemyBigMaster4:486,
  enemyTree:452,
  enemyApple:453,
  enemyLeap:469,
  enemyBrickOrange:416,
  enemyBrickDark:417,
  enemyBigSculpture:418,
  enemySculpture1:418,
  enemySculpture2:419,
  enemySculpture3:434,
  enemySculpture4:435,
  enemyBarracks:420,
  enemyCrazyGuy:422,
  enemyCrazyGuyEnimation:423,
  enemyIce:439,

  enemyRound5:358,
  enemyCloudWhite:4,
  enemyCloudBlack:20,

  enemyPotionRed:352,
  enemyPotionBlue:353,
  enemyPotionGreen:368,
  enemyPotionGrey:369,
  enemyPotionBigRainbow:354,
  enemyBubbleYellow:384,
  enemyBubblePurple:385,
  enemyBubbleBlue:400,
  enemyBubbleGreen:401,
  enemyBubbleRed:386,
  enemyBubbleLime:402,
  enemyBigBubble:388,
  enemyOxygenTank:387,
  enemySubmarin:390,
  enemyFish:356,
  enemyFishBlack:372,
  enemyCamera:406,

  enemyPieceSquare:320,
  enemyPieceCircle:321,
  enemyPieceTriangle:336,
  enemyPiecePentagon:337,
  enemyCubeRed:322,
  enemyCubeBlue:323,
  enemyCubeGreen:338,
  enemyCubeGrey:339,
  enemyBigCube:324,
  enemyPenroseTriangle:326,

  enemyLamp:96,
  enemyPlate:112,
  enemyCandle:98,
  enemyHotdog:99,
  enemyPurpleIllusion:70,

  ebulletTest:306,
  ebulletDrinkSmall:367,
  ebulletLight:383,
  ebulletDrinkWater:328,
  ebulletSpeedCar:362,
  ebulletSpeedBus:378,
  ebulletTorch:398,
  ebulletCart:474,
  ebulletRobotMissile:414,
  ebulletRobotLaser:0,
  ebulletHeal:0,
  ebulletElectricity:0,
  ebulletElectronicA:0,
  ebulletElectronicB:0,
  ebulletShuriken:438,
  ebulletIce:439,
  ebulletApple:455,
  ebulletLeap:469,

  effectDieSmall:128,
  effectDieBullon:216,
  effectDieMiddle:200,
  effectDieRocket:144,
  effectDieCar:160,
  effectDieMonster:176,
  effectDieGem:192,
  effectDieBrink:208,
  effectDieCharacter:224,
  effectDieElectronic:168,
  effectDieBubble:136,
  effectDiePotion:152,
  effectDieRobot:184,
  effectDieCube:240,

  r1_1:4,
  r1_2:6,
  r1_3:8,
  r2_1:12,
  r3_3:34,
  r5_A:238,
  r6_5:46,
  r8_1:64,
  r8_3:66,
  r9_1:68,
  rEx_1:72,
  rEx_2:74,
  rEx_3:76,
}
var weaponId = {
  laserA:0,
  laserB:1,
  missileA:2,
  missileB:3,
  arrowA:4,
  arrowB:5,

  skillLaser:6,
  skillMissile:7,
  skillSapia:8,
  skillSapiaSub:9,
  skillSword:10,
  skillBlaster:11,
  skillLinelaser:12,
  skillThunder:13,
  skillThunderSub:14,
  skillRipple:15,
  skillBomb:16,
  skillHyperBall:17,
  skillWhiteFlash:18,
  skillCrescent:20,
  skillCrescentSub:21,
  skillAirplane:22,
  skillSkull:23,

  subWeaponBlaster:24,
}
var enemyId = {
  unused:0,
  TEST:22,
  E100_bullonRed:1,
  E101_bullonBlue:2,
  E102_drinkWater:3,
  E103_drinkEnergy:4,
  E104_rocketA:5,
  E105_rocketB:6,
  E106_drawer:7,
  E107_sungglasses:8,
  E108_bossBullon:9,
  E110_bigCar:10,
  E111_bigBall:11,
  E112_bigBox:12,
  E113_bigRedMonster:13,
  E114_bossVendingMachine:14,
  E120_streetLight:15,
  E121_utilityPole:16,
  E122_car:17,
  E123_bus:18,
  E124_bigVendingMachine:19,
  E125_bossTrafficLight:20,
  E126_superBox:21,

  E200_hammer:24,
  E201_torch:25,
  E202_stonePiece:26,
  E203_bigStone:27,
  E204_brokenStone:28,
  E205_bigBlueMonster:29,
  E206_bossBox:30,
  E210_garnet:31,
  E211_amethyst:32,
  E212_emerald:33,
  E213_sapphire:34,
  E214_gold:35,
  E215_silver:36,
  E216_diamond:37,
  E217_bossTreasureChest:38,
  E218_drill:39,
  E220_cart:40,
  E221_bigCart:41,
  E222_magnet:42,
  E223_bus:43,
  E224_bossCart:44,

  E300_robotRed:45,
  E301_robotBlue:46,
  E302_robotGreen:47,
  E303_robotWhite:48,
  E304_metalRed:49,
  E307_outlet:50,
  E308_electronicA:51,
  E309_electronicB:52,
  E310_bossRobotA:53,
  E311_bossRobotB:54,
  E312_bossRobotC:55,
  E313_bossRobotD:56,
  E320_bossComputer1:57,
  E321_bossComputer2:58,
  E322_bossComputer3:59,
  E323_bossComputer4:60,
  E324_bossComputer5:61,
  E325_bossRobotWhite:62,
  E330_machineBall:63,
  E331_machineCar:64,
  E332_machineBox:65,
  E340_bossLever:66,
  E341_newRoundLever:67,
  E342_metalColor:68,
  
  E3A00_superLever:69,
  E3A01_robotOrange:70,
  E3A02_robotCyan:71,
  E3A03_superElectnoricA:72,
  E3A04_superElectnoricB:73,
  E3C00_superComputer:74,

  E400_magician:80,
  E401_summoner:81,
  E402_master:82,
  E403_tree:84,
  E404_apple:85,
  E405_leap:86,
  E406_brickOrange:87,
  E407_brickDark:88,
  E408_sculpture:89,
  E409_sculpturePiece:90,
  E410_rocket:91,
  E411_bossCrazyGuy:92,
  E412_bossCrazyGuyTotal:93,
  E413_bossBarracks:94,
  E414_streetLight:95,
  E415_crazyGuy:96,
  E420_summonStone:97,
  E421_summonGem:98,
  E422_summonTree:99,
  E423_summonMetal:100,
  E424_summonIce:101,
  E425_summonTouch:102,
  E430_bossMagicianFire:103,
  E431_bossMagicianIce:104,
  E432_bossMagicianShuriken:105,
  E433_bossMagicianLeaf:106,
  E434_bossMagicianHeal:107,
  E435_bossMagicianPartyHeal:108,

  E500_round5:110,
  E501_bus:111,
  E502_ball:112,
  E503_robot:113,

  E510_blackMonster:114,
  E511_whiteCloud:115,
  E512_blackCloud:116,

  E600_potionRed:120,
  E601_potionBlue:121,
  E602_potionGreen:122,
  E603_potionGrey:123,
  E604_potionRainbow:124,
  E605_bossPotion:125,
  E606_redMonster:126,
  E607_monsterBlue:127,
  E608_bossPotionMatryoshka:128,
  E610_bubbleSmall:129,
  E611_bubbleMiddle:130,
  E616_bubbleBig:131,
  E617_bubbleBoss:132,
  E620_oxygenTank:133,
  E621_fish:134,
  E622_fishBlack:135,
  E623_submarine:136,
  E624_camera:137,
  E625_bossFish:138,
  E630_plasticTrash:139,
  E631_plasticTrashUpgrade:140,
  E640_bossTrash:141,

  E700_square:145,
  E701_squarePiece:146,
  E702_circle:147,
  E703_circlePiece:148,
  E704_triangle:149,
  E705_trianglePiece:150,
  E706_pentagon:151,
  E707_pentagonPiece:152,
  E708_bossShape:153,
  E709_bossShapePiece:154,
  E710_smallCubeRed:155,
  E711_bigCubeRed:156,
  E712_smallCubeBlue:157,
  E713_bigCubeBlue:158,
  E714_smallCubeGreen:159,
  E715_bigCubeGreen:160,
  E716_smallCubeGrey:161,
  E717_bigCubeGrey:162,
  E718_bossCubeColor:163,
  E720_cubeNormal:164,
  E721_cubeBig:165,
  E724_cubePiece:166,
  E725_cubePieceSub:167,
  E728_bossCubeBig:168,
  E730_penroseTriange:169,

  E800_bullonRed:170,
  E801_bullonBlue:171,
  E802_streetLight:172,
  E803_utilityPole:173,

  E804_stone:174,
  E805_brokenStone:175,
  E807_sapphire:176,
  E808_gold:177,
  E809_diamond:178,

  E810_robotA:179,
  E811_robotB:180,
  E812_electronicA:181,
  E813_electronicB:182,

  E814_tree:183,
  E815_apple:184,
  E816_leap:185,
  E817_sculpture:186,
  E818_sculptureSub:187,
  E819_brickDark:188,

  E820_robotWhite:189,
  E821_crazyGuy:190,

  E830_monsterRed:191,
  E831_monsterBlue:192,
  E832_master:193,
  E833_magician:194,

  E834_rocketA:195,
  E835_rocketB:196,
  E836_car:197,
  E837_bus:198,

  E840_potion:199,
  E841_bubble:200,

  E842_shape:201,
  E843_cube:202,

  E844_ball:203,
  E845_speedCar:204,

  E850_bossBullon:205,
  E851_bossTresureChest:206,
  E852_bossRobotWhite:207,
  E853_bossCrazyGuy:208,
  E854_bossFish:209,
  E855_bossColorCube:210,

  E860_bossBox:211,
  E861_bossCube:212,
  E862_bossCubeSub:213,
  E863_bossDiamond:214,

  E900_lamp:215,
  E901_plate:216,
  E902_candle:217,
  E903_hotdog:218,
  E904_monsterRed:219,
  E905_monsterBlue:220,
  E906_potion:221,
  E907_bus:222,
  E908_robotWhite:223,
  E910_finalBoss:224
}
var ebulletId = {
  test:0,
  streetLight:1,
  drinkSmall:2,
  drinkWater:3,
  speedCar:4,
  speedBus:5,
  ball:6,
  torch:7,
  randomGem:8,
  cart:9,
  robotMissile:10,
  robotLaser:11,
  heal:12,
  electricity:13,
  electronicA:14,
  electronicB:15,
  magicFire:16,
  magicIce:17,
  magicShuriken:18,
  magicLeap:19,
  potionRed:20,
  potionBlue:21,
  potionGreen:22,
  potionGrey:23,
  potionRainbow:24,
  potionPotion:25,
  oxygenBubble:26,
  submarineRocket:27,
  cubeLaser:28,
  cubeRed:29,
  cubeGrey:30,
  lamp:31,
  plate:32,
  purpleLaser:33,
  bigSquare:34,
  greyArea:35,
}
var roundId = {
  test:0,
  r1_1:1, r1_2:2, r1_3:3,
  r2_1:4, r2_2:5, r2_3:6,
  r3_1:7, r3_2:8, r3_3:9,
  r4_1:10, r4_2:11, r4_3:12, r4_4:13,
  r5_1:14,
  r6_1:15, r6_2:16, r6_3:17, r6_4:18, r6_5:19,
  r7_1:20, r7_2:21, r7_3:22, r7_4:23,
  r8_1:24, r8_2:25, r8_3:26, r8_4:27,
  r9_1:28, r9_2:29,
  r3_3A:30, r3_3B:31, r3_3C:32, r5_1A:33, rEx_1:34, rEx_2:35, rEx_3:36
}
var fieldSize = {
  FIELD_X:240,
  FIELD_Y:120,
  OUT_LEFT:-120,
  OUT_RIGHT:240+120,
  OUT_UP:-120,
  OUT_DOWN:120+120,
  RESET_RIGHT:240+60,
  RESET_LEFT:-60,
  RESET_UP:-60,
  RESET_DOWN:120+60
}

var mySystem = {
  getPercent: function (mainValue, maxValue) {
    return (mainValue / maxValue) * 100
  },
  random:function(min, max){
    if(max === undefined) return Math.random() * min
    else return (Math.random() * (max - min)) + min
  },
  randomInt:function(min, max, maxInclusive){
    if(maxInclusive === true) return Math.floor(Math.random() * (max - min + 1)) + min
    else return Math.floor(Math.random() * (max - min)) + min
  },
  randomBoolean:function(){
    if(Math.random() < 0.5) return true
    else return false
  },
}

function FieldObject(){
  this.init()
}
FieldObject.prototype.init = function(){
  this.index = 0
  this.x = 0
  this.y = 0
  this.w = 1
  this.width = 8
  this.h = 1
  this.height = 8
  this.scale = 1
  this.speedX = 0
  this.speedY = 0
  this.moveX = 0
  this.moveY = 0
  this.gravity = 0
  this.objectType = ''
  this.mainType = ''
  this.subType = ''
  this.status = ''
  this.idValue = 0
  this.spriteId = 0
  this.isUsing = false
  this.flip = 0
  this.rotate = 0
  this.outAreaFrame = 0

  this.hp = 0
  this.hpMax = 0
  this.isChase = false
  this.chaseFrame = 0
  this.targetNumber = -1
  this.attack = 0
  this.attackDelay = 60
  this.attackDelayCount = 0
  this.count = 0
  this.delay = 0
  this.delayCount = 0
  this.score = 0
  this.repeatCount = 0

  this.tempInit = false
  this.tempNumber = 0
  this.tempArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  this.tempString = ''
}
FieldObject.prototype.display = function(){
  if(this.isUsing && this.spriteId) displaySystem.object(this)
}
FieldObject.prototype.process = function(){}
FieldObject.prototype.move = function(){
  this.x += this.speedX
  this.y += this.speedY
  if(this.x >= fieldSize.OUT_RIGHT || this.y >= fieldSize.OUT_DOWN || 
    this.y <= fieldSize.OUT_UP || this.x <= fieldSize.OUT_LEFT){
    this.outAreaFrame++
    if(this.outAreaFrame >= 120) this.init()
  }
}
FieldObject.prototype.tempInitCheck = function(){
  if(!this.tempInit){
    this.tempInit = true
    return true
  } else {
    return false
  }
}

function WeaponData(){}
WeaponData.prototype = new FieldObject()
WeaponData.prototype.setData = function(spriteId, speedX, speedY, w, h, scale, isChase, repeatCount, delay){
  this.spriteId = spriteId
  this.speedX = speedX
  this.speedY = speedY
  this.w = w
  this.h = h
  this.scale = scale
  this.isChase = isChase
  this.repeatCount = repeatCount
  this.delay = delay
}
WeaponData.prototype.attack = function(){
  if(this.delayCount < this.delay) return
  for(var i = 0; i < fieldSystem.enemy.length; i++){
    var enemy = fieldSystem.enemy[i]
    if(enemy.isUsing && fieldSystem.collision(this, enemy)){
      enemy.hp -= this.attack
      this.repeatCount--
      this.delayCount = 0
      if(this.repeatCount < 1){
        this.init()
      }
    }
  }
}
WeaponData.prototype.process = function(){
  this.delayCount++
  if(this.x >= fieldSize.OUT_RIGHT || this.y >= fieldSize.OUT_DOWN ||
    this.y <= fieldSize.OUT_UP || this.x <= fieldSize.OUT_LEFT){
    this.outAreaFrame++
    if(this.outAreaFrame >= 30) this.init()
  } else {
    this.outAreaFrame = 0
  }
}
WeaponData.prototype.moveChase = function(){
  if(this.targetNumber == -1){
    this.isChase = false
    this.speedX = 8
    this.speedY = 0
    return
  }

  var enemy = fieldSystem.enemy[this.targetNumber]
  if(!enemy.isUsing){
    this.targetNumber = fieldSystem.getRandomIndex(fieldSystem.enemy)
    return
  }

  this.chaseFrame++
  var enemyCenterX = enemy.x + (enemy.w * 8 * enemy.scale / 2)
  var enemyCenterY = enemy.y + (enemy.h * 8 * enemy.scale / 2)

  if(this.chaseFrame >= 60){
    this.x = enemy.x
    this.y = enemy.y
    return
  }

  var distanceX = enemyCenterX - this.x
  var distanceY = enemyCenterY - this.y
  this.speedX = distanceX / 20
  this.speedY = distanceY / 20

  if(this.speedX <= 0 && this.speedX > -4) this.speedX = -4
  else if(this.speedX > 0 && this.speedX < 4) this.speedX = 4

  if(this.speedY <= 0 && this.speedY > -4) this.speedY = -4
  else if(this.speedY > 0 && this.speedY < 4) this.speedY = 4

  if(Math.abs(distanceX) <= 4) this.x = enemyCenterX
  if(Math.abs(distanceY) <= 4){
    this.y = enemyCenterY
    this.speedY = 0
  }
}
WeaponData.prototype.move = function(){
  if(this.isChase) WeaponData.prototype.moveChase.call(this)
  this.x += this.speedX
  this.y += this.speedY
}
WeaponData.prototype.lineChase = function(divideSpeed, minSpeed, targetX, targetY){
  divideSpeed = typeof divideSpeed == 'undefined' ? 60 : divideSpeed
  minSpeed = typeof minSpeed == 'undefined' ? 4 : minSpeed
  targetX = typeof targetX == 'undefined' ? 0 : targetX
  targetY = typeof targetY == 'undefined' ? 0 : targetY
  while(divideSpeed >= 1){
    this.speedX = (targetX - this.x) / divideSpeed
    this.speedY = (targetY - this.y) / divideSpeed
    if(Math.abs(this.speedX) > minSpeed || Math.abs(this.speedY) > minSpeed) break
    divideSpeed--
  }
}
var weaponData = [new WeaponData()]
var weaponFunction = new WeaponData()
for(i = 0; i < 25; i++)  weaponData.push(new WeaponData());
(function weaponDataInput(){
weaponData[weaponId.laserA].setData(spriteId.weaponLaserA, 8, 0, 1, 1, 1, true, 1, 0)
weaponData[weaponId.laserA].move = function(){
  if(this.isChase && this.targetNumber != -1){
    var enemy = fieldSystem.enemy[this.targetNumber]
    this.isChase = false
    var enemyCenterX = enemy.x + (enemy.w * 8 * enemy.scale / 2)
    var enemyCenterY = enemy.y + (enemy.h * 8 * enemy.scale / 2)
    weaponFunction.lineChase.call(this, 12, 8, enemyCenterX, enemyCenterY)
  } else {
    this.isChase = false
  }
  weaponFunction.move.call(this)
}
weaponData[weaponId.laserB].setData(spriteId.weaponLaserB, 8, 0, 1, 1, 1, false, 1, 0)
weaponData[weaponId.laserB].move = function(){
  if(this.mainType == 'up'){
    this.speedY = -0.5
    this.mainType = ''
  } else if(this.mainType == 'down'){
    this.speedY = 0.5
    this.mainType = ''
  }
  weaponFunction.move.call(this)
}
weaponData[weaponId.missileA].setData(spriteId.weaponMissileA, 5, 0, 2, 1, 1, true, 9, 4)
weaponData[weaponId.missileB].setData(spriteId.weaponMissileB, 4, 0, 2, 1, 1, false, 9, 4)
weaponData[weaponId.missileB].move = function(){
  if(this.mainType == 'up'){
    this.speedY = -0.2
    this.mainType = ''
  } else if(this.mainType == 'down'){
    this.speedY = 0.2
    this.mainType = ''
  }
  weaponFunction.move.call(this)
}
weaponData[weaponId.missileA].attack = function(){
  var splashTrue = false
  if(this.mainType == ''){
    for(var i = 0; i < fieldSystem.enemy.length; i++){
      if(fieldSystem.enemy[i].isUsing && fieldSystem.collision(this, fieldSystem.enemy[i])){
        splashTrue = true
        break
      }
    }
  } else if(this.mainType == 'splash'){
    var effectSprite = spriteId.weaponMissileEffect
    if(this.idValue == weaponId.skillMissile) effectSprite = spriteId.skillMissileEffect
    else if(this.idValue == weaponId.skillBomb) effectSprite = spriteId.skillBombEffect

    var effectPosition = this.delayCount <= 3 ? this.delayCount : 3
    this.spriteId = effectSprite + effectPosition
    if(this.idValue == weaponId.skillMissile) this.scale = 6
    else if(this.idValue == weaponId.skillBomb) this.scale = 7

    if(this.delayCount >= this.delay){
      this.delayCount -= this.delay
      for(i = 0; i < fieldSystem.enemy.length; i++){
        if(!fieldSystem.enemy[i].isUsing) continue
        if(fieldSystem.collision(this, fieldSystem.enemy[i])) fieldSystem.enemy[i].hp -= this.attack
      }
      this.repeatCount--
      if(this.repeatCount <= 0) this.init()
    }
  } else if(this.mainType == 'splashTrue'){
    splashTrue = true
  }

  if(splashTrue){
    this.speedX = 0
    this.speedY = 0
    this.isChase = false
    this.mainType = 'splash'
    this.targetNumber = -1
    this.delayCount = this.delay
    this.delayCount = 0
    this.spriteId = 0
    this.scale = 4
    this.w = 1
    this.h = 1
    if(this.idValue == weaponId.skillMissile || this.idValue == weaponId.skillBomb) soundSystem.play(soundId.skillMissileHit)
  }
}
weaponData[weaponId.missileB].attack = weaponData[weaponId.missileA].attack
weaponData[weaponId.arrowA].setData(spriteId.weaponArrowA, 8, 1.5, 1, 1, 1, false, 1)
weaponData[weaponId.arrowB].setData(spriteId.weaponArrowB, 8,-1.5, 1, 1, 1, false, 1)
weaponData[weaponId.arrowA].move = function(){
  if(this.tempInitCheck()){
    this.tempNumber = 3
  }

  if(this.y <= 0 && this.speedY < 0) this.speedY = Math.abs(this.speedY)
  if(this.y >= fieldSize.FIELD_Y && this.speedY > 0) this.speedY = -Math.abs(this.speedY)

  if(this.x >= fieldSize.FIELD_X + 16 && this.speedX > 0){
    this.speedX = -Math.abs(this.speedX)
    this.tempNumber--
  }
  if(this.x <= -16 && this.speedX < 0){
    this.speedX = Math.abs(this.speedX)
    this.tempNumber--
  }
  
  if(this.tempNumber < 0) this.init()
  weaponFunction.move.call(this)
}
weaponData[weaponId.arrowB].move = weaponData[weaponId.arrowA].move
weaponData[weaponId.skillLaser].setData(spriteId.skillLaser, 8, 0, 2, 1, 2, true, 1, 0)
weaponData[weaponId.skillMissile].setData(spriteId.skillMissile, 8, 0, 2, 1, 2, true, 20, 4)
weaponData[weaponId.skillMissile].attack = weaponData[weaponId.missileA].attack
weaponData[weaponId.skillSapia].setData(spriteId.skillSapia, 0, 0, 1, 1, 2, false, 60, 6)
weaponData[weaponId.skillSapiaSub].setData(spriteId.skillSapiaSub, 0, 0, 1, 1, 2, false, 1, 0)
weaponData[weaponId.skillSapia].attack = function(){
  var plusY = 0
  if(this.subType == '0') plusY = 32
  else if(this.subType == '1') plusY = 0
  else if(this.subType == '2') plusY = -32

  var area = { x:0, y:0, h:0, w:0, scale:1 }
  area.w = 30
  area.h = 15
  area.x = playerSystem.x - (area.w * 8 / 2)
  area.y = playerSystem.y - (area.h * 8 / 2) + plusY
  area.scale = 1

  if(this.subType == '0')      displaySystem.line(playerSystem.x,   playerSystem.y,   this.x,   this.y,   colorId.CYAN)
  else if(this.subType == '1') displaySystem.line(playerSystem.x-2, playerSystem.y-2, this.x-2, this.y-2, colorId.LIGHT_BLUE)
  else if(this.subType == '2') displaySystem.line(playerSystem.x+2, playerSystem.y+2, this.x+2, this.y+2, colorId.BLUE)

  if(this.targetNumber != -1 && fieldSystem.enemy[this.targetNumber].isUsing && fieldSystem.collision(area, fieldSystem.enemy[this.targetNumber])){
    this.x = fieldSystem.enemy[this.targetNumber].x
    this.y = fieldSystem.enemy[this.targetNumber].y
  } else {
    this.x = playerSystem.x + ((area.w / 2) * 8)
    this.y = playerSystem.y + plusY
    this.targetNumber = -1
    var randomIndex = mySystem.randomInt(0, fieldSystem.enemy.length)
    for(var i = randomIndex; i < fieldSystem.enemy.length; i++){
      if(fieldSystem.enemy[i].isUsing && fieldSystem.collision(area, fieldSystem.enemy[i])){
        this.targetNumber = i
        break
      }
    }
    for(i = 0; this.targetNumber == -1 && i < randomIndex; i++){
      if(fieldSystem.enemy[i].isUsing && fieldSystem.collision(area, fieldSystem.enemy[i])){
        this.targetNumber = i
        break
      }
    }
  }

  if(this.delayCount % 3 == 0) soundSystem.play(soundId.skillSapiaHit, 0)
  if(this.delayCount >= this.delay){
    this.delayCount = 0
    this.repeatCount--
    if(this.targetNumber != -1){
      fieldSystem.enemy[this.targetNumber].hp -= this.attack
      this.repeatCount--
    }

    var inputStr = this.x + ' ' + this.y
    fieldSystem.insertWeapon(weaponId.skillSapiaSub, this.attack, playerSystem.x, playerSystem.y, inputStr)
  }
  if(this.repeatCount <= 0) this.init()
}
weaponData[weaponId.skillSapiaSub].move = function(){
  if(this.tempInitCheck()){
    var getX = Number(this.mainType.split(' ')[0])
    var getY = Number(this.mainType.split(' ')[1])
    weaponFunction.lineChase.call(this, 12, 8, getX, getY)
  }
  weaponFunction.move.call(this)
}
weaponData[weaponId.skillSword].setData(spriteId.skillSword, 0.5, 0, 2, 1, 1, false, 40, 6)
weaponData[weaponId.skillSword].attack = function(){
  weaponFunction.move.call(this)
  if(this.delayCount <= 30) return
  if(this.delayCount % this.delay != 0) return

  var area = { x:0, y:0, w:0, h:0, scale:1 }
  area.x = this.x - 8
  area.y = this.y - 8
  area.w = this.w * 2
  area.h = this.h * 2
  area.scale = 16
  this.targetNumber = fieldSystem.getRandomIndex(fieldSystem.enemy)
  if(this.targetNumber >= 0){
    var enemy = fieldSystem.enemy[this.targetNumber]
    this.x = enemy.x - 8
    this.y = enemy.y - 2
    enemy.hp -= this.attack
    soundSystem.play(soundId.skillSwordHit)
    this.repeatCount--
    if(this.repeatCount <= 0) this.init()
  }
}
weaponData[weaponId.skillBlaster].setData(spriteId.skillBlasterShot, 12, 0, 1, 1, 1, false, 1)
weaponData[weaponId.skillLinelaser].setData(0, 6, 0, 10, 1, 1, false, 5, 0)
weaponData[weaponId.skillLinelaser].move = function(){
  if(this.tempInitCheck()){
    this.x = -60
    this.y += mySystem.randomInt(-16, 16, true)
  }
  weaponFunction.move.call(this)
  displaySystem.rect(this.x, this.y, 80, 1, colorId.GREY)
  displaySystem.rect(this.x, this.y + 1, 80, 1, colorId.LIGHT_GREY)
  displaySystem.rect(this.x, this.y + 2, 80, 5, colorId.WHITE)
  displaySystem.rect(this.x, this.y + 6, 80, 1, colorId.LIGHT_GREY)
  displaySystem.rect(this.x, this.y + 7, 80, 1, colorId.GREY)
}
weaponData[weaponId.skillLinelaser].attack = function(){
  for(var i = 0, l = fieldSystem.enemy.length; i < l; i++){
    if(fieldSystem.enemy[i].isUsing && fieldSystem.collision(this, fieldSystem.enemy[i])){
      fieldSystem.enemy[i].hp -= this.attack
      this.repeatCount--

      if(this.repeatCount <= 0){
        this.init()
        return
      }
    }
  }
}
weaponData[weaponId.skillRipple].setData(spriteId.skillRipple, 4, 0, 1, 1, 1, false, 1, 0)
weaponData[weaponId.skillRipple].move = function(){
  var INDEX_X = 0
  var INDEX_Y = 1
  var MAX_DELAY = 2
  if(this.tempInitCheck()){
    this.tempArray[INDEX_X] = this.x - 32
    this.tempArray[INDEX_Y] = this.y
    switch(this.subType){
      case '0': this.speedY = -0.4; break
      case '1': this.speedY = -0.2; break
      case '3': this.speedY = 0.2; break
      case '4': this.speedY = 0.4; break
    }
  }
  this.tempArray[INDEX_X] += this.speedX
  this.tempArray[INDEX_Y] += this.speedY

  this.scale = Math.floor(this.delayCount / MAX_DELAY)
  if(this.scale >= 6) this.scale = 6
  if(this.delayCount <= MAX_DELAY * 4 && this.delayCount % MAX_DELAY == 0) this.spriteId = spriteId.skillRipple
  else if(this.delayCount % MAX_DELAY == 2) this.spriteId = spriteId.skillRipple + 1
  this.y = this.tempArray[INDEX_Y] - (this.h * 8 * this.scale / 2)
  this.x = this.tempArray[INDEX_X] - (this.w * 8 * this.scale / 2)
}
weaponData[weaponId.skillThunder].setData(spriteId.skillThunder, 8, 0, 1, 1, 2, false, 10, 2)
weaponData[weaponId.skillThunder].move = function(){
  if(this.targetNumber != -1){
    this.x = fieldSystem.enemy[this.targetNumber].x
    this.y = fieldSystem.enemy[this.targetNumber].y
    if(!fieldSystem.enemy[this.targetNumber].isUsing){
      this.targetNumber = -1
    }
  } else {
    weaponFunction.move.call(this)
    this.targetNumber = fieldSystem.getRandomIndex(fieldSystem.enemy)
  }

  var INDEX_X = 0
  if(this.tempInitCheck()){
    this.tempArray[INDEX_X] = mySystem.randomInt(0, fieldSize.FIELD_X)
    this.y = -(this.h * 8 * this.scale)
  }

  if(this.delayCount % 2 == 0 && this.targetNumber != -1){
    displaySystem.line(this.tempArray[INDEX_X], 0, this.x, this.y, colorId.YELLOW)
    displaySystem.line(this.tempArray[INDEX_X], 0, this.x + 4, this.y + 1, colorId.WHITE)
    displaySystem.line(this.tempArray[INDEX_X], 0, this.x + 8, this.y - 1, colorId.YELLOW)
  }
}
weaponData[weaponId.skillThunder].attack = function(){
  for(var i = 0; i < fieldSystem.enemy.length; i++){
    if(fieldSystem.enemy[i].isUsing && fieldSystem.collision(this, fieldSystem.enemy[i])){
      fieldSystem.enemy[i].hp -= this.attack
      this.repeatCount--
      fieldSystem.insertWeapon(weaponId.skillThunderSub, this.attack, this.x, this.y)
      this.repeatCount--
      if(this.repeatCount <= 0){
        this.init()
        return
      }
    }
  }
}
weaponData[weaponId.skillThunderSub].setData(spriteId.skillThunder, 4, 0, 1, 1, 1, true, 1, 10)
weaponData[weaponId.skillBomb].setData(spriteId.skillBomb, 0, 1, 1, 2, 2, false, 20, 4)
weaponData[weaponId.skillBomb].move = function(){
  if(this.mainType == 'splash') return

  if(this.status == ''){
    this.speedY = -8
    if(this.y < -(this.h * 8 * this.scale)){
      this.x = mySystem.randomInt(0, fieldSize.FIELD_X)
      this.status = 'down'
    }
  } else if(this.status == 'down'){
    if(this.targetNumber == -1 || !fieldSystem.enemy[this.targetNumber].isUsing){
      this.targetNumber = fieldSystem.getRandomIndex(fieldSystem.enemy)
      this.speedY = 2
    } else {
      var targetEnemy = fieldSystem.enemy[this.targetNumber]
      weaponFunction.lineChase.call(this, 2, 10, targetEnemy.x, targetEnemy.y)
      this.speedY = 2
      if(this.y >= targetEnemy.y) this.speedX = 0
    }

    if(this.y + (this.h * 8 * this.scale) >= 120 && this.mainType != 'splash') this.mainType = 'splashTrue'
  }

  weaponFunction.move.call(this) 
}
weaponData[weaponId.skillBomb].attack = function(){
  if(this.status == 'down') weaponData[weaponId.missileA].attack.call(this)
}
weaponData[weaponId.skillHyperBall].setData(spriteId.skillHyperBall, 4, 4, 1, 1, 2, false, 1)
weaponData[weaponId.skillHyperBall].move = function(){
  if(this.y < 0 || this.y + (this.h * 8 * this.scale) > fieldSize.FIELD_Y
  || this.x > fieldSize.OUT_RIGHT || this.x < fieldSize.OUT_LEFT || this.tempInitCheck()){
    var randomNumber = fieldSystem.getRandomIndex(fieldSystem.enemy)
    if(randomNumber != -1){
      var enemy = fieldSystem.enemy[randomNumber]
      weaponFunction.lineChase.call(this, 30, 4, enemy.x, enemy.y)
    } else {
      if(this.speedX < 0) this.speedX = Math.abs(this.speedX)
      else if(this.speedX > 0) this.speedX = -Math.abs(this.speedX)

      if(this.speedY < 0) this.speedY = Math.abs(this.speedY)
      else if(this.speedY > 0) this.speedY = -Math.abs(this.speedY)
    }
  }
  weaponFunction.move.call(this)
  if(this.delayCount >= 120) this.init()
}
weaponData[weaponId.skillWhiteFlash].setData(spriteId.skillWhiteFlash, 8, 0, 1, 1, 2, false, 10, 1)
weaponData[weaponId.skillWhiteFlash].move = function(){
  if(this.x >= fieldSize.OUT_RIGHT) this.x = -(this.w * 8 * this.scale)
  if(this.delayCount % 10 == 0){
    if(this.targetNumber == -1 || !fieldSystem.enemy[this.targetNumber].isUsing){
      this.targetNumber = fieldSystem.getRandomIndex(fieldSystem.enemy)
      this.speedY = 0
    } else {
      var enemy = fieldSystem.enemy[this.targetNumber]
      weaponFunction.lineChase.call(this, 12, 8, enemy.x, enemy.y)
      this.speedX = 8
    }
  }

  weaponFunction.move.call(this)
  if(this.repeatCount <= 0 || this.delayCount >= 120) this.init()
}
weaponData[weaponId.skillCrescent].setData(spriteId.skillCrescent, 0.4, 0, 1, 1, 4, false, 120, 10)
weaponData[weaponId.skillCrescent].move = function(){
  if(this.delayCount % this.delay == 0 && this.repeatCount >= 1){
    fieldSystem.insertWeapon(weaponId.skillCrescentSub, this.attack, this.x, this.y)
    fieldSystem.insertWeapon(weaponId.skillCrescentSub, this.attack, this.x, this.y + 12)
    fieldSystem.insertWeapon(weaponId.skillCrescentSub, this.attack, this.x, this.y + 24)
    fieldSystem.insertWeapon(weaponId.skillCrescentSub, this.attack, this.x, this.y + 36)
    soundSystem.play(soundId.skillCrescent)
    this.repeatCount -= 4
  }
  if(this.repeatCount <= 0) this.init()
  weaponFunction.move.call(this)
}
weaponData[weaponId.skillCrescent].attack = function(){}
weaponData[weaponId.skillCrescentSub].setData(spriteId.skillCrescentSub, 1, 0, 1, 1, 1, false, 1)
weaponData[weaponId.skillCrescentSub].move = function(){
  if(this.tempInitCheck()) enemyFunction.E3Fx_setRandomSpeed.call(this, 8, 0, 12, 4, 0, true)
  enemyFunction.movePositionReset.call(this)
  if(this.delayCount >= 120) this.init()
}
weaponData[weaponId.skillAirplane].setData(spriteId.skillAirplane, 0.4, 0, 2, 1, 1, false, 25, 12)
weaponData[weaponId.skillAirplane].move = function(){
  if(this.tempInitCheck()){
    this.y = mySystem.randomInt(30, 90)
    this.x = mySystem.randomInt(0, -20)
  }
  weaponFunction.move.call(this)
}
weaponData[weaponId.skillAirplane].attack = function(){
  if(this.repeatCount >= 1 && this.delayCount % this.delay == 0){
    fieldSystem.insertWeapon(weaponId.laserA, this.attack, this.x, this.y)
    this.repeatCount--
  } else if(this.repeatCount <= 0){
    this.init()
  }
}
weaponData[weaponId.skillSkull].setData(spriteId.skillSkull, 0.5, 0, 2, 2, 7, false, 50, 4)
weaponData[weaponId.skillSkull].move = function(){
  if(this.tempInitCheck()){
    this.y -= (this.h * 8 * this.scale / 2)
    if(this.y < 0) this.y = 0
    if(this.y + (this.h * 8 * this.scale) > fieldSize.FIELD_Y) this.y = fieldSize.FIELD_Y - (this.h * 8 * this.scale)
  }
  this.spriteId = spriteId.skillSkull + ((Math.floor(this.delayCount / 4) % 2) * 2)
  weaponFunction.move.call(this)
  var centerX = this.x + (this.w * 8 * this.scale / 2)
  var centerY = this.y + (this.h * 8 * this.scale / 2)
  var radius = this.delayCount % 20
  displaySystem.strokeCircle(centerX, centerY, radius * 4, colorId.PURPLE)
  displaySystem.strokeCircle(centerX, centerY, radius * 3, colorId.PURPLE)
  displaySystem.strokeCircle(centerX, centerY, radius * 2, colorId.PURPLE)
  displaySystem.strokeCircle(centerX, centerY, radius * 1, colorId.PURPLE)
}
weaponData[weaponId.skillSkull].attack = function(){
  if(this.delayCount % this.delay == 0){
    for(var i = 0; i < fieldSystem.enemy.length; i++){
      var enemy = fieldSystem.enemy[i]
      if(enemy.isUsing && fieldSystem.collision(this, enemy)){
        enemy.hp -= this.attack
      }
    }
    this.repeatCount--
    if(this.repeatCount <= 0) this.init()
  }

  if(this.delayCount % 30 == 0) soundSystem.play(soundId.skillSkull)
}
weaponData[weaponId.subWeaponBlaster].setData(spriteId.skillBlasterShot, 6, 0, 1, 1, 1, true, 1, 0)
weaponData[weaponId.subWeaponBlaster].move = function(){
  weaponFunction.move.call(this)
}

})()

function EnemyData(){}
EnemyData.prototype = new FieldObject()
EnemyData.prototype.setData = function(spriteId, hp, attack, score, w, h, scale, speedX, speedY, dieSoundId){
  this.spriteId = spriteId
  this.hp = hp
  this.attack = attack
  this.score = score
  this.w = w
  this.h = h
  this.scale = scale
  this.speedX = speedX
  this.speedY = speedY
  this.dieSoundId = dieSoundId
}
EnemyData.prototype.move = function(){
  this.x += this.speedX
  this.y += this.speedY

  if(this.y + (this.scale * 8 * this.h) > fieldSize.FIELD_Y){
    this.y = fieldSize.FIELD_Y - (this.scale * 8 * this.h)
    this.speedY = -Math.abs(this.speedY)
  }
  if(this.y < 0){
    this.y = 0
    this.speedY = Math.abs(this.speedY)
  }
}
EnemyData.prototype.moveExit = function(){
  this.x += this.speedX
  this.y += this.speedY
}
EnemyData.prototype.moveInside = function(){
  if(this.x + (this.scale * this.w * 8) > fieldSize.FIELD_X) this.x--
  else if(this.x < 0) this.x++

  if(this.y + (this.scale * this.h * 8) > fieldSize.FIELD_Y) this.y--
  else if(this.y < 0) this.y++
  EnemyData.prototype.move.call(this)
}
EnemyData.prototype.movePositionReset = function(direction){
  var leftTrue = direction === 'left' ? true : false
  var rightTrue = direction === 'right' ? true : false
  if(typeof direction === 'undefined'){
    leftTrue = true
    rightTrue = true
  }

  if(this.x > fieldSize.RESET_RIGHT + 10){
    if(rightTrue) this.x = fieldSize.RESET_LEFT - (this.w * this.scale * 8)
    else this.speedX = Math.abs(this.speedX)
  }
  
  if(this.x + (this.w * this.scale * 8) < fieldSize.RESET_LEFT - 10){
    if(leftTrue) this.x = fieldSize.RESET_RIGHT
    else this.speedX = -Math.abs(this.speedX)
  }
  EnemyData.prototype.move.call(this)
}
EnemyData.prototype.moveNotExit = function(){
  if(this.x > fieldSize.FIELD_X){
    this.speedX = -Math.abs(this.speedX)
  } else if(this.x + (this.w * this.scale * 8) < 0){
    this.speedX = Math.abs(this.speedX)
  }
  EnemyData.prototype.move.call(this)
}
EnemyData.prototype.moveBullon = function(moveFrame, baseSpeed){
  var INDEX_DELAY_COUNT = 9
  var spx = this.tempArray[INDEX_DELAY_COUNT]++
  if(spx > moveFrame){
    this.tempArray[INDEX_DELAY_COUNT] = -moveFrame
    spx = -moveFrame
  }

  this.speedY = spx * baseSpeed / 60
  EnemyData.prototype.movePositionReset.call(this)
}
EnemyData.prototype.moveChase = function(divideSpeed){
  divideSpeed = typeof divideSpeed == 'undefined' ? 60 : divideSpeed
  var loopCount = 10
  while(loopCount > 1){
    this.speedX = (playerSystem.x - this.x) / divideSpeed
    this.speedY = (playerSystem.y - this.y) / divideSpeed
    if(Math.abs(this.speedX) > 2 || Math.abs(this.speedY) > 2) break

    divideSpeed--
    loopCount--
    if(divideSpeed <= 1) break
  }
}
EnemyData.prototype.moveBall = function(height, speed){
  height = typeof height == 'undefined' ? 120 : height
  speed = typeof speed == 'undefined' ? 1 : speed
  var INDEX_DELAY_COUNT = 9
  var INDEX_DIRECTION = 8
  var spy = this.tempArray[INDEX_DELAY_COUNT]
  var direction = this.tempArray[INDEX_DIRECTION]

  if(direction == 0){
    this.speedY = spy / 60 * speed
    this.tempArray[INDEX_DELAY_COUNT] += speed
  } else if(direction == 1) {
    this.speedY = -spy / 60 * speed
    this.tempArray[INDEX_DELAY_COUNT] -= speed
  }

  if(this.y + (this.scale * 8 * this.h) >= fieldSize.FIELD_Y){
    this.tempArray[INDEX_DIRECTION] = 1
    this.tempArray[INDEX_DELAY_COUNT] = height
  }

  if(spy <= 0) this.tempArray[INDEX_DIRECTION] = 0
  EnemyData.prototype.movePositionReset.call(this)
}
EnemyData.prototype.process = function(){
  if(!this.isUsing) return

  this.delayCount++
  this.attackDelayCount++
  if(this.attackDelayCount >= 0 && fieldSystem.collision(this, playerSystem)){
    this.attackDelayCount = -this.attackDelay
    playerSystem.damageInsert(this.attack)
  }

  if(this.hp <= 0){
    fieldSystem.requestPlusScoreUser(this.score)
    if(this.dieSoundId){
      soundSystem.play(this.dieSoundId)
      var effectScale = Math.floor(this.scale * (this.h + this.w) / 2)
      fieldSystem.insertEffectByEnemySound(this.dieSoundId, this.x, this.y, effectScale)
    }
    this.init()
  }
  if(this.hp > this.hpMax) this.hp = this.hpMax

  if(this.x >= fieldSize.OUT_RIGHT || this.y >= fieldSize.OUT_DOWN || 
    this.y <= fieldSize.OUT_UP || this.x <= fieldSize.OUT_LEFT){
    this.outAreaFrame++
    if(this.outAreaFrame >= 120) this.init()
  } else {
    this.outAreaFrame = 0
  }
}
EnemyData.prototype.E2Fx_hited = function(speedMinX, speedMinY, speedMaxX, speedMaxY, hitedFrame){
  if(this.status != 'hited') return

  speedMinX = typeof speedMinX == 'undefined' ? 1 : speedMinX
  speedMinY = typeof speedMinY == 'undefined' ? 1 : speedMinY
  speedMaxX = typeof speedMaxX == 'undefined' ? 5 : speedMaxX
  speedMaxY = typeof speedMaxY == 'undefined' ? 5 : speedMaxY
  hitedFrame = typeof hitedFrame == 'undefined' ? 300 : hitedFrame

  var INDEX_BASE_SPEEDX = 4
  var INDEX_BASE_SPEEDY = 5
  var INDEX_SPEEDX = 6
  var INDEX_SPEEDY = 7
  var INDEX_HITED_FRAME = 8
  var INDEX_FRAME_COUNT = 9

  this.tempArray[INDEX_BASE_SPEEDX] = this.speedX
  this.tempArray[INDEX_BASE_SPEEDY] = this.speedY
  this.tempArray[INDEX_SPEEDX] = mySystem.random(speedMinX, speedMaxX)
  this.tempArray[INDEX_SPEEDY] = mySystem.random(speedMinY, speedMaxY)
  if(mySystem.random(0, 2) <= 1){ this.tempArray[INDEX_SPEEDX] *= -1 }
  if(mySystem.random(0, 2) <= 1){ this.tempArray[INDEX_SPEEDY] *= -1 }

  this.speedX = this.tempArray[INDEX_SPEEDX]
  this.speedY = this.tempArray[INDEX_SPEEDY]
  this.tempArray[INDEX_HITED_FRAME] = hitedFrame
  this.tempArray[INDEX_FRAME_COUNT] = this.tempArray[INDEX_HITED_FRAME]
  this.status = 'hitedmove'
}
EnemyData.prototype.E2Fx_hitedmove = function(){
  if(this.status != 'hitedmove') return
  
  var INDEX_BASE_SPEEDX = 4
  var INDEX_BASE_SPEEDY = 5
  var INDEX_SPEEDX = 6
  var INDEX_SPEEDY = 7
  var INDEX_HITED_FRAME = 8
  var INDEX_FRAME_COUNT = 9

  var speedX = this.tempArray[INDEX_SPEEDX]
  var speedY = this.tempArray[INDEX_SPEEDY]
  var frameCount = this.tempArray[INDEX_FRAME_COUNT]--
  var hitedFrame = this.tempArray[INDEX_HITED_FRAME]

  if(frameCount >= 0){
    if(this.speedX > 0) this.speedX = Math.abs(speedX / hitedFrame * frameCount)
    else if(this.speedX < 0) this.speedX = -Math.abs(speedX / hitedFrame * frameCount)
    
    if(this.speedY > 0) this.speedY = Math.abs(speedY / hitedFrame * frameCount)
    else if(this.speedY < 0) this.speedY = -Math.abs(speedY / hitedFrame * frameCount)

  } else if(frameCount < 0 && frameCount >= -30){
    this.speedX = 0
    this.speedY = 0
  } else if(frameCount < -30){
    this.rotate = 0
    this.status = ''
    this.speedX = this.tempArray[INDEX_BASE_SPEEDX]
    this.speedY = this.tempArray[INDEX_BASE_SPEEDY]
  }
}
EnemyData.prototype.E3Fx_setRandomSpeed = function(speedMinX, speedMinY, speedMaxX, speedMaxY, weight, directionOption){
  speedMinX = typeof speedMinX == 'undefined' ? 1 : speedMinX
  speedMinY = typeof speedMinY == 'undefined' ? 1 : speedMinY
  speedMaxX = typeof speedMaxX == 'undefined' ? 2 : speedMaxX
  speedMaxY = typeof speedMaxY == 'undefined' ? 2 : speedMaxY
  directionOption = typeof directionOption == 'undefined' ? true : directionOption
  weight = typeof weight == 'undefined' ? 0 : weight

  this.speedX = mySystem.random(speedMinX, speedMaxX)
  this.speedY = mySystem.random(speedMinY, speedMaxY)
  if(directionOption === true){
    if(mySystem.randomBoolean()) this.speedX = -this.speedX
    if(mySystem.randomBoolean()) this.speedY = -this.speedY
  }
  if(weight != 0){
    if(this.x >= fieldSize.FIELD_X/2) this.speedX -= weight
    else if(this.x <= fieldSize.FIELD_X/2) this.speedX += weight
  }
}
EnemyData.prototype.delayConditionCheck = function(minDelay, maxDelay, interval, initThis){
  if(this.delayCount >= minDelay && this.delayCount <= maxDelay && this.delayCount % interval == 0){
    if(initThis === true && this.delayCount >= maxDelay) this.delayCount = 0
    return true
  } else {
    if(initThis === true && this.delayCount >= maxDelay) this.delayCount = 0
    return false
  }
}
EnemyData.prototype.displayMultyMeter = function(hpLineMax, text){
  hpLineMax = typeof hpLineMax == 'undefined' ? 5 : hpLineMax
  text = typeof text == 'undefined' ? 'ENEMY HP' : text
  var hpPhase = Math.floor(this.hpMax / hpLineMax)
  var hpLine = Math.floor(this.hp / hpPhase)
  var meterColor = [colorId.BLACK, colorId.LIGHT_BLUE, colorId.RED, colorId.ORANGE, colorId.YELLOW, colorId.LIGHT_GREEN]
  var meterColorA = ( (hpLine + 1) % 5) + 1
  var meterColorB = (hpLine % 5) + 1
  if(hpLine <= 0){
    meterColorA = 2
    meterColorB = 0
  } else if(this.hp == this.hpMax){
    meterColorA = meterColorB 
  }

  displaySystem.meter(this.hp % hpPhase, hpPhase, 0, 0, 240, 8, meterColor[meterColorA], meterColor[meterColorB])
  displaySystem.smallText(text + ': ' + this.hp + '(' + this.hp % hpPhase + '+' + hpPhase + 'X' + hpLine + ')' + '/' + this.hpMax, 0, 0, colorId.DARK_GREY)
}
EnemyData.prototype.getAvgLostHp = function(enemyIdValue){
  if(enemyIdValue == null) return 0

  var lostHpSum = 0
  var lostHpCount = 0
  for(i = 0; i < fieldSystem.enemy.length; i++){
    var enemy = fieldSystem.enemy[i]
    if(enemy.idValue == enemyIdValue && enemy.hp < enemy.hpMax){
      var damage = enemy.hpMax - enemy.hp
      enemy.hp = enemy.hpMax
      lostHpSum += damage
      lostHpCount += 1
    }
  }

  if(lostHpCount >= 1) return Math.floor(lostHpSum / lostHpCount)
  else return 0
}

var enemyFunction = new EnemyData()
var enemyData = [new EnemyData()]
for(i = 0; i < 250; i++)  enemyData.push(new EnemyData())
enemyData[enemyId.unused].setData(spriteId.unused, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0)
enemyData[enemyId.TEST].setData(spriteId.enemyBigBox, 10000000, 0, 0, 2, 2, 4, 0, 0, soundId.unused)
// 1-1
enemyData[enemyId.E100_bullonRed].setData(spriteId.enemyBullonRed, 2000, 20, 200, 1, 2, 1, 0.5, 0, soundId.enemyDieBullon)
enemyData[enemyId.E101_bullonBlue].setData(spriteId.enemyBullonBlue, 2400, 20, 240, 1, 2, 1, 0.5, 0, soundId.enemyDieBullon)
enemyData[enemyId.E102_drinkWater].setData(spriteId.enemyDrinkWater, 2000, 20, 200, 1, 2, 1, 1, 0, soundId.enemyDieDrink)
enemyData[enemyId.E103_drinkEnergy].setData(spriteId.enemyDrinkEnergy, 2400, 20, 240, 1, 2, 2, 1, 0, soundId.enemyDieDrink)
enemyData[enemyId.E104_rocketA].setData(spriteId.enemyRocketA, 1600, 16, 160, 2, 1, 2, 3, 0, soundId.enemyDieRocket)
enemyData[enemyId.E105_rocketB].setData(spriteId.enemyRocketB, 2200, 16, 220, 2, 1, 2, 3, 0, soundId.enemyDieRocket)
enemyData[enemyId.E106_drawer].setData(spriteId.enemyDrawer, 8000, 16, 800, 2, 1, 3, 1, 0, soundId.enemyDieMiddle)
enemyData[enemyId.E107_sungglasses].setData(spriteId.enemySunglasses, 4000, 16, 400, 2, 1, 3, 1, 0, soundId.enemyDieMiddle)
enemyData[enemyId.E108_bossBullon].setData(spriteId.enemyBullonRed, 300000, 60, 15000, 1, 2, 6, 0, 0, soundId.enemyDieBullon)
// 1-2
enemyData[enemyId.E110_bigCar].setData(spriteId.enemyBigCar, 6000, 15, 600, 2, 2, 1, 2, 0, soundId.enemyDieCar)
enemyData[enemyId.E111_bigBall].setData(spriteId.enemyBigBall, 7200, 15, 720, 2, 2, 1, 1, 0, soundId.enemyDieMiddle)
enemyData[enemyId.E112_bigBox].setData(spriteId.enemyBigBox, 12000, 20, 1200, 2, 2, 2, 1, 0, soundId.enemyDieBig)
enemyData[enemyId.E113_bigRedMonster].setData(spriteId.enemyBigRedMonster, 6600, 15, 660, 2, 2, 1, 2, 0, soundId.enemyDieMonster)
enemyData[enemyId.E114_bossVendingMachine].setData(spriteId.enemyBigVendingMachine, 360000, 60, 18000, 2, 2, 5, 0, 2, soundId.enemyDieBig)
// 1-3
enemyData[enemyId.E120_streetLight].setData(spriteId.enemyStreetLight, 6000, 20, 600, 1, 2, 2, 0.5, 0, soundId.enemyDiePillar)
enemyData[enemyId.E121_utilityPole].setData(spriteId.enemyUtilityPole, 14400, 20, 1440, 1, 2, 4, 0.3, 0, soundId.enemyDiePillar)
enemyData[enemyId.E122_car].setData(spriteId.enemyCar, 4800, 14, 480, 2, 1, 2, 2, 0, soundId.enemyDieCar)
enemyData[enemyId.E123_bus].setData(spriteId.enemyBus, 4800, 14, 480, 2, 1, 3, 2, 0, soundId.enemyDieCar)
enemyData[enemyId.E124_bigVendingMachine].setData(spriteId.enemyBigVendingMachine, 18000, 20, 1800, 2, 2, 2, 0, 0, soundId.enemyDieBig)
enemyData[enemyId.E125_bossTrafficLight].setData(spriteId.enemyTrafficLightGreen, 480000, 0, 24000, 1, 1, 8, 0, 0, soundId.enemyDieBig)
enemyData[enemyId.E126_superBox].setData(spriteId.enemyBigBox, 80000, 0, 1000, 2, 2, 4, 0, 0, soundId.enemyDieMiddle)
// 2-1
enemyData[enemyId.E200_hammer].setData(spriteId.enemyHammer, 5600, 17, 560, 1, 2, 2, 0.5, 0, soundId.enemyDieMiddle)
enemyData[enemyId.E201_torch].setData(spriteId.enemyTorch, 5600, 20, 560, 1, 2, 1, 0.6, 0, soundId.enemyDieMiddle)
enemyData[enemyId.E202_stonePiece].setData(spriteId.enemyBigStone, 2800, 6, 280, 1, 1, 1, 1, 0, soundId.enemyDieSmall)
enemyData[enemyId.E203_bigStone].setData(spriteId.enemyBigStone, 11200, 16, 1120, 2, 2, 1, 1, 0, soundId.enemyDieSmall)
enemyData[enemyId.E204_brokenStone].setData(spriteId.enemyBigStone, 4200, 16, 420, 2, 2, 2, 1, 0, soundId.enemyDieSmall)
enemyData[enemyId.E205_bigBlueMonster].setData(spriteId.enemyBigBlueMonster, 7400, 16, 740, 2, 2, 1, 1, 0, soundId.enemyDieMonster)
enemyData[enemyId.E206_bossBox].setData(spriteId.enemyBigBox, 420000, 60, 21000, 2, 2, 4, 0, 0, soundId.enemyDieCar)
// 2-2
enemyData[enemyId.E210_garnet].setData(spriteId.enemyGarnet, 8000, 20, 800, 1, 1, 2, 1, 0, soundId.enemyDieGemA)
enemyData[enemyId.E211_amethyst].setData(spriteId.enemyAmethyst, 8100, 20, 810, 1, 1, 2, 1, 0, soundId.enemyDieGemA)
enemyData[enemyId.E212_emerald].setData(spriteId.enemyEmerald, 8200, 20, 820, 1, 1, 2, 1, 0, soundId.enemyDieGemB)
enemyData[enemyId.E213_sapphire].setData(spriteId.enemySapphire, 8300, 20, 830, 1, 1, 2, 1, 0, soundId.enemyDieGemB)
enemyData[enemyId.E214_gold].setData(spriteId.enemyGold, 9600, 20, 960, 2, 1, 2, 1, 0, soundId.enemyDieGemC)
enemyData[enemyId.E215_silver].setData(spriteId.enemySilver, 10000, 20, 1000, 2, 1, 2, 1, 0, soundId.enemyDieGemC)
enemyData[enemyId.E216_diamond].setData(spriteId.enemyDiamond, 14400, 20, 1440, 2, 2, 2, 1, 0, soundId.enemyDieGemB)
enemyData[enemyId.E217_bossTreasureChest].setData(spriteId.enemyTreasureChest, 480000, 60, 24000, 2, 2, 4, 0, 0, soundId.enemyDieGemC)
enemyData[enemyId.E218_drill].setData(spriteId.enemyDrill, 6600, 17, 660, 1, 2, 3, 0.5, 0, soundId.enemyDieMiddle)
// 2-3
enemyData[enemyId.E220_cart].setData(spriteId.enemyCart, 9400, 14, 940, 2, 1, 2, 0.7, 0, soundId.enemyDiePillar)
enemyData[enemyId.E221_bigCart].setData(spriteId.enemyBigCart, 10800, 12, 1080, 2, 2, 2, 3, 0, soundId.enemyDiePillar)
enemyData[enemyId.E222_magnet].setData(spriteId.enemyMagnet, 9600, 15, 960, 2, 1, 2, 1, 0, soundId.enemyDiePillar)
enemyData[enemyId.E223_bus].setData(spriteId.enemyBus, 9000, 14, 900, 2, 1, 3, 2, 0, soundId.enemyDieCar)
enemyData[enemyId.E224_bossCart].setData(spriteId.enemyEnergyCart, 300000, 14, 15000, 2, 2, 3, 1, 0, soundId.enemyDiePillar)
// 3-1
enemyData[enemyId.E300_robotRed].setData(spriteId.enemyRobotRed, 8000, 10, 800, 1, 2, 2, 1, 0, soundId.enemyDieRobotA)
enemyData[enemyId.E301_robotBlue].setData(spriteId.enemyRobotBlue, 8400, 10, 840, 1, 2, 2, 1, 0, soundId.enemyDieRobotA)
enemyData[enemyId.E302_robotGreen].setData(spriteId.enemyRobotGreen, 6600, 10, 660, 1, 2, 2, 1, 0, soundId.enemyDieRobotB)
enemyData[enemyId.E303_robotWhite].setData(spriteId.enemyRobotWhite, 9200, 10, 920, 1, 2, 2, 1, 0, soundId.enemyDieRobotB)
enemyData[enemyId.E304_metalRed].setData(spriteId.enemyMetalRed, 2000, 10, 200, 1, 1, 2, 1, 0, soundId.enemyDieMetal)
enemyData[enemyId.E307_outlet].setData(spriteId.enemyOutlet, 9600, 13, 960, 1, 1, 4, 1, 0, soundId.enemyDieMetal)
enemyData[enemyId.E308_electronicA].setData(spriteId.enemyElectronicA, 6000, 8, 600, 2, 1, 2, 1, 0, soundId.enemyDieElectronic)
enemyData[enemyId.E309_electronicB].setData(spriteId.enemyElectronicB, 6200, 8, 620, 2, 1, 2, 1, 0, soundId.enemyDieElectronic)
enemyData[enemyId.E310_bossRobotA].setData(spriteId.enemyRobotRed, 200000, 10, 10000, 1, 2, 2, 1, 0, soundId.enemyDieBig)
enemyData[enemyId.E311_bossRobotB].setData(spriteId.enemyRobotBlue, 200000, 10, 10000, 1, 2, 2, 1, 0, soundId.enemyDieBig)
enemyData[enemyId.E312_bossRobotC].setData(spriteId.enemyRobotGreen, 200000, 10, 10000, 1, 2, 2, 1, 0, soundId.enemyDieBig)
enemyData[enemyId.E313_bossRobotD].setData(spriteId.enemyRobotWhite, 200000, 10, 10000, 1, 2, 2, 1, 0, soundId.enemyDieBig)
// 3-2
enemyData[enemyId.E320_bossComputer1].setData(spriteId.enemyComputerDie, 100000, 0, 10000, 1, 1, 10, 0, 0, soundId.enemyDieBig)
enemyData[enemyId.E321_bossComputer2].setData(spriteId.enemyComputerBooting, 600000, 0, 40000, 1, 1, 10, 0, 0, soundId.enemyDieBig)
enemyData[enemyId.E322_bossComputer3].setData(spriteId.enemyComputerDesktop, 100000, 0, 10000, 1, 1, 10, 0, 0, soundId.enemyDieBig)
enemyData[enemyId.E323_bossComputer4].setData(spriteId.enemyComputerBlueScreen, 600000, 0, 40000, 1, 1, 10, 0, 0, soundId.enemyDieBig)
enemyData[enemyId.E324_bossComputer5].setData(spriteId.enemyComputerDie, 400000, 0, 40000, 1, 1, 10, 0, 0, soundId.enemyDieBig)
enemyData[enemyId.E325_bossRobotWhite].setData(spriteId.enemyRobotWhite,  60000, 8, 5000, 1, 2, 2, 1, 0, soundId.enemyDieRobotB)
// 3-3
enemyData[enemyId.E330_machineBall].setData(spriteId.enemyBigBall, 9000, 12, 900, 2, 2, 2, 1, 0, soundId.enemyDieMiddle)
enemyData[enemyId.E331_machineCar].setData(spriteId.enemyBigCar, 9600, 12, 960, 2, 2, 2, 1, 0, soundId.enemyDieCar)
enemyData[enemyId.E332_machineBox].setData(spriteId.enemyBigBox, 14000, 12, 1400, 2, 2, 2, 1, 0, soundId.enemyDieBig)
enemyData[enemyId.E340_bossLever].setData(spriteId.enemyBigLever, 200000, 15, 10000, 2, 2, 4, 1, 0, soundId.enemyDieBig)
enemyData[enemyId.E341_newRoundLever].setData(spriteId.enemyBigLever, 800000, 15, 10000, 2, 2, 2, 1, 0, soundId.enemyDieBig)
enemyData[enemyId.E342_metalColor].setData(spriteId.enemyMetalBlue, 3000, 10, 300, 1, 1, 2, 1, 0, soundId.enemyDieMetal)
// 3-3A
enemyData[enemyId.E3A00_superLever].setData(spriteId.enemyBigLever, 1000000, 20, 50000, 2, 2, 4, 0, 0, soundId.enemyDieBig)
enemyData[enemyId.E3A01_robotOrange].setData(spriteId.enemyRobotOrange, 24000, 16, 2400, 1, 2, 2, 1, 0, soundId.enemyDieBig)
enemyData[enemyId.E3A02_robotCyan].setData(spriteId.enemyRobotCyan, 24800, 16, 2480, 1, 2, 2, 1, 0, soundId.enemyDieBig)
enemyData[enemyId.E3A03_superElectnoricA].setData(spriteId.enemySuperElectronicA, 22000, 16, 2200, 2, 1, 3, 1, 0, soundId.enemyDieElectronic)
enemyData[enemyId.E3A04_superElectnoricB].setData(spriteId.enemySuperElectronicB, 23200, 16, 2320, 2, 1, 3, 1, 0, soundId.enemyDieElectronic)
enemyData[enemyId.E3C00_superComputer].setData(spriteId.enemyComputerDie, 1500000, 0, 75000, 1, 1, 10, 0, 0, soundId.enemyDieBig)
// 4-1
enemyData[enemyId.E400_magician].setData(spriteId.enemyCharacter1, 9600, 8, 960, 1, 2, 2, 1, 0, soundId.enemyDieCharacter)
enemyData[enemyId.E401_summoner].setData(spriteId.enemyCharacter1, 9600, 8, 960, 1, 2, 2, 1, 0, soundId.enemyDieCharacter)
enemyData[enemyId.E402_master].setData(spriteId.enemyBigMaster1, 18400, 8, 1840, 2, 2, 2, 1, 0, soundId.enemyDieMaster)
enemyData[enemyId.E403_tree].setData(spriteId.enemyTree, 20000, 14, 2000, 1, 2, 4, 1, 0, soundId.enemyDieRocket)
enemyData[enemyId.E404_apple].setData(spriteId.enemyApple, 4800, 13, 480, 1, 1, 3, 0, 0, soundId.enemyDieSmall)
enemyData[enemyId.E405_leap].setData(spriteId.enemyLeap, 4800, 13, 480, 1, 1, 3, 1, 0, soundId.enemyDieSmall)
enemyData[enemyId.E406_brickOrange].setData(spriteId.enemyBrickOrange, 18000, 20, 1800, 1, 2, 2, 0.2, 0, soundId.enemyDieBrick)
enemyData[enemyId.E407_brickDark].setData(spriteId.enemyBrickDark, 18500, 20, 1850, 1, 2, 4, 0.2, 0, soundId.enemyDieBrick)
enemyData[enemyId.E408_sculpture].setData(spriteId.enemyBigSculpture, 15000, 15, 1500, 2, 2, 2, 0.5, 0, soundId.enemyDieSmall)
enemyData[enemyId.E409_sculpturePiece].setData(spriteId.enemySculpture1, 3000, 15, 300, 1, 1, 2, 1, 0, soundId.enemyDieSmall)
enemyData[enemyId.E410_rocket].setData(spriteId.enemyRocketA, 7200, 14, 720, 2, 1, 2, 2, 0, soundId.enemyDieRocket)
enemyData[enemyId.E411_bossCrazyGuy].setData(spriteId.enemyCrazyGuy, 240000, 20, 12000, 1, 1, 4, 2, 0, soundId.enemyDieBullon)
enemyData[enemyId.E412_bossCrazyGuyTotal].setData(spriteId.enemyCrazyGuy, 720000, 20, 36000, 1, 1, 4, 0, 0, soundId.enemyDieBullon)
enemyData[enemyId.E413_bossBarracks].setData(spriteId.enemyBarracks, 600000, 0, 30000, 2, 2, 5, 0, 0, soundId.enemyDieBig)
enemyData[enemyId.E414_streetLight].setData(spriteId.enemyStreetLight, 10300, 14, 1030, 1, 2, 2, 0.5, 0, soundId.enemyDiePillar)
enemyData[enemyId.E415_crazyGuy].setData(spriteId.enemyCrazyGuy, 12100, 15, 1210, 1, 1, 3, 1, 0, soundId.enemyDieBullon)
// summon enemy
enemyData[enemyId.E420_summonStone].setData(spriteId.enemyBigStone, 4800, 13, 480, 2, 2, 1, 0, 0, soundId.enemyDieSmall)
enemyData[enemyId.E421_summonGem].setData(spriteId.enemyGarnet, 4800, 16, 480, 1, 1, 2, 0, 0, soundId.enemyDieGemA)
enemyData[enemyId.E422_summonTree].setData(spriteId.enemyTree, 4800, 16, 480, 1, 2, 2, 0, 0, soundId.enemyDieRocket)
enemyData[enemyId.E423_summonMetal].setData(spriteId.enemyMetalRed, 4800, 14, 480, 1, 1, 2, 0, 0, soundId.enemyDieMetal)
enemyData[enemyId.E424_summonIce].setData(spriteId.enemyIce, 2400, 15, 240, 1, 1, 2, 0, 0, soundId.enemyDieBullon)
enemyData[enemyId.E425_summonTouch].setData(spriteId.enemyTorch, 4800, 16, 480, 1, 2, 1, 0, 0, soundId.enemyDieMiddle)
// 4-3
enemyData[enemyId.E430_bossMagicianFire].setData(spriteId.enemyBigMaster1, 440000, 20, 22000, 2, 2, 3, 0, 0, soundId.enemyDieMaster)
enemyData[enemyId.E431_bossMagicianIce].setData(spriteId.enemyBigMaster2, 460000, 20, 23000, 2, 2, 3, 0, 0, soundId.enemyDieMaster)
enemyData[enemyId.E432_bossMagicianShuriken].setData(spriteId.enemyBigMaster3, 480000, 20, 24000, 2, 2, 3, 0, 0, soundId.enemyDieMaster)
enemyData[enemyId.E433_bossMagicianLeaf].setData(spriteId.enemyBigMaster4, 500000, 20, 25000, 2, 2, 3, 0, 0, soundId.enemyDieMaster)
enemyData[enemyId.E434_bossMagicianHeal].setData(spriteId.enemyCharacter4, 500000, 20, 25000, 1, 2, 3, 0, 0, soundId.enemyDieCharacter)
// 5-1
enemyData[enemyId.E500_round5].setData(spriteId.enemyRound5, 1100000, 0, 10000, 2, 2, 2, 0, 0, soundId.enemyDieMonster)
enemyData[enemyId.E501_bus].setData(spriteId.enemyBus, 29000, 40, 2900, 2, 1, 3, -2, 0, soundId.enemyDieCar)
enemyData[enemyId.E502_ball].setData(spriteId.enemyBigBall, 29000, 40, 2900, 2, 2, 2, -1, 0, soundId.enemyDieMiddle)
enemyData[enemyId.E503_robot].setData(spriteId.enemyRobotWhite, 29000, 40, 2900, 1, 2, 3, 1, 0, soundId.enemyDieRobotA)
enemyData[enemyId.E510_blackMonster].setData(spriteId.enemyRound5, 64000, 14, 6400, 2, 2, 3, 1, 0, soundId.enemyDieMonster)
enemyData[enemyId.E511_whiteCloud].setData(spriteId.enemyCloudWhite, 24000, 10, 2400, 2, 1, 2, 1.6, 0, soundId.enemyDieBullon)
enemyData[enemyId.E512_blackCloud].setData(spriteId.enemyCloudBlack, 24000, 10, 2400, 2, 1, 2, 1.8, 0, soundId.enemyDieBullon)
// 6-1
enemyData[enemyId.E600_potionRed].setData(spriteId.enemyPotionRed, 6000, 32, 600, 1, 1, 2, 0.6, 0, soundId.enemyDiePotion)
enemyData[enemyId.E601_potionBlue].setData(spriteId.enemyPotionBlue, 6300, 32, 630, 1, 1, 2, 0.6, 0, soundId.enemyDiePotion)
enemyData[enemyId.E602_potionGreen].setData(spriteId.enemyPotionGreen, 6600, 32, 660, 1, 1, 2, 0.6, 0, soundId.enemyDiePotion)
enemyData[enemyId.E603_potionGrey].setData(spriteId.enemyPotionGrey, 7200, 32, 720, 1, 1, 2, 0.6, 0, soundId.enemyDiePotion)
enemyData[enemyId.E604_potionRainbow].setData(spriteId.enemyPotionBigRainbow, 7800, 32, 780, 2, 2, 1, 0.8, 0, soundId.enemyDiePotion)
enemyData[enemyId.E605_bossPotion].setData(spriteId.enemyPotionBigRainbow, 300000, 32, 15000, 2, 2, 4, 1, 0, soundId.enemyDieBig)
enemyData[enemyId.E606_redMonster].setData(spriteId.enemyBigRedMonster, 12300, 12, 1230, 2, 2, 1, 1, 0, soundId.enemyDieMonster)
enemyData[enemyId.E607_monsterBlue].setData(spriteId.enemyBigBlueMonster, 13200, 12, 1320, 2, 2, 1, 1, 0, soundId.enemyDieMonster)
enemyData[enemyId.E608_bossPotionMatryoshka].setData(spriteId.enemyPotionBigRainbow, 180000, 24, 9000, 2, 2, 5, 0, 0, soundId.enemyDiePillar)
// 6-2
enemyData[enemyId.E610_bubbleSmall].setData(spriteId.enemyBubbleYellow, 6000, 10, 600, 1, 1, 1, 0, 0, soundId.enemyDieBubble)
enemyData[enemyId.E611_bubbleMiddle].setData(spriteId.enemyBubblePurple, 7200, 10, 720, 1, 1, 2, 0, 0, soundId.enemyDieBubbleBig)
enemyData[enemyId.E616_bubbleBig].setData(spriteId.enemyBigBubble, 8100, 10, 810, 2, 2, 1, 0, 0, soundId.enemyDieBubbleBig)
enemyData[enemyId.E617_bubbleBoss].setData(spriteId.enemyBigBubble, 360000, 10, 18000, 2, 2, 4, 0, 0, soundId.enemyDieBubbleBig)
// 6-3
enemyData[enemyId.E620_oxygenTank].setData(spriteId.enemyOxygenTank, 13200, 17, 1320, 1, 2, 1, 1, 0, soundId.enemyDieRobotA)
enemyData[enemyId.E621_fish].setData(spriteId.enemyFish, 12000, 18, 1200, 2, 1, 1, 1, 0, soundId.enemyDieElectronic)
enemyData[enemyId.E622_fishBlack].setData(spriteId.enemyFishBlack, 12400, 18, 1240, 2, 1, 3, 1, 0, soundId.enemyDieElectronic)
enemyData[enemyId.E623_submarine].setData(spriteId.enemySubmarin, 15600, 23, 1560, 2, 1, 1, 1, 0, soundId.enemyDieBig)
enemyData[enemyId.E624_camera].setData(spriteId.enemyCamera, 14400, 23, 1440, 2, 1, 2, 1, 0, soundId.enemyDieMiddle)
enemyData[enemyId.E625_bossFish].setData(spriteId.enemyFishBlack, 1020000, 80, 51000, 2, 1, 10, 0, 0, soundId.enemyDieElectronic)
// 6-4
enemyData[enemyId.E630_plasticTrash].setData(spriteId.unused, 10000, 17, 1000, 1, 1, 2, 0.4, 0, soundId.enemyDieMiddle)
enemyData[enemyId.E631_plasticTrashUpgrade].setData(spriteId.unused, 14000, 17, 1400, 2, 2, 1, 0.5, 0, soundId.enemyDieBig)
enemyData[enemyId.E640_bossTrash].setData(spriteId.enemyCamera, 100000, 0, 100, 2, 1, 4, 1, 0, soundId.enemyDieSmall)
// 7-1
enemyData[enemyId.E700_square].setData(spriteId.enemyPieceSquare, 16000, 10, 1600, 1, 1, 2, 0, 0, soundId.enemyDieMetal)
enemyData[enemyId.E701_squarePiece].setData(spriteId.enemyPieceSquare, 8000, 10, 800, 1, 1, 1, 0, 0, soundId.enemyDieMetal)
enemyData[enemyId.E702_circle].setData(spriteId.enemyPieceCircle, 16400, 10, 1640, 1, 1, 2, 0, 0, soundId.enemyDieMetal)
enemyData[enemyId.E703_circlePiece].setData(spriteId.enemyPieceCircle, 8000, 10, 800, 1, 1, 1, 0, 0, soundId.enemyDieMetal)
enemyData[enemyId.E704_triangle].setData(spriteId.enemyPieceTriangle, 16800, 10, 1680, 1, 1, 2, 0, 0, soundId.enemyDieMetal)
enemyData[enemyId.E705_trianglePiece].setData(spriteId.enemyPieceTriangle, 8000, 10, 800, 1, 1, 1, 0, 0, soundId.enemyDieMetal)
enemyData[enemyId.E706_pentagon].setData(spriteId.enemyPiecePentagon, 17200, 10, 1720, 1, 1, 2, 0, 0, soundId.enemyDieMetal)
enemyData[enemyId.E707_pentagonPiece].setData(spriteId.enemyPiecePentagon, 8000, 10, 800, 1, 1, 1, 0, 0, soundId.enemyDieMetal)
enemyData[enemyId.E708_bossShape].setData(spriteId.enemyPieceSquare, 200000, 50, 10000, 1, 1, 6, 0, 0, soundId.enemyDieMetal)
enemyData[enemyId.E709_bossShapePiece].setData(spriteId.enemyPieceSquare, 20000, 3, 1000, 1, 1, 1, 0, 0, soundId.enemyDieMetal)
// 7-2
enemyData[enemyId.E710_smallCubeRed].setData(spriteId.enemyCubeRed, 16000, 16, 1600, 1, 1, 1, 1, 0, soundId.enemyDieCube)
enemyData[enemyId.E711_bigCubeRed].setData(spriteId.enemyCubeRed, 20000, 16, 2000, 1, 1, 3, 1, 0, soundId.enemyDieCube)
enemyData[enemyId.E712_smallCubeBlue].setData(spriteId.enemyCubeBlue, 16400, 14, 1640, 1, 1, 1, 1, 0, soundId.enemyDieCube)
enemyData[enemyId.E713_bigCubeBlue].setData(spriteId.enemyCubeBlue, 20400, 14, 2040, 1, 1, 3, 1, 0, soundId.enemyDieCube)
enemyData[enemyId.E714_smallCubeGreen].setData(spriteId.enemyCubeGreen, 16800, 10, 1680, 1, 1, 1, 1, 0, soundId.enemyDieCube)
enemyData[enemyId.E715_bigCubeGreen].setData(spriteId.enemyCubeGreen, 20800, 10, 2080, 1, 1, 3, 1, 0, soundId.enemyDieCube)
enemyData[enemyId.E716_smallCubeGrey].setData(spriteId.enemyCubeGrey, 15600, 10, 1560, 1, 1, 1, 1, 0, soundId.enemyDieCube)
enemyData[enemyId.E717_bigCubeGrey].setData(spriteId.enemyCubeGrey, 19200, 10, 1920, 1, 1, 3, 1, 0, soundId.enemyDieCube)
enemyData[enemyId.E718_bossCubeColor].setData(spriteId.enemyBigCube, 1200000, 50, 60000, 1, 1, 8, 0, 0, soundId.enemyDieCube)
// 7-3
enemyData[enemyId.E720_cubeNormal].setData(spriteId.enemyBigCube, 16000, 24, 1500, 2, 2, 1, 1, 0, soundId.enemyDieCube)
enemyData[enemyId.E721_cubeBig].setData(spriteId.enemyBigCube, 24000, 24, 2400, 2, 2, 3, 1, 0, soundId.enemyDieCube)
enemyData[enemyId.E724_cubePiece].setData(spriteId.enemyBigCube, 12000, 24, 1200, 2, 2, 2, 1, 0, soundId.enemyDieCube)
enemyData[enemyId.E725_cubePieceSub].setData(spriteId.enemyBigCube, 8000, 24, 800, 2, 2, 1, 1, 0, soundId.enemyDieCube)
enemyData[enemyId.E728_bossCubeBig].setData(spriteId.enemyBigCube, 400000, 50, 20000, 2, 2, 6, 0, 0, soundId.enemyDieCube)
// 7-4
enemyData[enemyId.E730_penroseTriange].setData(spriteId.enemyPenroseTriangle, 12600, 40, 0, 2, 2, 1, 0, 0, soundId.enemyDieMiddle)
// 8-1
enemyData[enemyId.E800_bullonRed].setData(spriteId.enemyBullonRed, 10000, 24, 1000, 1, 2, 1, 1.5, 0, soundId.enemyDieBullon)
enemyData[enemyId.E801_bullonBlue].setData(spriteId.enemyBullonBlue, 10000, 24, 1000, 1, 2, 1, 1.5, 0, soundId.enemyDieBullon)
enemyData[enemyId.E802_streetLight].setData(spriteId.enemyStreetLight, 10000, 24, 1000, 1, 2, 2, 1.4, 0, soundId.enemyDiePillar)
enemyData[enemyId.E803_utilityPole].setData(spriteId.enemyUtilityPole, 10000, 24, 1000, 1, 2, 4, 1, 0, soundId.enemyDiePillar)
enemyData[enemyId.E804_stone].setData(spriteId.enemyBigStone, 10000, 14, 1000, 2, 2, 1, 2, 1, soundId.enemyDieSmall)
enemyData[enemyId.E805_brokenStone].setData(spriteId.enemyBigStone, 10000, 14, 1000, 2, 2, 2, 1, 0, soundId.enemyDieSmall)
enemyData[enemyId.E807_sapphire].setData(spriteId.enemySapphire, 10000, 14, 1000, 1, 1, 2, 2, 0, soundId.enemyDieGemA)
enemyData[enemyId.E808_gold].setData(spriteId.enemyGold, 10000, 14, 1000, 2, 1, 2, 3, 0, soundId.enemyDieGemC)
enemyData[enemyId.E809_diamond].setData(spriteId.enemyDiamond, 10000, 14, 1000, 2, 2, 2, 1, 0, soundId.enemyDieGemB)
enemyData[enemyId.E810_robotA].setData(spriteId.enemyRobotRed, 20000, 28, 2000, 1, 2, 2, 1, 0, soundId.enemyDieRobotA)
enemyData[enemyId.E811_robotB].setData(spriteId.enemyRobotBlue, 20000, 28, 2000, 1, 2, 2, 1, 0, soundId.enemyDieRobotA)
enemyData[enemyId.E812_electronicA].setData(spriteId.enemyElectronicA, 20000, 22, 2000, 2, 1, 3, 1, 0, soundId.enemyDieElectronic)
enemyData[enemyId.E813_electronicB].setData(spriteId.enemyElectronicB, 20000, 22, 2000, 2, 1, 3, 1, 0, soundId.enemyDieElectronic)
enemyData[enemyId.E814_tree].setData(spriteId.enemyTree, 10000, 14, 1000, 1, 2, 6, 1, 0, soundId.enemyDieSmall)
enemyData[enemyId.E815_apple].setData(spriteId.enemyApple, 5000, 8, 500, 1, 1, 6, 0, 0, soundId.enemyDieSmall)
enemyData[enemyId.E816_leap].setData(spriteId.enemyLeap, 5000, 8, 500, 1, 1, 6, 1, 0, soundId.enemyDieSmall)
enemyData[enemyId.E817_sculpture].setData(spriteId.enemyBigSculpture, 10000, 16, 1000, 2, 2, 2, 1, 0, soundId.enemyDieSmall)
enemyData[enemyId.E818_sculptureSub].setData(spriteId.enemyBigSculpture, 5000, 8, 500, 2, 2, 1, 2, 0, soundId.enemyDieSmall)
enemyData[enemyId.E819_brickDark].setData(spriteId.enemyBrickDark, 10000, 12, 2000, 1, 2, 5, 0.7, 0, soundId.enemyDieBrick)
enemyData[enemyId.E820_robotWhite].setData(spriteId.enemyRobotWhite, 50000, 10, 5000, 1, 2, 2, 1, 0, soundId.enemyDieRobotB)
enemyData[enemyId.E821_crazyGuy].setData(spriteId.enemyCrazyGuy, 50000, 10, 5000, 1, 1, 3, 1, 0, soundId.enemyDieBullon)
// 8-2
enemyData[enemyId.E830_monsterRed].setData(spriteId.enemyBigRedMonster, 15000, 14, 1500, 2, 2, 1, 1, 0, soundId.enemyDieMonster)
enemyData[enemyId.E831_monsterBlue].setData(spriteId.enemyBigBlueMonster, 15000, 14, 1500, 2, 2, 1, 1, 0, soundId.enemyDieMonster)
enemyData[enemyId.E832_master].setData(spriteId.enemyBigMaster1, 15000, 14, 1500, 2, 2, 2, 1, 0, soundId.enemyDieMaster)
enemyData[enemyId.E833_magician].setData(spriteId.enemyCharacter1, 15000, 14, 1500, 1, 2, 2, 1, 0, soundId.enemyDieCharacter)
enemyData[enemyId.E834_rocketA].setData(spriteId.enemyRocketA, 15000, 11, 1500, 2, 1, 2, 3, 0, soundId.enemyDieRocket)
enemyData[enemyId.E835_rocketB].setData(spriteId.enemyRocketB, 15000, 11, 1500, 2, 1, 2, 3, 0, soundId.enemyDieRocket)
enemyData[enemyId.E836_car].setData(spriteId.enemyCar, 15000, 11, 1500, 2, 1, 2, 2, 0, soundId.enemyDieCar)
enemyData[enemyId.E837_bus].setData(spriteId.enemyBus, 15000, 11, 1500, 2, 1, 2, 2, 0, soundId.enemyDieCar)
enemyData[enemyId.E840_potion].setData(spriteId.enemyPotionRed, 20000, 10, 2000, 1, 1, 2, 1, 0, soundId.enemyDiePotion)
enemyData[enemyId.E841_bubble].setData(spriteId.enemyBubbleBlue, 20000, 10, 2000, 1, 1, 2, 1, 0, soundId.enemyDieBubble)
enemyData[enemyId.E842_shape].setData(spriteId.enemyPieceSquare, 40000, 10, 4000, 1, 1, 3, 1, 0, soundId.enemyDieMetal)
enemyData[enemyId.E843_cube].setData(spriteId.enemyCubeRed, 40000, 10, 4000, 1, 1, 3, 1, 0, soundId.enemyDieCube)
enemyData[enemyId.E844_ball].setData(spriteId.enemyBigBall, 50000, 10, 5000, 2, 2, 2, 1, 0, soundId.enemyDieMiddle)
enemyData[enemyId.E845_speedCar].setData(spriteId.enemyBigCar, 50000, 10, 5000, 2, 2, 2, 1, 0, soundId.enemyDieCar)
// 8-3
enemyData[enemyId.E850_bossBullon].setData(spriteId.enemyBullonRed, 1650000, 60, 82500, 1, 2, 6, 0, 0, soundId.enemyDieBullon)
enemyData[enemyId.E851_bossTresureChest].setData(spriteId.enemyTreasureChest, 1650000, 60, 82500, 2, 2, 5, 0, 0, soundId.enemyDieGemC)
enemyData[enemyId.E852_bossRobotWhite].setData(spriteId.enemyRobotWhite, 1650000, 10, 82500, 1, 2, 5, 0, 0, soundId.enemyDieRobotB)
enemyData[enemyId.E853_bossCrazyGuy].setData(spriteId.enemyCrazyGuy, 1650000, 10, 82500, 1, 1, 4, 0, 0, soundId.enemyDieBullon)
enemyData[enemyId.E854_bossFish].setData(spriteId.enemyFishBlack, 1650000, 60, 82500, 2, 1, 10, 0, 0, soundId.enemyDieElectronic)
enemyData[enemyId.E855_bossColorCube].setData(spriteId.enemyCubeRed, 1650000, 60, 82500, 1, 1, 6, 0, 0, soundId.enemyDieCube)
// 8-4
enemyData[enemyId.E860_bossBox].setData(spriteId.enemyBigBox, 1650000, 40, 82500, 2, 2, 4, 0, 0, soundId.enemyDieBig)
enemyData[enemyId.E861_bossCube].setData(spriteId.enemyBigCube, 7000000, 10, 350000, 2, 2, 3, 0, 0, soundId.enemyDieCube)
enemyData[enemyId.E862_bossCubeSub].setData(spriteId.enemyBigCube, 7000000, 10, 0, 2, 2, 1, 0, 0, soundId.enemyDieCube)
enemyData[enemyId.E863_bossDiamond].setData(spriteId.enemyDiamond, 1650000, 40, 82500, 2, 2, 2, 0, 0, soundId.enemyDieGemB)
// 9-1
enemyData[enemyId.E900_lamp].setData(spriteId.enemyLamp, 18000, 10, 1800, 2, 1, 2, 1, 0, soundId.enemyDieMetal)
enemyData[enemyId.E901_plate].setData(spriteId.enemyPlate, 18000, 10, 1800, 2, 1, 2, 1, 0, soundId.enemyDieRocket)
enemyData[enemyId.E902_candle].setData(spriteId.enemyCandle, 19200, 12, 1920, 1, 2, 2, 1, 0, soundId.enemyDieMiddle)
enemyData[enemyId.E903_hotdog].setData(spriteId.enemyHotdog, 20400, 12, 2040, 1, 2, 2, 1, 0, soundId.enemyDieElectronic)
enemyData[enemyId.E904_monsterRed].setData(spriteId.enemyBigRedMonster, 24000, 20, 2400, 2, 2, 1, 1, 0, soundId.enemyDieMonster)
enemyData[enemyId.E905_monsterBlue].setData(spriteId.enemyBigBlueMonster, 25200, 20, 2520, 2, 2, 1, 1, 0, soundId.enemyDieMonster)
enemyData[enemyId.E906_potion].setData(spriteId.enemyPotionBigRainbow, 20000, 16, 2000, 1, 1, 2, 1, 0, soundId.enemyDiePotion)
enemyData[enemyId.E907_bus].setData(spriteId.enemyBus, 20000, 16, 2000, 2, 1, 3, 2, 0, soundId.enemyDieCar)
enemyData[enemyId.E908_robotWhite].setData(spriteId.enemyRobotWhite, 22400, 16, 2240, 1, 2, 2, 1, 0, soundId.enemyDieRobotB)
enemyData[enemyId.E910_finalBoss].setData(spriteId.enemyPurpleIllusion, 18000000, 20, 900000, 2, 2, 2, 0, 0, soundId.enemyDieMaster)
;(function EnemyDataInput(){
enemyData[enemyId.TEST].move = function(){
  enemyFunction.moveInside.call(this)
  displaySystem.smallText('TOTAL DAMAGE: ' + (this.hpMax - this.hp), 0, 8, colorId.WHITE)
}
enemyData[enemyId.E100_bullonRed].move = function(){
  enemyFunction.moveBullon.call(this, 30, 0.8)
}
enemyData[enemyId.E101_bullonBlue].move = function(){
  enemyFunction.moveBullon.call(this, 45, 1.2)
}
enemyData[enemyId.E102_drinkWater].move = function(){
  if(this.delayCount >= 0 && this.delayCount <= 10){
    this.speedX -= 0.1
    if(this.speedX <= -2) this.speedX = -2
  } else if(this.delayCount <= 10 && this.delayCount <= 30){
    this.speedX = -2
  } else if(this.delayCount >= 30 && this.delayCount <= 40){
    this.speedX += 0.2
    if(this.speedX > 0) this.speedX = 0
  } else if(this.delayCount >= 40 && this.delayCount <= 50) {
    this.speedX = 0
  } else if(this.delayCount >= 90){
    this.delayCount = 0
  }
  enemyFunction.move.call(this)
}
enemyData[enemyId.E103_drinkEnergy].move = function(){
  if(this.delayCount >= 0 && this.delayCount <= 20){
    this.speedX -= 0.15
    if(this.speedX <= -2) this.speedX = -2

    if(this.delayCount % 4 == 1 || this.delayCount % 4 == 2) this.y += 8
    else this.y -= 8
  } else if(this.delayCount >= 21 && this.delayCount <= 25){
    this.speedX = -4
    this.speedY = 0
  } else if(this.delayCount >= 26 && this.delayCount <= 90){
    this.speedX = 0
    this.speedY = 0
  } else {
    this.delayCount = 0
    this.speedY = (Math.random() * 4) - 2
  }
  enemyFunction.move.call(this)
}
enemyData[enemyId.E104_rocketA].move = enemyFunction.movePositionReset
enemyData[enemyId.E105_rocketB].move = enemyFunction.movePositionReset
enemyData[enemyId.E106_drawer].move = function(){
  switch(this.status){
    case '':
      var floatTime = 300
      this.tempNumber = mySystem.randomInt(150, floatTime)
      this.status = 'float'
      if(this.y >= 30) this.y = mySystem.random(0, 30)
      break
    case 'float':
      this.tempNumber--
      if(this.tempNumber <= 0){
        this.speedX = 0
        this.status = 'down'
        this.tempNumber = 0
      }
      break
    case 'down':
      this.speedY += 0.15
      if(this.y + (this.h * this.scale * 8) >= 120){ 
        this.speedY = 0
        this.delayCount = 0
        this.status = 'delete'
      }
      break
    case 'delete':
      if(this.delayCount >= 240) this.init()
  }
  enemyFunction.move.call(this)
}
enemyData[enemyId.E107_sungglasses].move = function(){
  switch(this.status){
    case '':
      this.x = 240
      this.speedX = -mySystem.random(2, 3)
      this.speedY = mySystem.random(0, 1)
      this.delayCount = -30
      this.status = 'up'
      break
    case 'up':
      this.y = (this.delayCount / 10)
      if(this.delayCount > 0) this.status = 'down'
      break
    case 'down':
      this.y += (this.delayCount / 10)
      if(this.y + (this.h * this.scale * 8) >= 120){
        this.speedX = 0
        this.speedY = 0
        this.status = 'back'
        this.delayCount = 0
      }
      break
    case 'back':
      if(this.delayCount >= 180){
        this.speedX += 0.2
        if(this.speedX >= 4) this.speedX = 4
      }
      break
  }
  enemyFunction.move.call(this)
}
enemyData[enemyId.E108_bossBullon].move = function(){
  if(this.speedY == 0) this.speedY = 1
  enemyFunction.moveInside.call(this)
}
enemyData[enemyId.E110_bigCar].move = function(){
  if(this.mainType == 'machine'){
    if(this.x >= playerSystem.x + 8){
      this.tempNumber--
    } else if(this.x <= playerSystem.x - 8){
      this.tempNumber++
    } else {
      if(this.tempNumber >= 4) this.tempNumber -= 3
      else if(this.tempNumber <= -4) this.tempNumber += 3
    }
  } else {
    if(this.x >= 232){
      this.tempNumber = -1
    } else if(this.y >= playerSystem.y - 16 - (this.h * this.scale * 8) && 
              this.y <= playerSystem.y + (this.w * this.scale * 8) && this.x <= 224){
      this.tempNumber--
    }
  }

  if(this.tempNumber >= 1 && this.tempNumber <= 10){
    this.speedX = +0.5
  } else if(this.tempNumber >= 11 && this.tempNumber <= 40){
    this.speedX = +1 + (this.tempNumber / 20)
  } else if(this.tempNumber >= 41){
    this.speedX = +4
    this.tempNumber = 41
  } else if(this.tempNumber <= -1 && this.tempNumber >= -10){
    this.speedX = -0.5
  } else if(this.tempNumber <= -11 && this.tempNumber >= -40){
    this.speedX = -1 + (this.tempNumber / 20)
  } else if(this.tempNumber <= -41){
    this.speedX = -4
    this.tempNumber = -41
  } else {
    this.speedX = 0
  }
  enemyFunction.movePositionReset.call(this)
}
enemyData[enemyId.E111_bigBall].move = function(){
  if(this.mainType == 'machine' && this.y >= fieldSize.FIELD_Y - (this.h * 8 * this.scale)){
    this.tempNumber = mySystem.randomInt(60, 110, true)
    var randomX = mySystem.randomInt(0, fieldSize.FIELD_X, true)
    this.speedX = (randomX - this.x) / this.tempNumber
    if(this.speedX > 2) this.speedX = 2
    if(this.speedX < -2) this.speedX = -2
  }

  if(this.tempInitCheck()){
    this.tempNumber = mySystem.randomInt(60, 110, true)
  }

  this.rotate = Math.floor(this.delayCount / 2) % 4
  enemyFunction.moveBall.call(this, this.tempNumber, 1)
}
enemyData[enemyId.E112_bigBox].move = function(){
  if(this.delayCount >= 60 && this.delayCount <= 119){
    this.speedX = 0
    this.speedY = 0
  } else if(this.delayCount >= 120){
    this.delayCount = 0
    enemyFunction.E3Fx_setRandomSpeed.call(this, 0, 0, 1, 1, 1, true)
  }

  if(this.x >= 240) this.speedX = -Math.abs(this.speedX)
  enemyFunction.move.call(this)
}

enemyData[enemyId.E113_bigRedMonster].move = function(){
  var FIELDX = fieldSize.FIELD_X
  if(this.x >= FIELDX){
    this.speedX = -4
    this.tempNumber = 0
    this.speedY = -0.5 + (Math.random() * 1)
  } else if(this.x >= FIELDX - 20){
    this.speedX = -0.5
  } else if(this.x <= FIELDX - 21){
    this.tempNumber++
    this.speedX = -0.5 - (this.tempNumber / 20)
    if(this.speedX <= -3) this.speedX = -3
  }
  enemyFunction.movePositionReset.call(this)
}
enemyData[enemyId.E114_bossVendingMachine].move = function(){
  if(enemyFunction.delayConditionCheck.call(this, 80, 100, 4, true)){
    fieldSystem.insertEbullet(ebulletId.drinkSmall, this.x, this.y + 24)
    fieldSystem.insertEbullet(ebulletId.drinkSmall, this.x, this.y + 24)
    fieldSystem.insertEbullet(ebulletId.drinkWater, this.x, this.y)
  }
  enemyFunction.moveInside.call(this)
}
enemyData[enemyId.E120_streetLight].move = function(){
  if(this.delayCount >= 60){
    this.delayCount = 0
    fieldSystem.insertEbullet(ebulletId.streetLight, this.x, this.y, 10)
  }
  enemyFunction.moveNotExit.call(this)
}
enemyData[enemyId.E121_utilityPole].move = enemyFunction.movePositionReset
enemyData[enemyId.E122_car].move = function(){
  if(!fieldSystem.collision(this, playerSystem)){
    enemyFunction.movePositionReset.call(this)
  }
}
enemyData[enemyId.E123_bus].move = function(){
  if(this.x >= fieldSize.RESET_RIGHT || this.x <= fieldSize.RESET_LEFT){
    this.y = mySystem.random(0, 120)
  }

  if(this.delayCount >= 1){
    this.delayCount = 0
    for(var i = 0; i < fieldSystem.enemy.length; i++){
      if(fieldSystem.enemy[i].isUsing && fieldSystem.collision(this, fieldSystem.enemy[i])){
        if(this.x < fieldSystem.enemy[i]){
          this.x -= 2
          fieldSystem.enemy[i].x += 1
        } else {
          this.x += 1
          fieldSystem.enemy[i].x -= 2
        }
        if(this.y < fieldSystem.enemy[i]){
          this.y
          fieldSystem.enemy[i].y++
        } else {
          this.y++
          fieldSystem.enemy[i].y--
        }
      }
    }

    if(fieldSystem.collision(this, playerSystem)){
      if(this.x < playerSystem.x){
        this.x -= 2
        playerSystem.x += 1
      } else {
        this.x += 1
        playerSystem.x -= 2
      }
      if(this.y < playerSystem.y){
        this.y--
        playerSystem.y++
      } else {
        this.y++
        playerSystem.y--
      }
    }
  }

  enemyFunction.movePositionReset.call(this)
}
enemyData[enemyId.E124_bigVendingMachine].move = function(){
  EnemyData.prototype.move.call(this)
  if(this.x + (this.w * this.scale * 8) >= 224) this.x--

  if(this.delayCount >= 60){
    this.delayCount = 0   
    fieldSystem.insertEbullet(ebulletId.drinkSmall, this.x, this.y)
  }
}
enemyData[enemyId.E125_bossTrafficLight].move = function(){
  var INDEX_BOXCREATE = 1
  var INDEX_BOXINPUT = 0
  var CHANGEFRAME = 300
  var BOXMAX = 2
  switch(this.status){
    case '':
      this.x = 120 - ((this.w * this.scale * 8) / 2)
      this.y = 60 - ((this.h * this.scale * 8) / 2)
      this.status = 'red'
      this.delayCount = 0
      this.tempArray[INDEX_BOXCREATE] = 0
      this.tempArray[INDEX_BOXINPUT] = 1
      break
    case 'red':
      this.spriteId = spriteId.enemyTrafficLightRed
      if(this.delayCount >= CHANGEFRAME){
        this.status = 'green'
        this.delayCount = 0
      }
      if(this.delayCount == 150 && mySystem.random(0, 100) <= 50 && this.tempArray[INDEX_BOXCREATE] < BOXMAX){
        this.tempArray[INDEX_BOXCREATE]++
        fieldSystem.insertEnemy(enemyId.E126_superBox, 200, 40)
      }
      break
    case 'green':
      this.spriteId = spriteId.enemyTrafficLightGreen
      if(this.delayCount <= CHANGEFRAME-60 && this.delayCount % 60 == 10){
        fieldSystem.insertEbullet(ebulletId.speedCar, fieldSize.FIELDX, 0)
        fieldSystem.insertEbullet(ebulletId.speedCar, fieldSize.FIELDX, 30)
        fieldSystem.insertEbullet(ebulletId.speedCar, fieldSize.FIELDX, 60)
      }

      if(this.delayCount <= CHANGEFRAME-60 && this.delayCount % 60 == 40){
        fieldSystem.insertEbullet(ebulletId.speedBus, fieldSize.FIELDX, 0+16)
        fieldSystem.insertEbullet(ebulletId.speedBus, fieldSize.FIELDX, 30+16)
        fieldSystem.insertEbullet(ebulletId.speedBus, fieldSize.FIELDX, 60+16)
      }

      if(this.delayCount >= CHANGEFRAME){
        this.status = 'red'
        this.delayCount = 0
      }
      break
  }
}
enemyData[enemyId.E126_superBox].move = function(){
  var getBossIndex = fieldSystem.getIdvalueIndex(fieldSystem.enemy, enemyId.E125_bossTrafficLight)
  if(getBossIndex != -1){
    if(fieldSystem.enemy[getBossIndex].spriteId == spriteId.enemyTrafficLightGreen){
      this.tempNumber++
    } else {
      if(this.x >= 120) this.x--
      if(this.y >= 30) this.y--
    }
  } else {
    this.tempNumber++
  }

  if(this.tempNumber >= 120) this.x--
  if(this.x + (this.w * this.scale * 8) <= 0) this.init()
}
enemyData[enemyId.E200_hammer].move = function(){
  var MAX_HIT = 20
  if(this.tempNumber < MAX_HIT){
    this.delayCount = 0
    hitComplete:
    for(var i = 0; i < fieldSystem.enemy.length; i++){
      var enemy = fieldSystem.enemy[i]
      if(enemy.isUsing && enemy.tempString != 'hitedmove' && fieldSystem.collision(this, enemy)){
        switch(enemy.idValue){
          case enemyId.E203_bigStone: case enemyId.E202_stonePiece: case enemyId.E204_brokenStone:
          case enemyId.E210_garnet: case enemyId.E211_amethyst: case enemyId.E212_emerald: case enemyId.E213_sapphire:
          case enemyId.E214_gold: case enemyId.E215_silver:
            this.tempNumber++
            enemy.hp -= Math.floor(enemy.hpMax / 100) * 20
            enemy.status = 'hited'
            break hitComplete
          case enemyId.E216_diamond:
            if(this.status != 'hitedmove'){
              this.hp -= Math.floor(this.hpMax / 100) * 20
              this.status = 'hited'
              this.tempNumber++
            }
            break hitComplete
        }
      }
    }

    if(this.tempNumber >= MAX_HIT){
      this.delayCount = 0
      this.tempNumber = MAX_HIT
      this.status = 'break'
    }
  }

  switch(this.status){
    case 'break':
      if(this.delayCount >= 240) this.init()
      this.rotate = 2
      break
    case 'hited': enemyFunction.E2Fx_hited.call(this, 0.7, 0.7, 1.0, 1.0, 180); break
    case 'hitedmove': enemyFunction.E2Fx_hitedmove.call(this); break
  }
  enemyFunction.moveNotExit.call(this)
}
enemyData[enemyId.E201_torch].move = function(){
  if(enemyFunction.delayConditionCheck.call(this, 60, 80, 4, true)){
    var x = this.x + mySystem.random(-16, 16)
    var y = this.y + mySystem.random(-12, -4)
    fieldSystem.insertEbullet(ebulletId.torch, x, y, 18)
  }
  enemyFunction.move.call(this)
}
enemyData[enemyId.E202_stonePiece].move = function(){
  if(this.tempInitCheck()){
    enemyFunction.E3Fx_setRandomSpeed.call(this, 0, 0, 0.5, 0.5, 0, true)
    this.rotate = mySystem.randomInt(0, 4)
  }
  enemyFunction.moveNotExit.call(this)
  switch(this.status){
    case '':
      this.rotate = 0
      if(this.speedX == 0) this.speedX = mySystem.random(-2, 2)
      if(this.speedY == 0) this.speedY = mySystem.random(-1, 1)
      break
    case 'hited':
      enemyFunction.E2Fx_hited.call(this, 1.2, 1.2, 1.6, 1.6, 120)
      this.rotate = Math.floor(this.delayCount / 2) % 4
      break
    case 'hitedmove':
      enemyFunction.E2Fx_hitedmove.call(this)
      break
  }
}
enemyData[enemyId.E203_bigStone].move = enemyData[enemyId.E202_stonePiece].move
enemyData[enemyId.E204_brokenStone].move = function(){
  enemyData[enemyId.E202_stonePiece].move.call(this)
  if(this.hp <= 0){
    for(var i = 0; i < 10; i++){
      var x = this.x + mySystem.random(-16, 16)
      var y = this.y + mySystem.random(-16, 16)
      fieldSystem.insertEnemy(enemyId.E202_stonePiece, x, y)
    }
  }
}
enemyData[enemyId.E205_bigBlueMonster].move = function(){
  switch(this.status){
    case '':
      this.tempNumber++
      if(this.tempNumber >= 30) {
        this.tempNumber = -30
        this.speedY = 0
      }
      this.speedY = (this.tempNumber) / 20

      if(this.x > fieldSize.FIELD_X) this.delayCount--
      if(this.delayCount >= 45){
        this.status = 'move'
        this.speedY = (this.y - playerSystem.y) / 40
        if(this.speedY > 2){ this.speedY = 2} 
        else if(this.speedY < -2){ this.speedY = -2}

        if(this.x <= playerSystem.x){ this.speedX = 1} 
        else { this.speedX = -1}
      }
      break
    case 'move':
      if(this.speedX < 0) this.speedX -= 0.2
      else this.speedX += 0.2

      if(this.speedX < -3) this.speedX = -3
      else if(this.speedX > 3) this.speedX = 3
      
      if(this.x >= fieldSize.FIELD_X){
        this.status = ''
        this.speedX = -0.4
        this.delayCount = 0
      }
      break
  }
  enemyFunction.movePositionReset.call(this)
}
enemyData[enemyId.E206_bossBox].move = function(){
  var INDEX_X = 0
  var INDEX_Y = 1
  var MOVE_FRAME = 60
  var WAIT_FRAME = 30
  var SHAKE_FRAME = 60
  var STOP_FRAME = 240
  var SPEED_DOWN_FRAME = 60
  switch(this.status){
    case '':
      this.tempArray[INDEX_X] = mySystem.random(0, 239-(this.w*8*this.scale))
      this.tempArray[INDEX_Y] = mySystem.random(0, 119-(this.h*8*this.scale))
      this.status = 'move'
      this.delayCount = 0
      this.speedX = 0
      this.speedY = 0
      break
    case 'move':
      if(this.delayCount >= MOVE_FRAME){
        if(this.x - 10 >= this.tempArray[INDEX_X]) this.x -= 1.8
        else if(this.x + 10 <= this.tempArray[INDEX_X]) this.x += 1.8
        else if(this.y - 10 >= this.tempArray[INDEX_Y]) this.y -= 1.8
        else if(this.y + 10 <= this.tempArray[INDEX_Y]) this.y += 1.8
        else {
          this.status = 'wait'
          this.delayCount = 0
        }
      }
      break
    case 'wait':
      if(this.delayCount >= WAIT_FRAME){
        this.status = 'shake'
        this.tempArray[INDEX_X] = this.x
        this.tempArray[INDEX_Y] = this.y
        this.delayCount = 0
      }
      break
    case 'shake':
      this.x = this.tempArray[INDEX_X] + mySystem.random(-8, 8)
      this.y = this.tempArray[INDEX_Y] + mySystem.random(-8, 8)
      if(this.delayCount >= SHAKE_FRAME){
        this.delayCount = 0
        if(mySystem.randomBoolean()){
          this.status = 'leftright'
          this.speedX = 20
        } else {
          this.status = 'updown'
          this.speedY = 20
        }
      }
      break
    case 'leftright':
      if(this.delayCount >= SPEED_DOWN_FRAME){
        if(this.speedX > 1) this.speedX -= 0.1
        else if(this.speedX < -1) this.speedX += 0.1
        else this.speedX = 0
      }
      if(this.delayCount >= STOP_FRAME) this.status = ''
      break
    case 'updown':
      if(this.delayCount >= SPEED_DOWN_FRAME){
        if(this.speedY > 1) this.speedY -= 0.1
        else if(this.speedY < -1) this.speedY += 0.1
        else this.speedY = 0
      }
      if(this.delayCount >= STOP_FRAME) this.status = ''
      break
  }
  enemyFunction.moveNotExit.call(this)
}
enemyData[enemyId.E210_garnet].move = function(){
  enemyFunction.movePositionReset.call(this, 'left')
  if(this.status == 'hited') enemyFunction.E2Fx_hited.call(this, 1, 1, 3, 3, 150)
  if(this.status == 'hitedmove') enemyFunction.E2Fx_hitedmove.call(this)
}
enemyData[enemyId.E211_amethyst].move = enemyData[enemyId.E210_garnet].move
enemyData[enemyId.E212_emerald].move = enemyData[enemyId.E210_garnet].move
enemyData[enemyId.E213_sapphire].move = enemyData[enemyId.E210_garnet].move
enemyData[enemyId.E214_gold].move = function(){
  enemyData[enemyId.E210_garnet].move.call(this)
  var INDEX_DOWN_X = 0
  var INDEX_Y = 1
  switch(this.status){
    case '':
      this.speedX = -1.5
      this.speedY = 0
      this.tempArray[INDEX_DOWN_X] = mySystem.random(0, 240)
      this.tempArray[INDEX_Y] = mySystem.random(0, 90)
      this.status = 'normal'
      break
    case 'normal':
      if(this.x <= this.tempArray[INDEX_DOWN_X] + 4 && this.x >= this.tempArray[INDEX_DOWN_X] - 4){
        this.status = 'down'
        if(this.x >= 260) this.y = this.tempArray[INDEX_Y]
      }
      break
    case 'down':
      this.speedY += 0.5
      this.speedX = 0
      if(this.y + (this.h * 8 * this.scale) >= 120){
        this.status = 'stop'
        this.delayCount = 0
        this.y = 120
      }
      break
    case 'stop':
      this.speedY = 0
      if(this.delayCount >= 180){
        this.status = ''
        this.x = 269
        this.y = this.tempArray[INDEX_Y]
      }
      break
    case 'getgem':
      this.speedX = 0
      this.speedY = 0
      break
  }
}
enemyData[enemyId.E215_silver].move = enemyData[enemyId.E214_gold].move
enemyData[enemyId.E216_diamond].move = enemyData[enemyId.E210_garnet].move
enemyData[enemyId.E217_bossTreasureChest].move = function(){
  var INDEX_X = 0
  var INDEX_Y = 1
  if(this.tempInitCheck()){
    this.x = 132 - (this.w * 8 * this.scale / 2)
    this.tempArray[INDEX_X] = this.x
    this.y = 120 - (this.h * 8 * this.scale)
    this.tempArray[INDEX_Y] = this.y
  }

  this.x = this.tempArray[INDEX_X] + (this.w * 8 * this.scale / 2) + mySystem.random(-8, 8)
  if(enemyFunction.delayConditionCheck.call(this, 110, 130, 2, true)){
    var gemX = this.x + mySystem.random(-8, 8)
    for(var i = 0; i < 2; i++) fieldSystem.insertEbullet(ebulletId.randomGem, gemX, this.y + (this.h * 8 * this.scale / 2))
  }
}
enemyData[enemyId.E218_drill].move = enemyData[enemyId.E200_hammer].move
enemyData[enemyId.E220_cart].move = function(){
  var BASE_SPEEDX = -0.5
  var enemy = null
  enemyFunction.movePositionReset.call(this)
  switch(this.status){
    case '':
      this.speedX = BASE_SPEEDX
      if(this.delayCount % 4 != 0) return
      loopOut:
      for(var i = 0; i < fieldSystem.enemy.length; i++){
        if(fieldSystem.enemy[i].isUsing && fieldSystem.enemy[i].status != 'magnetizm' && fieldSystem.collision(this, fieldSystem.enemy[i])){
          switch(fieldSystem.enemy[i].idValue){
            case enemyId.E210_garnet: case enemyId.E211_amethyst: case enemyId.E212_emerald: case enemyId.E213_sapphire:
            case enemyId.E214_gold: case enemyId.E215_silver: case enemyId.E216_diamond:
              this.status = 'getgem'
              this.targetNumber = i
              this.tempNumber = this.hp
              break loopOut
          }
        }
      }
      break
    case 'getgem':
      if(this.targetNumber == -1){
        this.status = ''
        return
      }
      enemy = fieldSystem.enemy[this.targetNumber]
      enemy.status = 'getgem'
      if(this.hp < this.tempNumber){
        enemy.hp -= this.tempNumber - this.hp
        this.hp = this.tempNumber
      }
      if(enemy.isUsing && enemy.hp > 0){
        enemy.x = this.x
        enemy.y = this.y - (enemy.h * 8 * enemy.scale)
        this.speedX = BASE_SPEEDX * 4
    
        if(this.x <= fieldSize.RESET_LEFT){
          this.x = fieldSize.RESET_RIGHT - 10
          this.status = ''
          enemy.x = fieldSize.RESET_RIGHT - 10
          enemy.y = mySystem.random(0, 120)
          enemy.status = ''
        }
      } else {
        this.speedX = BASE_SPEEDX
        this.status = ''
      }
      break
    case 'hited':
    case 'hitedmove':
      if(this.targetNumber != -1){
        enemy = fieldSystem.enemy[this.targetNumber]
        enemy.status = ''
      }
      enemyFunction.E2Fx_hited.call(this, 4, 4, 5, 5, 60)
      enemyFunction.E2Fx_hitedmove.call(this)
      break
  }
}
enemyData[enemyId.E221_bigCart].move = function(){
  enemyFunction.movePositionReset.call(this)
  switch(this.status){
    case '':
      if(this.y + (this.h * 8 * this.scale) >= 119){
        this.speedY = 0
        this.speedX = -4
      } else {
        this.speedY = 2
        this.speedX = -4
      }
      break
    case 'hited':
    case 'hitedmove':
      enemyFunction.E2Fx_hited.call(this, 1, 1, 4, 4, 120)
      enemyFunction.E2Fx_hitedmove.call(this)
      break
  }

  if(this.delayCount >= 2){
    this.delayCount = 0
    loopOut:
    for(var i = 0; i < fieldSystem.enemy.length; i++){
      var enemy = fieldSystem.enemy[i]
      if(enemy.isUsing && this.index != i && enemy.status != 'hitedmove' && fieldSystem.collision(this, enemy)){
        enemy.status = 'hited'
        enemy.hp -= Math.floor(enemy.hpMax/100) * 10
        this.hp -= Math.floor(enemy.hpMax/100) * 10
        break loopOut
      }
    }
  }
}
enemyData[enemyId.E222_magnet].move = function(){
  enemyFunction.move.call(this)
  var INDEX_X = 0
  var INDEX_Y = 1
  var DELAY = 60
  try{
  switch(this.status){
    case '':
      if(this.x <= fieldSize.FIELD_X - 40 && this.delayCount >= 60){
        this.status = 'magnet'
        this.tempArray[INDEX_X] = this.x
        this.tempArray[INDEX_Y] = this.y
        this.speedX = 0
        this.speedY = 0
        this.delayCount = 0
      } else if(this.delayCount >= DELAY/2) {
        this.speedX = -1
      } else {
        this.speedX = 0
        this.speedY = 0
      }
      break
    case 'magnet':
      if(this.delayCount <= DELAY){
        this.x = this.tempArray[INDEX_X] + (this.delayCount % 3)
        this.y = this.tempArray[INDEX_Y] + (this.delayCount % 4)
        this.speedX = 0
        this.speedY = 0
      } else if(this.delayCount >= DELAY){
        this.targetNumber = fieldSystem.getRandomIndex(fieldSystem.enemy)
        if(this.targetNumber == -1 || this.targetNumber == this.index){
          this.status = ''
          this.delayCount = 0
        } else {
          this.status = 'checktarget'
        }
      }
      break
    case 'checktarget':
      if(this.targetNumber == -1){
        this.status = 'magnet'
        this.delayCount = DELAY
        return
      }
      var enemy = fieldSystem.enemy[this.targetNumber]
      switch(enemy.idValue){
        case enemyId.E216_diamond:
          this.status = 'magnet'
          break
        case enemyId.E220_cart:
          if(enemy.status == 'getgem'){
            enemy.status = ''
            fieldSystem[enemy.targetNumber].status = 'magnetizm'
            this.status = 'magnetizm'
          } else {
            this.status = 'magnet'
          }
          break
        default:
          if(enemy.status == 'getgem'){
            this.status = 'magnet'
          } else {
            this.status = 'magnetizm'
            enemy.status = 'magnetizm'
          }
          break
      }
      if(this.status == 'magnetizm'){
        this.delayCount = 0
      }
      break
    case 'magnetizm':
      if(this.targetNumber == -1){
        this.status = 'magnet'
        return
      }
      enemy = fieldSystem.enemy[this.targetNumber]
      if(!enemy.isUsing && enemy.hp <= 0){
        this.targetNumber = -1
        this.status = ''
      }
      switch(enemy.idValue){
        case enemyId.E221_bigCart:
          if(this.delayCount >= DELAY){
            this.status = 'hited'
            enemy.status = 'hited'
          }
          break
        case enemyId.E222_magnet:
          if(this.delayCount >= DELAY){
            if(enemy.x < this.x){
              enemy.x -= 8
              this.x += 8
            } else {
              enemy.x += 8
              this.x -= 8
            }
          }
          break
        default:
          if(this.x <= enemy.x - (enemy.w * 8 * enemy.scale) - 4) enemy.x -= 2 - enemy.speedX
          else if(this.x >= enemy.x + (enemy.w * 8 * enemy.scale) + 4) enemy.x += 2 + enemy.speedX
          else enemy.x = this.x - (enemy.w * 8 * enemy.scale)

          if(this.y <= enemy.y - 4) enemy.y -= 2 - enemy.speedY
          else if(this.y >= enemy.y + 4) enemy.y += 2 + enemy.speedY
          else enemy.y = this.y

          if(fieldSystem.collision(this, enemy)) this.status = 'moveright'
          else if(enemy.status != 'magnetizm') this.status = ''
          if(this.delayCount >= DELAY*2) this.status = 'moveright'
          break
      }
      break
    case 'moveright':
      if(this.targetNumber == -1){
        this.status = 'magnet'
        return
      }
      enemy = fieldSystem.enemy[this.targetNumber]
      enemy.x = this.x - (enemy.w * 8 * enemy.scale)
      enemy.y = this.y
      this.speedX = 0.5
      this.speedY = 0

      if(enemy.status != 'magnetizm'){
        this.status = ''
        enemy.status = ''
        this.delayCount = 0  
      }

      if(this.x > fieldSize.RESET_RIGHT - 10){
        enemy.hp -= Math.floor(enemy.hpMax/100)*20
        this.status = ''
        enemy.status = ''
        this.delayCount = 0
      }
      break
  }

  } catch(e){
    this.status = ''
    this.delayCount = 0
  }
}
enemyData[enemyId.E223_bus].move = function(){
  enemyData[enemyId.E123_bus].move.call(this)
  if(this.status == 'magnetizm'){
    this.tempNumber++
    if(this.tempNumber >= 120 && this.tempNumber % 30 == 0) soundSystem.play(soundId.carHorn1, 3)
    if(this.tempNumber >= 180){
      this.speedX = -4
      this.status = ''
      this.tempNumber = 0
    }
  }

  if(this.status == 'hited') enemyFunction.E2Fx_hited.call(this, 3, 3, 4, 4, 120)
  else if(this.status == 'hitedmove') enemyFunction.E2Fx_hitedmove.call(this, 3, 3, 4, 4, 120)

  if(this.x >= 240){
    this.speedX = -2
    this.status = ''
    this.tempNumber = 0
  }
}
enemyData[enemyId.E224_bossCart].move = function(){
  enemyFunction.movePositionReset.call(this)
  switch(this.status){
    case 'hited': enemyFunction.E2Fx_hited.call(this, 1, 1, 4, 4, 90); break
    case 'hitedmove': enemyFunction.E2Fx_hitedmove.call(this); break
    default:
      if(this.y < fieldSize.FIELD_Y - (this.w * 8 * this.scale) - 1){
        this.speedY = 4
      } else {
        this.y = fieldSize.FIELD_Y - (this.w * 8 * this.scale) - 1
        this.speedY = 0
      }
      this.speedX = -2

      for(var i = 0; i < fieldSystem.enemy.length; i++){
        if(this.index != i && fieldSystem.enemy[i].idValue == enemyId.E224_bossCart){
          if(fieldSystem.collision(this, fieldSystem.enemy[i])){
            this.status = 'hited'
            fieldSystem.enemy[i].status = 'hited'
            soundSystem.play(soundId.enemyDiePillar)
          }
        }
      }
  }
}
enemyData[enemyId.E300_robotRed].move = function(){
  enemyFunction.moveNotExit.call(this)
  if(this.delayCount == 60) enemyFunction.E3Fx_setRandomSpeed.call(this, 1, 1, 1.6, 1.6, 0.2, true)
  if(enemyFunction.delayConditionCheck.call(this, 150, 150, 1, true)){
    fieldSystem.insertEbullet(ebulletId.robotMissile, this.x, this.y)
  }
}
enemyData[enemyId.E301_robotBlue].move = function(){
  enemyFunction.moveNotExit.call(this)
  if(this.delayCount == 50){
    if(mySystem.randomBoolean()) enemyFunction.E3Fx_setRandomSpeed.call(this, 1, 0, 2, 0, 0.4, true)
    else enemyFunction.E3Fx_setRandomSpeed.call(this, 0, 1, 0, 2, 0.4, true)
  }
  if(enemyFunction.delayConditionCheck.call(this, 130, 140, 10, true)){
    fieldSystem.insertEbullet(ebulletId.robotLaser, this.x, this.y)
  }
}
enemyData[enemyId.E302_robotGreen].move = function(){
  enemyFunction.moveNotExit.call(this)
  if(this.delayCount == 50) enemyFunction.E3Fx_setRandomSpeed.call(this, 0.7, 0.7, 1.2, 1.2, 0.1, true)
  if(this.delayCount >= 300){
    this.delayCount = 0
    var targetEnemyIndex = fieldSystem.getRandomIndex(fieldSystem.enemy)
    if(targetEnemyIndex == -1){
      this.hp += 2500
      if(this.idValue == enemyId.E312_bossRobotC) this.hp += 7500
      fieldSystem.insertEbullet(ebulletId.heal, this.x, this.y)
    } else {
      var enemy = fieldSystem.enemy[targetEnemyIndex]
      enemy.hp += 2500
      if(this.idValue == enemyId.E312_bossRobotC) enemy.hp += 7500
      fieldSystem.insertEbullet(ebulletId.heal, enemy.x, enemy.y)
    }
  }
}
enemyData[enemyId.E303_robotWhite].move = function(){
  enemyFunction.moveNotExit.call(this)
  if(this.status != 'hitedmove' && this.delayCount >= 30){
    this.status = 'hited'
    this.delayCount = 0
  }
  if(this.status == 'hited') enemyFunction.E2Fx_hited.call(this, 3, 3, 5, 5, 180)
  if(this.status == 'hitedmove') enemyFunction.E2Fx_hitedmove.call(this)
}
enemyData[enemyId.E304_metalRed].move = function(){
  enemyFunction.movePositionReset.call(this)
  if(this.tempInitCheck()){
    enemyFunction.E3Fx_setRandomSpeed.call(this, -4, -2, -2, 2, 0, false)
    switch(mySystem.randomInt(0, 3)){
      case 1: this.spriteId = spriteId.enemyMetalBlue; break
      case 2: this.spriteId = spriteId.enemyMetalGreen; break
    }
  }
}
enemyData[enemyId.E307_outlet].move = function(){
  enemyFunction.movePositionReset.call(this)
  if(this.y + (this.h * 8 * this.scale) < fieldSize.FIELD_Y){
    this.speedY = 2
    this.speedX = 0
  } else {
    this.speedX = -1
    this.speedY = 0
  }

  if(enemyFunction.delayConditionCheck.call(this, 60, 70, 2, true)){
    fieldSystem.insertEbullet(ebulletId.electricity, this.x, this.y)
  }
}
enemyData[enemyId.E308_electronicA].move = function(){
  enemyFunction.movePositionReset.call(this)
  if(this.delayCount >= 80){
    this.delayCount = 0
    fieldSystem.insertEbullet(ebulletId.electronicA, this.x, this.y, 'up')
    fieldSystem.insertEbullet(ebulletId.electronicA, this.x, this.y, 'down')
    fieldSystem.insertEbullet(ebulletId.electronicA, this.x, this.y, 'left')
    fieldSystem.insertEbullet(ebulletId.electronicA, this.x, this.y, 'right')
  }
}
enemyData[enemyId.E309_electronicB].move = function(){
  enemyFunction.movePositionReset.call(this)
  if(this.delayCount >= 90){
    this.delayCount = 0
    for(var i = 1; i <= 9; i++) fieldSystem.insertEbullet(ebulletId.electronicB, this.x, this.y, i+'')
  }
}
enemyData[enemyId.E310_bossRobotA].move = function(){
  enemyFunction.moveNotExit.call(this)
  if(this.delayCount % 50 == 0){
    enemyFunction.E3Fx_setRandomSpeed.call(this, 0.7, 0.7, 1.4, 1.4, 0.7, true)
  }
  if(enemyFunction.delayConditionCheck.call(this, 140, 160, 10, true)){
    fieldSystem.insertEbullet(ebulletId.robotMissile, this.x, this.y)
  }
}
enemyData[enemyId.E311_bossRobotB].move = function(){
  enemyFunction.moveNotExit.call(this)
  if(this.delayCount % 50 == 0){
    if(mySystem.randomBoolean()) enemyFunction.E3Fx_setRandomSpeed.call(this, 1.2, 0, 1.8, 0, 0.6, true)
    else enemyFunction.E3Fx_setRandomSpeed.call(this, 0, 1.2, 0, 1.8, 0.6, true)
  }
  if(enemyFunction.delayConditionCheck.call(this, 120, 160, 10, true)){
    fieldSystem.insertEbullet(ebulletId.robotLaser, this.x, this.y)
  }  
}
enemyData[enemyId.E312_bossRobotC].move = enemyData[enemyId.E302_robotGreen].move
enemyData[enemyId.E313_bossRobotD].move = enemyData[enemyId.E303_robotWhite].move
enemyData[enemyId.E320_bossComputer1].move = function(){
  this.speedX = 0
  this.speedY = 0
  this.x = (fieldSize.FIELD_X / 2) - (this.w * 8 * this.scale / 2)
  this.y = (fieldSize.FIELD_Y / 2) - (this.h * 8 * this.scale / 2)
}
enemyData[enemyId.E321_bossComputer2].move = function(){
  enemyData[enemyId.E320_bossComputer1].move.call(this)
  if(this.delayCount >= 6){
    this.delayCount = 0
    fieldSystem.insertEbullet(ebulletId.robotLaser, fieldSize.FIELD_X, mySystem.random(0, 60))
    fieldSystem.insertEbullet(ebulletId.robotLaser, fieldSize.FIELD_X, mySystem.random(60, 120))
  }
}
enemyData[enemyId.E322_bossComputer3].move = function(){
  if(this.tempInitCheck()){
    for(var i = 0; i < 9; i++){
      var X = (i % 3) * 120
      var Y = Math.floor(i / 3) * 60
      fieldSystem.insertEnemy(enemyId.E325_bossRobotWhite, X, Y)
    }
  }

  enemyData[enemyId.E320_bossComputer1].move.call(this)
  var count = fieldSystem.getUsingCount(fieldSystem.enemy, enemyId.E325_bossRobotWhite)

  if(count >= 1 && this.hp <= this.hpMax){
    var get = fieldSystem.getIdValueIndexObject(fieldSystem.enemy, enemyId.E325_bossRobotWhite)
    if(get != null){
      get.hp -= (this.hpMax - this.hp)
      this.hp = this.hpMax
    }
  }
}
enemyData[enemyId.E323_bossComputer4].move = function(){
  enemyData[enemyId.E320_bossComputer1].move.call(this)
  if(enemyFunction.delayConditionCheck.call(this, 0, 120, 30, true)){
    var FX = fieldSize.FIELD_X - 10
    var FY = fieldSize.FIELD_Y - 10
    var RY = mySystem.random(this.delayCount - 5, this.delayCount + 5)
    var RX = mySystem.random(this.delayCount * 2 - 10, this.delayCount * 2 + 10)
    var TX = fieldSize.FIELD_X/2 + mySystem.random(-16, 16)
    var TY = fieldSize.FIELD_Y/2 + mySystem.random(-16, 16)
    fieldSystem.insertEbullet(ebulletId.electronicA, 10, RY, 'right')
    fieldSystem.insertEbullet(ebulletId.electronicA, FX, RY, 'left')
    fieldSystem.insertEbullet(ebulletId.electronicA, RX, FY, 'up')
    fieldSystem.insertEbullet(ebulletId.electronicA, RX, 10, 'down')
    for(var i = 1; i <= 9; i++) fieldSystem.insertEbullet(ebulletId.electronicB, TX, TY, i+'')
  }
}
enemyData[enemyId.E324_bossComputer5].move = function(){
  enemyData[enemyId.E320_bossComputer1].move.call(this)
  if(enemyFunction.delayConditionCheck.call(this, 120, 240, 2, true)){
    fieldSystem.insertEbullet(ebulletId.electricity, mySystem.random(0, fieldSize.FIELD_X), 120)
  }
}
enemyData[enemyId.E325_bossRobotWhite].move = enemyData[enemyId.E303_robotWhite].move
enemyData[enemyId.E330_machineBall].move = function(){
  this.mainType = 'machine'
  enemyData[enemyId.E111_bigBall].move.call(this)
}
enemyData[enemyId.E331_machineCar].move = function(){
  this.mainType = 'machine'
  enemyData[enemyId.E110_bigCar].move.call(this)
}
enemyData[enemyId.E332_machineBox].move = enemyData[enemyId.E112_bigBox].move
enemyData[enemyId.E340_bossLever].move = function(){
  this.x = (fieldSize.FIELD_X / 2) - (this.w * 8 * this.scale / 2)
  this.speedX = 0
  var enemyCount = fieldSystem.getUsingCount(fieldSystem.enemy)
  if(enemyCount >= 2 && this.hp < this.hpMax){
    var get = fieldSystem.getIdValueIndexObject(fieldSystem.enemy, enemyId.E342_metalColor)
    var discountHp = this.hpMax - this.hp
    get.hp -= discountHp
    this.hp += discountHp
  }
  if(this.delayCount <= 1200 && this.hp <= 0){
    this.hp = 1
    this.delayCount += 12
  }
  if(enemyFunction.delayConditionCheck.call(this, 0, 1200, 12, false) && enemyCount <= 20){
    fieldSystem.insertEnemy(enemyId.E342_metalColor, 290, mySystem.random(0, 120))
  }

  this.y = (fieldSize.FIELD_Y) - (this.h * 8 * this.scale) - 1
}
enemyData[enemyId.E341_newRoundLever].move = function(){
  this.y = (fieldSize.FIELD_Y) - (this.h * 8 * this.scale) - 1
  this.speedX = -0.2
  enemyFunction.move.call(this)
  if(this.delayCount >= 660){
    this.init()
  }
}
enemyData[enemyId.E3A00_superLever].move = function(){
  this.x = (fieldSize.FIELD_X / 2) - (this.w * 8 * this.scale / 2)
  this.y = (fieldSize.FIELD_Y) - (this.h * 8 * this.scale) - 1
  if(this.tempInitCheck()) fieldSystem.insertEbullet(ebulletId.greyArea)
}
enemyData[enemyId.E3A01_robotOrange].move = function(){
  enemyFunction.moveNotExit.call(this)
  if(this.delayCount == 80){
    enemyFunction.E3Fx_setRandomSpeed.call(this, -4, 0, -6, 0, 0, false)
  } else if(this.delayCount >= 90){
    this.delayCount = 0
    enemyFunction.E3Fx_setRandomSpeed.call(this, 0.2, 1, 0.2, 1, 0, true)
  }
}
enemyData[enemyId.E3A02_robotCyan].move = function(){
  enemyFunction.moveNotExit.call(this)
  if(this.delayCount == 40) enemyFunction.E3Fx_setRandomSpeed.call(this, 0, 2, 0.5, 3, 0.1, true)
  if(enemyFunction.delayConditionCheck.call(this, 80, 90, 10, true)){
    fieldSystem.insertEbullet(ebulletId.cubeLaser, this.x, this.y, 'left')
    fieldSystem.insertEbullet(ebulletId.cubeLaser, this.x, this.y, 'right')
  }
}
enemyData[enemyId.E3A03_superElectnoricA].move = function(){
  enemyFunction.movePositionReset.call(this)
  if(this.delayCount >= 20){
    this.delayCount = 0
    fieldSystem.insertEbullet(ebulletId.electronicA, this.x, this.y, 'left')
    fieldSystem.insertEbullet(ebulletId.electronicA, this.x, this.y, 'right')
  }
}
enemyData[enemyId.E3A04_superElectnoricB].move = function(){
  enemyFunction.movePositionReset.call(this)
  if(this.delayCount >= 20){
    this.delayCount = 0
    for(var i = 1; i <= 9; i+=2) fieldSystem.insertEbullet(ebulletId.electronicB, this.x, this.y, i + '')
    fieldSystem.insertEbullet(ebulletId.potionBlue, this.x, this.y, 'left')
    fieldSystem.insertEbullet(ebulletId.potionBlue, this.x, this.y, 'right')
  }
}
enemyData[enemyId.E3C00_superComputer].move = function(){
  switch(this.mainType){
    case 'phase2': enemyData[enemyId.E321_bossComputer2].move.call(this); break
    case 'phase6': enemyData[enemyId.E323_bossComputer4].move.call(this); break
    case 'phase8': enemyData[enemyId.E324_bossComputer5].move.call(this); break
    case '': this.mainType = 'phase1'; break
    default: enemyData[enemyId.E320_bossComputer1].move.call(this); break
  }

  switch(this.mainType){
    case 'phase1': this.spriteId = spriteId.enemyComputerDie; break
    case 'phase2': this.spriteId = spriteId.enemyComputerBooting; break
    case 'phase3': this.spriteId = spriteId.enemyComputerMyComputer; break
    case 'phase4': this.spriteId = spriteId.enemyComputerEnternet; break
    case 'phase5': this.spriteId = spriteId.enemyComputerSmlie; break
    case 'phase6': this.spriteId = spriteId.enemyComputerBlueScreen; break
    case 'phase7': this.spriteId = spriteId.enemyComputerRedScreen; break
    case 'phase8': this.spriteId = spriteId.enemyComputerDie; break
  }

  if(this.tempInitCheck()){
    this.tempNumber = this.hpMax
  }

  switch(this.mainType){
    case 'phase3':
      if(this.hp >= 50000 && this.delayCount % 24 == 0 && fieldSystem.getUsingCount(fieldSystem.enemy) < 4){
        switch(mySystem.randomInt(0, 4)){
          case 0: fieldSystem.insertEnemy(enemyId.E810_robotA); break
          case 1: fieldSystem.insertEnemy(enemyId.E811_robotB); break
          case 2: fieldSystem.insertEnemy(enemyId.E3A01_robotOrange); break
          case 3: fieldSystem.insertEnemy(enemyId.E3A02_robotCyan); break
        }
      }
      break
    case 'phase4':
      if(this.hp >= 50000 && this.delayCount % 24 == 0 && fieldSystem.getUsingCount(fieldSystem.enemy) < 4){
        switch(mySystem.randomInt(0, 4)){
          case 0: fieldSystem.insertEnemy(enemyId.E812_electronicA); break
          case 1: fieldSystem.insertEnemy(enemyId.E813_electronicB); break
          case 2: fieldSystem.insertEnemy(enemyId.E3A03_superElectnoricA); break
          case 3: fieldSystem.insertEnemy(enemyId.E3A04_superElectnoricB); break
        }
      }
      break
    case 'phase5':
      if(this.hp >= 50000 && this.delayCount % 32 == 0 && fieldSystem.getUsingCount(fieldSystem.enemy) < 4){
        fieldSystem.insertEnemy(enemyId.E820_robotWhite)
      }
      break
    case 'phase7':
      if(this.delayCount % 60 == 0) fieldSystem.insertEbullet(ebulletId.potionPotion, this.x, this.y, 'grey')
      if(this.delayCount % 20 == 0){
        fieldSystem.insertEbullet(ebulletId.potionGrey, fieldSize.FIELD_X, 0, 'chase')
        fieldSystem.insertEbullet(ebulletId.potionGrey, fieldSize.FIELD_X, fieldSize.FIELD_Y, 'chase')
      }
      break
  }

  if(this.mainType == 'phase3' || this.mainType == 'phase4' || this.mainType == 'phase5'){
    if(this.hp < this.tempNumber && fieldSystem.getUsingCount(fieldSystem.enemy) >= 2){
      for(var i = 0; i < fieldSystem.enemy.length; i++){
        if(this.index != i && fieldSystem.enemy[i].isUsing){
          var damage = this.tempNumber - this.hp
          fieldSystem.enemy[i].hp -= Math.floor(damage / 2)
          this.tempNumber -= damage
          this.hp = this.tempNumber
        }
      }
    }
  }

}
enemyData[enemyId.E342_metalColor].move = function(){
  if(this.tempInitCheck()){
    var color = Math.floor(mySystem.random(0, 3))
    if(color == 0) this.spriteId = spriteId.enemyMetalRed
    else if(color == 1) this.spriteId = spriteId.enemyMetalBlue
    else if(color == 2) this.spriteId = spriteId.enemyMetalGreen
    enemyFunction.E3Fx_setRandomSpeed.call(this, 2, 0, 3, 2, 0, true)
    if(this.speedX < 0) this.x = -60
    else this.x = 300
  }
  enemyFunction.movePositionReset.call(this)
}
enemyData[enemyId.E400_magician].move = function(){
  var INDEX_SPEED_CHECK_COUNT = 0
  if(this.tempInitCheck()){
    var chnum = mySystem.randomInt(0, 3, true)
    var setClass = mySystem.randomInt(0, 3, true)
    this.spriteId = spriteId.enemyCharacter1 + chnum
    switch(setClass){
      case 0: this.mainType = 'fire'; break
      case 1: this.mainType = 'ice'; break
      case 2: this.mainType = 'shuriken'; break
      case 3: this.mainType = 'leap'; break
    }
  }

  enemyFunction.moveNotExit.call(this)
  this.tempArray[INDEX_SPEED_CHECK_COUNT]++
  switch(this.mainType){
    case 'shuriken':
      if(this.y - (this.h * 8 * this.scale) < fieldSize.FIELD_Y - 1){
        this.y = fieldSize.FIELD_Y - (this.h * 8 * this.scale) - 1
      }
      if(this.tempArray[INDEX_SPEED_CHECK_COUNT] >= 30){
        this.tempArray[INDEX_SPEED_CHECK_COUNT] = 0
        enemyFunction.E3Fx_setRandomSpeed.call(this, -2, 0, 2, 0, 0.4, false)
      }
      break
    case 'ice':
    case 'fire':
      if(this.tempArray[INDEX_SPEED_CHECK_COUNT] >= 120){
        this.tempArray[INDEX_SPEED_CHECK_COUNT] = 0
        enemyFunction.E3Fx_setRandomSpeed.call(this, -1, -1, 1, 1, 0.1, false)
      }
      break
  }

  switch(this.mainType){
    case 'fire':
      if(enemyFunction.delayConditionCheck.call(this, 80, 88, 8, true)){
        fieldSystem.insertEbullet(ebulletId.magicFire, this.x, this.y)
      }
      break
    case 'ice':
      if(enemyFunction.delayConditionCheck.call(this, 90, 110, 5, true)){
        fieldSystem.insertEbullet(ebulletId.magicIce, this.x, this.y)
      }
      break
    case 'shuriken':
      if(enemyFunction.delayConditionCheck.call(this, 80, 100, 10, true)){
        fieldSystem.insertEbullet(ebulletId.magicShuriken, this.x, this.y)
      }
      break
    case 'leap':
      if(enemyFunction.delayConditionCheck.call(this, 60, 120, 20, true)){
        fieldSystem.insertEbullet(ebulletId.magicLeap, this.x, this.y - 12 - ((this.delayCount - 100) / 10 * 8))
      }
      break
  }
}
enemyData[enemyId.E401_summoner].move = function(){
  var INDEX_SUMMON_COUNT = 1
  var SUMMON_MAX = 3

  if(this.tempArray[INDEX_SUMMON_COUNT] >= SUMMON_MAX) enemyFunction.moveBall.call(this, 40, 4)
  else enemyFunction.moveNotExit.call(this)

  if(this.x + (this.w * 8 * this.scale) > fieldSize.FIELD_X) this.x--
  if(this.tempArray[INDEX_SUMMON_COUNT] < SUMMON_MAX && this.delayCount % 40 == 0){
    var summonNum = mySystem.randomInt(0, 5, true)
    switch(summonNum){
      case 0: fieldSystem.insertEnemy(enemyId.E420_summonStone, this.x, this.y - 8); break
      case 1: fieldSystem.insertEnemy(enemyId.E421_summonGem, this.x, this.y - 8); break
      case 2: fieldSystem.insertEnemy(enemyId.E422_summonTree, this.x, this.y - 8); break
      case 3: fieldSystem.insertEnemy(enemyId.E423_summonMetal, this.x, this.y - 8); break
      case 4: fieldSystem.insertEnemy(enemyId.E424_summonIce, this.x, this.y - 8); break
      case 5: fieldSystem.insertEnemy(enemyId.E425_summonTouch, this.x, this.y - 8); break
    }
    this.tempArray[INDEX_SUMMON_COUNT]++
  } else if(this.tempArray[INDEX_SUMMON_COUNT] >= SUMMON_MAX && this.delayCount % 60 == 0){
    var targetEnemyIndex = fieldSystem.getRandomIndex(fieldSystem.enemy)
    var healPoint = 400
    if(this.idValue == enemyId.E401_summoner) healPoint += 200
    if(targetEnemyIndex == -1){
      this.hp += healPoint
      fieldSystem.insertEbullet(ebulletId.heal, this.x, this.y)
    } else {
      var enemy = fieldSystem.enemy[targetEnemyIndex]
      enemy.hp += healPoint
      fieldSystem.insertEbullet(ebulletId.heal, enemy.x, enemy.y)
    }
  }
  this.speedX = 0
}
enemyData[enemyId.E402_master].move = function(){
  enemyFunction.moveNotExit.call(this)
  if(this.delayCount % 60 == 0){
    enemyFunction.E3Fx_setRandomSpeed.call(this, -2, -2, 2, 2, 0, false)
  }
  if(this.tempInitCheck()){
    var magicNum = mySystem.randomInt(0, 3, true)
    switch(magicNum){
      case 0: this.mainType = 'fire'; this.spriteId = spriteId.enemyBigMaster1; break
      case 1: this.mainType = 'ice'; this.spriteId = spriteId.enemyBigMaster2; break
      case 2: this.mainType = 'shuriken'; this.spriteId = spriteId.enemyBigMaster3; break
      case 3: this.mainType = 'leap'; this.spriteId = spriteId.enemyBigMaster4; break
    }
  }
  if(this.delayCount >= 120){
    this.delayCount = 0
    var randomX
    var randomY
    var centerX = this.x + (this.w * 8 * this.scale / 2)
    var centerY = this.y + (this.h * 8 * this.scale / 2)
    switch(this.mainType){
      case 'fire':
        randomX = mySystem.randomInt(-8, 9)
        randomY = mySystem.randomInt(-8, 9)
        fieldSystem.insertEbullet(ebulletId.magicFire, this.x + randomX, centerY + randomY, 'master')
        fieldSystem.insertEbullet(ebulletId.magicFire, this.x + randomX + (this.w * 8 * this.scale), centerY + randomY, 'master')
        fieldSystem.insertEbullet(ebulletId.magicFire, centerX + randomX, this.y + randomY, 'master')
        fieldSystem.insertEbullet(ebulletId.magicFire, centerX + randomX, this.y + randomY + (this.h * 8 * this.scale), 'master')
        break
      case 'ice':
        for(var i = 0; i < 10; i++){
          randomX = mySystem.randomInt(0, fieldSize.FIELD_X, true)
          fieldSystem.insertEbullet(ebulletId.magicIce, randomX, -8 - (4 * i), 'master')
        }
        break
      case 'shuriken':
        for(i = 1; i <= 8; i++){
          fieldSystem.insertEbullet(ebulletId.magicShuriken, centerX, centerY, ''+i)
        }
        fieldSystem.insertEbullet(ebulletId.magicShuriken, centerX + 0, centerY + 0, 'master')
        fieldSystem.insertEbullet(ebulletId.magicShuriken, centerX + 8, centerY + 8, 'master')
        break
      case 'leap':
        for(i = 0; i < 4; i++){
          randomY = mySystem.randomInt(centerY-32, centerY+16, true)
          fieldSystem.insertEbullet(ebulletId.magicLeap, 240, randomY + (i * 10), 'master')
        }
        break
    }
  }
}
enemyData[enemyId.E403_tree].move = function(){
  enemyFunction.moveNotExit.call(this)
  var INDEX_SUMMON_COUNT = 1
  var SUMMON_MAX = 3
  if(this.tempArray[INDEX_SUMMON_COUNT] < SUMMON_MAX && enemyFunction.delayConditionCheck.call(this, 30, 90, 30, false)){
    this.tempArray[INDEX_SUMMON_COUNT]++
    fieldSystem.insertEnemy(enemyId.E404_apple, this.x, this.y)
  }
  if(this.hp <= 0){
    for(var i = 0; i < 5; i++) fieldSystem.insertEnemy(enemyId.E405_leap, this.x, this.y)
  }
}
enemyData[enemyId.E404_apple].move = function(){
  var INDEX_HEIGHT = 0
  var INDEX_SPEEDY = 1
  var INDEX_SPEEDX = 2
  if(this.tempInitCheck()) this.tempArray[INDEX_SPEEDX] = mySystem.random(-2, -1)
  if(this.delayCount >= 60){
    this.delayCount = 0
    this.tempArray[INDEX_HEIGHT] = mySystem.randomInt(fieldSize.FIELD_Y - 30, fieldSize.FIELD_Y - 10)
    this.tempArray[INDEX_SPEEDY] = mySystem.random(1, 4)
    
    if(this.tempArray[INDEX_SPEEDX] > 0.2) this.tempArray[INDEX_SPEEDX] -= 0.1
    else if(this.tempArray[INDEX_SPEEDX] < -0.2) this.tempArray[INDEX_SPEEDX] += 0.1
    else this.tempArray[INDEX_SPEEDX] = 0
    this.speedX = this.tempArray[INDEX_SPEEDX]
  }
  enemyFunction.moveBall.call(this, this.tempArray[INDEX_HEIGHT], this.tempArray[INDEX_SPEEDY])
}
enemyData[enemyId.E405_leap].move = function(){
  if(this.tempInitCheck()){
    this.status = 'hited'
    this.speedX = -0.5
  }

  enemyFunction.move.call(this)
  if(this.status == 'hited') enemyFunction.E2Fx_hited.call(this, -1, -1, 1, 1, 180)
  if(this.status == 'hitedmove') enemyFunction.E2Fx_hitedmove.call(this)
}
enemyData[enemyId.E406_brickOrange].move = function(){
  enemyFunction.moveBall.call(this, fieldSize.FIELD_Y - (this.h * 8 * this.scale) + 8, 2)
}
enemyData[enemyId.E407_brickDark].move = enemyFunction.moveNotExit
enemyData[enemyId.E408_sculpture].move = function(){
  enemyFunction.movePositionReset.call(this)
  if(this.hp <= 0){
    var createId = enemyId.E409_sculpturePiece
    if(mySystem.randomBoolean()){
      fieldSystem.insertEnemy(createId, this.x, this.y, '0')
      fieldSystem.insertEnemy(createId, this.x + (this.w * 8 * this.scale / 2), this.y, '2')
      fieldSystem.insertEnemy(createId, this.x, this.y + (this.h * 8 * this.scale / 2), '5')
      fieldSystem.insertEnemy(createId, this.x + (this.w * 8 * this.scale / 2), this.y + (this.h * 8 * this.scale / 2), '7')
    } else {
      fieldSystem.insertEnemy(createId, this.x, this.y, '1')
      fieldSystem.insertEnemy(createId, this.x + (this.w * 8 * this.scale / 2), this.y, '3')
      fieldSystem.insertEnemy(createId, this.x, this.y + (this.h * 8 * this.scale / 2), '4')
      fieldSystem.insertEnemy(createId, this.x + (this.w * 8 * this.scale / 2), this.y + (this.h * 8 * this.scale / 2), '8')
    }
  }
}
enemyData[enemyId.E409_sculpturePiece].move = function(){
  if(this.tempInitCheck()){
    var sx = 0.3
    var sy = 0.3
    if(!this.mainType) this.mainType = mySystem.randomBoolean() ? '3' : '5'
    switch(this.mainType){
      case '0': this.speedX = -sx; this.speedY = -sy; this.spriteId = spriteId.enemySculpture1; break
      case '1': this.speedX = 0; this.speedY = sy; this.spriteId = spriteId.enemySculpture1; break
      case '2': this.speedX = sx; this.speedY = -sy; this.spriteId = spriteId.enemySculpture2; break
      case '3': this.speedX = -sx; this.speedY = 0; this.spriteId = spriteId.enemySculpture2; break
      case '4': this.speedX = sx; this.speedY = 0; this.spriteId = spriteId.enemySculpture3; break
      case '5': this.speedX = -sx; this.speedY = sy; this.spriteId = spriteId.enemySculpture3; break
      case '6': this.speedX = 0; this.speedY = sy; this.spriteId = spriteId.enemySculpture4; break
      case '7': this.speedX = sx; this.speedY = sy; this.spriteId = spriteId.enemySculpture4; break
    }
  }
  enemyFunction.moveNotExit.call(this)
}
enemyData[enemyId.E410_rocket].move = enemyFunction.movePositionReset
enemyData[enemyId.E411_bossCrazyGuy].move = function(){
  var INDEX_POSITION_X = 0
  var INDEX_HEIGHT = 1
  var INDEX_SPEEDY = 2
  var INDEX_JUMP_FRAME = 3
  var INDEX_DELAY_COUNT = 9
  var INDEX_DIRECTION = 8
  enemyFunction.moveNotExit.call(this)

  switch(this.status){
    case '':
      this.status = 'run'
      this.tempArray[INDEX_JUMP_FRAME] = mySystem.randomInt(110, 233)
      break
    case 'run':
      this.spriteId = spriteId.enemyCrazyGuy
      if(this.y < fieldSize.FIELD_Y - (this.h * 8 * this.scale) - 1){
        this.speedY = 1
      } else {
        this.speedY = 0
        if(this.delayCount % 20 == 0){
          enemyFunction.E3Fx_setRandomSpeed.call(this, -8, 0, 8, 0, 2)
        }
      }
      if(this.delayCount >= this.tempArray[INDEX_JUMP_FRAME]){
        this.delayCount = 0
        this.status = 'move'
        this.tempArray[INDEX_POSITION_X] = mySystem.randomInt(0, fieldSize.FIELD_X)
        this.tempArray[INDEX_JUMP_FRAME] = mySystem.randomInt(29, 67)
      }
      break
    case 'move':
      if(this.x < this.tempArray[INDEX_POSITION_X] - 2) this.speedX = 1
      else if(this.x > this.tempArray[INDEX_POSITION_X] + 2) this.speedX = -1

      if(this.delayCount >= this.tempArray[INDEX_JUMP_FRAME]){
        this.delayCount = 0
        this.status = 'jump'
        this.tempArray[INDEX_POSITION_X] = mySystem.randomInt(0, fieldSize.FIELD_X)
        this.tempArray[INDEX_SPEEDY] = mySystem.random(1, 2)
        this.tempArray[INDEX_HEIGHT] = mySystem.random(90, 200)
        this.speedX = (this.x - this.tempArray[INDEX_POSITION_X]) / this.tempArray[INDEX_HEIGHT]
        this.tempArray[INDEX_JUMP_FRAME] = this.tempArray[INDEX_HEIGHT]
        this.speedY = this.tempArray[INDEX_SPEEDY]
      }
      break
    case 'jump':
      this.speedY -= 0.02
      this.spriteId = spriteId.enemyCrazyGuyEnimation
      this.flip = Math.floor(this.delayCount / 4) % 2
      if(this.delayCount > this.tempArray[INDEX_JUMP_FRAME]){
        this.status = 'run'
        this.delayCount = 0
        this.tempArray[INDEX_JUMP_FRAME] = mySystem.randomInt(198, 271)
        this.tempArray[INDEX_DELAY_COUNT] = 0
        this.tempArray[INDEX_DIRECTION] = 0
      }
      break
  }
}
enemyData[enemyId.E412_bossCrazyGuyTotal].move = function(){
  enemyData[enemyId.E411_bossCrazyGuy].move.call(this)
  if(this.mainType == ''){
    this.mainType = 'sabaha'
    for(var i = 0; i < 9; i++) fieldSystem.insertEnemy(enemyId.E411_bossCrazyGuy)
  }
  this.hp -= enemyFunction.getAvgLostHp(enemyId.E411_bossCrazyGuy)

  if(this.mainType == 'sabaha' && this.hp <= 0){
    for(i = 0; i < fieldSystem.enemy.length; i++){
      if(fieldSystem.enemy[i].idValue == enemyId.E411_bossCrazyGuy) fieldSystem.enemy[i].init()
    }
  }
}
enemyData[enemyId.E413_bossBarracks].move = function(){
  enemyFunction.moveInside.call(this)
  this.x = fieldSize.FIELD_X - (this.w * 8 * this.scale)
  this.y = 0

  if(this.hp >= 50000 && enemyFunction.delayConditionCheck.call(this, 60, 9999, 60, false)
    && fieldSystem.getUsingCount(fieldSystem.enemy) <= 20){
    var summonNumber = 0
    if(this.delayCount <= 480) summonNumber = mySystem.randomInt(0, 1, true)
    else if(this.delayCount >= 480) summonNumber = mySystem.randomInt(0, 8, true)
    var selectId = 0
    switch(summonNumber){
      case 0: selectId = enemyId.E400_magician; break
      case 1: selectId = enemyId.E401_summoner; break
      case 2: selectId = enemyId.E330_machineBall; break
      case 3: selectId = enemyId.E303_robotWhite; break
      case 4: selectId = enemyId.E223_bus; break
      case 5: selectId = enemyId.E107_sungglasses; break
      case 6: selectId = enemyId.E408_sculpture; break
      case 7: selectId = enemyId.E407_brickDark; break
      case 8: selectId = enemyId.E403_tree; break
    }
    fieldSystem.insertEnemy(selectId)
    this.hp -= enemyData[selectId].hp
  }

  if(this.status == '' && this.hp <= 0){
    this.status = 'die'
    this.hp = 1
  } else if(this.status == 'die'){
    this.hp = 1
    for(var i = 0; i < fieldSystem.enemy.length; i++){
      if(!fieldSystem.enemy[i].isUsing) continue
      fieldSystem.enemy[i].x += 4
      if(fieldSystem.enemy[i].x >= 260) fieldSystem.enemy[i].init()
    }
    this.scale = 1
    this.spriteId = 0
    this.attack = 0

    if(fieldSystem.getUsingCount(fieldSystem.enemy) <= 1) this.hp = 0
  }
}
enemyData[enemyId.E414_streetLight].move = enemyData[enemyId.E120_streetLight].move
enemyData[enemyId.E415_crazyGuy].move = enemyData[enemyId.E411_bossCrazyGuy].move
enemyData[enemyId.E420_summonStone].move = function(){
  if(this.delayCount >= 60 && this.tempInitCheck()){
    enemyFunction.E3Fx_setRandomSpeed.call(this, 1, 1, 2, 2, 0, true)
  }
  enemyFunction.moveNotExit.call(this)
}
enemyData[enemyId.E421_summonGem].move = enemyData[enemyId.E420_summonStone].move
enemyData[enemyId.E422_summonTree].move = function(){
  if(this.delayCount >= 60 && this.tempInitCheck()){
    this.status = 'up'
    this.speedY = -2
    this.speedX = 0
    var maxY = fieldSize.FIELD_X - (this.h * 8 * this.scale) - 1
    this.tempNumber = mySystem.randomInt(0, maxY)
  }
  if(this.status == 'up' && this.y <= this.tempNumber){
    this.status = 'x'
    this.speedY = 0
    this.speedX = -1
  }
  enemyFunction.movePositionReset.call(this)
}
enemyData[enemyId.E423_summonMetal].move = enemyData[enemyId.E420_summonStone].move
enemyData[enemyId.E424_summonIce].move = function(){
  if(this.delayCount >= 60 && this.tempInitCheck()){
    this.delayCount = 0
    this.speedX = (playerSystem.x - this.x) / 30
    this.speedY = (playerSystem.y - this.y) / 30
  }
  enemyFunction.moveNotExit.call(this)
  if(this.speedX > 1) this.speedX -= 0.1
  else if(this.speedX < -1) this.speedX += 0.1
  if(this.speedY >= 1) this.speedY -= 0.1
  else if(this.speedY < -1) this.speedY += 0.1
}
enemyData[enemyId.E425_summonTouch].move = enemyData[enemyId.E201_torch].move
enemyData[enemyId.E430_bossMagicianFire].move = function(){
  var centerX = this.x + (this.w * 8 * this.scale / 2)
  var centerY = this.y + (this.h * 8 * this.scale / 2)
  var magicTimeA = this.status == 'party' ? 300 : 90
  var magicTimeB = this.status == 'party' ? 240 : 60
  var speedCheckTime = 120
  if(this.delayCount % speedCheckTime == 0){
    enemyFunction.E3Fx_setRandomSpeed.call(this, -1, -1, 1, 1, 0.2, false)
  }
  enemyFunction.moveNotExit.call(this)

  if(this.delayCount % magicTimeA == 0){
    fieldSystem.insertEbullet(ebulletId.magicFire, centerX - 16, centerY - 16, 'master')
    fieldSystem.insertEbullet(ebulletId.magicFire, centerX, centerY - 16, 'master')
    fieldSystem.insertEbullet(ebulletId.magicFire, centerX + 16, centerY - 16, 'master')
    fieldSystem.insertEbullet(ebulletId.magicFire, centerX - 16, centerY, 'master')
    fieldSystem.insertEbullet(ebulletId.magicFire, centerX, centerY, 'master')
    fieldSystem.insertEbullet(ebulletId.magicFire, centerX + 16, centerY, 'master')
    fieldSystem.insertEbullet(ebulletId.magicFire, centerX - 16, centerY + 16, 'master')
    fieldSystem.insertEbullet(ebulletId.magicFire, centerX, centerY + 16, 'master')
    fieldSystem.insertEbullet(ebulletId.magicFire, centerX + 16, centerY + 16, 'master')
  }
  if(this.delayCount % magicTimeB == 0){
    fieldSystem.insertEbullet(ebulletId.magicFire, centerX - 24, centerY)
    fieldSystem.insertEbullet(ebulletId.magicFire, centerX - 8, centerY)
    fieldSystem.insertEbullet(ebulletId.magicFire, centerX + 8, centerY)
    fieldSystem.insertEbullet(ebulletId.magicFire, centerX + 24, centerY)
  }
}
enemyData[enemyId.E431_bossMagicianIce].move = function(){
  var centerX = this.x + (this.w * 8 * this.scale / 2)
  var centerY = this.y + (this.h * 8 * this.scale / 2)
  var magicTimeA = this.status == 'party' ? 330 : 100
  var magicTimeB = this.status == 'party' ? 360 : 120
  var speedCheckTime = 240
  if(this.delayCount % speedCheckTime == 0){
    enemyFunction.E3Fx_setRandomSpeed.call(this, -0.5, -0.5, 0.5, 0.5, 0.1, false)
  }
  enemyFunction.moveNotExit.call(this)
  if(this.delayCount % magicTimeA == 0){
    for(var i = 0; i < 8; i++){
      fieldSystem.insertEbullet(ebulletId.magicIce, this.x, this.y + i*4)
      fieldSystem.insertEbullet(ebulletId.magicIce, this.x + (this.w * 8 * this.scale), this.y + i*4)
    }
  }
  if(this.delayCount % magicTimeB == 0){
    for(i = 0; i < 6; i++){
      fieldSystem.insertEbullet(ebulletId.magicIce, centerX, centerY + i*2, 'master')
    }
  }
}
enemyData[enemyId.E432_bossMagicianShuriken].move = function(){
  var magicTimeA = this.status == 'party' ? 330 : 110
  var magicTimeB = this.status == 'party' ? 270 : 90
  var speedCheckTime = 120
  if(this.delayCount % speedCheckTime == 0){
    enemyFunction.E3Fx_setRandomSpeed.call(this, -2, -2, 2, 2, 0.6, false)
  }
  enemyFunction.moveNotExit.call(this)
  if(this.delayCount % magicTimeA == 0){
    for(var i = 1; i <= 8; i++){
      fieldSystem.insertEbullet(ebulletId.magicShuriken, this.x, this.y, ''+i)
      fieldSystem.insertEbullet(ebulletId.magicShuriken, this.x + (this.w * 8 * this.scale), this.y + (this.h * 8 * this.scale), ''+i)
    }
  }
  if(this.delayCount % magicTimeB == 0){
    fieldSystem.insertEbullet(ebulletId.magicShuriken, 0, 0)
    fieldSystem.insertEbullet(ebulletId.magicShuriken, 0, fieldSize.FIELD_Y)
    fieldSystem.insertEbullet(ebulletId.magicShuriken, fieldSize.FIELD_X, 0)
    fieldSystem.insertEbullet(ebulletId.magicShuriken, fieldSize.FIELD_X, fieldSize.FIELD_Y)
  }
}
enemyData[enemyId.E433_bossMagicianLeaf].move = function(){
  var centerX = this.x + (this.w * 8 * this.scale / 2)
  var centerY = this.y + (this.h * 8 * this.scale / 2)
  var magicTimeA = this.status == 'party' ? 390 : 130
  var magicTimeB = this.status == 'party' ? 270 : 100
  var speedCheckTime = 120
  if(this.delayCount % speedCheckTime == 0){
    enemyFunction.E3Fx_setRandomSpeed.call(this, -1, -1, 1, 1, 0.2, false)
  }
  enemyFunction.moveNotExit.call(this)
  if(this.delayCount % magicTimeA == 0){
    fieldSystem.insertEbullet(ebulletId.magicLeap, centerX, centerY - 16)
    fieldSystem.insertEbullet(ebulletId.magicLeap, centerX, centerY - 8)
    fieldSystem.insertEbullet(ebulletId.magicLeap, centerX, centerY - 0)
    fieldSystem.insertEbullet(ebulletId.magicLeap, centerX, centerY + 8)
    fieldSystem.insertEbullet(ebulletId.magicLeap, centerX, centerY + 16)
  }
  if(this.delayCount % magicTimeB == 0){
    for(var i = 0; i < 6; i++){
      var randomY = mySystem.random(0, fieldSize.FIELD_Y)
      fieldSystem.insertEbullet(ebulletId.magicLeap, 0, randomY)
      fieldSystem.insertEbullet(ebulletId.magicLeap, fieldSize.FIELD_X, randomY)
    }
  }
}
enemyData[enemyId.E434_bossMagicianHeal].move = function(){
  switch(this.status){
    case '':
      this.x = fieldSize.FIELD_X / 2
      this.y = 48
      this.status = 'normal'
      break
    case 'normal':
      this.speedX = 0
      enemyFunction.moveBall.call(this, 40, 3)
      if(this.delayCount >= 30){
        this.hp += 1000
        this.delayCount = 0
        fieldSystem.insertEbullet(ebulletId.heal, this.x, this.y)
      }
      if(this.hp < this.hpMax - 100000) this.status = 'run'
      break
    case 'party':
      this.x = fieldSize.FIELD_X / 2
      this.speedX = 0
      enemyFunction.moveBall.call(this, 40, 3)
      if(this.delayCount >= 300){
        this.delayCount = 0
        var healCount = 5
        var healPoint = 600
        for(var i = 0; i < fieldSystem.enemy.length; i++){
          if(!fieldSystem.enemy[i].isUsing) false
          var party = fieldSystem.enemy[i]
          switch(party.idValue){
            case enemyId.E430_bossMagicianFire:
            case enemyId.E431_bossMagicianIce:
            case enemyId.E432_bossMagicianShuriken:
            case enemyId.E433_bossMagicianLeaf:
            case enemyId.E434_bossMagicianHeal:
              healCount--
              party.hp += healPoint
              fieldSystem.insertEbullet(ebulletId.heal, party.x, party.y)
              break
          }
        }
        if(healCount >= 1) this.hp += healPoint * healCount
      }
      break
    case 'run':
      this.speedX = 4
      this.speedY = 0
      enemyFunction.move.call(this)
      break
  }
}
enemyData[enemyId.E435_bossMagicianPartyHeal].move = enemyData[enemyId.E434_bossMagicianHeal].move
enemyData[enemyId.E500_round5].move = function(){
  var centerX = (fieldSize.FIELD_X / 2) - (this.w * 8 * this.scale / 2)
  var centerY = (fieldSize.FIELD_Y / 2) + (this.h * 8 * this.scale / 2)
  this.y = centerY
  if(this.x < centerX) this.x++
  if(this.x > centerX) this.x--
  if(this.delayCount >= 600) this.init()
}
enemyData[enemyId.E501_bus].move = function(){
  this.speedX = 2
  enemyData[enemyId.E123_bus].move.call(this)
}
enemyData[enemyId.E502_ball].move = function(){
  enemyFunction.moveBall.call(this, 0, 1)
}
enemyData[enemyId.E503_robot].move = function(){
  this.rotate = 2
  enemyFunction.moveNotExit.call(this)
  if(this.status == '' && this.tempNumber < 3){
    this.status = 'hited'
    this.tempNumber++
    enemyFunction.E2Fx_hited.call(this, 0.4, 0.4, 0.8, 0.8, 180)
  } else {
    enemyFunction.E2Fx_hitedmove.call(this)
  }
}
enemyData[enemyId.E510_blackMonster].move = function(){
  enemyFunction.movePositionReset.call(this)
  if(this.x >= fieldSize.FIELD_X + 24){
    this.y = mySystem.random(0, fieldSize.FIELD_Y - (this. w * 8 * this.scale))
    this.speedX = mySystem.random(-1.4, -0.8)
  }
}
enemyData[enemyId.E511_whiteCloud].move =  function(){
  enemyFunction.movePositionReset.call(this)
  if(this.x >= fieldSize.FIELD_X + 24) this.y = mySystem.random(0, fieldSize.FIELD_Y - (this. w * 8 * this.scale))
}
enemyData[enemyId.E512_blackCloud].move = enemyData[enemyId.E511_whiteCloud].move
enemyData[enemyId.E600_potionRed].move = function(){
  enemyFunction.movePositionReset.call(this)
  if(this.hp <= 0){
    fieldSystem.insertEbullet(ebulletId.potionRed, this.x, this.y)
    fieldSystem.insertEbullet(ebulletId.potionRed, this.x + 16, this.y)
    fieldSystem.insertEbullet(ebulletId.potionRed, this.x, this.y + 16)
    fieldSystem.insertEbullet(ebulletId.potionRed, this.x + 16, this.y + 16)
  }
}
enemyData[enemyId.E601_potionBlue].move = function(){
  enemyFunction.movePositionReset.call(this)
  if(this.hp <= 0){
    fieldSystem.insertEbullet(ebulletId.potionBlue, this.x, this.y, 'left')
    fieldSystem.insertEbullet(ebulletId.potionBlue, this.x, this.y, 'right')
    fieldSystem.insertEbullet(ebulletId.potionBlue, this.x, this.y, 'up')
    fieldSystem.insertEbullet(ebulletId.potionBlue, this.x, this.y, 'down')
  }
}
enemyData[enemyId.E602_potionGreen].move = function(){
  enemyFunction.movePositionReset.call(this)
  if(this.hp <= 0) fieldSystem.insertEbullet(ebulletId.potionGreen, this.x, this.y)
}
enemyData[enemyId.E603_potionGrey].move = function(){
  enemyFunction.movePositionReset.call(this)
  if(this.hp <= 0){
    fieldSystem.insertEbullet(ebulletId.potionGrey, this.x, this.y, 'chase')
    fieldSystem.insertEbullet(ebulletId.potionGrey, this.x + 16, this.y + 16, 'chase')
    for(var i = 0; i < 4; i++) fieldSystem.insertEbullet(ebulletId.potionGrey, this.x, this.y)
  }
}
enemyData[enemyId.E604_potionRainbow].move = function(){
  enemyFunction.movePositionReset.call(this)
  if(this.hp <= 0){
    fieldSystem.insertEbullet(ebulletId.potionRainbow, this.x, this.y, 'leftup')
    fieldSystem.insertEbullet(ebulletId.potionRainbow, this.x, this.y, 'leftdown')
    fieldSystem.insertEbullet(ebulletId.potionRainbow, this.x, this.y, 'rightup')
    fieldSystem.insertEbullet(ebulletId.potionRainbow, this.x, this.y, 'rightdown')
  }
}
enemyData[enemyId.E605_bossPotion].move = function(){
  this.x = (fieldSize.FIELD_X / 2) + (this.w * 8 * this.scale / 2)
  this.y = (fieldSize.FIELD_Y / 2) - (this.h * 8 * this.scale / 2)
  if(this.delayCount >= 0){
    if(this.idValue == enemyId.E605_bossPotion) this.delayCount = -180
    else if(this.idValue == enemyId.E608_bossPotionMatryoshka) this.delayCount = -this.tempNumber
    else this.delayCount = -180

    fieldSystem.insertEbullet(ebulletId.potionPotion, this.x, this.y, 'red')
    fieldSystem.insertEbullet(ebulletId.potionPotion, this.x, this.y, 'blue')
    fieldSystem.insertEbullet(ebulletId.potionPotion, this.x, this.y, 'green')
    fieldSystem.insertEbullet(ebulletId.potionPotion, this.x, this.y, 'grey')
    fieldSystem.insertEbullet(ebulletId.potionPotion, this.x, this.y, 'rainbow')
  }
}
enemyData[enemyId.E606_redMonster].move = enemyData[enemyId.E113_bigRedMonster].move
enemyData[enemyId.E607_monsterBlue].move = enemyData[enemyId.E205_bigBlueMonster].move
enemyData[enemyId.E608_bossPotionMatryoshka].move = function(){
  if(this.tempInitCheck()){
    switch(this.mainType){
      case 'size5': this.scale = 5; this.tempNumber = 150; break
      case 'size4': this.scale = 4; this.tempNumber = 138; break
      case 'size3': this.scale = 3; this.tempNumber = 126; break
      case 'size2': this.scale = 2; this.tempNumber = 114; break
      case 'size1': this.scale = 1; this.tempNumber = 102; break
    }
  }
  enemyData[enemyId.E605_bossPotion].move.call(this)
}
enemyData[enemyId.E610_bubbleSmall].move = function(){
  if(this.tempInitCheck()){
    enemyFunction.E3Fx_setRandomSpeed.call(this, 0.5, 0, 1, 1, 0, true)
    var bubbleColor = ['yellow', 'purple', 'blue', 'green', 'red', 'lime']
    var bubbleColorNumber = mySystem.randomInt(0, 5, true)
    if(this.mainType == '') this.mainType = bubbleColor[bubbleColorNumber]
    
    switch(this.mainType){
      case 'yellow': this.spriteId = spriteId.enemyBubbleYellow; break
      case 'purple': this.spriteId = spriteId.enemyBubblePurple; break
      case 'blue': this.spriteId = spriteId.enemyBubbleBlue; break
      case 'green': this.spriteId = spriteId.enemyBubbleGreen; break
      case 'red': this.spriteId = spriteId.enemyBubbleRed; break
      case 'lime': this.spriteId = spriteId.enemyBubbleLime; break
    }
  }
  enemyFunction.movePositionReset.call(this)
}
enemyData[enemyId.E611_bubbleMiddle].move = enemyData[enemyId.E610_bubbleSmall].move
enemyData[enemyId.E616_bubbleBig].move = function(){
  this.mainType = 'big'
  enemyData[enemyId.E610_bubbleSmall].move.call(this)
}
enemyData[enemyId.E617_bubbleBoss].move = enemyData[enemyId.E616_bubbleBig].move
enemyData[enemyId.E620_oxygenTank].move = function(){
  enemyFunction.movePositionReset.call(this)
  if(enemyFunction.delayConditionCheck.call(this, 60, 80, 10, true)){
    fieldSystem.insertEbullet(ebulletId.oxygenBubble, this.x, this.y)
  }
}
enemyData[enemyId.E621_fish].move = function(){
  var INDEX_STOP_X = 0
  switch(this.status){
    case 'left':
      this.flip = 0
      this.speedX -= 0.1
      if(this.speedX < -1) this.speedX = -1
      if(this.x < this.tempArray[INDEX_STOP_X]){
        this.status = 'right'
        this.tempArray[INDEX_STOP_X] = mySystem.randomInt(this.x, fieldSize.FIELD_X)
      }
      break
    case 'right':
      this.flip = 1
      this.speedX += 0.1
      if(this.speedX > 1) this.speedX = 1
      if(this.x > this.tempArray[INDEX_STOP_X]){
        this.status = 'left'
        this.tempArray[INDEX_STOP_X] = mySystem.randomInt(0, this.x)
      }
      break
    default:
      this.status = 'left'
      this.tempArray[INDEX_STOP_X] = mySystem.randomInt(0, fieldSize.FIELD_X)
      break
  }
  enemyFunction.moveBullon.call(this, 16, 0.8)
}
enemyData[enemyId.E622_fishBlack].move = function(){
  var INDEX_STOP_X = 0
  var INDEX_STOP_Y = 1
  if(this.y < this.tempArray[INDEX_STOP_Y]) this.y += 0.5
  if(this.y > this.tempArray[INDEX_STOP_Y]) this.y -= 0.5
  enemyFunction.movePositionReset.call(this)

  switch(this.status){
    case 'left':
      this.flip = 0
      this.speedX -= 0.1
      if(this.speedX < -1) this.speedX = -1
      if(this.x < this.tempArray[INDEX_STOP_X]){
        this.status = 'right'
        this.tempArray[INDEX_STOP_X] = mySystem.randomInt(this.x, fieldSize.FIELD_X)
        this.tempArray[INDEX_STOP_Y] = mySystem.randomInt(0, fieldSize.FIELD_Y)
      }
      break
    case 'right':
      this.flip = 1
      this.speedX += 0.1
      if(this.speedX > 1) this.speedX = 1
      if(this.x > this.tempArray[INDEX_STOP_X]){
        this.status = 'left'
        this.tempArray[INDEX_STOP_X] = mySystem.randomInt(0, this.x)
      }
      break
    default:
      this.status = 'left'
      this.tempArray[INDEX_STOP_X] = mySystem.randomInt(0, fieldSize.FIELD_X)
      this.tempArray[INDEX_STOP_Y] = mySystem.randomInt(0, fieldSize.FIELD_Y)
      break
  }
}
enemyData[enemyId.E623_submarine].move = function(){
  if(this.delayCount >= 120){
    this.delayCount = 0
    enemyFunction.E3Fx_setRandomSpeed.call(this, 0.4, 0.8, 0.1, 0.2, 0, true)
    fieldSystem.insertEbullet(ebulletId.submarineRocket, this.x, this.y)
  }
  enemyFunction.moveNotExit.call(this)
}
enemyData[enemyId.E624_camera].move = function(){
  var INDEX_SELECT_X = 0
  var INDEX_SELECT_Y = 1
  enemyFunction.move.call(this)
  if(this.delayCount > 180){
    this.delayCount = 0
    this.tempArray[INDEX_SELECT_X] = mySystem.random(0, fieldSize.FIELD_X)
    this.tempArray[INDEX_SELECT_Y] = mySystem.random(0, fieldSize.FIELD_Y)
    this.speedX = (this.tempArray[INDEX_SELECT_X] - this.x) / 180
    this.speedY = (this.tempArray[INDEX_SELECT_Y] - this.y) / 180
  }

  if(this.x < this.tempArray[INDEX_SELECT_X] + 8 && this.x > this.tempArray[INDEX_SELECT_X] - 8) this.speedX = 0
  if(this.y < this.tempArray[INDEX_SELECT_Y] + 8 && this.y > this.tempArray[INDEX_SELECT_Y] - 8) this.speedY = 0
}
enemyData[enemyId.E625_bossFish].move = function(){
  if(this.x >= fieldSize.FIELD_X + 10){
    this.speedX = 0
    this.x = fieldSize.FIELD_X - 10
    this.delayCount = 0
    this.y = mySystem.random(0, fieldSize.FIELD_Y - (this.h * 8 * this.scale))
  }
  if(this.x + (this.w * this.scale * 8) < fieldSize.RESET_LEFT - 10) this.x = fieldSize.RESET_RIGHT
  this.x += this.speedX
  this.speedX = -(this.delayCount / 20)
}
enemyData[enemyId.E630_plasticTrash].move = function(){
  if(this.tempInitCheck()){
    enemyFunction.E3Fx_setRandomSpeed.call(this, 1, 1.6, 0.2, 0.8, 0, true)
    this.rotate = mySystem.randomInt(0, 3, true)
    if(!this.spriteId){
      switch(mySystem.randomInt(0, 6)){
        case 0: this.spriteId = spriteId.enemyStreetLight; break
        case 1: this.spriteId = spriteId.enemyDrinkWater; break
        case 2: this.spriteId = spriteId.enemyRobotWhite; break
        case 3: this.spriteId = spriteId.enemyMetalBlue; break
        case 4: this.spriteId = spriteId.enemyDrill; break
        case 5: this.spriteId = spriteId.enemyHammer; break
      }
    }
  }

  if(this.status == 'trashmode'){
    enemyFunction.move.call(this)
    if(this.x + (this.w * 8 * this.scale) <= 0) this.init()
  } else {
    enemyFunction.movePositionReset.call(this)
  }

  if(this.mainType == 'trash'){
    this.mainType = ''
    this.status = 'trashmode'
    this.hpMax = Math.floor(this.hpMax / 5)
    this.score = 200
    enemyFunction.E3Fx_setRandomSpeed.call(this, -1, -0.2, -2, 0.2, 0, false)
  }
}
enemyData[enemyId.E631_plasticTrashUpgrade].move = function(){
  if(!this.spriteId){
    switch(mySystem.randomInt(0, 4)){
      case 0: this.spriteId = spriteId.enemyTreasureChest; break
      case 1: this.spriteId = spriteId.enemyBigBox; break
      case 2: this.spriteId = spriteId.enemyEnergyCart; break
      case 3: this.spriteId = spriteId.enemyBigVendingMachine; break
    }
  }
  enemyData[enemyId.E630_plasticTrash].move.call(this)
}
enemyData[enemyId.E640_bossTrash].move = function(){
  var INDEX_TRASH_MAX_COUNT = 0
  if(this.tempInitCheck()){
    this.tempArray[INDEX_TRASH_MAX_COUNT] = 240
    this.tempNumber = this.tempArray[INDEX_TRASH_MAX_COUNT]
  }
  this.hp = this.hpMax
  displaySystem.meterText('TRASH: ', colorId.LIGHT_GREEN, this.tempNumber, this.tempArray[INDEX_TRASH_MAX_COUNT], 0, 0, 240, 8, colorId.DARK_GREEN, colorId.BLACK)
  if(this.tempNumber >= 1){
    enemyFunction.moveNotExit.call(this)
    enemyFunction.moveInside.call(this)
    if(this.delayCount % 60 == 0) enemyFunction.E3Fx_setRandomSpeed.call(this, 0, 0, 0, 0.2, 0, true)
    if(this.delayCount % 3 == 0 && fieldSystem.getUsingCount(fieldSystem.enemy) <= 20){
      this.tempNumber--
      if(mySystem.randomBoolean()) fieldSystem.insertEnemy(enemyId.E630_plasticTrash, undefined, undefined, 'trash')
      else fieldSystem.insertEnemy(enemyId.E631_plasticTrashUpgrade, undefined, undefined, 'trash')
    }
  } else if(this.tempNumber <= 0 && fieldSystem.getUsingCount(fieldSystem.enemy) <= 1){
    enemyFunction.move.call(this)
    this.speedX = 2
    if(this.x >= fieldSize.FIELD_X + (this.w * 8 * this.scale) + 60 ) this.init()
  }
}
enemyData[enemyId.E700_square].move = function(){
  if(this.idValue == enemyId.E700_square && this.hp <= 0){
    fieldSystem.insertEnemy(enemyId.E701_squarePiece, this.x, this.y)
    fieldSystem.insertEnemy(enemyId.E701_squarePiece, this.x, this.y)
  }
  if(this.tempInitCheck()){
    if(this.idValue == enemyId.E700_square) enemyFunction.E3Fx_setRandomSpeed.call(this, 0.6, 0.6, 1.2, 1.2, 0, true)
    else enemyFunction.E3Fx_setRandomSpeed.call(this, 1, 1, 3, 3, 0, true)
  }
  enemyFunction.movePositionReset.call(this)
}
enemyData[enemyId.E701_squarePiece].move = enemyData[enemyId.E700_square].move
enemyData[enemyId.E702_circle].move = function(){
  var INDEX_RANGE = 1
  var INDEX_RADIUS = 0
  if(this.idValue == enemyId.E702_circle && this.hp <= 0){
    fieldSystem.insertEnemy(enemyId.E703_circlePiece, this.x, this.y)
    fieldSystem.insertEnemy(enemyId.E703_circlePiece, this.x, this.y)
  }
  if(this.tempInitCheck()){
    this.tempArray[INDEX_RANGE] = 1
    this.status = 'hited'
    enemyFunction.E2Fx_hited.call(this, 4, 4, 12, 12, 30)
  }
  if(this.status == 'hited' || this.status == 'hitedmove'){
    enemyFunction.E2Fx_hitedmove.call(this)
    enemyFunction.moveNotExit.call(this)
  } else {
    if(this.delayCount % 6 == 0) this.tempArray[INDEX_RADIUS] += 1
    this.x = this.x + Math.cos(this.tempArray[INDEX_RADIUS]/Math.PI) * this.tempArray[INDEX_RANGE]
    this.y = this.y + Math.sin(this.tempArray[INDEX_RADIUS]/Math.PI) * this.tempArray[INDEX_RANGE]
    enemyFunction.move.call(this)
  }
}
enemyData[enemyId.E703_circlePiece].move = enemyData[enemyId.E702_circle].move
enemyData[enemyId.E704_triangle].move = function(){
  var INDEX_HEIGHT = 0
  if(this.idValue == enemyId.E704_triangle && this.hp <= 0){
    fieldSystem.insertEnemy(enemyId.E705_trianglePiece, this.x, this.y)
    fieldSystem.insertEnemy(enemyId.E705_trianglePiece, this.x, this.y)
  }
  if(this.tempInitCheck()){
    this.tempArray[INDEX_HEIGHT] = mySystem.randomInt(10, 80, true)
    if(this.idValue == enemyId.E704_triangle) enemyFunction.E3Fx_setRandomSpeed.call(this, -1, -1, 0, 1, 0, false)
    else enemyFunction.E3Fx_setRandomSpeed.call(this, -3, -1, 0, 1, 0, false)
  }

  if(this.delayCount >= this.tempArray[INDEX_HEIGHT]) this.delayCount = -this.tempArray[INDEX_HEIGHT]

  if(this.delayCount < 0) this.speedY = Math.abs(this.speedY)
  else if(this.delayCount > 0) this.speedY = -Math.abs(this.speedY)
  enemyFunction.movePositionReset.call(this)
}
enemyData[enemyId.E705_trianglePiece].move = enemyData[enemyId.E704_triangle].move
enemyData[enemyId.E706_pentagon].move = function(){
  var INDEX_SPEEDX = 0
  var INDEX_SPEEDY = 0
  var sx = this.tempArray[INDEX_SPEEDX]
  var sy = this.tempArray[INDEX_SPEEDY]
  if(this.tempInitCheck()){
    if(this.idValue == enemyId.E706_pentagon){
      this.tempArray[INDEX_SPEEDX] = 2
      this.tempArray[INDEX_SPEEDY] = 2
    } else {
      this.tempArray[INDEX_SPEEDX] = 4
      this.tempArray[INDEX_SPEEDY] = 4
    }
    sx = this.tempArray[INDEX_SPEEDX]
    sy = this.tempArray[INDEX_SPEEDY]
    this.speedX = mySystem.random(-sx, sx)
    this.speedY = mySystem.random(-sy, sy)
  }
  if(this.idValue == enemyId.E706_pentagon && this.hp <= 0){
    fieldSystem.insertEnemy(enemyId.E707_pentagonPiece, this.x, this.y)
    fieldSystem.insertEnemy(enemyId.E707_pentagonPiece, this.x, this.y)
  }

  if(this.x < 0){
    this.x = 0
    this.speedX = mySystem.random(0, sx)
    this.speedY = mySystem.random(-sy, sy)
  } else if(this.x > fieldSize.FIELD_X){
    this.x = fieldSize.FIELD_X
    this.speedX = mySystem.random(-sx, 0)
    this.speedY = mySystem.random(-sy, sy)
  }
  if(this.y < 0){
    this.y = 0
    this.speedX = mySystem.random(-sx, sx)
    this.speedY = mySystem.random(0, sy)
  } else if(this.y > fieldSize.FIELD_Y){
    this.y = fieldSize.FIELD_Y
    this.speedX = mySystem.random(-sx, sx)
    this.speedY = mySystem.random(-sy, 0)
  }

  this.x += this.speedX
  this.y += this.speedY
}
enemyData[enemyId.E707_pentagonPiece].move = enemyData[enemyId.E706_pentagon].move
enemyData[enemyId.E708_bossShape].move = function(){
  enemyFunction.moveInside.call(this)
  if(this.hp <= 0 && this.status != 'die'){
    this.status = 'die'
    this.tempNumber = 50
  }

  if(this.status == 'die'){
    this.hp = this.tempNumber
    this.attack = 0
    this.scale = 0
    if(this.tempNumber >= 1 && this.delayCount % 10 == 0){
      soundSystem.play(this.dieSoundId)
      this.tempNumber--
      fieldSystem.insertEnemy(enemyId.E709_bossShapePiece, this.x, this.y)
    }

    if(this.tempNumber <= 0) this.hp = 0
  }
}
enemyData[enemyId.E709_bossShapePiece].move = function(){
  if(!this.mainType){
    switch(mySystem.randomInt(0, 4)){
      case 0: this.mainType = 'square'; this.spriteId = spriteId.enemyPieceSquare; break
      case 1: this.mainType = 'circle'; this.spriteId = spriteId.enemyPieceCircle; break
      case 2: this.mainType = 'triangle'; this.spriteId = spriteId.enemyPieceTriangle; break
      case 3: this.mainType = 'pentagon'; this.spriteId = spriteId.enemyPiecePentagon; break
    }
  }

  switch(this.mainType){
    case 'square': enemyData[enemyId.E700_square].move.call(this); break
    case 'circle': enemyData[enemyId.E702_circle].move.call(this); break
    case 'triangle': enemyData[enemyId.E704_triangle].move.call(this); break
    case 'pentagon': enemyData[enemyId.E706_pentagon].move.call(this); break
  }
}
enemyData[enemyId.E710_smallCubeRed].move = function(){
  var INDEX_RUNCH_DELAY = 0
  enemyFunction.movePositionReset.call(this)
  if(this.status == ''){
    this.tempArray[INDEX_RUNCH_DELAY] = mySystem.randomInt(120, 180)
    this.speedX = -0.4
    this.x = fieldSize.FIELD_X + (this.tempArray[INDEX_RUNCH_DELAY] - 60) * 0.4
    this.status = 'normal'
    this.delayCount = 0
    this.speedY = 0
  } else if(this.status == 'normal'){
    if(this.delayCount >= this.tempArray[INDEX_RUNCH_DELAY]){
      this.status = 'fire'
      enemyFunction.moveChase.call(this, 60)
    }
  } else if(this.status == 'fire'){
    if(this.x <= -60 || this.x >= 300) this.status = ''
  }
}
enemyData[enemyId.E711_bigCubeRed].move = enemyData[enemyId.E710_smallCubeRed].move
enemyData[enemyId.E712_smallCubeBlue].move = function(){
  if(this.delayCount >= 60){
    this.delayCount = 0
    fieldSystem.insertEbullet(ebulletId.cubeLaser, this.x, this.y, 'left')
    fieldSystem.insertEbullet(ebulletId.cubeLaser, this.x, this.y, 'right')
  }
  enemyFunction.movePositionReset.call(this)
}
enemyData[enemyId.E713_bigCubeBlue].move = function(){
  if(this.delayCount >= 60){
    this.delayCount = 0
    fieldSystem.insertEbullet(ebulletId.cubeLaser, this.x, this.y, 'left')
    fieldSystem.insertEbullet(ebulletId.cubeLaser, this.x, this.y, 'right')
    fieldSystem.insertEbullet(ebulletId.cubeLaser, this.x, this.y + 12, 'left')
    fieldSystem.insertEbullet(ebulletId.cubeLaser, this.x, this.y + 12, 'right')
  }
  enemyFunction.movePositionReset.call(this)
}
enemyData[enemyId.E714_smallCubeGreen].move = function(){
  var INDEX_SELECT_X = 0
  var INDEX_SELECT_Y = 1
  enemyFunction.move.call(this)
  var centerX = this.tempArray[INDEX_SELECT_X] - (this.w * 8 * this.scale / 2)
  var centerY = this.tempArray[INDEX_SELECT_Y] - (this.h * 8 * this.scale / 2)

  switch(this.status){
    case '':
      this.status = 'speedset'
      break
    case 'speedset':
      this.delayCount = 0
      this.tempArray[INDEX_SELECT_X] = mySystem.random(0, fieldSize.FIELD_X)
      this.tempArray[INDEX_SELECT_Y] = mySystem.random(0, fieldSize.FIELD_Y - (this.h * 8 * this.scale) )
      this.speedX = (this.tempArray[INDEX_SELECT_X] - this.x) / 120
      this.speedY = (this.tempArray[INDEX_SELECT_Y] - this.y) / 120
      this.status = 'move'
      break
    case 'move':
      if(this.x < centerX + 2 && this.x > centerX - 2) this.speedX = 0
      if(this.y < centerY + 2 && this.y > centerY - 2) this.speedY = 0
      if(this.speedX == 0 && this.speedY == 0){
        this.status = 'sizechange'
        this.delayCount = 0
        if(this.idValue == enemyId.E715_bigCubeGreen) this.status = 'sizechange2'
      }
      break
    case 'sizechange':
      if(this.delayCount <= 40) this.delayCount = 40
      this.scale = Math.abs(Math.floor(this.delayCount / 10) % 8 - 4)
      if(this.scale <= 0) this.scale = 1
      this.x = centerX
      this.y = centerY
      if(this.delayCount >= 180){
        this.delayCount = 0
        this.status = 'speedset'
        this.scale = 1
      }
      break
    case 'sizechange2':
      if(this.delayCount <= 40) this.delayCount = 40
      this.scale = Math.abs(Math.floor(this.delayCount / 5) % 10 - 5)
      if(this.scale <= 1) this.scale = 2
      this.x = centerX
      this.y = centerY
      if(this.delayCount >= 180){
        this.delayCount = 0
        this.status = 'speedset'
        this.scale = 3
      }
      break
  }
}
enemyData[enemyId.E715_bigCubeGreen].move = enemyData[enemyId.E714_smallCubeGreen].move
enemyData[enemyId.E716_smallCubeGrey].move = function(){
  var hpPercent = mySystem.getPercent(this.hp, this.hpMax)
  if(hpPercent >= 40) this.scale = 1
  else if(hpPercent >= 30) this.scale = 2
  else if(hpPercent >= 20) this.scale = 3
  else if(hpPercent >= 10) this.scale = 4
  enemyFunction.movePositionReset.call(this)
}
enemyData[enemyId.E717_bigCubeGrey].move = function(){
  var hpPercent = mySystem.getPercent(this.hp, this.hpMax)
  if(hpPercent >= 40) this.scale = 3
  else if(hpPercent >= 30) this.scale = 4
  else if(hpPercent >= 20) this.scale = 5
  else if(hpPercent >= 10) this.scale = 6
  enemyFunction.movePositionReset.call(this)
}
enemyData[enemyId.E718_bossCubeColor].move = function(){
  switch(Math.floor(this.delayCount / 4) % 4){
    case 0: this.spriteId = spriteId.enemyCubeRed; break
    case 1: this.spriteId = spriteId.enemyCubeBlue; break
    case 2: this.spriteId = spriteId.enemyCubeGreen; break
    case 3: this.spriteId = spriteId.enemyCubeGrey; break
  }

  if(this.delayCount % 60 == 0){
    fieldSystem.insertEbullet(ebulletId.cubeRed, fieldSize.FIELD_X + 10, mySystem.random(0, fieldSize.FIELD_Y))
    fieldSystem.insertEbullet(ebulletId.cubeGrey, fieldSize.FIELD_X + 10, mySystem.random(0, fieldSize.FIELD_Y))
  }
  if(this.delayCount % 60 == 0){
    fieldSystem.insertEbullet(ebulletId.cubeLaser, this.x, playerSystem.y, 'left')
    fieldSystem.insertEbullet(ebulletId.cubeLaser, this.x, playerSystem.y, 'right')
    fieldSystem.insertEbullet(ebulletId.cubeLaser, this.x, playerSystem.y + 12, 'left')
    fieldSystem.insertEbullet(ebulletId.cubeLaser, this.x, playerSystem.y + 12, 'right')
  }
  enemyFunction.moveInside.call(this)
}
enemyData[enemyId.E720_cubeNormal].move = function(){
  if(this.mainType != 'ball' && this.tempInitCheck()){
    enemyFunction.E3Fx_setRandomSpeed.call(this, 0.6, 0, 1, 1, 0, true)
  }
  switch(this.mainType){
    case 'fire': enemyData[enemyId.E710_smallCubeRed].move.call(this); break
    case 'laser': enemyData[enemyId.E712_smallCubeBlue].move.call(this); break
    case 'ball': enemyData[enemyId.E111_bigBall].move.call(this); this.rotate = 0; break
    default: enemyFunction.movePositionReset.call(this)
  }
}
enemyData[enemyId.E721_cubeBig].move = function(){
  if(this.tempInitCheck()) enemyFunction.E3Fx_setRandomSpeed.call(this, 0.3, 0, 0.5, 0.5, 0, true)
  enemyFunction.movePositionReset.call(this)
}
enemyData[enemyId.E724_cubePiece].move = function(){
  enemyData[enemyId.E720_cubeNormal].move.call(this)
  if(this.hp <= 0){
    fieldSystem.insertEnemy(enemyId.E725_cubePieceSub, this.x - 8, this.y)
    fieldSystem.insertEnemy(enemyId.E725_cubePieceSub, this.x + 8, this.y)
  }
}
enemyData[enemyId.E725_cubePieceSub].move = enemyData[enemyId.E720_cubeNormal].move
enemyData[enemyId.E728_bossCubeBig].move = function(){
  if(this.delayCount % 20 == 0){
    fieldSystem.insertEbullet(ebulletId.magicShuriken, fieldSize.FIELD_X, 0, 'master')
    fieldSystem.insertEbullet(ebulletId.magicShuriken, fieldSize.FIELD_X, fieldSize.FIELD_Y, 'master')
  }
  enemyFunction.moveInside.call(this)
}
enemyData[enemyId.E730_penroseTriange].move = function(){
  if(this.tempInitCheck()){
    switch(this.mainType){
      case '': this.mainType = 'normal'; break
      case 'normal': enemyFunction.E3Fx_setRandomSpeed.call(this, 0, 0, 1, 1, 0, true); break
      case 'left': this.speedX = mySystem.random(-2, -0.5); break
      case 'right': this.speedX = mySystem.random(0.5, 2); break
      case 'random': break
      case 'updown':
        this.x = mySystem.random(0, fieldSize.FIELD_X)
        this.y = -20
        this.speedY = 1
        break
      case 'ball':
        this.speedX = mySystem.random(-2, 2)
        this.tempNumber = mySystem.random(60, fieldSize.FIELD_Y)
        break
      case 'way8':
        this.speedX = -2
        this.speedY = -2
        break
      case 'big':
        this.scale = 2
        enemyFunction.E3Fx_setRandomSpeed.call(this, 0, 0, 1, 1, 0, true)
        break
    }
  }

  switch(this.mainType){
    case 'normal': case 'left': case 'right': case 'updown': case 'big':
      enemyFunction.movePositionReset.call(this)
      break
    case 'ball':
      if(this.y + (this.scale * 8 * this.h) >= fieldSize.FIELD_Y) this.speedX = mySystem.random(-2, 2)
      enemyFunction.moveBall.call(this, this.tempNumber, 2)
      break
    case 'boost':
      enemyData[enemyId.E710_smallCubeRed].move.call(this)
      break
    case 'random':
      var INDEX_SELECT_X = 0
      var INDEX_SELECT_Y = 1
      enemyFunction.move.call(this)
      if(this.delayCount > 0){
        this.delayCount = -120
        this.tempArray[INDEX_SELECT_X] = mySystem.random(0, fieldSize.FIELD_X)
        this.tempArray[INDEX_SELECT_Y] = mySystem.random(0, fieldSize.FIELD_Y)
        this.speedX = (this.tempArray[INDEX_SELECT_X] - this.x) / 120
        this.speedY = (this.tempArray[INDEX_SELECT_Y] - this.y) / 120
      }
      if(this.x < this.tempArray[INDEX_SELECT_X] + 8 && this.x > this.tempArray[INDEX_SELECT_X] - 8) this.speedX = 0
      if(this.y < this.tempArray[INDEX_SELECT_Y] + 8 && this.y > this.tempArray[INDEX_SELECT_Y] - 8) this.speedY = 0
      break
    case 'way8':
      if(this.x <= 0){
        this.x = 1
        switch(mySystem.randomInt(0, 5)){
          case 0: this.speedX = 0; this.speedY = -2; break
          case 1: this.speedX = 2; this.speedY = -2; break
          case 2: this.speedX = 2; this.speedY = 0; break
          case 3: this.speedX = 2; this.speedY = 2; break
          case 4: this.speedX = 0; this.speedY = 2; break
        }
      } else if(this.x >= fieldSize.FIELD_X){
        this.x = fieldSize.FIELD_X - 1
        switch(mySystem.randomInt(0, 5)){
          case 0: this.speedX = 0; this.speedY = -2; break
          case 1: this.speedX = -2; this.speedY = -2; break
          case 2: this.speedX = -2; this.speedY = 0; break
          case 3: this.speedX = -2; this.speedY = 2; break
          case 4: this.speedX = 0; this.speedY = 2; break
        }
      }

      if(this.y <= 0){
        this.y = 1
        switch(mySystem.randomInt(0, 5)){
          case 0: this.speedX = -2; this.speedY = 2; break
          case 1: this.speedX =  0; this.speedY = 2; break
          case 2: this.speedX =  2; this.speedY = 2; break
          case 3: this.speedX = -2; this.speedY = 0; break
          case 4: this.speedX = 2; this.speedY = 0; break
        }
      } else if(this.y >= fieldSize.FIELD_Y){
        this.y = fieldSize.FIELD_Y - 1
        switch(mySystem.randomInt(0, 5)){
          case 0: this.speedX = -2; this.speedY = -2; break
          case 1: this.speedX =  0; this.speedY = -2; break
          case 2: this.speedX =  2; this.speedY = -2; break
          case 3: this.speedX = -2; this.speedY = 0; break
          case 4: this.speedX = 2; this.speedY = 0; break
        }
      }
      enemyFunction.move.call(this)
      break
  }

  if(this.hp <= 0){
    soundSystem.requestPush(soundId.score, 1, 1)
    this.hp = this.hpMax
    this.score = 100
  }
}
enemyData[enemyId.E800_bullonRed].move = enemyData[enemyId.E100_bullonRed].move
enemyData[enemyId.E801_bullonBlue].move = enemyData[enemyId.E101_bullonBlue].move
enemyData[enemyId.E802_streetLight].move = enemyData[enemyId.E120_streetLight].move
enemyData[enemyId.E803_utilityPole].move = enemyData[enemyId.E121_utilityPole].move
enemyData[enemyId.E804_stone].move = enemyFunction.moveNotExit
enemyData[enemyId.E805_brokenStone].move = function(){
  enemyData[enemyId.E804_stone].move.call(this)
  if(this.hp <= 0) fieldSystem.insertEnemy(enemyId.E804_stone, this.x, this.y)
}
enemyData[enemyId.E807_sapphire].move = enemyFunction.movePositionReset
enemyData[enemyId.E808_gold].move = enemyData[enemyId.E215_silver].move
enemyData[enemyId.E809_diamond].move = enemyFunction.movePositionReset
enemyData[enemyId.E810_robotA].move = function(){
  enemyFunction.moveNotExit.call(this)
  if(this.delayCount % 60 == 0) enemyFunction.E3Fx_setRandomSpeed.call(this, 1.4, 1.4, 2.4, 2.4, true, 0.6)
  if(enemyFunction.delayConditionCheck.call(this, 120, 150, 10, true)){
    fieldSystem.insertEbullet(ebulletId.robotMissile, this.x, this.y)
  }
}
enemyData[enemyId.E811_robotB].move = function(){
  enemyFunction.moveNotExit.call(this)
  if(this.delayCount == 50){
    if(mySystem.randomBoolean()) enemyFunction.E3Fx_setRandomSpeed.call(this, 2, 0, 3, 0, 0.5, true)
    else enemyFunction.E3Fx_setRandomSpeed.call(this, 0, 2, 0, 3, 0.5, true)
  }
  if(enemyFunction.delayConditionCheck.call(this, 110, 140, 5, true)){
    fieldSystem.insertEbullet(ebulletId.robotLaser, this.x, this.y)
  }
}
enemyData[enemyId.E812_electronicA].move = function(){
  this.delayCount += 2
  enemyData[enemyId.E308_electronicA].move.call(this)
}
enemyData[enemyId.E813_electronicB].move = function(){
  this.delayCount += 2
  enemyData[enemyId.E309_electronicB].move.call(this)
}
enemyData[enemyId.E814_tree].move = function(){
  enemyFunction.moveNotExit.call(this)
  var INDEX_SUMMON_COUNT = 1
  var SUMMON_MAX = 3
  if(this.tempArray[INDEX_SUMMON_COUNT] < SUMMON_MAX && enemyFunction.delayConditionCheck.call(this, 10, 120, 5, false)){
    this.tempArray[INDEX_SUMMON_COUNT]++
    fieldSystem.insertEnemy(enemyId.E815_apple, this.x, this.y)
  }
  if(this.hp <= 0){
    for(var i = 0; i < 3; i++) fieldSystem.insertEnemy(enemyId.E816_leap, this.x, this.y)
  }
}
enemyData[enemyId.E815_apple].move = enemyData[enemyId.E404_apple].move
enemyData[enemyId.E816_leap].move = enemyData[enemyId.E405_leap].move
enemyData[enemyId.E817_sculpture].move = function(){
  enemyFunction.movePositionReset.call(this)
  if(this.hp <= 0){
    for(var i = 0; i < 4; i++) fieldSystem.insertEnemy(enemyId.E818_sculptureSub, this.x, this.y)
  }
}
enemyData[enemyId.E818_sculptureSub].move = function(){
  enemyFunction.movePositionReset.call(this)
  if(this.tempInitCheck()){
    enemyFunction.E3Fx_setRandomSpeed.call(this, 1, 1, 2, 2, 0, true)
  }
}
enemyData[enemyId.E819_brickDark].move = enemyFunction.moveNotExit
enemyData[enemyId.E820_robotWhite].move = enemyData[enemyId.E303_robotWhite].move
enemyData[enemyId.E821_crazyGuy].move = enemyData[enemyId.E411_bossCrazyGuy].move
enemyData[enemyId.E830_monsterRed].move = enemyData[enemyId.E113_bigRedMonster].move
enemyData[enemyId.E831_monsterBlue].move = enemyData[enemyId.E205_bigBlueMonster].move
enemyData[enemyId.E832_master].move = enemyData[enemyId.E402_master].move
enemyData[enemyId.E833_magician].move = enemyData[enemyId.E400_magician].move
enemyData[enemyId.E834_rocketA].move = enemyFunction.movePositionReset
enemyData[enemyId.E835_rocketB].move = enemyFunction.movePositionReset
enemyData[enemyId.E836_car].move = enemyData[enemyId.E122_car].move
enemyData[enemyId.E837_bus].move = enemyData[enemyId.E123_bus].move
enemyData[enemyId.E840_potion].move = function(){
  switch(this.mainType){
    case 'red': 
      this.spriteId = spriteId.enemyPotionRed
      enemyData[enemyId.E600_potionRed].move.call(this)
      break
    case 'blue':
      this.spriteId = spriteId.enemyPotionBlue
      enemyData[enemyId.E601_potionBlue].move.call(this)
      break
    case 'green':
      this.spriteId = spriteId.enemyPotionGreen
      enemyData[enemyId.E602_potionGreen].move.call(this)
      break
    case 'grey':
      this.spriteId = spriteId.enemyPotionGrey
      enemyData[enemyId.E603_potionGrey].move.call(this)
      break
    case 'rainbow':
      this.spriteId = spriteId.enemyPotionBigRainbow
      this.w = 2
      this.h = 2
      this.scale = 1
      enemyData[enemyId.E604_potionRainbow].move.call(this)
      break
    default:
      switch(mySystem.randomInt(0, 5)){
        case 0: this.mainType = 'red'; break
        case 1: this.mainType = 'blue'; break
        case 2: this.mainType = 'green'; break
        case 3: this.mainType = 'grey'; break
        case 4: this.mainType = 'rainbow'; break
      }
  }
}
enemyData[enemyId.E841_bubble].move = function(){
  if(this.tempInitCheck()){
    switch(mySystem.randomInt(0, 6)){
      case 0: this.spriteId = spriteId.enemyBubbleBlue; break
      case 1: this.spriteId = spriteId.enemyBubbleGreen; break
      case 2: this.spriteId = spriteId.enemyBubbleYellow; break
      case 3: this.spriteId = spriteId.enemyBubblePurple; break
      case 4: this.spriteId = spriteId.enemyBubbleRed; break
      case 5: this.spriteId = spriteId.enemyBubbleLime; break
    }
    enemyFunction.E3Fx_setRandomSpeed.call(this, 0.1, 0.1, 2, 2, 0, true)
  }
  enemyFunction.movePositionReset.call(this)
}
enemyData[enemyId.E842_shape].move = function(){
  switch(this.mainType){
    case 'square': 
      this.spriteId = spriteId.enemyPieceSquare
      enemyData[enemyId.E701_squarePiece].move.call(this)
      break
    case 'triangle':
      this.spriteId = spriteId.enemyPieceTriangle
      enemyData[enemyId.E705_trianglePiece].move.call(this)
      break
    case 'pentagon':
      this.spriteId = spriteId.enemyPiecePentagon
      enemyData[enemyId.E707_pentagonPiece].move.call(this)
      break
    default:
      switch(mySystem.randomInt(0, 3)){
        case 0: this.mainType = 'square'; break
        case 1: this.mainType = 'triangle'; break
        case 2: this.mainType = 'pentagon'; break
      }
  }
}
enemyData[enemyId.E843_cube].move = function(){
  switch(this.mainType){
    case 'red': 
      this.spriteId = spriteId.enemyCubeRed
      enemyData[enemyId.E710_smallCubeRed].move.call(this)
      break
    case 'blue':
      this.spriteId = spriteId.enemyCubeBlue
      enemyData[enemyId.E712_smallCubeBlue].move.call(this)
      break
    case 'green':
      this.spriteId = spriteId.enemyCubeGreen
      enemyData[enemyId.E714_smallCubeGreen].move.call(this)
      break
    case 'grey':
      this.spriteId = spriteId.enemyCubeGrey
      enemyData[enemyId.E716_smallCubeGrey].move.call(this)
      if(this.scale <= 1) this.scale = 2
      break
    default:
      switch(mySystem.randomInt(0, 4)){
        case 0: this.mainType = 'red'; break
        case 1: this.mainType = 'blue'; break
        case 2: this.mainType = 'green'; break
        case 3: this.mainType = 'grey'; break
      }
  }
}
enemyData[enemyId.E844_ball].move = enemyData[enemyId.E330_machineBall].move
enemyData[enemyId.E845_speedCar].move = enemyData[enemyId.E331_machineCar].move
enemyData[enemyId.E850_bossBullon].move = enemyData[enemyId.E108_bossBullon].move
enemyData[enemyId.E851_bossTresureChest].move = enemyData[enemyId.E217_bossTreasureChest].move
enemyData[enemyId.E852_bossRobotWhite].move = enemyData[enemyId.E303_robotWhite].move
enemyData[enemyId.E853_bossCrazyGuy].move = enemyData[enemyId.E412_bossCrazyGuyTotal].move
enemyData[enemyId.E854_bossFish].move = enemyData[enemyId.E625_bossFish].move
enemyData[enemyId.E855_bossColorCube].move = enemyData[enemyId.E718_bossCubeColor].move
enemyData[enemyId.E860_bossBox].move = enemyData[enemyId.E206_bossBox].move
enemyData[enemyId.E861_bossCube].move = function(){
  var hpPhase = Math.floor(this.hpMax / 5)
  enemyFunction.displayMultyMeter.call(this, 5)

  switch(this.mainType){
    case 'phase1':
      if(this.y + (this.w * 8 * this.scale) >= fieldSize.FIELD_Y){
        var randomX = mySystem.randomInt(0, fieldSize.FIELD_X, true)
        this.speedX = (randomX - this.x) / 90
        if(this.speedX < 1 && this.speedX >= 0) this.speedX = 1
        if(this.speedX > -1 && this.speedX <= 0) this.speedX = -1
      }
      enemyFunction.moveBall.call(this, 90, 3)
      if(this.hp <= hpPhase * 4) this.mainType = 'phase2-1'
      break
    case 'phase2-1':
    case 'phase2-2':
    case 'phase2-3':
      if(this.mainType == 'phase2-1' && this.hp > hpPhase * 4) this.hp = hpPhase * 4
      if(this.mainType == 'phase2-1' && this.hp <= hpPhase * 3) this.mainType = 'phase2-2'
      if(this.mainType == 'phase2-2' && this.hp > hpPhase * 3) this.hp = hpPhase * 3
      if(this.mainType == 'phase2-2' && this.hp <= hpPhase * 2) this.mainType = 'phase2-3'
      if(this.mainType == 'phase2-3' && this.hp > hpPhase * 2) this.hp = hpPhase * 2
      if(this.mainType == 'phase2-3' && this.hp <= hpPhase * 1) this.mainType = 'phase3'

      if(this.tempNumber < 9 && this.delayCount >= 15){
        this.delayCount = 0
        this.tempNumber++
        var size = 16
        if(this.tempNumber < 9){
          this.speedX = 0
          this.speedY = 0
          this.attack = 0
          this.scale = 1
          fieldSystem.insertEnemy(enemyId.E862_bossCubeSub, this.x + size * (this.tempNumber % 3), this.y + size * Math.floor(this.tempNumber / 3) )
        }
      } else if(this.tempNumber >= 9 && this.delayCount >= 60){
        this.attack = 10
        this.delayCount = -540
        enemyFunction.E3Fx_setRandomSpeed.call(this, -1, 0.5, -3, 0.5, 0, false)
      }
      enemyFunction.movePositionReset.call(this)
      this.hp -= enemyFunction.getAvgLostHp(enemyId.E862_bossCubeSub)
      
      break
    case 'phase3':
      if(this.hp > hpPhase * 1) this.hp = hpPhase * 1
      if(this.tempInitCheck()) this.speedY = 2
      this.scale = 3

      if(this.x + (this.w * 8 * this.scale) < fieldSize.FIELD_X - 8){
        this.speedX = 2
      } else if(this.x + (this.w * 8 * this.scale) > fieldSize.FIELD_X){
        this.speedX = -2
      } else {
        if(this.delayCount % 10 == 0){
          fieldSystem.insertEbullet(ebulletId.robotLaser)
          fieldSystem.insertEbullet(ebulletId.robotLaser)
        }
        if(this.delayCount % 40 == 0){
          fieldSystem.insertEbullet(ebulletId.cubeLaser, this.x, this.y, 'left')
          fieldSystem.insertEbullet(ebulletId.cubeLaser, this.x, this.y + 8, 'left')
          fieldSystem.insertEbullet(ebulletId.cubeLaser, this.x, this.y + 16, 'left')
          fieldSystem.insertEbullet(ebulletId.cubeLaser, this.x, this.y + 24, 'left')
        }
        this.speedX = 0
      }
      enemyFunction.movePositionReset.call(this)
      break
    default: this.mainType = 'phase1'
  }
}
enemyData[enemyId.E862_bossCubeSub].move = function(){
  var getEnemy = fieldSystem.getIdValueIndexObject(fieldSystem.enemy, enemyId.E861_bossCube)
  if(getEnemy != null){
    switch(getEnemy.mainType){
      case 'phase1': case 'phase3': this.init(); break
      case 'phase2-1':
        if(this.delayCount >= 60 || this.x <= -30){
          this.delayCount = -160
          enemyFunction.E3Fx_setRandomSpeed.call(this, -1, 0.5, -3, 0.5, 0, false)
        }
        break
      case 'phase2-2':
        if(this.delayCount >= 60){
          this.delayCount = -120
          enemyFunction.moveChase.call(this, 80)
        }
        break
      case 'phase2-3':
        if(this.delayCount >= 60 || (this.speedX == 0 && this.speedY == 0)){
          this.delayCount = -240
          if(mySystem.randomBoolean()){
            this.speedX = 1
            this.speedY = 0
          } else {
            this.speedX = 0
            this.speedY = 1
          }
          fieldSystem.insertEbullet(ebulletId.cubeLaser, this.x, this.y, 'right')
          fieldSystem.insertEbullet(ebulletId.cubeLaser, this.x, this.y, 'left')
          fieldSystem.insertEbullet(ebulletId.cubeLaser, this.x, this.y + 16, 'right')
          fieldSystem.insertEbullet(ebulletId.cubeLaser, this.x, this.y + 16, 'left')
        }
        break
    }
    enemyFunction.movePositionReset.call(this)
  } else {
    this.init()
  }
}
enemyData[enemyId.E863_bossDiamond].move = function(){
  if(this.tempInitCheck()){
    this.x = (fieldSize.FIELD_X / 2) - (this.w * 8 * this.scale / 2)
    this.y = (fieldSize.FIELD_Y / 2) - (this.w * 8 * this.scale / 2)
  }
  enemyFunction.moveChase.call(this, 60)
  enemyFunction.moveNotExit.call(this)
}
enemyData[enemyId.E900_lamp].move = function(){
  enemyFunction.movePositionReset.call(this)
  switch(this.status){
    case '':
      this.speedX = mySystem.random(-2, -3)
      this.speedY = 0
      this.y = 0
      if(this.x <= playerSystem.x + 8 && this.x >= playerSystem.x - 8){
        this.status = 'down'
      }
      break
    case 'down':
      if(this.speedX > 0.1) this.speedX -= 0.1
      else if(this.speedX < -0.1) this.speedX += 0.1
      else {
        this.speedX = 0
        this.speedY += 0.2
        if(this.y + (this.h * 8 * this.scale) >= fieldSize.FIELD_Y){
          this.status = 'wait'
          this.delayCount = 0
        }
      }
      break
    case 'wait':
      this.speedY = 0
      if(this.delayCount >= 60){
        this.status = ''
        this.x = fieldSize.FIELD_X + mySystem.randomInt(0, 60)
      }
      break
  }
}
enemyData[enemyId.E901_plate].move = function(){
  switch(this.status){
    case '':
      this.x = fieldSize.FIELD_X
      this.y = 0
      this.speedX = mySystem.random(-1, -6)
      this.speedY = 0
      this.status = 'down'
      break
    case 'down':
      if(this.y + (this.h * 8 * this.scale) >= fieldSize.FIELD_Y){
        this.status = 'wait'
        this.delayCount = 0
      } else {
        this.speedY += 0.1
        enemyFunction.movePositionReset.call(this)
      }
      break
    case 'wait':
      if(this.delayCount >= 90){
        this.status = ''
        this.x = fieldSize.FIELD_X + mySystem.randomInt(0, 60)
      }
      break
  }
}
enemyData[enemyId.E902_candle].move = function(){
  enemyFunction.moveNotExit.call(this)
  if(enemyFunction.delayConditionCheck.call(this, 60, 72, 6, true)){
    fieldSystem.insertEbullet(ebulletId.magicFire, this.x, this.y, 'master')
  }
}
enemyData[enemyId.E903_hotdog].move = function(){
  enemyFunction.movePositionReset.call(this)
  var INDEX_SPEEDX = 1
  var INDEX_SPEEDY = 2
  if(this.tempInitCheck()){
    enemyFunction.E3Fx_setRandomSpeed.call(this, 3, 1, 4, 2, 0, true)
    this.tempArray[INDEX_SPEEDX] = this.speedX
    this.tempArray[INDEX_SPEEDY] = this.speedY
  }
  var speedMultiple = mySystem.getPercent(this.hp, this.hpMax) / 100
  this.speedX = this.tempArray[INDEX_SPEEDX] * (1 - speedMultiple)
  if(this.speedY > 0) this.speedY = this.tempArray[INDEX_SPEEDY] * (1 - speedMultiple)
  else this.speedY = this.tempArray[INDEX_SPEEDY] * (1 - speedMultiple) * -1
}
enemyData[enemyId.E904_monsterRed].move = enemyData[enemyId.E113_bigRedMonster].move
enemyData[enemyId.E905_monsterBlue].move = enemyData[enemyId.E205_bigBlueMonster].move
enemyData[enemyId.E906_potion].move = enemyData[enemyId.E840_potion].move
enemyData[enemyId.E907_bus].move = enemyData[enemyId.E123_bus].move
enemyData[enemyId.E908_robotWhite].move = function(){
  enemyFunction.moveNotExit.call(this)
  if(this.status != 'hitedmove' && this.delayCount >= 30){
    this.status = 'hited'
    this.delayCount = 0
  }
  if(this.status == 'hited') enemyFunction.E2Fx_hited.call(this, 1, 1, 3, 3, 300)
  if(this.status == 'hitedmove') enemyFunction.E2Fx_hitedmove.call(this)
}
enemyData[enemyId.E910_finalBoss].move = function(){
  var hpLineMax = 24
  var hpPhase = Math.floor(this.hpMax / hpLineMax)
  var hpLine = Math.floor(this.hp / hpPhase)
  enemyFunction.displayMultyMeter.call(this, hpLineMax, 'PURPLE illusion')
  var hpLineLevel = [21, 17, 13, 9, 4, 0]
  
  var INDEX_COOL_TIME = 9
  this.tempArray[INDEX_COOL_TIME]++
  if(this.tempArray[INDEX_COOL_TIME] >= 1500){
    if(this.tempArray[INDEX_COOL_TIME] >= 1800){
      this.tempArray[INDEX_COOL_TIME] = 0
      this.delayCount = 750
    }
    return
  }
  
  if(this.hp > hpPhase * (Number(this.subType) + 1) ){
    this.hp = hpPhase * (Number(this.subType) + 1)
  }
  this.subType = '' + hpLine

  var centerX = this.x + (this.w * 8 * this.scale / 2)
  var centerY = this.y + (this.h * 8 * this.scale / 2)
  var fieldCenterX = (fieldSize.FIELD_X / 2) - (this.w * 8 * this.scale / 2)
  var randomY = mySystem.randomInt(0, fieldSize.FIELD_Y - (this.h * 8 * this.scale))
  
  enemyFunction.moveInside.call(this)
  switch(this.mainType){
    case 'phase1': if(hpLine <= hpLineLevel[0]) this.mainType = 'phase2'; break
    case 'phase2': if(hpLine <= hpLineLevel[1]) this.mainType = 'phase3'; break
    case 'phase3': if(hpLine <= hpLineLevel[2]) this.mainType = 'phase4'; break
    case 'phase4': if(hpLine <= hpLineLevel[3]) this.mainType = 'phase5'; break
    case 'phase5': if(hpLine <= hpLineLevel[4]) this.mainType = 'phase6'; break
    case 'phase6': if(hpLine <= hpLineLevel[5]) this.mainType = 'phase7'; break
  }
  switch(this.mainType){
    case 'phase2': if(this.hp > hpPhase * (hpLineLevel[0] + 1) ) this.hp = hpPhase * (hpLineLevel[0] + 1); break
    case 'phase3': if(this.hp > hpPhase * (hpLineLevel[1] + 1) ) this.hp = hpPhase * (hpLineLevel[1] + 1); break
    case 'phase4': if(this.hp > hpPhase * (hpLineLevel[2] + 1) ) this.hp = hpPhase * (hpLineLevel[2] + 1); break
    case 'phase5': if(this.hp > hpPhase * (hpLineLevel[3] + 1) ) this.hp = hpPhase * (hpLineLevel[3] + 1); break
    case 'phase6': if(this.hp > hpPhase * (hpLineLevel[4] + 1) ) this.hp = hpPhase * (hpLineLevel[4] + 1); break
    case 'phase7': if(this.hp > hpPhase * (hpLineLevel[5] + 1) ) this.hp = hpPhase * (hpLineLevel[5] + 1); break
  }
  switch(this.mainType){
    case 'phase1':
      if(this.delayCount % 120 == 0){
        if(fieldSystem.getUsingCount(fieldSystem.ebullet) < 6){
          fieldSystem.insertEbullet(ebulletId.lamp)
          fieldSystem.insertEbullet(ebulletId.plate)
        }
      }
      break
    case 'phase2':
      if(this.delayCount % 60 == 0){
        fieldSystem.insertEbullet(ebulletId.magicFire)
        fieldSystem.insertEbullet(ebulletId.magicIce, undefined, undefined, 'master')
        fieldSystem.insertEbullet(ebulletId.magicLeap)
        fieldSystem.insertEbullet(ebulletId.magicShuriken, undefined, undefined, 'master')
      }

      enemyData[enemyId.E624_camera].move.call(this)
      break
    case 'phase3':
      if(this.x < fieldSize.FIELD_X - (this.w * 8 * this.scale)) this.speedX = 1
      else this.speedX = 0

      if(this.status == 'purple' && this.delayCount % 75 == 0){
        if(this.speedY == 0) this.speedY = 0.5
        for(i = 0; i < 24; i++){
          if( !(this.y < i * 5 && this.y + (this.h * 8 * this.scale) > i * 5) ){
            fieldSystem.insertEbullet(ebulletId.purpleLaser, this.x + (this.w * 8 * this.scale), i * 5)
          }
        }
      } else if(this.status == 'blue' && this.delayCount % 10 == 0){
        var lineNumber = (this.delayCount % 120) / 10
        this.speedY = 0
        if(this.delayCount % 120 == 0) this.y = randomY
        if( !(this.y < lineNumber * 10 && this.y + (this.h * 8 * this.scale) > lineNumber * 10) ){
          fieldSystem.insertEbullet(ebulletId.cubeLaser, this.x + (this.w * 8 * this.scale), lineNumber * 10, 'left')
        }
        if( !(this.y < (12 - lineNumber) * 10 && this.y + (this.h * 8 * this.scale) > (12 - lineNumber) * 10) ){
          fieldSystem.insertEbullet(ebulletId.cubeLaser, this.x + (this.w * 8 * this.scale), 120 - (lineNumber * 10), 'left')
        }
      } else if(this.status == 'yellow' && this.delayCount % 25 == 0){
        this.speedY = 0
        this.y = randomY
        randomY = mySystem.randomInt(0, fieldSize.FIELD_Y, true)
        fieldSystem.insertEbullet(ebulletId.electronicA, this.x + (this.w * 8 * this.scale), this.y, 'left')
        fieldSystem.insertEbullet(ebulletId.electronicA, this.x + (this.w * 8 * this.scale), randomY, 'left')
      }

      if(!this.status) this.status = 'purple'
      if(this.delayCount >= 750){
        this.delayCount = 0
        if(this.status == 'purple') this.status = 'blue'
        else if(this.status == 'blue') this.status = 'yellow'
        else if(this.status == 'yellow') this.status = 'purple'
      }

      enemyFunction.move.call(this)
      break
    case 'phase4':
      this.x = fieldCenterX
      this.attack = 0
      if(this.delayCount % 180 == 0){
        for(var i = 0; i < 4; i++){
          fieldSystem.insertEbullet(ebulletId.potionPotion, centerX, centerY)
        }
        fieldSystem.insertEbullet(ebulletId.potionPotion, centerX, centerY, 'grey')
        fieldSystem.insertEbullet(ebulletId.potionPotion, centerX, centerY, 'grey')
      }

      if(this.delayCount % 10 == 0 && this.scale < 8) this.scale++
      break
    case 'phase5':
      this.x = fieldCenterX
      this.attack = 0
      this.scale = 8
      if(this.delayCount >= 150){
        this.delayCount = 0
        fieldSystem.insertEbullet(ebulletId.bigSquare, mySystem.randomInt(0, fieldSize.FIELD_X), centerY)
      }
      break
    case 'phase6':
      this.x = fieldCenterX
      this.attack = 0
      this.scale = 8
      if(this.delayCount >= 8){
        this.delayCount = 0
        fieldSystem.insertEbullet(ebulletId.randomGem, mySystem.randomInt(0, fieldSize.FIELD_X), 0)
      }
      break
    case 'phase7':
      if(this.delayCount % 10 == 0 && this.scale > 1) this.scale--
      this.y = fieldSize.FIELD_Y - (this.h * 8 * this.scale)
      this.x = fieldCenterX
      break
    default:
      this.mainType = 'phase1'
      break
  }
}

})()

function EbulletData(){}
EbulletData.prototype = new FieldObject()
EbulletData.prototype.setData = function(spriteId, w, h, scale, attack, repeatCount){
  this.spriteId = typeof spriteId == 'undefined' ? 0 : spriteId
  this.scale = typeof scale == 'undefined' ? 1 : scale
  this.w = typeof w == 'undefined' ? 1 : w
  this.h = typeof h == 'undefined' ? 1 : h
  this.attack = typeof attack == 'undefined' ? 10 : attack
  this.repeatCount = typeof repeatCount == 'undefined' ? 1 : repeatCount
}
EbulletData.prototype.process = function(){
  this.delayCount++
  this.attackDelayCount++
  if(this.attackDelayCount > 0 && fieldSystem.collision(this, playerSystem)){
    this.attackDelayCount = -this.attackDelay
    playerSystem.damageInsert(this.attack)
    if(this.repeatCount > 1) this.repeatCount--
    else this.init()
  }
  if(this.x <= fieldSize.OUT_LEFT || this.x >= fieldSize.OUT_RIGHT || this.y <= fieldSize.OUT_UP || this.y >= fieldSize.OUT_RIGHT) this.init()

  this.outAreaFrame++
  if(this.outAreaFrame >= 480) this.init()
}
EbulletData.prototype.move = function(){
  this.x += this.speedX
  this.y += this.speedY
}
var ebulletData = [new EbulletData()]
for(i = 0; i < 40; i++) ebulletData.push(new EbulletData())
;(function EbulletDataInput(){

ebulletData[ebulletId.test].setData()
ebulletData[ebulletId.test].move = function(){
  EbulletData.prototype.move.call(this)
  this.speedX = -1
  this.spriteId = spriteId.ebulletTest
}
ebulletData[ebulletId.streetLight].setData(spriteId.ebulletLight, 1, 1, 1, 20)
ebulletData[ebulletId.streetLight].move = function(){
  EbulletData.prototype.move.call(this)
  if(this.tempInitCheck()){
    var randomNumber = Math.floor(mySystem.random(1, 9))
    switch(randomNumber){
      case 1: this.speedX = 0; this.speedY = 4; break
      case 2: this.speedX = 0; this.speedY =-4; break
      case 3: this.speedX = 4; this.speedY = 0; break
      case 4: this.speedX = 4; this.speedY = 4; break
      case 5: this.speedX = 4; this.speedY =-4; break
      case 6: this.speedX =-4; this.speedY = 0; break
      case 7: this.speedX =-4; this.speedY = 4; break
      case 8: this.speedX =-4; this.speedY =-4; break
    }
  }
}
ebulletData[ebulletId.drinkSmall].setData(spriteId.ebulletDrinkSmall, 1, 1, 1, 10)
ebulletData[ebulletId.drinkSmall].move = function(){
  EbulletData.prototype.move.call(this)
  if(this.tempInitCheck()){
    var sx = this.x >= playerSystem.x ? sx = -1 : sx = 1
    this.speedX = sx * mySystem.random(3, 4)
    this.speedY = mySystem.random(-5, 5)
  }
}
ebulletData[ebulletId.drinkWater].setData(spriteId.ebulletDrinkWater, 1, 1, 1, 10)
ebulletData[ebulletId.drinkWater].move = function(){
  EbulletData.prototype.move.call(this)
  switch(this.status){
    case '':
      this.tempNumber = mySystem.random(0, 240)
      this.status = 'go'
      this.speedX = mySystem.random(-4, -3)
      this.speedY = 0
      this.x = 240
      this.h = 2
      break
    case 'go':
      this.y = 120 - (this.h * this.scale * 8)
      if(this.x <= this.tempNumber) this.status = 'up'
      break
    case 'up':
      this.y -= 6
      this.speedX = 0
      break
  }
}
ebulletData[ebulletId.speedCar].setData(spriteId.ebulletSpeedCar, 2, 1, 3, 50, 99)
ebulletData[ebulletId.speedBus].setData(spriteId.ebulletSpeedCar, 2, 1, 3, 50, 99)
ebulletData[ebulletId.speedCar].move = function(){
  var i = 0
  if(this.tempInitCheck()){
    if(this.idValue == ebulletId.speedBus) this.spriteId = spriteId.ebulletSpeedBus
    this.attackDelay = 120
    this.speedX = -4
  }

  var getBoxIndex = fieldSystem.getIdvalueIndex(fieldSystem.enemy, enemyId.E126_superBox)
  if(this.tempNumber >= 60){
    this.tempNumber = 0
    soundSystem.play(soundId.carHorn1, 3)
  }

  if(fieldSystem.collision(this, playerSystem)){
    this.tempNumber++
  } else if(getBoxIndex != -1 && fieldSystem.collision(this, fieldSystem.enemy[getBoxIndex])){
    this.tempNumber++
  } else {
    var isMove = true
    var firstX = 240
    var firstIndex = 0

    for(i = 0; i < fieldSystem.ebullet.length; i++){
      if((this.idValue == ebulletId.speedCar || this.idValue == ebulletId.speedBus)
          && firstX > fieldSystem.ebullet[i].x){
        firstX = fieldSystem.ebullet[i].x
        firstIndex = i
      }
    }

    if(firstIndex == this.index){
      isMove = true
    } else {
      for(i = 0; i < fieldSystem.ebullet.length; i++){
        if(this.index != i && getBoxIndex != i && fieldSystem.ebullet[i].isUsing &&
          (fieldSystem.ebullet[i].idValue == ebulletId.speedCar || fieldSystem.ebullet[i].idValue == ebulletId.speedBus) &&
          fieldSystem.collision(this, fieldSystem.ebullet[i]) ){
          if(this.x < fieldSystem.ebullet[i].x && getBoxIndex != i){
            this.x -= 2
            fieldSystem.ebullet[i].x += 2
          } else if(getBoxIndex != i) {
            this.x += 2
            fieldSystem.ebullet[i].x += 2
          }
          isMove = false
        }
      }
    }

    if(isMove) EbulletData.prototype.move.call(this)
    else this.tempNumber++
  }
}
ebulletData[ebulletId.speedBus].move = ebulletData[ebulletId.speedCar].move
ebulletData[ebulletId.torch].setData(spriteId.ebulletTorch)
ebulletData[ebulletId.torch].move = function(){
  if(this.delayCount >= 36) this.init()
  if(this.tempInitCheck()) enemyFunction.E3Fx_setRandomSpeed.call(this, -1, 1, -0.5, -1, 0, false)
  EbulletData.prototype.move.call(this)
}
ebulletData[ebulletId.randomGem].move = function(){
  EbulletData.prototype.move.call(this)
  if(this.tempString == ''){
    var number = Math.floor(mySystem.random(1, 7))
    switch(number){
      case 0: this.spriteId = spriteId.enemyGarnet; break
      case 1: this.spriteId = spriteId.enemyAmethyst; break
      case 2: this.spriteId = spriteId.enemyEmerald; break
      case 3: this.spriteId = spriteId.enemySapphire; break
      case 4: this.spriteId = spriteId.enemyGold; break
      case 5: this.spriteId = spriteId.enemySilver; break
      case 6: this.spriteId = spriteId.enemyDiamond; break
      default: this.spriteId = spriteId.enemyAmethyst; break
    }

    if(this.spriteId == spriteId.enemyGold || this.spriteId == spriteId.enemySilver){
      this.w = 2
    } else if(this.spriteId == spriteId.enemyDiamond){
      this.w = 2
      this.h = 2
    }

    this.attack = 2
    this.tempString = '!'
    this.speedX = mySystem.random(-2, 2)
    this.speedY = mySystem.random(-3,-5)
    if(this.speedX >= -0.5 && this.speedX <= 0){
      this.speedX = -0.6
    } else if(this.speedX <= 0.5 && this.speedX >= 0){
      this.speedX = 0.6
    }
  } else {
    this.speedY += 0.1
    if(this.y >= 120){
      this.y = 119
      this.speedY = -Math.abs(this.speedY)
    } else if(this.y <= 0){
      this.y = 1
      this.speedY = 0
    }
  }
}
ebulletData[ebulletId.cart].setData(spriteId.ebulletCart, 2, 1, 2, 35)
ebulletData[ebulletId.cart].move = function(){
  EbulletData.prototype.move.call(this)
  if(this.x <= 0) this.x = 239
  else if(this.x >= 241) this.x = 1

  if(this.status == ''){
    if(this.y + (this.h * 8 * this.scale) >= 119){
      this.speedY = 0
      this.speedX = -9
    } else {
      this.speedY = 2
      this.speedX = -9
    }  
  }

  if(this.status == 'hited') enemyFunction.E2Fx_hited.call(this, 2, 2, 3, 3, 160)
  if(this.status == 'hitedmove') enemyFunction.E2Fx_hitedmove.call(this)

  loopOut:
  for(var i = 0; i < fieldSystem.enemy.length; i++){
    var enemy = fieldSystem.enemy[i]
    if(enemy.isUsing && enemy.idValue == enemyId.E224_bossCart && 
       enemy.status != 'hitedmove' && fieldSystem.collision(this, enemy) ){
      enemy.status = 'hited'
      enemy.hp -= 5000
      soundSystem.play(soundId.enemyDiePillar)
      this.init()
      break loopOut
    }
  }
}
ebulletData[ebulletId.robotMissile].setData(spriteId.ebulletRobotMissile, 1, 1, 2, 5)
ebulletData[ebulletId.robotMissile].move = function(){
  EbulletData.prototype.move.call(this)
  if(this.tempInitCheck()) enemyFunction.E3Fx_setRandomSpeed.call(this, 0, 3, 0, 6, 0, true)
  
  if(this.status == ''){
    if(this.y <= 0){
      this.speedY = Math.abs(this.speedY)
    } else if(this.y + (this.h * this.scale * 8) >= fieldSize.FIELD_Y){
      this.speedY = -Math.abs(this.speedY)
    }

    if(playerSystem.y >= this.y - 8 && playerSystem.y < this.y + 8){
      if(playerSystem.x <= this.x) this.speedX = -4
      else if(playerSystem.x >  this.x) this.speedX = 4
      else this.speedX = -4
      this.speedY = 0
      this.status = 'go'
    }
  }
}
ebulletData[ebulletId.robotLaser].setData(0, 4, 1, 1, 5)
ebulletData[ebulletId.robotLaser].move = function(){
  EbulletData.prototype.move.call(this)
  if(this.tempInitCheck()){
    enemyFunction.E3Fx_setRandomSpeed.call(this, 3, 0, 5, 0, 0, true)
    this.y = this.y + mySystem.random(-24, 24)
  }

  displaySystem.rect(this.x, this.y + 0, 32, 2, colorId.CYAN)
  displaySystem.rect(this.x, this.y + 2, 32, 2, colorId.WHITE)
  displaySystem.rect(this.x, this.y + 4, 32, 2, colorId.LIGHT_BLUE)
  displaySystem.rect(this.x, this.y + 6, 32, 2, colorId.BLUE)
}
ebulletData[ebulletId.heal].setData(0, 0, 0, 0, 0)
ebulletData[ebulletId.heal].move = function(){
  EbulletData.prototype.move.call(this)
  displaySystem.text('+', this.x, this.y, colorId.GREEN, 3)
  this.y -= 0.4
  if(this.delayCount >= 30) this.init()
}
ebulletData[ebulletId.electricity].setData(0, 1, 1, 1, 5)
ebulletData[ebulletId.electricity].move = function(){
  EbulletData.prototype.move.call(this)
  if(this.tempInitCheck()) enemyFunction.E3Fx_setRandomSpeed.call(this, -4, -1, 4, -3, 0, false)
  displaySystem.line(this.x, this.y, this.x - this.speedX, this.y - this.speedY, colorId.YELLOW)
  displaySystem.line(this.x, this.y + 2, this.x - this.speedX, this.y - this.speedY + 2, colorId.YELLOW)
  displaySystem.line(this.x, this.y + 4, this.x + this.speedX, this.y + this.speedY + 4, colorId.WHITE)
  displaySystem.line(this.x + 4, this.y + 0, this.x - this.speedX + 4, this.y - this.speedY, colorId.YELLOW)
  displaySystem.line(this.x + 4, this.y + 2, this.x - this.speedX + 4, this.y - this.speedY + 2, colorId.YELLOW)
  displaySystem.line(this.x + 4, this.y + 4, this.x + this.speedX + 4, this.y + this.speedY + 4, colorId.WHITE)
}
ebulletData[ebulletId.electronicA].setData(0, 1, 1, 1, 5)
ebulletData[ebulletId.electronicA].move = function(){
  EbulletData.prototype.move.call(this)
  if(this.tempInitCheck()){
    switch(this.mainType){
      default:
      case 'left': this.speedX = -5; this.speedY =  0; break
      case 'right': this.speedX =  5; this.speedY =  0; break
      case 'up': this.speedX =  0; this.speedY = -5; break
      case 'down': this.speedX =  0; this.speedY =  5; break
    }
  }
  
  displaySystem.line(this.x, this.y,     this.x - this.speedX + 8, this.y - this.speedY, colorId.YELLOW)
  displaySystem.line(this.x, this.y + 1, this.x - this.speedX + 8, this.y - this.speedY + 1, colorId.WHITE)
  displaySystem.line(this.x, this.y + 3, this.x - this.speedX + 8, this.y - this.speedY + 3, colorId.WHITE)
  displaySystem.line(this.x, this.y + 4, this.x - this.speedX + 8, this.y - this.speedY + 4, colorId.YELLOW)
  displaySystem.line(this.x, this.y + 6, this.x - this.speedX + 8, this.y - this.speedY + 6, colorId.YELLOW)
  displaySystem.line(this.x, this.y + 7, this.x - this.speedX + 8, this.y - this.speedY + 7, colorId.WHITE)
}
ebulletData[ebulletId.electronicB].setData(0, 1, 1, 1, 5)
ebulletData[ebulletId.electronicB].move = function(){
  if(this.mainType == '5'){
    this.init()
    return
  }
  EbulletData.prototype.move.call(this)
  if(this.tempInitCheck()){
    var sx = mySystem.random(3, 4)
    var sy = mySystem.random(3, 4)
    switch(this.mainType){
      case '1': this.speedX =-sx; this.speedY =-sy; break
      case '2': this.speedX =  0; this.speedY =-sy; break
      case '3': this.speedX = sx; this.speedY =-sy; break
      case '4': this.speedX =-sx; this.speedY =  0; break
      case '6': this.speedX = sx; this.speedY =  0; break
      case '7': this.speedX =-sx; this.speedY = sy; break
      case '8': this.speedX =  0; this.speedY = sy; break
      case '9': this.speedX = sx; this.speedY = sy; break
    }
  }
  displaySystem.line(this.x, this.y, this.x - this.speedX + 8, this.y - this.speedY, colorId.BLUE)
  displaySystem.line(this.x, this.y + 2, this.x - this.speedX + 8, this.y - this.speedY + 2, colorId.WHITE)
  displaySystem.line(this.x, this.y + 4, this.x - this.speedX + 8, this.y - this.speedY + 4, colorId.CYAN)
  displaySystem.line(this.x, this.y + 6, this.x - this.speedX + 8, this.y - this.speedY + 6, colorId.BLUE)
  if(this.delayCount >= 90) this.init()
}
ebulletData[ebulletId.magicFire].setData(spriteId.ebulletTorch, 1, 1, 2, 4, 1)
ebulletData[ebulletId.magicFire].move = function(){
  EbulletData.prototype.move.call(this)
  var INDEX_PLAYERX = 0
  if(this.mainType == 'master'){
    this.status = 'left'
    this.mainType = ''
    this.tempArray[INDEX_PLAYERX] = playerSystem.x
  }
  switch(this.status){
    case 'down':
      this.speedY = 4
      if(this.y >= fieldSize.FIELD_Y + 16){
        this.y = fieldSize.FIELD_Y + 30
        this.x = this.tempArray[INDEX_PLAYERX]
        this.status = 'left'
        this.speedY = -1
        this.x += mySystem.random(-8, 8)
      }
      break
    case 'left':
      this.speedY = -1
      this.speedX = -1
      if(this.delayCount % 6 == 1) this.status = 'right'
      break
    case 'right':
      this.speedY = -1
      this.speedX = 1
      if(this.delayCount % 6 == 1) this.status = 'left'
      break
    default:
      if(this.delayCount == 10) this.tempArray[INDEX_PLAYERX] = playerSystem.x
      if(this.delayCount > 20) this.status = 'down'
      break
  }
}
ebulletData[ebulletId.magicIce].setData(spriteId.ebulletIce, 1, 1, 1, 4, 1)
ebulletData[ebulletId.magicIce].move = function(){
  EbulletData.prototype.move.call(this)
  if(this.mainType == 'master'){
    this.status = 'down'
    this.mainType = ''
    if(this.y > 0) this.y = -16
    this.x = mySystem.randomInt(0, fieldSize.FIELD_X, true)
  }
  switch(this.status){
    case 'up':
      this.speedY = -4
      if(this.y <= -30){
        this.x = this.x + mySystem.random(-32, 32)
        this.status = 'down'
      }
      break
    case 'down': this.speedY = 2; break
    default: if(this.delayCount > 20) this.status = 'up'; break
  }
}
ebulletData[ebulletId.magicShuriken].setData(spriteId.ebulletShuriken, 1, 1, 1, 4, 1)
ebulletData[ebulletId.magicShuriken].move = function(){
  if(this.tempInitCheck()){
    var sx = 2
    var sy = 2
    switch(this.mainType){
      default:
      case '1': this.speedX =-sx; this.speedY =-sy; break
      case '2': this.speedX =  0; this.speedY =-sy; break
      case '3': this.speedX = sx; this.speedY =-sy; break
      case '4': this.speedX =-sx; this.speedY =  0; break
      case '5': this.speedX = sx; this.speedY =  0; break
      case '6': this.speedX =-sx; this.speedY = sy; break
      case '7': this.speedX =  0; this.speedY = sy; break
      case '8': this.speedX = sx; this.speedY = sy; break
      case 'master': enemyFunction.moveChase.call(this); break
    }
  }
  EbulletData.prototype.move.call(this)
  if(this.delayCount >= 180) this.init()
}
ebulletData[ebulletId.magicLeap].setData(spriteId.ebulletLeap, 1, 1, 1, 4, 1)
ebulletData[ebulletId.magicLeap].move = function(){
  enemyFunction.moveBullon.call(this, 10, 3)
  if(!this.status && this.delayCount > 30){
    if(this.x >= playerSystem.x){
      this.status = 'left'
      this.speedX = -2
    } else if(this.x < playerSystem.x){
      this.status = 'right'
      this.speedX = 2
    }
  }

  if(this.delayCount > 180) this.init()
}
ebulletData[ebulletId.potionRed].setData(spriteId.ebulletTorch, 1, 1, 1, 8)
ebulletData[ebulletId.potionRed].move = function(){
  EbulletData.prototype.move.call(this)
  var speedValue = this.delayCount/20
  this.speedX = mySystem.random(-speedValue, speedValue)
  this.speedY = mySystem.random(-speedValue, speedValue)
  if(this.delayCount >= 120) this.init()
}
ebulletData[ebulletId.potionBlue].setData(0, 1, 1, 2, 6)
ebulletData[ebulletId.potionBlue].move = function(){
  EbulletData.prototype.move.call(this)
  if(this.tempInitCheck()){
    switch(this.mainType){
      case 'left': this.speedX = -4; break
      case 'right': this.speedX = 4; break
      case 'up': this.speedY = -4; break
      case 'down': this.speedY = 4; break
      default: this.speedX = -4; this.mainType = 'left'; break
    }
  }

  var lineSize = 16
  var halfSize = 8
  switch(this.mainType){
    case 'left':
      displaySystem.line(this.x, this.y + halfSize, this.x + lineSize, this.y, colorId.LIGHT_BLUE)
      displaySystem.line(this.x, this.y + halfSize, this.x + lineSize, this.y + lineSize, colorId.LIGHT_BLUE)
      displaySystem.line(this.x + 4, this.y + halfSize, this.x + lineSize + 4, this.y, colorId.BLUE)
      displaySystem.line(this.x + 4, this.y + halfSize, this.x + lineSize + 4, this.y + lineSize, colorId.BLUE)
      break
    case 'right':
      displaySystem.line(this.x, this.y, this.x + lineSize, this.y + halfSize, colorId.LIGHT_BLUE)
      displaySystem.line(this.x, this.y + lineSize, this.x + lineSize, this.y + halfSize, colorId.LIGHT_BLUE)
      displaySystem.line(this.x - 4, this.y, this.x + lineSize - 4, this.y + halfSize, colorId.BLUE)
      displaySystem.line(this.x - 4, this.y + lineSize, this.x + lineSize - 4, this.y + halfSize, colorId.BLUE)
      break
    case 'up':
      displaySystem.line(this.x, this.y + lineSize, this.x + halfSize, this.y, colorId.LIGHT_BLUE)
      displaySystem.line(this.x + lineSize, this.y + lineSize, this.x + halfSize, this.y, colorId.LIGHT_BLUE)
      displaySystem.line(this.x, this.y + lineSize + 4, this.x + halfSize, this.y, colorId.BLUE)
      displaySystem.line(this.x + lineSize, this.y + lineSize + 4, this.x + halfSize, this.y, colorId.BLUE)
      break
    case 'down':
      displaySystem.line(this.x, this.y, this.x + halfSize, this.y + lineSize, colorId.LIGHT_BLUE)
      displaySystem.line(this.x + lineSize, this.y, this.x + halfSize, this.y + lineSize, colorId.LIGHT_BLUE)
      displaySystem.line(this.x, this.y - 4, this.x + halfSize, this.y + lineSize - 4, colorId.BLUE)
      displaySystem.line(this.x + lineSize, this.y - 4, this.x + halfSize, this.y + lineSize - 4, colorId.BLUE)
      break
  }
}
ebulletData[ebulletId.potionGreen].setData(0, 1, 1, 6, 12, 2)
ebulletData[ebulletId.potionGreen].move = function(){
  EbulletData.prototype.move.call(this)
  displaySystem.line(this.x, this.y, this.x + mySystem.random(0, this.scale * 8), this.y + mySystem.random(0, this.scale * 8), colorId.GREEN)
  displaySystem.line(this.x, this.y, this.x + mySystem.random(0, this.scale * 8), this.y + mySystem.random(0, this.scale * 8), colorId.LIGHT_GREEN)
  displaySystem.line(this.x + (this.scale * 8), this.y + (this.scale * 8), this.x + mySystem.random(0, this.scale * 8), this.y + mySystem.random(0, this.scale * 8), colorId.GREEN)
  displaySystem.line(this.x + (this.scale * 8), this.y + (this.scale * 8), this.x + mySystem.random(0, this.scale * 8), this.y + mySystem.random(0, this.scale * 8), colorId.LIGHT_GREEN)
  displaySystem.line(this.x, this.y + (this.scale * 8), this.x + mySystem.random(0, this.scale * 8), this.y + mySystem.random(0, this.scale * 8), colorId.GREEN)
  displaySystem.line(this.x, this.y + (this.scale * 8), this.x + mySystem.random(0, this.scale * 8), this.y + mySystem.random(0, this.scale * 8), colorId.LIGHT_GREEN)
  displaySystem.line(this.x + (this.scale * 8), this.y, this.x + mySystem.random(0, this.scale * 8), this.y + mySystem.random(0, this.scale * 8), colorId.GREEN)
  displaySystem.line(this.x + (this.scale * 8), this.y, this.x + mySystem.random(0, this.scale * 8), this.y + mySystem.random(0, this.scale * 8), colorId.LIGHT_GREEN)
  if(this.delayCount >= 120) this.init()
}
ebulletData[ebulletId.potionGrey].setData(spriteId.enemyPotionGrey, 1, 1, 1, 4, 1)
ebulletData[ebulletId.potionGrey].move = function(){
  EbulletData.prototype.move.call(this)
  if(this.tempInitCheck()){
    if(this.mainType == 'chase') enemyFunction.moveChase.call(this, 56)
    else enemyFunction.E3Fx_setRandomSpeed.call(this, -4, -4, 4, 4, 0, false)
  }
  if(this.delayCount >= 120) this.init()
}
ebulletData[ebulletId.potionRainbow].setData(0, 6, 2, 1, 10)
ebulletData[ebulletId.potionRainbow].move = function(){
  EbulletData.prototype.move.call(this)
  if(this.tempInitCheck()){
    switch(this.mainType){
      case 'leftup': this.speedX = -1; this.speedY = -1; break
      case 'leftdown': this.speedX = -1; this.speedY = 1; break
      case 'rightup': this.speedX = 1; this.speedY = -1; break
      case 'rightdown': this.speedX = 1; this.speedY = 1; break
    }
  }

  for(var i = 0; i < 9; i++){
    var yPlus = [16, 12, 8, 4, 0, 4, 8, 12, 16]
    displaySystem.line(this.x + (i * 4), this.y + 0 + yPlus[i], this.x + 16 + (i * 4), this.y + 0 + yPlus[i], colorId.RED)
    displaySystem.line(this.x + (i * 4), this.y + 1 + yPlus[i], this.x + 16 + (i * 4), this.y + 1 + yPlus[i], colorId.ORANGE)
    displaySystem.line(this.x + (i * 4), this.y + 2 + yPlus[i], this.x + 16 + (i * 4), this.y + 2 + yPlus[i], colorId.YELLOW)
    displaySystem.line(this.x + (i * 4), this.y + 3 + yPlus[i], this.x + 16 + (i * 4), this.y + 3 + yPlus[i], colorId.GREEN)
    displaySystem.line(this.x + (i * 4), this.y + 4 + yPlus[i], this.x + 16 + (i * 4), this.y + 4 + yPlus[i], colorId.BLUE)
    displaySystem.line(this.x + (i * 4), this.y + 5 + yPlus[i], this.x + 16 + (i * 4), this.y + 5 + yPlus[i], colorId.DARK_BLUE)
    displaySystem.line(this.x + (i * 4), this.y + 6 + yPlus[i], this.x + 16 + (i * 4), this.y + 6 + yPlus[i], colorId.PURPLE)
  }
}
ebulletData[ebulletId.potionPotion].setData(0, 1, 1, 1, 0, 9999)
ebulletData[ebulletId.potionPotion].move = function(){
  EbulletData.prototype.move.call(this)
  var INDEX_DELAY = 0
  if(this.tempInitCheck()){
    if(this.mainType == ''){
      switch(mySystem.randomInt(0, 5)){
        case 0: this.mainType = 'red'; break
        case 1: this.mainType = 'blue'; break
        case 2: this.mainType = 'green'; break
        case 3: this.mainType = 'grey'; break
        case 4: this.mainType = 'rainbow'; break
      }
    }
    enemyFunction.E3Fx_setRandomSpeed.call(this, 0, 0, 1, 0.5, 0.2, true)

    switch(this.mainType){
      case 'red': this.spriteId = spriteId.enemyPotionRed; break
      case 'blue': this.spriteId = spriteId.enemyPotionBlue; break
      case 'green': this.spriteId = spriteId.enemyPotionGreen; break
      case 'grey': this.spriteId = spriteId.enemyPotionGrey; break
      case 'rainbow': this.spriteId = spriteId.enemyPotionBigRainbow; break
    }

    if(this.mainType == 'rainbow'){
      this.w = 2
      this.h = 2
      this.scale =1
    } else {
      this.scale = 2
    }

    this.tempArray[INDEX_DELAY] = mySystem.randomInt(36, 132)
  }

  if(this.delayCount >= this.tempArray[INDEX_DELAY]){
    switch(this.mainType){
      case 'red':
        fieldSystem.insertEbullet(ebulletId.potionRed, this.x, this.y, 'left')
        fieldSystem.insertEbullet(ebulletId.potionRed, this.x, this.y, 'right')
        fieldSystem.insertEbullet(ebulletId.potionRed, this.x, this.y, 'up')
        fieldSystem.insertEbullet(ebulletId.potionRed, this.x, this.y, 'down')
        break
      case 'blue':
        for(var i = 0; i < 3; i++){
          fieldSystem.insertEbullet(ebulletId.potionBlue, this.x, this.y + (i * 8), 'left')
          fieldSystem.insertEbullet(ebulletId.potionBlue, this.x, this.y + (i * 8), 'right')
          fieldSystem.insertEbullet(ebulletId.potionBlue, this.x + (i * 8), this.y, 'up')
          fieldSystem.insertEbullet(ebulletId.potionBlue, this.x + (i * 8), this.y, 'down')
        }
        break
      case 'green':
        fieldSystem.insertEbullet(ebulletId.potionGreen, this.x, this.y)
        break
      case 'grey':
        fieldSystem.insertEbullet(ebulletId.potionGrey, this.x, this.y, 'chase')
        fieldSystem.insertEbullet(ebulletId.potionGrey, this.x + 16, this.y + 16, 'chase')
        for(i = 0; i < 2; i++) fieldSystem.insertEbullet(ebulletId.potionGrey, this.x, this.y)
        break
      case 'rainbow':
        fieldSystem.insertEbullet(ebulletId.potionRainbow, this.x, this.y, 'leftup')
        fieldSystem.insertEbullet(ebulletId.potionRainbow, this.x, this.y, 'leftdown')
        fieldSystem.insertEbullet(ebulletId.potionRainbow, this.x, this.y, 'rightup')
        fieldSystem.insertEbullet(ebulletId.potionRainbow, this.x, this.y, 'rightdown')
        break
    }

    soundSystem.play(soundId.enemyDiePotion)
    this.init()
  }
}
ebulletData[ebulletId.oxygenBubble].setData(0, 1, 1, 1, 4, 10)
ebulletData[ebulletId.oxygenBubble].move = function(){
  EbulletData.prototype.move.call(this)
  this.speedX = 0
  this.speedY = -1
  var radius = Math.floor(this.delayCount / 10) + 1
  if(radius > 13) radius = 13
  displaySystem.strokeCircle(this.x, this.y, radius, colorId.WHITE)
  displaySystem.strokeCircle(this.x, this.y, radius-1, colorId.DARK_GREY)
  if(radius <= 4) this.scale = 1
  else if(radius >= 5 && radius <= 8) this.scale = 2
  else if(radius >= 9 && radius <= 12) this.scale = 3
  else if(radius >= 13) this.scale = 4

  if(this.delayCount >= 240) this.init()
}
ebulletData[ebulletId.submarineRocket].setData(spriteId.ebulletRobotMissile, 1, 1, 2, 10)
ebulletData[ebulletId.submarineRocket].move = function(){
  this.speedX = this.delayCount / 20
  if(this.speedX >= 2) this.speedX = 2
  
  if(this.status == ''){
    if(playerSystem.x < this.x) this.status = 'left'
    else this.status = 'right'
  } else if(this.status == 'left') {
    this.speedX *= -1
  }
  EbulletData.prototype.move.call(this)
}
ebulletData[ebulletId.cubeLaser].setData(0, 4, 1, 1, 10, 4)
ebulletData[ebulletId.cubeLaser].move = function(){
  EbulletData.prototype.move.call(this)
  if(this.mainType == ''){
    this.mainType = 'left'
  } else if(this.mainType == 'left'){
    this.speedX = -4
    this.speedY = 0
  } else if(this.mainType == 'right'){
    this.speedX = 4
    this.speedY = 0
  }

  displaySystem.rect(this.x, this.y + 1, this.w * 8 * this.scale, 1, colorId.BLUE)
  displaySystem.rect(this.x, this.y + 2, this.w * 8 * this.scale, 1, colorId.LIGHT_BLUE)
  displaySystem.rect(this.x, this.y + 3, this.w * 8 * this.scale, 1, colorId.CYAN)
  displaySystem.rect(this.x, this.y + 4, this.w * 8 * this.scale, 1, colorId.LIGHT_BLUE)
  displaySystem.rect(this.x, this.y + 5, this.w * 8 * this.scale, 1, colorId.BLUE)
  displaySystem.rect(this.x, this.y + 6, this.w * 8 * this.scale, 1, colorId.DARK_BLUE)
}
ebulletData[ebulletId.cubeRed].setData(spriteId.enemyCubeRed, 1, 1, 2, 10, 4)
ebulletData[ebulletId.cubeRed].move = function(){
  EbulletData.prototype.move.call(this)
  var INDEX_RUNCH_DELAY = 0
  if(this.tempInitCheck()){
    this.tempArray[INDEX_RUNCH_DELAY] = mySystem.randomInt(120, 180)
    this.speedX = -0.4
    this.x = fieldSize.FIELD_X + (this.tempArray[INDEX_RUNCH_DELAY] - 60) * 0.4
    this.status = 'normal'
    this.delayCount = 0
    this.speedY = 0
  }
  
  switch(this.status){
    case 'normal':
      if(this.delayCount >= this.tempArray[INDEX_RUNCH_DELAY]){
        this.status = 'fire'
        enemyFunction.moveChase.call(this, 50)
      }
      break
    case 'fire':
      if(this.x <= -60 || this.x >= 300){
        this.init()
      }
      break
  }
}
ebulletData[ebulletId.cubeGrey].setData(spriteId.enemyCubeGrey, 1, 1, 1, 8, 4)
ebulletData[ebulletId.cubeGrey].move = function(){
  EbulletData.prototype.move.call(this)
  this.speedX = -2
  if(this.delayCount >= 20 && this.delayCount < 40) this.scale = 2
  else if(this.delayCount >= 40 && this.delayCount < 60) this.scale = 3
  else if(this.delayCount >= 60) this.scale = 4
}
ebulletData[ebulletId.lamp].setData(spriteId.enemyLamp, 2, 1, 3, 6, 4)
ebulletData[ebulletId.lamp].move = enemyData[enemyId.E900_lamp].move
ebulletData[ebulletId.plate].setData(spriteId.enemyPlate, 2, 1, 2, 6, 4)
ebulletData[ebulletId.plate].move = enemyData[enemyId.E901_plate].move
ebulletData[ebulletId.purpleLaser].setData(spriteId.unused, 10, 1, 1, 1, 60)
ebulletData[ebulletId.purpleLaser].move = function(){
  this.speedX = -3
  this.attackDelay = 6
  EbulletData.prototype.move.call(this)
  displaySystem.rect(this.x, this.y + 1, this.w * 8 * this.scale, 1, colorId.YELLOW)
  displaySystem.rect(this.x, this.y + 2, this.w * 8 * this.scale, 1, colorId.PURPLE)
  displaySystem.rect(this.x, this.y + 3, this.w * 8 * this.scale, 1, colorId.PURPLE)
  displaySystem.rect(this.x, this.y + 4, this.w * 8 * this.scale, 1, colorId.PURPLE)
  displaySystem.rect(this.x, this.y + 5, this.w * 8 * this.scale, 1, colorId.YELLOW)
  displaySystem.rect(this.x, this.y + 6, this.w * 8 * this.scale, 1, colorId.PURPLE)
  displaySystem.rect(this.x, this.y + 6, this.w * 8 * this.scale, 1, colorId.PURPLE)
}
ebulletData[ebulletId.bigSquare].setData(spriteId.unused, 1, 1, 1, 2, 60)
ebulletData[ebulletId.bigSquare].move = function(){
  this.attackDelay = 6
  var INDEX_X = 0
  var INDEX_Y = 1
  if(this.tempInitCheck()){
    this.tempArray[INDEX_X] = this.x
    this.tempArray[INDEX_Y] = this.y
  }

  var size = Math.floor(this.delayCount / 16) + 1
  if(size > 10) size = 10
  var pixel = this.delayCount + 1
  if(pixel > 80) pixel = 80

  if(this.delayCount <= 159){
    this.x = this.tempArray[INDEX_X] - (pixel / 2)
    this.y = this.tempArray[INDEX_Y] - (pixel / 2)
  } else if(this.delayCount == 160){
    enemyFunction.moveChase.call(this, 120)
  }

  displaySystem.rect(this.x, this.y, pixel, pixel, colorId.PURPLE)
  displaySystem.strokeRect(this.x - 1, this.y - 1, pixel, pixel + 2, colorId.YELLOW)
  this.scale = size
  EbulletData.prototype.move.call(this)
}
ebulletData[ebulletId.greyArea].setData(0, 30, 17, 1, 10, 10000)
ebulletData[ebulletId.greyArea].move = function(){
  var deathX = fieldSize.FIELD_X - (this.delayCount / 6)
  if(deathX < 0) deathX = 0
  this.outAreaFrame = 0
  this.attackDelay = 10
  this.x = deathX
  this.y = 0
  displaySystem.rect(this.x, this.y, 2, fieldSize.FIELD_Y, colorId.WHITE)
  displaySystem.rect(this.x + 2, this.y, 2, fieldSize.FIELD_Y, colorId.LIGHT_GREY)
  displaySystem.rect(this.x + 4, this.y, 2, fieldSize.FIELD_Y, colorId.GREY)
  displaySystem.rect(this.x + 6, this.y, fieldSize.FIELD_X, fieldSize.FIELD_Y, colorId.DARK_GREY)
  if(fieldSystem.getUsingCount(fieldSystem.enemy, enemyId.E3A00_superLever) <= 0) this.init()
}

})()

function EffectData(){}
EffectData.prototype = new FieldObject()
EffectData.prototype.process = function(){
  
}
var effectFunction = new EffectData()
effectFunction.process = function(){
  this.delayCount++
  if(this.delayCount >= 0) this.spriteId = this.tempNumber + (this.delayCount % 8)
  else this.spriteId = 0

  if(this.delayCount >= 24) this.init()
}

function RoundData(){
  this.spriteId = 0
  this.roundText = ''
  this.finishTime = 100
  this.clearBonus = 0
  this.backgroundNumber = 0
  this.bossId = 0
  this.bossTime = 0
  this.recommendLevel = 0
  this.recommendAttack = 0
}
RoundData.prototype.process = function(){
  displaySystem.text('this round is no data.', 0, 0)
  var time = this.getTime()
  if(time >= 3) mainSystem.mode = mainSystem.modeString.MAINMENU
}
RoundData.prototype.setData = function(spriteId, backgroundNumber, roundText, finishTime, clearBonus, recommendLevel, recommendAttack){
  this.spriteId = spriteId
  this.backgroundNumber = backgroundNumber
  this.roundText = roundText
  this.finishTime = finishTime
  this.clearBonus = clearBonus
  this.bossTime = finishTime - 4
  this.recommendLevel = recommendLevel
  this.recommendAttack = recommendAttack
}
RoundData.prototype.setBossData = function(enemyId, bossTime){
  this.bossId = enemyId
  this.bossTime = bossTime
}
RoundData.prototype.getTimeData = function(){
  return {
    time:fieldSystem.round.time,
    frame:fieldSystem.round.frame,
    totalFrame:fieldSystem.round.totalFrame
  }
}
RoundData.prototype.setTime = function(timeValue){
  fieldSystem.round.time = timeValue
}
RoundData.prototype.getTime = function(){
  return fieldSystem.round.time
}
RoundData.prototype.getBossMode = function(){
  return fieldSystem.round.isBossMode
}
RoundData.prototype.setBossMode = function(boolValue){
  boolValue = typeof boolValue === 'undefined' ? true : boolValue
  fieldSystem.requestBossMode(boolValue)
}
RoundData.prototype.bossMeterView = function(enemyIdValue, meterText){
  meterText = typeof meterText == 'undefined' ? 'ENEMY HP: ' : meterText
  var count = 0
  for(var i = 0; i < fieldSystem.enemy.length; i++){
    var enemy = fieldSystem.enemy[i]
    if(enemy.isUsing && enemy.idValue == enemyIdValue){
      displaySystem.meterText(meterText, colorId.LIGHT_GREEN, enemy.hp, enemy.hpMax, 0, (8*count), 240, 8, colorId.DARK_GREEN, colorId.DARK_GREY, colorId.DARK_GREY)
      count++
    }
  }
}
RoundData.prototype.noEnemyCheck = function(enemyId){
  if(typeof enemyId === 'undefined'){
    if(fieldSystem.getUsingCount(fieldSystem.enemy) <= 0) return true
    else return false
  } else {
    if(fieldSystem.getUsingCount(fieldSystem.enemy, enemyId) <= 0) return true
    else return false
  }
}
RoundData.prototype.setFlag = function(value){
  fieldSystem.round.flagNumber = value
}
RoundData.prototype.hasEnemyTimeStop = function(minTime, maxTime){
  if(typeof minTime == 'undefined') return
  maxTime = typeof maxTime == 'undefined' ? minTime : maxTime
  var time = fieldSystem.round.time
  if(time >= minTime && time <= maxTime){
    !this.noEnemyCheck() ? fieldSystem.requestTimeStop(true) : fieldSystem.requestTimeStop(false)
  }
}
RoundData.prototype.bossPrevHasEnemyTimeStop = function(){
  var time = fieldSystem.round.time
  if(time >= this.bossTime - 2 && time < this.bossTime - 1){
    !this.noEnemyCheck() ? fieldSystem.requestTimeStop(true) : fieldSystem.requestTimeStop(false)
  }
}
RoundData.prototype.bossProcess = function(){
  var time = this.getTime()
  if(time == this.bossTime){
    if(!this.getBossMode() && this.bossId){
      fieldSystem.insertEnemy(this.bossId)
      this.startBossMode()
    } else if(this.getBossMode() && this.noEnemyCheck()){
      soundSystem.requestPush(enemyData[this.bossId].dieSoundId, 10, 12)
      this.fieldEffectInsert(enemyData[this.bossId].dieSoundId, 10, 12)
      this.endBossMode()
    }
    this.bossMeterView(this.bossId)
  }
}
RoundData.prototype.startBossMode = function(){
  if(!this.getBossMode()){
    fieldSystem.requestTimeStop(true)
    fieldSystem.requestBossMode(true)
    this.setBossMode(true)
  }
}
RoundData.prototype.endBossMode = function(){
  fieldSystem.requestTimeStop(false)
  fieldSystem.requestBossMode(false)
  this.setTime(this.getTime() + 1)
  this.setBossMode(false)
}
RoundData.prototype.getFlag = function(){
  return fieldSystem.round.flagNumber
}
RoundData.prototype.fieldEffectInsert = function(enemyDieSound, repeatCount, delay){
  repeatCount = typeof repeatCount == 'undefined' ? 1 : repeatCount
  delay = typeof delay == 'undefined' ? 0 : delay
  for(var i = 0; i < repeatCount; i++){
    var randomX = mySystem.random(0, fieldSize.FIELD_X - 32)
    var randomY = mySystem.random(0, fieldSize.FIELD_Y - 32)
    fieldSystem.insertEffectByEnemySound(enemyDieSound, randomX, randomY, 4, (delay * i))
  }
}
RoundData.prototype.fieldEnemyInsert = function(enemyIdValue, delay, enemyLimit, fieldEnemyLimit){
  if(enemyIdValue == null) return
  delay = typeof delay == 'undefined' ? 60 : delay
  enemyLimit = typeof enemyLimit == 'undefined' ? fieldSystem.enemy.length : enemyLimit
  fieldEnemyLimit = typeof fieldEnemyLimit == 'undefined' ? fieldSystem.enemy.length : fieldEnemyLimit
  var enemyCount = fieldSystem.getUsingCount(fieldSystem.enemy, enemyIdValue)
  var fieldEnemyCount = fieldSystem.getUsingCount(fieldSystem.enemy)
  var d = fieldSystem.round.totalFrame
  if(enemyCount < enemyLimit && fieldEnemyCount < fieldEnemyLimit && d % delay == 0){
    fieldSystem.insertEnemy(enemyIdValue)
  }
}

var roundData = [new RoundData()]
for(i = 0; i < 36; i++) roundData.push(new RoundData())
;(function roundDataInput(){

roundData[roundId.test].setData(spriteId.roundTestBox, 0, 'TEST', 60, 0, 0, 0)
roundData[roundId.test].setBossData(enemyId.E605_bossPotion, 2)
roundData[roundId.test].process = function(){
  var time = this.getTimeData().time
  this.bossMeterView(enemyId.TEST)
  if(time >= 3 && fieldSystem.getUsingCount(fieldSystem.enemy) < 1){
    fieldSystem.insertEnemy(enemyId.TEST)
    fieldSystem.requestTimeStop(true)
  }

  var areaExit = {x:40, y:112, w:5, h:1, scale:1}
  var areaReset = {x:0, y:112, w:5, h:1, scale:1}
  if(fieldSystem.collision(areaExit, playerSystem)){
    mainSystem.mode = mainSystem.modeString.MAINMENU
  } else if(fieldSystem.collision(areaReset, playerSystem)){
    fieldSystem.requestAllEnemyDelete()
    playerSystem.init()
  }
  displaySystem.rect(areaExit.x, areaExit.y, areaExit.w * 8, areaExit.h * 8, colorId.DARK_GREY)
  displaySystem.text('>>EXIT<', areaExit.x, areaExit.y, colorId.WHITE, 1)
  displaySystem.rect(areaReset.x, areaReset.y, areaReset.w * 8, areaReset.h * 8, colorId.LIGHT_GREEN)
  displaySystem.text('-RESET-', areaReset.x, areaReset.y, colorId.DARK_GREEN, 1)
  if(time <= 20){
    displaySystem.smallText('RESET square: player skill cooltime 0 and enemy hp reset.', 0, 96, colorId.WHITE)
    displaySystem.smallText('EXIT square: go to main menu', 0, 104, colorId.WHITE)
  }
}
roundData[roundId.r1_1].setData(spriteId.r1_1, 1, '1-1', 70, 40000, 0, 100)
roundData[roundId.r1_1].setBossData(enemyId.E108_bossBullon, 66)
roundData[roundId.r1_1].process = function(){
  var time = this.getTime()
  if(time >= 2 && time <= 8) this.fieldEnemyInsert(enemyId.E100_bullonRed, 30)
  else if(time >= 9 && time <= 16) this.fieldEnemyInsert(enemyId.E101_bullonBlue, 30)
  else if(time >= 17 && time <= 24) this.fieldEnemyInsert(enemyId.E102_drinkWater, 30)
  else if(time >= 25 && time <= 32) this.fieldEnemyInsert(enemyId.E103_drinkEnergy, 30)
  else if(time >= 33 && time <= 37) this.fieldEnemyInsert(enemyId.E104_rocketA, 30)
  else if(time >= 38 && time <= 42) this.fieldEnemyInsert(enemyId.E105_rocketB, 30)
  else if(time >= 43 && time <= 51) this.fieldEnemyInsert(enemyId.E106_drawer)
  else if(time >= 52 && time <= 62) this.fieldEnemyInsert(enemyId.E107_sungglasses)

  this.bossPrevHasEnemyTimeStop()
  if(time == this.bossTime) this.bossProcess()
  if(time > 0 && time < this.bossTime) soundSystem.musicPlay(musicId.r1_1)
  if(time == this.bossTime) !this.noEnemyCheck() ? soundSystem.musicPlay(musicId.r1_b) : soundSystem.musicStop()
}
roundData[roundId.r1_2].setData(spriteId.r1_2, 2, '1-2', 85, 44500, 0, 120)
roundData[roundId.r1_2].setBossData(enemyId.E114_bossVendingMachine, 81)
roundData[roundId.r1_2].process = function(){
  var time = this.getTime()
  if(time >= 2 && time <= 8) this.fieldEnemyInsert(enemyId.E110_bigCar)
  else if(time >= 9 && time <= 16) this.fieldEnemyInsert(enemyId.E111_bigBall)
  else if(time >= 17 && time <= 24) this.fieldEnemyInsert(enemyId.E112_bigBox)
  else if(time >= 25 && time <= 32) this.fieldEnemyInsert(enemyId.E113_bigRedMonster)
  else if(time >= 33 && time <= 45){
    this.fieldEnemyInsert(enemyId.E100_bullonRed, 120, 6, 21)
    this.fieldEnemyInsert(enemyId.E101_bullonBlue, 120, 6, 21)
    this.fieldEnemyInsert(enemyId.E102_drinkWater, 120, 6, 21)
    this.fieldEnemyInsert(enemyId.E103_drinkEnergy, 120, 6, 21)
  } else if(time >= 46 && time <= 60){
    this.fieldEnemyInsert(enemyId.E110_bigCar, 90, 6, 16)
    this.fieldEnemyInsert(enemyId.E111_bigBall, 90, 6, 16)
    this.fieldEnemyInsert(enemyId.E112_bigBox, 150, 6, 16)
    this.fieldEnemyInsert(enemyId.E106_drawer, 150, 6, 16)
    this.fieldEnemyInsert(enemyId.E107_sungglasses, 90, 6, 16)
  } else if(time >= 61 && time <= 76){
    this.fieldEnemyInsert(enemyId.E113_bigRedMonster, 90, 6, 6)
    this.fieldEnemyInsert(enemyId.E111_bigBall, 90, 6, 6)
  }

  this.bossPrevHasEnemyTimeStop()
  if(time == this.bossTime) this.bossProcess()
  if(time > 0 && time < this.bossTime) soundSystem.musicPlay(musicId.r1_2)
  if(time == this.bossTime) !this.noEnemyCheck() ? soundSystem.musicPlay(musicId.r1_b) : soundSystem.musicStop()
}
roundData[roundId.r1_3].setData(spriteId.r1_3, 3, '1-3', 85, 48000, 1, 120)
roundData[roundId.r1_3].setBossData(enemyId.E125_bossTrafficLight, 81)
roundData[roundId.r1_3].process = function(){
  var getTime = this.getTimeData()
  var time = getTime.time
  var frame = getTime.frame
  var random = mySystem.random

  if(time >= 2 && time <= 12){
    this.fieldEnemyInsert(enemyId.E120_streetLight)
    this.fieldEnemyInsert(enemyId.E121_utilityPole, 120)
  } else if(time >= 13 && time <= 24){
    this.fieldEnemyInsert(enemyId.E122_car, 120)
    this.fieldEnemyInsert(enemyId.E123_bus, 120)
  } else if(time >= 25 && time <= 26){
    this.fieldEnemyInsert(enemyId.E124_bigVendingMachine, 60)
  } else if(time >= 31 && time <= 45){
    if(frame % 90 == 0){
      fieldSystem.insertEnemy(enemyId.E100_bullonRed, 265, random(0, 20))
      fieldSystem.insertEnemy(enemyId.E101_bullonBlue, 265, random(100, 120))
    }
    this.fieldEnemyInsert(enemyId.E111_bigBall, 90, 4)
    this.fieldEnemyInsert(enemyId.E120_streetLight, 90, 4)
  } else if(time >= 46 && time <= 60){
    this.fieldEnemyInsert(enemyId.E110_bigCar, 120, 4)
    this.fieldEnemyInsert(enemyId.E122_car, 90, 4)
    this.fieldEnemyInsert(enemyId.E123_bus, 90, 2)
    this.fieldEnemyInsert(enemyId.E121_utilityPole, 180, 2)
  } else if(time >= 61 && time <= 76){
    if(time == 66 && frame >= 0 && frame <= 4){
      fieldSystem.insertEnemy(enemyId.E124_bigVendingMachine, 265, 20)
    }
    if(time == 73){
      this.fieldEnemyInsert(enemyId.E107_sungglasses, 20, 4)
      this.fieldEnemyInsert(enemyId.E107_sungglasses, 20, 4)
    }
    this.fieldEnemyInsert(enemyId.E123_bus, 120, 4)
    this.fieldEnemyInsert(enemyId.E121_utilityPole, 180, 8)
  }

  this.bossPrevHasEnemyTimeStop()
  if(time == this.bossTime){
    this.bossMeterView(this.bossId)
    if(!this.getBossMode()){
      fieldSystem.insertEnemy(this.bossId)
      this.startBossMode()
    } else if(this.getBossMode() && fieldSystem.getUsingCount(fieldSystem.enemy, this.bossId) <= 0){
      this.endBossMode()
      soundSystem.requestPush(enemyData[this.bossId].dieSoundId, 12, 10)
      this.fieldEffectInsert(enemyData[this.bossId].dieSoundId, 12, 10)
      soundSystem.musicStop()
    }
  }
  if(time > 0 && time < this.bossTime) soundSystem.musicPlay(musicId.r1_3)
  if(time == this.bossTime) !this.noEnemyCheck() ? soundSystem.musicPlay(musicId.r1_b) : soundSystem.musicStop()
}
roundData[roundId.r2_1].setData(spriteId.r2_1, 4, '2-1', 70, 50000, 8, 140)
roundData[roundId.r2_1].setBossData(enemyId.E206_bossBox, 66)
roundData[roundId.r2_1].process = function(){
  var time = this.getTime()
  if(time >= 1 && time <= 10){
    this.fieldEnemyInsert(enemyId.E200_hammer, 100)
    this.fieldEnemyInsert(enemyId.E201_torch, 100)
  } else if(time >= 10 && time <= 20){
    this.fieldEnemyInsert(enemyId.E203_bigStone, 60)
  } else if(time >= 20 && time <= 30){
    this.fieldEnemyInsert(enemyId.E205_bigBlueMonster, 120)
    this.fieldEnemyInsert(enemyId.E113_bigRedMonster, 120)
  } else if(time >= 30 && time <= 40){
    this.fieldEnemyInsert(enemyId.E200_hammer, 100, 6)
    this.fieldEnemyInsert(enemyId.E201_torch, 100, 5)
    this.fieldEnemyInsert(enemyId.E203_bigStone, 100, 5)
    this.fieldEnemyInsert(enemyId.E205_bigBlueMonster, 100, 4)
  } else if(time >= 40 && time <= 50){
    this.fieldEnemyInsert(enemyId.E204_brokenStone, 180, 4)
    this.fieldEnemyInsert(enemyId.E201_torch, 100, 8)
    this.fieldEnemyInsert(enemyId.E205_bigBlueMonster, 100, 6)
  } else if(time >= 50 && time <= 62){
    this.fieldEnemyInsert(enemyId.E200_hammer, 100, 2)
    this.fieldEnemyInsert(enemyId.E204_brokenStone, 180, 5)
    this.fieldEnemyInsert(enemyId.E203_bigStone, 100, 6)
  }

  this.bossPrevHasEnemyTimeStop()
  if(time == this.bossTime) this.bossProcess()
  if(time > 0 && time < this.bossTime) soundSystem.musicPlay(musicId.r2_1)
  if(time == this.bossTime) !this.noEnemyCheck() ? soundSystem.musicPlay(musicId.r1_b) : soundSystem.musicStop()
}
roundData[roundId.r2_2].setData(spriteId.enemyDiamond, 5, '2-2', 90, 53900, 12, 160)
roundData[roundId.r2_2].setBossData(enemyId.E217_bossTreasureChest, 86)
roundData[roundId.r2_2].process = function(){
  var time = this.getTime()
  if(time >= 1 && time <= 14){
    this.fieldEnemyInsert(enemyId.E210_garnet, 120, 4)
    this.fieldEnemyInsert(enemyId.E211_amethyst, 120, 4)
    this.fieldEnemyInsert(enemyId.E212_emerald, 120, 4)
    this.fieldEnemyInsert(enemyId.E213_sapphire, 120, 4)
  } else if(time >= 15 && time <= 23){
    this.fieldEnemyInsert(enemyId.E214_gold, 120, 4)
    this.fieldEnemyInsert(enemyId.E215_silver, 120, 4)
  } else if(time >= 24 && time <= 31){
    this.fieldEnemyInsert(enemyId.E216_diamond, 60, 4)
  } else if(time >= 30 && time <= 70){
    this.fieldEnemyInsert(enemyId.E200_hammer, 120, 6)
    this.fieldEnemyInsert(enemyId.E218_drill, 120, 6)
    if(time >= 41 && time <= 53){
      this.fieldEnemyInsert(enemyId.E210_garnet, 120, 2)
      this.fieldEnemyInsert(enemyId.E211_amethyst, 120, 2)
      this.fieldEnemyInsert(enemyId.E212_emerald, 120, 2)
      this.fieldEnemyInsert(enemyId.E213_sapphire, 120, 2)
      this.fieldEnemyInsert(enemyId.E214_gold, 120, 2)
      this.fieldEnemyInsert(enemyId.E215_silver, 120, 2)
    } else if(time >= 56 && time <= 66){
      this.fieldEnemyInsert(enemyId.E216_diamond, 30, 4)
    }
  } else if(time >= 71 && time <= 82){
    this.fieldEnemyInsert(enemyId.E214_gold, 120)
    this.fieldEnemyInsert(enemyId.E215_silver, 120)
    this.fieldEnemyInsert(enemyId.E216_diamond, 120)
    if(time == 71) this.fieldEnemyInsert(enemyId.E210_garnet, 10)
    if(time == 74) this.fieldEnemyInsert(enemyId.E211_amethyst, 10)
    if(time == 77) this.fieldEnemyInsert(enemyId.E212_emerald, 10)
    if(time == 80) this.fieldEnemyInsert(enemyId.E213_sapphire, 10)
  }

  this.bossPrevHasEnemyTimeStop()
  if(time == this.bossTime) this.bossProcess()
  if(time > 0 && time < this.bossTime) soundSystem.musicPlay(musicId.r2_2)
  if(time == this.bossTime) !this.noEnemyCheck() ? soundSystem.musicPlay(musicId.r1_b) : soundSystem.musicStop()
}
roundData[roundId.r2_3].setData(spriteId.enemyEnergyCart, 6, '2-3', 100, 59300, 12, 160)
roundData[roundId.r2_3].setBossData(enemyId.E224_bossCart, 96)
roundData[roundId.r2_3].process = function(){
  var getTime = this.getTimeData()
  var time = getTime.time
  var totalFrame = getTime.totalFrame

  if(time >= 1 && time <= 50){
    this.fieldEnemyInsert(enemyId.E210_garnet, 120, 1)
    this.fieldEnemyInsert(enemyId.E211_amethyst, 120, 1)
    this.fieldEnemyInsert(enemyId.E212_emerald, 120, 1)
    this.fieldEnemyInsert(enemyId.E213_sapphire, 120, 1)
    this.fieldEnemyInsert(enemyId.E214_gold, 180, 1)
    this.fieldEnemyInsert(enemyId.E215_silver, 180, 1)
    this.fieldEnemyInsert(enemyId.E216_diamond, 240, 1)
    if(time >= 5 && time <= 11) this.fieldEnemyInsert(enemyId.E220_cart, 120, 4)
    else if(time >= 12 && time <= 20) this.fieldEnemyInsert(enemyId.E221_bigCart, 120, 4)
    else if(time >= 21 && time <= 28) this.fieldEnemyInsert(enemyId.E222_magnet, 120, 4)
    else if(time >= 29 && time <= 36) this.fieldEnemyInsert(enemyId.E223_bus, 120, 4)
    else if(time >= 37 && time <= 44) this.fieldEnemyInsert(enemyId.E220_cart, 120, 4)
    else if(time >= 45 && time <= 50) this.fieldEnemyInsert(enemyId.E218_drill, 120, 4)

  } else if(time >= 51 && time <= 64){
    this.fieldEnemyInsert(enemyId.E201_torch, 120)
    this.fieldEnemyInsert(enemyId.E113_bigRedMonster, 120)
    this.fieldEnemyInsert(enemyId.E205_bigBlueMonster, 120)
  } else if(time >= 65 && time <= 75){
    this.fieldEnemyInsert(enemyId.E220_cart, 180, 3)
    this.fieldEnemyInsert(enemyId.E221_bigCart, 180, 3)
    this.fieldEnemyInsert(enemyId.E222_magnet, 180, 3)
    this.fieldEnemyInsert(enemyId.E223_bus, 180, 3)
    this.fieldEnemyInsert(enemyId.E200_hammer, 180, 3)
    this.fieldEnemyInsert(enemyId.E218_drill, 180, 3)
  } else if(time >= 76 && time <= 92){
    this.fieldEnemyInsert(enemyId.E220_cart, 180, 3)
    this.fieldEnemyInsert(enemyId.E221_bigCart, 180, 2)
    this.fieldEnemyInsert(enemyId.E222_magnet, 180, 2)
    this.fieldEnemyInsert(enemyId.E223_bus, 180, 2)
    this.fieldEnemyInsert(enemyId.E210_garnet, 120, 1)
    this.fieldEnemyInsert(enemyId.E211_amethyst, 120, 1)
    this.fieldEnemyInsert(enemyId.E212_emerald, 120, 88, 1)
    this.fieldEnemyInsert(enemyId.E213_sapphire, 120, 88, 1)

    if(time == 80) this.fieldEnemyInsert(enemyId.E223_bus, 10)
    if(time == 81) this.fieldEnemyInsert(enemyId.E214_gold, 10)
    if(time == 83) this.fieldEnemyInsert(enemyId.E222_magnet, 10)
    if(time == 85) this.fieldEnemyInsert(enemyId.E222_magnet, 10)
  }

  this.bossPrevHasEnemyTimeStop()
  if(time == this.bossTime){
    if(!this.getBossMode()) fieldSystem.insertEnemy(this.bossId)
    this.bossProcess()
    if(totalFrame % 240 == 0 && fieldSystem.getUsingCount(fieldSystem.ebullet, ebulletId.cart) < 1){
      fieldSystem.insertEbullet(ebulletId.cart, fieldSize.FIELD_X, fieldSize.FIELD_Y - 32)
    }
  }
  if(time > 0 && time < this.bossTime) soundSystem.musicPlay(musicId.r2_3)
  if(time == this.bossTime) !this.noEnemyCheck() ? soundSystem.musicPlay(musicId.r1_b) : soundSystem.musicStop()
}
roundData[roundId.r3_1].setData(spriteId.enemyRobotRed, 7, '3-1', 120, 90200, 20, 200)
roundData[roundId.r3_1].setBossData(enemyId.E310_bossRobotA, 116)
roundData[roundId.r3_1].process = function(){
  var getTime = this.getTimeData()
  var time = getTime.time
  var frame = getTime.frame
  var random = mySystem.random

  if(time >= 2 && time <= 20){
    if(time == 2) this.fieldEnemyInsert(enemyId.E300_robotRed, 10)
    if(time == 8) this.fieldEnemyInsert(enemyId.E301_robotBlue, 10)
    if(time == 10) this.fieldEnemyInsert(enemyId.E302_robotGreen, 30)
    if(time == 14) this.fieldEnemyInsert(enemyId.E303_robotWhite, 10)
  } else if(time >= 21 && time <= 35){
    this.fieldEnemyInsert(enemyId.E304_metalRed, 20, 25, 25)
    if(time == 24 || time == 28 || time == 32) this.fieldEnemyInsert(enemyId.E304_metalRed, 10)
  } else if(time >= 36 && time <= 60){
    this.fieldEnemyInsert(enemyId.E300_robotRed, 150, 4)
    this.fieldEnemyInsert(enemyId.E301_robotBlue, 150, 4)
    this.fieldEnemyInsert(enemyId.E302_robotGreen, 150, 1)
    this.fieldEnemyInsert(enemyId.E303_robotWhite, 150, 4)
    if(time >= 51) this.fieldEnemyInsert(enemyId.E304_metalRed, 60, 4)
  } else if(time >= 61 && time <= 67){
    this.fieldEnemyInsert(enemyId.E307_outlet, 60, 8)
  } else if(time >= 68 && time <= 78){
    this.fieldEnemyInsert(enemyId.E308_electronicA, 120, 8)
    this.fieldEnemyInsert(enemyId.E309_electronicB, 120, 8)
  } else if(time >= 79 && time <= 85){
    this.fieldEnemyInsert(enemyId.E307_outlet, 120)
    this.fieldEnemyInsert(enemyId.E308_electronicA, 120)
    this.fieldEnemyInsert(enemyId.E309_electronicB, 120)
  } else if(time >= 88 && time <= 90){
    if(frame % 20 == 0) fieldSystem.insertEnemy(enemyId.E308_electronicA, 265, random(0, 20))
    if(frame % 20 == 0) fieldSystem.insertEnemy(enemyId.E309_electronicB, 265, random(90, 110))
  } else if(time >= 94 && time <= 112){
    this.fieldEnemyInsert(enemyId.E300_robotRed, 180, 2)
    this.fieldEnemyInsert(enemyId.E301_robotBlue, 180+2, 2)
    this.fieldEnemyInsert(enemyId.E302_robotGreen, 210+3, 1)
    this.fieldEnemyInsert(enemyId.E303_robotWhite, 210+4, 2)
    this.fieldEnemyInsert(enemyId.E304_metalRed, 40, 2)
    this.fieldEnemyInsert(enemyId.E307_outlet, 240+6, 1)
    this.fieldEnemyInsert(enemyId.E308_electronicA, 240+7, 1)
    this.fieldEnemyInsert(enemyId.E309_electronicB, 240+8, 1)
  }
  this.hasEnemyTimeStop(114)

  if(time == this.bossTime){
    if(!this.getBossMode()){
      fieldSystem.insertEnemy(enemyId.E310_bossRobotA)
      fieldSystem.insertEnemy(enemyId.E311_bossRobotB)
      fieldSystem.insertEnemy(enemyId.E312_bossRobotC)
      fieldSystem.insertEnemy(enemyId.E313_bossRobotD)
      this.startBossMode()
    } else if(this.noEnemyCheck() && this.getBossMode()){
      for(i = 0; i < 3; i++){
        soundSystem.requestPush(soundId.enemyDieRobotA, 2, 10)
        soundSystem.requestPush(soundId.enemyDieRobotB, 2, 10)
      }
      this.endBossMode()
      this.fieldEffectInsert(enemyData[this.bossId].dieSoundId, 12, 10)
    }

    for(var i = 0; i < fieldSystem.enemy.length; i++){
      var enemy = fieldSystem.enemy[i]
      switch(enemy.idValue){
        case enemyId.E310_bossRobotA: displaySystem.meterText('ROBOT HP:', colorId.YELLOW, enemy.hp, enemy.hpMax, 0, 0, 120, 6, colorId.RED, colorId.DARK_GREY); break
        case enemyId.E311_bossRobotB: displaySystem.meterText('ROBOT HP:', colorId.CYAN, enemy.hp, enemy.hpMax, 120, 0, 120, 6, colorId.DARK_BLUE, colorId.DARK_GREY); break
        case enemyId.E312_bossRobotC: displaySystem.meterText('ROBOT HP:', colorId.LIGHT_GREEN, enemy.hp, enemy.hpMax, 0, 6, 120, 6, colorId.DARK_GREEN, colorId.DARK_GREY); break
        case enemyId.E313_bossRobotD: displaySystem.meterText('ROBOT HP:', colorId.WHITE, enemy.hp, enemy.hpMax, 120, 6, 120, 6, colorId.GREY, colorId.DARK_GREY); break
      }
    }
  }
  if(time > 0 && time < this.bossTime) soundSystem.musicPlay(musicId.r3_1)
  if(time == this.bossTime) !this.noEnemyCheck() ? soundSystem.musicPlay(musicId.r3_b) : soundSystem.musicStop()
}
roundData[roundId.r3_2].setData(spriteId.enemyComputerBooting, 8, '3-2',  40, 91000, 20, 200)
roundData[roundId.r3_2].process = function(){
  var time = this.getTime()
  var sectionTime = [31, 32, 33, 34, 35]

  if(time >= 1 && time <= sectionTime[0] - 4){
    this.fieldEnemyInsert(enemyId.E308_electronicA, 80)
    this.fieldEnemyInsert(enemyId.E309_electronicB, 80)
  }
  this.hasEnemyTimeStop(sectionTime[0] - 3)

  if(sectionTime.indexOf(time) != -1){
    if(!this.getBossMode()){
      switch(time){
        case sectionTime[0]: fieldSystem.insertEnemy(enemyId.E320_bossComputer1); break
        case sectionTime[1]: fieldSystem.insertEnemy(enemyId.E321_bossComputer2); break
        case sectionTime[2]: fieldSystem.insertEnemy(enemyId.E322_bossComputer3); break
        case sectionTime[3]: fieldSystem.insertEnemy(enemyId.E323_bossComputer4); break
        case sectionTime[4]: fieldSystem.insertEnemy(enemyId.E324_bossComputer5); break
      }
      this.startBossMode()
    } else if(this.noEnemyCheck() && this.getBossMode()){
      this.endBossMode()
    }
  }

  if(time == sectionTime[sectionTime.length - 1] + 1 && this.getFlag() != 5){
    soundSystem.requestPush(soundId.enemyDieBig, 12, 10)
    this.fieldEffectInsert(soundId.enemyDieBig, 12, 10)
    this.setFlag(5)
  }

  switch(time){
    case sectionTime[0]: this.bossMeterView(enemyId.E320_bossComputer1, 'COMPUTER?? SYSTEM HP: '); break
    case sectionTime[1]: this.bossMeterView(enemyId.E321_bossComputer2, 'BOOTING... SYSTEM HP: '); break
    case sectionTime[2]: this.bossMeterView(enemyId.E322_bossComputer3, 'RUNNING... SYSTEM HP: '); break
    case sectionTime[3]: this.bossMeterView(enemyId.E323_bossComputer4, 'ERROR!!!!! SYSTEM HP: '); break
    case sectionTime[4]: this.bossMeterView(enemyId.E324_bossComputer5, 'DESTROYED. SYSTEM HP: '); break
  }

  if(time > 0 && time <= sectionTime[0]) soundSystem.musicPlay(musicId.r3_2)
  else if(time == sectionTime[1]) soundSystem.musicPlay(musicId.r1_b)
  else if(time >= sectionTime[2] && time <= sectionTime[4]) soundSystem.musicPlay(musicId.r3_b)
  else if(time > sectionTime[4]) soundSystem.musicStop()
}
roundData[roundId.r3_3].setData(spriteId.r3_3, 9, '3-3', 135, 107500, 24, 200)
roundData[roundId.r3_3].setBossData(enemyId.E340_bossLever, 120)
roundData[roundId.r3_3].process = function(){
  var getTime = this.getTimeData()
  var time = getTime.time
  var frame = getTime.frame
  
  if(time >= 1 && time <= 20){
    if(time >= 2 && time <= 3 && frame % 60 == 0){
      fieldSystem.insertEnemy(enemyId.E300_robotRed, 240, 120)
      fieldSystem.insertEnemy(enemyId.E330_machineBall, 255, mySystem.random(0, 24))
      fieldSystem.insertEnemy(enemyId.E330_machineBall, 275, mySystem.random(0, 24))
    }
    if(time >= 8 && time <= 9 && frame % 60 == 0){
      fieldSystem.insertEnemy(enemyId.E301_robotBlue, 240, 120)
      fieldSystem.insertEnemy(enemyId.E331_machineCar, 255, mySystem.random(0, 60))
      fieldSystem.insertEnemy(enemyId.E331_machineCar, 275, mySystem.random(60, 120))
    }
    if(time >= 14 && time <= 15 && frame % 60 == 0){
      fieldSystem.insertEnemy(enemyId.E303_robotWhite, 240, 120)
      fieldSystem.insertEnemy(enemyId.E332_machineBox, 255, mySystem.random(0, 60))
      fieldSystem.insertEnemy(enemyId.E332_machineBox, 275, mySystem.random(60, 120))
    }
  } else if(time >= 21 && time <= 31){
    this.fieldEnemyInsert(enemyId.E106_drawer, 120, 2)
    this.fieldEnemyInsert(enemyId.E304_metalRed, 20, 18)
  } else if(time >= 33 && time <= 44){
    this.fieldEnemyInsert(enemyId.E300_robotRed, 180, 1)
    this.fieldEnemyInsert(enemyId.E301_robotBlue, 180, 2)
    this.fieldEnemyInsert(enemyId.E302_robotGreen, 180, 1)
    this.fieldEnemyInsert(enemyId.E303_robotWhite, 180, 5)
    this.fieldEnemyInsert(enemyId.E330_machineBall, 180, 2)
    this.fieldEnemyInsert(enemyId.E331_machineCar, 180, 2)
    this.fieldEnemyInsert(enemyId.E332_machineBox, 180, 2)
    this.fieldEnemyInsert(enemyId.E106_drawer, 150, 2)
  } else if(time >= 46 && time <= 53){
    this.fieldEnemyInsert(enemyId.E203_bigStone, 120, 5)
    this.fieldEnemyInsert(enemyId.E214_gold, 120, 5)
    this.fieldEnemyInsert(enemyId.E215_silver, 120, 5)
    this.fieldEnemyInsert(enemyId.E220_cart, 120, 4)
  } else if(time >= 55 && time <= 67){
    if(time == 58) this.fieldEnemyInsert(enemyId.E214_gold, 10)
    if(time == 60) this.fieldEnemyInsert(enemyId.E215_silver, 10)
    
    this.fieldEnemyInsert(enemyId.E304_metalRed, 20, 12)
    this.fieldEnemyInsert(enemyId.E220_cart, 120, 4)
  } else if(time >= 70 && time <= 90){
    if(time >= 71 && time <= 78) this.fieldEnemyInsert(enemyId.E301_robotBlue, 77, 4)
    if(time >= 79 && time <= 83) this.fieldEnemyInsert(enemyId.E303_robotWhite, 77, 4)
    this.fieldEnemyInsert(enemyId.E330_machineBall, 247, 4)
    this.fieldEnemyInsert(enemyId.E331_machineCar, 231, 2)
    this.fieldEnemyInsert(enemyId.E332_machineBox, 236, 4)
    this.fieldEnemyInsert(enemyId.E106_drawer, 232, 4)
    this.fieldEnemyInsert(enemyId.E223_bus, 211, 2)
  } else if(time >= 91 && time <= 100){
    this.fieldEnemyInsert(enemyId.E303_robotWhite, 60)
  } else if(time >= 100 && time <= 116 && time % 4 == 0 && frame == 0){
    fieldSystem.insertEnemy(enemyId.E308_electronicA, 255, 0)
    fieldSystem.insertEnemy(enemyId.E309_electronicB, 270, 20)
    fieldSystem.insertEnemy(enemyId.E309_electronicB, 285, 40)
    fieldSystem.insertEnemy(enemyId.E309_electronicB, 255, 120)
    fieldSystem.insertEnemy(enemyId.E309_electronicB, 270, 100)
    fieldSystem.insertEnemy(enemyId.E308_electronicA, 285, 80)
    fieldSystem.insertEnemy(enemyId.E307_outlet)
  }
  this.bossPrevHasEnemyTimeStop()
  if(time == this.bossTime) this.bossProcess()
  if(time > 0 && time < this.bossTime) soundSystem.musicPlay(musicId.r3_1)
  if(time == this.bossTime) !this.noEnemyCheck() ? soundSystem.musicPlay(musicId.r1_b) : soundSystem.musicStop()

  if(time >= 121 && time <= 133 && this.getFlag() == 0){
    this.hasEnemyTimeStop(121)
    if(time == 122 && this.noEnemyCheck()){
      fieldSystem.insertEnemy(enemyId.E341_newRoundLever, 240, 60)
      this.setTime(time + 1)
    }
    this.bossMeterView(enemyId.E341_newRoundLever, 'LEVER ?! HP: ')

    var get = fieldSystem.getIdValueIndexObject(fieldSystem.enemy, enemyId.E341_newRoundLever)
    if(time >= 133){
      if(get != null) get.init()
    } else if(time >= 123 && time <= 132 && get == null){
      this.setFlag(100)
    }
  }

  if(time >= 123 && this.getFlag() >= 100){
    fieldSystem.requestTimeStop(true)
    displaySystem.text('congratulation!', 0, 8, colorId.DARK_BLUE)
    displaySystem.text('round 3-3A ~ round 3-3C unlock', 0, 16, colorId.DARK_BLUE)
    mainSystem.exRound.unlock3A = true
    if(this.getFlag() >= 460){
      this.setTime(134)
      this.setFlag(0)
      fieldSystem.requestTimeStop(false)
    }
    this.setFlag(this.getFlag() + 1)
  }
}
roundData[roundId.r4_1].setData(spriteId.enemyCharacter3, 10, '4-1', 110, 140000, 30, 240)
roundData[roundId.r4_1].setBossData(enemyId.E411_bossCrazyGuy, 102)
roundData[roundId.r4_1].process = function(){
  var time = this.getTime()
  if(time >= 2 && time <= 8) this.fieldEnemyInsert(enemyId.E400_magician)
  else if(time >= 9 && time <= 14) this.fieldEnemyInsert(enemyId.E401_summoner)
  else if(time >= 15 && time <= 22) this.fieldEnemyInsert(enemyId.E402_master, 120)
  else if(time >= 25 && time <= 37) this.fieldEnemyInsert(enemyId.E403_tree, 120)
  else if(time >= 38 && time <= 50){
    this.fieldEnemyInsert(enemyId.E400_magician, 90)
    this.fieldEnemyInsert(enemyId.E401_summoner, 120)
  } else if(time >= 52 && time <= 66){
    this.fieldEnemyInsert(enemyId.E402_master, 90)
  } else if(time >= 61 && time <= 74){
    this.fieldEnemyInsert(enemyId.E406_brickOrange)
    this.fieldEnemyInsert(enemyId.E407_brickDark, 180)
  } else if(time >= 75 && time <= 90){
    this.fieldEnemyInsert(enemyId.E408_brickOrange, 180)
    this.fieldEnemyInsert(enemyId.E410_rocket, 30)
  } else if(time >= 91 && time <= 99){
    this.fieldEnemyInsert(enemyId.E403_tree, 120)
  }

  this.bossPrevHasEnemyTimeStop()
  if(time == this.bossTime) this.bossProcess()
  if(time == this.bossTime + 1) this.setBossMode(false)
  if(time == this.bossTime + 4){
    if(!this.getBossMode()){
      fieldSystem.insertEnemy(enemyId.E412_bossCrazyGuyTotal)
      this.startBossMode()
    } else if(this.noEnemyCheck() && this.getBossMode()){
      soundSystem.requestPush(enemyData[this.bossId].dieSoundId, 20, 6)
      this.fieldEffectInsert(enemyData[this.bossId].dieSoundId, 20, 6)
      this.endBossMode()
    }
    this.bossMeterView(enemyId.E412_bossCrazyGuyTotal, 'WHAT THE... HP: ')
  }

  if(time > 0 && time < this.bossTime) soundSystem.musicPlay(musicId.r4_1)
  if(time == this.bossTime || time == this.bossTime + 4) !this.noEnemyCheck() ? soundSystem.musicPlay(musicId.r1_b) : soundSystem.musicStop()
}
roundData[roundId.r4_2].setData(spriteId.enemyBarracks, 11, '4-2', 120, 121000, 30, 240)
roundData[roundId.r4_2].setBossData(enemyId.E413_bossBarracks, 116)
roundData[roundId.r4_2].process = function(){
  var time = this.getTime()
  if(time >= 1 && time <= 11){
    this.fieldEnemyInsert(enemyId.E406_brickOrange, 150)
    this.fieldEnemyInsert(enemyId.E407_brickDark, 150)
    this.fieldEnemyInsert(enemyId.E414_streetLight, 150)
  } else if(time >= 12 && time <= 22){
    this.fieldEnemyInsert(enemyId.E410_rocket, 30)
  } else if(time >= 23 && time <= 30){
    this.fieldEnemyInsert(enemyId.E408_sculpture, 180)
  } else if(time >= 32 && time <= 80){
    this.fieldEnemyInsert(enemyId.E400_magician, 300)
    this.fieldEnemyInsert(enemyId.E401_summoner, 300)
    this.fieldEnemyInsert(enemyId.E402_master, 360)
    this.fieldEnemyInsert(enemyId.E414_streetLight, 240)

    if(time >= 40 && time <= 48) this.fieldEnemyInsert(enemyId.E403_tree, 240)
    if(time >= 50 && time <= 58) this.fieldEnemyInsert(enemyId.E406_brickOrange, 240)
    if(time >= 60 && time <= 68) this.fieldEnemyInsert(enemyId.E407_brickDark, 240)
  } else if(time >= 81 && time <= 99){
    this.fieldEnemyInsert(enemyId.E402_master, 180)
    this.fieldEnemyInsert(enemyId.E409_sculpturePiece, 20)
  } else if(time >= 100 && time <= 112){
    this.fieldEnemyInsert(enemyId.E406_brickOrange, 180)
    this.fieldEnemyInsert(enemyId.E407_brickDark, 180)
    this.fieldEnemyInsert(enemyId.E410_rocket, 60)
    this.fieldEnemyInsert(enemyId.E408_sculpture, 180)
    this.fieldEnemyInsert(enemyId.E414_streetLight, 180)
  }

  this.bossPrevHasEnemyTimeStop()
  if(time == this.bossTime) this.bossProcess()
  if(time > 0 && time < this.bossTime) soundSystem.musicPlay(musicId.r4_2)
  if(time == this.bossTime) !this.noEnemyCheck() ? soundSystem.musicPlay(musicId.r1_b) : soundSystem.musicStop()
}
roundData[roundId.r4_3].setData(spriteId.enemyBigMaster2, 12, '4-3', 60, 125000, 32, 260)
roundData[roundId.r4_3].setBossData(spriteId.unused, 56)
roundData[roundId.r4_3].process = function(){
  var getTime = this.getTimeData()
  var time = getTime.time
  var enemy
  var sectionTime = [40, 43, 46, 49, 52]
  if(time >= 2 && time <= 8) this.fieldEnemyInsert(enemyId.E400_magician)
  else if(time >= 9 && time <= 15) this.fieldEnemyInsert(enemyId.E401_summoner)
  else if(time == 22 || time == 27) this.fieldEnemyInsert(enemyId.E402_master, 15)
  else if(time >= 30 && time <= 35){
    this.fieldEnemyInsert(enemyId.E400_magician, 90)
    this.fieldEnemyInsert(enemyId.E401_summoner, 90)
    this.fieldEnemyInsert(enemyId.E402_master, 120)
  }
  this.hasEnemyTimeStop(36)

  if(sectionTime.indexOf(time) != -1){
    var getId = 0
    switch (time) {
      case sectionTime[0]: getId = enemyId.E430_bossMagicianFire; break
      case sectionTime[1]: getId = enemyId.E431_bossMagicianIce; break
      case sectionTime[2]: getId = enemyId.E432_bossMagicianShuriken; break
      case sectionTime[3]: getId = enemyId.E433_bossMagicianLeaf; break
      case sectionTime[4]: getId = enemyId.E434_bossMagicianHeal; break
    }
    enemy = fieldSystem.getIdValueIndexObject(fieldSystem.enemy, getId)
    if(enemy != null){
      switch (getId) {
        case enemyId.E430_bossMagicianFire: displaySystem.meterText('FIRE MAGICIAN HP:', colorId.RED, enemy.hp, enemy.hpMax, 0, 0, 240, 8, colorId.ORANGE, colorId.DARK_GREY); break
        case enemyId.E431_bossMagicianIce: displaySystem.meterText('ICE MAGICIAN HP:', colorId.LIGHT_BLUE, enemy.hp, enemy.hpMax, 0, 0, 240, 8, colorId.BLUE, colorId.DARK_GREY); break
        case enemyId.E432_bossMagicianShuriken: displaySystem.meterText('SHURIKEN MAGICIAN HP:', colorId.WHITE, enemy.hp, enemy.hpMax, 0, 0, 240, 8, colorId.GREY, colorId.DARK_GREY); break
        case enemyId.E433_bossMagicianLeaf: displaySystem.meterText('LEAF MAGICIAN HP:', colorId.LIGHT_GREEN, enemy.hp, enemy.hpMax, 0, 0, 240, 8, colorId.GREEN, colorId.DARK_GREY); break
        case enemyId.E434_bossMagicianHeal: displaySystem.meterText('HEALER MAGICIAN HP:', colorId.YELLOW, enemy.hp, enemy.hpMax, 0, 0, 240, 8, colorId.PURPLE, colorId.DARK_GREY); break
      }
    }
    if(!this.getBossMode() && getId != 0){
      fieldSystem.insertEnemy(getId)
      this.startBossMode()
    } else if(this.getBossMode() && this.noEnemyCheck()){
      this.endBossMode()
    }
  }

  if(time == this.bossTime){
    if(!this.getBossMode()){
      fieldSystem.insertEnemy(enemyId.E430_bossMagicianFire)
      fieldSystem.insertEnemy(enemyId.E431_bossMagicianIce)
      fieldSystem.insertEnemy(enemyId.E432_bossMagicianShuriken)
      fieldSystem.insertEnemy(enemyId.E433_bossMagicianLeaf)
      fieldSystem.insertEnemy(enemyId.E434_bossMagicianHeal)
      this.startBossMode()
    } else if(this.getBossMode() && this.noEnemyCheck()){
      this.endBossMode()
      this.setTime(time + 1)
      soundSystem.requestPush(soundId.enemyDieCharacter, 10, 6)
      soundSystem.requestPush(soundId.enemyDieMaster, 10, 6)
      this.fieldEffectInsert(soundId.enemyDieBig, 20, 6)
    }

    displaySystem.rect(0, 0, 240, 6, colorId.DARK_GREY)
    displaySystem.smallText('The party has arrived.', 0, 0, colorId.WHITE)
    for(var i = 0; i < fieldSystem.enemy.length; i++){
      if(!fieldSystem.enemy[i].isUsing) continue
      enemy = fieldSystem.enemy[i]
      enemy.status = 'party'
      switch (enemy.idValue) {
        case enemyId.E430_bossMagicianFire: displaySystem.meterText('HP:', colorId.RED, enemy.hp, enemy.hpMax, 0, 6, 120, 6, colorId.ORANGE, colorId.DARK_GREY); break
        case enemyId.E431_bossMagicianIce: displaySystem.meterText('HP:', colorId.LIGHT_BLUE, enemy.hp, enemy.hpMax, 120, 6, 120, 6, colorId.BLUE, colorId.DARK_GREY); break
        case enemyId.E432_bossMagicianShuriken: displaySystem.meterText('HP:', colorId.WHITE, enemy.hp, enemy.hpMax, 0, 12, 120, 6, colorId.GREY, colorId.DARK_GREY); break
        case enemyId.E433_bossMagicianLeaf: displaySystem.meterText('HP:', colorId.LIGHT_GREEN, enemy.hp, enemy.hpMax, 120, 12, 120, 6, colorId.GREEN, colorId.DARK_GREY); break
        case enemyId.E434_bossMagicianHeal: displaySystem.meterText('HP:', colorId.YELLOW, enemy.hp, enemy.hpMax, 120, 0, 120, 6, colorId.PURPLE, colorId.DARK_GREY); break
      }
    }
  }

  if(time > 0 && time < this.bossTime) soundSystem.musicPlay(musicId.r4_2)
  else if(time == this.bossTime) soundSystem.musicPlay(musicId.r3_b)
  else if(time > this.bossTime) soundSystem.musicStop()
}
roundData[roundId.r4_4].setData(spriteId.enemyBrickOrange, 13, '4-4', 160, 120000, 35, 280)
roundData[roundId.r4_4].setBossData(enemyId.unused, 140)
roundData[roundId.r4_4].process = function(){
  var time = this.getTime()
  if(time >= 1 && time <= 12){
    this.fieldEnemyInsert(enemyId.E403_tree, 120)
  } else if(time >= 13 && time <= 24){
    this.fieldEnemyInsert(enemyId.E406_brickOrange, 90)
    this.fieldEnemyInsert(enemyId.E407_brickDark, 120)
  } else if(time >= 25 && time <= 40){
    this.fieldEnemyInsert(enemyId.E400_magician, 120)
    this.fieldEnemyInsert(enemyId.E401_summoner, 120)
    this.fieldEnemyInsert(enemyId.E402_master, 240)
  } else if(time >= 41 && time <= 55){
    this.fieldEnemyInsert(enemyId.E410_rocket, 30)
  } else if(time >= 56 && time <= 72){
    this.fieldEnemyInsert(enemyId.E414_streetLight, 90)
    this.fieldEnemyInsert(enemyId.E121_utilityPole, 90)
    this.fieldEnemyInsert(enemyId.E415_crazyGuy, 120)
  } else if(time >= 73 && time <= 79){
    this.fieldEnemyInsert(enemyId.E428_barracksBus, 60)
  } else if(time >= 80 && time <= 89){
    this.fieldEnemyInsert(enemyId.E427_barracksRobot, 75)
    this.fieldEnemyInsert(enemyId.E216_diamond, 75)
    this.fieldEnemyInsert(enemyId.E415_crazyGuy, 150)
  } else if(time >= 90 && time <= 110){
    this.fieldEnemyInsert(enemyId.E400_magician, 180)
    this.fieldEnemyInsert(enemyId.E401_summoner, 180)
    this.fieldEnemyInsert(enemyId.E402_master, 180)
    this.fieldEnemyInsert(enemyId.E428_barracksBus, 60)
  } else if(time >= 111 && time <= 125){
    this.fieldEnemyInsert(enemyId.E402_master, 120)
  } else if(time >= 126 && time <= 145){
    this.fieldEnemyInsert(enemyId.E414_streetLight, 180)
    this.fieldEnemyInsert(enemyId.E121_utilityPole, 180)
    this.fieldEnemyInsert(enemyId.E406_brickOrange, 180)
    this.fieldEnemyInsert(enemyId.E407_brickDark, 180)
    this.fieldEnemyInsert(enemyId.E330_machineBall, 180)
    this.fieldEnemyInsert(enemyId.E303_robotWhite, 180)
    this.fieldEnemyInsert(enemyId.E223_bus, 180)
    this.fieldEnemyInsert(enemyId.E415_crazyGuy, 210)
  } else if(time >= 146 && time <= 154){
    this.fieldEnemyInsert(enemyId.E330_machineBall, 120)
    this.fieldEnemyInsert(enemyId.E303_robotWhite, 120)
    this.fieldEnemyInsert(enemyId.E223_bus, 120)
  }
  this.hasEnemyTimeStop(157)
  if(time > 0 && time < 140) soundSystem.musicPlay(musicId.r4_4)
  else if(time >= 141) soundSystem.musicStop()
}
roundData[roundId.r5_1].setData(spriteId.enemyRound5, 14, '5-1', 50, 100000, 38, 290)
roundData[roundId.r5_1].process = function(){
  var time = this.getTime()
  if(time >= 4 && time <= 20){
    this.fieldEnemyInsert(enemyId.E501_bus, 240)
    this.fieldEnemyInsert(enemyId.E502_ball, 240)
    this.fieldEnemyInsert(enemyId.E503_robot, 240)
  }
  if(time >= 30 && time <= 46){
    this.fieldEnemyInsert(enemyId.E501_bus, 240)
    this.fieldEnemyInsert(enemyId.E502_ball, 240)
    this.fieldEnemyInsert(enemyId.E503_robot, 240)
  }

  if(time == 25){
    this.setFlag(this.getFlag() + 1)
    this.bossMeterView(enemyId.E500_round5)
    if(!this.getBossMode()){
      this.fieldEnemyInsert(enemyId.E500_round5)
      this.startBossMode()
    } else if(this.getBossMode() && this.noEnemyCheck(enemyId.E500_round5)){
      if(this.getFlag() <= 590){
        this.setTime(30)
        this.setFlag(1000)
      }
      this.endBossMode()
    }
  }

  if(time >= 30 && time <= 45 && this.getFlag() >= 1000){
    displaySystem.text('congratulation? round 5-1? unlock.', 0, 8, colorId.WHITE)
    displaySystem.text('and this planet is mystery.', 0, 16, colorId.WHITE)
    displaySystem.text('Where are you? What is this planet?', 0, 24, colorId.WHITE)
    mainSystem.exRound.unlock5A = true
  }

  if(time > 10 && time < 40) soundSystem.musicPlay(musicId.r5_1)
  else if(time >= 42) soundSystem.musicStop()
}
roundData[roundId.r6_1].setData(spriteId.enemyPotionBigRainbow, 15, '6-1', 120, 200000, 40, 300)
roundData[roundId.r6_1].setBossData(enemyId.E608_bossPotionMatryoshka, 111)
roundData[roundId.r6_1].process = function(){
  var time = this.getTime()
  var sectionTime = [47, 65, 68, 71, 108]

  if(time >= 1 && time <= 8) this.fieldEnemyInsert(enemyId.E600_potionRed, 30)
  else if(time >= 9 && time <= 16) this.fieldEnemyInsert(enemyId.E601_potionBlue, 30)
  else if(time >= 17 && time <= 24) this.fieldEnemyInsert(enemyId.E602_potionGreen, 30)
  else if(time >= 25 && time <= 32) this.fieldEnemyInsert(enemyId.E603_potionGrey, 30)
  else if(time >= 33 && time <= 44) this.fieldEnemyInsert(enemyId.E604_potionRainbow, 30)
  this.hasEnemyTimeStop(45)

  if(time >= 50 && time <= 56) this.fieldEnemyInsert(enemyId.E606_redMonster)
  else if(time >= 57 && time <= 62) this.fieldEnemyInsert(enemyId.E607_monsterBlue)
  this.hasEnemyTimeStop(63)

  if(time >= 75 && time <= 105){
    if(time % 5 == 0) this.fieldEnemyInsert(enemyId.E600_potionRed, 30)
    if(time % 5 == 1) this.fieldEnemyInsert(enemyId.E601_potionBlue, 30)
    if(time % 5 == 2) this.fieldEnemyInsert(enemyId.E602_potionGreen, 30)
    if(time % 5 == 3) this.fieldEnemyInsert(enemyId.E603_potionGrey, 30)
    if(time % 5 == 4) this.fieldEnemyInsert(enemyId.E604_potionRainbow, 30)

    if(time % 6 == 0) this.fieldEnemyInsert(enemyId.E606_redMonster)
    if(time % 6 == 3) this.fieldEnemyInsert(enemyId.E607_monsterBlue)
  }
  this.hasEnemyTimeStop(106)

  if(sectionTime.indexOf(time) != -1){
    if(!this.getBossMode()){
      fieldSystem.insertEnemy(enemyId.E605_bossPotion)
      this.startBossMode()
      soundSystem.musicPlay(musicId.r1_b)
    } else if(this.noEnemyCheck() && this.getBossMode()){
      this.endBossMode()
      soundSystem.musicStop()
    }
    this.bossMeterView(enemyId.E605_bossPotion, 'POTION HP: ')
  }

  this.bossPrevHasEnemyTimeStop()
  if(time >= this.bossTime && time <= this.bossTime + 4){
    if(!this.getBossMode()){
      switch(time){
        case this.bossTime: fieldSystem.insertEnemy(enemyId.E608_bossPotionMatryoshka, undefined, undefined, 'size5'); break
        case this.bossTime + 1: fieldSystem.insertEnemy(enemyId.E608_bossPotionMatryoshka, undefined, undefined, 'size4'); break
        case this.bossTime + 2: fieldSystem.insertEnemy(enemyId.E608_bossPotionMatryoshka, undefined, undefined, 'size3'); break
        case this.bossTime + 3: fieldSystem.insertEnemy(enemyId.E608_bossPotionMatryoshka, undefined, undefined, 'size2'); break
        case this.bossTime + 4: fieldSystem.insertEnemy(enemyId.E608_bossPotionMatryoshka, undefined, undefined, 'size1'); break
      }
      this.startBossMode()
    } else if(this.noEnemyCheck() && this.getBossMode()){
      fieldSystem.requestAllEBulletDelete()
      this.endBossMode()
      if(time == this.bossTime + 4){
        soundSystem.requestPush(enemyData[this.bossId].dieSoundId, 12, 10)
        this.fieldEffectInsert(enemyData[this.bossId].dieSoundId, 12, 10)
      }
    }
    this.bossMeterView(enemyId.E608_bossPotionMatryoshka, 'POTION HP: ')
  }

  if(time > 0 && time < this.bossTime){
    if( (time >= 0 && time <= 43) 
    || (time >= 50 && time <= 63) 
    || (time >= 75 && time < 100) ){
      soundSystem.musicPlay(musicId.r6_1)
    }
  }

  if(time >= this.bossTime && time <= this.bossTime + 4) soundSystem.musicPlay(musicId.r3_b)
  else if(time > this.bossTime + 4) soundSystem.musicStop()
}
roundData[roundId.r6_2].setData(spriteId.enemyBigBubble, 16, '6-2', 120, 200000, 40, 300)
roundData[roundId.r6_2].setBossData(enemyId.E617_bubbleBoss, 116)
roundData[roundId.r6_2].process = function(){
  var time = this.getTime()
  if(time >= 1 && time <= 24){
    this.fieldEnemyInsert(enemyId.E610_bubbleSmall, 30)
  }
  this.hasEnemyTimeStop(26)

  if(time == 28) this.fieldEnemyInsert(enemyId.E617_bubbleBoss)
  if(time >= 30 && time <= 54){
    this.fieldEnemyInsert(enemyId.E611_bubbleMiddle, 40)
    this.fieldEnemyInsert(enemyId.E616_bubbleBig, 120)
  }
  this.hasEnemyTimeStop(56)

  if(time == 58) this.fieldEnemyInsert(enemyId.E617_bubbleBoss)
  if(time >= 60 && time <= 84){
    this.fieldEnemyInsert(enemyId.E610_bubbleSmall, 60)
    this.fieldEnemyInsert(enemyId.E611_bubbleMiddle, 90)
    this.fieldEnemyInsert(enemyId.E616_bubbleBig, 120)
  }
  this.hasEnemyTimeStop(86)

  if(time >= 90 && time <= this.bossTime - 1 && time % 5 == 0) this.fieldEnemyInsert(enemyId.E617_bubbleBoss)
  if(time == this.bossTime){
    if(!this.getBossMode()){
      fieldSystem.insertEnemy(enemyId.E617_bubbleBoss)
      this.startBossMode()
    } else if(this.getBossMode() && this.noEnemyCheck()){
      this.endBossMode()
      soundSystem.requestPush(soundId.enemyDieBubble, 12, 10)
      this.fieldEffectInsert(soundId.enemyDieBubble, 12, 10)
    }
  }

  var bossBubbleCount = 0
  var bossBubbleTotalHp = 0
  var bossBubbleTotalHpMax = 0
  for(var i = 0; i < fieldSystem.enemy.length; i++){
    var enemy = fieldSystem.enemy[i]
    if(enemy.isUsing && enemy.idValue == enemyId.E617_bubbleBoss){
      bossBubbleCount++
      bossBubbleTotalHp += enemy.hp
      bossBubbleTotalHpMax += enemy.hpMax
    }
  }
  if(bossBubbleCount >= 1){
    displaySystem.meterText('BUBBLES: ' + bossBubbleCount + ', TOTAL HP: ', colorId.CYAN, 
      bossBubbleTotalHp, bossBubbleTotalHpMax, 0, 0, 240, 8, colorId.DARK_BLUE, colorId.GREY, colorId.DARK_GREY)
  }
  
  if(time > 0 && time <= this.bossTime) soundSystem.musicPlay(musicId.r6_1)
  else if(time > this.bossTime) soundSystem.musicStop()
}
roundData[roundId.r6_3].setData(spriteId.enemyFish, 17, '6-3', 120, 225000, 44, 340)
roundData[roundId.r6_3].setBossData(enemyId.E625_bossFish, 116)
roundData[roundId.r6_3].process = function(){
  var time = this.getTime()

  if(time >= 1 && time <= 8) this.fieldEnemyInsert(enemyId.E620_oxygenTank)
  else if(time >= 9 && time <= 16) this.fieldEnemyInsert(enemyId.E621_fish)
  else if(time >= 17 && time <= 24) this.fieldEnemyInsert(enemyId.E622_fishBlack)
  else if(time >= 25 && time <= 32) this.fieldEnemyInsert(enemyId.E623_submarine)
  else if(time >= 33 && time <= 40) this.fieldEnemyInsert(enemyId.E624_camera)

  if(time >= 42 && time <= 70){
    if(time >= 42 && time <= 55){
      this.fieldEnemyInsert(enemyId.E621_fish, 90)
      this.fieldEnemyInsert(enemyId.E622_fishBlack, 90)
    } else if(time >= 58 && time <= 66){
      this.fieldEnemyInsert(enemyId.E620_oxygenTank, 120)
      this.fieldEnemyInsert(enemyId.E623_submarine, 120)
      this.fieldEnemyInsert(enemyId.E624_camera, 120)
    }

    this.fieldEnemyInsert(enemyId.E610_bubbleSmall, 75)
    this.fieldEnemyInsert(enemyId.E611_bubbleMiddle, 76)
  } else if(time >= 70 && time <= 82){
    this.fieldEnemyInsert(enemyId.E600_potionRed, 180)
    this.fieldEnemyInsert(enemyId.E601_potionBlue, 180)
    this.fieldEnemyInsert(enemyId.E602_potionGreen, 180)
    this.fieldEnemyInsert(enemyId.E610_bubbleSmall, 120)
    this.fieldEnemyInsert(enemyId.E611_bubbleMiddle, 120)
  } else if(time >= 82 && time <= 96){
    this.fieldEnemyInsert(enemyId.E603_potionGrey, 120)
    this.fieldEnemyInsert(enemyId.E604_potionRainbow, 125)
    this.fieldEnemyInsert(enemyId.E611_bubbleMiddle, 120)
  } else if(time >= 97 && time <= 112){
    this.fieldEnemyInsert(enemyId.E621_fish, 150)
    this.fieldEnemyInsert(enemyId.E622_fishBlack, 150)
    this.fieldEnemyInsert(enemyId.E620_oxygenTank, 150)
    this.fieldEnemyInsert(enemyId.E623_submarine, 150)
    this.fieldEnemyInsert(enemyId.E624_camera, 150)
  }

  this.bossPrevHasEnemyTimeStop()
  if(time == this.bossTime) this.bossProcess()
  if(time > 0 && time < this.bossTime) soundSystem.musicPlay(musicId.r6_3)
  if(time == this.bossTime) !this.noEnemyCheck() ? soundSystem.musicPlay(musicId.r1_b) : soundSystem.musicStop()
}
roundData[roundId.r6_4].setData(spriteId.enemySubmarin, 18, '6-4', 120, 225000, 44, 340)
roundData[roundId.r6_4].setBossData(enemyId.E640_bossTrash, 116)
roundData[roundId.r6_4].process = function(){
  var time = this.getTime()

  if(time >= 1 && time <= 10){
    this.fieldEnemyInsert(enemyId.E630_plasticTrash)
  } else if(time >= 11 && time <= 20){
    this.fieldEnemyInsert(enemyId.E631_plasticTrashUpgrade)
  } else if(time >= 21 && time <= 40){
    switch(mySystem.randomInt(0, 3)){
      case 0: this.fieldEnemyInsert(enemyId.E620_oxygenTank, 150); break
      case 1: this.fieldEnemyInsert(enemyId.E623_submarine, 150); break
      case 2: this.fieldEnemyInsert(enemyId.E623_submarine, 150); break
    }
    this.fieldEnemyInsert(enemyId.E630_plasticTrash, 120)
    this.fieldEnemyInsert(enemyId.E637_trashVendingMachine, 120)
    this.fieldEnemyInsert(enemyId.E620_oxygenTank, 180)
    this.fieldEnemyInsert(enemyId.E621_fish, 180)
  } else if(time >= 41 && time <= 100){
    if(time >= 42 && time <= 55){
      this.fieldEnemyInsert(enemyId.E622_fishBlack, 180)
      this.fieldEnemyInsert(enemyId.E621_fish, 180)
    } else if(time >= 56 && time <= 68){
      this.fieldEnemyInsert(enemyId.E630_plasticTrash)
    } else if(time >= 69 && time <= 82){
      this.fieldEnemyInsert(enemyId.E631_plasticTrashUpgrade)
    } else if(time >= 83 && time <= 97){
      this.fieldEnemyInsert(enemyId.E214_gold, 120)
      this.fieldEnemyInsert(enemyId.E215_silver, 120)
      this.fieldEnemyInsert(enemyId.E216_diamond, 120)
      this.fieldEnemyInsert(enemyId.E203_bigStone, 120)
    }
    switch(mySystem.randomInt(0, 3)){
      case 0: this.fieldEnemyInsert(enemyId.E610_bubbleSmall, 120); break
      case 1: this.fieldEnemyInsert(enemyId.E611_bubbleMiddle, 120); break
      case 2: this.fieldEnemyInsert(enemyId.E616_bubbleBig, 120); break
    }
    switch(mySystem.randomInt(0, 3)){
      case 0: this.fieldEnemyInsert(enemyId.E620_oxygenTank, 120); break
      case 1: this.fieldEnemyInsert(enemyId.E623_submarine, 120); break
      case 2: this.fieldEnemyInsert(enemyId.E624_camera, 120); break
    }
  } else if(time >= 101 && time <= 112){
    this.fieldEnemyInsert(enemyId.E214_gold, 120)
    this.fieldEnemyInsert(enemyId.E215_silver, 120)
    this.fieldEnemyInsert(enemyId.E216_diamond, 120)
    this.fieldEnemyInsert(enemyId.E203_bigStone, 120)
    switch(mySystem.randomInt(0, 3)){
      case 0:
        this.fieldEnemyInsert(enemyId.E630_plasticTrash, 120)
        this.fieldEnemyInsert(enemyId.E631_plasticTrashUpgrade, 120)
        break
      case 1:
        this.fieldEnemyInsert(enemyId.E637_trashVendingMachine, 120)
        this.fieldEnemyInsert(enemyId.E638_trashTreasureChest, 120)
        break
    }
  }

  this.bossPrevHasEnemyTimeStop()
  if(time == this.bossTime){
    if(!this.getBossMode()){
      fieldSystem.insertEnemy(this.bossId, fieldSize.FIELD_X, fieldSize.FIELD_Y)
      this.startBossMode()
    } else if(this.noEnemyCheck()){
      this.endBossMode()
    }
  }

  if(time > 0 && time < this.bossTime) soundSystem.musicPlay(musicId.r6_3)
  if(time == this.bossTime) !this.noEnemyCheck() ? soundSystem.musicPlay(musicId.r6_3) : soundSystem.musicStop()
}
roundData[roundId.r6_5].setData(spriteId.r6_5, 19, '6-5', 160, 230000, 48, 380)
roundData[roundId.r6_5].setBossData(0, 156)
roundData[roundId.r6_5].process = function(){
  var time = this.getTime()

  if( (time >= 1 && time <= 40) || (time >= 120 && time <= 150) ){
    switch(mySystem.randomInt(0, 5)){
      case 0: this.fieldEnemyInsert(enemyId.E600_potionRed, 240); break
      case 1: this.fieldEnemyInsert(enemyId.E601_potionBlue, 240); break
      case 2: this.fieldEnemyInsert(enemyId.E602_potionGreen, 240); break
      case 3: this.fieldEnemyInsert(enemyId.E603_potionGrey, 240); break
      case 4: this.fieldEnemyInsert(enemyId.E604_potionRainbow, 240); break
    }
    switch(mySystem.randomInt(0, 3)){
      case 0: this.fieldEnemyInsert(enemyId.E610_bubbleSmall, 120); break
      case 1: this.fieldEnemyInsert(enemyId.E611_bubbleMiddle, 120); break
      case 2: this.fieldEnemyInsert(enemyId.E616_bubbleBig, 120); break
    }
    switch(mySystem.randomInt(0, 5)){
      case 0: this.fieldEnemyInsert(enemyId.E621_fish, 240); break
      case 1: this.fieldEnemyInsert(enemyId.E622_fishBlack, 240); break
      case 2: this.fieldEnemyInsert(enemyId.E620_oxygenTank, 240); break
      case 3: this.fieldEnemyInsert(enemyId.E623_submarine, 240); break
      case 4: this.fieldEnemyInsert(enemyId.E624_camera, 240); break
    }
    switch(mySystem.randomInt(0, 2)){
      case 0: this.fieldEnemyInsert(enemyId.E630_plasticTrash, 180); break
      case 1: this.fieldEnemyInsert(enemyId.E631_plasticTrashUpgrade, 180); break
    }
    switch(mySystem.randomInt(0, 4)){
      case 0: this.fieldEnemyInsert(enemyId.E214_gold, 240); break
      case 1: this.fieldEnemyInsert(enemyId.E215_silver, 240); break
      case 2: this.fieldEnemyInsert(enemyId.E216_diamond, 240); break
      case 3: this.fieldEnemyInsert(enemyId.E203_bigStone, 240); break
    }
  }

  if(time >= 40 && time <= 48){
    this.fieldEnemyInsert(enemyId.E400_magician, 90)
    this.fieldEnemyInsert(enemyId.E401_summoner, 90)
  } else if(time >= 49 && time <= 56){
    this.fieldEnemyInsert(enemyId.E623_submarine, 30)
  } else if(time >= 60 && time <= 75){
    this.fieldEnemyInsert(enemyId.E621_fish)
    this.fieldEnemyInsert(enemyId.E622_fishBlack)
  } else if(time >= 76 && time <= 83){
    this.fieldEnemyInsert(enemyId.E308_electronicA)
    this.fieldEnemyInsert(enemyId.E309_electronicB)
  } else if(time >= 84 && time <= 92){
    this.fieldEnemyInsert(enemyId.E223_bus, 120)
    this.fieldEnemyInsert(enemyId.E303_robotWhite, 120)
    this.fieldEnemyInsert(enemyId.E330_machineBall, 120)
  } else if(time >= 93 && time <= 102){
    this.fieldEnemyInsert(enemyId.E403_tree, 180)
    this.fieldEnemyInsert(enemyId.E415_crazyGuy, 120)
    this.fieldEnemyInsert(enemyId.E621_fish, 180)
    this.fieldEnemyInsert(enemyId.E622_fishBlack, 180)
  } else if(time >= 102 && time <= 120){
    this.fieldEnemyInsert(enemyId.E214_gold, 240)
    this.fieldEnemyInsert(enemyId.E215_silver, 240)
    this.fieldEnemyInsert(enemyId.E216_diamond, 240)
    this.fieldEnemyInsert(enemyId.E203_bigStone, 240)
  }

  if(time >= 120 && time <= 152){
    switch(mySystem.randomInt(0, 5)){
      case 0: this.fieldEnemyInsert(enemyId.E223_bus, 150); break
      case 1: this.fieldEnemyInsert(enemyId.E303_robotWhite, 150); break
      case 2: this.fieldEnemyInsert(enemyId.E330_machineBall, 150); break
      case 3: this.fieldEnemyInsert(enemyId.E308_electronicA, 150); break
      case 4: this.fieldEnemyInsert(enemyId.E309_electronicB, 150); break
    }
  }

  this.bossPrevHasEnemyTimeStop()
  if(time > 0 && time < this.bossTime) soundSystem.musicPlay(musicId.r6_1)
  else if(time > this.bossTime) soundSystem.musicStop()
}
roundData[roundId.r7_1].setData(spriteId.enemyPieceSquare, 20, '7-1', 110, 240700, 55, 400)
roundData[roundId.r7_1].setBossData(enemyId.E708_bossShape, 106)
roundData[roundId.r7_1].process = function(){
  var time = this.getTime()
  if(time >= 1 && time <= 6) this.fieldEnemyInsert(enemyId.E701_squarePiece)
  else if(time >= 7 && time <= 12) this.fieldEnemyInsert(enemyId.E703_circlePiece)
  else if(time >= 13 && time <= 18) this.fieldEnemyInsert(enemyId.E705_trianglePiece)
  else if(time >= 19 && time <= 24) this.fieldEnemyInsert(enemyId.E707_pentagonPiece)
  else if(time >= 26 && time <= 32) this.fieldEnemyInsert(enemyId.E700_square)
  else if(time >= 34 && time <= 40) this.fieldEnemyInsert(enemyId.E702_circle)
  else if(time >= 42 && time <= 48) this.fieldEnemyInsert(enemyId.E704_triangle)
  else if(time >= 50 && time <= 56) this.fieldEnemyInsert(enemyId.E706_pentagon)

  if(time >= 60 && time <= 72){
    this.fieldEnemyInsert(enemyId.E700_square, 180)
    this.fieldEnemyInsert(enemyId.E702_circle, 180)
    this.fieldEnemyInsert(enemyId.E704_triangle, 180)
    this.fieldEnemyInsert(enemyId.E706_pentagon, 180)
  } else if(time >= 75 && time <= 87){
    this.fieldEnemyInsert(enemyId.E701_squarePiece, 120)
    this.fieldEnemyInsert(enemyId.E703_circlePiece, 90)
    this.fieldEnemyInsert(enemyId.E705_trianglePiece, 120)
    this.fieldEnemyInsert(enemyId.E707_pentagonPiece, 90)
  } else if(time >= 90 && time <= 102){
    this.fieldEnemyInsert(enemyId.E700_square, 300)
    this.fieldEnemyInsert(enemyId.E702_circle, 300)
    this.fieldEnemyInsert(enemyId.E704_triangle, 300)
    this.fieldEnemyInsert(enemyId.E706_pentagon, 300)
    this.fieldEnemyInsert(enemyId.E701_squarePiece, 240)
    this.fieldEnemyInsert(enemyId.E703_circlePiece, 240)
    this.fieldEnemyInsert(enemyId.E705_trianglePiece, 240)
    this.fieldEnemyInsert(enemyId.E707_pentagonPiece, 240)
  }

  this.bossPrevHasEnemyTimeStop()
  this.bossProcess()
  if(time > 0 && time < this.bossTime) soundSystem.musicPlay(musicId.r7_1)
  if(time == this.bossTime) !this.noEnemyCheck() ? soundSystem.musicPlay(musicId.r1_b) : soundSystem.musicStop()
}
roundData[roundId.r7_2].setData(spriteId.enemyCubeRed, 21, '7-2', 110, 241400, 55, 400)
roundData[roundId.r7_2].setBossData(enemyId.E718_bossCubeColor, 106)
roundData[roundId.r7_2].process = function(){
  var time = this.getTime()
  if(time >= 1 && time <= 8) this.fieldEnemyInsert(enemyId.E711_bigCubeRed)
  else if(time >= 10 && time <= 18) this.fieldEnemyInsert(enemyId.E713_bigCubeBlue)
  else if(time >= 20 && time <= 28) this.fieldEnemyInsert(enemyId.E715_bigCubeGreen)
  else if(time >= 30 && time <= 38) this.fieldEnemyInsert(enemyId.E717_bigCubeGrey)

  if(time >= 40 && time <= 58){
    this.fieldEnemyInsert(enemyId.E710_smallCubeRed, 120)
    this.fieldEnemyInsert(enemyId.E712_smallCubeBlue, 150)
    this.fieldEnemyInsert(enemyId.E714_smallCubeGreen, 120)
    this.fieldEnemyInsert(enemyId.E716_smallCubeGrey, 120)
  } else if(time >= 60 && time <= 78){
    this.fieldEnemyInsert(enemyId.E711_bigCubeRed, 120)
    this.fieldEnemyInsert(enemyId.E713_bigCubeBlue, 150)
    this.fieldEnemyInsert(enemyId.E715_bigCubeGreen, 120)
    this.fieldEnemyInsert(enemyId.E717_bigCubeGrey, 120)
  } else if(time >= 80 && time <= 88){
    this.fieldEnemyInsert(enemyId.E711_bigCubeRed, 90)
    this.fieldEnemyInsert(enemyId.E710_smallCubeRed, 90)
  } else if(time >= 90 && time <= 102){
    this.fieldEnemyInsert(enemyId.E714_smallCubeGreen, 90)
    this.fieldEnemyInsert(enemyId.E715_bigCubeGreen, 90)
  }

  this.bossPrevHasEnemyTimeStop()
  this.bossProcess()
  if(time == this.bossTime && this.noEnemyCheck()) fieldSystem.requestAllEBulletDelete()

  if(time > 0 && time < this.bossTime) soundSystem.musicPlay(musicId.r7_1)
  if(time == this.bossTime) !this.noEnemyCheck() ? soundSystem.musicPlay(musicId.r1_b) : soundSystem.musicStop()
}
roundData[roundId.r7_3].setData(spriteId.enemyBigCube, 22, '7-3', 110, 242100, 55, 400)
roundData[roundId.r7_3].setBossData(enemyId.E728_bossCubeBig, 106)
roundData[roundId.r7_3].process = function(){
  var time = this.getTime()
  var totalFrame = this.getTimeData().totalFrame
  var bossTime = [29, 59]
  if(totalFrame % 50 == 0){
    if(time >= 1 && time <= 5) fieldSystem.insertEnemy(enemyId.E720_cubeNormal)
    else if(time >= 6 && time <= 10) fieldSystem.insertEnemy(enemyId.E720_cubeNormal, undefined, undefined, 'normal')
    else if(time >= 11 && time <= 15) fieldSystem.insertEnemy(enemyId.E720_cubeNormal, undefined, undefined, 'fire')
    else if(time >= 16 && time <= 20) fieldSystem.insertEnemy(enemyId.E720_cubeNormal, undefined, undefined, 'ball')
    else if(time >= 21 && time <= 25) fieldSystem.insertEnemy(enemyId.E720_cubeNormal, undefined, undefined, 'laser')
  }
  this.hasEnemyTimeStop(28)

  if(time >= 30 && time <= 35) this.fieldEnemyInsert(enemyId.E724_cubePiece)
  else if(time >= 36 && time <= 40) this.fieldEnemyInsert(enemyId.E721_cubeBig)
  else if(time >= 41 && time <= 55 && totalFrame % 80 == 0){
    switch(mySystem.randomInt(0, 5)){
      case 0: fieldSystem.insertEnemy(enemyId.E720_cubeNormal); break
      case 1: fieldSystem.insertEnemy(enemyId.E720_cubeNormal, undefined, undefined, 'normal'); break
      case 2: fieldSystem.insertEnemy(enemyId.E720_cubeNormal, undefined, undefined, 'fire'); break
      case 3: fieldSystem.insertEnemy(enemyId.E720_cubeNormal, undefined, undefined, 'ball'); break
      case 4: fieldSystem.insertEnemy(enemyId.E720_cubeNormal, undefined, undefined, 'laser'); break
    }
    this.fieldEnemyInsert(enemyId.E724_cubePiece)
    this.fieldEnemyInsert(enemyId.E721_cubeBig)
  }
  this.hasEnemyTimeStop(58)

  if(time >= 60 && time <= 72){
    if(totalFrame % 60 == 0) fieldSystem.insertEnemy(enemyId.E720_cubeNormal, undefined, undefined, 'ball')
    switch(mySystem.randomInt(0, 4)){
      case 0: this.fieldEnemyInsert(enemyId.E700_square); break
      case 1: this.fieldEnemyInsert(enemyId.E702_circle); break
      case 2: this.fieldEnemyInsert(enemyId.E704_triangle); break
      case 3: this.fieldEnemyInsert(enemyId.E706_pentagon); break
    }
  } else if(time >= 71 && time <= 84){
    if(totalFrame % 60 == 0) fieldSystem.insertEnemy(enemyId.E720_cubeNormal, undefined, undefined, 'laser')
    switch(mySystem.randomInt(0, 4)){
      case 0: this.fieldEnemyInsert(enemyId.E711_bigCubeRed); break
      case 1: this.fieldEnemyInsert(enemyId.E713_bigCubeBlue); break
      case 2: this.fieldEnemyInsert(enemyId.E715_bigCubeGreen); break
      case 3: this.fieldEnemyInsert(enemyId.E717_bigCubeGrey); break
    }
  } else if(time >= 85 && time <= 102 && totalFrame % 30 == 0){
    switch(mySystem.randomInt(0, 5)){
      case 0: fieldSystem.insertEnemy(enemyId.E720_cubeNormal); break
      case 1: fieldSystem.insertEnemy(enemyId.E720_cubeNormal, undefined, undefined, 'normal'); break
      case 2: fieldSystem.insertEnemy(enemyId.E720_cubeNormal, undefined, undefined, 'fire'); break
      case 3: fieldSystem.insertEnemy(enemyId.E720_cubeNormal, undefined, undefined, 'ball'); break
      case 4: fieldSystem.insertEnemy(enemyId.E720_cubeNormal, undefined, undefined, 'laser'); break
    }
  }

  if(bossTime.indexOf(time) != -1){
    if(!this.getBossMode()){
      fieldSystem.insertEnemy(enemyId.E728_bossCubeBig)
      this.startBossMode()
      soundSystem.musicPlay(musicId.r1_b)
    } else if(this.noEnemyCheck() && this.getBossMode()){
      this.endBossMode()
      soundSystem.musicStop()
    }
    this.bossMeterView(enemyId.E728_bossCubeBig)
  }

  this.bossPrevHasEnemyTimeStop()
  this.bossProcess()
  if( (time > 0 && time < 25) || (time > 30 && time < 55) || (time > 60 && time < 85) 
    || (time > 90 && time < this.bossTime) ) soundSystem.musicPlay(musicId.r7_1)
  if(time == this.bossTime) !this.noEnemyCheck() ? soundSystem.musicPlay(musicId.r1_b) : soundSystem.musicStop()
}
roundData[roundId.r7_4].setData(spriteId.enemyPenroseTriangle, 23, '7-4', 110, 242800, 59, 440)
roundData[roundId.r7_4].point = 0
roundData[roundId.r7_4].pointMultiple = 1
roundData[roundId.r7_4].pointTime = 0
roundData[roundId.r7_4].processPoint = function(){
  var time = this.getTime()
  var totalFrame = this.getTimeData().totalFrame
  var level = Math.floor(time / 10) + 1
  var requirePoint = 60000
  if(time == 1){
    this.point = 0
    this.pointMultiple = 1
  }
  if(totalFrame % 60 == 0) this.pointTime++
  this.point += ( (1 + this.pointTime) / 60 * this.pointMultiple)
  if(time % 10 >= 0 && time % 10 <= 5){
    displaySystem.digitalNumber(Math.floor(this.point), 0, 0, 1)
  } else if(time % 10 == 6){
    displaySystem.digitalNumber(Math.floor(this.point) + '/' + requirePoint, 0, 0, 1)
  }
  displaySystem.digitalNumber('level: ' + level + ', combo: ' + this.pointMultiple + ', time: ' + this.pointTime, 0, 8, 1)

  for(var i = 0; i < fieldSystem.enemy.length; i++){
    if(!fieldSystem.enemy[i].isUsing) continue
    var enemy = fieldSystem.enemy[i]
    if(enemy.score > 0){
      fieldSystem.requestPlusScoreUser(enemy.score)
      this.point += (enemy.score + 10) * this.pointMultiple
      this.pointMultiple += 1
      enemy.score = 0
    }
    if(fieldSystem.collision(playerSystem, enemy)){
      this.pointMultiple -= 5
      if(this.pointMultiple < 1) this.pointMultiple = 1
      fieldSystem.requestAllEnemyDelete()
      soundSystem.requestPush(soundId.systemBuzzer, 1, 1)
    }
  }

  if(time % 10 == 6){
    if(this.point <= requirePoint){
      fieldSystem.requestTimeStop(true)
    } else {
      this.pointTime = 0
      this.point = 0
      this.pointMultiple = 0
      fieldSystem.requestAllEnemyDelete()
      soundSystem.requestPush(soundId.systemSelect, 2, 10)
      fieldSystem.requestTimeStop(false)
      this.setTime(time + 2)
      fieldSystem.requestPlusScoreUser(28000)
    }
  }
}
roundData[roundId.r7_4].enemyCreate = function(){
  var time = this.getTime()
  var totalFrame = this.getTimeData().totalFrame
  var level = Math.floor(time / 10) + 1
  if(time % 10 >= 0 && time % 10 <= 6 && totalFrame % 20 == 0 && fieldSystem.getUsingCount(fieldSystem.enemy) < 10){
    switch(level){
      case 1: fieldSystem.insertEnemy(enemyId.E730_penroseTriange, undefined, undefined, 'left'); break
      case 2: fieldSystem.insertEnemy(enemyId.E730_penroseTriange, undefined, undefined, 'right'); break
      case 3: fieldSystem.insertEnemy(enemyId.E730_penroseTriange, undefined, undefined, 'updown'); break
      case 4: fieldSystem.insertEnemy(enemyId.E730_penroseTriange, undefined, undefined, 'ball'); break
      case 5: fieldSystem.insertEnemy(enemyId.E730_penroseTriange, undefined, undefined, 'random'); break
      case 6: fieldSystem.insertEnemy(enemyId.E730_penroseTriange, undefined, undefined, 'way8'); break
      case 7: fieldSystem.insertEnemy(enemyId.E730_penroseTriange, undefined, undefined, 'boost'); break
      case 8: fieldSystem.insertEnemy(enemyId.E730_penroseTriange, undefined, undefined, 'big'); break
      case 9: fieldSystem.insertEnemy(enemyId.E730_penroseTriange, undefined, undefined, 'normal'); break
      case 10: fieldSystem.insertEnemy(enemyId.E730_penroseTriange, undefined, undefined, 'ball'); break
      case 11: fieldSystem.insertEnemy(enemyId.E730_penroseTriange, undefined, undefined, 'random'); break
    }
  }
}
roundData[roundId.r7_4].process = function(){
  var time = this.getTime()
  if(time > 1 && time < this.finishTime - 3){
    this.point = this.getFlag()
    this.enemyCreate()
    this.processPoint()
    this.setFlag(this.point)
    soundSystem.musicPlay(musicId.r7_4)
  } else if(time >= this.finishTime - 3){
    soundSystem.musicStop()
  }
}
roundData[roundId.r8_1].setData(spriteId.r8_1, 24, '8-1', 150, 250000, 70, 500)
roundData[roundId.r8_1].selectMode = false
roundData[roundId.r8_1].process = function(){
  var time = this.getTime()
  var totalFrame = this.getTimeData().totalFrame
  var areaA = {x: 0, y: 0, w: 10, h: 15, scale: 1}
  var areaB = {x: 160, y: 0, w: 10, h: 15, scale: 1}
  var select = 0
  var sectionStart = [2, 32, 62, 92, 122]
  var sectionEnd = [31, 61, 91, 121, 148]
  var level = Math.floor(time / 30)
  if(time == 0) this.selectMode = false

  if(sectionStart.indexOf(time) != -1){
    if(!this.selectMode){
      this.selectMode = true
      playerSystem.x = fieldSize.FIELD_X / 2
      this.setFlag(10)
    }
    var leftTime = 16 - this.getFlag()
    var outputText = ['stage select! :)', 'left or right', 'move to square', '   time: ' + leftTime]
    fieldSystem.setBackground(24)
    fieldSystem.requestTimeStop(true)
    soundSystem.musicPlay(musicId.r8_1)
    displaySystem.rect(areaA.x, areaA.y, areaA.w * 8, areaA.h * 8, colorId.RED)
    displaySystem.rect(areaB.x, areaB.y, areaB.w * 8, areaB.h * 8, colorId.BLUE)
    switch(level){
      case 0:
        displaySystem.sprite(spriteId.enemyBullonRed, areaA.x + 8, areaA.y + 8, 1, 2, 4)
        displaySystem.sprite(spriteId.enemyBullonBlue, areaA.x + 40, areaA.y + 8, 1, 2, 4)
        displaySystem.sprite(spriteId.enemyStreetLight, areaB.x + 8, areaB.y + 8, 1, 2, 4)
        displaySystem.sprite(spriteId.enemyUtilityPole, areaB.x + 40, areaB.y + 8, 1, 2, 4)
        break
      case 1:
        displaySystem.sprite(spriteId.enemyBigStone, areaA.x + 8, areaA.y + 8, 2, 2, 4)
        displaySystem.sprite(spriteId.enemyDiamond, areaB.x + 8, areaB.y + 8, 2, 2, 4)
        break
      case 2:
        displaySystem.sprite(spriteId.enemyRobotRed, areaA.x + 8, areaA.y + 8, 1, 2, 4)
        displaySystem.sprite(spriteId.enemyRobotBlue, areaA.x + 40, areaA.y + 8, 1, 2, 4)
        displaySystem.sprite(spriteId.enemyElectronicA, areaB.x + 8, areaB.y + 8, 2, 1, 4)
        displaySystem.sprite(spriteId.enemyElectronicB, areaB.x + 8, areaB.y + 40, 2, 1, 4)
        break
      case 3:
        displaySystem.sprite(spriteId.enemyTree, areaA.x + 8, areaA.y + 8, 1, 2, 6)
        displaySystem.sprite(spriteId.enemyBrickDark, areaB.x + 8, areaB.y + 8, 1, 2, 6)
        break
      case 4:
        displaySystem.sprite(spriteId.enemyRobotWhite, areaA.x + 8, areaA.y + 8, 1, 2, 6)
        displaySystem.sprite(spriteId.enemyCrazyGuy, areaB.x + 8, areaB.y + 8, 1, 1, 8)
        break
    }
    for(var i = 0; i < outputText.length; i++) displaySystem.text(outputText[i], 32, 16 * (i + 1), colorId.DARK_GREY, 2)
    if(fieldSystem.collision(areaA, playerSystem)) select = 1
    else if(fieldSystem.collision(areaB, playerSystem)) select = 2

    if(totalFrame % 60 == 0 && leftTime >= 1) this.setFlag(this.getFlag() + 1)
    else if(leftTime == 0) mySystem.randomBoolean() ? select = 1 : select = 2

    if(select != 0){
      soundSystem.play(soundId.systemSelect)
      playerSystem.x = 0
      this.setTime(time + 1)
      this.setFlag(select)
      this.selectMode = false
      fieldSystem.requestTimeStop(false)
    }
  }

  if(sectionEnd.indexOf(time) != -1){
    fieldSystem.setBackground(24)
    soundSystem.musicStop()
    this.setFlag(0)
  }

  this.hasEnemyTimeStop(sectionEnd[level] - 2)
  if(time >= sectionStart[level] + 1 && time < sectionEnd[level] - 3){
    switch(level){
      case 0:
        if(this.getFlag() == 1){
          this.fieldEnemyInsert(enemyId.E800_bullonRed)
          this.fieldEnemyInsert(enemyId.E800_bullonRed)
          this.fieldEnemyInsert(enemyId.E801_bullonBlue)
          soundSystem.musicPlay(musicId.r1_1)
          fieldSystem.setBackground(1)
        } else if(this.getFlag() == 2){
          this.fieldEnemyInsert(enemyId.E802_streetLight)
          this.fieldEnemyInsert(enemyId.E802_streetLight)
          this.fieldEnemyInsert(enemyId.E803_utilityPole)
          soundSystem.musicPlay(musicId.r1_3)
          fieldSystem.setBackground(3)
        }
        break
      case 1:
        if(this.getFlag() == 1){
          this.fieldEnemyInsert(enemyId.E804_stone)
          this.fieldEnemyInsert(enemyId.E805_brokenStone)
          soundSystem.musicPlay(musicId.r2_3)
          fieldSystem.setBackground(6)
        } else if(this.getFlag() == 2){
          this.fieldEnemyInsert(enemyId.E807_sapphire)
          this.fieldEnemyInsert(enemyId.E808_gold)
          this.fieldEnemyInsert(enemyId.E809_diamond)
          soundSystem.musicPlay(musicId.r2_2)
          fieldSystem.setBackground(5)
        }
        break
      case 2:
        if(this.getFlag() == 1){
          this.fieldEnemyInsert(enemyId.E810_robotA)
          this.fieldEnemyInsert(enemyId.E811_robotB)
          soundSystem.musicPlay(musicId.r3_1)
          fieldSystem.setBackground(7)
        } else if(this.getFlag() == 2){
          this.fieldEnemyInsert(enemyId.E812_electronicA)
          this.fieldEnemyInsert(enemyId.E813_electronicB)
          soundSystem.musicPlay(musicId.r3_2)
          fieldSystem.setBackground(8)
        }
        break
      case 3:
        if(this.getFlag() == 1){
          this.fieldEnemyInsert(enemyId.E814_tree)
          soundSystem.musicPlay(musicId.r4_1)
          fieldSystem.setBackground(10)
        } else if(this.getFlag() == 2){
          this.fieldEnemyInsert(enemyId.E817_sculpture)
          this.fieldEnemyInsert(enemyId.E819_brickDark)
          soundSystem.musicPlay(musicId.r4_4)
          fieldSystem.setBackground(13)     
        }
        break
      case 4:
        if(this.getFlag() == 1){
          this.fieldEnemyInsert(enemyId.E820_robotWhite)
          soundSystem.musicPlay(musicId.r7_4)
          fieldSystem.setBackground(24)
        } else if(this.getFlag() == 2){
          this.fieldEnemyInsert(enemyId.E821_crazyGuy)
          soundSystem.musicPlay(musicId.r7_4)
          fieldSystem.setBackground(24)      
        }
        break
    }
  }
}
roundData[roundId.r8_2].setData(spriteId.r8_1, 24, '8-2', 150, 250000, 70, 500)
roundData[roundId.r8_2].selectMode = false
roundData[roundId.r8_2].process = function(){
  var time = this.getTime()
  var totalFrame = this.getTimeData().totalFrame
  var areaA = {x: 0, y: 0, w: 10, h: 15, scale: 1}
  var areaB = {x: 160, y: 0, w: 10, h: 15, scale: 1}
  var select = 0
  var sectionStart = [2, 32, 62, 92, 122]
  var sectionEnd = [31, 61, 91, 121, 148]
  var level = Math.floor(time / 30)
  if(time == 0) this.selectMode = false

  if(sectionStart.indexOf(time) != -1){
    if(!this.selectMode){
      this.selectMode = true
      playerSystem.x = fieldSize.FIELD_X / 2
      this.setFlag(10)
    }
    var leftTime = 16 - this.getFlag()
    var outputText = ['stage select! :)', 'left or right', 'move to square', '   time: ' + leftTime]
    fieldSystem.setBackground(24)
    fieldSystem.requestTimeStop(true)
    soundSystem.musicPlay(musicId.r8_1)
    displaySystem.rect(areaA.x, areaA.y, areaA.w * 8, areaA.h * 8, colorId.YELLOW)
    displaySystem.rect(areaB.x, areaB.y, areaB.w * 8, areaB.h * 8, colorId.GREEN)
    switch(level){
      case 0:
        displaySystem.sprite(spriteId.enemyBigRedMonster, areaA.x + 8, areaA.y + 8, 2, 2, 2)
        displaySystem.sprite(spriteId.enemyBigBlueMonster, areaA.x + 40, areaA.y + 8, 2, 2, 2)
        displaySystem.sprite(spriteId.enemyCharacter1, areaB.x + 8, areaB.y + 8, 1, 2, 4)
        displaySystem.sprite(spriteId.enemyCharacter2, areaB.x + 40, areaB.y + 8, 1, 2, 4)
        break
      case 1:
        displaySystem.sprite(spriteId.enemyRocketA, areaA.x + 8, areaA.y + 8, 2, 1, 4)
        displaySystem.sprite(spriteId.enemyRocketB, areaA.x + 8, areaA.y + 40, 2, 1, 4)
        displaySystem.sprite(spriteId.enemyCar, areaB.x + 8, areaB.y + 8, 2, 1, 4)
        displaySystem.sprite(spriteId.enemyBus, areaB.x + 8, areaB.y + 40, 2, 1, 4)
        break
      case 2:
        displaySystem.sprite(spriteId.enemyPotionBigRainbow, areaA.x + 8, areaA.y + 8, 2, 2, 4)
        displaySystem.sprite(spriteId.enemyBigBubble, areaB.x + 8, areaB.y + 8, 2, 2, 4)
        break
      case 3:
        displaySystem.sprite(spriteId.enemyPieceSquare, areaA.x + 8, areaA.y + 8, 1, 1, 8)
        displaySystem.sprite(spriteId.enemyCubeBlue, areaB.x + 8, areaB.y + 8, 1, 1, 8)
        break
      case 4:
        displaySystem.sprite(spriteId.enemyBigBall, areaA.x + 8, areaA.y + 8, 2, 2, 4)
        displaySystem.sprite(spriteId.enemyBigCar, areaB.x + 8, areaB.y + 8, 2, 2, 4)
        break
    }
    for(var i = 0; i < outputText.length; i++) displaySystem.text(outputText[i], 32, 16 * (i + 1), colorId.DARK_GREY, 2)
    if(fieldSystem.collision(areaA, playerSystem)) select = 1
    else if(fieldSystem.collision(areaB, playerSystem)) select = 2

    if(totalFrame % 60 == 0 && leftTime >= 1) this.setFlag(this.getFlag() + 1)
    else if(leftTime == 0) mySystem.randomBoolean() ? select = 1 : select = 2

    if(select != 0){
      soundSystem.play(soundId.systemSelect)
      playerSystem.x = 0
      this.setTime(time + 1)
      this.setFlag(select)
      this.selectMode = false
      fieldSystem.requestTimeStop(false)
    }
  }

  if(sectionEnd.indexOf(time) != -1){
    fieldSystem.setBackground(24)
    soundSystem.musicStop()
    this.setFlag(0)
  }

  this.hasEnemyTimeStop(sectionEnd[level] - 2)
  if(time >= sectionStart[level] + 1 && time <= sectionEnd[level] - 3){
    switch(level){
      case 0:
        if(this.getFlag() == 1){
          this.fieldEnemyInsert(enemyId.E830_monsterRed)
          this.fieldEnemyInsert(enemyId.E831_monsterBlue)
          soundSystem.musicPlay(musicId.r2_1)
          fieldSystem.setBackground(4)
        } else if(this.getFlag() == 2){
          this.fieldEnemyInsert(enemyId.E832_master)
          this.fieldEnemyInsert(enemyId.E833_magician)
          soundSystem.musicPlay(musicId.r4_2)
          fieldSystem.setBackground(12)
        }
        break
      case 1:
        if(this.getFlag() == 1){
          this.fieldEnemyInsert(enemyId.E834_rocketA)
          this.fieldEnemyInsert(enemyId.E835_rocketB)
          soundSystem.musicPlay(musicId.r1_2)
          fieldSystem.setBackground(2)
        } else if(this.getFlag() == 2){
          this.fieldEnemyInsert(enemyId.E836_car)
          this.fieldEnemyInsert(enemyId.E837_bus)
          soundSystem.musicPlay(musicId.r1_3)
          fieldSystem.setBackground(3)
        }
        break
      case 2:
        if(this.getFlag() == 1){
          this.fieldEnemyInsert(enemyId.E840_potion)
          this.fieldEnemyInsert(enemyId.E840_potion)
          soundSystem.musicPlay(musicId.r6_1)
          fieldSystem.setBackground(15)
        } else if(this.getFlag() == 2){
          this.fieldEnemyInsert(enemyId.E841_bubble)
          this.fieldEnemyInsert(enemyId.E841_bubble)
          soundSystem.musicPlay(musicId.r6_1)
          fieldSystem.setBackground(16)
        }
        break
      case 3:
        if(this.getFlag() == 1){
          this.fieldEnemyInsert(enemyId.E842_shape)
          soundSystem.musicPlay(musicId.r7_1)
          fieldSystem.setBackground(20)
        } else if(this.getFlag() == 2){
          this.fieldEnemyInsert(enemyId.E843_cube)
          soundSystem.musicPlay(musicId.r7_1)
          fieldSystem.setBackground(21)  
        }
        break
      case 4:
        if(this.getFlag() == 1){
          this.fieldEnemyInsert(enemyId.E844_ball)
          soundSystem.musicPlay(musicId.r7_4)
          fieldSystem.setBackground(24)
        } else if(this.getFlag() == 2){
          this.fieldEnemyInsert(enemyId.E845_speedCar)
          soundSystem.musicPlay(musicId.r7_4)
          fieldSystem.setBackground(24)  
        }
        break
    }
  }
}
roundData[roundId.r8_3].setData(spriteId.r8_3, 25, '8-3', 70, 275000, 72, 550)
roundData[roundId.r8_3].areaData = [7, 1, 1, 1, 1, 1, 1, 7]
roundData[roundId.r8_3].selectMode = false
roundData[roundId.r8_3].process = function(){
  var time = this.getTime()
  var totalFrame = this.getTimeData().totalFrame
  var selectId = 0
  var area = {x:0, y:80, w:5, h:5, scale:1}
  var select = this.areaData[0]
  var INDEX_SELECT = 0
  var INDEX_TIME = 7
  var room = [
    {x:0, y:80, w:5, h:5, scale:1},
    {x:0, y:80, w:5, h:5, scale:1},
    {x:40, y:80, w:5, h:5, scale:1}, 
    {x:80, y:80, w:5, h:5, scale:1},
    {x:120, y:80, w:5, h:5, scale:1},
    {x:160, y:80, w:5, h:5, scale:1},
    {x:200, y:80, w:5, h:5, scale:1}
  ]

  var areaDataStatus = this.getFlag() + ''
  for(var i = 0; i < this.areaData.length; i++) this.areaData[i] = Number(areaDataStatus.charAt(i))
  select = this.areaData[0]
  if(time == 1) roundData[roundId.r8_3].areaData = [7, 1, 1, 1, 1, 1, 1, 7]

  if(time >= 4 && time < this.finishTime - 3){
    var isClear = true
    for(i = 1; i <= 6; i++){
      if(this.areaData[i]){
        isClear = false
        break
      }
    }
    if(isClear) this.setTime(this.finishTime - 3)
  }

  if(select == 7 && time % 10 == 2 && time <= 60){
    if(!this.selectMode){
      playerSystem.x = fieldSize.FIELD_X / 2
      playerSystem.y = 16
      this.selectMode = true
      this.areaData[INDEX_TIME] = 7
    }

    fieldSystem.requestTimeStop(true)
    var leftTime = this.areaData[INDEX_TIME]
    var outputText = ['boss select! :)', 'move to square', 'let\'s go', '   time: ' + leftTime]
    for(i = 0; i < outputText.length; i++) displaySystem.text(outputText[i], 32, 16 * (i + 1), colorId.DARK_GREY, 2)
    soundSystem.musicPlay(musicId.r8_1)

    var rectColor = [colorId.RED, colorId.YELLOW, colorId.GREY, colorId.LIGHT_GREEN, colorId.BLUE, colorId.ORANGE]
    var rectEnemyId = [enemyId.E850_bossBullon, enemyId.E851_bossTresureChest, enemyId.E852_bossRobotWhite, enemyId.E853_bossCrazyGuy, enemyId.E854_bossFish, enemyId.E855_bossColorCube]
    for(i = 1; i <= 6; i++){
      if(this.areaData[i] == 0) continue
      var ENEMYX = area.x + (area.w * 8 * (i - 1))
      var enemy = enemyData[rectEnemyId[i - 1]]
      displaySystem.rect(ENEMYX, area.y, area.w * 8, area.h * 8, rectColor[i - 1])
      displaySystem.sprite(enemy.spriteId, ENEMYX + 4, area.y + 4, enemy.w, enemy.h, 2)
    }

    for(i = 0; i < room.length; i++){
      if(this.areaData[i] && fieldSystem.collision(playerSystem, room[i]) ) select = i
    }

    if(totalFrame % 60 == 0 && leftTime >= 1) this.areaData[INDEX_TIME]--
    else if(leftTime == 0) select = this.areaData.indexOf(1)

    if(select != 7){
      this.areaData[INDEX_SELECT] = select
      this.setTime(time + 1)
      playerSystem.x = 0
    }
  }

  switch(select){
    case 1: fieldSystem.setBackground(1); break
    case 2: fieldSystem.setBackground(5); break
    case 3: fieldSystem.setBackground(7); break
    case 4: fieldSystem.setBackground(13); break
    case 5: fieldSystem.setBackground(17); break
    case 6: fieldSystem.setBackground(20); break
    case 7: fieldSystem.setBackground(25); break
  }

  if(select >= 1 && select <= 6){
    if(time % 10 >= 3 && time % 10 <= 4){
      fieldSystem.requestTimeStop(false)
      soundSystem.musicStop()
      this.selectMode = false
    } else if(time % 10 == 5){
      fieldSystem.requestTimeStop(true)
      switch(select){
        case 1: selectId = enemyId.E850_bossBullon; break
        case 2: selectId = enemyId.E851_bossTresureChest; break
        case 3: selectId = enemyId.E852_bossRobotWhite; break
        case 4: selectId = enemyId.E853_bossCrazyGuy; break
        case 5: selectId = enemyId.E854_bossFish; break
        case 6: selectId = enemyId.E855_bossColorCube; break
      }
      this.bossMeterView(selectId)

      if(!this.getBossMode()){
        fieldSystem.insertEnemy(selectId)
        this.startBossMode()
        soundSystem.musicPlay(musicId.r1_b)
      } else if(this.getBossMode() && this.noEnemyCheck()){
        this.endBossMode()
        soundSystem.musicStop()
        soundSystem.requestPush(enemyData[selectId].dieSoundId, 20, 6)
        this.fieldEffectInsert(enemyData[selectId].dieSoundId, 20, 6)
      }
    } else if(time % 10 == 0){
      this.areaData[select] = 0
      this.areaData[INDEX_SELECT] = 7
      this.areaData[INDEX_TIME] = 7
      this.setTime(time + 1)
    }
  }

  this.setFlag(Number(this.areaData.join('')))
} 
roundData[roundId.r8_4].setData(spriteId.r8_3, 25, '8-4', 50, 275000, 72, 550)
roundData[roundId.r8_4].process = function(){
  var time = this.getTime()
  var frame = this.getTimeData().frame
  var sectionTime = [8, 18, 20, 22, 24, 26, 42]
  var sectionStart = [2, 12, 36]
  var sectionEnd = [6, 16, 40]

  for(var i = 0; i < 3; i++){
    if(time >= sectionStart[i] && time <= sectionEnd[i]){
      var x = fieldSize.FIELD_X / 2 - (6 * 2) - 24
      var y = fieldSize.FIELD_Y / 2 - (6 * 2)
      soundSystem.musicPlay(musicId.r8_1)
      displaySystem.text('VS', x - 4, y - 4, colorId.LIGHT_BLUE, 4)
      displaySystem.text('VS', x, y, colorId.BLUE, 4)
      displaySystem.text('VS', x + 4, y + 4, colorId.DARK_BLUE, 4)
      playerSystem.x = x - 48
      playerSystem.y = y + 8
      switch(i){
        case 0: displaySystem.sprite(spriteId.enemyBigBox, x + 80, y - 16, 2, 2, 4); break
        case 1: displaySystem.sprite(spriteId.enemyBigCube, x + 80, y - 16, 2, 2, 4); break
        case 2: displaySystem.sprite(spriteId.enemyDiamond, x + 80, y - 16, 2, 2, 4); break
      }
    } else if(time == sectionEnd[i] + 1){
      soundSystem.musicStop()
    }
  }

  if(sectionTime.indexOf(time) != -1){
    if(!this.getBossMode()){
      switch(time){
        case sectionTime[0]: fieldSystem.insertEnemy(enemyId.E860_bossBox); break
        case sectionTime[1]: fieldSystem.insertEnemy(enemyId.E861_bossCube, undefined, undefined, 'phase1'); break
        case sectionTime[2]: fieldSystem.insertEnemy(enemyId.E861_bossCube, fieldSize.FIELD_X / 2, undefined, 'phase2-1'); break
        case sectionTime[3]: fieldSystem.insertEnemy(enemyId.E861_bossCube, fieldSize.FIELD_X / 2, undefined, 'phase2-2'); break
        case sectionTime[4]: fieldSystem.insertEnemy(enemyId.E861_bossCube, fieldSize.FIELD_X / 2, undefined, 'phase2-3'); break
        case sectionTime[5]: fieldSystem.insertEnemy(enemyId.E861_bossCube, undefined, undefined, 'phase3'); break
        case sectionTime[6]: fieldSystem.insertEnemy(enemyId.E863_bossDiamond); break
      }
      this.startBossMode()
    }
  }

  if(frame % 60 == 0){
    switch(time){
      case sectionTime[5] + 1: soundSystem.requestPush(soundId.enemyDieBig, 10, 6); this.fieldEffectInsert(soundId.enemyDieBig, 10, 6); break
      case sectionTime[5] + 2: soundSystem.requestPush(soundId.enemyDieCar, 10, 6); this.fieldEffectInsert(soundId.enemyDieCar, 10, 6); break
      case sectionTime[5] + 3: soundSystem.requestPush(soundId.enemyDieMetal, 10, 6); this.fieldEffectInsert(soundId.enemyDieMetal, 10, 6); break
      case sectionTime[5] + 4: soundSystem.requestPush(soundId.enemyDieMiddle, 10, 6); this.fieldEffectInsert(soundId.enemyDieMiddle, 10, 6); break
      case sectionTime[5] + 5: soundSystem.requestPush(soundId.enemyDieGemC, 10, 6); this.fieldEffectInsert(soundId.enemyDieGemC, 10, 6); break
      case sectionTime[5] + 6: soundSystem.requestPush(soundId.enemyDiePillar, 10, 6); this.fieldEffectInsert(soundId.enemyDiePillar, 10, 6); break
      case sectionTime[5] + 7: soundSystem.requestPush(soundId.enemyDieBig, 15, 4); this.fieldEffectInsert(soundId.enemyDieBig, 30, 2); break
      case sectionTime[5] + 8: soundSystem.requestPush(soundId.enemyDieBig, 15, 4); this.fieldEffectInsert(soundId.enemyDieBig, 30, 2); break
    }
  }

  if(time == sectionTime[0]){
    this.bossMeterView(enemyId.E860_bossBox)
    soundSystem.musicPlay(musicId.r1_b)
  } else if(time >= sectionTime[1] && time <= sectionTime[5]){
    var getEnemy = fieldSystem.getIdValueIndexObject(fieldSystem.enemy, enemyId.E861_bossCube)
    if(getEnemy != null){
      switch(getEnemy.mainType){
        case 'phase1': this.setTime(sectionTime[1]); break
        case 'phase2-1': this.setTime(sectionTime[2]); break
        case 'phase2-2': this.setTime(sectionTime[3]); break
        case 'phase2-3': this.setTime(sectionTime[4]); break
        case 'phase3': this.setTime(sectionTime[5]); break
      }

      if(getEnemy.mainType == 'phase1') soundSystem.musicPlay(musicId.r1_b)
      else soundSystem.musicPlay(musicId.r3_b)
    }
  } else if(time == sectionTime[6]){
    soundSystem.musicPlay(musicId.r2_2)
    this.bossMeterView(enemyId.E863_bossDiamond)
  }

  if(this.getBossMode() && this.noEnemyCheck()){
    this.endBossMode()
    soundSystem.musicStop()
    switch(time){
      case sectionTime[0]:
        soundSystem.requestPush(enemyData[enemyId.E860_bossBox].dieSoundId, 20, 6)
        this.fieldEffectInsert(enemyData[enemyId.E860_bossBox].dieSoundId, 20, 6)
        break
      case sectionTime[6]:
        soundSystem.requestPush(enemyData[enemyId.E863_bossDiamond].dieSoundId, 20, 6)
        this.fieldEffectInsert(enemyData[enemyId.E863_bossDiamond].dieSoundId, 20, 6)
        break
    }
  }

  if(time >= this.finishTime - 4){
    fieldSystem.setBackground(26)
    if(time <= this.finishTime - 2 && frame % 60 == 0){
      soundSystem.requestPush(soundId.enemyDieGemA, 1, 25)
      soundSystem.requestPush(soundId.enemyDieGemB, 1, 25)
      this.fieldEffectInsert(soundId.enemyDieGemA, 2, 25)
    }
  }
}
roundData[roundId.r9_1].setData(spriteId.r9_1, 26, '9-1', 180, 320000, 80, 600)
roundData[roundId.r9_1].process = function(){
  var time = this.getTime()

  if(time >= 2 && time <= 10) this.fieldEnemyInsert(enemyId.E900_lamp)
  else if(time >= 11 && time <= 19) this.fieldEnemyInsert(enemyId.E901_plate)
  else if(time >= 20 && time <= 29) this.fieldEnemyInsert(enemyId.E902_candle)
  else if(time >= 30 && time <= 39) this.fieldEnemyInsert(enemyId.E903_hotdog)
  else if(time >= 40 && time <= 60){
    switch(mySystem.randomInt(0, 4)){
      case 0: this.fieldEnemyInsert(enemyId.E900_lamp); break
      case 1: this.fieldEnemyInsert(enemyId.E901_plate); break
      case 2: this.fieldEnemyInsert(enemyId.E902_candle); break
      case 3: this.fieldEnemyInsert(enemyId.E903_hotdog); break
    }
  } else if(time >= 61 && time <= 70){
    switch(mySystem.randomInt(0, 1)){
      case 0: this.fieldEnemyInsert(enemyId.E904_monsterRed); break
      case 1: this.fieldEnemyInsert(enemyId.E905_monsterBlue); break
    }
  } else if(time >= 71 && time <= 80){
    switch(mySystem.randomInt(0, 2)){
      case 0: this.fieldEnemyInsert(enemyId.E906_potion); break
      case 1: this.fieldEnemyInsert(enemyId.E907_bus); break
      case 2: this.fieldEnemyInsert(enemyId.E908_robotWhite); break
    }
  }

  if(time >= 80 && time <= 120){
    switch(mySystem.randomInt(0, 4)){
      case 0: this.fieldEnemyInsert(enemyId.E900_lamp, 120); break
      case 1: this.fieldEnemyInsert(enemyId.E901_plate, 120); break
      case 2: this.fieldEnemyInsert(enemyId.E902_candle, 120); break
      case 3: this.fieldEnemyInsert(enemyId.E903_hotdog, 120); break
    }
    switch(mySystem.randomInt(0, 1)){
      case 0: this.fieldEnemyInsert(enemyId.E904_monsterRed, 120); break
      case 1: this.fieldEnemyInsert(enemyId.E905_monsterBlue, 120); break
    }
    switch(mySystem.randomInt(0, 2)){
      case 0: this.fieldEnemyInsert(enemyId.E906_potion, 120); break
      case 1: this.fieldEnemyInsert(enemyId.E907_bus, 120); break
      case 2: this.fieldEnemyInsert(enemyId.E908_robotWhite, 120); break
    }
    if(time == 80 || time == 85) this.fieldEnemyInsert(enemyId.E900_lamp, 15)
    else if(time == 90 || time == 95) this.fieldEnemyInsert(enemyId.E903_hotdog, 15)
    else if(time == 100) this.fieldEnemyInsert(enemyId.E902_candle, 10)
    else if(time == 110) this.fieldEnemyInsert(enemyId.E902_candle, 10)

  } else if(time >= 121 && time <= 130){
    this.fieldEnemyInsert(enemyId.E907_bus)
  } else if(time >= 131 && time <= 140){
    this.fieldEnemyInsert(enemyId.E906_potion)
  } else if(time >= 141 && time <= 150){
    this.fieldEnemyInsert(enemyId.E908_robotWhite)
  }

  if(time == 152 || time == 155 || time == 158) this.fieldEnemyInsert(enemyId.E900_lamp, 20)
  else if(time == 160 || time == 163) this.fieldEnemyInsert(enemyId.E901_plate, 6)
  else if(time == 166 || time == 167) this.fieldEnemyInsert(enemyId.E900_lamp, 20)
  else if(time == 170 || time == 173) this.fieldEnemyInsert(enemyId.E901_plate, 6)

  this.hasEnemyTimeStop(this.finishTime - 4)
  if(time >= 1 && time <= this.finishTime - 4) soundSystem.musicPlay(musicId.r9_1)
  else soundSystem.musicStop()
}
roundData[roundId.r9_2].setData(spriteId.enemyPurpleIllusion, 27, 'FINAL', 100, 1000000, 80, 600)
roundData[roundId.r9_2].process = function(){
  var time = this.getTime()
  var frame = this.getTimeData().frame
  if(time >= 1 && time <= 25){
    this.fieldEnemyInsert(enemyId.E900_lamp)
    this.fieldEnemyInsert(enemyId.E901_plate)
  }
  this.hasEnemyTimeStop(26)

  if(time >= 30 && time <= 58){
    var phaseMax = 28
    var phaseHpLine = phaseMax - (time - 30)
    if(!this.getBossMode()){
      fieldSystem.insertEnemy(enemyId.E910_finalBoss, undefined, undefined, 'phase1', '' + phaseHpLine)
      this.startBossMode()
    } else if(this.getBossMode()){
      var getEnemy = fieldSystem.getIdValueIndexObject(fieldSystem.enemy, enemyId.E910_finalBoss)
      if(getEnemy != null){
        this.setTime(30 + phaseMax - Number(getEnemy.subType))
        switch(getEnemy.mainType){
          case 'phase1': soundSystem.musicPlay(musicId.r9_2); break
          case 'phase2': soundSystem.musicPlay(musicId.r1_b); break
          case 'phase3': soundSystem.musicPlay(musicId.r1_b); break
          case 'phase4': soundSystem.musicPlay(musicId.r3_b); break
          case 'phase5': soundSystem.musicPlay(musicId.r3_b); break
          case 'phase6': soundSystem.musicPlay(musicId.r3_b); break
          case 'phase7': soundSystem.musicPlay(musicId.r9_2); break
        }
      }

      if(this.noEnemyCheck()){
        this.endBossMode()
        this.setTime(60)
      }
    }
  }

  if(time >= 60 && time <= 78 && frame % 60 == 0){
    switch(time){
      case 63: soundSystem.requestPush(soundId.enemyDieSmall, 3, 20); this.fieldEffectInsert(soundId.enemyDieSmall, 3, 20); break
      case 64: soundSystem.requestPush(soundId.enemyDieSmall, 4, 15); this.fieldEffectInsert(soundId.enemyDieSmall, 4, 15); break
      case 65: soundSystem.requestPush(soundId.enemyDieSmall, 5, 12); this.fieldEffectInsert(soundId.enemyDieSmall, 5, 12); break
      case 66: soundSystem.requestPush(soundId.enemyDieSmall, 6, 10); this.fieldEffectInsert(soundId.enemyDieSmall, 6, 10); break
      case 67: soundSystem.requestPush(soundId.enemyDieSmall, 7, 8); this.fieldEffectInsert(soundId.enemyDieSmall, 7, 8); break
      case 68: soundSystem.requestPush(soundId.enemyDieSmall, 10, 6); this.fieldEffectInsert(soundId.enemyDieSmall, 10, 6); break
      case 69: case 70: case 71: soundSystem.requestPush(soundId.enemyDieSmall, 10, 6); this.fieldEffectInsert(soundId.enemyDieSmall, 10, 6); break
      case 72: case 73: soundSystem.requestPush(soundId.enemyDieBig, 15, 4); this.fieldEffectInsert(soundId.enemyDieBig, 15, 4); break
      case 74: case 75: soundSystem.requestPush(soundId.enemyDieBig, 20, 3); this.fieldEffectInsert(soundId.enemyDieBig, 20, 3); break
    }

    if(time >= 76) fieldSystem.setBackground(23)
  }

  if(time >= 80 && time <= 99){
    fieldSystem.setBackground(23)
    var textX = 0
    var textY = 0
    var text = ['congratulations! :)', 'final round clear!', 'Thank you for playing.', 
    'Try Ex rounds level 90 or higher.', 'and find the secret in 3-3, 5-1', '---',
    'this planet is a mystery.', 'Is this planet an illusion?', 'i do not know.', '- THE END -']
    displaySystem.text(text[0], textX, textY + (8 * 1), colorId.PURPLE, 2)
    for(var i = 1; i < text.length; i++){
      displaySystem.text(text[i], textX, textY + ((i + 2) * 8), colorId.DARK_BLUE)
    }
  }

  if(time >= 1 && time <= 29) soundSystem.musicPlay(musicId.r9_2)
  else if(time >= 60 && time <= 80) soundSystem.musicStop()
  else if(time >= 81 && time <= 97) soundSystem.musicPlay(musicId.r9_2)
  else if(time >= 97) soundSystem.musicStop()
}
roundData[roundId.r3_3A].setData(spriteId.enemyRobotOrange, 28, '3-3A', 150, 545000, 90, 900)
roundData[roundId.r3_3A].process = function(){
  var time = this.getTime()
  var phase = Math.floor(time / 30) + 1
  if(time % 30 >= 1 && time % 30 <= 25){
    switch(phase){
      case 1:
        this.fieldEnemyInsert(enemyId.E810_robotA)
        this.fieldEnemyInsert(enemyId.E811_robotB)
        this.fieldEnemyInsert(enemyId.E820_robotWhite, 120)
        break
      case 2:
        this.fieldEnemyInsert(enemyId.E812_electronicA, 50)
        this.fieldEnemyInsert(enemyId.E813_electronicB, 50)
        break
      case 3:
        this.fieldEnemyInsert(enemyId.E807_sapphire, 50)
        this.fieldEnemyInsert(enemyId.E808_gold, 50)
        this.fieldEnemyInsert(enemyId.E809_diamond, 50)
        break
      case 4:
        this.fieldEnemyInsert(enemyId.E3A01_robotOrange)
        this.fieldEnemyInsert(enemyId.E3A02_robotCyan)
        break
      case 5:
        this.fieldEnemyInsert(enemyId.E3A03_superElectnoricA)
        this.fieldEnemyInsert(enemyId.E3A04_superElectnoricB)
        break
    }
  }
  if(time % 30 == 26){
    if(this.noEnemyCheck()) fieldSystem.requestTimeStop(false)
    else fieldSystem.requestTimeStop(true)
  }
  if(time % 30 == 27){
    this.bossMeterView(enemyId.E3A00_superLever)
    if(!this.getBossMode()){
      fieldSystem.insertEnemy(enemyId.E3A00_superLever)
      this.startBossMode()
      soundSystem.musicPlay(musicId.r1_b)
    } else if(this.getBossMode() && this.noEnemyCheck()){
      this.endBossMode()
      soundSystem.musicStop()
    }
  }

  if(time % 30 >= 1 && time % 30 <= 25) soundSystem.musicPlay(musicId.r3_2)
}
roundData[roundId.r3_3B].setData(spriteId.enemySuperElectronicA, 28, '3-3B', 150, 555000, 90, 900)
roundData[roundId.r3_3B].process = function(){
  var time = this.getTime()
  var phase = Math.floor(time / 50) + 1
  if(time % 50 >= 1 && time % 50 <= 45){
    switch(phase){
      case 1:
        this.fieldEnemyInsert(enemyId.E810_robotA, 120)
        this.fieldEnemyInsert(enemyId.E811_robotB, 120)
        this.fieldEnemyInsert(enemyId.E820_robotWhite, 180)
        this.fieldEnemyInsert(enemyId.E3A01_robotOrange, 120)
        this.fieldEnemyInsert(enemyId.E3A02_robotCyan, 120)
        break
      case 2:
        this.fieldEnemyInsert(enemyId.E812_electronicA, 90)
        this.fieldEnemyInsert(enemyId.E813_electronicB, 90)
        this.fieldEnemyInsert(enemyId.E3A03_superElectnoricA, 90)
        this.fieldEnemyInsert(enemyId.E3A04_superElectnoricB, 90)
        break
      case 3:
        this.fieldEnemyInsert(enemyId.E807_sapphire, 30)
        this.fieldEnemyInsert(enemyId.E808_gold, 30)
        this.fieldEnemyInsert(enemyId.E809_diamond, 30)
        break
    }
  }

  if(time % 50 == 46){
    if(this.noEnemyCheck()) fieldSystem.requestTimeStop(false)
    else fieldSystem.requestTimeStop(true)
  }
  if(time % 50 == 47){
    this.bossMeterView(enemyId.E3A00_superLever)
    if(!this.getBossMode()){
      fieldSystem.insertEnemy(enemyId.E3A00_superLever)
      this.startBossMode()
      soundSystem.musicPlay(musicId.r1_b)
    } else if(this.getBossMode() && this.noEnemyCheck()){
      this.endBossMode()
      soundSystem.musicStop()
    }
  }

  if(time % 50 >= 1 && time % 50 <= 45) soundSystem.musicPlay(musicId.r3_2)
}
roundData[roundId.r3_3C].setData(spriteId.enemyComputerMyComputer, 8, '3-3C', 60, 565000, 90, 900)
roundData[roundId.r3_3C].process = function(){
  var time = this.getTime()
  var frame = this.getTimeData().frame
  var sectionTime = [40, 41, 42, 43, 44, 45, 46, 47]
  if(time >= 1 && time <= 35){
    this.fieldEnemyInsert(enemyId.E812_electronicA, 90)
    this.fieldEnemyInsert(enemyId.E813_electronicB, 90)
    this.fieldEnemyInsert(enemyId.E3A03_superElectnoricA, 90)
    this.fieldEnemyInsert(enemyId.E3A04_superElectnoricB, 90)
  }
  this.hasEnemyTimeStop(sectionTime[0] - 3)


  if(sectionTime.indexOf(time) != -1){
    this.bossMeterView(enemyId.E3C00_superComputer, 'computer hp: ')
    if(!this.getBossMode()){
      switch(time){
        case sectionTime[0]: fieldSystem.insertEnemy(enemyId.E3C00_superComputer); break
        case sectionTime[1]: fieldSystem.insertEnemy(enemyId.E3C00_superComputer, undefined, undefined, 'phase2'); break
        case sectionTime[2]: fieldSystem.insertEnemy(enemyId.E3C00_superComputer, undefined, undefined, 'phase3'); break
        case sectionTime[3]: fieldSystem.insertEnemy(enemyId.E3C00_superComputer, undefined, undefined, 'phase4'); break
        case sectionTime[4]: fieldSystem.insertEnemy(enemyId.E3C00_superComputer, undefined, undefined, 'phase5'); break
        case sectionTime[5]: fieldSystem.insertEnemy(enemyId.E3C00_superComputer, undefined, undefined, 'phase6'); break
        case sectionTime[6]: fieldSystem.insertEnemy(enemyId.E3C00_superComputer, undefined, undefined, 'phase7'); break
        case sectionTime[7]: fieldSystem.insertEnemy(enemyId.E3C00_superComputer, undefined, undefined, 'phase8'); break
      }
      this.startBossMode()
    } else if(this.noEnemyCheck(enemyId.E3C00_superComputer) && this.getBossMode()){
      fieldSystem.requestAllEnemyDelete()
      this.endBossMode()
    }
  }

  if((time == sectionTime[7] + 2 || time == sectionTime[7] + 6) && frame % 60 == 1){
    soundSystem.requestPush(soundId.enemyDieBig, 24, 10)
    this.fieldEffectInsert(soundId.enemyDieBig, 48, 5)
  }

  if(time >= 1 && time <= 38) soundSystem.musicPlay(musicId.r3_2)
  else if(time == sectionTime[1]) soundSystem.musicPlay(musicId.r1_b)
  else if(time >= sectionTime[2] && time <= sectionTime[4]) soundSystem.musicPlay(musicId.r3_1)
  else if(time >= sectionTime[5] && time <= sectionTime[7]) soundSystem.musicPlay(musicId.r3_b)
  else if(time >= sectionTime[7] + 1) soundSystem.musicStop()
}
roundData[roundId.r5_1A].setData(spriteId.r5_A, 29, '5-1?', 180, 600000, 100, 1000)
roundData[roundId.r5_1A].process = function(){
  var time = this.getTime()
  if(time >= 10 && time <= 35){
    this.fieldEnemyInsert(enemyId.E511_whiteCloud)
    this.fieldEnemyInsert(enemyId.E512_blackCloud)
  } else if(time >= 40 && time <= 75){
    this.fieldEnemyInsert(enemyId.E510_blackMonster, 80)
    this.fieldEnemyInsert(enemyId.E511_whiteCloud, 120)
    this.fieldEnemyInsert(enemyId.E512_blackCloud, 120)
  } else if(time >= 80 && time <= 115){
    this.fieldEnemyInsert(enemyId.E511_whiteCloud, 40)
    this.fieldEnemyInsert(enemyId.E512_blackCloud, 40)
  } else if(time >= 120 && time <= 165){
    this.fieldEnemyInsert(enemyId.E510_blackMonster, 50)
    this.fieldEnemyInsert(enemyId.E511_whiteCloud, 90)
    this.fieldEnemyInsert(enemyId.E512_blackCloud, 90)
  }
  this.hasEnemyTimeStop(166)
  if(time >= 168 && time <= 178) displaySystem.text('and there was nothing.', 0, 8, colorId.WHITE)

  if(time >= 11 && time <= 41) soundSystem.musicPlay(musicId.r9_2)
  else if(time >= 42 && time <= 78) soundSystem.musicPlay(musicId.r5_1)
  else if(time >= 80 && time <= 119) soundSystem.musicPlay(musicId.r9_2)
  else if(time >= 120 && time <= 167) soundSystem.musicPlay(musicId.r5_1)
  else soundSystem.musicStop()
}
roundData[roundId.rEx_1].setData(spriteId.rEx_1, 30, 'Ex-1', 180, 532000, 90, 700)
roundData[roundId.rEx_1].process = function(){
  var time = this.getTime()
  if(time >= 1 && time <= 20){
    this.fieldEnemyInsert(enemyId.E100_bullonRed, 20)
    this.fieldEnemyInsert(enemyId.E101_bullonBlue, 20)
    this.fieldEnemyInsert(enemyId.E102_drinkWater, 20)
    this.fieldEnemyInsert(enemyId.E103_drinkEnergy, 20)
  } else if(time >= 21 && time <= 40){
    this.fieldEnemyInsert(enemyId.E210_garnet)
    this.fieldEnemyInsert(enemyId.E215_silver)
    this.fieldEnemyInsert(enemyId.E214_gold)
    this.fieldEnemyInsert(enemyId.E216_diamond)
    this.fieldEnemyInsert(enemyId.E213_sapphire)
  } else if(time >= 41 && time <= 60){
    this.fieldEnemyInsert(enemyId.E300_robotRed)
    this.fieldEnemyInsert(enemyId.E301_robotBlue)
    this.fieldEnemyInsert(enemyId.E308_electronicA)
    this.fieldEnemyInsert(enemyId.E309_electronicB)
  } else if(time >= 61 && time <= 80){
    this.fieldEnemyInsert(enemyId.E400_magician)
    this.fieldEnemyInsert(enemyId.E401_summoner)
    this.fieldEnemyInsert(enemyId.E402_master, 90)
  } else if(time >= 81 && time <= 100){
    this.fieldEnemyInsert(enemyId.E840_potion)
    this.fieldEnemyInsert(enemyId.E840_potion)
  } else if(time >= 101 && time <= 120){
    this.fieldEnemyInsert(enemyId.E610_bubbleSmall)
    this.fieldEnemyInsert(enemyId.E611_bubbleMiddle)
    this.fieldEnemyInsert(enemyId.E620_oxygenTank)
    this.fieldEnemyInsert(enemyId.E622_fishBlack)
    this.fieldEnemyInsert(enemyId.E623_submarine)
  } else if(time >= 121 && time <= 140){
    this.fieldEnemyInsert(enemyId.E700_square)
    this.fieldEnemyInsert(enemyId.E714_smallCubeGreen)
    this.fieldEnemyInsert(enemyId.E720_cubeNormal)
  } else if(time >= 141 && time <= 160){
    this.fieldEnemyInsert(enemyId.E223_bus)
    this.fieldEnemyInsert(enemyId.E330_machineBall)
    this.fieldEnemyInsert(enemyId.E415_crazyGuy)
    this.fieldEnemyInsert(enemyId.E303_robotWhite)
    this.fieldEnemyInsert(enemyId.E106_drawer)
  } else if(time >= 161 && time <= 176){
    this.fieldEnemyInsert(enemyId.E900_lamp, 100)
    this.fieldEnemyInsert(enemyId.E901_plate, 100)
    this.fieldEnemyInsert(enemyId.E902_candle, 100)
    this.fieldEnemyInsert(enemyId.E903_hotdog, 100)
  }
  this.hasEnemyTimeStop(177)

  if(time >= 1 && time <= 177) soundSystem.musicPlay(musicId.r7_4)
  else soundSystem.musicStop()
}
roundData[roundId.rEx_2].setData(spriteId.rEx_2, 31, 'Ex-2', 180, 564000, 90, 800)
roundData[roundId.rEx_2].process = function(){
  var time = this.getTime()
  if(time >= 1 && time <= 30){
    this.fieldEnemyInsert(enemyId.E304_metalRed)
    this.fieldEnemyInsert(enemyId.E113_bigRedMonster)
    this.fieldEnemyInsert(enemyId.E205_bigBlueMonster)
    this.fieldEnemyInsert(enemyId.E107_sungglasses)
    this.fieldEnemyInsert(enemyId.E111_bigBall)
  } else if(time >= 31 && time <= 60){
    this.fieldEnemyInsert(enemyId.E610_bubbleSmall)
    this.fieldEnemyInsert(enemyId.E611_bubbleMiddle)
    this.fieldEnemyInsert(enemyId.E701_squarePiece)
    this.fieldEnemyInsert(enemyId.E705_trianglePiece)
    this.fieldEnemyInsert(enemyId.E717_bigCubeGrey)
  } else if(time >= 61 && time <= 90){
    this.fieldEnemyInsert(enemyId.E623_submarine)
    this.fieldEnemyInsert(enemyId.E301_robotBlue)
    this.fieldEnemyInsert(enemyId.E713_bigCubeBlue)
    this.fieldEnemyInsert(enemyId.E630_plasticTrash)
    this.fieldEnemyInsert(enemyId.E120_streetLight)
  } else if(time >= 91 && time <= 120){
    this.fieldEnemyInsert(enemyId.E121_utilityPole)
    this.fieldEnemyInsert(enemyId.E407_brickDark)
    this.fieldEnemyInsert(enemyId.E721_cubeBig)
    this.fieldEnemyInsert(enemyId.E624_camera)
  } else if(time >= 121 && time <= 150){
    this.fieldEnemyInsert(enemyId.E836_car)
    this.fieldEnemyInsert(enemyId.E837_bus)
    this.fieldEnemyInsert(enemyId.E834_rocketA)
    this.fieldEnemyInsert(enemyId.E835_rocketB)
  } else if(time >= 151 && time <= 176){
    this.fieldEnemyInsert(enemyId.E216_diamond, 15)
  }
  this.hasEnemyTimeStop(177)

  if(time >= 1 && time <= 176) soundSystem.musicPlay(musicId.r7_4)
  else soundSystem.musicStop()
}
roundData[roundId.rEx_3].setData(spriteId.rEx_3, 23, 'Ex-3', 180, 596000, 90, 800)
roundData[roundId.rEx_3].process = function(){
  var time = this.getTime()
  if(time >= 1 && time <= 30){
    this.fieldEnemyInsert(enemyId.E107_sungglasses, 10)
    this.fieldEnemyInsert(enemyId.E901_plate, 40)
  } else if(time >= 31 && time <= 60){
    this.fieldEnemyInsert(enemyId.E201_torch, 30)
    this.fieldEnemyInsert(enemyId.E600_potionRed, 30)
    this.fieldEnemyInsert(enemyId.E902_candle)
  } else if(time >= 61 && time <= 90){
    this.fieldEnemyInsert(enemyId.E415_crazyGuy, 30)
    this.fieldEnemyInsert(enemyId.E303_robotWhite, 30)
  } else if(time >= 91 && time <= 120){
    this.fieldEnemyInsert(enemyId.E308_electronicA)
    this.fieldEnemyInsert(enemyId.E309_electronicB)
    this.fieldEnemyInsert(enemyId.E215_silver, 40)
    this.fieldEnemyInsert(enemyId.E214_gold, 40)
    this.fieldEnemyInsert(enemyId.E216_diamond, 40)
  } else if(time >= 121 && time <= 150){
    this.fieldEnemyInsert(enemyId.E330_machineBall, 40)
    this.fieldEnemyInsert(enemyId.E111_bigBall, 40)
    this.fieldEnemyInsert(enemyId.E331_machineCar, 40)
    this.fieldEnemyInsert(enemyId.E110_bigCar, 40)
  } else if(time >= 151 && time <= 176){
    this.fieldEnemyInsert(enemyId.E817_sculpture, 30)
  }

  this.hasEnemyTimeStop(177)

  if(time >= 1 && time <= 176) soundSystem.musicPlay(musicId.r7_4)
  else soundSystem.musicStop()
}

})()

var fieldSystem = {
  round:{
    number:0,
    text:'---',
    finishTime:0,
    time:0,
    frame:0,
    plusTime:0,
    plusFrame:0,
    totalFrame:0,
    flagNumber:0,
    isClear:false,
    isTimeStop:false,
    clearDelayCount:0,
    scoreUser:0,
    scoreClear:0,
    scoreTotal:0,
    scoreEnimation:0,
    gold:0,
    isGetScoreTotal:false,
    isPause:false,
    isGameover:false,
    isComplete:false,
    isBossMode:false,
    process:function(){
      this.totalFrame++
      if(!this.isTimeStop) this.frame++
      else this.plusFrame++

      if(this.frame >= 60 && this.time < this.finishTime){
        this.frame -= 60
        this.time++
      }
      if(this.plusFrame >= 60){
        this.plusFrame -= 60
        this.plusTime++
      }

      if(!this.isGameover && this.time >= this.finishTime){
        this.isClear = true
      } else if(!this.isClear && playerSystem.hp <= 0){
        this.isGameover = true
      }

      if(this.isClear || this.isGameover){
        soundSystem.musicStop()
        if(!this.isComplete){
          this.scoreCalculate()
          this.isComplete = true
        }
        if(this.isClear && this.clearDelayCount <= 120 && this.clearDelayCount % 4 == 0){
          soundSystem.play(soundId.score, 0)
        }

        this.clearDelayCount++
        if(this.isGameover){
          this.scoreEnimation = this.scoreTotal
        }

        if(this.isClear && this.clearDelayCount <= 120){
          this.scoreEnimation = (this.scoreTotal / 120 * this.clearDelayCount)
          this.scoreEnimation = Math.floor(this.scoreEnimation)
        } else if(this.clearDelayCount >= 121){
          this.scoreEnimation = this.scoreTotal
        }

        if(this.clearDelayCount >= 240){
          if(mainSystem.optionMenu.isResultAutoSkip || btnp(buttonId.A) ){
            mainSystem.mode = mainSystem.modeString.MAINMENU
            fieldSystem.init()
            playerSystem.init()
          }
        }
      }
    },
    scoreCalculate:function(){
      if(this.isGetScoreTotal) return

      if(this.isClear) this.scoreClear = roundData[this.number].clearBonus
      else this.scoreClear = 0

      this.scoreTotal = this.scoreUser + this.scoreClear
      this.scoreEnimation = 0
      this.isGetScoreTotal = true

      this.gold = Math.floor(this.scoreUser / 100)
      playerSystem.plusExp(this.scoreClear)
      playerSystem.gold += this.gold
    },
    display:function(){
      var roundText = 'ROUND:' + this.text + ',TIME:' + this.time + '/' + this.finishTime + ',+' + this.plusTime
      var timePercentMeter = mySystem.getPercent(this.time, this.finishTime) / 100
      var X = 121
      var Y = 128

      displaySystem.rect(X, Y, X, 8, colorId.GREY)
      displaySystem.shadowRect(X, Y, X * timePercentMeter, 8, colorId.DARK_GREEN, colorId.DARK_GREY)
      displaySystem.smallText(roundText, X, Y, colorId.LIGHT_GREEN, colorId.DARK_GREY)

      if(this.isClear || this.isGameover){
        var x = 40
        var y = 10
        if(this.isClear){
          displaySystem.rect(x, y - 8, 160, 96, colorId.DARK_GREEN)
          displaySystem.text('round clear', x, y+(8*-1), colorId.GREEN, 2)
        } else if(this.isGameover){
          displaySystem.rect(x, y - 8, 160, 96, colorId.RED)
          displaySystem.text('game over', x, y+(8*-1), colorId.WHITE, 2)
        }

        displaySystem.digitalNumber('score: ' + this.scoreUser , x, y + (8 * 1))
        displaySystem.digitalNumber('clear: ' + this.scoreClear, x, y + (8 * 2))
        displaySystem.digitalNumber('-----  ', x, y + (8 * 3))
        displaySystem.digitalNumber('total: ' + this.scoreEnimation, x, y + (8 * 4))
        displaySystem.digitalNumber('gold + ' + this.gold, x, y + (8 * 5))
        displaySystem.digitalNumber('lv: ' + playerSystem.lv + '(' + playerSystem.getExpPercent().toFixed(2) + '%)', x, y + (8 * 6))
        displaySystem.digitalNumber('exp: ' + playerSystem.exp + '/' + playerSystem.getExpMax(), x, y + (8 * 7))
        if(this.clearDelayCount >= 242) displaySystem.smallText('press A BUTTON(Z key) to continue...', x, y + (8 * 9), colorId.WHITE)
      }
    },
    init:function(){
      this.number = 0
      this.text = ''
      this.finishTime = 0
      this.time = 0
      this.frame = 0
      this.totalFrame = 0
      this.isClear = false
      this.scoreUser = 0
      this.scoreClear = 0
      this.scoreTotal = 0
      this.scoreEnimation = 0
      this.gold = 0
      this.isGetScoreTotal = false
      this.clearDelayCount = 0
      this.isTimeStop = false
      this.plusTime = 0
      this.plusFrame = 0
      this.totalFrame = 0
      this.flagNumber = 0
      this.isPause = false
      this.isGameover = false
      this.isComplete = false
      this.isBossMode = false
    },
    setRoundData:function(){
      var data = roundData[this.number]
      this.finishTime = data.finishTime
      this.text = data.roundText
      fieldSystem.background.number = data.backgroundNumber
    },
  },
  requestRoundClear:function(){
    if(!this.round.isGameover) this.round.isClear = true
  },
  requestPlusScoreUser:function(score){
    this.round.scoreUser += score
    playerSystem.plusExp(score)
  },
  requestTimeStop:function(boolValue){
    this.round.isTimeStop = typeof boolValue === 'undefined' ? true : boolValue
  },
  requestPause:function(){
    this.round.setRoundData()
    this.round.isPause = true
  },
  requestBossMode:function(boolValue){
    this.round.isBossMode = typeof boolValue === 'undefined' ? true : boolValue
  },
  requestAllEnemyDelete:function(){
    for(i = 0; i < this.enemy.length; i++){
      if(this.enemy[i].isUsing) this.enemy[i].init()
    }
  },
  requestAllEBulletDelete:function(){
    for(i = 0; i < this.ebullet.length; i++){
      if(this.ebullet[i].isUsing) this.ebullet[i].init()
    }
  },
  background:{
    number:0,
    color:0,
    x:0,
    y:0,
    speedX:0.5,
    speedY:0,
    tileBaseX:0,
    tileBaseY:0,
    tileMaxX:0,
    tileMaxY:0,
    tileSizeX:0,
    tileSizeY:0,
    tileX:0,
    tileY:0,
    outputX:0,
    outputY:0,
    process:function(){
      if(this.x >= 240) this.x = 0
      this.x += this.speedX
    },
    positionCalculation:function(){
      this.tileBaseX = 30 * ((this.number * 2) % 8)
      this.tileBaseY = 17 * Math.floor(this.number/4)
      this.tileMaxX = 120

      this.tileSizeX = this.tileMaxX - this.tileX
      this.outputX = this.x % 8
      this.outputY = this.y % 8
      this.tileX = Math.floor(this.x / 8) + this.tileBaseX
      this.tileY = Math.floor(this.y / 8) + this.tileBaseY
    },
    display:function(){
      this.positionCalculation()
      displaySystem.mapDraw(this.tileX, this.tileY, 30+1, 17, 0 - this.outputX, 0)
    }
  },
  setBackground:function(number, speedX){
    if(this.background.number != number) this.background.x = 0
    this.background.number = number

    if(typeof speedX === 'number') this.speedX = speedX
    else this.speedX = 0.5
  },

  enemy:[new FieldObject()],
  weapon:[new FieldObject()],
  ebullet:[new FieldObject()],
  effect:[new FieldObject()],
  isArrayInsert:false,
  arrayInsert:function(){
    if(this.isArrayInsert) return

    this.isArrayInsert = true
    for(var i = 0; i < 119; i++) this.weapon.push(new FieldObject())
    for(i = 0; i < 49; i++) this.enemy.push(new FieldObject())
    for(i = 0; i < 99; i++) this.ebullet.push(new FieldObject())
    for(i = 0; i < 49; i++) this.effect.push(new FieldObject())
  },
  arrayReset:function(){
    for(var i = 0; i < this.weapon.length; i++) this.weapon[i].init()
    for(i = 0; i < this.enemy.length; i++) this.enemy[i].init()
    for(i = 0; i < this.ebullet.length; i++) this.ebullet[i].init()
    for(i = 0; i < this.effect.length; i++) this.effect[i].init()
  },
  getUnusedArrayIndex:function(arrayObject){
    for(var i = 0, l = arrayObject.length; i < l; i++){
      if(!arrayObject[i].isUsing) return i
    }

    return -1
  },
  getUsingCount:function(arrayObject, idValue){
    var count = 0
    var arrayLength = arrayObject.length
    if(typeof idValue === 'undefined'){
      for(var i = 0; i < arrayLength; i++){
        if(arrayObject[i].isUsing) count++
      }
    } else {
      for(i = 0; i < arrayLength; i++){
        if(arrayObject[i].isUsing && arrayObject[i].idValue == idValue) count++
      }
    }
    return count
  },
  getRandomIndex:function(arrayObject){
    var randomIndex = Math.floor(Math.random() * this.getUsingCount(arrayObject))
    for(var i = randomIndex; i < arrayObject.length; i++){
      if(arrayObject[i].isUsing) return i
    }
    for(i = 0; i < randomIndex; i++){
      if(arrayObject[i].isUsing) return i
    }
    return -1
  },
  getIdvalueIndex:function(arrayObject, idValue){
    for(var i = 0, l = arrayObject.length; i < l; i++){
      if(arrayObject[i].isUsing && arrayObject[i].idValue == idValue) return i
    }
    return -1
  },
  getIdValueIndexObject:function(arrayObject, idValue){
    for(var i = 0, l = arrayObject.length; i < l; i++){
      if(arrayObject[i].isUsing && arrayObject[i].idValue == idValue) return arrayObject[i]
    }
    return null
  },
  collision:function(object1, object2){
    if(object1.x < object2.x + (object2.w * 8 * object2.scale) &&
        object1.x + (object1.w * 8 * object1.scale) > object2.x &&
        object1.y < object2.y + (object2.h * 8 * object2.scale) &&
        object1.y + (object1.h * 8 * object1.scale) > object2.y) return true
    else return false
  },
  processWeapon:function(){
    for(var i = 0, l = this.weapon.length; i < l; i++){
      if(!this.weapon[i].isUsing) continue

      weaponData[this.weapon[i].idValue].move.call(this.weapon[i])
      weaponData[this.weapon[i].idValue].attack.call(this.weapon[i])
      weaponData[this.weapon[i].idValue].process.call(this.weapon[i])
    }
  },
  displayWeapon:function(){
    for(var i = 0, l = this.weapon.length; i < l; i++){
      if(!this.weapon[i].isUsing) continue
      this.weapon[i].display()
    }
  },
  insertWeapon:function(idValue, attack, x, y, mainType, subType){
    var index = this.getUnusedArrayIndex(this.weapon)
    if(index == -1 || idValue == null) return

    if(mainType == null) mainType = ''
    if(subType == null) subType = ''

    var g = weaponData[idValue]
    var w = this.weapon[index]

    w.index = index
    w.objectType = 'weapon'
    w.idValue = idValue
    w.spriteId = g.spriteId
    w.attack = attack
    w.x = x
    w.y = y
    w.w = g.w
    w.h = g.h
    w.subType = subType
    w.mainType = mainType
    w.speedX = g.speedX 
    w.speedY = g.speedY
    w.scale = g.scale
    w.isUsing = true
    w.delay = g.delay
    w.delayCount = 0
    w.repeatCount = g.repeatCount
    w.isChase = g.isChase

    if(w.isChase){
      w.targetNumber = this.getRandomIndex(this.enemy)
      if(w.targetNumber == -1){
        w.isChase = false
      }
    }
  },
  processEnemy:function(){
    for(var i = 0, l = this.enemy.length; i < l; i++){
      if(!this.enemy[i].isUsing) continue

      enemyData[this.enemy[i].idValue].move.call(this.enemy[i])
      enemyData[this.enemy[i].idValue].process.call(this.enemy[i])
    }
  },
  displayEnemy:function(){
    for(var i = 0, l = this.enemy.length; i < l; i++){
      if(!this.enemy[i].isUsing) continue
      this.enemy[i].display()

      if(!mainSystem.optionMenu.isShowEnemyHp) continue
      var e = this.enemy[i]
      displaySystem.meter(e.hp, e.hpMax, e.x, e.y + (e.h * 8 * e.scale), (e.w * 8 * e.scale), 1, colorId.LIGHT_GREEN, colorId.RED)
    }
  },
  insertEnemy:function(idValue, x, y, mainType, subType){
    var index = this.getUnusedArrayIndex(fieldSystem.enemy)
    if(index == -1 || idValue == null) return

    var g = enemyData[idValue]
    var e = this.enemy[index]
    
    e.index = index
    e.idValue = idValue
    e.spriteId = g.spriteId
    e.mainType = typeof mainType == 'undefined' ? '' : mainType
    e.subType = typeof subType == 'undefined' ? '' : subType
    e.hp = g.hp
    e.hpMax = g.hp
    e.attack = g.attack
    e.x = typeof x == 'undefined' ? mySystem.random(240, 280) : x
    e.y = typeof y == 'undefined' ? mySystem.random(0, 120) : y
    e.w = g.w
    e.h = g.h
    e.speedX = g.speedX 
    e.speedY = g.speedY
    e.scale = g.scale
    e.isUsing = true
    e.score = g.score
    e.dieSoundId = g.dieSoundId

    if(e.speedX > 0) e.speedX = -Math.abs(e.speedX)
  },
  insertEbullet:function(idValue, x, y, mainType, subType){
    var index = this.getUnusedArrayIndex(fieldSystem.ebullet)
    if(index == -1) return

    var e = this.ebullet[index]
    var g = ebulletData[idValue]
    e.idValue = idValue
    e.index = index
    e.mainType = typeof mainType == 'undefined' ? '' : mainType
    e.subType = typeof subType == 'undefined' ? '' : subType
    e.x = typeof x == 'undefined' ? mySystem.random(240, 280) : x
    e.y = typeof y == 'undefined' ? mySystem.random(0, 120) : y
    e.scale = g.scale
    e.w = g.w
    e.h = g.h
    e.spriteId = g.spriteId
    e.isUsing = true
    e.attack = g.attack
    e.repeatCount = g.repeatCount
  },
  displayEbullet:function(){
    for(var i = 0, l = this.ebullet.length; i < l; i++){
      if(!this.ebullet[i].isUsing) continue
      this.ebullet[i].display()
    }
  },
  processEbullet:function(){
    for(var i = 0, l = this.ebullet.length; i < l; i++){
      if(!this.ebullet[i].isUsing) continue

      ebulletData[this.ebullet[i].idValue].move.call(this.ebullet[i])
      ebulletData[this.ebullet[i].idValue].process.call(this.ebullet[i])
    }
  },
  insertEffectByEnemySound:function(soundIdValue, x, y, scale, firstDelay){
    if(soundIdValue == null) return
    var index = this.getUnusedArrayIndex(fieldSystem.effect)
    if(index == -1) return

    var e = this.effect[index]
    e.h = 1
    e.w = 1
    e.scale = typeof scale == 'undefined' ? 1 : scale
    e.x = typeof x == 'undefined' ? mySystem.random(0, fieldSize.FIELD_X - (e.scale * 8)) : x
    e.y = typeof y == 'undefined' ? mySystem.random(0, fieldSize.FIELD_Y - (e.scale * 8)) : y
    e.delayCount = typeof firstDelay == 'undefined' ? 0 : -firstDelay
    e.isUsing = true
    switch(soundIdValue){
      case soundId.enemyDieElectronic: e.spriteId = spriteId.effectDieElectronic; break
      case soundId.enemyDieBullon: e.spriteId = spriteId.effectDieBullon; break
      case soundId.enemyDiePotion: e.spriteId = spriteId.effectDiePotion; break
      case soundId.enemyDieCar: e.spriteId = spriteId.effectDieCar; break
      case soundId.enemyDieMiddle: e.spriteId = spriteId.effectDieMiddle; break
      case soundId.enemyDieMonster: e.spriteId = spriteId.effectDieMonster; break
      case soundId.enemyDieCube: e.spriteId = spriteId.effectDieCube; break
      case soundId.enemyDieRobotA:
      case soundId.enemyDieRobotB:
        e.spriteId = spriteId.effectDieRobot
        break
      case soundId.enemyDieBig:
      case soundId.enemyDieRocket:
        e.spriteId = spriteId.effectDieRocket
        break
      case soundId.enemyDieBubble:
      case soundId.enemyDieBubbleBig:
        e.spriteId = spriteId.effectDieBubble
        break
      case soundId.enemyDieCharacter:
      case soundId.enemyDieMaster:
        e.spriteId = spriteId.effectDieCharacter
        break
      case soundId.enemyDieBrick:
      case soundId.enemyDiePillar:
        e.spriteId = spriteId.effectDieBrink
        break
      case soundId.enemyDieGemA:
      case soundId.enemyDieGemB:
        e.spriteId = spriteId.effectDieGem
        break
      case soundId.enemyDieSmall:
      case soundId.enemyDieMetal:
      case soundId.enemyDieDrink:
      case soundId.enemyDieGemC:
      default:
        e.spriteId = spriteId.effectDieSmall
        break
    }
    e.tempNumber = e.spriteId
    e.spriteId = 0
  },
  displayEffect:function(){
    for(var i = 0, l = this.effect.length; i < l; i++){
      if(!this.effect[i].isUsing) continue
      this.effect[i].display()
    }
  },
  processEffect:function(){
    for(var i = 0, l = this.effect.length; i < l; i++){
      if(!this.effect[i].isUsing) continue

      effectFunction.process.call(this.effect[i])
    }
  },
  pauseCursor:0,
  processPause:function(){
    if(btnp(buttonId.DOWN, 20, 5) && this.pauseCursor < 3){
      this.pauseCursor++
      soundSystem.play(soundId.systemCursor)
    }
    if(btnp(buttonId.UP, 20, 5) && this.pauseCursor > 0){
      this.pauseCursor--
      soundSystem.play(soundId.systemCursor)
    }
    if(btnp(buttonId.A)){ 
      switch(this.pauseCursor){
        case 0: this.round.isPause = false; break
        case 1: mainSystem.mode = mainSystem.modeString.MAINMENU; soundSystem.play(soundId.systemCancle); break
        case 2: soundSystem.musicOn = !soundSystem.musicOn; break
        case 3: soundSystem.soundOn = !soundSystem.soundOn; break
      }
    }
  },
  displayPause:function(){
    if(this.round.isPause){
      var X = 48
      var Y = 16
      var SIZEY = 8
      var CURSORY = Y + (SIZEY * 2)
      var MUSICON = soundSystem.musicOn ? 'on' : 'off'
      var SOUNDON = soundSystem.soundOn ? 'on' : 'off'
      displaySystem.rect(X - 8, Y, 160, (SIZEY * 8), colorId.DARK_GREY)
      displaySystem.smallText('PAUSE: A BUTTON(Z key) TO SELECT', X, Y + (SIZEY * 1), colorId.WHITE)
      displaySystem.text('CONTINUE', X, CURSORY + (SIZEY * 0), colorId.LIGHT_BLUE)
      displaySystem.text('ROUND EXIT(MAIN MENU)', X, CURSORY + (SIZEY * 1), colorId.BLUE)
      displaySystem.text('MUSIC: ' + MUSICON, X, CURSORY + (SIZEY * 2), colorId.LIGHT_GREEN)
      displaySystem.text('SOUND: ' + SOUNDON, X, CURSORY + (SIZEY * 3), colorId.LIGHT_GREEN)
      displaySystem.text('SCORE: ' + fieldSystem.round.scoreUser, X, CURSORY + (SIZEY * 5), colorId.CYAN)
      displaySystem.sprite(spriteId.mainSystemArrowLeft, X - 8, CURSORY + (SIZEY * this.pauseCursor), 1, 1, 1)
    }
  },
  processGameover:function(){},
  init:function(){
    this.round.init()
    this.arrayReset()
    playerSystem.init()
  },
  process:function(){
    if(this.round.isPause){
      this.processPause()
      return 
    }
    this.background.process()
    this.processEnemy()
    this.processWeapon()
    this.processEbullet()
    this.round.process()
    this.processEffect()
    soundSystem.musicProcess()

    if(!this.round.isGameover){
      roundData[this.round.number].process()
      playerSystem.process()
    }
  },
  display:function(){
    this.background.display()
    this.displayWeapon()
    this.displayEnemy()
    this.displayEffect()
    this.displayEbullet()
    playerSystem.displayPlayer()
    this.round.display()
    this.displayPause()
  },
}
fieldSystem.arrayInsert()

var mainSystem = {
  mode:'main menu',
  modeString:{
    MAINMENU:'main menu',
    OPTION:'option',
    ROUNDSELECT:'round select',
    SKILLSELECT:'skill select',
    FIELD:'field',
    SHOP:'shop(upgrade)',
    SOUNDTEST:'sound test',
    BACKGROUNDTEST:'backgorund test',
    EXROUND:'exRound',
    getValue:function(){
      if(mainSystem.mode == 'field') return 1
      else return 0
    },
    setValue:function(value){
      if(value == 1) mainSystem.mode = mainSystem.modeString.FIELD
      else mainSystem.mode = mainSystem.modeString.MAINMENU
    }
  },
  totalTime:{
    totalSecond:0,
    frame:0,
    totalFrame:0,
    second:0,
    minute:0,
    hour:0,
    toString:function(){
      var secondText = this.second <= 9 ? '0' + this.second : '' + this.second
      var minuteText = this.minute <= 9 ? '0' + this.minute : '' + this.minute
      var hourText = this.hour <= 9 ? '0' + this.hour : '' + this.hour

      return hourText + ':' + minuteText + ':' +secondText
    },
    getSaveData:function(){
      var h = this.hour <= 9 ? '0'+this.hour : ''+this.hour
      var m = this.minute <= 9 ? '0'+this.minute : ''+this.minute
      var s = this.second <= 9 ? '0'+this.second : ''+this.second

      return Number('1'+h+m+s)
    },
    setLoadData:function(timeValue){
      timeValue = String(timeValue)
      var length = timeValue.length
      this.second = Number(timeValue.substr(length-2, 2))
      this.minute = Number(timeValue.substr(length-4, 2))
      this.hour = Number(timeValue.substring(1, length-4))
      this.totalSecond = this.second + (this.minute * 60) + (this.hour * 3600)
    },
    resetTime:function(){
      this.hour = 0
      this.minute = 0
      this.second = 0
    },
    process:function(){
      this.frame++
      this.totalFrame = this.frame + (this.totalSecond * 60)
      if(this.frame >= 60){
        this.frame -= 60
        this.second++
        this.totalSecond++
      }
      if(this.second >= 60){
        this.second -= 60
        this.minute++
      }
      if(this.minute >= 60){
        this.minute -= 60
        this.hour++
      }
    }
  },
  mainMenu:{
    MENU_TEXT:[],
    cursor:0,
    TITLE_TEXT:'tamshooter3: ' + VERSION_TEXT,
    CREATE_TEXT:'created by skz1024',
    display:function(){
      var MENUX = 8
      var HELPX = 120
      var MENUY = 0
      var SIZEY = 8
      var cursor = this.cursor
      this.MENU_TEXT[0] = mainSystem.modeString.ROUNDSELECT
      this.MENU_TEXT[1] = mainSystem.modeString.SKILLSELECT
      this.MENU_TEXT[2] = mainSystem.modeString.SHOP
      this.MENU_TEXT[3] = mainSystem.modeString.OPTION
      this.MENU_TEXT[4] = mainSystem.modeString.SOUNDTEST
      this.MENU_TEXT[5] = mainSystem.modeString.BACKGROUNDTEST
      this.MENU_TEXT[6] = mainSystem.modeString.EXROUND
      for(var i = 0, l = this.MENU_TEXT.length; i < l; i++){
        if(cursor == i) displaySystem.text(this.MENU_TEXT[i], MENUX, MENUY + (SIZEY * i), colorId.CYAN)
        else displaySystem.text(this.MENU_TEXT[i], MENUX, MENUY + (SIZEY * i), colorId.DARK_BLUE)
      }
      displaySystem.sprite(spriteId.mainSystemArrowLeft, MENUX - 8, MENUY + (SIZEY * cursor), 1, 1, 1)
      
      var helpText = ['BUTTON HELP', 'arrow key: move cursor', 'A button(Z key): select', 'B button(X key): cancle/back', '',
        '- IN GAME -', 'A button(Z key): change weapon', 'X(A key), Y(S key), B(X key):', ' >> skill', '',
        'every second auto save.', 'round save is partially.', 'auto load on game restart.']
      for(i = 0; i < helpText.length; i++){
        displaySystem.smallText(helpText[i], HELPX, MENUY + (SIZEY * i), colorId.WHITE)
      }

      var Y = 104
      var TIME_X = 120
      displaySystem.smallText(this.TITLE_TEXT, 0, Y, colorId.DARK_GREEN)
      displaySystem.smallText(this.CREATE_TEXT, 0, Y + (SIZEY * 1), colorId.GREEN)
      displaySystem.digitalNumber('TIME ' + mainSystem.totalTime.toString(), TIME_X, Y + (SIZEY * 1))
    },
    process:function(){
      var cursorMax = this.MENU_TEXT.length - 1
      if(btnp(buttonId.DOWN, 20, 5) && this.cursor < cursorMax){
        this.cursor++
        soundSystem.play(soundId.systemCursor)
      } else if(btnp(buttonId.UP, 20, 5) && this.cursor > 0){
        this.cursor--
        soundSystem.play(soundId.systemCursor)
      }

      if(btnp(buttonId.A)){
        soundSystem.play(soundId.systemSelect)
        switch(this.cursor){
          case 0: mainSystem.mode = mainSystem.modeString.ROUNDSELECT; break
          case 1: mainSystem.mode = mainSystem.modeString.SKILLSELECT; break
          case 2: mainSystem.mode = mainSystem.modeString.SHOP; break
          case 3: mainSystem.mode = mainSystem.modeString.OPTION; break
          case 4: mainSystem.mode = mainSystem.modeString.SOUNDTEST; break
          case 5: mainSystem.mode = mainSystem.modeString.BACKGROUNDTEST; break
          case 6: mainSystem.mode = mainSystem.modeString.EXROUND; break
        }
      }
    }
  },

  roundSelect:{
    cursor:0,
    cursorX:0,
    cursorY:0,

    display:function(){
      var BOXX = 0
      var BOXY = 0
      var BOXSIZEX = 24
      var BOXSIZEY = 32
      var TEXTLINEY = 16

      displaySystem.rect(BOXX + (BOXSIZEX * this.cursorX), BOXY + (this.cursorY * BOXSIZEY), 16, 32, colorId.GREY)
      displaySystem.sprite(spriteId.mainSystemArrowUp, BOXX + (BOXSIZEX * this.cursorX), BOXY + 24 + (this.cursorY * BOXSIZEY), 1, 1, 1)
      displaySystem.sprite(spriteId.mainSystemArrowUp, BOXX + 8 + (BOXSIZEX * this.cursorX), BOXY + 24 + (this.cursorY * BOXSIZEY), 1, 1, 1)
  
      for(var i = 0; i < roundData.length && i < 30; i++){
        var row = Math.floor(i / 10)
        var column = i % 10
        if(playerSystem.lv >= roundData[i].recommendLevel){
          displaySystem.sprite(roundData[i].spriteId, BOXX + (BOXSIZEX * column), BOXY + (BOXSIZEY * row), 2, 2, 1)
        } else {
          displaySystem.strokeRect(BOXX + (BOXSIZEX * column), BOXY + (BOXSIZEY * row), 16, 16, colorId.RED)
          displaySystem.line(BOXX + (BOXSIZEX * column), BOXY + (BOXSIZEY * row), BOXX + (BOXSIZEX * column) + 15, BOXY + (BOXSIZEY * row) + 15, colorId.RED)
        }
        displaySystem.smallText(roundData[i].roundText, BOXX + (BOXSIZEX * column), BOXY + TEXTLINEY + 1 + (BOXSIZEY * row), colorId.WHITE)
      }

      var textX = 0
      var textY = 104
      displaySystem.smallText('A(Z key) button: select, B(X key) button: back', 0, textY - 8, colorId.WHITE)
      var textColorArray = [colorId.GREY, colorId.DARK_GREY]
      if(this.cursor < roundData.length && playerSystem.lv >= roundData[this.cursor].recommendLevel){
        var attackPercent = mySystem.getPercent(playerSystem.attack, roundData[this.cursor].recommendAttack)
        if(attackPercent >= 100) textColorArray = [colorId.LIGHT_GREEN, colorId.DARK_GREEN]
        else if(attackPercent >= 90) textColorArray = [colorId.YELLOW, colorId.ORANGE]
        else if(attackPercent <= 89) textColorArray = [colorId.RED, colorId.PURPLE]
      }
      displaySystem.smallText('ROUND: ' + roundData[this.cursor].roundText 
        + ', FINISH TIME: ' + roundData[this.cursor].finishTime, textX, textY, colorId.LIGHT_BLUE, colorId.DARK_BLUE)
      displaySystem.smallText('(RECOMMEND) LEVEL: ' + roundData[this.cursor].recommendLevel
        + ', ATTACK: ' + roundData[this.cursor].recommendAttack, textX, textY + 8, textColorArray[0], textColorArray[1])
    },
    process:function(){
      this.cursor = this.cursorX + (this.cursorY * 10)
      var maxY = Math.floor(roundData.length / 10) - 1

      if(btnp(buttonId.LEFT, 20, 5)){
        soundSystem.play(soundId.systemCursor)
        if(this.cursorX <= 0) this.cursorX = 9
        else this.cursorX--

      } else if(btnp(buttonId.RIGHT, 20, 5)){
        soundSystem.play(soundId.systemCursor)
        if(this.cursorX >= 9) this.cursorX = 0
        else this.cursorX++
      }

      if(btnp(buttonId.UP, 20, 5) && this.cursorY > 0){
        soundSystem.play(soundId.systemCursor)
        this.cursorY--
      } else if(btnp(buttonId.DOWN, 20, 5) && this.cursorY < maxY){
        soundSystem.play(soundId.systemCursor)
        this.cursorY++
      }

      if(btnp(buttonId.B)){
        soundSystem.play(soundId.systemCancle)
        mainSystem.mode = mainSystem.modeString.MAINMENU
      }

      if(btnp(buttonId.A)){
        if(this.cursor < roundData.length && playerSystem.lv >= roundData[this.cursor].recommendLevel){
          soundSystem.play(soundId.systemSelect)
          fieldSystem.init()
          mainSystem.mode = mainSystem.modeString.FIELD
          fieldSystem.round.number = this.cursor
          
          fieldSystem.round.setRoundData()
        } else {
          soundSystem.play(soundId.systemBuzzer)
        }
      }
    }
  },

  skillSelect:{
    cursor:0,
    slot:0,
    process:function(){
      if(btnp(buttonId.A)){
        soundSystem.play(soundId.skillLaserShot)
        this.slot = playerSystem.skill.inputSkillSlot(this.slot, this.cursor)
      }
      if(btnp(buttonId.B)){
        soundSystem.play(soundId.systemCancle)
        mainSystem.mode = mainSystem.modeString.MAINMENU
      }
      if(btnp(buttonId.X)){
        soundSystem.play(soundId.systemCursor)
        this.slot = playerSystem.skill.inputSkillSlot(this.slot - 2)
      }
      if(btnp(buttonId.Y)){
        soundSystem.play(soundId.systemCursor)
        this.slot = playerSystem.skill.inputSkillSlot(this.slot)
      }

      var HALF = Math.floor(playerSystem.skill.data.length / 2)
      if(btnp(buttonId.LEFT, 20, 5) && this.cursor >= HALF){
        this.cursor -= HALF
        soundSystem.play(soundId.systemCursor)
      } else if(btnp(buttonId.RIGHT, 20, 5) && this.cursor < HALF){
        this.cursor += HALF
        soundSystem.play(soundId.systemCursor)
      } else if(btnp(buttonId.UP, 20, 5) && this.cursor % HALF > 0){
        this.cursor--
        soundSystem.play(soundId.systemCursor)
      } else if(btnp(buttonId.DOWN, 20, 5) && this.cursor % HALF < HALF - 1){
        this.cursor++
        soundSystem.play(soundId.systemCursor)
      }
    },
    display:function(){
      var SPRITEX = 128
      var TEXTX = 24
      var SIZEY = 8
      var skillList = playerSystem.skill.data
      var SKILL_X = 8

      var HALF = Math.floor(playerSystem.skill.data.length / 2) 
      displaySystem.sprite(spriteId.mainSystemArrowLeft, Math.floor(this.cursor / HALF) * (SPRITEX - 8), (this.cursor % 7) * SIZEY, 1, 1, 1)
      for(var i = 0; i < skillList.length; i++){
        if(i < HALF) SKILL_X = 8
        else SKILL_X = SPRITEX

        if(this.cursor == i)  displaySystem.text(skillList[i].name, SKILL_X + TEXTX, (i % HALF) * SIZEY, colorId.WHITE)
        else displaySystem.text(skillList[i].name, SKILL_X + TEXTX, (i % HALF) * SIZEY, colorId.DARK_BLUE)
        displaySystem.sprite(skillList[i].spriteId, SKILL_X, (i % HALF) * SIZEY, skillList[i].w, skillList[i].h, 1)
      }

      var infoText = []
      var INFO_X = 0
      var INFO_Y = 72
      var ARROW_X = 128
      var ARROW_Y = 112 
      infoText.push('A(Z key) button: select, B(X key) button: back')
      infoText.push('X(A key), Y(S key) button: prev/next slot')
      infoText.push('WEAPON DAMAGE MULTIPLE: 30 per second')
      if(this.cursor < skillList.length){
        var skillText = []
        skillText.push(skillList[this.cursor].name + ': ')
        skillText.push('DAMAGE MULTIPLE: ' + skillList[this.cursor].totalMultiple)
        skillText.push('  COOLTIME: ' + skillList[this.cursor].coolTime)
        skillText.push('SHOT: ' + skillList[this.cursor].shotCount
          + ', REPEAT: ' + skillList[this.cursor].repeatCount
          + ', ATTACK: ' + skillList[this.cursor].attackMultiple
          + ', COUNT: ' + weaponData[skillList[this.cursor].weaponId].repeatCount
          + ', WEIGHT: ' + skillList[this.cursor].weight)

        displaySystem.smallText(skillText[0], INFO_X, INFO_Y + (8 * 3), colorId.LIGHT_GREY, colorId.GREY)
        displaySystem.smallText(skillText[1], INFO_X + (skillText[0].length * 4), INFO_Y + (8 * 3), colorId.CYAN, colorId.LIGHT_BLUE)
        displaySystem.smallText(skillText[2], INFO_X + ((skillText[0].length + skillText[1].length) * 4), INFO_Y + (8 * 3), colorId.LIGHT_GREEN, colorId.GREEN)
        displaySystem.smallText(skillText[3], INFO_X, INFO_Y + (8 * 4), colorId.BLUE, colorId.DARK_BLUE)
      }

      for(i = 0; i < 3; i++){
        displaySystem.smallText(infoText[i], INFO_X, INFO_Y + (8 * i), colorId.WHITE)
        displaySystem.sprite(spriteId.mainSystemArrowLeft, ARROW_X + (this.slot * 32) + (i * 8), ARROW_Y, 1, 1, 1)
      }
    }
  },

  optionMenu:{
    text:['<< back', 'music', 'sound', 'show enemy hp', 'result auto skip', '---reset---', 'user reset', 'data reset', '-debug???-', 'level+10(max 100)'],
    cursor:0,
    isShowEnemyHp:true,
    isResultAutoSkip:true,
    warning:false,
    warningCursor:0,

    processWarning:function(){
      if(btnp(buttonId.LEFT) && this.warningCursor == 1){
        this.warningCursor = 0
        soundSystem.play(soundId.systemCursor)
      }
      if(btnp(buttonId.RIGHT) && this.warningCursor == 0){
        this.warningCursor = 1
        soundSystem.play(soundId.systemCursor)
      }
      if(btnp(buttonId.A)){
        this.warning = false
        if(this.warningCursor == 0 && this.cursor == 6) mainSystem.saveSystem.resetUser()
        if(this.warningCursor == 0 && this.cursor == 7) mainSystem.saveSystem.reset()
        soundSystem.play(soundId.systemSelect)
      }
      if(btnp(buttonId.B)){
        this.warning = false
        soundSystem.play(soundId.systemCancle)
      }
    },
    processOption:function(){
      if(btnp(buttonId.UP, 20, 5) && this.cursor > 0){
        this.cursor--
        soundSystem.play(soundId.systemCursor)
      } else if(btnp(buttonId.DOWN, 20, 5) && this.cursor < this.text.length - 1){
        this.cursor++
        soundSystem.play(soundId.systemCursor)
      }

      if(btnp(buttonId.B)){
        soundSystem.play(soundId.systemCancle)
        mainSystem.mode = mainSystem.modeString.MAINMENU
        this.cursor = 0
      }

      if(btnp(buttonId.A)){
        switch(this.cursor){
          case 0: mainSystem.mode = mainSystem.modeString.MAINMENU; soundSystem.play(soundId.systemCancle); break
          case 1: soundSystem.musicOn = !soundSystem.musicOn; break
          case 2: soundSystem.soundOn = !soundSystem.soundOn; break
          case 3: this.isShowEnemyHp = !this.isShowEnemyHp; break
          case 4: this.isResultAutoSkip = !this.isResultAutoSkip; break
          case 5: break
          case 6: soundSystem.play(soundId.systemSelect); this.warning = true; this.warningCursor = 1; break
          case 7: soundSystem.play(soundId.systemSelect); this.warning = true; this.warningCursor = 1; break
          case 8: break
          case 9: this.debugLevelUp(); break
        }
      }
    },
    debugLevelUp:function(){
      if(playerSystem.lv <= 99){
        playerSystem.setLevel(playerSystem.lv + 10)
        if(playerSystem.lv > 100) playerSystem.lv = 100
      }
    },
    process:function(){
      if(this.warning) this.processWarning()
      else this.processOption()
    },
    displayWarning:function(){
      var WINDOW_X = 24
      var WINDOW_Y = 24
      var WINDOW_SIZE_X = 192
      var WINDOW_SIZE_Y = 48
      var YES_X = 48
      var NO_X = 48 + 80
      displaySystem.clear()
      displaySystem.shadowRect(WINDOW_X, WINDOW_Y, WINDOW_SIZE_X, WINDOW_SIZE_Y, colorId.LIGHT_GREY, colorId.DARK_GREY)
      displaySystem.text(' WARNING!', WINDOW_X, WINDOW_Y + (8 * 1), colorId.RED)
      if(this.cursor == 6) displaySystem.text(' do you want to user data reset?', WINDOW_X, WINDOW_Y + (8 * 2), colorId.BLUE)
      if(this.cursor == 7) displaySystem.text(' do you want to game all reset?', WINDOW_X, WINDOW_Y + (8 * 2), colorId.BLUE)
      displaySystem.text(' unable to recover deleted data', WINDOW_X, WINDOW_Y + (8 * 3), colorId.PURPLE)

      if(this.warningCursor == 0){
        displaySystem.text('YES', YES_X, WINDOW_Y + (8 * 4), colorId.CYAN)
        displaySystem.text('NO', NO_X, WINDOW_Y + (8 * 4), colorId.DARK_GREY)
        displaySystem.sprite(spriteId.mainSystemArrowLeft, YES_X - 8, WINDOW_Y + (8 * 4), 1, 1, 1)
      } else {
        displaySystem.text('YES', YES_X, WINDOW_Y + (8 * 4), colorId.DARK_GREY)
        displaySystem.text('NO', NO_X, WINDOW_Y + (8 * 4), colorId.CYAN)
        displaySystem.sprite(spriteId.mainSystemArrowLeft, NO_X - 8, WINDOW_Y + (8 * 4), 1, 1, 1)
      }
    },
    displayOption:function(){
      var SIDEB_X = 120
      var SIDEB_SIZE_X = 119
      var SIDEB_SIZE_Y = 104
      var SIZE_Y = 8
      displaySystem.shadowRect(SIDEB_X, 0, SIDEB_SIZE_X, SIDEB_SIZE_Y, colorId.BLUE, colorId.WHITE)
      displaySystem.sprite(spriteId.mainSystemArrowLeft, SIDEB_X, (SIZE_Y * this.cursor), 1, 1, 1)

      for(var i = 0, l = this.text.length; i < l; i++){
        if(this.cursor == i)  displaySystem.text(this.text[i], SIDEB_X + 16, (i * 8), colorId.CYAN)
        else  displaySystem.text(this.text[i], SIDEB_X + 16, (i * 8), colorId.DARK_BLUE)
        var isChecked = false

        switch(i){
          case 1: if(soundSystem.musicOn) isChecked = true; break
          case 2: if(soundSystem.soundOn) isChecked = true; break
          case 3: if(mainSystem.optionMenu.isShowEnemyHp) isChecked = true; break
          case 4: if(mainSystem.optionMenu.isResultAutoSkip) isChecked = true; break
        }

        if(i >= 1 && i <= 4){
          if(isChecked) displaySystem.sprite(spriteId.checkBoxChecked, SIDEB_X + 8, (i * 8), 1, 1, 1)
          else displaySystem.sprite(spriteId.checkBoxUnchecked, SIDEB_X + 8, (i * 8), 1, 1, 1)
        }
      }
    },
    display:function(){
      if(this.warning) this.displayWarning()
      else this.displayOption()
    }
  },

  shop:{
    text:['<< back', 'attack upgrade', 'shield upgrade', 'sub weapon upgrade', 'sub weapon refund'],
    cursor:0,
    errorMessage:'',
    erroeMessageViewDelayCount:0,
    costMessage:'',
    costMessage2:'',

    process:function(){
      if(btnp(buttonId.UP, 20, 5) && this.cursor > 0){
        this.cursor--
        soundSystem.play(soundId.systemCursor)
      } else if(btnp(buttonId.DOWN, 20, 5) && this.cursor < this.text.length - 1){
        this.cursor++
        soundSystem.play(soundId.systemCursor)
      }

      if(btnp(buttonId.B)){
        soundSystem.play(soundId.systemCancle)
        mainSystem.mode = mainSystem.modeString.MAINMENU
        this.cursor = 0
      }
      switch(this.cursor){
        case 1: 
          this.costMessage = 'UPGRADE COST: ' + playerSystem.upgrade.getAttackCost()
          this.costMessage2 = 'UPGRADE LEVEL: ' + playerSystem.upgrade.attackLevel + '/' + playerSystem.upgrade.attackMaxLevel
          break
        case 2: 
          this.costMessage = 'UPGRADE COST: ' + playerSystem.upgrade.getShieldCost()
          this.costMessage2 = 'UPGRADE LEVEL: ' + playerSystem.upgrade.shieldLevel + '/' + playerSystem.upgrade.shieldMaxLevel
          break
        case 3:
          this.costMessage = 'SUB WEAPON COST: ' + playerSystem.upgrade.getSubWeaponCost()
          this.costMessage2 = 'SUB WEAPON LEVEL: ' + playerSystem.upgrade.subWeaponLevel + '/' + playerSystem.upgrade.subWeaponMaxLevel
          break
        case 4:
          this.costMessage = 'SUB WEAPON REFUND: ' + playerSystem.upgrade.getSubWeaponRefund()
          this.costMessage2 = 'refund and reset subweapon'
          break
        default:
          this.costMessage = ''
          this.costMessage2 = ''
      }

      if(btnp(buttonId.A)){
        var soundTrue = false
        switch(this.cursor){
          case 0: 
            soundSystem.play(soundId.systemCancle)
            mainSystem.mode = mainSystem.modeString.MAINMENU
            this.cursor = 0
            break
          case 1: if(playerSystem.upgrade.getRequestAttackLevelUp()) soundTrue = true; break
          case 2: if(playerSystem.upgrade.getRequestShieldLevelUp()) soundTrue = true; break
          case 3: if(playerSystem.upgrade.getRequestSubWeaponLevelUp()) soundTrue = true; break
          case 4: if(playerSystem.upgrade.getRequestSubWeaponRefund()) soundTrue = true; break
        }
        if(this.cursor >= 1){
          if(soundTrue) soundSystem.play(soundId.systemSelect)
          else soundSystem.play(soundId.systemBuzzer)
        }
      }
    },
    display:function(){
      displaySystem.smallText('ATTACK STAT', 0, 0, colorId.WHITE)
      var attackText = playerSystem.setAttackValueGetString().split(', ')
      var shieldText = playerSystem.setShieldValueGetString().split(', ')
      var statText = []
      var SIDEA_X = 0
      var SIDEB_X = 120
      var SIDE_SIZE_X = 119
      var SIDE_SIZE_Y = 104
      statText.push('ATTACK STAT')
      for(var i = 0; i < attackText.length; i++) statText.push(attackText[i])
      statText.push('', 'SHIELD STAT')
      for(i = 0; i < shieldText.length; i++) statText.push(shieldText[i])
      statText.push('', 'SHIELD RECOVERY: ')
      statText.push('>> ' + playerSystem.shieldRecovery + ' / ' + playerSystem.shieldRecoveryCountMax + ' PER FRAME')
      
      displaySystem.shadowRect(SIDEA_X, 0, SIDE_SIZE_X, SIDE_SIZE_Y, colorId.PURPLE, colorId.WHITE)
      displaySystem.shadowRect(SIDEB_X, 0, SIDE_SIZE_X, SIDE_SIZE_Y, colorId.DARK_GREEN, colorId.WHITE)
      displaySystem.sprite(spriteId.mainSystemArrowLeft, SIDEB_X, (this.cursor * 8), 1, 1, 1)
      for(i = 0; i < statText.length; i++) displaySystem.smallText(statText[i], SIDEA_X, (i * 8), colorId.WHITE, colorId.GREY)

      for(i = 0; i < this.text.length; i++){
        if(this.cursor == i)  displaySystem.text(this.text[i], SIDEB_X + 8, (i * 8), colorId.LIGHT_GREEN)
        else  displaySystem.text(this.text[i], SIDEB_X + 8, (i * 8), colorId.DARK_GREY)
      }
      displaySystem.smallText(this.costMessage, SIDEB_X, (11 * 8), colorId.WHITE, colorId.DARK_GREY)
      displaySystem.smallText(this.costMessage2, SIDEB_X, (12 * 8), colorId.WHITE, colorId.DARK_GREY)
    }
  },
  soundTest:{
    cursor:0,
    soundNumber:0,
    musicNumber:0,
    process:function(){
      if(btnp(buttonId.UP, 20, 2) && this.cursor > 0){
        this.cursor--
        soundSystem.play(soundId.systemCursor)
      } else if(btnp(buttonId.DOWN, 20, 5) && this.cursor < 3){
        this.cursor++
        soundSystem.play(soundId.systemCursor)
      }

      if(btnp(buttonId.LEFT, 20, 2)){
        if(this.cursor == 1 && this.musicNumber > 0) this.musicNumber--
        if(this.cursor == 2 && this.soundNumber > 0) this.soundNumber--
      } else if(btnp(buttonId.RIGHT, 20, 2)){
        if(this.cursor == 1 && this.musicNumber < soundSystem.musicLength.length - 1) this.musicNumber++
        if(this.cursor == 2 && this.soundNumber < 63) this.soundNumber++
      }

      soundSystem.musicProcess()
      if(btnp(buttonId.A)){
        switch(this.cursor){
          case 1: soundSystem.musicPlay(this.musicNumber); break
          case 2: soundSystem.play(this.soundNumber); break
          case 3: soundSystem.musicStop(); soundSystem.stop(); break
        }
      }

      if(btnp(buttonId.B) || (btnp(buttonId.A) && this.cursor == 0)){
        soundSystem.play(soundId.systemCancle)
        mainSystem.mode = mainSystem.modeString.MAINMENU
        mainSystem.soundTest.cursor = 0
      }
    },
    display:function(){
      var text = ['<< back', 'music: ' + this.musicNumber, 'sound: ' + this.soundNumber, 'stop']
      var WINDOW_X = 120
      var WINDOW_Y = 0
      var WINDOW_SIZE_X = 119
      var WINDOW_SIZE_Y = 104
      displaySystem.shadowRect(WINDOW_X, WINDOW_Y, WINDOW_SIZE_X, WINDOW_SIZE_Y, colorId.ORANGE, colorId.WHITE)
      displaySystem.sprite(spriteId.mainSystemArrowLeft, WINDOW_X, (this.cursor * 8), 1, 1, 1)
      for(var i = 0; i < text.length; i++){
        if(this.cursor == i) displaySystem.text(text[i], WINDOW_X + 8, WINDOW_Y + (8 * i), colorId.YELLOW)
        else displaySystem.text(text[i], WINDOW_X + 8, WINDOW_Y + (8 * i), colorId.DARK_GREY)
      }
      var PROGRESS_Y = 48
      var timeText = 'muisc time: ' + (soundSystem.musicPlayFrame / 60).toFixed(2) + '/' + (soundSystem.musicLength[this.musicNumber] / 60).toFixed(2)
      var progressText = 'music frame: ' + soundSystem.musicPlayFrame + '/' + soundSystem.musicLength[this.musicNumber]
      displaySystem.smallText(timeText, WINDOW_X + 8, PROGRESS_Y - 8, colorId.DARK_GREY)
      displaySystem.smallText(progressText, WINDOW_X + 8, PROGRESS_Y, colorId.DARK_GREY)
      var INFO_Y = 56
      var infoText = ['NOTICE', 'if you music off', 'not music play and test',
        'but sound will playing', 'multy channel']
      
      for(i = 0; i < infoText.length; i++){
        displaySystem.smallText(infoText[i], WINDOW_X + 8, INFO_Y + (i * 8), colorId.DARK_GREY)
      }
    }
  },
  backgroundTest:{
    cursor:0,
    process:function(){
      if(btnp(buttonId.A) || btnp(buttonId.B)){
        soundSystem.play(soundId.systemCancle)
        mainSystem.mode = mainSystem.modeString.MAINMENU
      }

      if(btnp(buttonId.LEFT, 20, 2) && this.cursor > 0){
        soundSystem.play(soundId.systemCursor)
        this.cursor--
      }
      if(btnp(buttonId.RIGHT, 20, 2) && this.cursor < gradientData.length - 1){
        soundSystem.play(soundId.systemCursor)
        this.cursor++
      }
      fieldSystem.background.process()
    },
    display:function(){
      var MENU_X = 0
      var MENU_Y = 104
      fieldSystem.setBackground(this.cursor)
      fieldSystem.background.display()
      displaySystem.smallText('background Test: ' + this.cursor, MENU_X, MENU_Y, colorId.WHITE, colorId.DARK_GREY)
      displaySystem.smallText('arrow key: change background  A, B Button(Z, X key) to EXIT', MENU_X, MENU_Y + 8, colorId.WHITE, colorId.DARK_GREY)
    }
  },
  exRound:{
    cursor:0,
    unlock3A:false,
    unlock5A:false,
    unlockTable:[false, false, false, false, false, false, false],
    display:function(){
      var BOXX = 0
      var BOXY = 0
      var BOXSIZEX = 24
      var TEXTLINEY = 16

      displaySystem.rect(BOXX + (BOXSIZEX * this.cursor), BOXY, 16, 32, colorId.GREY)
      displaySystem.sprite(spriteId.mainSystemArrowUp, BOXX + (BOXSIZEX * this.cursor), BOXY + 24, 1, 1, 1)
      displaySystem.sprite(spriteId.mainSystemArrowUp, BOXX + (BOXSIZEX * this.cursor) + 8, BOXY + 24, 1, 1, 1)

      var startRoundNumber = 30
      for(var i = 0; i + startRoundNumber < roundData.length; i++){
        var round = roundData[startRoundNumber  + i]
        if(this.unlockTable[i]){
          displaySystem.sprite(round.spriteId, BOXX + BOXSIZEX * i, BOXY, 2, 2, 1)
        } else {
          displaySystem.strokeRect(BOXX + BOXSIZEX * i, BOXY, 16, 16, colorId.RED)
          displaySystem.line(BOXX + (BOXSIZEX * i), BOXY, BOXX + (BOXSIZEX * i) + 15, BOXY + 15, colorId.RED)
        }
        displaySystem.smallText(round.roundText, BOXX + BOXSIZEX * i, BOXY + TEXTLINEY + 1, colorId.WHITE)
      }

      var textX = 0
      var textY = 104
      var currentRound = roundData[this.cursor + startRoundNumber]
      displaySystem.smallText('A(Z key) button: select, B(X key) button: back', 0, textY - 8, colorId.WHITE)
      displaySystem.smallText('ROUND: ' + currentRound.roundText 
        + ', FINISH TIME: ' + currentRound.finishTime, textX, textY, colorId.LIGHT_BLUE, colorId.DARK_BLUE)
      displaySystem.smallText('(RECOMMEND) LEVEL: ' + currentRound.recommendLevel
        + ', ATTACK: ' + currentRound.recommendAttack, textX, textY + 8, colorId.WHITE, colorId.GREY)
    },
    process:function(){
      if(this.unlock3A){
        this.unlockTable[0] = true
        this.unlockTable[1] = true
        this.unlockTable[2] = true
      }
      if(this.unlock5A){
        this.unlockTable[3] = true
      }
      if(playerSystem.lv >= 90){
        this.unlockTable[4] = true
        this.unlockTable[5] = true
        this.unlockTable[6] = true
      }

      if(btnp(buttonId.LEFT, 20, 5) && this.cursor > 0){
        this.cursor--
        soundSystem.play(soundId.systemCursor)
      } else if(btnp(buttonId.RIGHT, 20, 5) && this.cursor + 30 < roundData.length - 1){
        this.cursor++
        soundSystem.play(soundId.systemCursor)
      }
      if(btnp(buttonId.A)){
        if(this.unlockTable[this.cursor]){
          soundSystem.play(soundId.systemSelect)
          fieldSystem.init()
          mainSystem.mode = mainSystem.modeString.FIELD
          fieldSystem.round.number = this.cursor + 30

          fieldSystem.round.setRoundData()
        } else {
          soundSystem.play(soundId.systemBuzzer)
        }
      }
      if(btnp(buttonId.B)){
        soundSystem.play(soundId.systemCancle)
        mainSystem.mode = mainSystem.modeString.MAINMENU
      }
    }
  },

  display:function(){
    var m = this.modeString
    switch(this.mode){
      case m.MAINMENU: this.mainMenu.display(); break
      case m.ROUNDSELECT: this.roundSelect.display(); break
      case m.OPTION: this.mainMenu.display(); this.optionMenu.display(); break
      case m.FIELD: fieldSystem.display(); break
      case m.SHOP: this.shop.display(); break
      case m.SKILLSELECT: this.skillSelect.display(); break
      case m.SOUNDTEST: this.mainMenu.display(); this.soundTest.display(); break
      case m.BACKGROUNDTEST: this.backgroundTest.display(); break
      case m.EXROUND: this.exRound.display(); break
    }
    playerSystem.mainDisplay()
    if(mainSystem.mode != mainSystem.modeString.FIELD) playerSystem.subDisplay()
  },
  process:function(){
    var m = this.modeString
    this.totalTime.process()
    this.saveSystem.process()
    soundSystem.soundProcess()
    playerSystem.processStat()

    switch(this.mode){
      case m.MAINMENU:
        fieldSystem.setBackground(0)
        soundSystem.musicStop()
        this.mainMenu.process()
        playerSystem.init()
        playerSystem.processStat()
        break
      case m.OPTION: this.optionMenu.process(); break
      case m.ROUNDSELECT: this.roundSelect.process(); break
      case m.FIELD: fieldSystem.process(); break
      case m.SHOP: this.shop.process(); break
      case m.SKILLSELECT: this.skillSelect.process(); break
      case m.SOUNDTEST: this.soundTest.process(); break
      case m.BACKGROUNDTEST: this.backgroundTest.process(); break
      case m.EXROUND: this.exRound.process(); break
    }
  },
  init:function(){
    this.mode = this.modeString.MAINMENU
  },
  saveSystem:{
    PLAYER_LV:0,
    PLAYER_EXP:1,
    TOTAL_TIME:2,
    FIELD_ROUND:3,
    FIELD_TIME:6,
    MAIN_MODE:7,
    SOUND_ON:8,
    MUSIC_ON:9,
    PLAYER_HP:10,
    PLAYER_SHIELD:11,
    PLAYER_SKILL_COOLTIME_SLOT0:12,
    PLAYER_SKILL_COOLTIME_SLOT1:13,
    PLAYER_SKILL_COOLTIME_SLOT2:14,
    PLAYER_UPGRADE_ATTACK_LEVEL:15,
    PLAYER_GOLD:16,
    FIELD_COMPLETE:17,
    FIELD_USER_SCORE:18,
    FIELD_BOSS_MODE:19,
    FIELD_FLAG:20,
    PLAYER_SKILL_SLOT0:21,
    PLAYER_SKILL_SLOT1:22,
    PLAYER_SKILL_SLOT2:23,
    OPTION_SHOW_ENEMY_HP:24,
    OPTION_BACKGROUND:25,
    PLAYER_SHIELD_MAX:26,
    PLAYER_UPGRADE_SHIELD_LEVEL:27,
    PLAYER_UPGARDE_SUBWEAPON_LEVEL:28,
    OPTION_RESULT_AUTOSKIP:29,
    EXROUND_UNLOCK_3A:30,
    EXROUND_UNLOCK_5A:31,

    loadComplete:false,
    saveDelay:60,
    saveDelayCount:0,

    save:function(){
      pmem(this.TOTAL_TIME, mainSystem.totalTime.getSaveData())
      pmem(this.PLAYER_EXP, playerSystem.exp)
      pmem(this.PLAYER_LV, playerSystem.lv)  
      pmem(this.MAIN_MODE, mainSystem.modeString.getValue())
      pmem(this.PLAYER_HP, playerSystem.hp)
      pmem(this.PLAYER_SHIELD, playerSystem.shield)
      pmem(this.FIELD_ROUND, fieldSystem.round.number)
      pmem(this.FIELD_TIME, fieldSystem.round.time)
      pmem(this.SOUND_ON, soundSystem.soundOn ? 1 : 0)
      pmem(this.MUSIC_ON, soundSystem.musicOn ? 1 : 0)
      pmem(this.PLAYER_HP, playerSystem.hp)
      pmem(this.PLAYER_SHIELD, playerSystem.shield)
      pmem(this.PLAYER_SKILL_COOLTIME_SLOT0, playerSystem.skill.user[0].coolTime)
      pmem(this.PLAYER_SKILL_COOLTIME_SLOT1, playerSystem.skill.user[1].coolTime)
      pmem(this.PLAYER_SKILL_COOLTIME_SLOT2, playerSystem.skill.user[2].coolTime)
      pmem(this.PLAYER_UPGRADE_ATTACK_LEVEL, playerSystem.upgrade.attackLevel)
      pmem(this.PLAYER_GOLD, playerSystem.gold)
      pmem(this.FIELD_COMPLETE, fieldSystem.round.isComplete ? 1 : 0)
      pmem(this.FIELD_USER_SCORE, fieldSystem.round.scoreUser)
      pmem(this.FIELD_BOSS_MODE, fieldSystem.round.isBossMode ? 1 : 0)
      pmem(this.FIELD_FLAG, fieldSystem.round.flagNumber)
      pmem(this.PLAYER_SKILL_SLOT0, playerSystem.skill.user[0].useNumber)
      pmem(this.PLAYER_SKILL_SLOT1, playerSystem.skill.user[1].useNumber)
      pmem(this.PLAYER_SKILL_SLOT2, playerSystem.skill.user[2].useNumber)
      pmem(this.OPTION_SHOW_ENEMY_HP, mainSystem.optionMenu.isShowEnemyHp ? 1 : 0)
      pmem(this.PLAYER_SHIELD_MAX, playerSystem.shieldMax)
      pmem(this.PLAYER_UPGRADE_SHIELD_LEVEL, playerSystem.upgrade.shieldLevel)
      pmem(this.PLAYER_UPGARDE_SUBWEAPON_LEVEL, playerSystem.upgrade.subWeaponLevel)
      pmem(this.OPTION_RESULT_AUTOSKIP, mainSystem.optionMenu.isResultAutoSkip ? 1 : 0)
      pmem(this.EXROUND_UNLOCK_3A, mainSystem.exRound.unlock3A ? 1 : 0)
      pmem(this.EXROUND_UNLOCK_5A, mainSystem.exRound.unlock5A ? 1 : 0)
    },
    load:function(){
      mainSystem.totalTime.setLoadData(pmem(this.TOTAL_TIME))
      if(mainSystem.totalTime.totalSecond >= 1){
        playerSystem.lv = pmem(this.PLAYER_LV)
        playerSystem.exp = pmem(this.PLAYER_EXP)
        mainSystem.modeString.setValue(pmem(this.MAIN_MODE))
        playerSystem.exp = pmem(this.PLAYER_EXP)
        playerSystem.lv = pmem(this.PLAYER_LV)
        fieldSystem.round.number = pmem(this.FIELD_ROUND)
        fieldSystem.round.time = pmem(this.FIELD_TIME)
        fieldSystem.round.setRoundData()
        fieldSystem.requestPause()
        soundSystem.soundOn = pmem(this.SOUND_ON) ? true : false
        soundSystem.musicOn = pmem(this.MUSIC_ON) ? true : false
        playerSystem.hp = pmem(this.PLAYER_HP)
        playerSystem.shield = pmem(this.PLAYER_SHIELD)
        playerSystem.skill.user[0].coolTime = pmem(this.PLAYER_SKILL_COOLTIME_SLOT0)
        playerSystem.skill.user[1].coolTime = pmem(this.PLAYER_SKILL_COOLTIME_SLOT1)
        playerSystem.skill.user[2].coolTime = pmem(this.PLAYER_SKILL_COOLTIME_SLOT2)
        playerSystem.gold = pmem(this.PLAYER_GOLD)
        playerSystem.upgrade.attackLevel = pmem(this.PLAYER_UPGRADE_ATTACK_LEVEL)
        fieldSystem.round.isComplete = pmem(this.FIELD_COMPLETE) ? true : false
        fieldSystem.round.scoreUser = pmem(this.FIELD_USER_SCORE)
        fieldSystem.round.flagNumber = pmem(this.FIELD_FLAG)
        var bossMode = pmem(this.FIELD_BOSS_MODE) ? true : false // bossMode data is not save fieldSystem.round
        playerSystem.skill.user[0].useNumber = pmem(this.PLAYER_SKILL_SLOT0)
        playerSystem.skill.user[1].useNumber = pmem(this.PLAYER_SKILL_SLOT1)
        playerSystem.skill.user[2].useNumber = pmem(this.PLAYER_SKILL_SLOT2)
        mainSystem.optionMenu.isShowEnemyHp = pmem(this.OPTION_SHOW_ENEMY_HP)
        playerSystem.shieldMax = pmem(this.PLAYER_SHIELD_MAX)
        playerSystem.upgrade.shieldLevel = pmem(this.PLAYER_UPGRADE_SHIELD_LEVEL)
        playerSystem.upgrade.subWeaponLevel = pmem(this.PLAYER_UPGARDE_SUBWEAPON_LEVEL)
        mainSystem.optionMenu.isResultAutoSkip = pmem(this.OPTION_RESULT_AUTOSKIP)
        mainSystem.exRound.unlock3A = pmem(this.EXROUND_UNLOCK_3A)
        mainSystem.exRound.unlock5A = pmem(this.EXROUND_UNLOCK_5A)

        if(bossMode){
          if(playerSystem.hp < playerSystem.hpMax){
            playerSystem.hp = playerSystem.hpMax
          }
          for(var i = 0; i < playerSystem.skill.user.length; i++){
            if(playerSystem.skill.user[i].coolTime >= 12){
              playerSystem.skill.user[i].coolTime = 12
            }
          }
        }
      } else {
        this.reset()
      }
    },
    reset:function(){
      mainSystem.totalTime.resetTime()
      mainSystem.modeString.setValue(mainSystem.modeString.MAINMENU)
      playerSystem.reset()
      fieldSystem.round.number = 0
      fieldSystem.round.time = 0
      fieldSystem.requestPause()
      soundSystem.soundOn = true
      soundSystem.musicOn = true
      mainSystem.optionMenu.isShowEnemyHp = true
      mainSystem.optionMenu.isResultAutoSkip = true
      playerSystem.skill.user[0].useNumber = 0
      playerSystem.skill.user[1].useNumber = 1
      playerSystem.skill.user[2].useNumber = 2
      mainSystem.exRound.unlock3A = false
      mainSystem.exRound.unlock5A = false
    },
    resetUser:function(){
      playerSystem.reset()
    },
    resetTime:function(){
      mainSystem.totalTime.resetTime()
    },
    process:function(){
      if(!this.loadComplete){
        this.loadComplete = true
        this.load()
      }

      this.saveDelayCount++
      if(this.saveDelayCount >= this.saveDelay){
        this.saveDelayCount = 0
        this.save()
      }
    },
  },
}
mainSystem.init()

var displaySystem = {
  clear:function(){cls(0)},
  cls:function(backgroundColor){cls(backgroundColor)},
  object:function(fieldObject){
    var f = fieldObject
    var spriteId = f.spriteId
    var x = f.x
    var y = f.y
    var w = f.w
    var h = f.h
    var scale = f.scale
    var flip = f.flip
    var rotate = f.rotate
    spr(spriteId, x, y, 0, scale, flip, rotate, w, h)
  },
  sprite:function(spriteId, x, y, w, h, scale){
    spr(spriteId, x, y, 0, scale, 0, 0, w, h)
  },
  // spr spriteId x y [colorkey=-1] [scale=1] [flip=0] [rotate=0] [w=1 h=1]
  spr:function(spriteId, x, y, colorKey, scale, flip, rotate, w, h){
    spr(spriteId, x, y, colorKey, scale, flip, rotate, w, h)
  },
  text:function(text, x, y, color, scale){
    if(color == null) color = 12
    if(scale == null) scale = 1
    print(text, x, y, color, true, scale)
  },
  smallText:function(text, x, y, color, shadowColor){
    if(color == null) color = 12
    if(shadowColor != null) print(text, x + 1, y + 1, shadowColor, true, 1, true)
    print(text, x, y, color, true, 1, true)
  },
  debugText:function(){
    for(var i = 0, l = arguments.length; i < l; i++){
      this.text(arguments[i], 0, i * 8, colorId.WHITE, 1)
    }
  },
  // print text [x=0 y=0] [color=15] [fixed=false] [scale=1] [smallfont=false]
  print:function(text, x, y, color, fixed, scale, smallfont){
    print(text, x, y, color, fixed, scale, smallfont)
  },
  // rect x y w h color (all number)
  rect:function(x, y, w, h, color){
    if(color == null) color = 0
    rect(x, y, w, h, color)
  },
  shadowRect:function(x, y, w, h, color, shadowColor){
    if(shadowColor != null) rect(x + 1, y + 1, w - 1, h - 1, shadowColor)
    rect(x, y, w - 1, h - 1, color)
  },
  // rectb x y w h color
  strokeRect:function(x, y, w, h, color){
    rectb(x, y, w, h, color)
  },
  // circ x y radius color
  circle:function(x, y, radius, color){
    circ(x, y, radius, color)
  },
  // circb x y radius color
  strokeCircle:function(x, y, radius, color){
    circb(x, y, radius, color)
  },
  // line x0 y0 x1 y1 color
  line:function(x1, y1, x2, y2, color){
    line(x1, y1, x2, y2, color)
  },
  meter:function(value, maxValue, x, y, w, h, color, backColor, shadowColor){
    var p = value / maxValue
    if(backColor == null) backColor = colorId.DARK_GREY
    if(shadowColor != null){
      rect(x, y, (w * p) + 1, h, shadowColor)
    }
    rect(x, y, w, h, backColor)
    rect(x, y, w*p, h, color)
  },
  meterText:function(text, textColor, value, maxValue, x, y, w, h, meterColor, backColor, shadowColor){
    this.meter(value, maxValue, x, y, w, h, meterColor, backColor, shadowColor)
    this.smallText(text + ' ' + value + '/' + maxValue, x, y, textColor, shadowColor)
  },
  // map [x=0 y=0] [w=30 h=17] [sx=0 sy=0] [colorkey=-1] [scale=1] [remap=nil]
  mapDraw:function(x, y, w, h, sx, sy){
    map(x, y, w, h, sx, sy, -1, 1)
  },
  digitalNumber:function(strText, x, y, scale){
    if(typeof strText == 'number') strText = strText + ''
    if(typeof scale == 'undefined') scale = 1

    var spriteIdValue = spriteId.digitalNumber
    for(var i = 0, l = strText.length; i < l; i++){
      var word = strText.charAt(i)
      if(word >= '0' && word <= '9'){
        displaySystem.sprite(spriteIdValue + Number(word), x + (6 * i * scale), y, 1, 1, scale)
      } else {
        displaySystem.text(word, x + (6 * i * scale), y, colorId.WHITE, scale)
      }
    }
  }
}

var soundSystem = {
  // sfx id [note] [duration=-1] [channel=0] [volume=15] [speed=0]
  soundCh:0,
  stack:{
    len:0,
    idValue:[0],
    idFrame:[0],
  },
  soundOn:true,
  SYSTEM_CHANNEL:3,
  systemChannelFrame:60,
  play:function(soundId, channel){
    if(channel == 3) this.systemChannelFrame = 30
    if(this.musicOn && this.soundOn){
      channel = typeof channel == 'undefined' ? 0 : channel
      sfx(soundId, null, -1, channel)
    } else if(!this.musicOn && this.soundOn){
      if(typeof channel == 'undefined') {
        this.soundCh++
        if(this.soundCh > 2 && this.systemChannelFrame > 0) this.soundCh = 0
        else if(this.soundCh > 3) this.soundCh = 0
        sfx(soundId, null, -1, this.soundCh)
      } else if(channel <= 3) {
        sfx(soundId, null, -1, channel)
      }
    }
  },
  stop:function(){
    for(var i = 0; i <= 3; i++) sfx(-1, 0, -1, i)
  },
  requestPush:function(soundId, loopCount, soundDelay){
    if(soundDelay == null) soundDelay = 10
    var s = soundSystem.stack
    loopCount = typeof loopCount == 'undefined' ? 1 : loopCount
    for(var i = 0; i < loopCount; i++){
      s.len = s.idValue.push(soundId)
      s.idFrame.push(soundDelay)
    }
  },
  soundProcess:function(){
    this.systemChannelFrame--
    var s = soundSystem.stack
    if(s.idFrame.length > 0) s.idFrame[0]--
    if(s.idValue.length > 0 && s.idFrame[0] <= 0){
      var soundIdValue = s.idValue.shift()
      s.idFrame.shift()
      soundSystem.play(soundIdValue)
    }
  },
  musicOn:true,
  musicFrame:0,
  musicPlayFrame:0,
  musicLength:
      [768, 896, 768, 448, 1088, 1088, 1088, 512*14, 768, 448, // 1-1 ~ 3-2, 1-b, 3-b
       1920, 4352, 3840, 2176, 4096, 2048, 2560, 5120, 640, 1088*8, 512], // 4-1 ~ 9-2
  musicIdValue: -1,
  musicPlay:function(musicIdValue){
    if(soundSystem.musicOn && musicIdValue != -1 && soundSystem.musicIdValue != musicIdValue){
      soundSystem.musicIdValue = musicIdValue
      soundSystem.musicFrame = 0
    } else if(musicIdValue == -1) {
      soundSystem.musicStop()
    }
  },
  musicStop:function(){
    soundSystem.musicIdValue = -1
    soundSystem.musicFrame = 0
    music()
  },
  musicProcess:function(){
    if(soundSystem.musicIdValue >= 0){
      soundSystem.musicFrame++
      soundSystem.musicPlayFrame++
    }
    
    if(soundSystem.musicIdValue >= 0 && soundSystem.musicFrame >= 0 && soundSystem.musicLength[soundSystem.musicIdValue] > 0){
      soundSystem.musicFrame = -soundSystem.musicLength[soundSystem.musicIdValue]
      soundSystem.musicPlayFrame = 0
      switch(soundSystem.musicIdValue){
        case musicId.r1_1: music(0, 0); break
        case musicId.r1_2: music(1, 0); break
        case musicId.r1_3: music(0, 4); break
        case musicId.r1_b: music(1, 4); break
        case musicId.r2_1: music(2, 0); break
        case musicId.r2_2: music(2, 4); break
        case musicId.r2_3: music(2, 8); break
        case musicId.r3_1: music(3, 0); break
        case musicId.r3_2: music(0, 8); break
        case musicId.r3_b: music(1, 8); break
        case musicId.r4_1: music(4, 0); break
        case musicId.r4_2: music(5, 0); break
        case musicId.r4_4: music(4, 4); break
        case musicId.r5_1: music(5, 4); break
        case musicId.r6_1: music(6, 0); break
        case musicId.r6_3: music(6, 8); break
        case musicId.r7_1: music(7, 0); break
        case musicId.r7_4: music(7, 4); break
        case musicId.r8_1: music(7, 12); break
        case musicId.r9_1: music(5, 8); break
        case musicId.r9_2: music(6, 12); break
      }
    }
  }

}

function SkillData(name, delay, coolTime, shotCount, repeatCount, attackMultiple, afterDelay,
  spriteId, w, h, weaponId, runSoundId, shotSoundId){
  this.name = name
  this.delay = delay
  this.coolTime = coolTime
  this.shotCount = shotCount
  this.repeatCount = repeatCount
  this.attackMultiple = attackMultiple
  this.afterDelay = afterDelay
  this.spriteId = spriteId
  this.w = w
  this.h = h
  this.weaponId = weaponId
  this.runSoundId = runSoundId
  this.shotSoundId = shotSoundId
  this.totalMultiple = Math.floor(shotCount * repeatCount * attackMultiple * weaponData[weaponId].repeatCount)
  this.weight = Number((this.totalMultiple / 25 / coolTime).toFixed(1))
}

var playerSystem = {
  x:0, y:40, speedX:3, speedY:3, w:2, h:1, scale:1, width:16, height:8,
  spriteId:spriteId.player,
  hp:120, hpMax:120,
  shield:200, shieldMax:200, shieldRecovery:100, shieldRecoveryCountMax:6000, shieldRecoveryCount:0,
  damage:0,
  getHpPercent:function(){ return this.hp / this.hpMax * 100 },
  getShieldPercent:function(){ return this.shield / this.shieldMax * 100 },
  enimationFrame:{
    damage:0,
    levelup:0
  },
  lv:0, exp:0, lvMax:150, expMax:0,
  expTable: [ 10000,
    12000, 14000, 16000, 18000, 20000, 22000, 24000, 26000, 28000, 30000, // 1~10
    32000, 34000, 36000, 38000, 40000, 44000, 48000, 52000, 56000, 60000, // 11~20
    64000, 68000, 72000, 76000, 80000, 80000, 80000, 80000, 80000, 80000, // 21~30
    100000, 100000, 100000, 100000, 100000, 105000, 110000, 115000, 120000, 125000, // 31~40
    147000, 154000, 161000, 168000, 175000, 180000, 185000, 190000, 195000, 200000, // 41~50
    210000, 220000, 230000, 240000, 250000, 250000, 250000, 250000, 250000, 250000, // 51~60
    266000, 272000, 278000, 284000, 290000, 300000, 300000, 300000, 300000, 300000, // 61~70
    318000, 326000, 334000, 342000, 350000, 359000, 368000, 377000, 386000, 395000, // 71~80
    420000, 440000, 460000, 480000, 500000, 520000, 540000, 560000, 580000, 600000, // 81~90
    616000, 632000, 648000, 664000, 680000, 733000, 746000, 759000, 772000, 785000, // 91~100
    811000, 822000, 833000, 844000, 855000, 915000, 930000, 945000, 960000, 975000, // 101 ~ 110
    1000000, 1010000, 1020000, 1030000, 1040000, 1074000, 1088000, 1102000, 1116000, 1130000, // 111 ~ 120
    1166000, 1182000, 1198000, 1214000, 1230000, 1258000, 1276000, 1294000, 1312000, 1330000, // 121 ~ 130
    1350000, 1370000, 1390000, 1410000, 1430000, 1460000, 1470000, 1480000, 1490000, 1500000, // 131 ~ 140
    1535000, 1570000, 1605000, 1640000, 1675000, 1755000, 1811000, 1865000, 1920000, 2000000, // 141 ~ 150
    ],
  attack:100, combatPower:0,
  upgrade:{
    attackLevel:0,
    attackMaxLevel:50,
    getAttackCost:function(){
      var cost = [ 3000, 3200, 3700, 4200, 4700, 5000, 5600, 6100]
      if(this.attackLevel < cost.length) return cost[this.attackLevel]
      else if(this.attackLevel < this.attackMaxLevel) return 7000
      else return 'MAX UPGRADE'
    },
    getRequestAttackLevelUp:function(){
      if(this.attackLevel < this.attackMaxLevel && playerSystem.gold >= this.getAttackCost()){
        this.attackLevel += 1
        playerSystem.gold -= this.getAttackCost()
        return true
      } else {
        return false
      }
    },
    shieldLevel:0,
    shieldMaxLevel:20,
    getShieldCost:function(){
      var cost = [4000, 4400, 5100, 5500, 6100, 6500, 7500, 8000]
      if(this.shieldLevel < cost.length) return cost[this.shieldLevel]
      else if(this.shieldLevel < this.shieldMaxLevel) return 9000
      else return 'MAX UPGRADE'
    },
    getRequestShieldLevelUp:function(){
      if(this.shieldLevel < this.shieldMaxLevel && playerSystem.gold >= this.getShieldCost()){
        this.shieldLevel += 1
        playerSystem.gold -= this.getShieldCost()
        return true
      } else {
        return false
      }
    },
    subWeaponLevel:0,
    subWeaponMaxLevel:5,
    getSubWeaponCost:function(){
      var cost = [10000, 10000, 10000, 10000, 10000]
      if(this.subWeaponLevel < cost.length) return cost[this.subWeaponLevel]
      else return 'MAX UPGRADE'
    },
    getSubWeaponRefund:function(){
      var refund = [0, 8000, 16000, 24000, 32000, 40000]
      return refund[this.subWeaponLevel]
    },
    getRequestSubWeaponLevelUp:function(){
      if(this.subWeaponLevel < this.subWeaponMaxLevel && playerSystem.gold >= this.getSubWeaponCost()){
        playerSystem.gold -= this.getSubWeaponCost()
        this.subWeaponLevel += 1
        return true
      } else {
        return false
      }
    },
    getRequestSubWeaponRefund:function(){
      if(this.subWeaponLevel == 0) return false
      playerSystem.gold += this.getSubWeaponRefund()
      this.subWeaponLevel = 0
      return true
    }
  },
  gold:0,
  weapon:{
    list:['laser', 'missile', 'arrow'],
    delay:[12, 60, 12],
    delayCount:[0, 0, 0],
    number:0,

    sub:'',
    subWeaponDelay:30,
    subWeaponDelayCount:0,

    process:function(){
      if(btnp(buttonId.A)) this.number++
      if(this.number >= 0 && this.number <= 2) this.processWeapon()
      if(this.number >= 4) this.number = 0
    },
    processWeapon:function(){
      this.delayCount[this.number]++
      var attack = playerSystem.attack
      if(this.delayCount[this.number] >= this.delay[this.number]){
        this.delayCount[this.number] = 0
        switch(this.number){
          case 0:
            fieldSystem.insertWeapon(weaponId.laserA, attack, playerSystem.x, playerSystem.y - 2)
            fieldSystem.insertWeapon(weaponId.laserA, attack, playerSystem.x, playerSystem.y + 2)
            fieldSystem.insertWeapon(weaponId.laserB, attack, playerSystem.x, playerSystem.y - 4)
            fieldSystem.insertWeapon(weaponId.laserB, attack, playerSystem.x, playerSystem.y + 4)
            fieldSystem.insertWeapon(weaponId.laserA, attack, playerSystem.x, playerSystem.y + 8)
            fieldSystem.insertWeapon(weaponId.laserA, attack, playerSystem.x, playerSystem.y - 8)
            break
          case 1:
            fieldSystem.insertWeapon(weaponId.missileA, attack, playerSystem.x, playerSystem.y)
            fieldSystem.insertWeapon(weaponId.missileB, attack, playerSystem.x, playerSystem.y - 4, 'up')
            fieldSystem.insertWeapon(weaponId.missileB, attack, playerSystem.x, playerSystem.y + 4, 'down')
            break
          case 2:
            attack = attack * 3
            fieldSystem.insertWeapon(weaponId.arrowA, attack, playerSystem.x, playerSystem.y)
            fieldSystem.insertWeapon(weaponId.arrowB, attack, playerSystem.x, playerSystem.y)
            break
        }
      }

      this.subWeaponDelayCount++
      var subLevel = playerSystem.upgrade.subWeaponLevel
      if(subLevel >= 1 && this.subWeaponDelayCount >= this.subWeaponDelay){
        playerSystem.weapon.subWeaponDelayCount = 0
        for(var i = 1; i <= subLevel; i++) fieldSystem.insertWeapon(weaponId.subWeaponBlaster, attack, playerSystem.x, playerSystem.y + (i * 4) - 12)
      }
    },

    init:function(){
      for(var i = 0; i < this.delayCount.length; i++){
        this.delayCount[i] = 0
      }
    }
  },
  skill:{
    SKILLX:0,
    SKILLY:1,
    SKILLB:2,
    data:[
      new SkillData('laser', 6, 20, 4, 25, 5, 30, spriteId.skillLaser, 2, 1, weaponId.skillLaser, soundId.skillLaserUse, soundId.skillLaserShot),
      new SkillData('missile', 20, 24, 2, 4, 4.5, 0, spriteId.skillMissile, 2, 1, weaponId.skillMissile, soundId.unused, soundId.skillMissileShot),
      new SkillData('sapia', 0, 24, 3, 1, 4, 42, spriteId.skillSapia, 1, 1, weaponId.skillSapia, soundId.skillSapiaUse, soundId.unused),
      new SkillData('sword', 0, 24, 1, 1, 15, 6, spriteId.skillSword, 2, 1, weaponId.skillSword, soundId.skillSwordUse, soundId.unused),
      new SkillData('blaster', 4, 28, 2, 30, 17.5, 18, spriteId.skillBlaster, 2, 1, weaponId.skillBlaster, soundId.skillBlaster, soundId.skillBlaster),
      new SkillData('linelaser', 6, 20, 2, 40, 1.5, 0, spriteId.skillLineLaser, 1, 1, weaponId.skillLinelaser, soundId.unused, soundId.skillLinelaser),
      new SkillData('ripple', 10, 24, 5, 24, 5.5, 0, spriteId.skillRipple, 2, 1, weaponId.skillRipple, soundId.unused, soundId.skillRipple),
      new SkillData('thunder', 30, 28, 2, 5, 8.4, 10, spriteId.skillThunder, 1, 1, weaponId.skillThunder, soundId.unused, soundId.skillThunder),
      new SkillData('bomb', 10, 28, 1, 20, 2.1, 60, spriteId.skillBomb, 1, 1, weaponId.skillBomb, soundId.skillBomb, soundId.skillMissileShot),
      new SkillData('hyperBall', 6, 20, 2, 25, 10, 30, spriteId.skillHyperBall, 1, 1, weaponId.skillHyperBall, soundId.skillLaserUse, soundId.skillLaserShot),
      new SkillData('whiteFlash', 8, 24, 1, 20, 3, 24, spriteId.skillWhiteFlash, 1, 1, weaponId.skillWhiteFlash, soundId.skillSapiaUse, soundId.skillSapiaHit),
      new SkillData('crescent', 0, 24, 1, 1, 6, 0, spriteId.skillCrescent, 2, 1, weaponId.skillCrescent, soundId.unused, soundId.unused),
      new SkillData('airplane', 0, 24, 6, 1, 4.4, 30, spriteId.skillAirplane, 2, 1, weaponId.skillAirplane, soundId.skillAirplane, soundId.unused),
      new SkillData('skull', 0, 28, 1, 1, 14, 0, spriteId.skillSkull, 2, 1, weaponId.skillSkull, soundId.unused, soundId.unused)
    ],
    SKILLSLOT:3,
    user:[
      {delay:0, delayCount:0, coolTime:0, coolTimeFrame:0, repeatCount:0, useNumber:12},
      {delay:0, delayCount:0, coolTime:0, coolTimeFrame:0, repeatCount:0, useNumber:13},
      {delay:0, delayCount:0, coolTime:0, coolTimeFrame:0, repeatCount:0, useNumber:11},
    ],
    process:function(){
      var skillData
      var skillNumber = 0
      var request = -1

      if(btnp(buttonId.X)) request = this.SKILLX
      if(btnp(buttonId.Y)) request = this.SKILLY
      if(btnp(buttonId.B)) request = this.SKILLB

      if(request != -1 && this.user[request].coolTime <= 0){
        skillNumber = this.user[request].useNumber
        if(skillNumber >= this.data.length) return

        skillData = this.data[skillNumber]
        this.user[request].delay = skillData.delay
        this.user[request].delayCount = -skillData.afterDelay + skillData.delay
        this.user[request].coolTime = skillData.coolTime
        this.user[request].coolTimeFrame = 60
        this.user[request].repeatCount = skillData.repeatCount
        if(skillData.runSoundId != 0){
          soundSystem.play(skillData.runSoundId)
        }
      }

      this.processSKill()
    },
    processSKill:function(){
      for(var i = 0; i < this.SKILLSLOT; i++){
        var k = this.user[i]
        var d = this.data[k.useNumber]
        var p = playerSystem

        k.coolTimeFrame--
        k.delayCount++
        if(k.coolTimeFrame <= 0 && k.coolTime >= 1){
          k.coolTime--
          k.coolTimeFrame = 60
        }
        if(k.delayCount >= k.delay && k.repeatCount >= 1){
          k.delayCount = 0
          k.repeatCount--
          if(this.data[k.useNumber].shotSoundId != 0){
            soundSystem.play(this.data[k.useNumber].shotSoundId)
          }
          var sy = -(d.shotCount / 2) * 8
          for(var j = 0; j < d.shotCount; j++){
            fieldSystem.insertWeapon(d.weaponId, Math.floor(d.attackMultiple * p.attack), p.x, p.y + sy + (j * 8), '', '' + j)
          }
        }
      }
    },
    init:function(){
      for(var i = 0; i < this.SKILLSLOT; i++){
        this.user[i].coolTime -= 30
        this.user[i].coolTimeFrame = 0
        this.user[i].repeatCount = 0
        this.user[i].delayCount = 0
      }
    },
    inputSkillSlot:function(slotNumber, skillId){
      if(typeof slotNumber == 'undefined') slotNumber = 0
      if(slotNumber == -1) slotNumber = 2

      if(typeof skillId == 'number' && skillId < this.data.length){
        this.user[slotNumber].useNumber = skillId
      }

      slotNumber += 1
      if(slotNumber > 2) slotNumber = 0
      else if(slotNumber < 0) slotNumber = 2
      return slotNumber
    }
  },
  setAttackValueGetString: function(){
    var baseAttack = 100
    var levelBonus = (this.lv * 2)
    var upgradeAttack = 10 * this.upgrade.attackLevel
    var totalAttack = baseAttack + levelBonus + upgradeAttack
    var multipleBonus = this.lv < 100 ? Math.floor(totalAttack / 100 * this.lv) : totalAttack * 1
    this.attack = totalAttack + multipleBonus

    return 'base: ' + baseAttack + ', level: ' + levelBonus + ', upgrade: ' + upgradeAttack + ', multiple: ' + multipleBonus
  },
  setShieldValueGetString: function(){
    var baseShield = 200
    var levelBonus = this.lv < 100 ? Math.floor(this.lv / 20) * 20 : 100
    var upgradeShield = 10 * this.upgrade.shieldLevel
    var totalShield = baseShield + levelBonus + upgradeShield
    this.shieldMax = totalShield
    this.shieldRecovery = Math.floor(totalShield / 2)

    return 'base: ' + baseShield + ', level: ' + levelBonus + ', upgarde: ' + upgradeShield
  },
  getExpMax: function(levelValue){
    if(levelValue >= this.expTable.length || this.lv >= this.expTable.length) return -1
    else if(levelValue == null) return this.expTable[this.lv]
    else return this.expTable[levelValue]
  },
  getExpPercent: function(){
    return this.exp / this.getExpMax(this.lv) * 100
  },
  lvUpCheck: function(){
    var isLvUp = false
    while((this.lv < this.expTable.length || this.lv < this.lvMax) && this.exp >= this.getExpMax()){
      this.exp -= this.getExpMax()
      this.lv++
      isLvUp = true
    }
    if(isLvUp){
      soundSystem.play(soundId.levelUp, 3)
      this.enimationFrame.levelup = 120
    }
  },
  plusExp: function(value){
    this.expMax = this.expTable[this.lv]
    this.exp += value
    if(this.lv < this.lvMax){
      this.lvUpCheck()
    } else if(this.lv >= this.lvMax){
      this.lv = this.lvMax
    }
  },
  setLevel:function(value){
    if(value >= this.lvMax){
      this.lv = this.lvMax
    } else {
      this.lv = value
    }
  },
  damageInsert: function(damageValue){
    if(damageValue <= 0) return
    this.damage += damageValue
  },
  processDamage:function(){
    if(this.enimationFrame.damage > 0){
      this.enimationFrame.damage--
    } else if(this.enimationFrame.damage < 0){
      this.enimationFrame.damage++
    }

    if(this.damage <= 0) return
    if(this.shield >= this.damage){
      if(this.damage <= Math.floor(this.shieldMax / 10) ) soundSystem.play(soundId.damageSmall, 3)
      else soundSystem.play(soundId.damageMiddle, 1)
      this.shield -= this.damage
      this.enimationFrame.damage = this.damage * 2
    } else if(this.shield > 0 && this.shield <= this.damage){
      if(this.damage <= 20) soundSystem.play(soundId.damageMiddle, 3)
      else soundSystem.play(soundId.damageBig, 1)
      var leftValue = this.damage - this.shield
      this.shield = 0
      this.hp -= Math.floor(leftValue / 2)
      this.enimationFrame.damage = -this.damage * 3
    } else {
      if(this.damage <= 10) soundSystem.play(soundId.damageMiddle, 3)
      else soundSystem.play(soundId.damageBig, 1)
      if(this.damage <= 1) this.damage = 2
      this.hp -= Math.floor(this.damage / 2)
      this.enimationFrame.damage = -this.damage * 3
    }
    this.damage = 0
  
    if(this.hp <= 0){
      soundSystem.requestPush(soundId.playerDie, 6, 15)
    }
  },
  processShield:function(){
    this.shieldRecoveryCount += this.shieldRecovery
    if(this.shieldRecoveryCount >= this.shieldRecoveryCountMax){
      this.shieldRecoveryCount -= this.shieldRecoveryCountMax
      if(this.shield < this.shieldMax){
        this.shield++
      }
    }
  },
  process:function(){
    if(this.hp <= 0) return
    this.processMove()
    this.processShield()
    this.weapon.process()
    this.skill.process()
    this.processDamage()
    this.processStat()
  },
  processStat: function(){
    this.setAttackValueGetString()
    this.setShieldValueGetString()
  },
  processMove:function(){
    if(btn(buttonId.LEFT) && this.x > 0) this.x -= this.speedX
    if(btn(buttonId.RIGHT) && this.x + 16 < 240) this.x += this.speedX
    if(btn(buttonId.UP) && this.y > 0) this.y -= this.speedY
    if(btn(buttonId.DOWN) && this.y + 8 < 120) this.y += this.speedY

    if(this.x < 0) this.x = 0
    if(this.x > 240 - 16) this.x = 240 - 16
    if(this.y < 0) this.y = 0
    if(this.y > 120 - 8) this.y = 120 - 8
  },
  display:function(){
    if(this.hp > 0) this.displayPlayer()
    this.displayStat()
    this.displaySkill()
  },
  mainDisplay:function(){
    this.displayStat()
    this.displaySkill()
  },
  subDisplay:function(){
    var ETC_X = 120 + 1
    var ETC_Y = 128
    var ETC_WIDTH = 120
    var ETC_HEIGHT = 8
    var TEXT_ATTACK = 'ATTACK:' + this.attack + ', '
    var TEXT_GOLD = 'GOLD:' + this.gold
    displaySystem.rect(ETC_X, ETC_Y, ETC_WIDTH, ETC_HEIGHT, colorId.GREY)
    displaySystem.smallText(TEXT_ATTACK, ETC_X, ETC_Y, colorId.RED, colorId.DARK_GREY)
    displaySystem.smallText(TEXT_GOLD, ETC_X + (TEXT_ATTACK.length * 4), ETC_Y, colorId.YELLOW, colorId.DARK_GREY)
  },
  displayPlayer:function(){
    if(this.hp <= 0) return
    displaySystem.object(this)
    if(Math.abs(this.enimationFrame.damage) % 4 == 1){
      displaySystem.rect(this.x, this.y, 16, 8, colorId.RED)
    }
  },
  displayStat:function(){
    var SHIELD_WIDTH = 120
    var SHIELD_HEIGHT = 4
    var SHIELD_X = 0
    var SHIELD_Y = 120
    var HP_X = 0
    var HP_Y = 124
    var HP_WIDTH = 120
    var HP_HEIGHT = 4
    var shieldPercentWidth = this.getShieldPercent() > 100 ? 1 : this.getShieldPercent() / 100
    var hpPercentWidth = this.getHpPercent() > 100 ? 1 : this.getHpPercent() / 100
    if(Math.abs(this.enimationFrame.damage) % 4 == 1){
      displaySystem.rect(SHIELD_X, SHIELD_Y, SHIELD_WIDTH, SHIELD_HEIGHT, colorId.ORANGE)
      displaySystem.shadowRect(SHIELD_X, SHIELD_Y, SHIELD_WIDTH * shieldPercentWidth, SHIELD_HEIGHT, colorId.ORANGE, colorId.DARK_BLUE)
    } else {
      displaySystem.rect(SHIELD_X, SHIELD_Y, SHIELD_WIDTH, SHIELD_HEIGHT, colorId.GREY)
      displaySystem.shadowRect(SHIELD_X, SHIELD_Y, SHIELD_WIDTH * shieldPercentWidth, SHIELD_HEIGHT, colorId.LIGHT_BLUE, colorId.DARK_BLUE)
    }
    if(this.enimationFrame.damage < 0 && Math.abs(this.enimationFrame.damage) % 4 == 1){
      displaySystem.rect(HP_X, HP_Y, HP_WIDTH, HP_HEIGHT, colorId.ORANGE)
      displaySystem.shadowRect(HP_X, HP_Y, HP_WIDTH * hpPercentWidth, HP_HEIGHT, colorId.RED, colorId.DARK_BLUE)
    } else {
      displaySystem.rect(HP_X, HP_Y, HP_WIDTH, HP_HEIGHT, colorId.GREY)
      displaySystem.shadowRect(HP_X, HP_Y, HP_WIDTH * hpPercentWidth, HP_HEIGHT, colorId.BLUE, colorId.DARK_BLUE)
    }
    displaySystem.smallText(this.hp + ' + ' + this.shield + '/' + this.shieldMax, SHIELD_X, SHIELD_Y, colorId.WHITE, colorId.DARK_GREY)

    var LEVEL_X = 0
    var LEVEL_Y = 128
    var LEVEL_WIDTH = 120
    var LEVEL_HEIGHT = 8
    var expPercentWidth = this.getExpPercent() > 100 ? 1 : this.getExpPercent() / 100
    this.enimationFrame.levelup--
    if(this.enimationFrame.levelup > 1 && this.enimationFrame.levelup % 4 == 1){
      displaySystem.rect(LEVEL_X, LEVEL_Y, LEVEL_WIDTH, LEVEL_HEIGHT, colorId.YELLOW)
      displaySystem.shadowRect(LEVEL_X, LEVEL_Y, LEVEL_WIDTH * expPercentWidth, LEVEL_HEIGHT, colorId.YELLOW, colorId.DARK_GREY)
    } else {
      displaySystem.rect(LEVEL_X, LEVEL_Y, LEVEL_WIDTH, LEVEL_HEIGHT, colorId.GREY)
      displaySystem.shadowRect(LEVEL_X, LEVEL_Y, LEVEL_WIDTH * expPercentWidth, LEVEL_HEIGHT, colorId.PURPLE, colorId.DARK_GREY)
    }
    if(this.lv < this.lvMax){
      displaySystem.smallText('Lv.' + this.lv + ': ' + this.exp + '/' + this.getExpMax(this.lv), LEVEL_X, LEVEL_Y, colorId.ORANGE, colorId.DARK_GREY)
    } else {
      displaySystem.smallText('Lv.' + this.lv + '(MAX): ' + this.exp, LEVEL_X, LEVEL_Y, colorId.ORANGE, colorId.DARK_GREY)
    }
  },
  displaySkill:function(){
    for(var i = 0; i < this.skill.SKILLSLOT; i++){
      var X = 128
      var Y = 120
      var INTERVAL = 32
      var skill = this.skill.user[i]
      var data = this.skill.data[skill.useNumber]

      if(skill.coolTime <= 0){
        if(i == 0) displaySystem.sprite(spriteId.buttonX, X + (INTERVAL * i), Y, 1, 1, 1)
        else if(i == 1) displaySystem.sprite(spriteId.buttonY, X + (INTERVAL * i), Y, 1, 1, 1)
        else if(i == 2) displaySystem.sprite(spriteId.buttonB, X + (INTERVAL * i), Y, 1, 1, 1)

        displaySystem.sprite(data.spriteId, X + (INTERVAL * i) + 10, Y, data.w, data.h)
      } else {
        if(i == 0) displaySystem.sprite(spriteId.buttonDisableX, X + (INTERVAL * i) , Y, 1, 1, 1)
        else if(i == 1) displaySystem.sprite(spriteId.buttonDisableY, X + (INTERVAL * i) , Y, 1, 1, 1)
        else if(i == 2) displaySystem.sprite(spriteId.buttonDisableB, X + (INTERVAL * i) , Y, 1, 1, 1)

        displaySystem.digitalNumber(skill.coolTime, X + (INTERVAL * i) + 10, Y)
      }
    }
  },
  init:function(){
    var p = playerSystem
    p.shield = p.shieldMax
    p.shieldRecoveryCount = 0
    p.hp = p.hpMax
    p.x = 0
    p.y = 40
    p.damage = 0
    p.enimationFrame.damage = 0
    p.weapon.init()
    p.skill.init()
  },
  reset:function(){
    var p = playerSystem
    p.lv = 0
    p.exp = 0
    p.gold = 0
    p.upgrade.attackLevel = 0
    p.upgrade.shieldLevel = 0
    p.upgrade.subWeaponLevel = 0
  }
}

TIC()
SCN()