import MarvelTopoNodeGroup from '@/walle/widget/topo/_3_sprite/_1_node/MarvelTopoNodeGroup';
import MarvelTopoNode from '@/walle/widget/topo/_3_sprite/_1_node/MarvelTopoNode';
import MarvelTopoLinkGroup from '@/walle/widget/topo/_3_sprite/_2_link/MarvelTopoLinkGroup';
import MarvelTopoLink from '@/walle/widget/topo/_3_sprite/_2_link/MarvelTopoLink';
import MarvelTopoBoxGroup from '@/walle/widget/topo/_3_sprite/_3_box/MarvelTopoBoxGroup';
import MarvelTopoBox from '@/walle/widget/topo/_3_sprite/_3_box/MarvelTopoBox';

const MarvelTopoSprite = function() {
  var self = this;

  //#region Fields

  this.NodeGroup = new MarvelTopoNodeGroup();
  this.Node = new MarvelTopoNode();
  this.LinkGroup = new MarvelTopoLinkGroup();
  this.Link = new MarvelTopoLink();
  this.BoxGroup = new MarvelTopoBoxGroup();
  this.Box = new MarvelTopoBox();

  //#endregion
};
export default MarvelTopoSprite;
