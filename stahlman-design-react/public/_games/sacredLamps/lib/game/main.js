ig.module(
	'game.main'
)
.requires(
	'impact.game',
	'impact.font',
	'game.levels.intro',
	'game.levels.castle',
	'game.entities.ladder',
	'game.entities.player',
	'game.entities.wizard'
)
.defines(function(){

MyGame = ig.Game.extend({

	gravity: 50, // All entities are affected by this

	// Load a font
	font1: new ig.Font( 'media/04b03.font.png' ),
	font2: new ig.Font( 'media/04b03.font.png' ),
	font3: new ig.Font( 'media/04b03.font.png' ),
	font4: new ig.Font( 'media/04b03.font.png' ),
	font5: new ig.Font( 'media/04b03.font.png' ),
	numLamps: 3,
	numLampsRetrieved: 0,
	winningMessage: "",
	gameOverMessage: "",

	init: function() {
		// Initialize your game here; bind keys etc.
		ig.input.bind( ig.KEY.LEFT_ARROW, 'left' );
		ig.input.bind( ig.KEY.RIGHT_ARROW, 'right' );

        ig.input.bind( ig.KEY.UP_ARROW, 'jump' );
		ig.input.bind( ig.KEY.DOWN_ARROW, 'down' );
		/*
ig.input.bind( ig.KEY.C, 'shoot' );
        ig.input.bind( ig.KEY.SPACE, 'jump' );
        ig.input.bind( ig.KEY.ENTER, 'enter' );
*/


		this.loadLevel( LevelCastle );
	},

	update: function() {
		// Update all entities and backgroundMaps
		this.parent();

		// Add your own, additional update code here

		// screen follows the player
		var player = this.getEntitiesByType( EntityPlayer )[0];
		if( player ) {
			this.screen.x = player.pos.x - ig.system.width/2;
			this.screen.y = player.pos.y - ig.system.height/2;
		}

		if (ig.game.numLampsRetrieved >= 3 && player){
			player.kill();
			ig.game.winningMessage = "SUCCESS!\nThe Desert of Rhala is once again\n safe from the horrible bandits,\nand the Nomad's legacy\nhas been restored!";
		}

		if (player.energy.amount <=0){
			ig.game.gameOverMessage = "YOU RAN OUT OF ENERGY!\nRecharge the magic carpet\n by visiting the energy wizard.\nReload to try again.";
		}

	},

	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();

		var player = this.getEntitiesByType( EntityPlayer )[0];

		// Add your own drawing code here
		var x = ig.system.width/2,
			y = ig.system.height/3.3;

		this.font1.draw( 'Lamps in cave: ' + this.numLamps, 20, 20, ig.Font.ALIGN.LEFT );
		this.font3.draw( 'Lamps retrieved for Princess Rozel: ' + this.numLampsRetrieved, 120, 20, ig.Font.ALIGN.LEFT );
		if (player)this.font2.draw( 'Energy: ' + player.energy.amount, 20, 30, ig.Font.ALIGN.LEFT );
		this.font4.draw( this.winningMessage, x, y, ig.Font.ALIGN.CENTER);
		this.font4.draw( this.gameOverMessage, x, y, ig.Font.ALIGN.CENTER);
		this.font5.draw( 'Player health: ' + player.health, 20, 40, ig.Font.ALIGN.LEFT);
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 320, 240, 2 );

});
