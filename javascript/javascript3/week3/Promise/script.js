basicURL = 'https://api.github.com/search/repositories?q=user:'
const users = ['kfazinic' , 'gizemcandemir' , 'kamba'];

async function fetchData() {
    const response = await Promise.all([fetch(basicURL+users[1]) , fetch(basicURL+users[2]) , fetch(basicURL+users[3])])
    const usersGitInfo = [await response[0].json() , await response[1].json() , await response[2].json() ];
    console.log(usersGitInfo);
    usersGitInfo.forEach(usersGitInfo => {
        for( let i = 0 ; i < usersGitInfo.total_count ; i++){
            const repoName = document.createElement('p')
            repoName.textContent = `${usersGitInfo['items'][i]['owner']['login']} : ${usersGitInfo['items'][i]['name']}`;
            document.body.appendChild(repoName);
        }
    });

}

fetchData();

