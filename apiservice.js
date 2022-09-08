let clientId= "client_id=273024f8cfdac581435e";
let clientSecretKey= "client_secret=3f491dad6ab9c144fddaf89b47944adfc2cc7c3c";
let url = 'https://api.github.com/users/';


let newHTML = `
                <div class="profile-data">

                <div class="search-box profile-details">

                    <div class="user-information">
                        <div class="display-picture">
                            <img class="dp" [src]="userInfo.avatar_url" alt="">
                        </div>
                        <button class="view-profile">

                            <a [href]="userInfo.html_url">
                                <img class="view-profile__icon" src="assets/github.png" alt="">
                            </a>
                        </button>
                    </div>

                    <div class="user-bio-info">

                        <div class="bio-info">
                            Name: ${userInfo.name}
                        </div>

                        <div class="bio-info">
                            Company: ${userInfo.company}
                        </div>

                        <div class="bio-info">
                            Email: ${userInfo.email}
                        </div>

                        <div class="bio-info">
                            Bio: ${userInfo.bio}
                        </div>

                        <div class="bio-info">
                            Location: ${userInfo.location}
                        </div>

                        <div class="bio-info">
                            Member Since: ${userInfo.created_at | date}
                        </div>

                        <div class="repos">
                            <div>Public Repository: ${userInfo.public_repos}</div>
                            <div>Public Gists: ${userInfo.public_gists}</div>
                            <div>Followers: ${userInfo.followers}</div>
                            <div>Following: ${userInfo.following}</div>
                        </div>

                    </div>
                    <!-- <pre>${userInfo | json}</pre> -->

                </div>

                </div>

                <div class="search-box repos-menu">

                <div class="reposTitle">
                    <div>
                        Repositories
                    </div>
                </div>

                <div class="list-repo">
                    <ng-container *ngFor="let repos of userRepos; index as i">

                        <mat-card class="repos-card">
                            <!-- card -->
                            <div class="repos-info">
                                <div class="information">
                                    <h3>Name: ${repos.name}</h3>
                                    <h3>Description: ${repos.description}</h3>
                                    <h3>Created at: ${repos.created_at | date}</h3>
                                    <h3>Updated at: ${repos.updated_at | date}</h3>
                                    <h3>Forks: ${repos.forks}</h3>
                                    <h3>Visibility: ${repos.visibility}</h3>
                                </div>

                                <div class="view-button">
                                    <a [href]="repos.html_url">
                                        <button>
                                            <div>View Repository</div>
                                        </button>
                                    </a>
                                </div>
                            </div>

                        </mat-card>

                    </ng-container>

                </div>

                </div>
                `;



var userInfo;

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

                        for(var i=0; i<userRepos.length; i++) {
                            // console.log(userRepos[i].name);
                            reposCards+=`
                            <div style="
                                height: 300px;
                                display: flex;
                                flex-direction: column;
                                justify-content: space-between">
                                <div style="
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    flex-direction: column">
                                    <h5>Name: ${userRepos[i].name}</h5>
                                    <h5>Description: ${userRepos[i].description}</h5>
                                    <h5>Created at: ${userRepos[i].created_at}</h5>
                                    <h5>Updated at: {${userRepos[i].updated_at}</h5>
                                    <h5>Forks: ${userRepos[i].forks}</h5>
                                    <h5>Visibility: ${userRepos[i].visibility}</h5>
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

                        console.log(reposCards)

                        console.log(userRepos);
                        console.log(userRepos.length);
                    })
                    .catch(err => {
                        console.log(err);
                    })

                console.log("info = ",userInfo);

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

                        <mat-card style="display: inline-block;
                        // padding: 0;
                        // flex-wrap: wrap;
                        margin-left: 0.5%;
                        margin-right: 0.5%;
                        margin-bottom: 20px;
                        // width: 19%;
                        height: 350px;
                        // display: flex ;
                        background-color: #F3F3F5;
                        padding: 15px;
                        border-radius: 5px;
                        ">
                        <!-- card -->
                        
                        ${reposCards}

                        </mat-card>

                    </ng-container>


                    <!-- {{i}} - > -->

                    <!-- <pre>{{item | json}}</h3re> -->
                    </div>

                </div>

                `
                    
                    
                if(data.message === 'Not Found') {
                    // show alert
                    ui.showAlert('user not found', 'alert alert-danger');
                } 
                
                else {
                    // show profile
                    userInfo=data;
                    // console.log(data);

                    

                    console.log(newHTML)
                    
                    
                    // document.getElementById("userInfoData").innerHTML = newHTML

                    

                    // console.log(document.getElementById("userInfoData").innerHTML);


                    // ui.showProfile(data);
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

    // console.log(userInfo)
}


