import { useState } from "react";
import { DefaultCallToActions } from "@/app/utils/constants";
import { IOutroView, ISelectOpions } from "@/app/utils/interfaces";
import Tooltip from "@/app/components/Tooltip";


export default function OutroView({handleChange, formValues}:IOutroView){

    const [customAction, setCustomeAction] = useState<string>("");

    function handleChangeSelect(target :{target: any}){
        handleChange(target)
        setCustomeAction("")
    }
    

    function handleChangeCustomeAction({ target }:{target: any}) {
        setCustomeAction(target.value)
        const newtarget = {target: {...target, "name":"action"}}
        handleChange(newtarget)
    }

    const countCustomAction = customAction.length || 0


    return(
        <div className="">
            <div className="text-[#191C26] inline-flex items-center gap-2">
                Outro
                <Tooltip text={"We will show the call to action at the end of the clip"} />
            </div>
           
            <div className="flex justify-between grid-cols-2 mt-10">
                <p className="text-[#191C26] font-light text-sm">Call to action</p>
                <p>
                    <select 
                        required
                        name="action" 
                        className="text-sm font-light h-[32px] border border-solid border-[#EBEBEB] rounded-md px-2 focus:outline-none focus:border-[#EBEBEB]"
                        onChange={(e) => handleChangeSelect(e)}
                        defaultValue={customAction ? "" : formValues?.action}
                        >
                        <option value={""} selected={!!customAction}>Select</option>
                        {DefaultCallToActions?.map((action: ISelectOpions, idx: number) => (
                            <option key={idx} value={action.label}>{action.label}</option>
                        ))}
                    </select>
                </p>

            </div>
            <div className="flex justify-between mt-10">
                <p className="text-[#191C26] font-light text-sm">Custom call to action</p>
                <p>
                    <textarea
                        value={customAction}
                        onChange={handleChangeCustomeAction}
                        cols={35} 
                        rows={3} 
                        maxLength={20}
                        name="customAction" 
                        className=" text-sm font-light border border-solid border-[#EBEBEB] rounded-md p-2 focus:outline-none focus:border-[#EBEBEB]" 
                        placeholder="The Most Amazing Podcast Ever!"
                    /><br/>
                    <small className="float-end text-[#191C26B2]">{countCustomAction}/20</small>
                </p>
            </div>

        </div>
    )
}