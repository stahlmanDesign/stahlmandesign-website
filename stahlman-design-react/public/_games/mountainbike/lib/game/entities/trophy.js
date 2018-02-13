ig.module(
	'game.entities.trophy'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityTrophy = ig.Entity.extend({
	
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
	
	
	// These are our own properties. They are not defined in the base
	// ig.Entity class. We just use them internally for the Player
	flip: false,
	flip: false,
	trophyTypes: [],
	trophyType:"",
	winner:null,
	
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		this.trophyTypes = ["first","second","third"];
		this.winner = settings.winner;
		//console.log(settings.trophyType) // 3
		this.graityFactor = 0;        
		// Add the animations
		this.addAnim( 'first', 0.5, [29],true );
		this.addAnim( 'second', 0.5, [69],true ); // true == stop
		this.addAnim( 'third', 0.5, [109],true );
		this.trophyType=this.trophyTypes[settings.trophyType-1];
		//console.log(this.trophyType);
		this.player = ig.game.getEntitiesByType(EntityPlayer)[0];
		this.opponent1 = ig.game.getEntitiesByType(EntityOpponent1)[0];
		this.opponent2 = ig.game.getEntitiesByType(EntityOpponent2)[0];
	},
	update: function() {
		
		
		//console.log("trophy type = "+this.trophyType)
		this.currentAnim = this.anims[this.trophyType];

		this.currentAnim.flip.x = this.flip;
              
		// move!
		this.parent();
		
		this.pos.x = this.winner.pos.x;
		this.pos.y = this.winner.pos.y-32;
	
	}
    
});



});