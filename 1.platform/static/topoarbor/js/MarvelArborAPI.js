(function($){
    $.MarvelArborAPI = function() {
        //#region Const

        //#endregion

        //region Fields

        var self = this;

        this.arborEx = new $.MarvelArbor(self);
        this.canvas = new $.MarvelCanvas(self);

        //endregion
    }
})(jQuery);