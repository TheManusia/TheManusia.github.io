<template>
  <div id="app">
    <header class="d-print-none">
      <div class="container text-center text-lg-left">
        <div class="pt-4 clearfix">
          <h1 class="site-title mb-0">{{ name }}</h1>
          <div class="site-nav">
            <nav role="navigation">
              <ul class="nav justify-content-center">
                <li class="nav-item" v-for="item in items" :key="item.title">
                  <a class="nav-link" v-bind:href="'#'+item.title.toLowerCase()" v-bind:title="item.title">
                    <span class="menu-title">{{ item.title }}</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>

    <div class="page-content">
      <div class="container">
        <div class="resume-container">
          <div class="shadow-1-strong bg-white my-5" id="intro">
            <div class="bg-info text-white">
              <div class="cover bg-image"><img src="./../images/header-background.webp" alt="background"/>
                <div class="mask" style="background-color: rgba(0, 0, 0, 0.7);backdrop-filter: blur(2px);">
                  <div class="text-center p-5">
                    <div class="avatar p-1"><img class="img-thumbnail shadow-2-strong" src="./../images/avatar.webp"
                                                 width="160" height="160" alt="avatar"/>
                    </div>
                    <div class="header-bio mt-3">
                      <div data-aos="zoom-in" data-aos-delay="0">
                        <h2 class="h1">{{ name }}</h2>
                        <p>{{ job }}</p>
                      </div>
                      <div class="header-social mb-3 d-print-none" data-aos="zoom-in" data-aos-delay="200">
                        <nav role="navigation">
                          <ul class="nav justify-content-center">
                            <li class="nav-item" v-for="socmed in socmeds" :key="socmed.title">
                              <a class="nav-link" v-bind:href="socmed.url" rel="noopener" target="_blank" v-bind:title="socmed.title">
                                <i v-bind:class="'fab '+ socmed.icon"></i>
                                <span class="menu-title sr-only">{{ socmed.title }}</span>
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                      <div class="d-print-none"><a class="btn btn-outline-light btn-lg shadow-sm mt-1 me-3"
                                                   href="RizqiAudiantoFari_en.pdf" target="_blank" data-aos="fade-right"
                                                   data-aos-delay="700">Download CV</a><a
                          class="btn btn-info btn-lg shadow-sm mt-1"
                          href="#contact" data-aos="fade-left" data-aos-delay="700">Hire Me</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="shadow-1-strong bg-white my-5 p-5" id="about">
            <div class="about-section">
              <div class="row">
                <div class="col-md-6">
                  <h2 class="h2 fw-light mb-4">{{ menu.aboutme }}</h2>
                  <p>{{ about }}</p>
                </div>
                <div class="col-md-5 offset-lg-1">
                  <div>
                    <h2 class="h2 fw-light mb-4">Bio</h2>
                    <div class="row mt-2" v-for="bio in bios" :key="bio.title">
                      <div class="col-sm-5">
                        <div class="pb-2 fw-bolder"><i v-bind:class="bio.icon +' pe-2 text-muted'"
                                                       style="width:24px;opacity:0.85;"></i> {{ bio.title }}
                        </div>
                      </div>
                      <div class="col-sm-7">
                        <div class="pb-2">{{ bio.value }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="shadow-1-strong bg-white my-5 p-5" id="skills">
            <div class="skills-section">
              <h2 class="h2 fw-light mb-4">{{ menu.skill }}</h2>
              <div class="row">
                <div class="col-md-6" v-for="skill in skills" :key="skill.data">
                  <div class="mb-3" v-for="data in skill.datas" :key="data.name"><span class="fw-bolder">{{
                      data.name
                    }}</span>
                    <div class="progress my-2 rounded" style="height: 20px">
                      <div v-bind:class="'progress-bar bg-'+skill.color" role="progressbar" data-aos="zoom-in-right"
                           data-aos-delay="100"
                           data-aos-anchor=".skills-section" v-bind:style="'width:'+ data.percent +'%;'"
                           v-bind:aria-valuenow="data.percent" aria-valuemin="0"
                           aria-valuemax="100">{{ data.desc }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="shadow-1-strong bg-white my-5 p-5" id="experience">
            <div class="work-experience-section">
              <h2 class="h2 fw-light mb-4">{{ menu.experience }}</h2>
              <div class="timeline">
                <div v-for="(experience, index) in experiences" :key="index" class="timeline-card timeline-card-info"
                     data-aos="fade-in" v-bind:data-aos-delay="(index*200)">
                  <div class="timeline-head px-4 pt-3">
                    <div class="h5">
                      <a v-if="experience.url != null" class="experience" v-bind:href="experience.url"
                         target="_blank">{{ experience.title }}</a>
                      <span v-else>{{ experience.title }}</span>
                    </div>
                  </div>
                  <div class="timeline-body px-4 pb-4">
                    <div>{{ experience.description }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="shadow-1-strong bg-white my-5 p-5" id="education">
            <div class="education-section">
              <h2 class="h2 fw-light mb-4">{{ menu.education }}</h2>
              <div class="timeline">
                <div v-for="(education, index) in educations" :key="index" class="timeline-card timeline-card-success"
                     data-aos="fade-in" v-bind:data-aos-delay="(index*200)">
                  <div class="timeline-head px-4 pt-3">
                    <div class="h5"><a v-if="education.url != null" class="experience" v-bind:href="education.url"
                                       target="_blank">{{ education.title }}</a>
                      <span v-else>{{ education.title }}</span>
                      <span v-if="education.location != null"
                            class="text-muted h6"> from {{
                          education.location
                        }}</span>
                      <div v-else/>
                    </div>
                  </div>
                  <div class="timeline-body px-4 pb-4">
                    <div class="text-muted text-small mb-3">{{ education.time }}</div>
                    <div>{{ education.description }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="shadow-1-strong bg-white my-5 p-5" id="contact">
            <div class="contant-section">
              <h2 class="h2 fw-light text mb-4">{{ menu.contact }}</h2>
              <div class="row mb-4">
                <div class="col-md-5" data-aos="fade-left" data-aos-delay="200">
                  <div class="mt-1">
                    <div class="h6"><i class="fas fa-phone pe-2 text-muted" style="width:24px;opacity:0.85;"></i>
                      {{ phone }}
                    </div>
                    <div class="h6"><i class="far fa-envelope pe-2 text-muted" style="width:24px;opacity:0.85;"></i>
                      {{ email }}
                    </div>
                  </div>
                  <div class="mt-5 d-print-none">
                    <FormContact v-bind:form-url="formUrl"/>
                  </div>
                </div>
                <div class="col-md-7 d-print-none" data-aos="zoom-in" data-aos-delay="100">
                  <iframe
                      src="https://maps.google.com/maps?q=Malang&t=&z=13&ie=UTF8&iwloc=&output=embed" width="500"
                      height="400" style="border:0;width:100%;" allowfullscreen="" loading="lazy"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="pt-4 pb-4 text-muted text-center d-print-none">
      <div class="container">
        <div class="my-3">
          <div class="h4">{{ name }}</div>
          <div class="footer-nav">
            <nav role="navigation">
              <ul class="nav justify-content-center">
                <li class="nav-item" v-for="socmed in socmeds" :key="socmed.title">
                  <a class="nav-link" v-bind:href="socmed.url" target="_blank" v-bind:title="socmed.title">
                    <i v-bind:class="'fab '+socmed.icon"></i>
                    <span class="menu-title sr-only">{{ socmed.title }}</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="text-small">
          <div class="mb-1">&copy; Material Resume. All rights reserved.</div>
          <!-- This template downdload from https://templateflip.com/templates/material-resume/ -->
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
import FormContact from './components/Form.vue'

export default {
  name: 'App',
  components: {
    FormContact,
  },
  data() {
    var email = 'iianfarii@gmail.com';
    var phone = '+62 895-3379-67091';

    return {
      name: 'Rizqi Audianto Fari',
      job: 'Software Engineer Student',
      about: 'Hello! I\'m Rizqi Audianto Fari. I am passionate about Android Development and Java Spring Boot. I like to learn new things.',
      email: email,
      phone: phone,
      bios: [
        {title: 'Born', value: '16 October 2004', icon: 'far fa-calendar-alt'},
        {title: 'Email', value: email, icon: 'far fa-envelope'},
        {title: 'Phone', value: phone, icon: 'fas fa-phone'},
        {title: 'Address', value: 'Malang, Jawa Timur, Indonesia', icon: 'fas fa-map-marker-alt'},
      ],
      items: [
        {title: 'About'},
        {title: 'Skills'},
        {title: 'Experience'},
        {title: 'Education'},
        {title: 'Contact'},
      ],
      socmeds: [
        {
          title: 'Twitter',
          url: 'https://twitter.com/themanusia__',
          icon: 'fa-twitter'
        },
        {
          title: 'Facebook',
          url: 'https://www.facebook.com/Ian.TheManusia',
          icon: 'fa-facebook'
        },
        {
          title: 'Instagram',
          url: 'https://www.instagram.com/ian_269',
          icon: 'fa-instagram'
        },
        {
          title: 'Github',
          url: 'https://github.com/TheManusia',
          icon: 'fa-github'
        },
      ],
      skills: [
        {
          datas: [
            {name: 'Java', percent: '85', desc: 'Advance'},
            {name: 'Kotlin', percent: '75', desc: 'Advance'},
            {name: 'Dart', percent: '80', desc: 'Advance'},
            {name: 'PHP', percent: '85', desc: 'Advance'},
          ],
          color: 'info',
        },
        {
          datas: [
            {name: 'Flutter', percent: '75', desc: 'Advance'},
            {name: 'Android', percent: '85', desc: 'Advance'},
            {name: 'Lumen', percent: '85', desc: 'Advance'},
            {name: 'Spring Boot', percent: '80', desc: 'Beginner'},
          ],
          color: 'secondary'
        }
      ],
      experiences: [
        {
          title: 'Absensi Menggunakan GPS',
          url: 'https://github.com/TheManusia/Tugas-Akhir',
          description: 'An application to record student attendance by using gps on their android device. This\n' +
              '                    application use CodeIgniter as its admin panel and uses Java Spring Boot for rest api.',
        },
        {
          title: 'Discord Bot',
          url: 'https://github.com/TheManusia/brot',
          description: 'Bots that are used only for personal needs but have features that may be useful for others as\n' +
              '                    well. This bot has a feature to search anime using scene.',
        },
      ],
      educations: [
        {
          title: 'Software Engineer',
          location: 'SMK PGRI 3 Malang',
          time: '2019 - Present',
          description: 'Resolving technical issues faced by other team members. Creating training manuals for users. Writing up reports, manuals and other documentation on the status, operation and maintenance of software. Supporting and maintaining the software within an IT system once it is up and running.'
        },
        {
          title: 'Belajar Fundamental Aplikasi Android',
          url: 'https://www.dicoding.com/certificates/QEYX4LG76XDL',
          location: 'DicodingAcademy',
          time: '2020',
          description: 'The class is intended for developers who want to learn the fundamentals of creating Android applications, such as networking and databases, by referring to the international competency standards belonging to Google Developers Authorized Training Partners.'
        },
        {
          title: 'SMPN 01 Malang',
          time: '2016 - 2019',
          description: 'Junior High School'
        },
        {
          title: 'SDN Sumbersari 03 Malang',
          time: '2010 - 2016',
          description: 'Elementary School'
        },
      ],
      formUrl: 'https://formspree.io/f/mnqldlvp',
      menu: {
        about: 'About',
        skill: 'Professional Skills',
        experience: 'Experience',
        education: 'Education',
        contact: 'Contact',
        hire: 'Hire Me',
        download: 'Download',
        aboutme: 'About Me'
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

@import "./../css/font-awesome/css/all.min.css?ver=1.2.1";
@import "./../css/mdb.min.css?ver=1.2.1";
@import "./../css/aos.css?ver=1.2.1";
@import "./../css/main.css?ver=1.2.1";
</style>
