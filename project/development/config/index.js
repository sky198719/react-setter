module.exports = {
	// 剔除第三方组件
	vendor:[
		'react',
		'react-dom',
		'react-router-dom',
		'mobx',
		'mobx-react',
		'mobx-react-lite',
		'axios',
		'qs',
		'babel-polyfill'
	],
	// 配置多页面应用，目录名称保持统一，单页面应用默认index
	html:[
		'index'
	],
	// 局部打包多个单页面，目录名称保持统一
	buildHtml:[
		'index'
	],
	// 配置反向代理，可配置多个
	api:[
		{
			name:'static',
			url:'/static'
		}
	],
	// 测试环境访问前缀
	devUrl:'/static',
	// 生产环境访问前缀
	proUrl:'/'
}