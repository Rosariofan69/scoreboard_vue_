export class ControllerMethod {

    async test() {
        await fetch('/xlsx', {
              mode: 'cors',
              method: 'GET'
        })
        .then(res => res.json())
        .then(json => console.log(json))
    }
}