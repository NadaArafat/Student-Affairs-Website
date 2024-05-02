const activeStudent = document.getElementById('update_Active');
const activeBtn= document.getElementsByClassName("btn");
activeBtn[0].addEventListener('click', (event)=>{
    const activeId = activeStudent.value;
    const ids=document.getElementsByClassName('id');
    const status=document.getElementsByClassName("status");
    for ( i=0; i<ids.length; i++){
        if (ids[i].innerHTML===activeId){
          if (status[i].innerHTML==="Active"){
            status[i].innerHTML = "InActive";
          } else {
            status[i].innerHTML = "Active";
          }
    }  
  }
    event.preventDefault();
});






