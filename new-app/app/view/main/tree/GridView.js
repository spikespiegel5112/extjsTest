Ext.define('app.view.main.tree.GridView', {
    extend: 'Ext.panel.Panel',
    xtype: 'gridview',
    layout: 'border',
    items:[{
        xtype: 'treetoolbar',
        region: 'north',
        title: 'dsadsad'
    },{
        xtype: 'mainlist',
        region: 'center'
    }]
})
