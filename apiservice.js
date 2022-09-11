let clientId= "client_id=273024f8cfdac581435e";
let clientSecretKey= "client_secret=3f491dad6ab9c144fddaf89b47944adfc2cc7c3c";
let url = 'https://api.github.com/users/';







var userInfo;


var reposListCards="";

function userReposList(userRepos)  {
    console.warn(userRepos)
    for(let i=0;i<userRepos.length;i++) {
        reposListCards+=`
        <div style="
            height: 400px;
            width: 24%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            // border: 1px solid black;
            background-color: #F3F3F5;
            border-radius: 5px;
            padding: 15px;
            margin-bottom: 15px;
            margin-left:.5%;
            margin-right:.5%;
            ">
            <div style="
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column">
                <p style="margin: 0; padding: 0;">Name: ${userRepos[i].name}</p>
                <p>Description: ${userRepos[i].description}</p>
                <p>Created at: ${userRepos[i].created_at}</p>
                <p>Updated at: {${userRepos[i].updated_at}</p>
                <p>Forks: ${userRepos[i].forks}</p>
                <p>Visibility: ${userRepos[i].visibility}</p>
            </div>

            <div class="view-button" fxLayoutAlign="center center" style="
                display: flex;
                justify-content: center;
                align-item: center;"
                >
                <a href="${userRepos[i].html_url}" >
                    <button style="
                    padding: 12px;
                    background-color: #E30F0F;
                    border-radius: 5px;">
                    <div >View Repository</div>
                    </button>
                </a>
            </div>
        </div>
        `
    }
    return reposListCards;
}


function searchUser() {
    let username = 'f';
    username = document.getElementById('searchTxt').value;
    console.log(username);


    if(username) {

        // document.getElementById("userInfoData").innerHTML = "<p>hello</p>"

        let userRepos;

        let reposCards;

        let searchProfileLink = url+username+'?'+clientId+'&'+clientSecretKey;

        console.log(searchProfileLink);

        fetch(`${url}${username}?${clientId}&${clientSecretKey}`)
            .then(response => response.json())
            .then(data => {
                
                userInfo = data;

                fetch(`${url}${username}/repos?${clientId}&${clientSecretKey}`)
                    .then(res => res.json())
                    .then(repos => {
                        userRepos=repos;

                        document.getElementById("userInfoData").innerHTML = `
                        <div style="
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            padding: 15px;
                            margin: 10px;
                            border-radius: 5px;
                            border: 1px solid accent;
                            box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);" >
        
                            <div>
        
                                <div style="
                                    display: flex;
                                    justify-content: center;
                                    flex-direction: column;">
                                    <div style="
                                        height: 155px; 
                                        width: 155px; 
                                        border-radius: 50%;
                                        border: 10px solid #E30F0F;
                                        display: flex;
                                        justify-content: center;
                                        align-items: center;">
        
                                        <img src="${userInfo.avatar_url}" alt="" style="
                                            height: 150px; 
                                            width: 150px; 
                                            object-fit: cover;
                                            border-radius: 50%;">
                                    </div>
        
                                    <button style="
                                        width:42px;
                                        height: 42px;
                                        border-radius: 50%;
                                        display: flex;
                                        align-items: center;
                                        justify-content: center">
        
                                        <a href="${userInfo.html_url}">
                                            <img class="view-profile__icon" src="assets/github.png" alt="" style="
                                                height: 30px;
                                                width: 30px;
                                                display: flex;
                                                justify-content: center;">
                                        </a>
                                    </button>
                                </div>
        
                            </div>
        
                            <div style="
                                display: flex;
                                justify-content: center;
                                text-align-center;
                                align-items-center;
                                flex-direction: column;
                                padding: 15px;
                                margin: 10px;
                                border-radius: 5px;
                                >
        
                                <div style="
                                    display: flex;
                                    justify-content: center;
                                    text-align-center;
                                    align-items-center;">
                                    Name: ${userInfo?.name}
                                </div>
        
                                <div style="
                                display: flex;
                                justify-content: center;
                                text-align-center;
                                align-items-center;">
                                    Company: ${userInfo?.company}
                                </div>
        
                                <div style="
                                display: flex;
                                justify-content: center;
                                text-align-center;
                                align-items-center;">
                                    Email: ${userInfo?.email}
                                </div>
        
                                <div style="
                                display: flex;
                                justify-content: center;
                                text-align-center;
                                align-items-center;">
                                    Bio: ${userInfo?.bio}
                                </div>
        
                                <div style="
                                display: flex;
                                justify-content: center;
                                text-align-center;
                                align-items-center;">
                                    Location: ${userInfo?.location}
                                </div>
        
                                <div style="
                                display: flex;
                                justify-content: center;
                                text-align-center;
                                align-items-center;">
                                    Member Since: ${userInfo?.created_at}
                                </div>
        
                                <div style="
                                    display: flex;
                                    justify-content: center;
                                    text-align-center;
                                    align-items-center;">
                                    <div style="
                                        margin: 10px;
                                        padding: 8px;
                                        border-radius: 5px;
                                        display: flex;
                                        justify-content: center;
                                        text-align-center;
                                        background-color: #E30F0F;
                                        color: white;
                                        align-items-center;"
                                    >Public Repository: ${userInfo.public_repos}</div>
                                    <div style="
                                    margin: 10px;
                                    padding: 8px;
                                    border-radius: 5px;
                                    display: flex;
                                    justify-content: center;
                                    text-align-center;
                                    background-color: #E30F0F;
                                    color: white;
                                    align-items-center;">Public Gists: ${userInfo.public_gists}</div>
                                    <div style="
                                    margin: 10px;
                                    padding: 8px;
                                    border-radius: 5px;
                                    display: flex;
                                    justify-content: center;
                                    text-align-center;
                                    background-color: #E30F0F;
                                    color: white;
                                    align-items-center;">Followers: ${userInfo.followers}</div>
                                    <div style="
                                    margin: 10px;
                                    padding: 8px;
                                    border-radius: 5px;
                                    display: flex;
                                    justify-content: center;
                                    text-align-center;
                                    background-color: #E30F0F;
                                    color: white;
                                    align-items-center;">Following: ${userInfo.following}</div>
                                </div>
                                
        
                            </div>
        
                            
        
                        </div>
        
        
        
                        <div style="padding: 15px;
                        margin: 10px;
                        border-radius: 5px;
                        border: 1px solid accent;
                        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);">
        
        
                            <div class="reposTitle" >
                            <div style="
                                font-size: 20px;
                                margin-bottom: 20px;
                                height: 40px;
        
                                background: rgb(217,218,223);
                                background: linear-gradient(90deg, rgba(217,218,223,1) 0%, rgba(217,218,223,1) 30%, rgba(255,255,255,1) 79%);
                                display: flex;
                                align-items: center;
                                
                                ">
                                Repositories
                            </div>
                            </div>
        
                            <div class="list-repo" fxLayout="row"  fxLayoutAlign="start" fxLayoutWrap >
                            <!-- <pre>{{userRepos[0] | json}}</pre> -->
                            <ng-container *ngFor="let repos of userRepos; index as i">
        
                                <div style="
                                
                                display: flex;
                                // justify-content: space-between;
                                align-items: center;
                                justify-content: center
                                margin-left: 0.5%;
                                margin-right: 0.5%;
                                margin-bottom: 20px;
                                background-color: #FFFFF;
                                padding: 15px;
                                border-radius: 5px;
                                flex-wrap: wrap;
                                ">
                                <!-- card -->
                                
                                

                                ${userReposList(userRepos)}
        
                                </div>
        
                            </ng-container>
        
        
                            <!-- {{i}} - > -->
        
                            <!-- <pre>{{item | json}}</h3re> -->
                            </div>
        
                        </div>
        
                        `

                        console.log(userRepos);
                        console.log(userRepos.length);
                    })
                    .catch(err => {
                        console.log(err);
                    })

                console.log("info = ",userInfo);

                
                    
                    
                if(data.message === 'Not Found') {
                    // show alert
                    ui.showAlert('user not found', 'alert alert-danger');
                } 
                
                else {
                    // show profile
                    userInfo=data;

                }
            })
            .catch(err => {
                console.log(err);
            })
    } 
    else {

        delete userInfo;
        ui.clearProfile();

    }

}


