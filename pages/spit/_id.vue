<template>
    <div class="wrapper tc-detail"> 
    <div class="fl left-list"> 
     <div class="tc-detail"> 
      <div class="detail-tit"> 
       <div class="detail-author"> 
        From <a href="javascript:;">{{pojo.nickname}}</a>
       </div> 
       <div class="detail-content"> 
        <p>{{pojo.content}}</p> 
       
       </div> 
       <div class="detail-tool"> 
        <ul> 
         <li><span class="star"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> {{pojo.thumbup}}</span></li> 
         <li><a href="#" ><i class="fa fa-share-alt" aria-hidden="true"></i> {{pojo.share}}</a></li> 
         <li><a @click="dialogVisible=true;content=''"><i  class="fa fa-commenting" aria-hidden="true"></i> {{pojo.comment}}</a></li> 
        </ul> 
       </div> 
      </div> 
      
      <div class="comment-area"> 
       <div class="comment-tit"> 
        <span>Comment</span> 
       </div> 
       <ul class="comment-list"> 
        <li v-for="(item,index) in commentlist" :key="index"> 
         <div class="item-photo"> 
          <img src="~/assets/img/widget-widget-photo.png" alt="" width="40px"/> 
         </div> 
         <div class="item-content"> 
          <p class="author"><a href="javascript:;">{{item.nickname}}</a> </p> 
          <p class="content">{{item.content}}</p> 
         </div> 
         <div class="item-thumb"> 
          <div>
           <i class="fa fa-thumbs-o-up" aria-hidden="true"></i> {{item.thumbup}}
          </div> 
         </div> </li> 
        
       </ul> 
      </div> 
     </div> 
    </div> 
    <div class="fl right-tag"> 
     <div class="block-btn"> 
      <p>Complain about terrible things anonymously!</p> 
      <a class="sui-btn btn-block btn-share" href="~/assets/spit-submit.html" target="_blank">Post</a> 
     </div> 
    </div> 
    <div class="clearfix"></div> 

    <el-dialog
        title="Comment" :visible.sync="dialogVisible"
        width="40%">
        <div class="quill-editor" 
            :content="content"
            @change="onEditorChange($event)"           
            v-quill:myQuillEditor="editorOption">
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="save">Submit</el-button>
        </span>
    </el-dialog>

   </div> 
</template>
<script>
import '~/assets/css/page-sj-spit-detail.css'
import spitApi from '@/api/spit'
import axios from 'axios'
export default {
    asyncData({params}){
        
        return axios.all( [ spitApi.findById(params.id),spitApi.commentlist(params.id)  ] ).then( 
            axios.spread( function( pojo,commentlist ){
                return {
                    pojo: pojo.data.data,
                    commentlist: commentlist.data.data
                } 
            })
         )
    },
    data(){
        return {
            dialogVisible: false,
            content: '',            
            editorOption: {
                // some quill options
                modules: {
                    toolbar: [
                    [{ 'size': ['small', false, 'large'] }],
                    ['bold', 'italic'],
                    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                    ['link', 'image']
                    ]
                }
            }
        }
    },
    methods:{
       onEditorChange({ editor, html, text }) {
        console.log('editor change!', editor, html, text)
        this.content = html
      },
      save(){
          spitApi.save({ content:this.content,parentid:this.pojo.id }  ).then(res=>{
              this.$message({
                  message: res.data.message,
                  type: (res.data.flag?'success':'error')
              })
              if(res.data.flag){
                  this.dialogVisible=false //close the window
                  //refresh data
                  spitApi.commentlist(this.pojo.id ).then( res=>{
                      this.commentlist=res.data.data
                  })
              }
          })
      }
    }

}
</script>

<style>

.quill-editor {
      min-height: 200px;
      max-height: 400px;
      overflow-y: auto;
    }
</style>
