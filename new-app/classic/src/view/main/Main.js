/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
    Ext.define('app.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'index',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'Ext.tree.Panel',

        'app.view.main.MainController',
        'app.view.main.MainModel',
        'app.view.main.List',
        'app.view.main.tree.Tree',
        'app.view.main.tree.Toolbar',
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch',
    },
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
        xtype:'maintab',
        flex: 1
    }]
});
