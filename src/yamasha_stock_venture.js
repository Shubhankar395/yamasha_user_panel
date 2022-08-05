import axios from 'axios';
import * as echarts from 'echarts';
import moment from 'moment';
import store from 'store';
import Swal from 'sweetalert2';
import { api_base } from './assets/modules/config';
import { byId, d_none, loginCheck, logOut, setUsernameInHeader, Toast } from './assets/modules/yamasha_utility';

loginCheck();
setUsernameInHeader();
window.logOut = logOut;


const yamasha_stock_price_display = byId('yamasha_stock_price_display');

const yamasha_stock_price_display1 = byId('yamasha_stock_price_display1');
const yamasha_stock_gain_display1 = byId('yamasha_stock_gain_display1');
const yamasha_stock_gain_in_percent_display1 = byId('yamasha_stock_gain_in_percent_display1');


const stock_quantity_input = byId('stock_quantity_input');
const popup_show = byId('popup_show');
const stock_buy_btn = byId('stock_buy_btn');
const data_table_body = byId('data_table_body');




function show(){
    const history_div= byId('history-show');
    const show_button = byId('show_button');
    const hide_button = byId('hide_button');
    d_none(show_button , true);
    d_none(hide_button , false);
    d_none(history_div , false);
}
function hide(){
    const hide_button = byId('hide_button');
    const history_div= byId('history-show');
    const show_button = byId('show_button');

    d_none(hide_button , true);
    d_none(history_div ,true );
    d_none(show_button , false);

}
window.hide = hide;
window.show = show;
function yamasha_stock_action_fun(action, stock_quantity) {

    if (action === 'buy_stocks' && stock_quantity < 1) {

        Toast.fire({
            icon: 'error',
            title: 'enter stock quantity properly'
        });

        return false;
    }



    var bodyFormData = new URLSearchParams();

    bodyFormData.append('action', action);
    bodyFormData.append('stock_quantity', stock_quantity);
    bodyFormData.append('ID', store.get('yamasha_user_data1').ID);
    bodyFormData.append('TOKEN', store.get('yamasha_user_data1').TOKEN);
    axios.post(api_base + 'yamasha_stock.php', bodyFormData)
        .then(function (response) {
            const res = response.data;
            console.log(res);


            if (res.status === 0) {

                Toast.fire({
                    icon: 'error',
                    title: res.msg
                });
            }
            if (res.status === 1) {
                yamasha_stock_price_display1.innerHTML = '₹' + res.yamasha_stock_price;
                yamasha_stock_price_display.value = res.yamasha_stock_price;
                yamasha_stock_gain_display1.innerHTML = '+' + res.yamasha_stock_gain;
                let percentVal = (100 * res.yamasha_stock_gain) / res.yamasha_stock_price;
                percentVal = Math.round(percentVal * 100) / 100;
                yamasha_stock_gain_in_percent_display1.innerHTML = '(' + percentVal + '%)';

                // yamasha_stock_gain_display.innerHTML = res.yamasha_stock_gain;

                // const tAmount = yamasha_stock_price_display.value * stock_quantity;
                // console.log(stock_quantity);

                // yamasha_stock_gain_display.value = tAmount;

            }
            if (res.status === 2) {

                Swal.fire({
                    icon: 'success',
                    title: 'Purchased Complete',

                });


                setTimeout(() => {
                    location.reload();
                }, 1000);



            }
            if (res.status === 3) {


                // adding data to table
                let i = 0;
                while (res.res_data.length > i) {
                    // let   init_data = res.res_data[i]
                    // const time = moment(res.res_data[i].TIME * 1000).startOf().fromNow();

                    const date = moment(res.res_data[i].TIME * 1000).format('DD/MM/YYYY');
                    const time = moment(res.res_data[i].TIME * 1000).format('LT');

                    const after_year_date = moment(res.res_data[i].TIME * 1000).add(1, 'y');

                    const lock_in_time = after_year_date.format('DD/MM/YYYY');

                    data_table_body.innerHTML += `
            <tr class="text-light">
                <td>${date} ${time}</td>
              
                <td>${res.res_data[i].QUANTITY}</td>
                <td>${res.res_data[i].TYPE}</td>
                <td>₹${res.res_data[i].PRICE}</td>
                <td>${lock_in_time}</td>
            
            
            
            
            
            
            </tr>`;
                    i++;
                }


            }

            if (res.status === 4) {

                // adding data to table
                let i = 0;
                const data = [];
                while (res.res_data.length > i) {
      

                    data.push([res.res_data[i].TIME * 1000, res.res_data[i].PRICE]);


                    i++;
                }


                // graph code 
                var chartDom = document.getElementById('graph_main_div');
                var myChart = echarts.init(chartDom);
                var option;



                console.log(data);
                option = {
                    
                    tooltip: {
                        trigger: 'axis',
                        position: function (pt) {
                            return [pt[0], '10%'];
                        },
                        // axisPointer: {
                        //     type: 'cross'
                        //   }
                    },
                    title: {
                        left: 'center',
                        text: 'Yamasha stock price history'
                    },
                    toolbox: {
                        feature: {
                            dataZoom: {
                                yAxisIndex: 'none'
                            },
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'time',
                        boundaryGap: false,
                        axisLabel:{
                            // formatter: '{dd}/{MM}/{yyyy} {hh}:{mm}'
                            interval: 'auto'
                        }
                    },
                    yAxis: {
                        type: 'value',
                        boundaryGap: [0, '50%']
                    },
                    // dataZoom: [
                    //     {
                    //         type: 'inside',
                    //         start: 80,
                    //         end: 100
                    //     },
                    //     {
                    //         start: 80,
                    //         end: 100
                    //     }
                    // ],
                    series: [
                        {
                            name: 'Price',
                            type: 'line',
                            smooth: true,
                            symbol: 'none',
                            areaStyle: {},
                            data: data
                        }
                    ]
                };

                option && myChart.setOption(option);
            }
            if (res.status === -1) {
                logOut();
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

yamasha_stock_action_fun('get_price', 0);
yamasha_stock_action_fun('get_history', 0);
yamasha_stock_action_fun('get_graph_data', 0);

stock_buy_btn.addEventListener('click', function () { yamasha_stock_action_fun('buy_stocks', stock_quantity_input.value); }, false);

stock_quantity_input.addEventListener('input', function (e) {
    // const stock_quantity_input = byId('stock_quantity_input');
    const yamasha_stock_price_display = byId('yamasha_stock_price_display');
    const yamasha_stock_total_amount = byId('yamasha_stock_total_amount');
    const tAmount = (e.target.value) * (yamasha_stock_price_display.value);
    // tAmount = Math.round(tAmount * 100) / 100;
    yamasha_stock_total_amount.value = tAmount;

});


function stock_sell_function() {
    // console.log('success');
    Swal.fire({
        title: "You can't sell stock",
        text: "You can't sell due to lock-in period  of 1 Year",
        icon: 'warning',
        buttons: true,
        dangerMode: true
    });
}
window.stock_sell_function = stock_sell_function;


function popup_hide() {
    d_none(popup_show, true);
}
window.popup_hide = popup_hide;

function stock_buy_function() {

    d_none(popup_show, false);

}
window.stock_buy_function = stock_buy_function;




