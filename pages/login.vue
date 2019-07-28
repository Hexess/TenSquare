<template>
      <div class="wrapper loginsign"> 
   <div class="item signup"> 
    <div class="form"> 
     <div class="loginsign-title"><img src="~/assets/img/signup.png" width="100px"/></div> 
     <form class="sui-form"> 
      <div class="control-group"> 
       <label for="inputname" class="control-label">Name</label> 
       <div class="controls"> 
        <input type="text" id="inputname" v-model="pojo.nickname" placeholder=" Enter your name" class="input-xlarge" /> 
       </div> 
      </div> 
      <div class="different"> 
       <div class="radio-content"> 
        <div id="a1" class="phone"> 
         <div class="control-group number"> 
          <input type="text" v-model="pojo.mobile" placeholder=" Enter your phone number" class="input-xlarge" /> 
         </div> 
         <div class="control-group code"> 
          <div class="input-append"> 
           <input id="appendedInputButton" v-model="code" type="text" placeholder=" Enter the code sent to your phone" class="span2 input-large msg-input" /> 
           <button type="button" @click="sendsms" class="sui-btn msg-btn">Send message</button> 
          </div> 
         </div> 
         <div class="control-group"> 
          <label for="inputpassword" class="control-label">Password</label> 
          <div class="controls"> 
           <input type="text" id="inputpassword"  v-model="pojo.password" placeholder=" Enter your password longer than 6 digits" class="input-xlarge" /> 
          </div> 
         </div> 
        </div> 
       </div> 
      </div> 
      <div class="control-group btn-signup"> 
       <label class="control-label"></label> 
       <div class="controls"> 
        <label> <input type="checkbox" /><span class="type-text" style="font-size:12px;"> I agree to the terms and conditions</span> </label> 
        <button type="button" class="sui-btn btn-danger btn-yes" @click="register()">Register</button> 
       </div> 
      </div> 
     </form> 
    </div> 
   </div> 
   <div class="item"> 
    <div class="form"> 
     <div class="loginsign-title"><img src="~/assets/img/signin.png" width="100px"/></div> 
     <form class="sui-form login-form"> 
      <div class="control-group"> 
       <label for="inputname" class="control-label">Phone: </label> 
       <div class="controls"> 
        <input type="text" id="inputname" v-model="mobile" placeholder=" Enter your phone number" class="input-xlarge" data-rules="required" /> 
       </div> 
      </div> 
      <div class="control-group"> 
       <label for="inputpassword" class="control-label">Password: </label> 
       <div class="controls"> 
        <input type="text" id="inputpassword" v-model="password" placeholder=" Enter the password" class="input-xlarge" /> 
       </div> 
      </div> 
      <div class="controls"> 
       <label> <input type="checkbox" name="remember-me" /><span class="type-text" style="font-size:12px;"> Remember me</span> </label> 
       <button type="button" class="sui-btn btn-danger btn-yes" @click="login" >Login</button> 

      </div> 
     </form> 
    </div> 
   </div> 
  </div>   
</template>

<script>
import '~/assets/css/page-sj-person-loginsign.css'
import userApi from '@/api/user'
import {setUser,getUser} from '@/utils/auth'
export default {
    
    data(){
      return {
        pojo: {},
        code: '',
        mobile: '',
        password: ''
      }
    },
    methods: {
      sendsms(){
        userApi.sendsms( this.pojo.mobile ).then(res => {       
          this.$message({
            message: res.data.message,
            type: (res.data.flag?'success':'error')
          })      
        })
      },
      register(){
        userApi.register( this.pojo, this.code ).then( res=> {
          this.$message({
            message: res.data.message,
            type: (res.data.flag?'success':'error')
          }) 
        })
      },
      login(){
        userApi.login(this.mobile,this.password ).then( res=> {
          if(res.data.flag){
            //save users infomation
            setUser(res.data.data.token, res.data.data.name, res.data.data.avatar)
           
            location.href='/manager' //users c Enter            
            
          }else{
            this.$message( {
              message: res.data.message,
              type: "error"
            })
            this.mobile=''
            this.password=''
          }
        })
      }
    }
}
</script>
