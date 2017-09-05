Ext.define('app.view.main.Tree', {
    extend: 'Ext.tree.Panel',
    xtype: 'maintree',
    title: 'Simple Tree',
    width: 200,
    height: 800,
    lines:true,
    root: {
        text: 'Root',
        expanded: true,
        children: [
            {
                text: 'Child 1',
                leaf: true
            },
            {
                text: 'Child 2',
                leaf: true
            },
            {
                text: 'Child 3',
                expanded: true,
                children: [
                    {
                        text: 'Grandchild',
                        leaf: true
                    }
                ]
            }
        ]
    }
});