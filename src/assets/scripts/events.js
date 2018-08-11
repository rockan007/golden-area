import $ from 'jquery'
export const events = {
    URL: 'http://139.129.240.27:8031/appapi/',
    TQ_URL: 'https://www.elebright.com:8131/APPAPI/',
    QUANTITY_OF_FACILITY: 'PC_Get_Point_Line_By_TaskID',
    TRANSFORMER_PROPERTIES: 'JPTQ_BX', //变压器数据接口
    METER_BOX_PROPERTIES: 'JPTQ_BX_By_TaskID', //表箱数据接口
    POWER_CABINET: 'JPTQ_PDG_By_TaskID', //配电箱数据接口
    METER_PROPERTIES: 'JPTQ_Get_DB_By_BXID', //电表数据接口
    LINE_LIST: 'JPTQ_Get_XL_By_TaskID', //台区线路
    LINE_METERS: 'JPTQ_Get_XL_BX_BY_TaskID', //级联关系
    ELE_ANALYSIS: 'JPTQ_Get_Data_By_Task_XL_BX', //用电分析
    LINE_LOSS: 'JPTQ_Get_XianSun_Ini', //台区线损
    METER_BOX_LINELOSS: 'JPTQ_Get_XianSun_BX', //表箱线损
    AREA_BOXES:'JPTQ_Get_BX_By_TaskID',//台区表箱列表
    AREA_ID: 'NkQzMjJFQThFQ0REOEY0Qg', //台区ID
    USER_ID: 'OTVCREZENjRCMkYzRDMxMQ', //用户id
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
        ['QUIxQzg3MTk3MzVGNzY2Rg', '计量箱']
    ]),
    //普通请求
    request: function (callback) {
        $.ajax({
            url: this.URL + this.QUANTITY_OF_FACILITY,
            data: {
                "TaskIDstr": "NkQzMjJFQThFQ0REOEY0Qg"
            },
            dataType: 'jsonp'
        }).done(function (response) {
            callback(response);
        }).fail(function (err) {
            console.log(err)
        })
    },
    //台区请求
    TQ_request: function (url, params, callback) {
        $.ajax({
            url: this.TQ_URL + url,
            data: params,
            dataType: 'jsonp'
        }).done(function (response) {
            if (response.ResultCode == 200) {
                callback(response.Data_Obj);
            } else {
                console.log("接口" + url + "返回数据错误：" + response.ResultDesc);
            }

        }).fail(function (err) {
            console.log("接口" + url + "错误：" + JSON.stringify(err));
        })
    },
    formatDate: function (date, format) {
        console.log("日期：" + date + ';格式：' + format)
        let o = {
            "M+": date.getMonth() + 1, //月份 
            "d+": date.getDate(), //日 
            "H+": date.getHours(), //小时 
            "m+": date.getMinutes(), //分 
            "s+": date.getSeconds(), //秒 
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
            "S": date.getMilliseconds() //毫秒 
        };
        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (let k in o) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
        return format;
    }

}