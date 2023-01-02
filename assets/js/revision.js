(function(){
    let AjaxRequest;
    document.getElementById('ajax_js').addEventListener('click',chargerAjax);
    function chargerAjax(){
        AjaxRequest = new XMLHttpRequest();
        if(!AjaxRequest){
            console.log('Impossible de créer une instance !!!');
            return false;
        }
        AjaxRequest.onreadystatechange = chargeContenu;
        AjaxRequest.open('GET','assets/ajax/ajax.html');
        AjaxRequest.send();
    }
    function chargeContenu(){
        if(AjaxRequest.readyState === XMLHttpRequest.DONE){
            if(AjaxRequest.status === 200) {
                document.getElementById('charge').innerHTML = AjaxRequest.responseText;
            }
            else {
                alert('Une erreur est survenue. Apprenez à bien coder');
            }
        }
    }   
})();
// AAjax en Jquery 
$(document).ready(function(){
    $('#ajax_jquery').on('click', function(){
        $('#charge2').load('assets/ajax/ajax2.html');
    });
});