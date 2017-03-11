var pessoa = {
	nome: 'Bueno Nepomuceno',
	cargo: 'Desenvolvedor de Software',
	foto: 'bueno.jpg'
}

document.getElementById('nome-cabecalho').innerHTML = pessoa.nome;
document.getElementById('cargo-cabecalho').innerHTML = pessoa.cargo;
document.getElementById('img-cabecalho').src = pessoa.foto;