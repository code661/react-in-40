const createDOMFromString = (domString) => {
  const div = document.createElement('div')
  div.innerHTML = domString
  return div
}

class LikeButton {
  constructor() {
    this.state = { isLiked: true }
  }

  setState(state) {
    const oldEl = this.el
    this.state = state
    this.render()
    if (this.onStateChange) this.onStateChange(this.el, oldEl)
  }

  render() {
    this.el = createDOMFromString(`
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
const likeButton = new LikeButton()
wrapper.appendChild(likeButton.render())
likeButton.onStateChange = (newEl, oldEl) => {
  wrapper.insertBefore(newEl, oldEl)
  wrapper.removeChild(oldEl)
}
