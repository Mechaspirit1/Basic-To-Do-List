//prevent default é um metodo que evita a ação normal de um form
//isto é, mandar a informação passada no input para o local especificado no html

const sub = document.querySelector("#btn");
const list = document.querySelector("#list");
const input = document.querySelector("#submit");
const form = document.querySelector("#form");
let first = true;
let submissions = 1; //usado para loggar a quantidade de items na lista

sub.addEventListener("click",(e)=>{
    e.preventDefault(); //declaração do metodo preventDefault

    console.log("Submitted !");
    console.log(`${input.value}`);
    console.log(submissions);

    //cria um elemento li e define o valor do texto como o texto do input
    const item = document.createElement("li");
    const itemCont = document.createTextNode(`${input.value}`)

    //cria uma checkbox para cada item adicionado a lista
    const check = document.createElement("input");
    check.type = 'checkbox';
    check.id = 'chk';

    //adiciona o valor do input ao item e o adiciona a lista declarada no html
    item.appendChild(check);
    item.appendChild(itemCont);
    list.append(item);

    input.value = ""; //limpa a caixa de texotp após o envio 
    submissions++; 

    //logica do botão de delete
    if(first === true){ //se a condição for verdadeira cria um botão de delete e o adiciona ao form
        const del = document.createElement("button");
        const delCont = document.createTextNode("Delete")

        del.appendChild(delCont);
        form.append(del);
        first = false; //coloca first como false para que o botão seja criado uma vez só

        //coloca um event listner no botão que foi criado
        //se o botão for clicado o ultimo item a ser adicionado a lista é deletado
        del.addEventListener("click", (f)=>{
            f.preventDefault();

            list.removeChild(list.lastElementChild);
            submissions--; //remove 1 da variavel toda vez que o botão é clicado
            console.log(submissions);

            //se não houverem mais items na lista o botão delete é removido e a condição volta a ser verdadeira
            //isso possibilita a criação de um novo botão caso novos items sejam postos na lista vazia
            if(submissions<=1){
                form.removeChild(form.lastElementChild);
                first = true;
            }
        });
    }
    else{
        return 0;
    }
});

