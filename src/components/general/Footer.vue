<template>
  <footer class="py-8 px-2 bg-highlight-900 text-gray-50">
    <div class="max-w-7xl pb-6 content flex flex-col sm:flex-row sm:justify-between">

        <a v-if="data.social.facebook"
          :href="data.social.facebook.url"
          :target="data.social.facebook.target" 
          class="social-link facebook py-2 pl-4 pr-5 rounded-md flex flex-row hover:shadow-lg text-white text-opacity-90 hover:text-opacity-100 transition-color duration-150"
          rel="noopener"
        >
          <span class="icon">
            <svg version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 1024 1024" style="enable-background:new 0 0 1024 1024;" xml:space="preserve">
              <g>
                <path class="social-icon" d="M512,0C229.2,0,0,229.2,0,512c0,255.6,187.2,467.4,432,505.8V660H302V512h130V399.2c0-12,0.7-23.6,2-34.6
                  c0.9-7.3,2-14.4,3.5-21.3c4.7-22.4,12.3-42.2,22.5-59.6c0.8-1.3,1.6-2.7,2.4-4c1.6-2.6,3.3-5.1,5.1-7.6c4.4-6.2,9.2-12,14.3-17.5
                  c8.2-8.7,17.3-16.4,27.3-23c3.7-2.5,7.6-4.9,11.6-7.1c14.6-8.1,30.7-14.2,48.3-18.4c3.2-0.7,6.4-1.4,9.7-2s6.6-1.2,10-1.6
                  c3.4-0.5,6.8-0.9,10.2-1.2c8.6-0.9,17.5-1.3,26.7-1.3c56,0,114.6,10,114.6,10v126h-64.6c-2,0-3.9,0-5.8,0.1
                  c-1.9,0.1-3.8,0.2-5.6,0.3s-3.6,0.3-5.3,0.6c-5.2,0.7-10.1,1.6-14.6,2.9c-3.8,1.1-7.3,2.3-10.5,3.7c-2.6,1.1-5.1,2.4-7.4,3.8
                  c-1.8,1-3.4,2.1-5,3.2s-3.1,2.3-4.6,3.6c-0.5,0.4-1,0.8-1.4,1.3c-0.9,0.8-1.8,1.7-2.7,2.6c-0.4,0.4-0.9,0.9-1.3,1.4
                  c-0.8,0.9-1.6,1.8-2.4,2.8c-0.8,1-1.5,1.9-2.2,2.9s-1.4,2-2.1,3c-0.3,0.5-0.6,1-1,1.6c-0.6,1-1.2,2.1-1.8,3.2
                  c-0.3,0.5-0.6,1.1-0.8,1.6c-0.5,1.1-1.1,2.2-1.5,3.3c-0.5,1.1-0.9,2.2-1.4,3.4c-0.4,1.1-0.8,2.3-1.2,3.5c-0.2,0.6-0.4,1.2-0.6,1.8
                  c-0.4,1.2-0.7,2.4-1,3.6c-1.2,4.8-2.1,9.7-2.6,14.7c-0.1,1.2-0.2,2.5-0.3,3.8c-0.2,2.5-0.2,5-0.2,7.6v96h142l-22.7,148H592v357.8
                  c244.8-38.4,432-250.2,432-505.8C1024,229.2,794.8,0,512,0z"/>
              </g>
            </svg>
          </span>
          <span>{{ data.social.facebook.title }}</span>
        </a>

        <a v-if="data.social.instagram"
          :href="data.social.instagram.url"
          :target="data.social.instagram.target" 
          class="social-link instagram py-2 pl-4 pr-5 rounded-md flex flex-row hover:shadow-lg text-white text-opacity-90 hover:text-opacity-100 transition-color duration-150"
          rel="noopener"
        >
          <span class="icon">
            <svg version="1.1" id="Logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
              <g>
                <path class="social-icon" d="M256,49.5c67.3,0,75.2,0.3,101.8,1.5c24.6,1.1,37.9,5.2,46.8,8.7c11.8,4.6,20.2,10,29,18.8s14.3,17.2,18.8,29
                  c3.4,8.9,7.6,22.2,8.7,46.8c1.2,26.6,1.5,34.5,1.5,101.8s-0.3,75.2-1.5,101.8c-1.1,24.6-5.2,37.9-8.7,46.8
                  c-4.6,11.8-10,20.2-18.8,29s-17.2,14.3-29,18.8c-8.9,3.4-22.2,7.6-46.8,8.7c-26.6,1.2-34.5,1.5-101.8,1.5s-75.2-0.3-101.8-1.5
                  c-24.6-1.1-37.9-5.2-46.8-8.7c-11.8-4.6-20.2-10-29-18.8s-14.3-17.2-18.8-29c-3.4-8.9-7.6-22.2-8.7-46.8
                  c-1.2-26.6-1.5-34.5-1.5-101.8s0.3-75.2,1.5-101.8c1.1-24.6,5.2-37.9,8.7-46.8c4.6-11.8,10-20.2,18.8-29s17.2-14.3,29-18.8
                  c8.9-3.4,22.2-7.6,46.8-8.7C180.8,49.7,188.7,49.5,256,49.5 M256,4.1c-68.4,0-77,0.3-103.9,1.5C125.3,6.8,107,11.1,91,17.3
                  c-16.6,6.4-30.6,15.1-44.6,29.1S23.8,74.5,17.3,91c-6.2,16-10.5,34.3-11.7,61.2C4.4,179,4.1,187.6,4.1,256s0.3,77,1.5,103.9
                  c1.2,26.8,5.5,45.1,11.7,61.2c6.4,16.6,15.1,30.6,29.1,44.6s28.1,22.6,44.6,29.1c16,6.2,34.3,10.5,61.2,11.7s35.4,1.5,103.9,1.5
                  s77-0.3,103.9-1.5c26.8-1.2,45.1-5.5,61.2-11.7c16.6-6.4,30.6-15.1,44.6-29.1s22.6-28.1,29.1-44.6c6.2-16,10.5-34.3,11.7-61.2
                  c1.2-26.9,1.5-35.4,1.5-103.9s-0.3-77-1.5-103.9c-1.2-26.8-5.5-45.1-11.7-61.2c-6.4-16.6-15.1-30.6-29.1-44.6s-28.1-22.6-44.6-29.1
                  C405.2,11,386.9,6.7,360,5.5C333,4.4,324.4,4.1,256,4.1L256,4.1z"/>
                <path class="social-icon" d="M256,126.6c-71.4,0-129.4,57.9-129.4,129.4s58,129.4,129.4,129.4s129.4-58,129.4-129.4S327.4,126.6,256,126.6z
                  M256,340c-46.4,0-84-37.6-84-84s37.6-84,84-84s84,37.6,84,84S302.4,340,256,340z"/>
                <circle class="social-icon" cx="390.5" cy="121.5" r="30.2"/>
              </g>
            </svg>
          </span>
          <span>{{ data.social.instagram.title }}</span>
        </a>

        <a v-if="data.social.youtube"
          :href="data.social.youtube.url"
          :target="data.social.youtube.target" 
          class="social-link youtube py-2 pl-4 pr-5 rounded-md flex flex-row hover:shadow-lg text-white text-opacity-90 hover:text-opacity-100 transition-color duration-150"
          rel="noopener"
        > 
          <span class="icon">
            <svg version="1.1" id="Logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
              <path class="social-icon" d="M496.5,134.2c-5.8-21.6-22.8-38.6-44.4-44.4C413,79.3,256,79.3,256,79.3s-157,0-196.1,10.5
                c-21.6,5.8-38.6,22.8-44.4,44.4C5,173.3,5,255,5,255s0,81.7,10.5,120.8c5.8,21.6,22.8,38.6,44.4,44.4C99,430.7,256,430.7,256,430.7
                s157,0,196.1-10.5c21.6-5.8,38.6-22.8,44.4-44.4C507,336.7,507,255,507,255S507,173.3,496.5,134.2z M205.8,330.3V179.7L336.2,255
                L205.8,330.3z"/>
            </svg>

          </span>
          <span>{{ data.social.youtube.title }}</span>
        </a>
    </div>

    <div class="max-w-7xl pb-6 content flex flex-col-reverse md:flex-row">
      <form class="flex flex-col w-full mr-2">
        <h1 class="text-white ml-0 mt-12">Get in touch &swarr;</h1>
        <input 
          v-model="name" 
          type="text" 
          placeholder="Name"
          class="contact__input w-full border-b-2 mb-4"
        />
        <input
          v-model="mail"
          type="email"
          placeholder="Mail"
          class="contact__input w-full border-b-2 mb-4"
        />
        <input
          v-model="subject"
          type="text"
          placeholder="Subject"
          class="contact__input w-full border-b-2 mb-6"
        />
        <textarea 
          v-model="message" 
          placeholder="Your Message"
          rows="5"
          class="contact__input w-full"
        >
        </textarea>
        <input 
          type="submit" 
          id="submit-contact-form"
          class="contact__submit font-semibold"
          value="Send"
        />
      </form>
      <div class="flex flex-col md:px-24 md:ml-2">
        <h1 class="text-white ml-0 mt-12">Find us &searr;</h1>
        <p v-html="data.rightColumn" class="text-white text-opacity-50 text-center font-light whitespace-nowrap mt-4 md:text-left"/>
      </div>
    </div>

    <div class="max-w-7xl content flex flex-col sm:flex-row sm:justify-between">
      
    </div>
  </footer>
</template>

<script>
import utils from '@/utils/utils';

export default {
  name: 'Post',
  props: {
    data: Object
  },
  data() {
    return {
      name: null,
      mail: null,
      subject: null,
      message: null
    }
  },
  mounted() {
    document.addEventListener('click', (event) => {
      event.preventDefault();
      if (event.target === document.querySelector('#submit-contact-form')) {
        utils.post.content('send', { 
        name: this.name, 
        mail: this.mail, 
        message: this.message 
      }, { api: 'custom' })
        .then(data => console.log(data))
        .catch(err => utils.err.throw(err));
      }
    });
  }  
}
</script>

<style lang="scss" scoped>
.icon svg {
  box-sizing: border-box;
  height: 100%;
  min-width: 24px;
  margin-right: 10px;
}
</style>