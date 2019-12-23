ReadMe



Working with Video

If you need to work with video instead of lottie.

Steps
- remove the lottie data from the photo scenes folders (otherwise both will render)
- in CSS line:220 comment out:

.video-scene {
   display: none;                                        
}

- Export your clips in .mp4 into the video scene folders with the title of 'video':
ie: Video/scene-1
