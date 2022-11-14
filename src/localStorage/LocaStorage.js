export default function LocalStorageSet(){
    let data = ['dataBacklog', 'dataReady', 'dataInProgress', 'dataFinished']
    data.forEach(element => {
        if (JSON.parse(localStorage.getItem(element)) === null) {
            localStorage.setItem(element, JSON.stringify([]))
        }
    });
}