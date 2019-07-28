<template>
  <div class="wrapper qa-content"> 
   <div class="fl left-list"> 
    <div class="tab-content"> 
     <div id="index" class="tab-pane active"> 
      <div class="tab-bottom-line"> 
       <ul class="sui-nav nav-tabs"> 
        <li :class="type=='new'?'active':''"><a @click="type='new'">NEW Answers</a></li> 
        <li :class="type=='hot'?'active':''"><a @click="type='hot'">HOT Answers</a></li> 
        <li :class="type=='wait'?'active':''"><a @click="type='wait'">Waiting List</a></li> 
       </ul> 
       <div class="qa-list" v-infinite-scroll="loadMore"> 
         <div class="tab-content"> 
         <div id="new" :class="'tab-pane '+(type=='new'?'active':'')">
          <ul class="detail-list"> 
           <li class="qa-item" v-for="(item,index) in newlist" :key="index"> 
            <div class="fl record"> 
             <div class="number"> 
              <div class="border useful"> 
               <p class="usenum">{{item.thumbup}}</p> 
               <img src="~assets/img/like--v1.png" width="15px"/> 
              </div> 
              <div class="border answer"> 
               <p class="ansnum">{{item.reply}}</p> 
               <p>Answers</p> 
              </div> 
             </div> 
            </div> 
            <div class="fl info"> 
             <div class="question"> 
              <p class="author"><span class="name">{{item.replyname}}</span><span>{{item.replytime}}</span>Answer</p> 
              <p class="title"><a href="./qa-detail.html" target="_blank">{{item.title}}</a></p> 
             </div> 
             <div class="other">  
              <div class="fr brower"> 
               <p>Read {{item.visits}} | {{item.createtime}} from <a href="#">{{item.nickname}} </a></p> 
              </div> 
             </div> 
            </div> 
            <div class="clearfix"></div> </li> 
 
          </ul> 
         </div> 
         <div id="hot" :class="'tab-pane '+(type=='hot'?'active':'')"> 
          <ul class="detail-list"> 
           <li class="qa-item" v-for="(item,index) in hotlist" :key="index"> 
            <div class="fl record"> 
             <div class="number"> 
              <div class="border useful"> 
               <p class="usenum">{{item.thumbup}}</p> 
               <img src="~assets/img/like--v1.png" width="15px"/> 
              </div> 
              <div class="border answer"> 
               <p class="ansnum">{{item.reply}}</p> 
               <p>Answers</p> 
              </div> 
             </div> 
            </div> 
            <div class="fl info"> 
             <div class="question"> 
              <p class="author"><span class="name">{{item.replyname}}</span><span>{{item.replytime}}</span>Answer</p> 
              <p class="title"><a href="./qa-detail.html" target="_blank">{{item.title}}</a></p> 
             </div> 
             <div class="other">  
              <div class="fr brower"> 
               <p>Read {{item.visits}} | {{item.createtime}} from <a href="#">{{item.nickname}} </a></p> 
              </div> 
             </div> 
            </div> 
            <div class="clearfix"></div> </li> 
 
          </ul> 
         </div> 
         <div id="wait" :class="'tab-pane '+(type=='wait'?'active':'')"> 
          <ul class="detail-list"> 
           <li class="qa-item" v-for="(item,index) in waitlist" :key="index"> 
            <div class="fl record"> 
             <div class="number"> 
              <div class="border useful"> 
               <p class="usenum">{{item.thumbup}}</p> 
               <img src="~assets/img/like--v1.png" width="15px"/> 
              </div> 
              <div class="border answer"> 
               <p class="ansnum">{{item.reply}}</p> 
               <p>Answers</p> 
              </div> 
             </div> 
            </div> 
            <div class="fl info"> 
             <div class="question"> 
              <p class="author"><span class="name">{{item.replyname}}</span><span>{{item.replytime}}</span>Answer</p> 
              <p class="title"><a href="./qa-detail.html" target="_blank">{{item.title}}</a></p> 
             </div> 
             <div class="other">  
              <div class="fr brower"> 
               <p>Read {{item.visits}} | {{item.createtime}} from <a href="#">{{item.nickname}} </a></p> 
              </div> 
             </div> 
            </div> 
            <div class="clearfix"></div> </li> 
 
          </ul> 
         </div> 
        </div> 
       </div> 
      </div> 
     </div> 
     <div id="php" class="tab-pane">
       Vue 
     </div> 
     <div id="js" class="tab-pane">
       JavaScript 
     </div> 
     <div id="python" class="tab-pane">
       Python 
     </div> 
     <div id="java" class="tab-pane">
       Java
     </div> 
    </div> 
   </div> 
   <div class="fl right-tag"> 
    <div class="block-btn"> 
     <p>Do you have any question today?</p> 
     <a class="sui-btn btn-block btn-share" href="./qa-submit.html" target="_blank">Let's Ask!</a> 
    </div> 
    <div class="hot-tags"> 
     <div class="head"> 
      <h3 class="title">HOT Tag</h3> 
     </div> 
     <div class="tags"> 
      <ul class="sui-tag"> 
       <li>PHP</li> 
       <li>JavaScript</li> 
       <li>Vue</li> 
       <li>Java</li> 
       <li>Python</li> 
       <li>C++</li> 
       <li>React</li> 
       <li>Web</li> 
      </ul> 
     </div> 
    </div> 
   </div> 
   <div class="clearfix"></div> 
  </div> 
</template>
<script>
import problemApi from '@/api/problem'
import axios from 'axios'
export default {
  asyncData({params}){
    return axios.all([problemApi.list('newlist',params.label,1,10),
      problemApi.list('hotlist',params.label,1,10),
        problemApi.list('waitlist',params.label,1,10)  ] ).then( axios.spread(function(newlist,hotlist,waitlist ){
          return {
            newlist:newlist.data.data.rows,
            hotlist:hotlist.data.data.rows,
            waitlist:waitlist.data.data.rows,
            label:params.label
          }
        }))
  },
  data(){
    return {
      type:'new',
      page_new: 1,
      page_hot: 1,
      page_wait: 1
    }  
  },
  methods:{
    loadMore(){
      if(this.type==='new'){
        this.page_new++
        problemApi.list('newlist',this.label,this.page_new,10).then( res=>{
          this.newlist=this.newlist.concat( res.data.data.rows )
        })
      }
      if(this.type==='hot'){
        this.page_hot++
        problemApi.list('hotlist',this.label,this.page_hot,10).then( res=>{
          this.hotlist=this.hotlist.concat( res.data.data.rows )
        })
      }
      if(this.type==='wait'){
        this.page_wait++
        problemApi.list('waitlist',this.label,this.page_wait,10).then( res=>{
          this.waitlist=this.waitlist.concat( res.data.data.rows )
        })
      }   


    }
  }
}
</script>

