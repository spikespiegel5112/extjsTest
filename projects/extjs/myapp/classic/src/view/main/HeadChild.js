document.title = '上海千人计划平台审核系统';

var txtusername = new Ext.form.TextField({
		 width: 200,
		 allowBlank: true,
		 style: {
                marginRight: '10px'
            },
		 name: 'title',
		 id:'field-query',
		 emptyText : '查询...'
	 });

Ext.define('MyApp.view.main.HeadChild', {
    extend: 'Ext.Container',

    xtype: 'headerChild',

    //title: document.title,
    cls: 'headerChild',
    height: 52,
	tbar: [
		{text: '人才平台'},
	],

    layout: {
        type: 'hbox',
        align: 'middle'
    },
	items: [{
        xtype: 'component',
        flex: 1
    },txtusername]
});
