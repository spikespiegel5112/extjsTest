Ext.define('app.view.main.tree.GridView', {
    extend: 'Ext.panel.Panel',
    xtype: 'gridview',
    items:[{
        xtype: 'treetoolbar'
    },{
        xtype: 'mainlist'
    }]
})
