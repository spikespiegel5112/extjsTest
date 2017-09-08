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
        title:'dsdsds',
        layout: {
            type: 'vbox',
            align: 'stretch'
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
    },{
        title:'dsdsds',
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