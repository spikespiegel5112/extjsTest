Ext.define('MyApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'MyApp.model.Personnel',

    data: { items: [
        { name: '1', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111",name2: 'Jean Luc', email2: "jeanluc.picard@enterprise.com", phone2: "555-111-1111" },
        { name: '2',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222",name2: 'Jean Luc', email2: "jeanluc.picard@enterprise.com", phone2: "555-111-1111" },
        { name: '3',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333",name2: 'Jean Luc', email2: "jeanluc.picard@enterprise.com", phone2: "555-111-1111" },
        { name: '4',     email: "mr.data@enterprise.com",        phone: "555-444-4444" ,name2: 'Jean Luc', email2: "jeanluc.picard@enterprise.com", phone2: "555-111-1111"}
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
