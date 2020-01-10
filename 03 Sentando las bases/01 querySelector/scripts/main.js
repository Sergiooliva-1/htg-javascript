console.info('Cuando veas éste mensaje en consola, ya habrás terminado ésta parte del ejercicio. Borra ésta línea cuando ya la hayas visto alguna vez en la consola al acceder a ésta página.')

const comentarios = document.querySelectorAll(".comment")
for(let i = 0; i< comentarios.length; i++){
    comentarios[1].style.background = "green";
}

const linea = document.querySelectorAll ('hr')
for (let i = 0;i< linea.length;i++){
    linea[i].style.background = "red";
}