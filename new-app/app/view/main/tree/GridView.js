// Ext.define('app.view.main.tree.GridView', {
//     extend: 'Ext.tree.Panel',
//     xtype: 'maintree',
//     title: 'Simple Tree',
//     width: 200,
//     height: 800,
//     split: true,
//     lines: true,
//     animate: true,
//     rootVisible: true,
// })

var mainPanel = Ext.create({
    xtype: 'gridview',
    fullscreen: true,
    layout: 'hbox',
    defaults: {
        flex: 1
    },
    items: [{
        html: 'First Panel',
        style: 'background-color: #5E99CC'
    }]
});