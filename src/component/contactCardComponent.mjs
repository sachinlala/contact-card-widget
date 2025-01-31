import {profileDataSachin} from "../test/sample-profile.js";

const getErrorBlock = (id) => {
  return `<div class="row gap5 align-center space-between">
    <label for="name" class="min-label-wid flex-start flex-start"></label>
    <small class="error wid100 flex-start" id="${id}-error"></small>
  </div>`;
};

const getDOM = (d) => {
  return document.getElementById(d);
};

const domRefs = () => {
  return {
    name: getDOM("name"),
    title: getDOM("title"),
    location: getDOM("location"),
    email: getDOM("email"),
    phone: getDOM("phone"),
    linkedin: getDOM("linkedin"),
    profileImage: getDOM("profile-image"),
  };
};

const resetForm = () => {
  const refs = domRefs();
  refs.name.value = "";
  refs.title.value = "";
  refs.location.value = "";
  refs.email.value = "";
  refs.phone.value = "";
  refs.linkedin.value = "";
  refs.profileImage.value = "";
};

export const handleSamplePrefill = (e) => {
  const isChecked = e?.target?.checked === true;
  const refs = domRefs();
  if (isChecked) {
    const sampleData = profileDataSachin;
    refs.name.value = sampleData.name;
    refs.title.value = sampleData.title;
    refs.location.value = sampleData.location;
    refs.email.value = sampleData.email;
    refs.phone.value = sampleData.phone;
    refs.linkedin.value = sampleData.linkedin;
    refs.profileImage.value = sampleData.profileImage;
  } else {
    resetForm();
  }
};

const contactCardComponent = () => {
  return `<div id="profile-form" class="box-shadow contact-form col gap10">
        <div class="row align-center gap5">
          <input id="samplePrefillBox" class="wid10" type="checkbox" value="sample-prefill"/>
          <label for="samplePrefillBox" class="flex-start">Click here to sample prefill</label>
        </div>
        <div class="col gap5">
          <div class="row gap5 align-center space-between">
            <label for="name" class="min-label-wid flex-start">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter full name" required>
          </div>
          ${getErrorBlock("name")}
        </div>

        <div class="col gap5">
        <div class="row gap5 align-center space-between">
            <label for="title" class="min-label-wid flex-start">Title:</label>
            <input type="text" id="title" name="title " placeholder="Enter title" required>
            </div>
          ${getErrorBlock("title")}
        </div>

        <div class="col gap5">
        <div class="row gap5 align-center space-between">
            <label for="location" class="min-label-wid flex-start">Location:</label>
            <input type="text" id="location" name="location" placeholder="Enter location" required>
            </div>
          ${getErrorBlock("location")}
        </div>

        <div class="col gap5">
        <div class="row gap5 align-center space-between">
            <label for="email" class="min-label-wid flex-start">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter email" required>
            </div>
          ${getErrorBlock("email")}
        </div>

        <div class="col gap5">
        <div class="row gap5 align-center space-between">
            <label for="phone" class="min-label-wid flex-start">Phone:</label>
            <input type="tel" id="phone" name="phone" placeholder="Enter phone number" required>
            </div>
          ${getErrorBlock("phone")}
        </div>

        <div class="col gap5">
        <div class="row gap5 align-center space-between">
            <label for="linkedin" class="min-label-wid flex-start">LinkedIn URL:</label>
            <input type="url" id="linkedin" name="linkedin" placeholder="Enter LinkedIn profile URL" required>
            </div>
          ${getErrorBlock("linkedin")}
        </div>

        <div class="col gap5">
        <div class="row gap5 align-center space-between">
            <label for="linkedin" class="min-label-wid flex-start">Profile Image URL:</label>
            <input type="url" id="profile-image" name="profile-image" placeholder="Enter profile image URL" required>
            </div>
          ${getErrorBlock("profile-image")}
        </div>

        <button id="btnFormUpdate">Generate Card</button>
    </div>`;
};
export default contactCardComponent;
