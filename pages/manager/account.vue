<template>
    <div class="home-content"> 
    
     <div class="activities account-type"> 
      <h4 class="tit"><span>Settings</span></h4> 
        <div class="account-main">
        	
   
	      <div class="account-person"> 
	       <h3>Account</h3> 
	       <ul class="account-info"> 
	        <li> <span class="gray index">Name</span> 
			 <span class="info" v-show="!name_input">{{user.nickname}}</span> 
	         <form  v-show="name_input"> 
	          <input type="text" placeholder="Enter your name" v-model="user.nickname" /> 
	          <button type='button' class="sui-btn btn-danger save-btn" @click="saveinfo_name()">Save</button> 
			  <button type='button' class="sui-btn btn-danger save-btn" @click="name_input=false" >Cancel</button> 
	         </form> <span class="gray edit"><a class="fa fa-pencil" aria-hidden="true" @click="name_input=true">Edit</a> </span> </li> 
	        
	        <li> <span class="gray index">Email </span> <span class="info">{{user.email}}</span> 
	         <form  class="sui-form form-inline"> 
	          <input type="email" placeholder="Enter your Email" /> 
	          <button class="sui-btn btn-danger save-btn">Save</button> 
	         </form> <span class="gray edit"><a class="fa fa-pencil" @click="test" aria-hidden="true">Edit</a> </span> </li> 
	        <li> <span class="gray index">Phone </span> <span class="info">{{user.mobile}}</span> 
	         <form class="sui-form form-inline"> 
	          <input type="phone" placeholder="Enter your phone number" /> 
	          <button class="sui-btn btn-danger save-btn">Save</button> 
	         </form> <span class="gray edit"><a class="fa fa-pencil" aria-hidden="true">Edit</a> </span> </li> 
	        <li> <span class="gray index">Password </span> <span class="info">Click to change your password</span> 
	         <form class="sui-form form-inline"> 
	          <input type="password" placeholder="Enter new password" /> 
	          <button class="sui-btn btn-danger save-btn">Save</button> 
	         </form> <span class="gray edit"><a class="fa fa-pencil" aria-hidden="true">Edit</a> </span> </li> 
	       </ul> 
	      </div> 
	      <div class="account-other"> 
	       <h3>Other accounts</h3> 
	       <ul class="account-info"> 
	        <li> <span class="gray index"><img src="~/assets/img/widget-weixin.png" width="27" /> Google </span> <span class="name">binded, click to cancel</span> <span class="gray check"><i class="fa fa-square-o" aria-hidden="true"></i> public</span> </li> 
	        <li> <span class="gray index"><img src="~/assets/img/widget-QQ.png" width="25" /> Twitter </span> <span class="name bind">bind this account</span> <span class="gray check"><i class="fa fa-square-o" aria-hidden="true"></i> public</span> </li> 
	        <li> <span class="gray index"><img src="~/assets/img/widget-weibo.png" width="35" /> Facebook </span> <span class="name">binded, click to cancel</span> <span class="gray check"><i class="fa fa-square-o" aria-hidden="true"></i> public</span> </li> 
	       </ul> 
	      </div> 
	     </div>
     
     </div> 
    </div> 

</template>
<script>
import '~/assets/css/page-sj-person-account.css'
import userApi from '@/api/user'
import {getUser} from '@/utils/auth'
import axios from 'axios'
export default {	
	/*asyncData(){
		return userApi.info().then(  res=>{
			return {user: res.data.data }
		})
	},*/
	data(){
		return {
			user:{},
			name_input: false
		}
	},
	created(){
		userApi.info().then( res=> {
			this.user=res.data.data
		})
	},
	methods:{
		saveinfo_name(){
			userApi.saveinfo( { 'nickname': this.user.nickname } ).then( res=> {
				this.name_input=false
			})
		},
		test(){
			axios.get('http://127.0.0.1:8888/?code=1213132131').then( res=>{
				alert( JSON.stringify(res.data) )
			})
		}
	}
}
</script>
