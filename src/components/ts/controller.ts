export class ControllerMethod {
    // テスト
    async test() {
        
        await fetch('/xlsx', {
              mode: 'cors',
              method: 'GET'
        })
        .then(res => res.json())
        .then(json => console.log(json))
    }
}