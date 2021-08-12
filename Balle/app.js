function calcul () {
    //Recuperation des donnees
    let h = document.querySelector('#h').value;
    let bounce = document.querySelector('#bounce').value;
    let win = document.querySelector('#window').value;
    let result
    //Recuperation des conteneurs
    const resultContainer = document.querySelector('#result');
    const herror = document.querySelector('#herror')
    const hContainer = document.querySelector('#h')
    const bounceContainer = document.querySelector('#bounce')
    const bounceError = document.querySelector('#bounceError')
    const winContainer = document.querySelector('#window')
    const winError = document.querySelector('#winError')
    //Verification des conditions
    if(h > 0){
        h = parseInt(h)
        herror.classList.remove('visible')
        hContainer.classList.remove('invalid')
    } else {
        hContainer.classList.add('invalid')
        herror.classList.add('visible')
        result = -1
    }
    if(bounce > 0 && bounce < 1){
        bounce = parseFloat(bounce)
        bounceContainer.classList.remove('invalid')
        bounceError.classList.remove('visible')
    } else {
        bounceContainer.classList.add('invalid')
        bounceError.classList.add('visible')
        result = -1
    }
    if(win < h && typeof(h) !== undefined){
        win = parseFloat(win)
        winContainer.classList.remove('invalid')
        winError.classList.remove('visible')
    } else {
        winContainer.classList.add('invalid')
        winError.classList.add('visible')
        result = -1
    }
    //Calcul du result avec une fonction recursive, j'aurai pu utiliser une boucle for
    if(result != -1){
        result  = numberOfPassage(1, h, win, bounce)
        resultContainer.innerHTML = `La mère verra la balle ${result} fois.`
    } else {
        resultContainer.innerHTML = `Le resultat est ${result}.`
    }
}

function numberOfPassage(compteur, hauteur, fenetre, rebond){
    hauteur *= rebond
    if(hauteur > fenetre){ 
        return numberOfPassage(compteur+2, hauteur, fenetre, rebond)
   } else {
        return compteur
   }
}
