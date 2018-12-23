/**
 * 图片放大器
 * @date:  2018-1-23
 ***/
export default class ImageZoom {
	/**
	 * 定义构造函数
	 * @container 	容器
	 * @url 		图片地址
	 * @width 		容器宽度
	 *****/
	constructor(container, url, width) {
		// 存储数据
		this.container = container;
		this.url = url;
		this.width = width;
		// 初始化
		this.init();
	}
	// 定义初始化方法
	init() {
		// 创建图片加载器
		let img = new Image();
		// 监听图片
		img.onload = () => {
			// 存储图片宽高
			this.imageWidth = img.width;
			this.imageHeight = img.height;
			// 缩放比例
			this.zoom = img.width / this.width;
			// 图片等比例放缩。 ih / iw = h / w  =>  h = w * ih / iw
			// 容器高度
			this.height = this.width * img.height / img.width;
			// 图片加载完成，构建视图
			this.createView();
			// 绑定事件
			this.bindEvent();
		}
		img.onerror = () => {
			console.log('加载失败')
		}
		// 加载图片
		img.src = this.url
	}
	// 封装一个设置样式的方法
	css(dom, key, value) {
		// 如果是两个参数 css(img, {color: 'red'})
		// 如果是三个参数 css(img, 'color', 'red')
		// 判断key是否是字符串
		if (typeof key === 'string') {
			// 为dom设置样式
			dom.style[key] = value;
		} else {
			// key是对象，传递的是两个参数，要解析key对象
			for (let i in key) {
				// i是属性名称， key[i]是属性值
				dom.style[i] = key[i];
				// 还可以
				// this.css(dom, i, key[i])
			}
		}

	}
	// 创建视图方法
	createView() {
		// 在容器中，有一个图片和一个浮层
		this.img = new Image();
		this.layer = document.createElement('div');
		// 设置图片
		this.img.src = this.url;
		// 设置样式
		this.css(this.container, {
			width: `${this.width}px`,
			height: `${this.height}px`,
			position: 'relative',
			border: '1px solid #ccc'
		})
		// 设置图片
		this.css(this.img, {
			width: `${this.width}px`,
			height: `${this.height}px`
		})
		// 设置浮层
		this.css(this.layer, {
			width: `${this.width}px`,
			height: `${this.height}px`,
			position: 'absolute',
			top: 0,
			left: '100%',
			marginLeft: '10px',
			background: `url(${this.url})`,
			border: '1px solid #ccc',
			display: 'none',
			// 不能平铺
			backgroundRepeat: 'no-repeat'
		})
		// 组装在一起
		this.container.appendChild(this.img)
		this.container.appendChild(this.layer)
	}
	bindEvent() {
		// 为容器元素绑定事件
		this.container.onmouseenter = () => {
			// 显示弹层
			this.css(this.layer, 'display', 'block')
		}
		// 鼠标移走，隐藏弹层
		this.container.onmouseleave = () => {
			// 隐藏弹层
			this.css(this.layer, 'display', 'none')
		}
		// 鼠标移动，更改放大图片的位置
		this.container.onmousemove = (e) => {
			// 获取鼠标位置
			let x = e.offsetX;
			let y = e.offsetY;
			// 更改layer背景图片的位置
			// 如果横坐标移动的距离，加上容器的宽度，小于图片的宽度，我们可以移动背景
			if (x * this.zoom + this.width <= this.imageWidth) {
				// 可以修改横坐标
				this.css(this.layer, 'backgroundPositionX', `${-x * this.zoom}px`)
			}
			// 如果纵坐标移动的距离，加上容器的高度，小于图片的高度，我们可以移动背景
			if (y * this.zoom + this.height <= this.imageHeight) {
				// 可以移动纵坐标
				this.css(this.layer, 'backgroundPositionY', `${-y * this.zoom}px`)
			} 
		}
	}
}

// new ImageZoom(app, 'demo.jpg', 200)