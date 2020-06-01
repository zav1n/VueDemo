# 1. 项目技术相关
## 1.1. [VUE2技术](https://cn.vuejs.org/v2/)
## 1.2. [VUE2插件 Axios](https://github.com/thomaslwq/axios-cn)
## 1.3. [VUE2插件 ElementUI](https://element.eleme.io/#/zh-CN)

# 2. 帮助文档

1. [VUE2官方安装指导](https://cn.vuejs.org/v2/guide/installation.html)
2. [ElementUI安装指导](https://element.eleme.cn/#/zh-CN/component/installation)
3. [Axios安装指导](https://github.com/thomaslwq/axios-cn)

# 3. 项目搭建

## 3.1. VUE2安装

## 3.2. VUE2目录结构

| 目录名     | 作用             |
| ---------- | ---------------- |
| build     | 生产打包文件夹     |
| config | VUE系统配置文件夹        |
| node_modules | node组件依赖        |
| src | 代码逻辑文件夹        |
| test | 测试单元        |
| static | 纯静态资源，不会被wabpack构建        |
| /src/router | 路由文件        |
| /src/vuex/store.js | 状态管理器 & localStorage本地保存器|

## 3.3. 搭建项目的页面

| 页面名称     | 名称         |
| ------------ | ------------ |
| 首页         | /src/components/Index.vue |
| 导航         | /src/components/Nav/Nav.vue |
| 个人中心         | /src/components/User/UserCenter.vue |
| 文章列表         | /src/components/News/News.vue |
| 文章详情         | /src/components/News/NewsListDetail.vue |
| 登录         | /src/components/User/UserLogin.vue |
| 注册         | /src/components/User/UserSign.vue |
| 个人资料     | /src/components/User/UserData.vue |
| 个人文章列表     | /src/components/User/UserCenterArticle.vue |
| 个人头条列表    | /src/components/User/UserCenterTT.vue |

### 3.3.1 首页技术介绍


# 4. 接口数据

## 4.1. 头条接口
***主要接口字段说明***
***ret 接口标识码 等于0时，接口处理成功，非0时 接口信息出错***
***msg 接口返回信息说明***
***msg 接口返回信息说明***
***wdata 接口数据返回字段（对象)***

1. 用户注册接口

   ```json
   @url http://tt.linweiqin.com/api/tt/createUser
   @method post/get
   @params username,password
   @return msg,ret,wdata
   @wdata: nickname(昵称),username(登录名),avator(头像路径)
   ```

2. 用户登录接口

   ```json
   @url http://tt.linweiqin.com/api/tt/loginCheck
   @method post/get
   @params username,password
   @return msg,ret,wdata
   @wdata: oauth_token(登录凭证),oauth_expire_time(登录凭证过期时间),user_id(用户ID),nickname(昵称),avator(头像路径),article_count(文章数),tt_count(头条数)
   ```

3. 文章创建接口

   ```json
   @url http://tt.linweiqin.com/api/tt/createArticle
   @method post/get
   @params content,img,title,oauth_token
   @return msg,ret,wdata
   @wdata: nid:文章ID
   ```

3. 头条创建接口

   ```json
   @url http://tt.linweiqin.com/api/tt/createTT
   @method post/get
   @params content,imgs,oauth_token
   @return msg,ret,wdata
   @wdata: nid:头条ID
   ```

4. 用户退出接口

   ```json
   @url http://tt.linweiqin.com/api/tt/logout
   @method post/get
   @params 
   @return msg,ret,wdata
   @wdata: 空
   ```

5. 文章列表接口

   ```json
   @url http://tt.linweiqin.com/api/tt/getArticles
   @method post/get
   @params lastid,type(可选TT/Article)
   @return msg,ret,wdata
   @wdata: nid(文章ID),type(文章类型TT/Article),img(首图路径),imgs(头条组图),content(内容),title(标题),uid(用户ID),created_at(创建时间),user(对象:nickname(昵称),avator(头像路径))
   ```

6. 用户文章列表

   ```json
   @url http://tt.linweiqin.com/api/tt/getArticlesByType
   @method post/get
   @params type,oauth_token
   @return msg,ret,wdata
   @wdata: nid(文章ID),type(文章类型TT/Article),img(首图路径),imgs(头条组图),content(内容),title(标题),uid(用户ID),created_at(创建时间)
   ```

7. 文章删除接口

   ```json
   @url http://tt.linweiqin.com/api/tt/deleteArticle
   @method post/get
   @params nid,oauth_token
   @return msg,ret,wdata
   @wdata: 空
   ```


8. 用户个人信息修改

   ```json
   @url http://tt.linweiqin.com/api/tt/updateUserInfo
   @method post/get
   @params nickname,avator
   @return msg,ret,wdata
   @wdata: 空
   ```

9. 用户密码修改

   ```json
   @url http://tt.linweiqin.com/api/tt/updatePassword
   @method post/get
   @params currenPassword,updatePassword
   @return msg,ret,wdata
   @wdata: 空
   ```

10. 文章、头条详情接口

   ```json
   @url http://tt.linweiqin.com/api/tt/getArticleById
   @method post/get
   @params nid
   @return msg,ret,wdata
   @wdata: nid(文章ID),type(文章类型TT/Article),img(首图路径),imgs(头条组图),content(内容),title(标题),uid(用户ID),created_at(创建时间),user(对象:nickname(昵称),avator(头像路径))
   ```