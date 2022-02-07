"use strict";
var animalArray = ['Hebbe', 'Zaqi', 'Gizmo', 'Daizy'];
var hebbeInfo = ['Namn: Hebbe', 'Ålder: 13år', 'Ras: Engelsk Cocker Spaniel',
    'Älskar att bara ta det lungt men njuter även väldigt mycket av sina promenader'];
var zaqiInfo = ['Namn: Zaqi', 'Ålder: 2år', 'Ras: Blandning mellan Staffe/Boxer',
    'Älskar mys i soffan/sängen men blir lätt rastlös utan mycket aktivering och uppmärksamhet'];
var gizmoInfo = ['Namn: Gizmo', 'Ålder: 13år', 'Ras: Staffe/Bullterrier',
    'Är världens gullegris som älskar att mysa på soffan och ta lugna promenader'];
var daizyInfo = ['Namn: Daizy', 'Ålder: 3år', 'Ras: Staffe', "Daizy \u00E4r en 3\u00E5rig staffe som inte gillar att vara ensam och vill vara med \u00F6verallt och beh\u00F6ver\nmycket aktivering"];
window.addEventListener('load', main);
function main() {
    createHeaderElements();
    printAnimals();
    animalPictures();
    informationAboutTheDogs();
}
function createMainContainer() {
    var div = document.querySelector('#app');
    var mainElement = document.createElement('main');
    mainElement.className = 'main';
    div.append(mainElement);
}
function createHeaderElements() {
    var div = document.querySelector('#app');
    var headerElement = document.createElement('header');
    headerElement.className = 'header';
    div.append(headerElement);
    var titleName = document.createElement('h1');
    titleName.innerText = 'Animal Adoption';
    titleName.className = 'title';
    headerElement.append(titleName);
}
function printAnimals() {
    createMainContainer();
    var allAnimals = document.createElement('ul');
    allAnimals.innerText = '';
    allAnimals.className = 'ulElement';
    document.querySelector('main').append(allAnimals);
    animalArray.forEach(function (dogs) {
        var listOfDogs = document.createElement('li');
        listOfDogs.innerText = dogs;
        allAnimals.append(listOfDogs);
    });
}
function animalPictures() {
    var div = document.createElement('div');
    div.className = 'Img-container';
    var imgHebbe = new Image(300, 500);
    imgHebbe.src = './img/Hebbe.jpg';
    var imgZaqi = new Image(300, 500);
    imgZaqi.src = './img/Zaqi.jpg';
    var imgGizmo = new Image(430, 500);
    imgGizmo.src = './img/Gizmo&Daizy.jpg';
    var imgDaizy = new Image(250, 500);
    imgDaizy.src = './img/Daizy.jpg';
    document.querySelector('.main').append(div);
    div.append(imgHebbe, imgZaqi, imgGizmo, imgDaizy);
}
function informationAboutTheDogs() {
    var div = document.createElement('div');
    div.className = 'div-container';
    var hebbeElement = document.createElement('ul');
    hebbeInfo.forEach(function (hebbeDoggo) {
        var dogInfo = document.createElement('li');
        dogInfo.innerText = hebbeDoggo;
        document.querySelector('.main').append(div);
        hebbeElement.append(dogInfo);
    });
    var zaqiElement = document.createElement('ul');
    zaqiInfo.forEach(function (zaqiDoggo) {
        var dogInfo = document.createElement('li');
        dogInfo.innerText = zaqiDoggo;
        document.querySelector('.main').append(div);
        zaqiElement.append(dogInfo);
    });
    var gizmoElement = document.createElement('ul');
    gizmoInfo.forEach(function (gizmoDoggo) {
        var dogInfo = document.createElement('li');
        dogInfo.innerText = gizmoDoggo;
        document.querySelector('.main').append(div);
        gizmoElement.append(dogInfo);
    });
    var daizyElement = document.createElement('ul');
    daizyInfo.forEach(function (daizyDoggo) {
        var dogInfo = document.createElement('li');
        dogInfo.innerText = daizyDoggo;
        document.querySelector('.main').append(div);
        daizyElement.append(dogInfo);
    });
    div.append(hebbeElement, zaqiElement, gizmoElement, daizyElement);
}
//# sourceMappingURL=main.js.map