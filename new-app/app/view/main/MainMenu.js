/**
 * 应用程序主要视图.author： sushengmiyan
 *blog: http://blog.csdn.net/column/details/sushengextjs5.html
 */
Ext.define('oaSystem.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',
    //数据模块  ViewModel中的data可以在指定当前ViewModel的地方获取
    data: {
        name: 'oaSystem',
        // 左边菜单的加载
        NavigationMenu: [{
            text: '档案管理',// 菜单项的名称
            description: '', // 菜单项的描述
            expanded: true,// 在树形菜单中是否展开
            items: [{
                text: '学生档案',// 菜单条的名称
                module: 'StudentArchives',// 对应模块的名称
                glyph: 0xf00b // 菜单条的图标字体
            }, {
                text: '教师档案',
                module: 'TeacherArchives',
                glyph: 0xf1a2
            }, {
                text: '教室资源',
                module: 'RoomArchives',
                glyph: 0xf183
            }]
        }, {
            text: '系统设置',
            description: '',
            items: [{
                text: '系统参数',
                module: 'SytemInfo',
                glyph: 0xf0f7
            }, {
                text: '高级设置',
                module: 'HigherSetting',
                glyph: 0xf02e
            }]
        }]
    },

    //增加 data, formulas and/or methods 来支持你的视图
});

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
    items: [{
        xtype: 'button',
        text: 'dsadsads'
    }],

    viewModel: 'main', //指定后可获取MainModel中data数据块

    initComponent: function () {
        this.items = [];
        var menus = this.getViewModel().get('NavigationMenu');
        for (var i in menus) {
            //先获取分组显示
            var group = menus[i];
            var leftpanel = {
                menuAccordion: true,
                xtype: 'panel',
                title: group.text,
                bodyStyle: {
                    padding: '10px'
                },
                layout: 'fit',
                dockedItems: [{
                    dock: 'left',
                    xtype: 'toolbar',
                    items: []
                }],
                glyph: group.glyph
            };
            //遍历分组下的菜单项
            for (var j in group.items) {
                var menumodule = group.items[j];
                leftpanel.dockedItems[0].items.push({
                    text: menumodule.text,
                    glyph: menumodule.glyph,
                    handler: 'onMainMenuClick'
                });
            }
            this.items.push(leftpanel);
        }
        this.callParent(arguments);
    }
})