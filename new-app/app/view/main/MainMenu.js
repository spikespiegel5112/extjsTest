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

Ext.define('app.view.main.MainMenu', {
    extend: 'Ext.panel.Panel',
    xtype: 'MainMenu',
    title: 'Simple Tree',
    layout: 'accordion',
    padding: "0 5px 0 0",
    width: 200,
    items: [{
        extend: 'Ext.tree.Panel',
        title: '1',
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
        listeners: {
            click: {
                fn: function () {
                    alert('dsds')
                }
            }
        }
    }, {
        extend: 'Ext.tree.Panel',
        title: '2',
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
        listeners: {
            click: {
                fn: function () {
                    alert('dsds')
                }
            }
        }
    }]
});