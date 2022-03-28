export default function Logo({className}) {
    return(
        <svg className={`${className} inline-block `} width="241" height="236" viewBox="0 0 241 236" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M52.7724 121.049C47.0577 122.155 42.1958 122.282 38.1869 121.428C34.1901 120.638 31.0513 119.063 28.7704 116.703C26.4895 114.343 25.021 111.467 24.3648 108.076C23.6114 104.182 23.8649 99.7683 25.1251 94.8336C26.3733 89.8361 28.5816 84.7505 31.7502 79.5769C31.7502 79.5769 31.7755 79.5394 31.8261 79.4644C29.7457 79.1503 27.7726 78.7177 25.9069 78.1666C24.0412 77.6155 22.3396 76.9024 20.8021 76.0272C19.0519 75.0628 17.6542 73.8999 16.609 72.5386C15.5637 71.1772 14.9075 69.8057 14.6401 68.4241C14.2513 66.4146 14.6768 64.5732 15.9167 62.9C17.1444 61.1639 19.2968 59.9982 22.374 59.4028C23.3788 59.2084 24.4646 59.096 25.6314 59.0657C26.7861 58.9726 28.0279 58.9929 29.3568 59.1267C30.2846 59.2077 30.8275 59.6565 30.9854 60.4729C31.0705 60.9125 30.9044 61.4007 30.487 61.9375C30.1203 62.3993 29.5673 62.5715 28.8279 62.4539C26.6462 62.2897 24.8017 62.3535 23.2945 62.6451C21.4105 63.0096 20.0391 63.6659 19.1801 64.6139C18.3839 65.5498 18.0952 66.5829 18.3139 67.7133C18.642 69.4089 20.0863 71.1491 22.6467 72.9339C25.2579 74.6438 28.9953 75.7774 33.8592 76.3347C36.9102 71.9005 40.5679 67.7398 44.8324 63.8526C49.1475 59.8904 53.9608 56.4833 59.2725 53.6313C64.5842 50.7793 70.3173 48.7579 76.4716 47.5671C82.4375 46.4127 87.0907 46.5547 90.4311 47.9932C93.7715 49.4317 95.6969 51.4697 96.2073 54.1073C96.6933 56.6192 95.8667 59.4178 93.7273 62.5029C91.6386 65.5131 88.147 68.1758 83.2527 70.491C80.1451 71.9392 76.448 73.3712 72.1614 74.787C67.9254 76.1279 63.4839 77.2479 58.8367 78.1471C54.9432 78.9005 51.0132 79.4654 47.0467 79.842C43.1309 80.1437 39.3549 80.1576 35.7186 79.884C32.6777 84.7072 30.4522 89.5355 29.042 94.3689C27.6824 99.1273 27.3672 103.391 28.0963 107.158C28.9104 111.366 31.2237 114.567 35.0361 116.761C38.8484 118.955 44.4598 119.335 51.8701 117.901C52.8121 117.719 53.8047 117.462 54.848 117.13C55.9034 116.86 56.9903 116.585 58.1085 116.303C61.917 115.11 65.8805 113.203 69.999 110.582C74.1925 108.012 78.2077 104.857 82.0447 101.117C85.9324 97.3031 89.3581 93.1221 92.3221 88.5744C92.6766 88.0498 93.0737 87.7449 93.5133 87.6598C93.9529 87.5748 94.3286 87.665 94.6406 87.9303C95.0153 88.1836 95.2453 88.53 95.3303 88.9696C95.4154 89.4092 95.306 89.8538 95.0021 90.3035C92.2002 95.0153 88.742 99.3655 84.6275 103.354C80.5879 107.393 76.3265 110.791 71.8433 113.548C67.3723 116.368 63.0695 118.373 58.9349 119.564C56.8361 120.165 54.782 120.661 52.7724 121.049ZM37.94 76.7178C41.0759 76.7626 44.2756 76.6321 47.5391 76.3263C50.8655 76.0085 54.1614 75.5336 57.427 74.9017C62.4509 73.9296 67.1062 72.7357 71.3928 71.3199C75.7422 69.892 79.106 68.5896 81.4843 67.4127C85.7244 65.4196 88.7104 63.3433 90.4426 61.184C92.2375 59.0124 92.9709 57.0789 92.6429 55.3833C92.2662 53.4365 90.7196 52.0093 88.0031 51.1016C85.2744 50.1311 81.6493 50.0833 77.1278 50.9582C71.5386 52.0397 66.3212 53.8636 61.4754 56.43C56.6175 58.9336 52.183 61.9416 48.1718 65.4541C44.2234 68.9544 40.8128 72.709 37.94 76.7178ZM98.1665 100.637C96.4081 100.977 94.9921 100.73 93.9185 99.8949C92.8956 98.9853 92.2322 97.7455 91.9284 96.1755C91.5882 94.4171 91.6956 92.2789 92.2508 89.7609C92.8567 87.168 93.7644 84.4515 94.9739 81.6114C96.1834 78.7713 97.5864 76.0893 99.1828 73.5653C100.83 70.9663 102.562 68.8069 104.379 67.0872C106.184 65.3046 107.966 64.2432 109.724 63.9029C110.918 63.6721 112.116 63.6357 113.319 63.7937C114.51 63.889 115.548 64.3722 116.434 65.2433C117.382 66.1023 118.044 67.5052 118.421 69.452C118.554 70.1428 118.463 70.6816 118.147 71.0685C117.831 71.4554 117.516 71.6792 117.202 71.74C116.511 71.8737 116.117 71.6893 116.02 71.1869C115.317 69.2381 114.403 68.0469 113.276 67.6133C112.213 67.1676 111.242 67.0298 110.362 67.1999C109.106 67.4429 107.752 68.3565 106.3 69.9406C104.847 71.5246 103.43 73.4602 102.048 75.7472C100.666 78.0342 99.4094 80.46 98.2768 83.0245C97.1949 85.5142 96.3835 87.8863 95.8425 90.1409C95.2894 92.3328 95.1404 94.0881 95.3955 95.4069C95.5171 96.0349 95.7206 96.5818 96.0062 97.0478C96.3546 97.5016 96.78 97.6799 97.2824 97.5826C98.2244 97.4004 99.3518 96.661 100.665 95.3646C101.977 94.0682 103.33 92.4709 104.721 90.5729C106.164 88.5999 107.563 86.5701 108.918 84.4836C110.273 82.3972 111.49 80.4353 112.568 78.598C113.646 76.7607 114.47 75.2981 115.041 74.2103C115.309 73.5722 115.725 73.1985 116.29 73.0891C116.73 73.0041 117.169 73.0821 117.606 73.3232C118.044 73.5642 118.311 73.936 118.408 74.4384C118.457 74.6896 118.417 74.9904 118.29 75.3409C117.984 76.1167 117.638 77.1934 117.253 78.5709C116.931 79.9362 116.596 81.4019 116.247 82.9677C115.962 84.5215 115.721 85.9689 115.524 87.3099C115.378 88.576 115.366 89.5231 115.487 90.1511C115.609 90.7791 115.889 91.0505 116.329 90.9655C116.643 90.9047 116.989 90.6748 117.368 90.2757C117.81 89.8645 118.195 89.4969 118.523 89.1728C119.787 87.6252 120.976 86.0269 122.091 84.378C123.193 82.6663 124.187 81.0731 125.075 79.5984C125.265 79.2357 125.549 79.018 125.926 78.9451C126.24 78.8843 126.559 79.018 126.883 79.3462C127.258 79.5995 127.494 79.9773 127.591 80.4797C127.7 81.0449 127.634 81.5463 127.393 81.9838C126.644 83.497 125.61 85.228 124.293 87.1767C122.964 89.0626 121.763 90.5981 120.689 91.7831C119.982 92.5063 119.118 93.2598 118.097 94.0437C117.127 94.7527 116.139 95.2044 115.135 95.3988C114.381 95.5446 113.71 95.4463 113.123 95.1039C112.523 94.6988 112.108 93.8996 111.877 92.7064C111.695 91.7644 111.645 90.6664 111.729 89.4125C111.812 88.1585 111.952 86.861 112.148 85.52C110.754 87.7442 109.229 89.9613 107.572 92.1714C105.914 94.3814 104.265 96.2966 102.624 97.9172C101.034 99.4628 99.5481 100.369 98.1665 100.637ZM142.803 90.9246C141.673 91.1433 140.67 91.0116 139.795 90.5294C138.983 90.0351 138.467 89.2227 138.248 88.0923C137.787 85.706 137.922 83.2042 138.653 80.5869C139.372 77.9069 140.261 75.2592 141.318 72.644C142.427 69.9539 143.289 67.5068 143.905 65.3028C143.033 66.188 142 66.9091 140.805 67.4661C139.61 68.0232 138.416 68.4171 137.222 68.648C135.527 68.9761 134.166 69.0115 133.138 68.7541C132.346 71.0574 131.372 73.4285 130.215 75.8674C129.046 78.2436 127.872 80.4253 126.693 82.4125C125.576 84.3876 124.601 85.9119 123.766 86.9855C123.4 87.4474 122.997 87.7208 122.557 87.8059C122.117 87.8909 121.71 87.8069 121.335 87.5536C120.961 87.3004 120.737 86.9854 120.664 86.6086C120.603 86.2946 120.674 85.9877 120.877 85.6879C121.776 84.276 122.797 82.4822 123.94 80.3066C125.145 78.1188 126.295 75.8115 127.389 73.3847C128.546 70.9458 129.451 68.7185 130.103 66.7029C129.797 65.459 129.681 64.0157 129.754 62.3728C129.89 60.7178 130.163 59.1012 130.574 57.5232C131.049 55.933 131.634 54.5818 132.331 53.4697C133.016 52.2948 133.829 51.6162 134.771 51.4339C135.776 51.2395 136.394 51.7389 136.625 52.9321C136.819 53.9369 136.754 55.285 136.43 56.9765C136.169 58.6559 135.775 60.3281 135.251 61.9933C134.777 63.5835 134.348 64.9042 133.965 65.9556C134.83 66.0488 135.702 66.0104 136.581 65.8402C138.089 65.5486 139.353 65.0108 140.374 64.2269C141.383 63.3802 142.272 62.5892 143.042 61.8539C143.799 61.0558 144.492 60.596 145.12 60.4744C145.937 60.3165 146.513 60.433 146.849 60.824C147.236 61.14 147.49 61.612 147.612 62.24C147.843 63.4332 147.784 64.8128 147.435 66.3787C147.075 67.8818 146.774 68.8521 146.533 69.2896C146.227 70.0655 145.768 71.2293 145.156 72.781C144.532 74.2699 143.926 75.853 143.339 77.5303C142.751 79.2076 142.308 80.7917 142.011 82.2826C141.893 83.022 141.782 83.7928 141.676 84.595C141.622 85.3223 141.643 85.9371 141.74 86.4395C141.898 87.2559 142.322 87.5973 143.013 87.4636C143.641 87.3421 144.491 86.8519 145.563 85.993C146.912 84.885 148.093 83.5815 149.106 82.0825C150.169 80.5085 151.081 79.1594 151.841 78.0351C151.892 77.9602 152.113 77.5915 152.506 76.9291C152.962 76.2545 153.387 75.5861 153.78 74.9237C154.236 74.2491 154.463 73.9118 154.463 73.9118C154.654 73.5492 154.937 73.3315 155.314 73.2586C155.628 73.1978 155.947 73.3315 156.271 73.6597C156.646 73.9129 156.882 74.2908 156.979 74.7932C157.089 75.3584 157.023 75.8597 156.782 76.2973C156.095 77.7983 155.087 79.4918 153.758 81.3777C152.429 83.2637 151.234 84.8305 150.172 86.0783C149.048 87.3383 147.856 88.4159 146.596 89.3113C145.386 90.1316 144.122 90.6694 142.803 90.9246ZM161.379 89.7734C159.118 90.2109 157.458 89.8806 156.399 88.7826C155.327 87.6218 154.621 86.1622 154.281 84.4038C153.965 82.771 153.838 81.1018 153.898 79.3961C154.01 77.6154 154.145 76.1235 154.303 74.9202C154.317 74.6568 154.363 74.3874 154.44 74.1119C154.277 73.9478 154.166 73.7088 154.105 73.3948C153.899 72.3272 154.148 71.5949 154.853 71.1979C155.424 68.0904 156.178 64.915 157.114 61.6718C158.038 58.3658 159.036 55.2735 160.108 52.395C161.18 49.5164 162.142 47.0825 162.995 45.0933C163.682 43.5922 164.508 41.8035 165.475 39.7272C166.492 37.5758 167.672 35.4256 169.015 33.2763C170.421 31.1149 172.013 29.2432 173.792 27.6611C175.559 26.0163 177.509 24.9873 179.645 24.5742C181.403 24.2339 182.701 24.3738 183.537 24.9937C184.437 25.6015 185.008 26.5334 185.251 27.7894C185.482 28.9825 185.466 30.4188 185.205 32.0981C184.944 33.7775 184.506 35.5561 183.892 37.4339C183.035 40.0755 181.718 43.0341 179.941 46.3096C178.165 49.5852 176.13 52.878 173.839 56.1879C171.548 59.4979 169.082 62.581 166.443 65.4372C163.803 68.2934 161.141 70.6978 158.457 72.6505C158.311 73.9166 158.112 75.5838 157.861 77.6521C157.597 79.6576 157.618 81.4453 157.921 83.0153C158.128 84.0829 158.524 84.951 159.109 85.6195C159.683 86.2252 160.566 86.4127 161.759 86.1818C162.638 86.0117 163.689 85.5478 164.91 84.7902C166.182 83.9577 167.588 82.8062 169.128 81.3355C170.882 79.6279 172.494 77.6873 173.963 75.5137C175.432 73.3402 176.718 71.2344 177.822 69.1966C178.063 68.759 178.309 68.516 178.561 68.4674C178.875 68.4066 179.2 68.5717 179.536 68.9627C179.923 69.2787 180.165 69.688 180.262 70.1904C180.384 70.8183 180.324 71.3511 180.083 71.7887C179.396 73.2897 178.388 74.9832 177.059 76.8691C175.793 78.7429 174.623 80.2723 173.549 81.4573C173.006 82.0184 172.35 82.6666 171.58 83.4019C170.81 84.1372 169.524 85.2331 167.721 86.6895C166.813 87.3864 165.793 88.0072 164.661 88.5521C163.603 89.1476 162.509 89.5547 161.379 89.7734ZM165.319 49.5298C163.97 52.6575 162.815 55.7802 161.855 58.8978C160.894 62.0154 160.092 64.9395 159.448 67.6702C162.45 65.0045 165.355 61.8363 168.163 58.1658C170.959 54.4325 173.441 50.5968 175.611 46.6588C177.781 42.7209 179.422 39.0807 180.534 35.7382C181.531 32.809 181.896 30.6536 181.629 29.272C181.422 28.2044 180.816 27.7678 179.812 27.9623C178.304 28.2539 176.805 29.2606 175.314 30.9825C173.823 32.7043 172.43 34.7654 171.136 37.1659C169.829 39.5035 168.679 41.8108 167.687 44.0877C166.694 46.3646 165.905 48.1787 165.319 49.5298ZM182.029 84.4096C180.271 84.7498 178.855 84.5026 177.781 83.6679C176.758 82.7583 176.095 81.5185 175.791 79.9485C175.451 78.1901 175.558 76.0519 176.114 73.5339C176.72 70.941 177.627 68.2245 178.837 65.3844C180.046 62.5444 181.449 59.8623 183.046 57.3383C184.693 54.7393 186.425 52.58 188.242 50.8602C190.047 49.0776 191.829 48.0162 193.587 47.676C194.78 47.4451 195.979 47.4087 197.182 47.5668C198.373 47.662 199.411 48.1452 200.296 49.0164C201.244 49.8753 201.907 51.2782 202.284 53.225C202.417 53.9158 202.326 54.4546 202.01 54.8415C201.694 55.2284 201.379 55.4523 201.065 55.513C200.374 55.6467 199.98 55.4623 199.883 54.9599C199.18 53.0111 198.266 51.8199 197.139 51.3863C196.076 50.9406 195.104 50.8028 194.225 50.9729C192.969 51.216 191.615 52.1295 190.162 53.7136C188.71 55.2976 187.293 57.2332 185.911 59.5202C184.529 61.8072 183.272 64.233 182.14 66.7976C181.058 69.2872 180.246 71.6593 179.705 73.9139C179.152 76.1058 179.003 77.8611 179.258 79.1799C179.38 79.8079 179.583 80.3549 179.869 80.8208C180.217 81.2746 180.643 81.4529 181.145 81.3557C182.087 81.1734 183.215 80.4341 184.527 79.1376C185.84 77.8412 187.192 76.244 188.584 74.3459C190.027 72.3729 191.426 70.3431 192.781 68.2567C194.136 66.1702 195.353 64.2083 196.431 62.371C197.508 60.5337 198.333 59.0711 198.904 57.9833C199.172 57.3452 199.588 56.9715 200.153 56.8621C200.593 56.7771 201.031 56.8551 201.469 57.0962C201.907 57.3373 202.174 57.709 202.271 58.2114C202.32 58.4626 202.28 58.7634 202.153 59.1139C201.847 59.8897 201.501 60.9664 201.116 62.3439C200.794 63.7092 200.459 65.1749 200.11 66.7408C199.824 68.2945 199.583 69.7419 199.387 71.083C199.241 72.3491 199.229 73.2961 199.35 73.9241C199.472 74.5521 199.752 74.8235 200.192 74.7385C200.506 74.6777 200.852 74.4478 201.231 74.0488C201.673 73.6376 202.058 73.2699 202.386 72.9458C203.65 71.3982 204.839 69.7999 205.953 68.151C207.056 66.4393 208.05 64.8461 208.938 63.3714C209.128 63.0088 209.412 62.791 209.788 62.7181C210.102 62.6574 210.422 62.7911 210.746 63.1193C211.12 63.3725 211.356 63.7503 211.454 64.2527C211.563 64.8179 211.497 65.3193 211.256 65.7568C210.506 67.27 209.473 69.001 208.156 70.9497C206.827 72.8356 205.626 74.3711 204.552 75.5561C203.845 76.2793 202.981 77.0328 201.96 77.8167C200.99 78.5257 200.002 78.9774 198.997 79.1718C198.244 79.3176 197.573 79.2193 196.986 78.877C196.386 78.4718 195.971 77.6726 195.74 76.4794C195.558 75.5374 195.508 74.4394 195.591 73.1855C195.675 71.9316 195.814 70.6341 196.011 69.293C194.617 71.5172 193.092 73.7344 191.434 75.9444C189.777 78.1544 188.128 80.0697 186.487 81.6902C184.897 83.2358 183.411 84.1422 182.029 84.4096Z" fill="#5E5433"/>
        <path d="M150.264 195.216C147.94 195.666 145.766 195.37 143.74 194.329C141.714 193.287 140.398 191.197 139.79 188.057C139.294 185.156 139.259 181.775 139.684 177.914C140.173 174.04 140.945 169.949 142 165.641C143.119 161.32 144.369 157.006 145.751 152.699C147.183 148.318 148.595 144.168 149.987 140.25C151.379 136.332 152.599 132.871 153.646 129.867C154.119 128.603 154.407 127.57 154.513 126.768C154.606 125.903 154.604 125.219 154.507 124.717C154.276 123.524 153.438 123.067 151.994 123.346C151.052 123.529 149.939 124.005 148.654 124.774C147.42 125.469 146.148 126.302 144.838 127.272C143.577 128.167 142.449 129.07 141.452 129.979C140.443 130.826 139.724 131.486 139.295 131.96C134.052 137.861 129.508 144.343 125.662 151.407C124.927 152.657 123.949 154.507 122.73 156.958C121.561 159.334 120.252 161.998 118.803 164.95C117.406 167.826 115.988 170.772 114.552 173.786C113.166 176.725 111.87 179.452 110.662 181.966C109.517 184.467 108.57 186.475 107.821 187.988C107.146 189.552 106.809 190.334 106.809 190.334C106.478 190.984 105.999 191.37 105.371 191.492C104.367 191.686 103.767 191.281 103.572 190.276C103.512 189.962 103.539 189.598 103.655 189.185C103.655 189.185 103.859 188.559 104.268 187.307C104.728 185.98 105.304 184.24 105.995 182.087C106.686 179.934 107.44 177.605 108.259 175.101C109.14 172.585 109.959 170.081 110.714 167.59C111.47 165.098 112.143 162.851 112.732 160.847C114.246 155.538 115.159 150.996 115.471 147.222C115.846 143.436 115.803 140.35 115.341 137.963C114.624 134.258 113.284 131.879 111.321 130.825C109.358 129.772 107.278 129.458 105.08 129.883C100.872 130.697 97.0677 132.248 93.6664 134.535C90.2528 136.759 87.2191 139.43 84.5652 142.55C81.9741 145.657 79.8398 148.937 78.1623 152.389C76.5476 155.828 75.4099 159.208 74.7493 162.529C74.1394 165.774 74.0775 168.652 74.5635 171.164C75.0739 173.802 76.2467 175.823 78.082 177.227C79.9051 178.568 82.418 178.929 85.6208 178.309C88.384 177.774 90.818 176.717 92.9228 175.137C95.0277 173.557 96.7638 171.755 98.1313 169.731C99.4867 167.645 100.428 165.606 100.955 163.615C101.532 161.549 101.681 159.793 101.402 158.349C100.928 155.9 99.4033 154.924 96.8285 155.422L96.7343 155.441C96.1691 155.55 95.7052 155.509 95.3426 155.319C95.0307 155.054 94.8443 154.764 94.7836 154.45C94.6013 153.508 95.2637 152.891 96.7709 152.599C99.0945 152.15 100.912 152.45 102.222 153.499C103.521 154.486 104.346 155.89 104.698 157.711C105.063 159.595 104.93 161.771 104.3 164.238C103.67 166.705 102.551 169.17 100.942 171.631C99.3841 174.017 97.3197 176.143 94.7489 178.009C92.2288 179.799 89.2731 181.023 85.8819 181.679C81.486 182.529 78.0645 182.019 75.6175 180.147C73.1704 178.275 71.6128 175.612 70.9445 172.158C70.0331 167.448 70.6502 162.051 72.7958 155.968C74.3154 151.7 76.5368 147.524 79.4602 143.44C82.4343 139.281 86.0383 135.685 90.2723 132.65C94.5063 129.616 99.2609 127.589 104.536 126.568C108.995 125.705 112.279 126.177 114.387 127.984C116.559 129.779 117.96 132.31 118.592 135.575C119.066 138.024 119.225 140.697 119.069 143.594C118.901 146.428 118.538 149.267 117.981 152.111C117.486 154.943 116.918 157.562 116.276 159.966C115.696 162.359 115.189 164.281 114.753 165.733C116.38 162.357 117.892 159.23 119.29 156.353C120.688 153.477 121.768 151.313 122.53 149.863C123.899 147.513 125.616 144.77 127.681 141.635C129.733 138.436 132.029 135.321 134.57 132.288C137.161 129.181 139.868 126.507 142.692 124.266C145.579 122.014 148.53 120.596 151.544 120.013C155.249 119.296 157.4 120.476 157.995 123.553C158.372 125.5 158.024 127.913 156.952 130.791C156.62 131.768 156.013 133.514 155.132 136.03C154.239 138.483 153.185 141.456 151.971 144.948C150.808 148.365 149.631 152.046 148.44 155.99C147.249 159.934 146.183 163.854 145.243 167.75C144.302 171.645 143.64 175.291 143.255 178.689C142.858 182.023 142.878 184.821 143.315 187.081C143.655 188.84 144.306 190.18 145.266 191.102C146.289 192.011 147.711 192.29 149.532 191.937C151.102 191.634 152.656 190.91 154.193 189.765C155.743 188.683 156.866 187.587 157.563 186.474C157.78 185.911 158.203 185.569 158.831 185.447C159.27 185.362 159.671 185.415 160.034 185.606C160.409 185.859 160.638 186.205 160.724 186.645C160.821 187.147 160.743 187.586 160.489 187.96C159.412 189.798 157.922 191.357 156.019 192.637C154.192 193.968 152.274 194.827 150.264 195.216ZM172.809 143.75C172.055 143.896 171.316 143.778 170.59 143.398C169.916 142.942 169.5 142.306 169.342 141.489C169.172 140.61 169.314 139.833 169.77 139.159C170.226 138.484 170.862 138.068 171.679 137.91C172.558 137.74 173.335 137.883 174.009 138.338C174.684 138.794 175.106 139.462 175.276 140.341C175.434 141.157 175.254 141.909 174.735 142.596C174.267 143.207 173.625 143.592 172.809 143.75ZM164.335 174.707C163.519 174.865 162.817 174.773 162.23 174.431C161.63 174.026 161.227 173.289 161.02 172.222C160.765 170.903 160.769 169.241 161.033 167.235C161.284 165.167 161.718 163.031 162.334 160.827C162.937 158.56 163.64 156.469 164.443 154.555C165.296 152.566 166.159 150.966 167.032 149.754C167.386 149.23 167.878 148.906 168.506 148.785C169.008 148.688 169.472 148.728 169.897 148.907C170.323 149.085 170.572 149.362 170.645 149.739C170.706 150.053 170.609 150.398 170.356 150.772C170.002 151.297 169.576 152.129 169.08 153.267C168.634 154.33 168.2 155.457 167.779 156.646C167.345 157.772 167.038 158.711 166.858 159.463C166.524 160.765 166.157 162.237 165.758 163.878C165.359 165.519 165.093 166.84 164.962 167.843C164.895 168.508 164.892 168.997 164.952 169.311C165.086 170.002 165.404 170.298 165.907 170.201C166.346 170.116 166.812 169.831 167.304 169.344C167.784 168.795 168.214 168.321 168.593 167.922C169.92 166.363 171.109 164.764 172.16 163.128C173.263 161.416 174.257 159.823 175.145 158.348C175.335 157.985 175.619 157.768 175.995 157.695C176.309 157.634 176.629 157.768 176.953 158.096C177.327 158.349 177.563 158.727 177.661 159.229C177.77 159.794 177.704 160.296 177.463 160.733C176.776 162.234 175.743 163.965 174.363 165.926C173.034 167.812 171.833 169.348 170.759 170.533C170.064 171.319 169.087 172.159 167.827 173.055C166.63 173.938 165.466 174.489 164.335 174.707ZM183.463 172.765C180.825 173.276 178.688 173.005 177.051 171.954C175.477 170.89 174.49 169.322 174.089 167.25C173.627 164.863 173.661 162.512 174.189 160.194C174.781 157.864 175.529 155.668 176.432 153.603C177.743 150.613 179.478 147.965 181.638 145.658C183.848 143.275 186.335 141.817 189.098 141.282C190.919 140.93 192.26 141.127 193.121 141.872C193.97 142.555 194.516 143.524 194.759 144.78C195.014 146.099 194.999 147.535 194.713 149.089C194.415 150.58 194 151.8 193.467 152.75C193.125 153.338 192.702 153.68 192.2 153.777C191.195 153.972 190.608 153.629 190.437 152.75C190.352 152.311 190.462 151.866 190.766 151.416C191.019 151.042 191.256 150.246 191.477 149.031C191.748 147.741 191.799 146.656 191.629 145.777C191.459 144.897 191.085 144.481 190.508 144.528C190.307 144.501 190.05 144.519 189.736 144.579C188.48 144.822 187.164 145.598 185.789 146.907C184.401 148.152 183.137 149.7 181.996 151.55C180.856 153.399 179.953 155.3 179.288 157.253C178.739 158.792 178.366 160.396 178.167 162.063C177.968 163.73 177.978 165.129 178.197 166.259C178.428 167.453 178.956 168.328 179.78 168.885C180.667 169.43 181.802 169.569 183.183 169.301C185.381 168.876 187.558 167.836 189.714 166.181C191.932 164.514 193.673 162.907 194.937 161.359C195.987 160.048 196.936 158.725 197.785 157.388C198.621 155.988 199.413 154.694 200.161 153.507C200.351 153.145 200.635 152.927 201.012 152.854C201.326 152.793 201.645 152.927 201.969 153.255C202.344 153.509 202.58 153.886 202.677 154.389C202.786 154.954 202.721 155.455 202.479 155.893C201.73 157.406 200.697 159.137 199.38 161.086C198.051 162.972 196.849 164.507 195.776 165.692C194.26 167.288 192.363 168.763 190.084 170.116C187.805 171.469 185.598 172.352 183.463 172.765ZM206.958 169.197C204.823 169.61 203.2 169.305 202.09 168.282C200.968 167.196 200.23 165.742 199.878 163.921C199.586 162.414 199.49 160.739 199.59 158.895C199.74 156.977 200.021 155.065 200.435 153.161C200.024 150.7 200.215 148.155 201.009 145.525C201.866 142.884 203.242 140.565 205.136 138.57C207.093 136.563 209.579 135.267 212.593 134.684C215.545 134.113 217.75 134.566 219.208 136.043C220.73 137.507 221.715 139.401 222.165 141.725C222.432 143.107 222.548 144.55 222.514 146.055C222.467 147.497 222.314 148.895 222.055 150.248C221.795 151.602 221.416 153.01 220.918 154.475C220.407 155.877 219.803 157.297 219.104 158.735C220.927 158.057 222.444 157.144 223.656 155.998C224.918 154.776 226.113 153.209 227.242 151.297C228.37 149.385 229.665 146.984 231.125 144.096C231.417 143.583 231.783 143.284 232.222 143.199C232.725 143.102 233.163 143.18 233.538 143.433C233.976 143.674 234.243 144.046 234.34 144.548C234.413 144.925 234.354 145.295 234.164 145.658C232.829 148.522 231.414 151.141 229.919 153.515C228.486 155.877 226.718 157.848 224.613 159.428C222.508 161.008 219.823 162.114 216.557 162.746C215.305 164.356 213.879 165.74 212.279 166.897C210.678 168.053 208.905 168.82 206.958 169.197ZM207.701 143.742C207.056 144.453 206.364 145.759 205.625 147.662C204.885 149.564 204.27 151.605 203.78 153.784C204.282 155.707 205.408 157.313 207.156 158.604C208.955 159.819 211.411 160.224 214.524 159.817C216.36 157.181 217.683 154.254 218.493 151.035C219.292 147.753 219.46 144.919 218.998 142.533C218.682 140.9 218.05 139.654 217.102 138.795C216.154 137.936 214.864 137.665 213.231 137.981C212.101 138.2 211.038 138.601 210.044 139.184C209.049 139.767 208.173 140.458 207.415 141.256C207.79 141.509 208.02 141.856 208.105 142.295C208.202 142.798 208.067 143.28 207.701 143.742ZM203.138 163.095C203.333 164.1 203.679 164.879 204.178 165.435C204.727 165.915 205.441 166.07 206.32 165.9C208.141 165.547 209.884 164.624 211.549 163.129C209.643 163.041 207.971 162.648 206.533 161.949C205.082 161.188 203.89 160.246 202.956 159.123C202.871 160.703 202.932 162.027 203.138 163.095Z" fill="#5E5433"/>
        <path d="M132.06 122.69C130.514 122.989 129.201 122.925 128.12 122.499C127.4 122.215 126.886 121.83 126.581 121.345C126.269 120.83 126.066 120.325 125.97 119.829C125.8 118.954 125.876 118.017 126.197 117.017C126.547 116.011 127.037 115.024 127.666 114.055C128.325 113.08 129.032 112.202 129.789 111.421C130.569 110.604 131.324 109.974 132.055 109.53C132.324 109.357 132.596 109.198 132.871 109.054C133.169 108.876 133.455 108.714 133.73 108.57C133.486 108.406 133.252 108.209 133.026 107.98C132.795 107.723 132.59 107.445 132.411 107.146C132.18 106.737 132.031 106.358 131.964 106.008C131.777 105.045 131.958 104.103 132.506 103.18C133.053 102.257 133.781 101.405 134.689 100.624C135.626 99.838 136.591 99.1974 137.584 98.7026C138.572 98.1786 139.416 97.8489 140.116 97.7135C141.166 97.5104 141.989 97.6233 142.587 98.0523C143.179 98.4522 143.542 99.002 143.678 99.702C143.79 100.285 143.749 100.853 143.553 101.405C143.358 101.957 143.128 102.41 142.863 102.764C142.622 103.083 142.4 103.262 142.196 103.302C141.962 103.347 141.817 103.224 141.761 102.932C141.699 102.611 141.793 102.079 142.042 101.335C142.196 100.881 142.24 100.479 142.172 100.129C142.093 99.7212 141.853 99.4196 141.452 99.2249C141.081 99.0245 140.539 99.0386 139.827 99.2671C139.336 99.3922 138.711 99.6796 137.951 100.129C137.22 100.573 136.492 101.108 135.765 101.732C135.033 102.328 134.447 102.971 134.006 103.661C133.564 104.352 133.406 105.018 133.53 105.659C133.603 106.038 133.773 106.369 134.039 106.65C134.467 107.142 135.057 107.451 135.807 107.578L135.851 107.57C136.412 107.34 136.864 107.177 137.209 107.08C137.582 106.978 137.824 106.901 137.935 106.849C138.023 106.832 138.096 106.818 138.154 106.807C138.236 106.761 138.306 106.732 138.364 106.721C138.831 106.63 139.183 106.653 139.421 106.788C139.688 106.918 139.845 107.1 139.89 107.333C139.935 107.566 139.846 107.811 139.623 108.065C139.429 108.315 139.084 108.487 138.589 108.583C138.151 108.668 137.731 108.764 137.328 108.872C136.949 108.946 136.597 108.999 136.27 109.032C135.797 109.244 135.274 109.512 134.701 109.835C134.122 110.128 133.552 110.465 132.991 110.846C132.452 111.193 131.84 111.704 131.155 112.382C130.492 113.024 129.85 113.769 129.227 114.615C128.628 115.427 128.151 116.246 127.796 117.071C127.465 117.861 127.364 118.591 127.494 119.262C127.595 119.787 127.782 120.205 128.054 120.515C128.349 120.791 128.695 121.011 129.09 121.177C129.223 121.242 129.354 121.292 129.482 121.328C129.639 121.358 129.782 121.391 129.91 121.427C130.527 121.489 131.171 121.455 131.841 121.325C133.037 121.094 134.261 120.615 135.512 119.889C136.792 119.157 137.907 118.351 138.856 117.472C139.524 116.859 140.158 116.07 140.759 115.107C141.388 114.138 141.695 113.065 141.679 111.888C141.3 111.962 140.906 112.038 140.498 112.117C140.084 112.167 139.69 112.243 139.317 112.345C138.937 112.419 138.564 112.521 138.196 112.653C137.852 112.75 137.545 112.885 137.276 113.058C136.727 113.346 136.497 113.723 136.587 114.19C136.604 114.277 136.636 114.362 136.682 114.444C136.757 114.52 136.818 114.599 136.864 114.681C136.974 114.78 137.037 114.874 137.054 114.961C137.088 115.136 137.029 115.299 136.877 115.45C136.748 115.565 136.581 115.643 136.377 115.682C136.115 115.733 135.879 115.688 135.67 115.547C135.113 115.171 134.787 114.735 134.691 114.239C134.505 113.276 135.049 112.415 136.324 111.654C136.651 111.469 137.001 111.326 137.375 111.223C137.772 111.086 138.186 110.961 138.618 110.847C138.846 110.772 139.062 110.715 139.266 110.676C139.499 110.631 139.732 110.586 139.966 110.541C140.199 110.495 140.432 110.45 140.666 110.405C140.899 110.36 141.12 110.332 141.33 110.322C142.03 110.186 142.756 110.031 143.509 109.855C144.285 109.644 145.001 109.355 145.655 108.986C146.339 108.611 146.861 108.102 147.22 107.458C147.309 107.289 147.426 107.191 147.572 107.163C147.834 107.112 147.999 107.262 148.067 107.612C148.124 107.903 148.081 108.229 147.939 108.589C147.873 108.874 147.693 109.197 147.4 109.556C147.106 109.915 146.866 110.159 146.678 110.286C146.233 110.644 145.699 110.929 145.074 111.141C144.449 111.352 143.802 111.523 143.131 111.653C143.286 112.924 142.986 114.267 142.232 115.684C141.472 117.072 140.45 118.283 139.168 119.318C138.173 120.115 137.038 120.819 135.764 121.429C134.49 122.038 133.256 122.459 132.06 122.69Z" fill="#5E5433"/>
        </svg>
    )
};
