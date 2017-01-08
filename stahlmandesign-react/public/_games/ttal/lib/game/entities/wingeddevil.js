ig.module(
	'game.entities.wingeddevil'
)
.requires(
	'impact.entity'
)
.defines(function(){
	
EntityWingeddevil = ig.Entity.extend({
	size: {x: 8, y: 15},
    offset: {x: 8, y: 9},
	maxVel: {x: 50, y: 200},
	friction: {x: 150, y: 0},
	
	type: ig.Entity.TYPE.B, // Evil enemy group
	checkAgainst: ig.Entity.TYPE.A, // Check against friendly
	collides: ig.Entity.COLLIDES.PASSIVE,
	
	health: 30,
	verticalVariation: 2,	
	speed: 65,
	flip: false,
    attackingTimer: new ig.Timer(1),
    
	animSheet: new ig.AnimationSheet( 'media/TTAL-sprites-entities.png', 24, 24 ),
	
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		this.gravityFactor=0;
		this.addAnim( 'fly', 0.28, [12,13,13,13,13,12] );
		this.addAnim( 'attack', 0.5, [14,13] );
        
	},
	
	
	update: function() {

        //randomly fly up or swoop down to create AI illusion
		var r = Math.random();
		if (r>0.75){this.vel.y+=this.verticalVariation;}//random swoop
		else if (r<0.23){this.vel.y-=this.verticalVariation;}//random rise

				
		var xdir = this.flip ? -1 : 1;
		
        if (this.attackingTimer.delta()>0)this.vel.x = this.speed * xdir;
        
		this.currentAnim = this.anims.fly;
		
        
        // chase player if close enough
            var player = ig.game.getEntitiesByType(EntityPlayer)[0];
            
            if (player) {
                if (this.distanceTo(player) <50){
                    ig.log(this.distanceTo(player));
                    var angle = this.angleTo( player );
                    this.vel.x = Math.cos(angle) * this.speed;
                    this.vel.y = Math.sin(angle) * this.speed;
                }
            }

        
        
        
        this.parent();
	},
	
	
	handleMovementTrace: function( res ) {
		this.parent( res );
		
		//collision with a wall? return!
		if( res.collision.x ) {
			
			this.flip = !this.flip;
			this.currentAnim.flip.x = this.flip;
			
		}
	},	
	
	check: function( other ) {
		other.receiveDamage( 1, this );
        this.currentAnim = this.anims.attack;
        
        if (other instanceof EntityPlayer){
                this.attackingTimer.set(1);
            }
        
        this.vel.x = 0;
        
	},kill: function () {
        this.killed=true;
		this.parent();
        for (var i=0;i<13;i++){
        
            ig.game.spawnEntity(EntityShard, this.pos.x+3, this.pos.y, -4);
        }
	}
});

});