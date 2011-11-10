Ext.define('Todo.view.TaskList' , {
    store: 'Tasks',
    loadMask: false,
    itemSelector: 'div.row',
    extend: 'Ext.view.View',
    alias : 'widget.taskList',
    tpl: Ext.create('Ext.XTemplate',
        '<tpl for=".">',
            '<div class="row">',
                '<div class="delete">x</div>',
                '<input type="checkbox" {[values.checked ? "checked" : ""]} />',
                '<span class="{[values.checked ? "checked" : ""]}">{label}</span>',
                '<div style="clear: both;"></div>',
            '</div>',
        '</tpl>',
        {compiled: true}
    )
});
