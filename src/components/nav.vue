<template>
  <div>
        <nav class="navbar navbar-default">
    <div class="container-fluid">
        <!--Brand and toggle get grouped for better mobile display-->
        <!--响应式导航栏必须包含.collapse .navbar-collapse
            折叠起来的导航栏实际上是由class .navbar-toggle 以及两个data-组成
            第一个data-用于告诉JavaScript要做什么，第二个data-用于指定切换到哪一个元素,为了更具体化的显示折叠之后的展示页面
            用了三个class属性为.icon-bar 的<span>创建了所谓的汉堡按钮(可以更改为任意喜欢样式。-->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#example-navbar-collapse"
                    aria-expanded="false">
                <!--只用于屏幕阅读器，普通浏览器不显示，给无法看到屏幕显示的人士（比如盲人）提供方便-->
                <span class="sr-only">Toggle Navigation</span>
                <!--汉堡按钮-->
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <!--.navbar-brand默认是添加文字的，也可以添加图片，必须是小图片，图片太大位置就会靠下-->
            </button>
            <!--.navbar-brand会让文本更大一号-->
            <a class="navbar-brand" href="#">Brand</a>
        </div>

        <!--Collect the nav links,forms,and other content for toggling-->
        <div class="collapse navbar-collapse" id="example-navbar-collapse">
            <!--向导航栏添加链接，只需要简单添加带有.nav .navbar-nav的无序列表即可
            注意此处：写成.nav .navbar仅仅只是展示为列表，不会在导航条进行展示-->
            <ul class="nav navbar-nav">
                <li class="active"><a href="#">Link<span class="sr-only">(Current)</span></a></li>
                <li><a href="#">Link</a></li>
                <li class="dropdown">
                    <!--.aria-haspopup表示点击会出现菜单或是浮动元素 .aria-expanded表示展开状态-->
                    <a type="button" class="dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Action another</a></li>
                        <li><a href="#">Action more</a></li>
                        <!--分隔符-->
                        <li class="divider" role="separator"></li>
                        <li><a href="#">Action</a></li>
                        <li class="divider" role="separator"></li>
                        <li><a href="#">Action</a></li>
                    </ul>
                </li>
            </ul>
            <!-- <form class="navbar-form navbar-left">
                <div class="form-group">
                    <input class="form-control" type="text" placeholder="Search">
                </div>
                <button class="btn btn-default" type="submit">Submit</button>
            </form> -->
            <ul class="nav navbar-nav navbar-right">
                <!-- <li><a href="#">Link</a></li> -->
                <li class="dropdown"
                 v-for="(item,index) in navList"
                :key="index"
                data-toggle="dropdown"
                 aria-haspopup="true" aria-expanded="false"
                :class="index==navIndex?'active':''"
                @click="navClick(index,item.name)">
                    <!--.aria-haspopup表示点击会出现菜单或是浮动元素 .aria-expanded表示展开状态-->
                    <router-link :to="item.path">
                      {{item.name}}
                      <span v-if="item.children.length>0" class="glyphicon glyphicon-menu-down"></span>
                      <i class="underline"></i>
                    </router-link>
                    <ul class="dropdown-menu" v-if="item.children.length>0">
                        <li  v-for="(i,n) in item.children" :key="n">
                           <router-link :to="i.path">{{i.name}}</router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>

<div id="app">
			<nav id="nav">
				<div class="nav-item nav-item-logo logo">
					<img src="http://via.placeholder.com/88x46" >
				</div>
				<div v-for="item in bookCatas" class="nav-item">
					<a v-if="item.url!=''" :href="item.url">{{ item.booktype }}</a>
					<a v-else href="##">{{ item.booktype }}</a>
					<ul v-if="item.url==''" class="dropdown">
						<li v-for="li in item.ul">
							<a v-if="li.url!=''" :href="li.url">{{ li.bookname }}</a>
						</li>
					</ul>
				</div>
				
				<div class="nav-item nav-item-form">
					<form action="" method="get">
						<input type="text" name="search"value="" />
						<button type="submit">搜索</button>
					</form>
				</div>
			</nav>
			<button type="button" class="nav-btn" id="nav-btn"><!--按钮-->
				<span></span>
				<span></span>
				<span></span>
			</button>
		</div>

  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {}
}

</script>
<style lang='stylus' rel='stylesheet/stylus'>
</style>