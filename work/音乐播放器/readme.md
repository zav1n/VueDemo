# 1. 项目技术相关
## 1.1. VUE2技术
## 1.2. VUE2插件 Axios

# 2. 帮助文档

1. [VUE2官方安装指导](https://cn.vuejs.org/v2/guide/installation.html)
2. [Axios安装指导](https://github.com/axios/axios)
3. [音乐接口](https://github.com/Binaryify/NeteaseCloudMusicApi)

# 3. 项目搭建

## 3.1. VUE2安装

## 3.2. VUE2目录结构

| 目录名     | 作用             |
| ---------- | ---------------- |
| css     | 存放公共样式     |
| images | 存放图片        |

## 3.3. 搭建项目的页面

| 页面名称     | 名称         |
| ------------ | ------------ |
| 首页         | 泽林播放器.html|

# 4. 接口数据

## 4.1. 歌曲接口

1. 歌曲搜索接口

   ```json
   @url http://api.linweiqin.com/search
   @method get
   @params keywords
   @return 歌曲搜索结果
   ```

2. 歌曲url获取接口

   ```json
   @url http://api.linweiqin.com/song/url
   @method get
   @params keywords
   @return 歌曲搜索结果
   ```

3. 歌曲详情获取

   ```json
   @url http://api.linweiqin.com/song/detail
   @method get
   @params ids
   @return 歌曲url地址
   ```   

4. 热门评论获取

   ```json
   @url http://api.linweiqin.com/comment/hot?type=0
   @method get
   @params id(歌曲id,地址中的type固定为0)
   @return 歌曲搜索结果
   ```

5. mv地址获取

   ```json
   @url http://api.linweiqin.com/mv/url
   @method get
   @params id(mvid,为0表示没有mv)
   @return 歌曲搜索结果
   ```
