class LikeButton {
  render() {
    return `
      <button class="like-btn">
        <span class="like-text">点赞</span>
        <span>👍</span>
      </button>
  `}
}

let wrapper = document.querySelector('.wrapper')
const likeButton1 = new LikeButton()
wrapper.innerHTML = likeButton1.render()

const likeButton2 = new LikeButton();
wrapper.innerHTML += likeButton1.render();