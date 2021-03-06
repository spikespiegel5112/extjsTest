var store = Ext.create('Ext.data.TreeStore', {
    root: {
        expanded: true,
        text: 'Container',
        children: [{
            text: 'Antarctica',
            leaf: true,
        }, {
            text: 'South America',
            expanded: false,
            children: [{
                text: 'Chile',
                leaf: true,
            }]
        }, {
            text: 'Asia',
            expanded: true,
            children: [{
                text: 'India',
                leaf: true,
            }, {
                text: 'China',
                leaf: true,
            }]
        }, {
            text: 'Africa',
            leaf: true,
        }]
    }
});

Ext.define('app.view.main.tree.TreeView', {
    extend: 'Ext.panel.Panel',
    xtype: 'treegrid',
    layout: {
        type: 'border'
    },
    items: [{
        xtype: 'searchbar',
        region: 'north'
    }, {
        xtype: 'treepanel',
        title: '',
        width: 200,
        margin: '0 0 0 10',
        split: true,
        lines: true,
        animate: true,
        rootVisible: true,
        store: store,
        useArrows: true,
        // colspan: 2,
        collapsible: true,
        title:'dds',
        viewConfig: {
            plugins: {
                ptype: 'treeviewdragdrop',
                containerScroll: true
            }
        },
        listeners: {
            click: {
                fn: function () {
                    alert('dsds')
                }
            }
        },
        region: 'west'
    }, {
        xtype: 'mainlist',
        region: 'center'
    }]
})