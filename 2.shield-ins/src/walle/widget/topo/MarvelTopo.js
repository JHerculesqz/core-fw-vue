import MarvelTopoResource from '@/walle/widget/topo/_1_stage/MarvelTopoResource';
import MarvelTopoStage from '@/walle/widget/topo/_1_stage/MarvelTopoStage';
import MarvelTopoLayer from '@/walle/widget/topo/_2_layer/MarvelTopoLayer';
import MarvelTopoSprite from '@/walle/widget/topo/_3_sprite/MarvelTopoSprite';

const MarvelTopo = function() {
  var self = this;

  //#region Fields

  this.Resource = new MarvelTopoResource();
  this.Stage = new MarvelTopoStage();
  this.Layer = new MarvelTopoLayer();
  this.Sprite = new MarvelTopoSprite();

  this.ins = {
    stage: undefined,
    layerNode: undefined,
    layerLink: undefined
  };

  //#endregion
};
export default MarvelTopo;
