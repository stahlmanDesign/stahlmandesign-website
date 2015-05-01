ig.module(
	'game.entities.lamp'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityLamp = ig.Entity.extend({
	size: {x: 16, y: 16},
    offset: {x: 0, y: 0},
	maxVel: {x: 20, y: 20},
	friction: {x: 150, y: 0},

	type: ig.Entity.TYPE.B, // Evil enemy group
	checkAgainst: ig.Entity.TYPE.A, // Check against friendly
	collides: ig.Entity.COLLIDES.PASSIVE,

	flip: false,

	animSheet: new ig.AnimationSheet( 'media/lamp.png', 16, 16 ),

	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		this.addAnim( 'idle', .3, [0,1,2] );

	},


	update: function() {

        this.currentAnim.flip.x = this.flip;

		this.parent();
        this.currentAnim = this.anims.idle;
	},

	handleMovementTrace: function( res ) {
		this.parent( res );
	},

	check: function( other ) {

		if (other == ig.game.getEntitiesByType( EntityPlayer )[0]){
			var player = other;
			if (player.hasLamp == false){
				player.receiveLamp( this );
			}
		}
	}
});
});