export default class DataHora {

    constructor(
        private elementData = document.querySelector('#datetime > div:nth-child(2)'),
        private elementHora = document.querySelector('#datetime time')
    ) {

    }
}