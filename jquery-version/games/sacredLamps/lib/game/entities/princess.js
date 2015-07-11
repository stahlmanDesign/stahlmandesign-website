ig.module(
	'game.entities.princess'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityPrincess = ig.Entity.extend({
	size: {x: 32, y: 32},
    offset: {x: 0, y: 0},
	maxVel: {x: 20, y: 20},
	friction: {x: 150, y: 0},

	type: ig.Entity.TYPE.B, // Evil enemy group
	checkAgainst: ig.Entity.TYPE.A, // Check against friendly
	collides: ig.Entity.COLLIDES.PASSIVE,

	health: 5,


	speed: 0,
	flip: true,

    jump: 20,

	animSheet: new ig.AnimationSheet( 'media/princess.png', 32, 32 ),


	init: function( x, y, settings ) {
		this.parent( x, y, settings );

		this.addAnim( 'idle', 0.5, [0,1,2,3,4,5,6] );
		this.addAnim( 'victory', 0.5, [7,8,9,10,11,12,13], true );
	},


	update: function() {


        this.currentAnim.flip.x = this.flip;

		var xdir = this.flip ? -1 : 1;
		this.vel.x = this.speed * xdir;

		this.parent();
        this.currentAnim = this.anims.idle;

        if (ig.game.numLampsRetrieved >= 3){
	        if (!this.victory){
		        this.currentAnim = this.anims.victory.rewind();
	            this.victory = true;
	        }
        	this.currentAnim = this.anims.victory;
        }

	},


	handleMovementTrace: function( res ) {
		this.parent( res );

		// collision with a wall? return!
		if( res.collision.x ) {
			this.flip = !this.flip;
            this.vel.y = -this.jump;
		}
	},

	check: function( other ) {
		//other.receiveDamage( 10, this );
		if (other.hasLamp){
			ig.game.spawnEntity( EntityKiss, this.pos.x, this.pos.y+2, {flip:this.flip} );
			other.health <=50 ? other.health += 20 : other.health = 50; // princess gives health when she receives a lamp
			other.giveLamp (1,this);
		}



	}
});

// Shrapnel particles
// 	Cosmetic particle effects
// The Impact API says:
//	Objects that don't need to be placed in Weltmeister don't need their own file
EntityKiss = ig.Entity.extend({
	size: {x: 6, y: 6},
	maxVel: {x: 80, y: 50},

	bounciness: 0.1,

	type: ig.Entity.TYPE.NONE,
	collides: ig.Entity.COLLIDES.PASSIVE,

	animSheet: new ig.AnimationSheet( 'media/kiss.png', 8, 8),

	bounceNum: 0,

	// This method is called only once on creation
	init: function( x, y, settings ) {
		this.parent( x, y, settings );

		this.vel.x = -15+Math.floor(Math.random()*-20);
		this.vel.y = -15+Math.floor(Math.random()*-20);
		this.addAnim( 'fly', 0.1+Math.floor(Math.random()*3)/10, [0,1,2,3] );
		this.currentAnim.frame = Math.floor(Math.random()*4);
	},

	handleMovementTrace: function( res ) {
		this.parent( res );
		if( res.collision.x || res.collision.y ) {

			// only bounce 1 times
			this.bounceNum++;
			if( this.bounceNum > 1 ) {
				this.kill();
			}
		}
	},
	check: function( other ) {
		//other.receiveDamage( 10, this );
		if (other.hasLamp)ig.game.spawnEntity( EntityKiss, this.pos.x, this.pos.y+2, {flip:this.flip} );
		other.giveLamp (1,this);


	}

});

});