const createDOMFormString = (domString) => {
  const div = document.createElement('div')
  div.innerHTML = domString
  return div
}

class LikeButton {
  constructor() {
    this.state = { isLiked: true }
  }

  setState(state) {
    this.state = state
    this.render() 
  }

  render() {
    this.el = createDOMFormString(`
      <button class="like-btn">
        <span class="like-text">${ this.state.isLiked ? "取消" : "点赞" }</span>
        <span>👍</span>
      </button>
    `)
    this.el.addEventListener('click', this.changeLikeText.bind(this), false)
    return this.el
  }

  changeLikeText() {
    this.setState({
      isLiked: !this.state.isLiked
    })
  }
}

let wrapper = document.querySelector('.wrapper')
const likeButton1 = new LikeButton()
wrapper.appendChild(likeButton1.render())

const likeButton2 = new LikeButton();
wrapper.appendChild(likeButton2.render());