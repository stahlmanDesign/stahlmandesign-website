ig.module(
    'game.entities.accelerator'
)
.requires(
    'impact.entity'
)
.defines(function(){

EntityAccelerator = ig.Entity.extend({
    
    checkAgainst: ig.Entity.TYPE.A,
    gravityFactor: 0,
    
    size: {x: 8, y:5},
    offset: {x: 0, y:-1},
    animSheet: new ig.AnimationSheet( 'media/jumper.png', 8, 8 ),
    
    direction: "right",
    power_x: 200,
    power_y: 100,
    
    timer: new ig.Timer(),
    
    
    init: function( x, y, settings ) {
        this.parent( x, y, settings );
        
        this.power_y *= -1;
        
        this.addAnim( 'idle', 1, [0] );
        this.addAnim( 'jump', 1, [1] );
        
        this.currentAnim = this.anims.idle;
        
        if(this.direction == "left"){
            this.power_x *= -1;
            this.power_y *= -1;
        }
    },
    
    update: function(){
        this.parent();
        if(this.timer.delta() >= 0){
            this.currentAnim = this.anims.idle;
        }
        
    },
    
    check: function(other){
        other.maxVel.x = (this.power_x > other.maxVel.x)?this.power_x : other.maxVel.x;
        other.vel.x = this.power_x;
        other.vel.y = this.power_y;
        this.currentAnim = this.anims.jump;
        this.timer.set(1);
    }
    

});


});