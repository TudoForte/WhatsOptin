
function getValue() {
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
