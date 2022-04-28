                                 //Modelando informacion de repo
const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())
                                     //Modelando informacion de issue
   const issue = {
     title: "Practica",
     repositoryNameAssociated: "playbook",
     status: "Up to date",
     numberOfComments: 10,
     labels: 2,
     author: "JoseAnayaR",
     dateCreated: "13 de Abril",
     lastUpdated: "27 de Abril",
     getTitleAndAuthor: function(){
       return "El titulo es " + this.title + "\n" + "El autor es" + this.author
     },
     getGeneralInfo: function() {
       return `El repositorio "${this.title}" fue creado el ${this.dateCreated} contiene ${this.numberOfComments} comentarios y su autor es ${this.author}`
     }
   }
    console.log(issue.getTitleAndAuthor())
    console.log(issue.getGeneralInfo())
                                //Modelando informacion de Pull Request
    
    const pullRequest = {
      title: "PrimerPR",
      branchName: "Secundaria",
      dateCreated: "27 de Abril",
      status: "Falta hacer commit",
      repositoryNameAssociated: "CarloGilmar",
      getStatus: function() {
        return this.status
      },
      getTitleAndAuthor: function() {
        return `El titulo es ${this.title} y el autor es ${repo.author}`
      }
    }

    console.log(pullRequest.getStatus())
    console.log(pullRequest.getTitleAndAuthor())


                                      //Modelando informacion facebook
    const facebook = {
      user: "Jose Anaya",
      username:"Joseanayar",
      numberOfPost:500,
      photos:150,
      taggedPhotos:50,
      totalPhotos: function(){
        return this.photos + this.taggedPhotos
      }
    }

    console.log(`El numero total de fotos del usuario es: ${facebook.totalPhotos()}`)
    console.log(`El usuario ${facebook.user} ha realizado un total de ${facebook.numberOfPost} publicaciones`)