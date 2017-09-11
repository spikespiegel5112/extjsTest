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
            xtype: 'treelist',
            reference: 'navigationTreeList',
            itemId: 'navigationTreeList',
            store: {
                root:{
                    expanded: true,
                    children:[{
                        text:'dsddsds',
                        iconCls: 'x-fa fa-frown-o',
                        leaf: true,
                    },{
                        text:'dsddsds',
                        leaf: true,
                    },{
                        text:'dsddsds',
                        leaf: true,
                    },{
                        text:'dsddsds',
                        children: [{
                            text: 'India',
                            leaf: true,
                        }, {
                            text: 'China',
                            leaf: true,
                        }]
                    },{
                        text:'dsddsds',
                        leaf: true,
                    }]
                }
            },
            width: 250,
            expanderFirst: false,
            expanderOnly: false,
            listeners: {
                selectionchange: 'onNavigationTreeSelectionChange'
            }
        }]
    },{
        title:'系统管理',
        layout: {
            type: 'vbox',
            align: 'stretch',
        },
        items:[{
            xtype: 'treelist',
            // reference: 'navigationTreeList',
            itemId: 'navigationTreeList',
            store: {
                root:{
                    expanded: true,
                    children:[{
                        text:'dsddsds',
                        iconCls: 'x-fa fa-frown-o',
                        leaf: true,
                    },{
                        text:'dsddsds',
                        leaf: true,
                    },{
                        text:'dsddsds',
                        leaf: true,
                    },{
                        text:'dsddsds',
                        children: [{
                            text: 'India',
                            leaf: true,
                        }, {
                            text: 'China',
                            leaf: true,
                        }]
                    },{
                        text:'dsddsds',
                        leaf: true,
                    }]
                }
            },
            width: 250,
            expanderFirst: false,
            expanderOnly: false,
            listeners: {
                selectionchange: 'onNavigationTreeSelectionChange'
            }
        }]
    }],
})




