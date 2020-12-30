
function sendPhone() {
  let value = document.getElementById('input').value

  let settings = {
    method: 'post',
    url: 'https://api.gupshup.io/sm/api/v1/app/opt/in/TudoForte',
    data: Qs.stringify({
      user: `55${value}`
    }),
    headers: {
      'apikey': 'c82611597a244856c8f492f8e012fc02',
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  }

  axios(settings).then(function (response) {
    console.log(response);
    alert('Contato Registrado Com Sucesso!!')

  })

}


function getPhone(){


  let phone = document.getElementById('phone').value;

  document.getElementById('image-search').style.display = "block"


  let settings = {
    method: 'get',
    url: 'https://api.gupshup.io/sm/api/v1/users/TudoForte',
    headers: {
      'apikey': 'c82611597a244856c8f492f8e012fc02'
    }
  }

  axios(settings).then(function (response) {
    
        let phones = response.data.users
        
        const found = phones.find(element => element.phoneCode == `${phone}`);
 
        if(found === undefined){
          alert('Telefone Não Cadastrado')          
          document.getElementById('image-search').style.display = "none"
        }else{
          if(found.phoneCode === `${phone}`){
            alert('Telefone Cadastrado')
            document.getElementById('image-search').style.display = "none"
          }
        }
        
  })

}



