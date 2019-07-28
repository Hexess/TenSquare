<template>
    <div class="focus-list"> 
     <div class="mycollect-list"> 
      <ul class="sui-nav nav-tabs nav-large"> 
       <li class="active"><a href="#one" data-toggle="tab">Favorite Articles</a></li> 
       <li><a href="#two" data-toggle="tab">Favorite Companies</a></li> 
       <li><a href="#three" data-toggle="tab">Favorite Posts</a></li> 
      </ul> 
      <div class="tab-content tab-wraped"> 
       <div id="one" class="tab-pane active"> 
        <ul class="collect-list"> 
         <li class="collect-item"> 
          <div class="intro"> 
           <div class="fl border"> 
            <span class="fa fa-thumbs-up" aria-hidden="true"></span> 
            <span class="usenum">12</span> 
            <span class="fa fa-star" aria-hidden="true"></span> 
           </div> 
           <div class="fl content"> 
            <p class="title"> Last Monday (March 10), a coworker was trying to diagnose why a batch job had kicked out 7 records. It was written in Java, and he knew nothing about Java. Since the original employee who created the job was no longer with the company, my coworker came to me and we worked through it together. The job was reading records in from a CSV file from an vendor, validating the data, and passing the data to a database.</p> 
            <p class="link"><a href="ruanyifeng.com">ruanyifeng.com</a></p> 
           </div> 
           <div class="fr info"> 
            <img src="~/assets/img/widget-photo.png" alt="" width="40px" height="40px"/> 
            <span class="author">Koko</span> 
           </div> 
           <div class="clearfix"></div> 
          </div> </li> 
         <li class="collect-item"> 
          <div class="intro"> 
           <div class="fl border"> 
            <span class="fa fa-thumbs-up" aria-hidden="true"></span> 
            <span class="usenum">12</span> 
            <span class="fa fa-star" aria-hidden="true"></span> 
           </div> 
           <div class="fl content"> 
            <p class="title"> Last Monday (March 10), a coworker was trying to diagnose why a batch job had kicked out 7 records. It was written in Java, and he knew nothing about Java. Since the original employee who created the job was no longer with the company, my coworker came to me and we worked through it together. The job was reading records in from a CSV file from an vendor, validating the data, and passing the data to a database.</p> 
            <p class="link"><a href="ruanyifeng.com">ruanyifeng.com</a></p> 
           </div> 
           <div class="fr info"> 
            <img src="~/assets/img/widget-photo.png" alt="" width="40px" height="40px"/> 
            <span class="author">Koko</span> 
           </div> 
           <div class="clearfix"></div> 
          </div> </li> 
        </ul> 
       </div> 
       <div id="two" class="tab-pane"> 
        <ul class="company-list"> 
         <li class="company-item"> 
          <div class="fl"> 
           <p><span class="name">Facebook</span> <span class="job">5 positions</span></p> 
           <p>People are at the heart of every connection we build. We design products and deliver services that bring the world closer together — one connection at a time.</p> 
          </div> 
          <div class="fr focus"> 
           <span>7 followers</span> 
           <button class="sui-btn btn-danger btn-bordered">Unfollow</button> 
          </div> 
          <div class="clearfix"></div> </li> 
         <li class="company-item"> 
          <div class="fl"> 
           <p><span class="name">Facebook</span> <span class="job">5 positions</span></p> 
           <p>People are at the heart of every connection we build. We design products and deliver services that bring the world closer together — one connection at a time.</p> 
          </div> 
          <div class="fr focus"> 
           <span>7 followers</span> 
           <button class="sui-btn btn-danger btn-bordered">Unfollow</button> 
          </div> 
          <div class="clearfix"></div> </li> 
        </ul> 
       </div> 
       <div id="three" class="tab-pane"> 
        <ul class="tc-list"> 
         <li class="tc-item"> 
          <div class="border"> 
           <span class="fa fa-thumbs-up" aria-hidden="true"></span> 
           <span class="usenum">12</span> 
           <span class="fa fa-star" aria-hidden="true"></span> 
          </div> 
          <div class="content"> 
           <p><a href="#">Last Monday (March 10), a coworker was trying to diagnose why a batch job had kicked out 7 records. It was written in Java, and he knew nothing about Java. Since the original employee who created the job was no longer with the company, my coworker came to me and we worked through it together. The job was reading records in from a CSV file from an vendor, validating the data, and passing the data to a database.</a></p> 
          </div> </li> 
         <li class="tc-item"> 
          <div class="border"> 
           <span class="fa fa-thumbs-up" aria-hidden="true"></span> 
           <span class="usenum">12</span> 
           <span class="fa fa-star" aria-hidden="true"></span> 
          </div> 
          <div class="content"> 
           <p><a href="#">Last Monday (March 10), a coworker was trying to diagnose why a batch job had kicked out 7 records. It was written in Java, and he knew nothing about Java. Since the original employee who created the job was no longer with the company, my coworker came to me and we worked through it together. The job was reading records in from a CSV file from an vendor, validating the data, and passing the data to a database.</a></p> 
          </div> </li> 
        </ul> 
       </div> 
      </div> 
     </div> 
    </div> 
</template>
<script>
import '~/assets/css/page-sj-person-mycollect.css'
export default {
    
}
</script>
