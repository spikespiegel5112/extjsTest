var store = Ext.create('Ext.data.TreeStore', {
    root: {
        expanded: true,
        text: '单位树',
		iconCls: 'x-fa fa-edit',
		layoutConfig: {// 这里是布局相关的配置项<    
			animate: true,
		}, 
        children: [{
            text: '单位一',
            leaf: true,
			iconCls: 'x-fa fa-inbox'
        }, {
            text: '单位二',
            expanded: false,
			iconCls: 'x-fa fa-check-circle',
            children: [{
                text: '单位四',
                leaf: true,
				iconCls: 'x-fa fa-inbox'
            }]
        }, {
            text: '单位五',
            expanded: false,
			iconCls: 'x-fa fa-check-circle',
            children: [{
                text: '单位六',
				iconCls: 'x-fa fa-inbox',
                leaf: true,
            }, {
                text: '单位七',
                leaf: true,
				iconCls: 'x-fa fa-check-circle'
            }]
        }, {
            text: '单位八',
            leaf: true,
			iconCls: 'x-fa fa-inbox'
        }]
    }
});

Ext.define('MyApp.view.main.TreeMenu', {
    extend: 'Ext.panel.Panel',
	
	requires: [
		'MyApp.view.main.HeadChild',
        'MyApp.view.main.List'
    ],
	layoutConfig: {// 这里是布局相关的配置项<    
		animate: true,
	}, 
	
    xtype: 'treeGrid',
    layout: {
        type: 'border'
    },
    items:[
	{
		xtype: 'headerChild',
		
        region: 'north'
    },
	{
        xtype: 'treepanel',
		collapsible: true,
		width:200,
        split: true,
        lines: true,
        animate: true,
        rootVisible: true,
        store: store,
        viewConfig: {
            plugins: {
                ptype: 'treeviewdragdrop',
                containerScroll: true
            }
        },
        listeners:{
            click:{
                fn:function(){
                    alert('信息');
                }
            }
        },
        region: 'west'
    },{
        xtype: 'gridPanel',
        flex: 4,
        region: 'center'
    }]
})