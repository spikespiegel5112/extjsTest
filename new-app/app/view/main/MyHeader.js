var button = Ext.create('Ext.Button', {
    text: 'Button'
});

Ext.define('app.view.main.MyHeader',{
    extend: 'Ext.Container',
    xtype:'commonheader',
    layout: {
        type: 'hbox',
        align: 'middle'
    },

    renderTo: Ext.getBody(),
    border: 0,
    margin: '0 0 10px 0',

    style: {boxShadow:'0 5px 5px #ccc',background:'#5fa2d0'},
    defaults: {
        title:'上海千人计划平台评审系统',
        style: {
            padding: '10px'
        }
    },
    items:[{
        xtype: 'component',
        cls: 'app-header-logo',
        flex: 1
    },{
        xtype:'combobox',
        align:'middle',
        width: 100,
        store: new Ext.data.ArrayStore({
            id: 0,
            fields: [
                'comlumId',
                'comlumName'
            ],
            data: [[-1,"未登录"],[0, '登录'],[1, '退出'] ]
        }),
        valueField: 'comlumId',
        displayField: 'comlumName',
//		    emptyText : '请选择...',
        value : '-1', // 初始选中的列表项
        editable : true, // 选择输入框可编辑
    }]

})