/* global bootstrap: false */
(() => {
    'use strict'
    const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.forEach(tooltipTriggerEl => {
        new bootstrap.Tooltip(tooltipTriggerEl)
    })
})()

function set_sidebar() {
    document.getElementById("gallery-sidebar").innerHTML = `
      <a class="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom" href="/">
          <span class="fs-5 fw-semibold"><i class="fa-solid fa-chart-line" style="color: #ffffff;"></i> Visualization Gallery</span>
      </a>
      <ul class="list-unstyled ps-0">
          <li class="mb-1">
              <button aria-expanded="true"
                      class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-target="#home-collapse" data-bs-toggle="collapse">
                  Awesome Land II
              </button>
              <div class="collapse show" id="home-collapse">
                  <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                      <li><a class="link-body-emphasis d-inline-flex text-decoration-none rounded active"
                             href="#">Chat history (in 2D)</a></li>
                  </ul>
              </div>
          </li>
          <li class="mb-1">
              <button aria-expanded="false"
                      class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-target="#dashboard-collapse" data-bs-toggle="collapse">
                  Awesome Land III
              </button>
              <div class="collapse" id="dashboard-collapse">
                  <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                      <li><a class="link-body-emphasis d-inline-flex text-decoration-none rounded" href="#">Overview</a></li>
                      <li><a class="link-body-emphasis d-inline-flex text-decoration-none rounded" href="#">Weekly</a></li>
                      <li><a class="link-body-emphasis d-inline-flex text-decoration-none rounded" href="#">Monthly</a></li>
                      <li><a class="link-body-emphasis d-inline-flex text-decoration-none rounded" href="#">Annually</a></li>
                  </ul>
              </div>
          </li>
          <li class="border-top my-3"></li>
          <li class="mb-1">
              <button aria-expanded="false"
                      class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-target="#account-collapse" data-bs-toggle="collapse">
                  Misc.
              </button>
              <div class="collapse" id="account-collapse">
                  <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  </ul>
              </div>
          </li>
      </ul>`;
}

window.onload = function () {
  set_sidebar();
}