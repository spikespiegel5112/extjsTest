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
    title: '',
    layout: 'accordion',
    padding: "0 5px 0 0",
    width: 200,
    items: [{
        xtype: 'treepanel',
        title: '上海千人计划',
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
        xtype: 'treepanel',
        title: '系统管理',
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