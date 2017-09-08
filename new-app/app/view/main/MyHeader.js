var button = Ext.create('Ext.Button', {
    text: 'Button'
});

Ext.define('app.view.main.MyHeader',{
    extend: 'Ext.panel.Panel',
    xtype:'commonheader',
    title: '上海千人计划平台评审系统',
    layout: {
        type: 'hbox'
    },
    renderTo: Ext.getBody(),
    border: 0,
    margin: '0 0 10px 0',
    style: {boxShadow:'0 5px 5px #ccc'},
    defaults: {
        labelWidth: 80,
        // implicitly create Container by specifying xtype
        xtype: 'datefield',
        flex: 1,
        style: {
            padding: '10px'
        }
    },

})