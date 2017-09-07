
Ext.define('app.view.main.tree.Tree', {
    extend: 'Ext.tree.Panel',
    xtype: 'maintree',
    title: 'Simple Tree',
    width: 200,
    height: 800,
    split: true,
    lines: true,
    animate: true,
    rootVisible: true,
    store:store,
    viewConfig: {
        plugins: {
            ptype: 'treeviewdragdrop',
            containerScroll: true
        }
    },
    listeners:{
        click:{
            fn:function(){
                alert('dsds')
            }
        }
    }
});