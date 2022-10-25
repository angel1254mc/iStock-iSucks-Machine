const ffmpegExtractFrames = require('ffmpeg-extract-frames');
let extract_frames = async (frame, num) => {
    await ffmpegExtractFrames({
        input: 'video.mp4',
        output: `./frames-${num}/screenshot-%i.jpg`,
        offsets: frame
    })
}
let main_func = async (curr_second) => {
    for (let i = curr_second; i < 12; i++)
    {
        let times_arr = [];
        for (let j = i*1000; j < (i+1)*1000; j+=16)
        {
            times_arr.push(j);
        }
        await extract_frames(times_arr, i);
        console.log(i);
    }
}

let true_main_function = async () => {
    await main_func(0);
}
true_main_function();