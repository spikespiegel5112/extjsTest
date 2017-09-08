Ext.define('app.view.main.tree.GridView', {
    extend: 'Ext.panel.Panel',
    xtype: 'gridview',
    layout: 'border',
    tbar: [
        { xtype: 'button', text: 'Button 1' }
    ],
    items:[{
        xtype: 'mainlist',
        region: 'center'
    }]
})
