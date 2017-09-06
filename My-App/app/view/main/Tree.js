/**
 * This class is the view model for the Main view of the application.
 */

var store = Ext.create('Ext.data.TreeStore', {
    root: {
        expanded: true,
        children: [
            { text: 'detention', leaf: true },
            { text: 'homework', expanded: true, children: [
                { text: 'book report', leaf: true },
                { text: 'algebra', leaf: true}
            ] },
            { text: 'buy lottery tickets', leaf: true }
        ]
    }
});
Ext.define('MyApp.view.main.MainModel', {
    extend: 'Ext.tree.Panel',//继承treepanel
    title: 'Simple Tree',
    width: 200,
    height: 200,
    store: store,
    rootVisible: false,
    renderTo: Ext.getBody()
});

