(function() {
    // Set aliases for Box, Button and so on.
    var Box = caph.wui.widget.Box;
    var Button = caph.wui.widget.Button;
    var scenemanager = caph.wui.widget.SceneManager.getInstance();

    // create a scene named 'scene1'
    scenemanager.addSceneEventHandler('scene1', {
        onCreate : function(context) {
            this.super(context);
            // Build a Button
            var button = new Button( {width:500} );
            button.setText('move to scene 2');
            button.setAbsolutePosition('50%', '80%', 2);
            button.addEventListener('click', function(){
            	// scene1 is initialized
                scenemanager.showScene('scene2');
            });
            // Build a Box
            var box = new Box( {width:300, height:300} );
            box.setStyle('background', 'lightskyblue');
            box.setAbsolutePosition('50%', '50%', 1);

            this.addWidget(box);
            this.addWidget(button);
        }
    });

	// create a scene named 'scene2'
    scenemanager.addSceneEventHandler('scene2', {
        onCreate : function(context) {
            this.super(context);
            // Build a Button
            var button = new Button( {width:500} );
            button.setText('move to scene 1');
            button.setAbsolutePosition('50%', '80%', 2);
            button.addEventListener('click', function(){
                // scene2 is initialized      
                scenemanager.showScene('scene1');
            });
            // Build a Box
            var box = new Box( {width:300, height:300} );
            box.setStyle('background', 'darkgreen');
            box.setAbsolutePosition('50%', '50%', 1);

            this.addWidget(box);
            this.addWidget(button);
        }
    });
}());