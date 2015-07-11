ig.module(
	'game.entities.player'
)
.requires(
	'game.entities.cyclist'
)
.defines(function(){

EntityPlayer = EntityCyclist.extend({
	
	name:"player",
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		        
		// Add the animations
		this.addAnim( 'idle', 0.2, [0] );
		this.addAnim( 'advance', 0.25, [0,1] ); // true == stop
		this.addAnim( 'brake', 0.25, [1] );
		this.fatigue = {"x": 0, "colour": "#666", "message":""}
		this.tooTiredTimer = new ig.Timer(0);
	},
	update: function() {
		// move!
		this.parent();
		
		var accel = this.standing ? this.accelGround : this.accelAir;
		if( ig.input.state('advance') && this.tooTiredTimer.delta() > 0) {
			
			this.accel.x = accel;
			this.currentAnim = this.anims.advance;
			if (this.accel.x >0 && this.vel.x < 50){this.vel.x=50;this.vel.y-=10;}
		// move left
		} else if( ig.input.state('brake') ) {
			this.fatigue.x -=0.2
			this.accel.x = -accel;
			this.currentAnim = this.anims.brake;
			//this.flip = false;
		
		} else {
			this.accel.x = 0;
			this.fatigue.x -=0.2
			
		}
		
		if( ig.input.state('restart') ){
			ig.game.restart();
		}
		if (this.vel.x==0)this.currentAnim = this.anims.idle;
		// fatigue grows if constantly advancing.
		if (this.accel.x > 0) {this.fatigue.x +=4*ig.system.tick;}
		
		else if(this.fatigue.x > 0 && this.accel.x <0)this.fatigue.x -=8*ig.system.tick;
		
		if (this.fatigue.x < 0)this.fatigue.x = 0;
		if (this.fatigue.x < 15){this.fatigue.colour = "green";this.fatigue.message = "Avancez ->"}
		else if (this.fatigue.x > 15 && this.fatigue.x <25){this.fatigue.colour = "orange";this.fatigue.message = ""}
		else if (this.fatigue.x > 25 && this.fatigue.x <30){this.fatigue.colour = "red";this.fatigue.message = "<- ralentissez"}
		else if (this.fatigue.x >30){this.tooTiredTimer.set(Math.random()*3);this.fatigue.x = 28;}
		
		if (this.tooTiredTimer.delta() < 0){ this.accel.x = 0;this.fatigue.message = "Fatigue!"}
		
		if (this.accel < 0 && this.vel.x < -10)this.vel.x = -10
		
		if (ig.game.winPl)this.fatigue.message = this.trophyType;
		this.currentAnim.flip.x = this.flip;     
	},
	awardTrophy: function (firstSecondOrThird){
		var player = ig.game.getEntitiesByType(EntityPlayer)[0];
		ig.game.spawnEntity(EntityTrophy,this.pos.x, this.pos.y,{trophyType:firstSecondOrThird, winner:player});
		this.trophyType = firstSecondOrThird;
	},
	kill: function(){
		this.pos.x = this.origX;	
	}
});
});