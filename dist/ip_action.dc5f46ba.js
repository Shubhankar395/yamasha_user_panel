loading_div = byId("loading_div");
email_sended_div = byId("email_sended_div");
ip_verified_div = byId("ip_verified_div");
/*reading query */ const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop)=>searchParams.get(prop)
});
/* sending verification link */ if (params.r_id) {
    if (params.r_ip) {
        id = params.r_id;
        ip = params.r_ip;
        action = "send_v_link";
        d_none(loading_div, false);
    }
}
//  verify link
if (params.vl) {
    id = params.vl;
    ip = "";
    action = "validate_v_link";
    d_none(loading_div, false);
}
function ip_action_fun(id, ip, action) {
    var bodyFormData = new URLSearchParams();
    bodyFormData.append("id", id);
    bodyFormData.append("ip", ip);
    bodyFormData.append("action", action);
    bodyFormData.append("host_href", new URL("ip_action.html", window.location.href));
    axios.post(api_base + "ip_action.php", bodyFormData).then(function(response) {
        console.log(response.data);
        res = response.data;
        if (response.data.status == 0) Swal.fire({
            icon: "error",
            title: res.msg,
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            didOpen: (toast)=>{
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
            }
        });
        if (response.data.status == 1) {
            d_none(loading_div, true);
            d_none(email_sended_div, false);
        }
        if (response.data.status == 2) {
            d_none(loading_div, true);
            d_none(ip_verified_div, false);
            setTimeout(()=>{
                location.replace("login.html");
            }, 3000);
        }
    }).catch(function(error) {
        console.log(error);
    });
}
ip_action_fun(id, ip, action);

//# sourceMappingURL=ip_action.dc5f46ba.js.map
