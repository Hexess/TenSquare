<template>
<div class="wrapper tag-item"> 
   <div class="fl left-list"> 

    <div class="job-position"> 
     <div class="job-type reco-job"> 
      <div class="head"> 
       <h4 class="title pull-left">Recommend Positions</h4> 
       <span class="more pull-right"><a href="#">More jobs&nbsp;&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></a></span> 
       <div class="clearfix"></div> 
      </div> 
      <ul class="yui3-g job-list" style="display:block;"> 
       <li class="yui3-u-1-2 job-item" v-for="(item,index) in recommendList" :key="index"> 
         <p><span class="name">
           <nuxt-link :to="'/recruit/item/'+item.id">{{item.jobname}}</nuxt-link>
         </span><span class="city"><i class="fa fa-map-marker"></i> Los Angeles</span></p> <p class="need"><span class="money">{{item.salary}}</span>/{{item.condition}}/{{item.education}}/{{item.type}}</p> <p><span class="company">Google &middot; 6 days ago</span></p> 
      </li> 
       
      </ul> 
     </div> 
     <div class="job-type latest-job"> 
      <div class="head"> 
       <h4 class="title pull-left">New Positions</h4> 
       <span class="more pull-right"><a href="#">More jobs&nbsp;&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></a></span> 
       <div class="clearfix"></div> 
      </div> 
      <ul class="yui3-g job-list" style="display:block;"> 
       <li class="yui3-u-1-2 job-item" v-for="(item,index) in newList" :key="index"> <p>
         <span class="name"> 
           
           <nuxt-link :to="'/recruit/item/'+item.id">{{item.jobname}}</nuxt-link>
           </span><span class="city"><i class="fa fa-map-marker"></i> Los Angeles</span></p> <p class="need"><span class="money">{{item.salary}}</span>/{{item.condition}}/{{item.education}}/{{item.type}}</p> <p><span class="company">Google &middot; 6 days ago</span></p> </li> 
      
      </ul> 
     </div> 
    </div> 
   </div> 
   <div class="fl right-tag"> 
    <div class="hot-company"> 
     <!--<p class="mail">提交收录请发邮件至ccccccc@qq.com</p> -->
     <div class="company"> 
      <div class="head"> 
       <h4>Popular Enterprise</h4> 
      </div> 
      <ul class="yui3-g company" style="display:block;"> 
       <li class="yui3-u-1-3 company-item" v-for="(item,index) in hostList" :key="index"> 
         <p><img :src="item.logo" alt="" /></p> 
         <p class="title">{{item.name}}</p> <p class="position">
           <a href="~/assets/recruit-company.html" target="_blank">{{item.jobcount}} positions</a></p> </li> 
      
      </ul> 
     </div> 
    </div> 
   </div> 
   <div class="clearfix"></div> 
  </div> 
</template>
<script>
import '~/assets/css/page-sj-recruit-index.css'
import recruitApi from '@/api/recruit'
import enterpriseApi from '@/api/enterprise'
import axios from 'axios'
export default {    
  asyncData(){
    return axios.all([recruitApi.recommend(), recruitApi.newlist(),enterpriseApi.hotlist() ]).then(
      axios.spread( function( recommendList,newList ,hostList ){
        return {
          recommendList: recommendList.data.data,
          newList: newList.data.data,
          hostList: hostList.data.data
        }
      })
    )
  }
}
</script>


