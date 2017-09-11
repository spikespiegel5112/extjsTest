Ext.define('MyApp.view.main.LeftMenu', {
		extend: 'Ext.panel.Panel', 
		
		requires: [
			'MyApp.view.main.ListView'
		],
		
		xtype: 'leftMenu',
		layout:'accordion', 
		width: 200,
		split: true,
		collapsible: true,
		floatable: false,		
		defaults: {        // 应用到每个包含的panel
			bodyStyle: 'padding:5px'    
		},    
		layoutConfig: {// 这里是布局相关的配置项<       
			titleCollapse: false,        
			animate: true,
			activeOnTop: true    
		},    
		items: [{        
				title: '上海千人计划',
				 layout: {
					type: 'vbox',
					align: 'stretch'
				},
				xtype: 'listView'
			},
			{        
				title: '系统管理',
				 layout: {
					type: 'vbox',
					align: 'stretch'
				},
				xtype: 'listView'
			},
			{        
				title: '人员管理',
				 layout: {
					type: 'vbox',
					align: 'stretch'
				},
				xtype: 'listView'
			}
		]
});
