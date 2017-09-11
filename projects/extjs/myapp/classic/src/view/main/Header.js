document.title = '上海千人计划平台审核系统';

var yh = new Ext.form.ComboBox({
		id: "yh", 
		typeAhead: true,
		triggerAction: 'all',
		lazyRender:true,
		mode: 'local',
		style: {
                marginRight: '10px'
            },

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
		width:100
	});

Ext.define('MyApp.view.main.Header', {
    extend: 'Ext.Container',

    xtype: 'app-header',

    title: document.title,
    cls: 'app-header',
    height: 62,

    layout: {
        type: 'hbox',
        align: 'middle'
    },

    items: [{
        xtype: 'component',
        cls: 'app-header-logo'
    },{
        xtype: 'component',
        cls: 'app-header-title',
        html: document.title,
        flex: 1
    },yh]
});
