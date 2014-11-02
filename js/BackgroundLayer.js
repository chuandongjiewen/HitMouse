/**
 * Created by wangjiewen on 14-11-2.
 */

var BackgroundLayer = cc.Layer.extend({

    ctor : function () {
        this._super();
        this.init();
    },

    init : function() {
        this._super();
        var winSize = cc.director.getWinSize();
        var centerPos = cc.p(winSize.width/2, winSize.height/2);

        var background = new cc.Sprite(resource.bg_dirt);
        background.setPosition(centerPos);
        background.setScale(2.0);
        this.addChild(background, -2);


        var grassLower = new cc.Sprite(resource.grass_lower);
        grassLower.setAnchorPoint(cc.p(0.5, 1));
        grassLower.setPosition(winSize.width/2, winSize.height/2);
        grassLower.setLocalZOrder(1);
        this.addChild(grassLower, 1)


        var grassUpper = new cc.Sprite(resource.grass_upper);
        grassUpper.setAnchorPoint(cc.p(0.5, 0));
        grassUpper.setPosition(winSize.width/2, winSize.height/2);
        this.addChild(grassUpper, -1);



    }
});