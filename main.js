/**
 * Created by wangjiewen on 14-11-2.
 */

window.onload = function () {
    runGame();

}

function runGame(){

    cc.game.onStart = function(){

        cc.view.setDesignResolutionSize(1024, 768, cc.ResolutionPolicy.SHOW_ALL);
        cc.view.resizeWithBrowserSize(true);
        cc.LoaderScene.preload(g_resources, function () {

            cc.director.runScene(new PlayScene());
        }, this);
    }
    cc.game.run('gameCanvas');
}