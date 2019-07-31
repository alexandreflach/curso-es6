class List {
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}


class TodoList extends List {
    constructor(){
        super();

        this.usuario = 'Alexandre'
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();




class Matematica {
    static soma(a, b){
        return a + b;
    }
}

console.log(Matematica.soma(323, 232));



//constantes
const a = 1; //valor estatico, não pode ser alterado
// a = 3;  -> dá erro

//mutação em constantes
const usuario = { nome: 'Diego' };
usuario.nome = 'Alexandre';
console.log(usuario); //{nome: Alexandre}

//let variavel de escopo
