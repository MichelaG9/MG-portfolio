import { Container, Row, Col } from 'react-bootstrap';
import { useEffect } from 'react';
import './styles/home.css';

const Home = () => {

    const loadAnimation = () => {
        const capitalM = document.querySelector(".capital-m");
        const capitalG = document.querySelector(".capital-g");
        const surname_body = document.querySelector("#surname_body");
        const name = document.querySelector(".name");
        const surname = document.querySelector(".surname");

        surname_body.addEventListener('animationend', () => {
            capitalM.id = "m";
            capitalG.id = "g";
            name.id = "name";
            surname.id = "surname";
        })
    }

    useEffect(() => {
        loadAnimation()
    })

    return ( 
        <Container fluid className="h-100 d-flex flex-column justify-content-center align-items-center pb-5">
            <Row className="justify-content-center">
                <Col xs="auto" className="name d-flex align-items-end mx-0 pr-3 pl-0">
                    <svg className="capital-m mr-3" width="180.85" height="193" viewBox="-2 -2 180.85 193">
                        <path className="draw-me" d="M 29.43 189 L 6.75 189 A 7.619 7.619 0 0 1 4.437 188.664 A 6.208 6.208 0 0 1 1.89 187.11 A 6.24 6.24 0 0 1 0.001 182.605 A 7.664 7.664 0 0 1 0 182.52 L 0 6.75 A 7.619 7.619 0 0 1 0.337 4.437 A 6.208 6.208 0 0 1 1.89 1.89 A 6.38 6.38 0 0 1 5.925 0.039 A 8.659 8.659 0 0 1 6.75 0 L 28.08 0 A 11.212 11.212 0 0 1 30.252 0.197 Q 31.488 0.441 32.44 0.989 A 5.6 5.6 0 0 1 33.75 2.025 Q 35.153 3.528 35.812 4.511 A 5.743 5.743 0 0 1 36.18 5.13 L 88.29 102.33 L 140.94 5.13 A 5.672 5.672 0 0 1 141.295 4.531 Q 141.953 3.544 143.37 2.025 Q 145.26 0 149.04 0 L 170.1 0 A 7.619 7.619 0 0 1 172.414 0.337 A 6.208 6.208 0 0 1 174.96 1.89 A 6.38 6.38 0 0 1 176.812 5.925 A 8.659 8.659 0 0 1 176.85 6.75 L 176.85 182.52 Q 176.85 185.22 174.96 187.11 A 6.38 6.38 0 0 1 170.925 188.962 A 8.659 8.659 0 0 1 170.1 189 L 147.42 189 A 7.559 7.559 0 0 1 145.364 188.735 A 5.67 5.67 0 0 1 142.695 187.11 Q 140.94 185.22 140.94 182.52 L 140.94 65.61 L 103.14 137.7 Q 101.79 140.13 99.63 141.885 A 7.549 7.549 0 0 1 96.589 143.351 Q 95.386 143.64 93.96 143.64 L 82.89 143.64 Q 80.254 143.64 78.472 142.787 A 6.176 6.176 0 0 1 77.085 141.885 Q 75.06 140.13 73.71 137.7 L 35.91 65.61 L 35.91 182.52 Q 35.91 185.22 34.02 187.11 A 6.24 6.24 0 0 1 29.515 189 A 7.664 7.664 0 0 1 29.43 189 Z" />
                    </svg>
                
                    <svg className="text-svg show-name" height="114.4" id="name_body">
                        <path d="M 142.951 108.9 L 129.601 108.9 Q 128.101 108.9 127.051 107.85 A 3.467 3.467 0 0 1 126.001 105.347 A 4.255 4.255 0 0 1 126.001 105.3 L 126.001 6 Q 126.001 4.5 127.051 3.45 A 3.467 3.467 0 0 1 129.554 2.4 A 4.255 4.255 0 0 1 129.601 2.4 L 142.951 2.4 Q 144.601 2.4 145.576 3.45 Q 146.551 4.5 146.551 6 L 146.551 40.2 Q 150.601 35.4 156.451 32.4 Q 162.301 29.4 170.851 29.4 Q 180.001 29.4 186.826 33.525 A 27.722 27.722 0 0 1 197.386 45.121 A 33.301 33.301 0 0 1 197.401 45.15 A 34.072 34.072 0 0 1 200.327 53.966 Q 201.086 57.895 201.146 62.385 A 57.885 57.885 0 0 1 201.151 63.15 L 201.151 105.3 Q 201.151 106.8 200.101 107.85 A 3.467 3.467 0 0 1 197.597 108.9 A 4.255 4.255 0 0 1 197.551 108.9 L 184.051 108.9 Q 182.551 108.9 181.501 107.85 A 3.467 3.467 0 0 1 180.451 105.347 A 4.255 4.255 0 0 1 180.451 105.3 L 180.451 64.05 A 28.561 28.561 0 0 0 179.957 58.57 Q 179.328 55.358 177.9 52.847 A 15.338 15.338 0 0 0 176.176 50.4 A 13.786 13.786 0 0 0 168.704 45.983 A 21.228 21.228 0 0 0 163.801 45.45 A 19.936 19.936 0 0 0 158.176 46.206 A 15.339 15.339 0 0 0 151.276 50.4 A 16.403 16.403 0 0 0 147.272 57.826 Q 146.618 60.387 146.557 63.418 A 31.29 31.29 0 0 0 146.551 64.05 L 146.551 105.3 Q 146.551 106.8 145.576 107.85 A 3.227 3.227 0 0 1 143.617 108.853 A 4.581 4.581 0 0 1 142.951 108.9 Z M 106.651 58.95 L 93.451 58.95 A 4.828 4.828 0 0 1 92.539 58.869 Q 92.009 58.767 91.595 58.536 A 2.518 2.518 0 0 1 91.126 58.2 A 5.18 5.18 0 0 1 90.517 57.532 Q 90.237 57.17 89.966 56.714 A 11.925 11.925 0 0 1 89.551 55.95 A 26.005 26.005 0 0 0 88.005 52.544 Q 86.152 49.177 83.626 47.475 A 13.827 13.827 0 0 0 79.075 45.526 Q 77.221 45.082 75.061 45.013 A 25.27 25.27 0 0 0 74.251 45 A 19.26 19.26 0 0 0 69.058 45.665 A 14.318 14.318 0 0 0 62.326 49.725 A 14.824 14.824 0 0 0 59.411 54.468 Q 58.544 56.66 58.087 59.397 A 38.948 38.948 0 0 0 57.601 64.65 Q 57.301 70.35 57.601 75.15 A 39.698 39.698 0 0 0 58.096 80.521 Q 59.145 86.808 62.326 90.15 A 14.679 14.679 0 0 0 70.798 94.527 A 20.986 20.986 0 0 0 74.251 94.8 Q 80.101 94.8 83.701 92.325 A 12.419 12.419 0 0 0 86.545 89.547 Q 87.568 88.196 88.435 86.441 A 28.142 28.142 0 0 0 89.551 83.85 A 11.439 11.439 0 0 1 90.075 82.908 Q 90.584 82.092 91.126 81.6 Q 91.854 80.938 93.107 80.861 A 5.544 5.544 0 0 1 93.451 80.85 L 106.651 80.85 Q 108.151 80.85 109.276 81.825 A 2.798 2.798 0 0 1 110.263 83.879 Q 110.278 84.154 110.251 84.45 Q 110.122 86.759 109.172 89.561 A 30.054 30.054 0 0 1 108.826 90.525 A 22.496 22.496 0 0 1 107.112 94.046 Q 106.182 95.613 104.942 97.212 A 36.672 36.672 0 0 1 104.776 97.425 A 30.066 30.066 0 0 1 100.52 101.793 A 36.973 36.973 0 0 1 97.801 103.875 A 31.582 31.582 0 0 1 92.57 106.792 A 42.284 42.284 0 0 1 87.676 108.6 Q 82.121 110.288 74.918 110.393 A 66.094 66.094 0 0 1 73.951 110.4 A 48.779 48.779 0 0 1 64.104 109.45 A 37.499 37.499 0 0 1 54.976 106.35 Q 46.801 102.3 42.226 94.575 A 34.708 34.708 0 0 1 38.28 84.415 A 47.829 47.829 0 0 1 37.201 75.9 A 54.958 54.958 0 0 1 37.121 74.355 Q 37.053 72.561 37.051 70.137 A 177.84 177.84 0 0 1 37.051 69.975 Q 37.051 66.483 37.186 64.142 A 52.462 52.462 0 0 1 37.201 63.9 A 47.406 47.406 0 0 1 38.384 54.936 A 34.499 34.499 0 0 1 42.226 45.225 Q 46.801 37.5 54.976 33.45 A 38.386 38.386 0 0 1 66.22 29.97 A 50.539 50.539 0 0 1 73.951 29.4 A 58.575 58.575 0 0 1 81.28 29.833 Q 86.293 30.467 90.301 32.025 A 39.456 39.456 0 0 1 96.101 34.816 A 29.465 29.465 0 0 1 101.401 38.775 A 35.831 35.831 0 0 1 105.001 42.708 A 26.543 26.543 0 0 1 107.926 47.325 A 27.742 27.742 0 0 1 109.272 50.528 Q 109.853 52.216 110.093 53.765 A 14.224 14.224 0 0 1 110.251 55.35 A 4.206 4.206 0 0 1 110.268 55.706 Q 110.276 57.108 109.276 57.975 Q 108.151 58.95 106.651 58.95 Z M 372.301 62.4 L 392.851 59.4 L 392.851 56.25 Q 392.851 51.604 391.137 48.507 A 10.515 10.515 0 0 0 389.701 46.5 A 9.05 9.05 0 0 0 386.399 44.266 Q 383.443 43.05 378.901 43.05 A 21.961 21.961 0 0 0 375.281 43.331 Q 373.317 43.66 371.71 44.373 A 11.629 11.629 0 0 0 370.126 45.225 Q 366.751 47.4 365.101 51 A 4.327 4.327 0 0 1 364.053 52.188 Q 363.15 52.879 361.911 52.944 A 4.988 4.988 0 0 1 361.651 52.95 L 349.801 52.95 Q 348.151 52.95 347.326 52.05 A 3.05 3.05 0 0 1 346.6 50.621 A 4.473 4.473 0 0 1 346.501 49.65 Q 346.647 47.3 348.449 43.942 A 29.986 29.986 0 0 1 348.526 43.8 Q 350.283 40.566 353.755 37.529 A 34.162 34.162 0 0 1 354.226 37.125 Q 358.051 33.9 364.201 31.65 Q 370.351 29.4 379.051 29.4 A 63.949 63.949 0 0 1 385.987 29.755 Q 389.467 30.135 392.434 30.924 A 32.882 32.882 0 0 1 395.026 31.725 A 34.012 34.012 0 0 1 400.148 34.014 Q 402.938 35.565 405.026 37.538 A 20.715 20.715 0 0 1 405.451 37.95 Q 409.351 41.85 411.151 47.1 A 33.975 33.975 0 0 1 412.951 58.155 A 37.817 37.817 0 0 1 412.951 58.2 L 412.951 105.3 Q 412.951 106.8 411.901 107.85 A 3.467 3.467 0 0 1 409.397 108.9 A 4.255 4.255 0 0 1 409.351 108.9 L 397.201 108.9 Q 395.551 108.9 394.576 107.85 Q 393.601 106.8 393.601 105.3 L 393.601 99.45 Q 391.772 101.981 388.758 104.381 A 36.044 36.044 0 0 1 388.351 104.7 A 24.082 24.082 0 0 1 384.059 107.323 A 31.686 31.686 0 0 1 380.326 108.825 A 28.829 28.829 0 0 1 375.517 109.956 Q 373.128 110.317 370.418 110.385 A 50.757 50.757 0 0 1 369.151 110.4 A 34.096 34.096 0 0 1 360.471 109.33 A 29.23 29.23 0 0 1 355.051 107.325 A 27.768 27.768 0 0 1 348.644 103.068 A 24.071 24.071 0 0 1 345.076 99.075 Q 341.401 93.9 341.401 87.45 A 20.666 20.666 0 0 1 343.217 78.679 Q 345.342 74.081 349.951 70.725 Q 357.536 65.202 369.254 62.926 A 75.749 75.749 0 0 1 372.301 62.4 Z M 290.851 69 L 290.851 72.15 Q 290.851 73.65 289.801 74.7 Q 288.751 75.75 287.101 75.75 L 237.301 75.75 L 237.301 76.2 L 237.301 76.95 Q 237.451 82.2 239.326 86.625 A 17.037 17.037 0 0 0 243.303 92.438 A 16.509 16.509 0 0 0 244.876 93.75 Q 248.551 96.45 253.651 96.45 A 23.093 23.093 0 0 0 256.611 96.271 Q 258.919 95.972 260.701 95.175 Q 263.3 94.012 265.026 92.537 A 12.444 12.444 0 0 0 265.351 92.25 A 36.107 36.107 0 0 0 266.28 91.37 Q 267.361 90.305 267.901 89.55 Q 269.224 87.786 270.043 87.39 A 1.575 1.575 0 0 1 270.076 87.375 A 3.28 3.28 0 0 1 270.672 87.177 Q 271.307 87.026 272.228 87.004 A 13.455 13.455 0 0 1 272.551 87 L 285.451 87 A 4.102 4.102 0 0 1 286.623 87.16 A 3.267 3.267 0 0 1 287.926 87.9 A 2.633 2.633 0 0 1 288.559 88.765 Q 288.835 89.383 288.751 90.145 A 3.515 3.515 0 0 1 288.751 90.15 Q 288.601 92.55 286.276 96 A 23.464 23.464 0 0 1 283.676 99.175 Q 282.311 100.588 280.591 101.976 A 42.259 42.259 0 0 1 279.601 102.75 A 31.539 31.539 0 0 1 274.707 105.769 Q 272.328 106.967 269.533 107.949 A 52.67 52.67 0 0 1 268.726 108.225 A 40.964 40.964 0 0 1 261.264 109.922 A 55.59 55.59 0 0 1 253.801 110.4 A 46.767 46.767 0 0 1 242.725 109.16 A 32.236 32.236 0 0 1 227.401 100.8 Q 217.651 91.2 216.901 73.5 Q 216.8 72.492 216.767 71.112 A 60.162 60.162 0 0 1 216.751 69.675 A 58.755 58.755 0 0 1 216.765 68.317 Q 216.793 67.124 216.873 66.27 A 15.882 15.882 0 0 1 216.901 66 Q 217.501 54.6 222.076 46.425 Q 226.651 38.25 234.751 33.825 A 35.527 35.527 0 0 1 245.989 30.022 A 47.143 47.143 0 0 1 253.801 29.4 A 48.643 48.643 0 0 1 263.029 30.23 Q 268.616 31.309 273.113 33.794 A 29.765 29.765 0 0 1 274.201 34.425 Q 282.451 39.45 286.651 48.375 A 43.442 43.442 0 0 1 290.235 60.449 A 57.201 57.201 0 0 1 290.851 69 Z M 322.951 108.9 L 310.501 108.9 Q 309.001 108.9 307.951 107.85 A 3.467 3.467 0 0 1 306.901 105.347 A 4.255 4.255 0 0 1 306.901 105.3 L 306.901 6 Q 306.901 4.5 307.951 3.45 A 3.467 3.467 0 0 1 310.454 2.4 A 4.255 4.255 0 0 1 310.501 2.4 L 322.951 2.4 Q 324.451 2.4 325.501 3.45 A 3.467 3.467 0 0 1 326.55 5.953 A 4.255 4.255 0 0 1 326.551 6 L 326.551 105.3 Q 326.551 106.8 325.501 107.85 A 3.467 3.467 0 0 1 322.997 108.9 A 4.255 4.255 0 0 1 322.951 108.9 Z M 16.651 108.9 L 4.201 108.9 Q 2.701 108.9 1.651 107.85 A 3.467 3.467 0 0 1 0.601 105.347 A 4.255 4.255 0 0 1 0.601 105.3 L 0.601 34.5 Q 0.601 33 1.651 31.95 A 3.467 3.467 0 0 1 4.154 30.9 A 4.255 4.255 0 0 1 4.201 30.9 L 16.651 30.9 Q 18.301 30.9 19.276 31.95 Q 20.251 33 20.251 34.5 L 20.251 105.3 Q 20.251 106.8 19.276 107.85 A 3.227 3.227 0 0 1 17.317 108.853 A 4.581 4.581 0 0 1 16.651 108.9 Z M 393.001 75 L 393.001 71.85 L 378.001 74.25 A 55.981 55.981 0 0 0 373.142 75.197 Q 368.324 76.377 365.355 78.236 A 14.987 14.987 0 0 0 364.801 78.6 A 12.287 12.287 0 0 0 362.507 80.607 A 7.897 7.897 0 0 0 360.451 85.95 A 8.931 8.931 0 0 0 360.981 89.072 A 8.029 8.029 0 0 0 362.476 91.575 Q 364.501 93.9 367.651 95.025 Q 370.801 96.15 374.251 96.15 A 21.15 21.15 0 0 0 380.577 95.227 A 18.973 18.973 0 0 0 383.776 93.9 A 15.534 15.534 0 0 0 389.665 88.409 A 19.535 19.535 0 0 0 390.526 86.925 A 20.124 20.124 0 0 0 392.299 81.963 Q 392.814 79.664 392.951 76.986 A 38.948 38.948 0 0 0 393.001 75 Z M 237.301 62.7 L 237.301 63.15 L 270.451 63.15 L 270.451 62.7 A 29.764 29.764 0 0 0 270.022 57.529 A 22.15 22.15 0 0 0 268.501 52.425 Q 266.551 48 262.801 45.525 A 14.799 14.799 0 0 0 256.935 43.292 A 19.618 19.618 0 0 0 253.801 43.05 A 18.632 18.632 0 0 0 249.351 43.558 A 14.434 14.434 0 0 0 244.801 45.525 A 14.951 14.951 0 0 0 239.425 51.863 A 18.186 18.186 0 0 0 239.176 52.425 A 23.008 23.008 0 0 0 237.659 57.854 A 31.257 31.257 0 0 0 237.301 62.7 Z M 17.251 18 L 3.601 18 Q 2.101 18 1.051 16.95 A 3.467 3.467 0 0 1 0.001 14.447 A 4.255 4.255 0 0 1 0.001 14.4 L 0.001 3.6 Q 0.001 2.1 1.051 1.05 A 3.467 3.467 0 0 1 3.554 0 A 4.255 4.255 0 0 1 3.601 0 L 17.251 0 A 4.233 4.233 0 0 1 18.536 0.187 A 3.449 3.449 0 0 1 19.951 1.05 A 3.467 3.467 0 0 1 21 3.553 A 4.255 4.255 0 0 1 21.001 3.6 L 21.001 14.4 Q 21.001 15.9 19.951 16.95 Q 18.901 18 17.251 18 Z"/>
                    </svg>
                </Col>

                <Col xs="auto" className="surname d-flex align-items-end mx-0 px-0">
                    <svg className="capital-g mr-3" width="164.92" height="198.4" viewBox="-2 -0.5 164.92 198.4" >
                        <path className="draw-me" d="M 152.669 96.111 L 152.669 169.675 A 59.769 59.769 0 0 1 133.795 185.651 A 77.573 77.573 0 0 1 123.797 190.242 Q 105.34 197.229 81.873 197.229 A 90.633 90.633 0 0 1 57.802 194.141 A 76.462 76.462 0 0 1 39.158 186.287 A 72.747 72.747 0 0 1 10.801 155.61 A 87.12 87.12 0 0 1 10.484 154.976 A 98.29 98.29 0 0 1 1.923 128.394 A 130.656 130.656 0 0 1 0.003 107.449 L 0.003 92.419 A 147 147 0 0 1 2.245 65.92 Q 6.838 40.889 20.833 24.458 A 67.992 67.992 0 0 1 63.438 1.173 A 99.065 99.065 0 0 1 78.973 0.002 Q 105.126 0.002 122.492 10.546 A 59.386 59.386 0 0 1 129.861 15.823 A 61.325 61.325 0 0 1 148.272 42.997 A 89.387 89.387 0 0 1 152.537 61.438 L 119.842 61.438 Q 115.026 31.285 88.177 27.354 A 59.018 59.018 0 0 0 79.632 26.765 A 49.352 49.352 0 0 0 65.201 28.761 A 36.992 36.992 0 0 0 45.552 42.915 Q 37.217 54.452 34.635 73.692 A 138.386 138.386 0 0 0 33.489 90.31 L 33.489 105.076 Q 33.489 136.189 46.607 153.393 A 42.213 42.213 0 0 0 77.385 170.329 A 58.465 58.465 0 0 0 83.059 170.598 Q 108.295 170.598 119.156 159.303 A 26.934 26.934 0 0 0 119.446 158.997 L 119.446 121.423 L 79.895 121.423 L 79.895 96.111 L 152.669 96.111 Z" />
                    </svg>

                    <svg className="text-svg show-surname" height="85" id="surname_body">
                        <path d="M 0.001 47.251 L 0.001 5.101 Q 0.001 3.601 1.051 2.551 A 3.467 3.467 0 0 1 3.554 1.501 A 4.255 4.255 0 0 1 3.601 1.501 L 16.801 1.501 Q 18.451 1.501 19.426 2.551 Q 20.401 3.601 20.401 5.101 L 20.401 46.351 Q 20.401 64.951 36.751 64.951 A 19.852 19.852 0 0 0 42.147 64.255 A 14.766 14.766 0 0 0 49.126 60.001 A 16.418 16.418 0 0 0 52.886 53.024 Q 53.701 50.021 53.701 46.351 L 53.701 5.101 Q 53.701 3.601 54.751 2.551 A 3.467 3.467 0 0 1 57.254 1.501 A 4.255 4.255 0 0 1 57.301 1.501 L 70.501 1.501 Q 72.001 1.501 73.051 2.551 A 3.467 3.467 0 0 1 74.1 5.054 A 4.255 4.255 0 0 1 74.101 5.101 L 74.101 75.901 Q 74.101 77.401 73.051 78.451 A 3.467 3.467 0 0 1 70.547 79.5 A 4.255 4.255 0 0 1 70.501 79.501 L 58.351 79.501 Q 56.701 79.501 55.726 78.451 Q 54.751 77.401 54.751 75.901 L 54.751 69.751 Q 50.701 75.001 44.701 78.001 A 26.432 26.432 0 0 1 38.416 80.154 Q 35.473 80.787 32.056 80.947 A 50.506 50.506 0 0 1 29.701 81.001 A 34.086 34.086 0 0 1 21.666 80.094 A 26.624 26.624 0 0 1 13.876 76.876 A 26.764 26.764 0 0 1 4.063 66.109 A 32.393 32.393 0 0 1 3.601 65.176 A 35.987 35.987 0 0 1 0.714 55.918 A 50.037 50.037 0 0 1 0.001 47.251 Z M 154.801 79.501 L 93.601 79.501 Q 91.951 79.501 90.976 78.451 Q 90.001 77.401 90.001 75.901 L 90.001 67.351 A 5.496 5.496 0 0 1 90.584 64.905 A 6.474 6.474 0 0 1 90.676 64.726 A 14.777 14.777 0 0 1 91.358 63.561 A 10.799 10.799 0 0 1 92.101 62.551 L 130.501 17.101 L 94.801 17.101 Q 93.301 17.101 92.251 16.126 A 3.227 3.227 0 0 1 91.247 14.167 A 4.581 4.581 0 0 1 91.201 13.501 L 91.201 5.101 Q 91.201 3.601 92.251 2.551 A 3.467 3.467 0 0 1 94.754 1.501 A 4.255 4.255 0 0 1 94.801 1.501 L 151.651 1.501 Q 153.301 1.501 154.276 2.551 Q 155.251 3.601 155.251 5.101 L 155.251 14.251 A 5.181 5.181 0 0 1 155.071 15.637 A 4.396 4.396 0 0 1 154.651 16.651 Q 154.051 17.701 153.151 18.751 L 115.651 63.901 L 154.801 63.901 Q 156.301 63.901 157.351 64.876 A 3.227 3.227 0 0 1 158.354 66.835 A 4.581 4.581 0 0 1 158.401 67.501 L 158.401 75.901 Q 158.401 77.401 157.351 78.451 A 3.467 3.467 0 0 1 154.847 79.5 A 4.255 4.255 0 0 1 154.801 79.501 Z M 234.451 79.501 L 173.251 79.501 Q 171.601 79.501 170.626 78.451 Q 169.651 77.401 169.651 75.901 L 169.651 67.351 A 5.496 5.496 0 0 1 170.234 64.905 A 6.474 6.474 0 0 1 170.326 64.726 A 14.777 14.777 0 0 1 171.008 63.561 A 10.799 10.799 0 0 1 171.751 62.551 L 210.151 17.101 L 174.451 17.101 Q 172.951 17.101 171.901 16.126 A 3.227 3.227 0 0 1 170.897 14.167 A 4.581 4.581 0 0 1 170.851 13.501 L 170.851 5.101 Q 170.851 3.601 171.901 2.551 A 3.467 3.467 0 0 1 174.404 1.501 A 4.255 4.255 0 0 1 174.451 1.501 L 231.301 1.501 Q 232.951 1.501 233.926 2.551 Q 234.901 3.601 234.901 5.101 L 234.901 14.251 A 5.181 5.181 0 0 1 234.721 15.637 A 4.396 4.396 0 0 1 234.301 16.651 Q 233.701 17.701 232.801 18.751 L 195.301 63.901 L 234.451 63.901 Q 235.951 63.901 237.001 64.876 A 3.227 3.227 0 0 1 238.004 66.835 A 4.581 4.581 0 0 1 238.051 67.501 L 238.051 75.901 Q 238.051 77.401 237.001 78.451 A 3.467 3.467 0 0 1 234.497 79.5 A 4.255 4.255 0 0 1 234.451 79.501 Z M 278.909 80.36 A 57.029 57.029 0 0 0 287.701 81.001 A 65.533 65.533 0 0 0 289.945 80.963 Q 294.704 80.8 298.823 79.934 A 35.846 35.846 0 0 0 307.876 76.801 Q 316.051 72.601 320.326 64.951 A 36.773 36.773 0 0 0 323.682 56.663 A 46.628 46.628 0 0 0 325.201 47.101 A 82.462 82.462 0 0 0 325.28 45.296 Q 325.312 44.335 325.329 43.257 A 169.543 169.543 0 0 0 325.351 40.501 A 174.835 174.835 0 0 0 325.336 38.18 Q 325.321 37.079 325.292 36.094 A 85.657 85.657 0 0 0 325.201 33.901 A 47.343 47.343 0 0 0 324.213 26.528 A 36.009 36.009 0 0 0 320.176 15.976 Q 315.751 8.401 307.576 4.201 Q 299.401 0.001 287.701 0.001 A 63.457 63.457 0 0 0 286.319 0.016 Q 275.514 0.251 267.826 4.201 Q 259.651 8.401 255.226 15.976 A 35.307 35.307 0 0 0 251.604 24.807 A 45.916 45.916 0 0 0 250.201 33.901 A 82.462 82.462 0 0 0 250.121 35.705 Q 250.089 36.666 250.072 37.744 A 169.543 169.543 0 0 0 250.051 40.501 A 174.835 174.835 0 0 0 250.065 42.821 Q 250.097 45.244 250.201 47.101 A 48.87 48.87 0 0 0 251.047 53.812 A 37.894 37.894 0 0 0 255.076 64.951 Q 259.351 72.601 267.526 76.801 A 32.068 32.068 0 0 0 270.105 77.983 Q 274.108 79.61 278.909 80.36 Z M 287.701 66.151 Q 295.651 66.151 300.001 61.126 A 17.17 17.17 0 0 0 303.06 55.824 Q 303.943 53.456 304.391 50.56 A 39.47 39.47 0 0 0 304.801 46.351 A 55.322 55.322 0 0 0 304.88 44.813 Q 304.951 42.976 304.951 40.501 Q 304.951 37.28 304.831 35.14 A 46.573 46.573 0 0 0 304.801 34.651 Q 304.351 24.901 300.001 19.876 A 14.171 14.171 0 0 0 291.684 15.208 A 21.153 21.153 0 0 0 287.701 14.851 Q 279.751 14.851 275.401 19.876 A 17.17 17.17 0 0 0 272.341 25.177 Q 271.458 27.546 271.01 30.441 A 39.47 39.47 0 0 0 270.601 34.651 A 55.322 55.322 0 0 0 270.521 36.189 Q 270.451 38.026 270.451 40.501 Q 270.451 43.721 270.571 45.861 A 46.573 46.573 0 0 0 270.601 46.351 Q 271.051 56.101 275.401 61.126 A 14.171 14.171 0 0 0 283.717 65.793 A 21.153 21.153 0 0 0 287.701 66.151 Z"/>
                    </svg>
                </Col>

            </Row>
            <Row className="pt-5 justify-content-center text-white" id="subtitle">
                FRONT-END DEVELOPER
            </Row>
        </Container>
     );
}
 
export default Home;