import { exec } from 'child_process';
import { NextApiRequest, NextApiResponse } from 'next';
import ffmpeg from "fluent-ffmpeg";


export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const {brandKitName, action} = req.body

  console.log('req--->',req.body)

  try {
    const backgroundVideoPath = "./public/output.mp4";

    const outputFolder = "./public/output-outro";

    const blankVideoPath = `${outputFolder}/output.mp4`;

    ffmpeg()
      .input("color=black@0.0:size=720x1280")
      .inputOptions("-t 20")
      .inputFormat("lavfi")
      .output(blankVideoPath)
      .on("end", () => {
        ffmpeg()
          .input(backgroundVideoPath)
          .input(blankVideoPath)
          .complexFilter([
            {
              filter: "drawtext",
              options: {
                text: action,
                fontfile: "./public/OpenSans-Regular.ttf", 
                fontsize: 32,
                fontcolor: "#FF00F2",
                x: "(w-text_w)/2",
                y: "(h-text_h)/2",
                enable: "between(t,0,4)", 
              },
            },
          ])
          .output(`${outputFolder}/${brandKitName}.mp4`)
          .on("end", () => console.log("Outro video generation completed"))
          .on("error", (err) => console.error(`Error: ${err.message}`))
          .run();
      })
      .on("error", (err) => console.error(`Error: ${err.message}`))
      .run();

    res.json({success: true, message: "Outro successfully generated"});
  } catch (error) {
    console.log("error--->", error);
    res.json({success: false, message: "error occured"});
  }
}
