ig.module(
	'game.main'
)
.requires(
	'impact.game',
	'impact.font',
	'game.entities.cyclist',
	'game.entities.player',
	'game.entities.opponent1',
	'game.entities.opponent2',
	'game.entities.trophy',
	'plugins.impact-storage',
	'game.levels.test'
	/* 'impact.debug.debug' */
)
.defines(function(){

MyGame = ig.Game.extend({

	gravity: 200, // All entities are affected by this

	// Load a font
	font: new ig.Font( 'media/gotham-black.png' ),
	fontHighScores: new ig.Font( 'media/04b03.font.png' ),
	fontReady: new ig.Font( 'media/gotham-black.png' ),
	fontKeys: new ig.Font( 'media/04b03.font.png' ),


	highscores: [], //top 10
	raceTimer: null,
	winner: [], // order of racers
	winPl: false,
	winOp1: false,
	winOp2: false,
	winnerTime:0,
	playerTime:0,

	init: function() {
		// Bind keys
		ig.input.bind( ig.KEY.LEFT_ARROW, 'brake' );
		ig.input.bind( ig.KEY.RIGHT_ARROW, 'advance' );
		ig.input.bind( ig.KEY.R, 'restart' );


		// Load the LevelTest as required above ('game.level.test')
		this.loadLevel( LevelTest );
		this.raceTimer = new ig.Timer(0);


	},

	update: function() {

		if (ig.game.highscores[0] != null){
		// Update all entities and BackgroundMaps
		this.parent();
		}else{

			this.raceTimer.set(0); // don't start count until scores loaded
		}
		// screen follows the player
		var player = this.getEntitiesByType( EntityPlayer )[0];
		this.screen.x = player.pos.x - ig.system.width / 4;
		this.screen.y = player.pos.y - ig.system.height / 1.3;


	},
	restart:function(){

		location.reload();

	},
	crossedFinishLine:function(name){

		if (name == "player" && this.winPl == false){
			this.winPl = true;
			this.winner.push(name);
			this.winnerTime = Math.floor(this.raceTimer.delta()*100)/100;
			this.playerTime = this.winnerTime;

			var player = ig.game.getEntitiesByType(EntityPlayer)[0];
			player.awardTrophy(this.winner.length);

			saveHighScores(this.winnerTime);

			this.storage = new ig.Storage();

			// Initialize high score as 0 if 'highScore' does not exist
			this.storage.initUnset('highScore', 0);

			this.storage.set('playerVel',player.vel)
			this.storage.setHighest('highScore',this.playerTime);
			// And let's output it for fun
			//alert("Player's x velocity: "+this.storage.get('playerVel').x);
			//alert("Player's y velocity: "+this.storage.get('playerVel').y);
			//alert("local highScore: "+this.storage.get('highScore'));
		}else
		if (name == "opponent1" && this.winOp1 == false){
			this.winOp1 = true;

			this.winner.push(name);
			this.winnerTime = Math.floor(this.raceTimer.delta()*100)/100;

			var opponent1 = ig.game.getEntitiesByType(EntityOpponent1)[0];
			opponent1.awardTrophy(this.winner.length);

			saveHighScores(this.winnerTime)
		}else
		if (name == "opponent2" && this.winOp2 == false){
			this.winOp2 = true;
			this.winner.push(name);
			this.winnerTime = Math.floor(this.raceTimer.delta()*100)/100;

			var opponent2 = ig.game.getEntitiesByType(EntityOpponent2)[0];
			opponent2.awardTrophy(this.winner.length);

			saveHighScores(this.winnerTime)
		}
		//console.log(this.winner +", "+this.winnerTime);




	},
	draw: function() {
		// Draw all entities and BackgroundMaps

		this.parent();

		if (ig.game.highscores[0] == null){
			this.fontReady.draw( 'Préparez vous !', 200, 80,ig.Font.ALIGN.LEFT);
		}
		if (this.winPl == false){
			this.font.draw( 'Temps écoulé : '+Math.floor(this.raceTimer.delta()*100)/100, 5, 2,ig.Font.ALIGN.LEFT);
		}else{
			this.font.draw( 'Votre temps : '+this.playerTime, 5, 2,ig.Font.ALIGN.LEFT);
		}
		var h = "Meilleurs temps :\n";
		if (ig.game.highscores[0] != undefined){
			for (var i = 0;i<this.highscores.length;i++){
				h+=((i+1)+") "+ig.game.highscores[i]+"\n");
			}
		}
		this.fontHighScores.draw(h, 5, 22, ig.Font.ALIGN.LEFT);

		this.fontKeys.draw("-> = avancer\n<- = respirer\nR = recommencer", 510, 2, ig.Font.ALIGN.RIGHT);

		var h="";
		function getHighscores (){
			if (ig.game.highscores[0] == undefined){
			//
			}else{

				for (var i = 0 ; i < ig.game.highscores.length ; i++){
					h+=((ig.game.highscores[i]+", "));
					if (ig.game.highscores[i] == undefined)console.log(h)
				}
			}

        	return h;

		}


	}
});


// Start the Game with 60fps, a resolution of 240x160, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 512, 300, 2 );

});
