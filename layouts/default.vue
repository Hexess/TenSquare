<template>
  <div>
      <header>
        <div class="wrapper"> 
        <div class="sui-navbar"> 
            <div class="mylogo"><a href="index-logined.html" class="sui-brand"><img src="~/assets/img/asset-logo-black.png" alt="Social"/></a> </div>
            <div class="navbar-inner"> 
            <ul class="sui-nav"> 
                <router-link tag="li" to="/" active-class="active" exact><a>Homepage</a></router-link>
                <router-link tag="li" to="/qa" active-class="active"><a>Questions</a></router-link>
                <router-link tag="li" to="/gathering" active-class="active"><a>Activity</a></router-link>
                <router-link tag="li" to="/friend" active-class="active"><a>Friends</a></router-link>
                <router-link tag="li" to="/spit" active-class="active"><a>BBS</a></router-link>
                <router-link tag="li" to="/recruit" active-class="active"><a>Career</a></router-link>

            </ul> 
            <form class="sui-form sui-form pull-left"> 
                <input type="text" placeholder="Enter the key words"/> 
                <span class="btn-search fa fa-search"></span> 
            </form> 
            <div class="sui-nav pull-right info" v-if="user.name!==undefined"> 
                <li><a href="~/assets/other-notice.html" target="_blank" class="notice"><img src="~/assets/img/message.png" alt="message" height="20px" width="20px"/></a>
                </li> 
               <!-- <li><a @click="logout" class="notice">Log out</a></li> -->
                <el-popover ref="popover1" placement="bottom" width="210" trigger="hover">
                        <div class="personal-info">
                            <img :src="user.avatar" :alt="user.name" width="70px" height="70px"/>
                        </div>
                        <div class="personal-info">
                            <el-button type="text" @click="privatePage" class="notice" >{{user.name}}</el-button>
                            <el-button type="text" @click="logout" class="notice" >Log out</el-button>
                        </div>
              </el-popover>
                <li v-popover:popover1><a href="/manager" class="homego"><img :src="user.avatar" :alt="user.name" width="40px" height="40px"/></a></li>
                <!--<li><a href="/manager" class="notice">{{user.name}}</a></li>-->
            </div> 
            <div class="sui-nav pull-right info" v-if="user.name===undefined"> 
                <router-link to="/login"><h4>Login</h4></router-link>
             </div>
            <!--<div class="sui-nav pull-right info" v-if="user.name!==undefined"> 
              <li><a href="/manager" class="notice">{{user.name}}</a></li>     
              <li><a @click="logout" class="notice">log out</a></li>            
              <li><a href="/manager"  class="homego"><img :src="user.avatar" width="50px" height="50px" :alt="user.name" /></a></li> 
            </div> -->
            </div> 
            </div> 
        </div>
        </header>
        <nuxt/>
      <footer>
        <div class="footer"> 
        <div class="wrapper"> 
            <div class="footer-bottom"> 
            <div class="link"> 
            <dl> 
            <dt>
                About Website
            </dt> 
            <dd>
                About us
            </dd> 
            <dd>
                Terms and Conditions
            </dd> 
            <dd>
                Customer Service
            </dd> 
            <dd>
                Editor Grammar
            </dd> 
            </dl> 
            <dl> 
            <dt>
                Common Links
            </dt> 
            <dd>
                Google
            </dd> 
            <dd>
                Bing
            </dd> 
            </dl> 
            <dl> 
            <dt>
                Contact us
            </dt> 
            <dd>
                Contact us
            </dd> 
            <dd>
                Join us
            </dd> 
            <dd>
                Feedback
            </dd> 
            </dl> 
            <dl> 
            <dt>
                Follow us
            </dt> 
            <dd>
                Facebook
            </dd> 
            <dd>
                Twitter
            </dd> 
            </dl> 
            <div class="xuke"> 
            <h3>Licenses</h3> 
        
            <p>Author: Koko Li</p> 
            </div> 
            </div> 
            <p class="Copyright">Copyright &copy; 2019 Ten Square Edition 1.0.1</p> 
            </div> 
        </div> 
        </div> 
      </footer>
  </div>
</template>
<script>
import '~/assets/plugins/normalize-css/normalize.css'
import '~/assets/plugins/yui/cssgrids-min.css'
import '~/assets/plugins/sui/sui.min.css'
import '~/assets/plugins/sui/sui-append.min.css'
import '~/assets/plugins/font-awesome/css/font-awesome.min.css'
import '~/assets/css/widget-base.css'
import '~/assets/css/widget-head-foot.css'
import {getUser,removeUser} from '@/utils/auth'
export default {
    data(){
        return {
            user: {}
        }
    },
    created(){
        this.user= getUser()
    },
    methods: {
        logout(){
            removeUser()
            location.href='/'
        },
        privatePage(){
            //this.router.push('/manager')
            location.href='/manager'
        }
    }
}
</script>
