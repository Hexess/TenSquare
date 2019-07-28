<template>
    <div>
        <div class="myhome-personinfo" style="background-color:#AEDD81"> 
            <div class="wrapper"> 
                <div class="person-baseinfo"> 
                <!--avatar info--> 
                <div class="photo"> 
                <img src="~/assets/img/widget-dating04.png" alt="" class="person" /> 
                <div class="share"> 
                <span><img src="~/assets/img/widget-weixin.png" alt="" width="30" height="28" /></span> 
                <span><img src="~/assets/img/widget-QQ.png" alt="" width="27" height="28" /></span> 
                <span><img src="~/assets/img/widget-weibo.png" alt="" width="35" height="28" /></span> 
                </div> 
                </div> 
                <!--text info--> 
                <div class="info"> 
                <h1>Koko<span class="allinfo"><a href="~/assets/person-myfile.html" target="_blank">Manage your profile</a></span></h1> 
                <ul class="fill"> 
                <li> <i class="fa fa-map-marker" aria-hidden="true"></i> <span class="edit-item"> Add your city</span> 
                    <form action="" class="sui-form form-inline"> 
                    <input type="text" placeholder="Enter your current city" /> 
                    <button class="sui-btn btn-danger save-btn">Save</button> 
                    </form> </li> 
                <li> <i class="fa fa-graduation-cap" aria-hidden="true"></i> <span class="edit-item"> Add your school</span> 
                    <form action="" class="sui-form form-inline"> 
                    <input type="text" placeholder="Enter your school name" /> 
                    <input type="text" placeholder="Major" /> 
                    <button class="sui-btn btn-danger save-btn">Save</button> 
                    </form> </li> 
                <li> <i class="fa fa-shopping-bag" aria-hidden="true"></i> <span class="edit-item"> Add your company</span> 
                    <form action="" class="sui-form form-inline"> 
                    <input type="text" placeholder="Company Name" /> 
                    <input type="text" placeholder="Profession Title" /> 
                    <button class="sui-btn btn-danger save-btn">Save</button> 
                    </form> </li> 
                <li> <i class="fa fa-link" aria-hidden="true"></i> <span class="edit-item"> Add your personal website</span> 
                    <form action="" class="sui-form form-inline"> 
                    <input type="text" placeholder="Personal Website" /> 
                    <button class="sui-btn btn-danger save-btn">Save</button> 
                    </form> </li> 
                </ul> 
                </div> 
                </div> 
                <!--right div--> 
                <div class="edit-info"> 
                <h4>Profile<span class="addedit"><img src="~/assets/img/widget-edit.png" width="12" height="12" />Edit</span></h4> 
                <div class="info-box"> 
                <div class="edit-intro">
                 <p>Hi, I'm Koko, one is studying Computer Science in USC.</p>
                 <p>I like coding, lifting, cooking and reading! If you are also interested in such things, leave me a message and maybe we can have some coffee one day!</p>  
                </div> 
                </div> 
                </div> 
                <div class="clearfix"></div> 
            </div> 
        </div> 
        <div class="wrapper  myhome"> 
            <div class="left-list"> 
                <div class="myhome-list"> 
                <ul class="home-list"> 
                <router-link to="/manager" tag="li" active-class="active" exact><a>My Page</a></router-link>
                <router-link to="/manager/myanswer" tag="li" active-class="active"><a>My Answers</a></router-link>
                <router-link to="/manager/myquestion" tag="li" active-class="active"><a>My Questions</a></router-link>
                <router-link to="/manager/myshare" tag="li" active-class="active"><a>My Shares</a></router-link>
                </ul> 
                <ul class="home-list bottom"> 
                <router-link to="/manager/dynamic" tag="li" active-class="active"><a>Posts</a></router-link>
                <router-link to="/manager/myfocus" tag="li" active-class="active"><a>Following</a></router-link>
                <router-link to="/manager/mycollect" tag="li" active-class="active"><a>Favorites</a></router-link>
                <router-link to="/manager/myreaded" tag="li" active-class="active"><a>History</a></router-link>
                <router-link to="/manager/account" tag="li" active-class="active"><a>Settings</a></router-link>            
                </ul> 
                </div> 
            </div> 
            <div class="right-content"> 
                <nuxt-child/>
            </div> 
            <div class="clearfix"></div> 
        </div> 
    </div>
</template>
<script>
import '~/assets/css/page-sj-person-homepage.css'
import {getUser} from '@/utils/auth'
export default {
    created(){
        if(getUser().name===undefined){
            this.$router.push('/login')
        }
    }
}
</script>
