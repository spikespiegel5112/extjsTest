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

Ext.define('app.view.main.tree.Tree', {
    extend: 'Ext.panel.Panel',
    xtype: 'treeView',
    title: 'Simple Tree',
    width: 200,
    height: 800,
    lines: true,
    animate: true,
    store:store
});

Ext.define('app.view.main.tree.Tree', {
    extend: 'Ext.tree.Panel',
    xtype: 'maintree',
    title: 'Simple Tree',
    width: 200,
    height: 800,
    lines: true,
    animate: true,
    store:store
});