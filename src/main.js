class App {
    constructor(){
        this.repositories = []
        this.formEl = document.getElementById('repo-input');
        this.registerHandlers();
    }

    registerHandlers(){
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    addRepository(event){
        event.preventDefault();
        this.repositories.push({
            name: 'ES6 github challenge',
            description: 'Challenge Using Github API with ES6',
            avatar_url: 'https://avatars0.githubusercontent.com/u/17631281?v=4',
            html_url: 'https://github.com/flgomes94/es6-github-challenge'
        });
        console.log(this.repositories);
    }
}

new App();