class twitter {
    constructor (user, trending_topic, hashtag){
        this.user = user
        this.trending_topic = trending_topic
        this.hashtag = hashtag
    }
        getInfo(){
            return `Mi perfil en Twitter es ${this.user} los trending topic hoy son: ${this.trending_topic} los hashtags de hoy son: ${this.hashtag}`
        }
    
}
const myTwitter = new twitter("JoseAnayaR", ["Lenny Kravitz", "Mixcoac", "Amber Heard"], ["#420day ", " #CEANiegaAguaEnQro "] )
console.log(myTwitter.getInfo())