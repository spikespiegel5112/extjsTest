/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('app.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
            alert('dsds')
        }
    },
    items:[{

    }]
});

// Ext.create('Ext.Button', {
//     renderTo: Ext.getBody(),
//     listeners: {
//         click: function() {
//             Ext.Msg.alert('Button clicked!');
//         }
//     }
// });

// Ext.Viewport.add({
//     xtype: 'tabpanel',
//     items: [{
//         title: 'Employee Directory',
//         iconCls: 'x-fa fa-users'
//     },{
//         title: 'About Sencha',
//         iconCls: 'x-fa fa-info-circle'
//     }]
// });
