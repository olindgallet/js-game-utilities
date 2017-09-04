var PlayScreen = (function() {
	var _offscreenBuffer;
	var _loadingBuffer;
	return {	
		/**
		 * Load the playscreen.
		 */
		load: function(){
			Canvas.init(GraphicsConstants.CANVAS, GraphicsConstants.dimensions.WIDTH, GraphicsConstants.dimensions.HEIGHT, GraphicsConstants.LAYER_COUNT);
			_offscreenBuffer = new OffscreenBuffer(GraphicsConstants.dimensions.WIDTH, GraphicsConstants.dimensions.HEIGHT);
			_loadingBuffer   = 0;
		},
		
		/**
		 * Render the game initially.
		 */
		render: function(){		
			PlayScreenDrawer.drawBackground(GraphicsConstants.layers.BG, GraphicsConstants.levels.bg.LEVEL_1);		
			Canvas.update();
		},
		
		/**
		 * Unloads the playscreen
		 */
		unload: function(){
		},
		
		/**
		 * Updates the playscreen.
		 * Can be looped continually.
		 */
		update: function(){
			if (_loadingBuffer < 10){
				Canvas.update();
				_loadingBuffer = _loadingBuffer + 1;
			} else {
				PlayScreenDrawer.drawHUD(GraphicsConstants.layers.TEXT);
				Canvas.update();
			}
		}
	}
})();