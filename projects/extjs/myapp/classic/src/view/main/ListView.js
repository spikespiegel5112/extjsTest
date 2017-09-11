Ext.define('MyApp.view.main.ListView', {
    extend: 'Ext.menu.Menu',
	
	xtype: 'listView',

    //alias: 'widget.emailmenu',

    /*viewModel: {
        type: 'emailmenu'
    },*/
	width: 200,
    title: 'Email',

    floating: false,

    items: [
        {
            routeId: 'emailcompose', //xtype and used for url routing
            params: {
                openWindow: true, // Let the controller know that we want this component in the window,
                targetCfg: {
                    //put any extra configs for your view here
                },
                windowCfg: {
                    // Any configs that you would like to apply for window popup goes here
                    title: 'Compose Message'
                }
            },
            iconCls: 'x-fa fa-edit',
            text: '主页'
        },
        {
            routeId: '',
			expanded: false,
            selectable: false,
            iconCls: 'x-fa fa-inbox',
            text: '人才基本信息'
        },
        {
            routeId: '',
            iconCls: 'x-fa fa-check-circle',
            text: '单位基本信息'
        },
        {
            routeId: '',
            iconCls: 'x-fa fa-exclamation-circle',
            text: '形式审查'
        },
        {
            routeId: '',
            iconCls: 'x-fa fa-trash-o',
            text: '人员信息'
        }
    ]
});