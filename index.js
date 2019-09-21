const createDOMFromString = (domString) => {
  const div = document.createElement('div')
  div.innerHTML = domString
  return div.firstElementChild || null
}

const mount = (component, wrapper) => {
  wrapper.appendChild(component._renderDOM())
  component.onStateChange = (newEl, oldEl) => {
    wrapper.insertBefore(newEl, oldEl)
    wrapper.removeChild(oldEl)
  }
}

class Component {
  constructor(props) {
    // super()
    this.props = props
    console.log('Super Class this:',this);
    console.log('父组件的构造函数调用');

  }

  setState(state) {
    const oldEl = this.el
    this.state = state
    this._renderDOM()
    if (this.onStateChange) this.onStateChange(this.el, oldEl)
  }

  _renderDOM() {
    this.el = createDOMFromString(this.render())
    if(this.onClick) {
      this.el.addEventListener('click', this.onClick.bind(this), false)
    }
    return this.el
  }

}

class LikeButton extends Component {
  constructor(props) {
    super(props)
    console.log('子组件的构造函数调用');
    console.log(props);
    console.log(this);    
    this.state = { isLiked: true, likeNum: 0 }
  }

  render() {
    return `
      <button class="like-btn">
        <span class="like-text">${ this.state.isLiked ? "取消" : "点赞" }</span>
        <span>${this.state.likeNum}👍</span>
      </button>
    `
  }

  onClick() {
    this.setState({
      isLiked: !this.state.isLiked,
      likeNum: this.state.likeNum + 1
    })
  }
}

let wrapper = document.querySelector('.wrapper')
mount(new LikeButton({hello: 'foo'}), wrapper)
