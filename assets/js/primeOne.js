  //  short hand 
var byId = function( id ) { return document.getElementById( id ); };

// check login

function loginCheck(){
    if(!store.get('yamasha_user_data')){
         location.replace('./login.html')
    }
}

// logout function

function logOut(){
    store.remove('yamasha_user_data')
    location.replace('./login.html')
}

// function for updating user name in header

function setUsernameInHeader(){
    header_name_span1=document.getElementById('header_name_span1')
    header_name_span2=document.getElementById('header_name_span2')

    header_name_span1.innerHTML=header_name_span2.innerHTML=store.get('yamasha_user_data').NAME
}

function d_none(div_id,status){

    if(status == true){
        div_id.classList.add('d-none')
    }
    if(status == false){
        div_id.classList.remove('d-none')
    }

}

function bootstrapAlert(div_id,msg,type,seconds){

 
        div_id.innerHTML=`<div class="alert alert-${type}" role="alert">
        ${msg}
      </div>`
   

    const myTimeout = setTimeout(() => { 
        div_id.innerHTML=''
    }, seconds*1000);

}

function btn_loading(btn,msg,status){
    
    btn_id=btn.id
    if(status==true){
        btn.disabled=true;
        old_data=btn.innerHTML
        btn.innerHTML=`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        ${msg}
        <span id='${btn_id+'old_data'}' class='d-none'>${old_data}</span>`
    }
    if(status==false){
        btn.disabled=false;
        old_data_div=byId(btn_id+'old_data')
        old_data=old_data_div.innerHTML
        btn.innerHTML=`${old_data}`
    }
    
    
}
