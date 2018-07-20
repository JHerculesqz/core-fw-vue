(function ($) {
    $.MarvelSigma = function (oParent) {
        //#region Const

        //#endregion

        //region Fields

        var self = this;
        var parent = oParent;

        this.sigmaObj;

        //endregion

        //#region inner

        //#endregion

        //#region callback

        //#endregion

        //#region 3rd

        //#region init

        this.init = function (strDivId, oCallback) {
            self.sigmaObj = new sigma({
                graph: {
                    nodes: [],
                    edges: []
                },
                container: strDivId,
                type: 'canvas'
            });

            self.sigmaObj.bind('clickNode', function (e) {
                if (oCallback) {
                    oCallback(e);
                }
            });
        };

        //#endregion

        //#region setData

        this.setData = function (arrNodes, arrLinks) {
            self.sigmaObj.graph.read({
                nodes: arrNodes,
                edges: arrLinks
            });
            self.sigmaObj.refresh();

            self.sigmaObj.startForceAtlas2({slowDown: 10});
        }

        //#endregion

        //#endregion
    }
})(jQuery);