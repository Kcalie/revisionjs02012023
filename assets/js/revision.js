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
// Ajax en Jquery 
$(document).ready(function(){
    $('#ajax_jquery').on('click', function(){
        $('#charge2').load('assets/ajax/ajax2.html');
    });// La dif avec celui du dessus est que une erreur peut s'afficher 
    $('#ajax_query').on('click', function(){
        $.ajax({
            url: 'assets/ajax/ajax2.html',
            method: 'GET',
            dataType: 'html',
        })
        .done(function(response){
            $('#charge2').html(response);
        })
        .fail(function(error){
            alert('Ta requête ne fonctionne pas !!')
        });
    });
});

