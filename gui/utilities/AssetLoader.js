/**
  author Olin Gallet (olindgallet@olingallet.com)
  date   12/6/2015
 */

/**
 * The AssetLoader loads up all assets through the preloader to ensure the game
 * runs smoothly.
 */
var AssetLoader = (function() {
	return {	
		/**
		 * Loads all assets.
		 * @param onComplete the callback to use once assets are loaded.
		 * @function load
		 */
		load: function(onComplete){
			var preloader = new createjs.LoadQueue();
			preloader.addEventListener("complete", onComplete);
			preloader.loadFile(AudioConstants.sfxfiles.START);
			//preloader.loadFile(AudioConstants.sfxfiles.EXPLODE);
			preloader.loadFile(GraphicsConstants.spritesheets.bg.URL);
			//preloader.loadFile(GraphicsConstants.spritesheets.player.URL);
			
			preloader.loadFile(GraphicsConstants.levels.bg.LEVEL_1);
		}
    };
})();