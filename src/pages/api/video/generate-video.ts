import { exec } from 'child_process';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const text = 'test text';
  const fontSize = 32;
  const textColor = '#FF00F2';
  const durationInSeconds = 20;

  // Execute FFmpeg command to generate video
  exec(
    `ffmpeg -f lavfi -i color=c=black:s=640x480:d=${durationInSeconds} -vf "drawtext=text='${text}':fontcolor=${textColor}:fontsize=${fontSize}:x=(w-text_w)/2:y=(h-text_h)/2" output.mp4`,
    (error, stdout, stderr) => {
      if (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: 'Video generation failed' });
      }
      console.log('Video generated:', stdout);
      res.status(200).json({ message: 'Video generated successfully' });
    }
  );
}