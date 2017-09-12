Ext.define('app.view.main.tree.Searchbar',{
    extend: 'Ext.panel.Panel',
    xtype:'searchbar',
    layout: {
        type: 'hbox',
        pack: 'end',
        align: 'stretch',
    },
    margin: '0 0 10 10',
    padding: '0 10 0 0',
    items:[{
        xtype: 'textfield',
        width: 300
    },{
        xtype: 'button',
        text: '搜索'
    }]
})