var $table = $('#fresh-table'),
	full_screen = false;

$().ready(function () {
	$table.bootstrapTable({

		showRefresh: true,
		search: true,
		showToggle: true,
		showColumns: true,
		pagination: true,
		striped: true,
		pageSize: 8,
		pageList: [8, 10, 25, 50, 100],

		formatShowingRows: function (pageFrom, pageTo, totalRows) {
			//do nothing here, we don't want to show the text "showing x of y from..."
		},
		formatRecordsPerPage: function (pageNumber) {
			return pageNumber + " rows visible";
		},
		icons: {
			refresh: 'fa fa-refresh',
			toggle: 'fa fa-th-list',
			columns: 'fa fa-columns',
			detailOpen: 'fa fa-plus-circle',
			detailClose: 'fa fa-minus-circle'
		}
	});

	$(window).resize(function () {
		$table.bootstrapTable('resetView');
	});


});

function operateFormatter(value, row, index) {
	return [
		'<a rel="tooltip" title="Like" class="table-action like" href="javascript:void(0)" title="Like">',
		'<i class="fa fa-heart"></i>',
		'</a>',
		'<a rel="tooltip" title="Edit" class="table-action edit" href="javascript:void(0)" title="Edit">',
		'<i class="fa fa-edit"></i>',
		'</a>',
		'<a rel="tooltip" title="Remove" class="table-action remove" href="javascript:void(0)" title="Remove">',
		'<i class="fa fa-remove"></i>',
		'</a>'
	].join('');
}