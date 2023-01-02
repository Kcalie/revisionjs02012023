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
    // message quand on submit
    $('#formulaire_ajax').on('submit',function(){
        let formulaire = $('#formulaire_ajax').serialize();/*(METHODE 02)*/
        $.ajax({
            url: 'assets/ajax/formulaire.php',
            method: 'GET',
            /*data: 'nom='+$('#nom').val()+'&prenom='+$('#prenom').val()+'&email='+$('#email').val(),(METHODE 01)*/
            data: formulaire,/*(METHODE 02)*/
            dataType: 'html'
        })
        .done(function(response){
            alert(response);
        })
        .fail(function(error){
            alert('Le formulaire ne peut être enregistré')
        });
        return false;
    });
    // afficher un message qui indique l'email
    $('#email').on('keyup',function(){
        let email = $(this).val();
        if(email.length >= 10) {
            $(this).css('background', 'green');
        $.ajax({
            url: 'assets/ajax/email.php',
            method: 'GET',
            data: 'email='+email,
            dataType: 'html'
        })
        .done(function(response){
            $('#email_saisie').html(response);
        })
        .fail(function(error){
            alert('erreur email');
        });
        } else {
            $(this).css('background', 'red');
        }
    });
});


