Ext.define('app.view.main.mainmenu', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainmenu',
    alias: 'widget.mainleft',
    title: '折叠菜单',
    width: 200,
    split: true,
    collapsible: true,
    floatable: false,
    tools: [{type: 'pin'}],
    header: {
        titlePosition: 2,
        titleAlign: 'center'
    },
    maximizable: true,
    layout: {
        type: 'accordion',
        animate: true, //点击的时候有动画动作
        titleCollapse: true,
        enableSplitters: true,
        hideCollapseTool: true,
    },
    viewModel: 'main', //指定后可获取MainModel中data数据块
    items:[{
        title:'上海千人计划',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items:[{
            xtype: 'button',
            text: '主页'
        }, {
            xtype: 'button',
            text: '单位基本信息管理'
        }, {
            xtype: 'button',
            text: '人才基本信息管理'
        }, {
            xtype: 'button',
            text: '形式审查'
        }, {
            xtype: 'button',
            text: '人才分组'
        }, {
            xtype: 'button',
            text: '专家信息录入'
        }, {
            xtype: 'button',
            text: '评审'
        }, {
            xtype: 'button',
            text: '确定上报人员'
        }, {
            xtype: 'button',
            text: '人才列表'
        }, {
            xtype: 'button',
            text: '专家信息管理'
        }]
    },{
        title:'系统管理',
        layout: {
            type: 'vbox',
            align: 'stretch',

        },
        items:[{
            xtype: 'button',
            text: 'Button 1'
        }, {
            xtype: 'button',
            text: 'Button 2'
        }, {
            xtype: 'button',
            text: 'Button 3'
        }, {
            xtype: 'button',
            text: 'Button 4'
        }]
    }],

    defaults: {margin: '0 0 1 0'}
})