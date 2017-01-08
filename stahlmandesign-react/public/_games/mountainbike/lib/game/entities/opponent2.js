ig.module(
	'game.entities.opponent2'
)
.requires(
	'game.entities.cyclist'
)
.defines(function(){

EntityOpponent2 = EntityCyclist.extend({
	
	name: "opponent2",
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		        
		// Add the animations
		this.addAnim( 'idle', 0.25, [80] );
		this.addAnim( 'advance', 0.15, [80,81] ); // true == stop
		this.addAnim( 'brake', 0.25, [81] );
		
		this.tooTiredTimer = new ig.Timer(0);
		this.aiInput = {'advance':false,
				'brake':false}
	},
	update: function() {
		this.parent();
		if (ig.game.winOp2)this.fatigue.message = this.trophyType;
	},
	awardTrophy: function (firstSecondOrThird){
		var opponent2 = ig.game.getEntitiesByType(EntityOpponent2)[0];
		ig.game.spawnEntity(EntityTrophy,this.pos.x, this.pos.y,{trophyType:firstSecondOrThird, winner:opponent2});
		this.trophyType = firstSecondOrThird;
	}
});
});