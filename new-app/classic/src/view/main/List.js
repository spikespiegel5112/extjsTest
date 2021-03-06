/**
 * This view is an example list of people.
 */
Ext.define('app.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    layout: 'border',
    requires: [
        'app.store.Personnel'
    ],

    title: '',
    tbar: [{
        xtype: 'button',
        text: 'Button 1'
    },{
        xtype: 'splitbutton',
        text: 'Button 1'
    },{
        xtype: 'textfield',
        text: 'Button 1'
    },
        'text 1'
    ],

    store: {
        type: 'personnel'
    },

    columns: [
        {text: 'Name', dataIndex: 'name'},
        {text: 'Email', dataIndex: 'email', flex: 1},
        {text: 'Phone', dataIndex: 'phone', flex: 1}
    ],

    listeners: {
        select: 'onItemSelected'
    }
});


