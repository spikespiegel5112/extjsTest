var menuStore=Ext.define('app.store.NavigationTree',{
    extend: 'Ext.data.TreeStore',
    storeId: 'MenuTree',

})

Ext.define('app.view.main.mainmenu', {
    extend: 'Ext.list.Tree',
    xtype: 'mainmenu',
    alias: 'widget.mainleft',
    title: '折叠菜单',
    width: 200,
    collapsible: true,
    // floatable: false,
    viewConfig: {
        plugins: {
            ptype: 'treeviewdragdrop',
            containerScroll: true
        }
    },
    tools: [{type: 'pin'}],
    maximizable: true,
    ui: 'nav',
    viewModel: 'main', //指定后可获取MainModel中data数据块
    reference: 'navigationTreeList',
    itemId: 'navigationTreeList',
    // style:'backgroundColor:#32404e,color:#adb3b8',
    store: {
        root:{
            expanded: true,
            children:[{
                text:'dsddsds',
                iconCls: 'x-fa fa-frown-o',
                leaf: true,
            },{
                text:'dsddsds',
                iconCls: 'x-fa fa-frown-o',
                leaf: true,
            },{
                text:'dsddsds',
                iconCls: 'x-fa fa-frown-o',
                leaf: true,
            },{
                text:'dsddsds',
                iconCls: 'x-fa fa-frown-o',
                children: [{
                    text: 'India',
                    iconCls: 'x-fa fa-frown-o',
                    leaf: true,
                }, {
                    text: 'China',
                    iconCls: 'x-fa fa-frown-o',
                    leaf: true,
                }]
            },{
                text:'dsddsds',
                iconCls: 'x-fa fa-frown-o',
                leaf: true,
            }]
        }
    },
    expanderFirst: false,
    expanderOnly: false,
    listeners: {
        selectionchange: function () {
            console.log('dsds')
        }
    }
})




