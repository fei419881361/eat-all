<template>
    <div id = "header">
        <el-row :gutter="0">
        <el-col :span="8">
            <div>
                <div id="logo">
                    <img src="../assets/logo.png" alt="logo" id="logo-png">
                    <span id="logo-name">吃堂</span>
                </div>
            </div>
        </el-col>

        <el-col :span="8">
            <div>
                <el-row :gutter="20">
                    <el-col :span="16">
                        <el-input
                            placeholder="请输入内容"
                            v-model="input"
                            clearable>
                        </el-input>
                    </el-col>
                     <el-col :span="8">
                        <el-button icon="el-icon-search" circle></el-button>
                    </el-col>
                </el-row>
            </div>
        </el-col>

        <el-col :span="8">
            <div>
                <el-row :gutter="20">
                     <el-col :span="8">
                        <el-button type="primary" icon="el-icon-edit" circle @click="sendMsg">发消息</el-button>  
                    </el-col>
                    <el-col :span="8">
                        <span> 
                            欢迎：{{$route.params.email}}
                        </span>     
                    </el-col>
                    <el-col :span="8">
                        <span>
                            <i class="el-icon-more"></i>
                        </span>     
                    </el-col>
                </el-row>
                
            </div>
        </el-col>
        </el-row>
        

        <el-dialog
          title="发布信息"
          :visible.sync="dialogVisible"
          width="80%">
          
          <span slot="footer" class="dialog-footer">
            <el-input v-model="title" placeholder="请输入标题"></el-input>
            <quill-editor ref="text" v-model="content" class="myQuillEditor" :options="editorOption">
            </quill-editor>
            <el-button type="primary" @click="submit">提交</el-button>
            <el-button @click="dialogVisible = false">取 消</el-button>
          </span>
        </el-dialog>

        
    </div>
</template>

<script>


  export default {
    components: {
    
  },
    data() {
      return {
        dialogVisible: false,
        title:'',
        input: '',
        content: '',
        editorOption: {
          placeholder: "请在这里输入内容",
              modules:{
                toolbar:[
                          ['bold', 'italic', 'underline', 'strike'],    //加粗，斜体，下划线，删除线
                          ['blockquote', 'code-block'],     //引用，代码块
                          [{ 'header': 1 }, { 'header': 2 }],        // 标题，键值对的形式；1、2表示字体大小
                          [{ 'list': 'ordered'}, { 'list': 'bullet' }],     //列表
                          [{ 'script': 'sub'}, { 'script': 'super' }],   // 上下标
                          [{ 'indent': '-1'}, { 'indent': '+1' }],     // 缩进
                          [{ 'direction': 'rtl' }],             // 文本方向
                          [{ 'size': ['small', false, 'large', 'huge'] }], // 字体大小
                          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],     //几级标题
                          [{ 'color': [] }, { 'background': [] }],     // 字体颜色，字体背景颜色
                          [{ 'font': [] }],     //字体
                          // [{ 'align': [] }],    //对齐方式
                          ['clean'],    //清除字体样式
                          // ['image','video']    //上传图片、上传视频
                          ['image']    //上传图片
                          ]
                      }
        } 
      }
    },
    methods: {
      submit () {
        this.dialogVisible = false
        console.log(this.$refs.text.value)
      },
      sendMsg(){
        this.dialogVisible = true
      }
    }
  }
</script>


<style>
#header {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
#logo-png{
    width: 50px;
}

 .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>