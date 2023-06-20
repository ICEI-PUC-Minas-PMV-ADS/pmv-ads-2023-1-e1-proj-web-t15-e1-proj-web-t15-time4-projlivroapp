//Função que é chamada quando carrega a tela
window.onload = () => {
  init();
  load_database();
}

function init() {
}

function get_book_form() {
  // Obtem os valores dos campos do formulário
  let id = $("#f_id").val();
  let autor = $("#f_autor").val();
  let titulo = $("#f_titulo").val();
  let edicao = $("#f_edicao").val();
  let ano = $("#f_ano").val();
  let genero = $("#f_genero").val();
  let qtde_paginas = $("#f_qtde_paginas").val();
  let foto = $("#f_foto").val();
  return get_book_obj(id, autor, titulo, edicao, ano, genero, qtde_paginas, foto, "", "", "");
}

// item default book
const book_def = {
  "id": "",
  "autor": "",
  "titulo": "",
  "edicao": "",
  "ano": "",
  "genero": "",
  "qtde_paginas": "",
  "foto": "",
}

//Função que popula o objeto livro
function get_book_obj(id, autor, titulo, edicao, ano, genero, qtde_paginas, foto, dataComentario, comentario, pagina) {
  let book = {};
  Object.assign(book, book_def);
  book.id = id;
  book.autor = autor;
  book.titulo = titulo;
  book.edicao = edicao;
  book.ano = ano;
  book.genero = genero;
  book.qtde_paginas = qtde_paginas;
  book.foto = foto;
  book.dataComentario = dataComentario;
  book.comentario = comentario;
  book.pagina = pagina;
  return book;
}

// declara um conjunto inicial de contatos
var db_biblioteca_default = {
  "data": [
    get_book_obj(1, "Mark W. Baker", "Jesus, o maior psicólogo que já existiu", 9, 2005, 1, 191, "images/livro-domCasmurro.png", "", ""),
    get_book_obj(2, "George Orwell", "Revolução dos bichos", 1, 2007, 3, 147, "images/livro-domCasmurro.png", "06/06/2023", "Estou amando!"),
  ]
}

// Carrega os dados do Local storage ou os dados iniciais padrão
var db = JSON.parse(localStorage.getItem('database_biblioteca'));
if (!db) {
  db = db_biblioteca_default;
};

//Função ativada pelo botão 'Salvar' no HTML
function cadastrarLivro() {
  // Cria um ID único baseado no timestamp atual
  let novoId = Date.now().toString();

  // Cria um objeto com as informações do livro
  let livro = get_book_form();
  livro.id = novoId;

  set_url_img_ls(document.getElementById('f_foto'), livro)
    .then(() => {
      // Operação de leitura concluída com sucesso
      let listLivros = JSON.parse(localStorage.getItem('database_biblioteca') || '[]');
      listLivros.push(livro);

      // Salvando no localStorage
      localStorage.setItem('database_biblioteca', JSON.stringify(listLivros));
      alert('Livro cadastrado com sucesso!');
    })
    .catch(error => {
      // Ocorreu um erro durante a leitura do arquivo
      console.error(error);
    });

  //Fecha o Modal
  document.getElementById("myModal").style.display = "none";
  location.reload();
}

// Função para abrir o modal
function openModal() {
  clear_form();

  document.getElementById("myModal").style.display = "block";
}

function editModal(){
  document.getElementById("myModal").style.display = "block";
}

// Função para fechar o modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Event listener para fechar o modal quando o usuário clicar fora dele
window.onclick = function (event) {
  if (event.target == document.getElementById("myModal")) {
    closeModal();
  }
}

// Event listener para enviar o formulário
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o envio padrão do formulário
  // Aqui você pode adicionar a lógica para enviar os dados do formulário
  closeModal(); // Fecha o modal após enviar o formulário
});

// Função que lê o arquivo de imagem para salvar
function set_url_img_ls(f_file, livro) {
  return new Promise((resolve, reject) => {
    const file = f_file.files[0];

    if (!file) {
      reject(new Error('Nenhum arquivo selecionado.'));
      return;
    }

    const reader = new FileReader();
    reader.onload = function (evt) {
      const base64String = evt.target.result;
      console.log('Imagem em formato base64:', base64String);
      livro.foto = base64String;
      resolve();
    };
    reader.onerror = function (evt) {
      reject(new Error('Erro ao ler o arquivo.'));
    };
    reader.readAsDataURL(file);
  });
}

// Função para gerar o card
function load_database() {
  let divCards = $('#divCards');
  divCards.empty();
  for (let i = 0; i < db.length; i++) {
    book = db[i];

    card = `<div class="card em-6-ento">
      <div class="nome-livro" id="nome-livro">
          <p onclick="editModal()"> ${book.titulo} </p>
      </div>
      <img class="foto-livro" alt="Foto do livro ${book.titulo}" src="${book.foto}"/>
      <img class="icone-close" src="images/close.png" alt="Fechar" onclick="remove(${book.id})"/>
      <div class="progresso">
          <div class="box-progresso">
              <div class="progresso-status">
                  <p>Progresso</p>
              </div>
              <div class="status-leituraandamento">
                  <label>Estou na página <input type="number" class="contador-páginas"
                          id="txtContador_${book.id}" value="${book.pagina}" min="1" onchange="updateContador(${book.id})" /></label>
              </div>
              <div class="total-paginas" id="totalPaginas">
                  <p> de ${book.qtde_paginas}</p>
              </div>
          </div>
      </div>
      <div class="adicionar-nota">
          <div class="box-adicionar">
              <textarea id="mensagem_${book.id}" placeholder="Adicionar nota..." name="mensagem" rows="3" cols="50"></textarea>
          </div>
      </div>
      <div class="button-salvar-nota" id="button-salvar-Nota">
          <button class="button-salvar" type="button" onclick="update(${book.id})">Salvar</button>
      </div>
      <div class="notas-adicionadas">
          <label class="data-nota">${book.dataComentario} </label>
          <label class="nota"> ${book.comentario}</label>
      </div>
      </div>`;

    $(divCards).prepend(card); // Organiza os cards do mais novo para o mais antigo
  }
}

//Função que limpa o formulario de cadastro
function clear_form() {
  let fields = new Array('id', 'autor', 'titulo', 'edicao', 'ano', 'genero', 'qtde_paginas', 'foto', 'local');
  for (let i = 0; i < fields.length; i++)
    $("#f_" + fields[i]).val('');
};

// Função para remover um card
function remove(id) {
  let idx = find_by_id(id);
  db.splice(idx, 1);
  save_and_update_db();
  alert("Card removido com sucesso");
}

//Função que busca um livro pelo id no banco de dados
function find_by_id(id) {
  for (let i = 0; i < db.length; i++)
    if (db[i].id == id)
      return i;
  return null;
}

//Função que atualiza o card com o comentario novo
function update(id) {
  let idx = find_by_id(id);
  let book = db[idx];
  book.comentario = $("#mensagem_" + book.id).val();
  book.dataComentario = getFormattedDateTime();
  db[idx] = book;

  alert("Comentario feito com sucesso");
  window.setTimeout(save_and_update_db, 500);
}

//Função que atualiza o contador de paginas de cada card
function updateContador(id) {
  let idx = find_by_id(id);
  let book = db[idx];

  book.pagina = $("#txtContador_" + book.id).val();
  db[idx] = book;

  window.setTimeout(save_and_update_db, 500);
}

//Função que atualiza o banco de dados
function save_and_update_db() {
  localStorage.setItem('database_biblioteca', JSON.stringify(db));
  load_database();
}

// Função para abrir opção de digitar ano do livro manualmente
var selectElement = document.getElementById('f_ano');
var currentYear = new Date().getFullYear();

for (var year = 1990; year <= currentYear; year++) {
  var option = document.createElement('option');
  option.value = year;
  option.textContent = year;
  selectElement.appendChild(option);
}

var optionOutro = document.createElement('option');
optionOutro.value = 'outro';
optionOutro.textContent = 'Outro';
selectElement.appendChild(optionOutro);

function toggleYearInput() {
  var inputElement = document.getElementById('f_ano_outro');

  if (selectElement.value === 'outro') {
    inputElement.style.display = 'block';
    inputElement.required = true;
  } else {
    inputElement.style.display = 'none';
    inputElement.required = false;
  }
}

//Função que pega data e hora do dia
function getFormattedDateTime() {
  let date = new Date();

  let day = String(date.getDate()).padStart(2, '0');
  let month = String(date.getMonth() + 1).padStart(2, '0');
  let year = date.getFullYear();

  let hours = String(date.getHours()).padStart(2, '0');
  let minutes = String(date.getMinutes()).padStart(2, '0');

  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

