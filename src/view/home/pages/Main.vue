<template>
    <section id="pageHome">
      <div class="container">
        <div id="banner-home" class="d-flex">
          <div class="sk-content">
            <h1 class="title-content">Berbagai Kelas
              untuk Bantu
              Upgrade Skillmu</h1>
            <p class="sub-title-content">
              Belajar kemampuan baru atau meningkatkan kemampuan yang sudah ada, bersama pemateri yang berpengalaman di bidangnya.
            </p>
            <button class="btn-content">Mulai</button>
          </div>
          <div class="sk-content-image">
            <img src="https://sekolahskill.com/wp-content/uploads/2022/06/Group-11-768x475.png" alt="sekolahskill">
          </div>
        </div>
      </div>
    </section>

    <section id="pageEventHome" class="sk-event">
      <div class="row-title-event">
        <p class="sk-title-event">EVENT BULAN INI</p>
        <div class="d-flex justify-content-center mt-1 mb-3">
          <hr>
        </div>
        <p class="sk-subtitle-event">Ikuti Event-Event Menarik Yang Bisa Menambah Skill Kamu</p>
      </div>
      <div id="conten-event" class="row-content-event">
        </div>
    </section>

    <section id="pageKelasHome" class="sk-kelas-list">
      <div class="row-title-event">
        <p class="sk-title-event">KELAS TERLARIS</p>
        <div class="d-flex justify-content-center mt-1 mb-3">
          <hr>
        </div>
      </div>
      <div class="row-kelas-list">
        <div class="card">
          <div class="card-header">
            </div>
          <div class="card-body">
            <div class="sk-sub-panel">
              <p>HRD</p>
              <button>Kelas</button>
            </div>
            <div class="sk-title-panel">
              Kelas Human Resource Development
            </div>
            <div class="sk-pemateri">
              Ustadz Agus Waluyo
            </div>

            <div class="sk-rating">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div>
          </div>
          <div class="sk-harga">
            <button class="btn-detail"> Detail</button>
            Rp.55.000
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            </div>
          <div class="card-body">
            <div class="sk-sub-panel">
              <p>HRD</p>
              <button>Kelas</button>
            </div>
            <div class="sk-title-panel">
              Kelas Nahwu Dasar Level 1 (Kitab Muyassar fii Ilmin Nahwi Ibnu Azka Press Jilid 1)
            </div>
            <div class="sk-pemateri">
              Ustadz Agus Waluyo
            </div>

            <div class="sk-rating">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div>
          </div>
          <div class="sk-harga">
            <button class="btn-detail"> Detail</button>
            Rp.55.000
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            </div>
          <div class="card-body">
            <div class="sk-sub-panel">
              <p>HRD</p>
              <button>Kelas</button>
            </div>
            <div class="sk-title-panel">
              Kelas Nahwu Dasar Level 1 (Kitab Muyassar fii Ilmin Nahwi Ibnu Azka Press Jilid 1)
            </div>
            <div class="sk-pemateri">
              Ustadz Agus Waluyo
            </div>

            <div class="sk-rating">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div>
          </div>
          <div class="sk-harga">
            <button class="btn-detail"> Detail</button>
            Rp.55.000
          </div>
        </div>
      </div>
      <div class="row-btn-detail">
        <router-link to="/kelas">
          <button class="btn-list-all">Lihat Semua Kelas</button>
        </router-link>
      </div>
    </section>

    <section id="pageCategoryHome" class="sk-kategory">
      <div class="sk-content-category">
        <h1>Kategori kelas</h1>
        <h3>
          Belajar kemampuan baru atau meningkatkan kemampuan yang sudah ada, bersama pemateri yang berpengalaman di bidangnya.
        </h3>
      </div>
      <div class="sk-content-category-list">
        <div class="contain-row">
          <div class="card-category">
            <div class="contain-image image-1">
              </div>
            <div class="contain-text">
              <h3>Al-Quran</h3>
              <p> 1 Kelas</p>
            </div>
          </div>
          <div class="card-category">
            <div class="contain-image image-2">
              </div>
            <div class="contain-text">
              <h3>Bahasa Arab</h3>
              <p> 1 Kelas</p>
            </div>
          </div>
        </div>
        <div class="contain-row mt-2">
          <div class="card-category">
            <div class="contain-image image-3">
              </div>
            <div class="contain-text">
              <h3>Bisnis UMKM</h3>
              <p> 1 Kelas</p>
            </div>
          </div>
          <div class="card-category">
            <div class="contain-image image-4">
              </div>
            <div class="contain-text">
              <h3>Desain & IT</h3>
              <p> 1 Kelas</p>
            </div>
          </div>
        </div>
        <div class="contain-row mt-2">
          <div class="card-category">
            <div class="contain-image image-5">
              </div>
            <div class="contain-text">
              <h3>HRD</h3>
              <p> 1 Kelas</p>
            </div>
          </div>
          <div class="card-category">
            <div class="contain-image image-6">
              </div>
            <div class="contain-text">
              <h3>Manajemen</h3>
              <p> 1 Kelas</p>
            </div>
          </div>
        </div>
        <div class="contain-row mt-2">
          <div class="card-category">
            <div class="contain-image image-7">
              </div>
            <div class="contain-text">
              <h3>Parenting</h3>
              <p> 1 Kelas</p>
            </div>
          </div>
          <div class="card-category">
            <div class="contain-image image-8">
              </div>
            <div class="contain-text">
              <h3>Digital Marketing</h3>
              <p> 1 Kelas</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="pageBenefitHome" class="sk-benefit">
      <div class="contain-benefit-image"></div>
      <div class="contain-benefit-text">
        <h1>Kenapa Harus Belajar di Pusat <br> Belajar Skill?</h1>
        <div class="content-row mt-5">
          <div class="contain-panel-benefit">
            <div class="contain-icon">
              <img src="images/icon-people.svg" alt="">
            </div>
            <div class="contain-text">
              <h3>Pemateri Berpengalaman</h3>
              <p>Disampaikan oleh pemateri yang berpengalaman di bidangnya.</p>
            </div>
          </div>
          <div class="contain-panel-benefit">
            <div class="contain-icon">
              <img src="images/icon-message.svg" alt="">
            </div>
            <div class="contain-text">
              <h3>Grup Tanya Jawab</h3>
              <p>Disediakan group tanya jawab dengan pemateri.</p>
            </div>
          </div>
        </div>
        <div class="content-row mt-3">
          <div class="contain-panel-benefit">
            <div class="contain-icon">
              <img src="images/icon-dollar.svg" alt="">
            </div>
            <div class="contain-text">
              <h3>Pemateri Berpengalaman</h3>
              <p>Disampaikan oleh pemateri yang berpengalaman di bidangnya.</p>
            </div>
          </div>
          <div class="contain-panel-benefit">
            <div class="contain-icon">
              <img src="images/icon-sertifikat.svg" alt="">
            </div>
            <div class="contain-text">
              <h3>Grup Tanya Jawab</h3>
              <p>Disediakan group tanya jawab dengan pemateri.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <teleport to="body">
      <div class="modal modal-deatil-event fade" tabindex="-1">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Detail</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div id="modal-content" class="modal-body container px-2 py-2">
              <section id="deskripsi-event"></section>
            </div>
          </div>
        </div>
      </div>
    </teleport>
  </template>

  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import Swal from 'sweetalert2';
  import $ from 'jquery'; // Jika Anda masih menggunakan jQuery

  const router = useRouter();
  const contenEvent = ref(null);
  const tempDetailEvent = ref(null);
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
  });

  const getApi = (mode = null, id = null, data = null) => {
    return new Promise((resolve, reject) => {
      if (mode === 'event') {
        $.ajax({
          type: 'get',
          crossDomain: true,
          url: 'http://sekolahskillapi.test/api/event/list-event',
          headers: {
            // token: getCookie("token"),
            accept: 'application/json',
          },
          success: function (response) {
            resolve(response);
          },
          error: function (error) {
            reject(error);
          },
        });
      } else {
        reject('Mode tidak valid');
      }
    });
  };

  const renderEvent = async () => {
    try {
      const value = await getApi('event');
      tempDetailEvent.value = value[0];
      const eventTemplate = `
        <div class="card-event">
          <div class="contain-image">
            <img src="http://image-sekolahskill.test/${value[0].event_image}" alt="" srcset="">
          </div>
          <div class="contain-text">
            <p class="sk-subtitle">SALES & MARKETING</p>
            <p class="sk-title-header">${value[0].event_name}</p>
            <span class="sk-badge">${value[0].event_type}</span>
            <p class="sk-pemateri">${value[0].event_pengisi}</p>
            <p class="sk-status">${value[0].event_jabatan}</p>
            <ul>
              <li>
                <img src="images/icon-date.svg" class="icon-date" alt="">
                <p>${value[0].event_date} | ${value[0].event_jam_mulai || ''} - ${value[0].event_jam_akhir || ''}</p>
              </li>
              <li>
                <img src="images/icon-point.svg" class="icon-date" alt="">
                <p>${value[0].event_location}</p>
              </li>
            </ul>
            <button class="btn-detail" id="btn-detail-event" @click="showEventDetail">Detail</button>
          </div>
        </div>
      `;
      contenEvent.value.innerHTML = eventTemplate;
    } catch (error) {
      console.error(error);
    }
  };

  const showEventDetail = () => {
    const deskripsiEvent = document.getElementById('deskripsi-event');
    if (deskripsiEvent && tempDetailEvent.value) {
      deskripsiEvent.innerHTML = tempDetailEvent.value.event_description;
      const modalDetailEvent = document.querySelector('.modal-deatil-event');
      if (modalDetailEvent) {
        const modalInstance = new bootstrap.Modal(modalDetailEvent);
        modalInstance.show();
        Toast.fire({
          icon: 'info',
          title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
        });
      }
    }
  };

  onMounted(() => {
    contenEvent.value = document.getElementById('conten-event');
    setTimeout(() => {
      renderEvent();
    }, 2000);

    // Event listener untuk tombol detail (karena dibuat secara dinamis)
    $(document).on('click', '#btn-detail-event', showEventDetail);

    // Pastikan Bootstrap modal tersedia
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  });
  </script>

  <style scoped>
  /* Style khusus untuk komponen ini jika ada */
  </style>
