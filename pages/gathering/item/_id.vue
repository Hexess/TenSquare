<template>
  <div class="wrapper activities"> 
   <h1>{{item.name}}</h1> 
   <div class="img-text"> 
    <div class="left-img"> 
     <img :src="item.image" alt="" /> 
    </div> 
    <div class="right-txt"> 
     <p>Start Time： {{item.start_date}}</p> 
     <p>End Time： {{item.end_date}}</p> 
     <p>Address： {{item.address}}</p> 
     <p>Host：{{item.sponsor}}</p> 
     <p>Enroll Before：{{item.enroll_date}} 
     <div class="join"> 
      <button class="sui-btn btn-danger">Register</button> 
      <span class="will">Registration will open soon</span> 
     </div> 
    </div> 
   </div> 
   <div class="simple-text"> 
    <div class="left-content"> 
     <div class="content-item"> 
      <div class="tit">
       <span>Introduction</span>
      </div> 
      <div class="text"> 
       <h4></h4> 
       <p>{{item.summary}}</p> 
      </div> 
     </div> 
     <div class="content-item"> 
      <div class="tit">
       <span>Topic Summary</span>
      </div> 
      <div class="text"> 
       <h4></h4> 
       <p>{{item.detail}}</p> 
      </div> 
     </div> 
    </div> 
    <div class="right-intro"> 
     <div class="content-item"> 
      <div class="tit">
       <span>Activity Hosts</span>
      </div> 
      <div class="text"> 
       <p>Host： {{item.sponsor}}</p> 
      </div> 
     </div> 
     <div class="content-item"> 
      <div class="tit">
       <span>Related Links</span>
      </div> 
      <div class="text"> 
       <p>Website：www. google. com</p> 
      </div> 
     </div> 
     <div class="content-item"> 
      <div class="tit">
       <span>Share</span>
      </div> 
      <div class="share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button" data-size="large">
        <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">
        <img src="~/assets/img/widget-weibo.png" width="40px"/></a></div>
      <div class="share-button"><a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=Come%20and%20join%20us!" data-size="large">
                <img src="~/assets/img/widget-QQ.png" width="30px"/>
            </a></div>
     </div> 
    </div> 
   </div> 
  </div> 
</template>
<script>
import "~/assets/css/page-sj-activity-detail.css"
import gatheringApi from '@/api/gathering'
export default {
    asyncData( {params} ){ 
        return gatheringApi.findById(params.id).then(res=>{
            return {item: res.data.data}
        })
    }
}
</script>
