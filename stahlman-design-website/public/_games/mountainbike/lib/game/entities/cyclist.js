ig.module(
	'game.entities.cyclist'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityCyclist = ig.Entity.extend({
	
	// The players (collision) size is a bit smaller than the animation
	// frames, so we have to move the collision box a bit (offset)
	size: {x: 16, y:16},
	offset: {x: 8, y: 16},
	
	maxVel: {x: 500, y: 500},
	friction: {x: 100, y: 0},
	
	type: ig.Entity.TYPE.A, // Player friendly group
	checkAgainst: ig.Entity.TYPE.B,
	collides: ig.Entity.COLLIDES.PASSIVE,
	
	animSheet: new ig.AnimationSheet( 'media/bike.png', 32, 32 ),	
	
	flip: false,
	accelGround: 50,
	accelAir: 10,
	health: 100,
	flip: false,
	momentumDirection: {'x':0,'y':0},
	appelTimer: null,
	//defendTimer: null,
	state:"",
	origX:0,
	killTimer:null,
	bounciness: 0,
	fatigue: {},
	tooTiredTimer: null,
	aiInput: {},
	fontFatigue: new ig.Font( 'media/04b03.font.png' ),
	trophyType: "",
	
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		this.fatigue = {"x": 0, "colour": "#666", "message":""}
		this.tooTiredTimer = new ig.Timer(0);
		this.aiInput = {'advance':false, 'brake':false}
	},
	update: function() {
		
		if (this.name !="player" ){
			this.ai();
		
			var accel = this.standing ? this.accelGround : this.accelAir;
			if( this.aiInput['advance'] && this.tooTiredTimer.delta() > 0) {
			
				this.accel.x = accel;
				this.currentAnim = this.anims.advance;
				if (this.accel.x >0 && this.vel.x < 50){this.vel.x=50;this.vel.y-=10;}
			// move left
			} else if( this.aiInput['brake'] ) {
				this.fatigue.x -=0.2
				this.accel.x = -accel;
				this.currentAnim = this.anims.brake;
				//this.flip = false;
		
			} else {
				this.accel.x = 0;
				this.fatigue.x -=0.2
			
			}
			if (this.vel.x==0)this.currentAnim = this.anims.idle;
			// fatigue grows if constantly advancing.
			if (this.accel.x > 0) {this.fatigue.x +=4*ig.system.tick;}
		
			else if(this.fatigue.x > 0 && this.accel.x <0)this.fatigue.x -=8*ig.system.tick;
		
			if (this.fatigue.x < 0)this.fatigue.x = 0;
			if (this.fatigue.x < 15)this.fatigue.colour = "green"
			else if (this.fatigue.x > 15 && this.fatigue.x <25)this.fatigue.colour = "orange"
			else if (this.fatigue.x > 25 && this.fatigue.x <30)this.fatigue.colour = "red";
			else if (this.fatigue.x >30){this.tooTiredTimer.set(Math.random()*3);this.fatigue.x = 28;}
		
			if (this.tooTiredTimer.delta() < 0) this.accel.x = 0;
		
			if (this.accel < 0 && this.vel.x < -10)this.vel.x = -10
		
			this.currentAnim.flip.x = this.flip;
                }
		// move!
		this.parent();
		
	},
	ai :function (){
		
        // 50% of the time he will exceed fatigue
		if (this.fatigue.x < 29.5 + Math.random()){			
			this.aiInput['advance'] = true;
			this.aiInput['brake'] = false;
		}else{
			this.aiInput['advance'] = false;
			this.aiInput['brake'] = true;
		}
	
	},
	draw:function (){
	var ctx = ig.system.context;
	var s = ig.system.scale;
	var x = this.pos.x * s - ig.game.screen.x * s;
	var y = (this.pos.y-12) * s - ig.game.screen.y * s;
	var sizeX = this.fatigue.x //this.size.x * s;
	var sizeY = 4 //this.size.y * s;
	ctx.save();
      
        ctx.fillStyle = this.fatigue.colour;
        ctx.fillRect(x,y,sizeX,sizeY);
	
	ctx.restore();	
	
	this.parent();
	
	// font follows entity
	var fx = this.pos.x - ig.game.screen.x;
	var fy = this.pos.y - ig.game.screen.y;	
	this.fontFatigue.draw( this.fatigue.message, fx, fy-50,ig.Font.ALIGN.LEFT);
	},
	handleMovementTrace: function( res ) {
		if (this.pos.x){
		//res.collision.slope = {x: lvx, y: lvy, nx: nx, ny: ny};
		
		// this entirely overrides entity.js handleMovementTrace method, no need to call parent
		this.standing = false;
		
		if( res.collision.y ) {
			
			// added for bike
			this.anims.advance.angle = 0;
			this.anims.brake.angle = 0;
			
			
			if( this.bounciness > 0 && Math.abs(this.vel.y) > this.minBounceVelocity ) {
				this.vel.y *= -this.bounciness;				
			}
			else {
				if( this.vel.y > 0 ) {
					this.standing = true;
				}
				this.vel.y = 0;
			}
		}
		if( res.collision.x ) {
			if( this.bounciness > 0 && Math.abs(this.vel.x) > this.minBounceVelocity ) {
				this.vel.x *= -this.bounciness;				
			}
			else {
				this.vel.x = 0;
			}
		}
		if( res.collision.slope ) {
			this.standing = true; // this added for bike
			this.anims.advance.angle = res.collision.slope.nx;
			this.anims.brake.angle = res.collision.slope.nx;
			
			var s = res.collision.slope;
			
			if( this.bounciness > 0 ) {
				var proj = this.vel.x * s.nx + this.vel.y * s.ny;
				
				this.vel.x -= s.nx * proj * 2;
				this.vel.y -= s.ny * proj * 2;
				
				this.vel.x *= this.bounciness;
				this.vel.y *= this.bounciness;
			}
			else {
				var lengthSquared = s.x * s.x + s.y * s.y;
				var dot = (this.vel.x * s.x + this.vel.y * s.y)/lengthSquared;
				
				this.vel.x = s.x * dot;
				this.vel.y = s.y * dot;
				
				var angle = Math.atan2( s.x, s.y );
				if( angle > this.slopeStanding.min && angle < this.slopeStanding.max ) {
					this.standing = true;
				}
			}
		}
		
		this.pos = res.pos;
		}
	},
	kill: function(){
		this.pos.x = this.origX;
		
		
	}
    
});



});