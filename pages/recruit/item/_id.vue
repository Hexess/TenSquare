<template>
      <div class="wrapper tag-item"> 
   <div class="job-intro"> 
    <div class="left-img"> 
     <img :src="enterprise_item.logo" alt="" /> 
    </div> 
    <div class="middle-intro"> 
     <div class="name">
      {{item.jobname}} &middot; {{enterprise_item.name}}
     </div> 
     <div class="intro">
      {{item.salary}} / {{item.condition}} / {{item.education}} / {{item.type}}
     </div> 
     <div class="tag"> 
      <li>Android</li>
      <li>Java</li>
      <li>UI</li>
      <li>Software</li>
      <li>Python</li> 
     </div> 
    </div> 
    <div class="right-tool"> 
     <p class="throw"><button class="sui-btn btn-throw">Apply it</button></p> 
     <p class="collect"><button class="sui-btn btn-collect" >Favorite</button></p> 
     <br/>
     <span>100 <img src="~/assets/img/like--v1.png" height="20px" width="20px"/></span> 
     <span>291 <img src="~/assets/img/reading-512.png" height="20px" width="20px"/></span> 
    </div> 
    <div style="clear:both"></div> 
   </div> 
   <div class="fl left-list "> 
    <div class="tit"> 
     <span>Overview</span> 
    </div> 
    <div class="content">
      <p v-for="(content,index) in item.content1.split('#')" :key="index">{{content}}</p>
    </div> 
    <div class="tit"> 
     <span>Requirement</span> 
    </div> 
    <div class="content"> 
     <li v-for="(content,index) in item.content2.split('#')" :key="index">{{content}}</li>
     
    </div> 
    <div class="time">
     post 1 hour ago
    </div> 
   </div> 
   <div class="fl right-tag"> 
    <div class="company-job"> 
     <div class="intro"> 
      <img :src="enterprise_item.logo" alt="" /> 
      <div class="title">
       <b>{{enterprise_item.name}}</b>
      </div> 
      <div class="content">
       {{enterprise_item.summary}}
      </div> 
     </div> 
     <div class="tag"> 
      <li v-for="(label,index) in enterprise_item.labels.split(',')" :key="index">{{label}}</li> 
     </div> 
     <div class="btns"> 
      <a class="sui-btn btn-home" :href="enterprise_item.url" target="_blank">Website</a> 
      <a class="sui-btn btn-position" href="~/assets/recruit-job.html" target="_blank">{{enterprise_item.jobcount}} positions</a> 
     </div> 
    </div> 
   </div> 
  </div> 
</template>
<script>
import '~/assets/css/page-sj-recruit-detail.css'
import recruitApi from '@/api/recruit'
import enterpriseApi from '@/api/enterprise'
export default {
    asyncData({params}){
      return recruitApi.findById(params.id ).then( res =>{        
        return enterpriseApi.findById( res.data.data.eid ).then( 
          res2=>{
            return {
              enterprise_item: res2.data.data,
              item:res.data.data
            }
          }
        )
      })
    }
}
</script>
