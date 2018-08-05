import $ from 'jquery'
export const events = {
    URL: 'http://139.129.240.27:8031/appapi/',
    QUANTITY_OF_FACILITY: 'PC_Get_Point_Line_By_TaskID',
    FACILITY_MAP: new Map([
        ['MjhCOTY0Qjc5Q0EyMjA1Ng', '变电站'],
        ['NjFENjcwQTUyODUxMTU0MQ', '变压器'],
        ['Q0VGOTQ0QTA1QkI4QzlCQw', '杆塔'],
        ['MDdENjlGNzI2RDlFOEVBMQ', '连线'],
        ['NzY5M0FFNzExREQ2Njc3MA', '电缆'],
        ['MjNCMzUxNzhCQTIwODJFRQ', '电缆分支箱'],
        ['NzNDMzIyN0Q4RTE0RUVDNg', '配电箱'],
        ['MTY3M0UwMUU5NjI4RTdGNg', '环网柜'],
        ['RkFDOEMxRkRGRjhBQzJGMQ', '电缆井'],
        ['NjExODJGOUMzMkQzMEI2Qw', '拐角点'],
        ['QUIxQzg3MTk3MzVGNzY2Rg','计量箱']
    ]),
    request: function (callback) {
        $.ajax({
            url: this.URL + this.QUANTITY_OF_FACILITY,
            data: {
                "TaskIDstr": "NkQzMjJFQThFQ0REOEY0Qg"
            },
            dataType: 'jsonp'
        }).done(function (response) {
            callback(response);
        })
    }
}