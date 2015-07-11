ig.module(
	'game.entities.opponent1'
)
.requires(
	'game.entities.cyclist'
)
.defines(function(){

EntityOpponent1 = EntityCyclist.extend({
	
	name: "opponent1",
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		        
		// Add the animations
		this.addAnim( 'idle', 0.2, [40] );
		this.addAnim( 'advance', 0.25, [40,41] ); // true == stop
		this.addAnim( 'brake', 0.25, [41] );
		
		this.tooTiredTimer = new ig.Timer(0);
		this.aiInput = {'advance':false,
				'brake':false}
	},
	update: function() {
		this.parent();
		if (ig.game.winOp1)this.fatigue.message = this.trophyType;
		
	
	},
	awardTrophy: function (firstSecondOrThird){
		var opponent1 = ig.game.getEntitiesByType(EntityOpponent1)[0];
		ig.game.spawnEntity(EntityTrophy,this.pos.x, this.pos.y,{trophyType:firstSecondOrThird, winner:opponent1});
		this.trophyType = firstSecondOrThird;
	}
});
});