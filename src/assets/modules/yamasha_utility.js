import store from 'store';
import Swal from 'sweetalert2';

export function check_overflow(){
    function isElementOverflowing(element) {

        var overflowX = element.offsetWidth < element.scrollWidth,
            overflowY = element.offsetHeight < element.scrollHeight;
        console.log(overflowX + '+' + overflowY);
        return (overflowX || overflowY);
    }
    
      function wrapContentsInMarquee(element) {
    
        var marquee = document.createElement('marquee'),
            contents = element.innerText;
    
        marquee.innerText = contents;
        element.innerHTML = '';
        element.appendChild(marquee);
    }
    
    var element = document.getElementsByClassName('overmarquee');
    
    
    
    for (let i = 0; i < element.length; i++) {
        // element = element[i];
        console.log(element[i]);
        if (!element[i]) {
            break; 
    
        }
        if (isElementOverflowing(element[i])) {
            wrapContentsInMarquee(element[i]);
    
        }
    
    
    }
}

//  short hand 
export var byId = function (id) { return document.getElementById(id); };

// check login

// check login

export function loginCheck(){
    if(!store.get('yamasha_user_data')){
         location.replace('./login.html');
    }
}

// logout function

export function logOut(){
    store.remove('yamasha_user_data');
    location.replace('./login.html');
}

// function for updating user name in header

export function setUsernameInHeader(){
   let header_name_span1=document.getElementById('header_name_span1');
   let header_name_span2=document.getElementById('header_name_span2');

    header_name_span1.innerHTML=header_name_span2.innerHTML=store.get('yamasha_user_data').NAME;
}

export function d_none(div_id, status) {

    if (status == true) {
        div_id.classList.add('d-none');
    }
    if (status == false) {
        div_id.classList.remove('d-none');
    }

}

export function bootstrapAlert(div_id, msg, type, seconds) {


    div_id.innerHTML = `<div class="alert alert-${type}" role="alert">
        ${msg}
      </div>`;


   setTimeout(() => {
        div_id.innerHTML = '';
    }, seconds * 1000);

}

export function btn_loading(btn,msg,status){

    if(!btn){
        console.log('error in btn_loading');
    }
    
   let  btn_id=btn.id;
    // console.log(btn_id);
    if(status==true){
        btn.disabled=true;
       let  old_data=btn.innerHTML;
        btn.innerHTML=`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        ${msg}
        <span id='${btn_id+'old_data'}' class='d-none'>${old_data}</span>`;
    }
    if(status==false){
        btn.disabled=false;
        let  old_data_div=byId(btn_id+'old_data');
        let old_data=old_data_div.innerHTML;
        btn.innerHTML=`${old_data}`;
    }
    
    
}

export let  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
  });
