/**
 * This view is an example list of people.
 */

var store = getStore(),
        pagingBar = Ext.widget('pagingtoolbar', {
            store      : store,
            displayInfo: true,
			emptyMsg : "没有符合条件的记录",
            displayMsg : '显示{0}条到{1}条,共{2}条'
        });
		
var sbzt = new Ext.form.ComboBox({
		id: "zhuangtai", 
		typeAhead: true,
		triggerAction: 'all',
		lazyRender:true,
		mode: 'local',
		store: new Ext.data.ArrayStore({
			id: 0,
			fields: [
				'comlumId',
				'comlumName'
			],
			data: [[-1,"申报状态"],[0, '部分'], [1, '已申报'],[2, '未申报']]
		}),
		valueField: 'comlumId',
		displayField: 'comlumName',
//		    emptyText : '请选择...',
		value : '-1', // 初始选中的列表项
		editable : true, // 选择输入框可编辑
		width:110
	});
	
	
var sbs = new Ext.form.ComboBox({
		id: "sbs", 
		typeAhead: true,
		triggerAction: 'all',
		lazyRender:true,
		mode: 'local',
		store: new Ext.data.ArrayStore({
			id: 0,
			fields: [
				'comlumId',
				'comlumName'
			],
			data: [[-1,"申报书"],[0, '所有'], [1, '已申报'],[2, '未申报']]
		}),
		valueField: 'comlumId',
		displayField: 'comlumName',
//		    emptyText : '请选择...',
		value : '-1', // 初始选中的列表项
		editable : true, // 选择输入框可编辑
		width:100
	});
	
var bgxz = new Ext.form.ComboBox({
		id: "bgxz", 
		typeAhead: true,
		triggerAction: 'all',
		lazyRender:true,
		mode: 'local',
		store: new Ext.data.ArrayStore({
			id: 0,
			fields: [
				'comlumId',
				'comlumName'
			],
			data: [[-1,"表格下载"],[0, '下载'], [1, '已下载'],[2, '未下载']]
		}),
		valueField: 'comlumId',
		displayField: 'comlumName',
//		    emptyText : '请选择...',
		value : '-1', // 初始选中的列表项
		editable : true, // 选择输入框可编辑
		width:110
	});

Ext.define('MyApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'gridPanel',


   // title: '计划表格',
	
	collapsible: false,
	
	border:false,

    store: store,

	columns: [
		{header: "序号",     sortable: true, dataIndex: 'id'},
		{header: "单位名称",    width:250,  sortable: true, dataIndex: 'company'},
		{header: "填报单位",  flex: 1, sortable: true, dataIndex: 'price'},
		{header: "姓名",       width:200, sortable: true, dataIndex: 'change'},
		{header: "性别",      width:150,sortable: true, dataIndex: 'pctChange'},
		{header: "出生年月",  width:150,sortable: true, xtype: 'datecolumn', dataIndex: 'lastChange'}
	],
	
	loadMask : {
			msg : '正在加载表格数据,请稍等...'
		},
		
	bbar: pagingBar,
	
	tbar: [
			{text: '人才平台',},
			sbzt,
			sbs,
			bgxz,
			{text: '申报流程说明'},
			{text: '上传文件'}
	],
    listeners: {
        select: 'onItemSelected'
    }
});


function getStore () {
    // Reverse order data should get sorted by the MemoryProxy
    var myData = [
        [1,'华东师范大学','中国上海',0.51,1.28,'9/1 12:00am'],
        [2,'华东师范大学','中国上海',0.02,0.04,'9/1 12:00am'],
        [3,'华东师范大学Inc.','中国上海',0.92,1.39,'9/1 12:00am'],
        [4,'华东师范大学Co.','中国上海',0.53,0.71,'9/1 12:00am'],
        [5,'华东师范大学.','中国上海',-0.48,-1.54,'9/1 12:00am'],
        [6,'Ameri华东师范大学.','中国上海',0.31,0.49,'9/1 12:00am'],
        [7,'华东师范大学','中国上海',0.01,0.02,'9/1 12:00am'],
        [8,'华东师范大学','中国上海',0.28,0.34,'9/1 12:00am'],
        [9,'华东师范大学','中国上海',0.42,1.47,'9/1 12:00am'],
        [10,'华东师范大学','中国上海',0.02,0.03,'9/1 12:00am'],
		[11,'华东师范大学Co.','中国上海',0.53,0.71,'9/1 12:00am'],
        [12,'华东师范大学.','中国上海',-0.48,-1.54,'9/1 12:00am'],
        [13,'Ameri华东师范大学.','中国上海',0.31,0.49,'9/1 12:00am'],
		[14,'Ameri华东师范大学.','中国上海',0.31,0.49,'9/1 12:00am'],
        [15,'华东师范大学','中国上海',0.02,0.03,'9/1 12:00am']
    ];

    return Ext.create('Ext.data.ArrayStore', {
        fields: [
			{name: 'id',type: 'float',},
            {name: 'company'},
            {name: 'price', convert: null},
            {name: 'change', type: 'float', convert: null},
            {name: 'pctChange', type: 'float', convert: null},
            {name: 'lastChange', type: 'date', dateFormat: 'n/j h:ia'}
        ],
       /* sorters: {
            property : 'id'
            ,direction: 'ASC'
        }, */
        data: myData,
        pageSize: 10
    });
}