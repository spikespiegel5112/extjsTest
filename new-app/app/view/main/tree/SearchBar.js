Ext.define('app.view.main.tree.Toolbar',{
    extend: 'Ext.panel.Panel',
    xtype:'searchbar',
    layout: {
        type: 'hbox',
        pack: 'end',
        align: 'stretch',
    },
    border: 0,
    margin: '0 0 10px 0',
    items:[{
        xtype: 'textfield',
        text: 'dsdsds'
    },{
        xtype: 'button',
        text: 'search'
    }]
})