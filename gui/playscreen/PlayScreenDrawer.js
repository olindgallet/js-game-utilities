/**
  author Olin Gallet (olindgallet@olingallet.com)
  date   12/12/2015
 */
 /**
  * The PlayScreenDrawer draws various sprites and text for the
  * play screen.
 */
var PlayScreenDrawer = (function() {
	var _bgSheet      = new SpriteSheet(GraphicsConstants.spritesheets.bg.URL, GraphicsConstants.spritesheets.bg.WIDTH, GraphicsConstants.spritesheets.bg.HEIGHT);
	//var _playerSheet = new SpriteSheet(GraphicsConstants.spritesheets.player.URL, GraphicsConstants.spritesheets.player.WIDTH, GraphicsConstants.spritesheets.player.HEIGHT);
	//var _playerAnimation = new Animation("player", 0, 1);
	//var _hazardSheet = new SpriteSheet(GraphicsConstants.spritesheets.hazards.URL, GraphicsConstants.spritesheets.hazards.WIDTH, GraphicsConstants.spritesheets.hazards.HEIGHT);
	
	return {		
		/**
		 * Draws the attract text.
		 * @param layerNumber {int} the layer number to draw on
		 */
		drawAttractText: function(layerNumber){
			var text = TextUtilities.makeText(210, 140, 'Hyper Hall', 20, '#fff');
			Canvas.addComponent(layerNumber, text);
			var text = TextUtilities.makeText(150, 240, 'Press Start/Space', 20, '#fff');
			 Canvas.addComponent(layerNumber, text);
		},
		
		/**
		 * Draws the background.
		 */
		drawBackground: function(layerNumber, background){
			var bg = new createjs.Bitmap(background);
			Canvas.addComponent(layerNumber, bg);
		},

		drawHUD: function(layerNumber){
			var text = TextUtilities.makeText(210, 140, 'Hyper Hall', 20, '#fff');
			Canvas.addComponent(layerNumber, text);
		}
		
	}
})();