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

    fetch(url).then(Response =>)


    
}
// getGitHubProfileInfos()




//1:01:24
