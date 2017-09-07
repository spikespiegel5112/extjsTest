var store = Ext.create('Ext.data.TreeStore', {
    root: {
        expanded: true,
        text: 'Container',
        checked: false,
        children: [{
            text: 'Antarctica',
            leaf: true,
            checked: false
        }, {
            text: 'South America',
            expanded: false,
            checked: true,
            children: [{
                text: 'Chile',
                leaf: true,
                checked: true
            }]
        }, {
            text: 'Asia',
            expanded: true,
            checked: true,
            children: [{
                text: 'India',
                leaf: true,
                checked: true
            }, {
                text: 'China',
                leaf: true,
                checked: true
            }]
        }, {
            text: 'Africa',
            leaf: true,
            checked: true
        }]
    }
});

Ext.define('app.view.main.tree.TreeView', {
    extend: 'Ext.panel.Panel',
    xtype: 'TreeGrid',
    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch',
    },
    items:[{
        xtype: 'treepanel',
        title: '',
        flex: 1,
        split: true,
        lines: true,
        animate: true,
        rootVisible: true,
        store: store,
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
    },{
        xtype: 'mainlist',
        flex: 4,
        width:200
    }]
})