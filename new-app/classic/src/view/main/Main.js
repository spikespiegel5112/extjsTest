/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('app.view.main.Main', {
    extend: 'Ext.container.Viewport',
    renderTo: Ext.getBody(),
    xtype: 'index',

    requires: [
        'Ext.layout.container.Border',
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'Ext.tab.Panel',
        'Ext.list.Tree',
        'Ext.button.Segmented',

        'app.view.main.MainController',
        'app.view.main.MainModel',
        'app.view.main.List',
        'app.view.main.mainmenu',
        'app.view.main.tree.Searchbar',
        'app.view.main.tree.Toolbar',
    ],

    // controller: 'main',
    // viewModel: 'main',

    // ui: 'navigation',
    layout: 'border',
    header: {
        title: {
            bind: {
                text: '{name}'
            },
            flex: 1
        },
        iconCls: 'fa-th-list'
    },

    items: [{
        xtype:'commonheader',
        region: 'north'
    }, {
        xtype:'mainmenu',
        region: 'west'
    }, {
        xtype:'treegrid',
        region: 'center'
    }]
});
