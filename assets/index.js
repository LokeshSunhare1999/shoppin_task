
const ICONS = {
  ARROW_UP :"https://www.reshot.com/preview-assets/icons/9ECRMJ2GNT/arrow-chevron-up-9ECRMJ2GNT.svg",
  ARROW_DOWN: "https://www.reshot.com/preview-assets/icons/EUCMLYADT9/arrow-chevron-down-EUCMLYADT9.svg",
  NEXT_ARROW: "https://www.reshot.com/preview-assets/icons/WDGHUKQ634/arrow-chevron-right-WDGHUKQ634.svg",
  PREV_ARROW: "https://www.reshot.com/preview-assets/icons/975UQXVKZF/arrow-chevron-left-975UQXVKZF.svg",
  APPLE_ICON:
    " https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-watch-design-studio-logo?wid=236&hei=52&fmt=jpeg&qlt=90&.v=1566849941844",
  APPLE_CASE_ALUMINUM_BLACK: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
  WATCH_BLACK_SIDE_VIEW:"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=S01mb3pHMHA2MzFpM1RZVVFGV0dVRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzRuUWsvSndwZkZQSHB4L3lvZ1B2V3ZCbWtNN0I0OEtHSU9TYzk0a1F1ZzFERlNXbWdiWWFMSHpqd3BBNUoxU1YzdG5TRTFsUDY4WC9xSGhtcnppYkpsMA",
  WATCH_BLACK_SIDE_VIEW_2:"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY8U3ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=NXNWTXJEcUF2Z3JXSlZGSUpDVFZkRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzRuUWsvSndwZkZQSHB4L3lvZ1B2V3ZCbWtNN0I0OEtHSU9TYzk0a1F1ZzFERlNXbWdiWWFMSHpqd3BBNUoxU1YzdG5TRTFsUDY4WC9xSGhtcnppYkpsMA",
  BAND_1: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=czdWc1FNWHZRRGZrVTlpcjVQTEJxVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
  BAND_2:"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY9N3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=ZnlqdHRiU2VyRzNkN0xzUWEvcFV6VHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
  BAND_3: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY8U3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=WnJuZm5OaVpQcG01bXU3Q3dIelF1anVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
  BAND_4: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYGD3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=ZmhnZ3I4WEF6MHlienFPSitGVEhLenVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRC9NZXZJNEg2TlhtcnQrZHBEZ3YxRDA",
  BAND_5: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MMWK3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=YXh5RElQd2dkNmtpS0V1WmRGYjBZVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRC9NZXZJNEg2TlhtcnQrZHBEZ3YxRDA",
  BAND_6: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY803ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=Yk9SM2Y3YXpqSmgvQXZWL1c2b2kzanVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
  BAND_7: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY4E3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=WWFPWVdOaVBWUVlxcC9vczNtNUtrRHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRHo3dVZ6ekhOOGpwOW00bzV1Ni8rVGc",
  BAND_8: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY223ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=a05hRzZlMmEyZ2xiTE1nYnJFd09vVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRHo3dVZ6ekhOOGpwOW00bzV1Ni8rVGc",
  BAND_9: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MRTN3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=aFNwbVFMUWhCcFErNGF0dTlIQndZVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRC9NZXZJNEg2TlhtcnQrZHBEZ3YxRDA",
  CASE_1: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-gold-cell-s10_VW_PF+watch-face-46-titanium-gold-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqa2NVRDBtRHBIdlNvZFpvSFN3SFNrVXlKN3h2cmJhZy9Wa2xIdm9lcGFpb285ZnlFYUluNlVpdEVDTlo4UFJtQnVWV3Bsak5WR3RZeXgwZTJxZ1FBQWQwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdUYVhFbmVlOVBZQVJ6YVVMREY4VVdDSkxMYjhBbEZsbUNjbmtLUUgvNzJC",
  CASE_2: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-slate-cell-s10_VW_PF+watch-face-46-titanium-slate-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqcVNqaHozUE8wNjI5UVd3V1MzZU9ITDk1ZDUyeHhvREd4VE1qbnlsOGRsRkpsRGF2TDgzZHo4RzR2eUh2TDZyckFIRjBBZXk0a1ZITlZxZjFUK21za1dGb0grci9sTHk0cW5yeWNFd2tRMXRGdEhRVmRIZVBLS2FtUFNyZG1CeE40OVlNTUpXNVJHaTMrakMzTkw0cUFRY2xKemp2MTFPaUhOWjNINUFjT21B",
  CASE_3: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-rosegold-nc-s10_VW_PF+watch-face-46-aluminum-rosegold-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3MFhCVTI0TG9VSWowa2ZNaXhKRWFaSm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWVRZ3NtU2dFUnRuSVJhQzVBeFVadWtFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
  CASE_4: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-silver-nc-s10_VW_PF+watch-face-46-aluminum-silver-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3Ni9MMjFrdVpVbER4UTlYL0F6UUxMTXlKN3h2cmJhZy9Wa2xIdm9lcGFpb09vMDVrRDBTL1JGOWgwenZrMUlPenphRldCVytibDdFVW4zaGQraXo4V2lGb0grci9sTHk0cW5yeWNFd2tRMXRGdEhRVmRIZVBLS2FtUFNyZG1CeE40OVlNTUpXNVJHaTMrakMzTkw0cUFRY2xKemp2MTFPaUhOWjNINUFjT21B",
  CASE_5: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-starlight-nc-se_VW_PF+watch-face-44-aluminum-starlight-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvVjhlS0RvbExkSVZPek5xRFljdmd2Q3U5WFZLblQ0SkVHaitZL0Z5WWg5UEdKYzBybzh0cjZNM3RYT2JlTWxscFdBdFlkNzJTZjYrUjBZdGZXNnQ2RWtFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0o1dGtMOHZpK0hVNkRlVmdGZ0tBZ0lDWGlpUXYzUUlIWENBV1U1eFVacWtW",
  Size_1: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXJW3ref_VW_PF+watch-case-46-titanium-silver-cell-hermes10s_VW_PF+watch-face-46-radial-blanc-hermes10s_VW_PF?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=VG9xMXpsRkMyWnFGR2k4b1hyTVZlVjc2ek0xUHdNTlBtcXF4YkRsWDhTUnRJUi9KZ2JQQ3FtZzVoZCtzaUhsaUtNSEJXZzY0dGViMnd4cGpqQjY2a2RWV3hpVVVJK2lleFFQbkZNUEppU0ZNcC9NamN4b2JBWFFlNmxHNm1SeGloalpZbEI2VGZmSVV5VGtPYWhPQ0JoNzQyZmlkSVFmbjY5Y04rQ0tZTmFKSHU3NmZyQzBTVVZ5ZWlSanV5V2tOdkZ1emhkYWNycmJka1dOU01FKzNBbXlCVWdiVzZ0ZHgzVmRvQ2ROS04wd05mdU9YZFdIWitVb3l1Y2lKRlAzMw",
  Size_2: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXJW3ref_VW_PF+watch-case-46-titanium-silver-cell-hermes10s_VW_PF+watch-face-46-radial-blanc-hermes10s_VW_PF?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=VG9xMXpsRkMyWnFGR2k4b1hyTVZlVjc2ek0xUHdNTlBtcXF4YkRsWDhTUnRJUi9KZ2JQQ3FtZzVoZCtzaUhsaUtNSEJXZzY0dGViMnd4cGpqQjY2a2RWV3hpVVVJK2lleFFQbkZNUEppU0ZNcC9NamN4b2JBWFFlNmxHNm1SeGloalpZbEI2VGZmSVV5VGtPYWhPQ0JoNzQyZmlkSVFmbjY5Y04rQ0tZTmFKSHU3NmZyQzBTVVZ5ZWlSanV5V2tOdkZ1emhkYWNycmJka1dOU01FKzNBbXlCVWdiVzZ0ZHgzVmRvQ2ROS04wd05mdU9YZFdIWitVb3l1Y2lKRlAzMw",
  PRODUCT_PAGE: 'https://www.apple.com/shop/buy-watch/apple-watch?configured=true&option.watch_cases=MWX13LW/A&option.watch_bands=MYA33AM/A&product=Z0YQ&step=select',
  
};

export default ICONS;
