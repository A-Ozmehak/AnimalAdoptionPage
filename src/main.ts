const animalArray: string[] = ['Hebbe', 'Zaqi', 'Gizmo', 'Daizy']

const hebbeInfo: string[] = ['Namn: Hebbe', 'Ålder: 13år', 'Ras: Engelsk Cocker Spaniel',
    'Älskar att bara ta det lungt men njuter även väldigt mycket av sina promenader']
const zaqiInfo: string[] = ['Namn: Zaqi', 'Ålder: 2år', 'Ras: Blandning mellan Staffe/Boxer',
    'Älskar mys i soffan/sängen men blir lätt rastlös utan mycket aktivering och uppmärksamhet']
const gizmoInfo: string[] = ['Namn: Gizmo', 'Ålder: 13år', 'Ras: Staffe/Bullterrier',
    'Är världens gullegris som älskar att mysa på soffan och ta lugna promenader']
const daizyInfo: string[] = ['Namn: Daizy', 'Ålder: 3år', 'Ras: Staffe', `Daizy är en 3årig staffe som inte gillar att vara ensam och vill vara med överallt och behöver
mycket aktivering`]

window.addEventListener('load', main)

function main() {
    createHeaderElements()
    printAnimals()
    animalPictures()
    informationAboutTheDogs()
}

function createMainContainer() {
    let div = document.querySelector('#app')
    const mainElement = document.createElement('main')
    mainElement.className = 'main'
    div!.append(mainElement)
}


function createHeaderElements() {
    let div = document.querySelector('#app')
    const headerElement = document.createElement('header')
    headerElement.className = 'header'
    div!.append(headerElement)

    let titleName = document.createElement('h1')
    titleName.innerText = 'Animal Adoption'
    titleName.className = 'title'
    headerElement.append(titleName)
}

function printAnimals() {
    createMainContainer()

    let allAnimals = document.createElement('ul')
    allAnimals.innerText = ''
    allAnimals.className = 'ulElement'

    document.querySelector('main')!.append(allAnimals)

    animalArray.forEach((dogs) => {
        let listOfDogs = document.createElement('li')
        listOfDogs.innerText = dogs
        allAnimals.append(listOfDogs)
    })
}

function animalPictures() {
    let div = document.createElement('div')
    div.className = 'Img-container'

    let imgHebbe = new Image(300, 500)
    imgHebbe.src = './img/Hebbe.jpg'

    let imgZaqi = new Image(300, 500)
    imgZaqi.src = './img/Zaqi.jpg'

    let imgGizmo = new Image(430, 500)
    imgGizmo.src = './img/Gizmo&Daizy.jpg'

    let imgDaizy = new Image(250, 500)
    imgDaizy.src = './img/Daizy.jpg'

    document.querySelector('.main')!.append(div)
    div.append(imgHebbe, imgZaqi, imgGizmo, imgDaizy)
}


function informationAboutTheDogs() {
    let div = document.createElement('div')
    div.className = 'div-container'

    let hebbeElement = document.createElement('ul')

    hebbeInfo.forEach((hebbeDoggo) => {
        let dogInfo = document.createElement('li')
        dogInfo.innerText = hebbeDoggo
        document.querySelector('.main')!.append(div)
        hebbeElement.append(dogInfo)
    })

    let zaqiElement = document.createElement('ul')

    zaqiInfo.forEach((zaqiDoggo) => {
        let dogInfo = document.createElement('li')
        dogInfo.innerText = zaqiDoggo
        document.querySelector('.main')!.append(div)
        zaqiElement.append(dogInfo)
    })

    let gizmoElement = document.createElement('ul')

    gizmoInfo.forEach((gizmoDoggo) => {
        let dogInfo = document.createElement('li')
        dogInfo.innerText = gizmoDoggo
        document.querySelector('.main')!.append(div)
        gizmoElement.append(dogInfo)
    })

    let daizyElement = document.createElement('ul')

    daizyInfo.forEach((daizyDoggo) => {
        let dogInfo = document.createElement('li')
        dogInfo.innerText = daizyDoggo
        document.querySelector('.main')!.append(div)
        daizyElement.append(dogInfo)
    })
    div.append(hebbeElement, zaqiElement, gizmoElement, daizyElement)
}
