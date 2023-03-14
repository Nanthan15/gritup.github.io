
console.log("Hello");
const personalized = ()=>{
    x= document.getElementById("validationCustom04").value
    console.log("the selected option is",x)
    if(x=="CS"){
        alert("Your choose is CS.. Further processing....")
        window.location.href = "./All_files/CS.html"
        
    }
    if(x=="AU"){
        alert("Your choose is AU.. Departrment in progress < Please Hold ON for some time");
    }
    if(x=="EC"){
       return `<div class="alert alert-success alert-dismissible"><button type="button" class="btn-close" data-bs-dismiss="alert"></button><strong>Success!</strong> This alert box could indicate a successful or positive action.</div> `
        
    }
    if(x=="ME"){
        alert("Your choose is ME.. Departrment in progress < Please Hold ON for some time");
    }
    

  }