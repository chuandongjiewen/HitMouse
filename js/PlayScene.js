/**
 * Created by wangjiewen on 14-11-2.
 */

var PlayScene = cc.Scene.extend({

    onEnter : function() {
        this._super();
//        this.addChild(new BackgroundLayer());
        var animationLayer = new AnimationLayer();
        this.addChild(animationLayer);
//        animationLayer.onTouchesBegan()

        cc.eventManager.addListener({
            event : cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches : true,
            onTouchBegan : function (touch, event) {
                animationLayer.onTouchBegan(touch, event);
            },

            onTouchMoved : function (touch, event) {

            },

            onTouchEnded : function (touch, event) {

            }
        },this)
    }
});