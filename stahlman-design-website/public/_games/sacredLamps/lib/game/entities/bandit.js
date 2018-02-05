ig.module(
	'game.entities.bandit'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityBandit = ig.Entity.extend({
	size: {x: 32, y: 32},
    offset: {x: 0, y: 0},
	maxVel: {x: 60, y: 60},
	friction: {x: 150, y: 0},

	type: ig.Entity.TYPE.B, // Evil enemy group
	checkAgainst: ig.Entity.TYPE.A, // Check against friendly
	collides: ig.Entity.COLLIDES.PASSIVE,

	health: 5,


	speed: 28,
	flip: false,

    jump: 20,

	animSheet: new ig.AnimationSheet( 'media/bandit.png', 32, 32 ),


	init: function( x, y, settings ) {
		this.parent( x, y, settings );

		this.addAnim( 'run', 0.3, [0,1,2,3,4,5,6,7] );
        this.addAnim( 'jump', 0.5, [2,3,4] );

	},


	update: function() {
		// near an edge? return!
		if( !ig.game.collisionMap.getTile && this.vel >0 (
				this.pos.x + (this.flip ? +4 : this.size.x -4),
				this.pos.y + this.size.y
			)
		) {
			this.flip = !this.flip;
		}

        this.currentAnim.flip.x = this.flip;

		var xdir = this.flip ? -1 : 1;
		this.vel.x = this.speed * xdir;

		this.parent();
        this.currentAnim = this.anims.run;



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
		other.receiveDamage( 1, this );


	}
});

});