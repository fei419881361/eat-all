<template>
    <div id="content">
        <div id="choose-bar">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">美食广场</el-menu-item>
                <el-menu-item index="2">美食交友</el-menu-item>
            </el-menu>
        </div>
        
        <div class="line"></div>
        <div id="content">
            <div id="card-list">
              <el-row>
                <el-col :span="8" v-for="(o) in content" :key="o.id" >
                  <el-card :body-style="{ padding: '15px' }">
                    <img :src=o.img class="image">
                    <div style="padding: 14px;">
                      <span>{{o.shopName}}</span>
                       <!-- <el-rate v-model=content[index].shopScore></el-rate> -->
                       <el-rate
                        :value=Number(o.shopScore)
                        disabled
                        show-score
                        text-color="#ff9900">
                      </el-rate>
                      <div>
                        <span>{{o.detailScore}}</span>
                      </div>
                      <div>
                      <span>{{o.label1}}</span>
                      <div>
                        <span>{{o.label2}}</span>
                      </div>
                      </div>
                    </div>
                  
                    
                  </el-card>
                </el-col>
              </el-row>
            </div>
        </div> 


      <div id="page">
        <el-pagination
          background
          layout="prev, pager, next"
          @current-change="handleCurrentChange"
          :page-size="page.pageSize"
          :current-page="page.pageNumber"
          :total="page.total">
        </el-pagination>
      </div>

    </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        count: 0,
        page:{
          total:100,
          pageNumber:1,
          pageSize:12
        },
        content:[]
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      load () {
        this.count += 2
      },
      handleCurrentChange(currentPage){
      this.page.pageNumber = currentPage;
      console.log(this.page.pageNumber);//点击第几页
      this.getShopInf();
      },
      getShopInf(){
        this.$http.post(this.$store.state.baseUrl+'/shop/page',this.page)
        .then((response)=>{
          let data = response.body.data;
          if(data.content === null){
            this.open("获取数据失败")
            return;
          }
          this.content = data.content;
          this.page.total = data.totalElements;
          this.page.pageSize = data.size;
          this.page.pageNumber = data.pageable.pageNumber
        },error=>{
          console.log(error)
        })
      },
      open(msg) {
        this.$message(msg);
      }
    },
    mounted:function(){
      this.getShopInf()
    }
  }
</script>

<style>
#content{
    margin-left: 10%;
    margin-right: 10%;
}
  .image {
    width: 100%;
    display: block;
  }
</style>