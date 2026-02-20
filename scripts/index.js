const profileEditButton = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const closeEditProfileButton =
  editProfileModal.querySelector(".modal__close-btn");

const profileAddButton = document.querySelector(".profile__add-button");
const newPostModal = document.querySelector("#new-post-modal");
const closeNewPostButton = newPostModal.querySelector(".modal__close-btn");

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

profileEditButton.addEventListener("click", () => {
  openModal(editProfileModal);
});

closeEditProfileButton.addEventListener("click", () => {
  closeModal(editProfileModal);
});

profileAddButton.addEventListener("click", () => {
  openModal(newPostModal);
});

closeNewPostButton.addEventListener("click", () => {
  closeModal(newPostModal);
});
