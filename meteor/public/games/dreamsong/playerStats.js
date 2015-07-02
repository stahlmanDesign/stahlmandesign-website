var newGamePlayerStats = {

	"message": "",
	"message2": "",
	"isDark": false,
	"darkness":0,
	"secondsDanteAllows":360,
	"timeDanteCountdownBegan": -1,
	"timeElapsed":{
		"dante":0,
		"game":0
	},
	"piperDefeated":false,
	"gameOver":false,
	"lastValidIntegerForGameTimerDividedBySomeFactor": 0,
	"music": {
		"toggle": 1,
		"maxVolume": 0.5,
		"currentTrackName": "theme"
	},
	"riverInTheSkyActivated": false,
	"knowsDreamsong": false,
	"entityInfo": {},
	"levelSpecific": {},
	// for each level visited in current game will contain entities by name and their positions
	"currentLevel": "",
	//"currentLevel": "Worldmap",
	"lastLevel": "",
	"worldLevel": "Worldmap",
	// can be Smallworld for testing or Worldmap for release
	"mainMenuLevel": "Title" // start at title screen
}