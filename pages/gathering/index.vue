<template>
<div class="wrapper activities"> 
   <div class="activity-card-list"> 
    <div class="top-title"> 
     <h4 class="latest">New Activity</h4>      
     <div class="clearfix"></div> 
    </div> 
    <div class="activity-list" v-infinite-scroll="loadMore"> <!--v-infinite-scroll="loadMore"-->
     <ul class="activity"> 
      <li class="activity-item" v-for="(item,index) in items" :key="index"> 
       <div class="activity-inner"> 
        <a href="http://"></a> 
        <div class="img">
         <a :href="'/gathering/item/'+item.id" target="_blank"><img :src="item.image" alt="" /></a>
        </div> 
        <div class="text"> 
         <p class="title">{{item.name}}</p> 
         <div class="fl goin"> 
          <p>Date：{{item.start_date}}</p> 
          <p>City：{{item.city}}</p> 
         </div> 
         <div class="fr btn"> 
          <span class="sui-btn btn-bao">Sign up</span> 
         </div> 
         <div class="clearfix"></div> 
        </div> 
       </div> </li> 

     </ul> 
    </div> 
   </div> 
  </div> 
</template>
<script>
import '~/assets/css/page-sj-activity-index.css'
import gatheringApi from '@/api/gathering'

export default {
    data(){
      return {
        pageNo: 1
      }
    },
    asyncData(){
      return  gatheringApi.search(1,12,{state:'1'}).then( res => {
          return {items: res.data.data.rows }
       })
    },
    methods: {
      loadMore(){
        this.pageNo++
        gatheringApi.search(this.pageNo,12,{state:'1'}).then( res => {
          this.items = this.items.concat( res.data.data.rows )
        })
      }
    }
}
</script>

