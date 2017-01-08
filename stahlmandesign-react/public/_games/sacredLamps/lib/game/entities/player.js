ig.module(
	'game.entities.player'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityPlayer = ig.Entity.extend({

	// The players (collision) size is a bit smaller than the animation
	// frames, so we have to move the collision box a bit (offset)
	size: {x: 16, y:16},
	offset: {x: 0, y: 0},

	maxVel: {x: 100, y: 60},
	friction: {x: 600, y: 0},

	type: ig.Entity.TYPE.A, // Player friendly group
	checkAgainst: ig.Entity.TYPE.B,
	collides: ig.Entity.COLLIDES.PASSIVE,

	animSheet: new ig.AnimationSheet( 'media/player.png', 16, 16 ),


	// These are our own properties. They are not defined in the base
	// ig.Entity class. We just use them internally for the Player
	flip: false,
	accelGround: 100,
	accelAir: 100,
	jump: 50,
	health: 50,
	flip: false,
	canClimb: false,
    isClimbing: false,
    momentumDirection: {'x':0,'y':0},
    ladderReleaseTimer: new ig.Timer(0.0),

    ladderSpeed: 75,

    energy: {'amount':30,'max':30},
    hasLamp: false,

	init: function( x, y, settings ) {
		this.parent( x, y, settings );

		// Add the animations
		this.addAnim( 'idle', 1, [0] );
		this.addAnim( 'run', 0.07, [0,1,2,3,4,5] );
		this.addAnim( 'jump', 1, [0] );
		this.addAnim( 'fall', 0.4, [3,4,5] );
        this.addAnim( 'climbUp', 0.07, [0,1,2,3,4,5] );
        this.addAnim( 'climbDown', 0.07, [0,1,2,3,4,5] );

        this.zIndex = -99;
		//don't resort if in weltmeister
		if (!ig.global.wm)ig.game.sortEntitiesDeferred();
	},
	update: function() {

		// move left or right
		var accel = this.standing ? this.accelGround : this.accelAir;
		if( ig.input.state('left') ) {
			this.accel.x = -accel;
			this.flip = true;
            if (!this.canClimb)this.isClimbing=false; // don't allow moving horizontally off the while in climbing mode
		}
		else if( ig.input.state('right') ) {
			this.accel.x = accel;
			this.flip = false;
            if (!this.canClimb)this.isClimbing=false; // don't allow moving horizontally off the while in climbing mode
		}
		else {
			this.accel.x = 0;
		}




       if (ig.input.pressed('up') ) {
                this.momentumDirection.y >-1 ? this.momentumDirection.y -- : this.momentumDirection.y = -1;

            }else if( ig.input.pressed('down' )){
                this.momentumDirection.y <1 ? this.momentumDirection.y ++ : this.momentumDirection.y = 1;
            }


		// jump
		if(ig.input.pressed('jump') && this.energy.amount >= 1) {
			this.vel.y += -this.jump;
			this.energy.amount --;

        }


		// shoot
		if( ig.input.pressed('shoot') ) {
			ig.game.spawnEntity( EntitySpray, this.pos.x, this.pos.y+2, {flip:this.flip} );
		}

		// set the current animation, based on the player's speed
		if( this.vel.y < 0 ) {
			this.currentAnim = this.anims.jump;
            //console.log(this.vel.y)
		}
		else if( this.vel.y > 0 ) {
			this.currentAnim = this.anims.fall;

		}
		else if( this.vel.x != 0 ) {
			this.currentAnim = this.anims.run;

		}else {
			this.currentAnim = this.anims.idle;
		}

        if ( this.vel.y < 0 && this.isClimbing && this.momentumDirection.y == -1){
            this.currentAnim = this.anims.climbUp; // create your own climbing animations

        }else if ( this.vel.y > 0 && this.isClimbing && this.momentumDirection.y == 1){
            this.currentAnim = this.anims.climbDown; // create your own climbing animations

        }

		this.currentAnim.flip.x = this.flip;

		// move!
        this.parent();

	},
	receiveLamp: function(donar){
		donar.kill();
		ig.game.numLamps --;
		this.hasLamp = true;
	},
	receiveEnergy: function (numEnergy,donar){
		if (this.energy.amount < this.energy.max) this.energy.amount += numEnergy;
	},
	giveLamp: function (num, receiver){
		if (this.hasLamp)ig.game.numLampsRetrieved ++;
		this.hasLamp = false;

	}


});


// The grenades a player can throw are NOT in a separate file, because
// we don't need to be able to place them in Weltmeister. They are just used
// here in the code.

// Only entities that should be usable in Weltmeister need to be in their own
// file.
EntitySpray = ig.Entity.extend({
	size: {x: 12, y: 12},
	offset: {x: 6, y: 6},
	maxVel: {x: 100, y: 50},
	sprayTimer: new ig.Timer(0.0),

	// The fraction of force with which this entity bounces back in collisions
	bounciness: 0.2,

	type: ig.Entity.TYPE.NONE,
	checkAgainst: ig.Entity.TYPE.B, // Check Against B - our evil enemy group
	collides: ig.Entity.COLLIDES.PASSIVE,

	animSheet: new ig.AnimationSheet( 'media/sprites.png', 24, 24 ),

	bounceCounter: 0,


	init: function( x, y, settings ) {
		this.parent( x, y, settings );

		this.vel.x = (settings.flip ? -this.maxVel.x : this.maxVel.x);
		this.vel.y = -20;
		this.addAnim( 'idle', 0.05, [5,6,7,8,9] );
        this.gravityFactor=0.3;
        this.sprayTimer.set(0.2);
	},

    update:function(){
        if (this.sprayTimer.delta() > 0){
            this.kill(); // kill spray
            this.sprayTimer.set(0.2)
            console.log(this.sprayTimer.delta());
        }


        this.parent();

    },
	handleMovementTrace: function( res ) {
		this.parent( res );
		if( res.collision.x || res.collision.y ) {

			// only bounce 1 times
			this.bounceCounter++;
			if( this.bounceCounter > 1 ) {
				this.kill();
			}
		}
	},

	// This function is called when this entity overlaps anonther entity of the
	// checkAgainst group. I.e. for this entity, all entities in the B group.
	check: function( other ) {
		if (other instanceof EntityLadder || other instanceof EntityLamp){
            // don't kill ladder

        }else{
            other.receiveDamage( 2, this );
            other.speed*=0.5;
            other.jump*=0.5;
            this.kill();
        }


	}
});



});