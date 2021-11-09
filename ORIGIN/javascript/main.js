const linksSocialMedias = {
    github : 'LEXW3B',
    youtube : 'youtube',
    facebook : 'ALEXMANSON666/',
    instagram : 'alexmanson13/',
    twitter : 'alex79146823'
}

function changeSocialMediaLinks(){
    for(let li of socialLinks.children){
        const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com/${linksSocialMedias[social]}`
    }
}

changeSocialMediaLinks()


function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${linksSocialMedias.github}`

    fetch(url).then(Response => Response.json())/*fetch pegou a resposta da url e jogou pra promessa "then" que pegou e transformou em json*/
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userPhoto.src = data.avatar_url
        userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()





