import { useEffect, useState } from "react";
import { DefaultCallToActions } from "../utils/constants";
import { INavMenu, IOutroView, ISelectOpions } from "../utils/interfaces";


export default function OutroView({formValues, setFormValues}:IOutroView){

    const [calltoActionList, setCalltoActionList] = useState<any>(DefaultCallToActions);

    // useEffect(() =>{
    //     // wait to 2sec before setting new option

        
    //     setTimeout(() => {
    //         if(formValues.customAction){

    //             const newOption = {
    //                 label: formValues.customAction,
    //                 value: "customAction"
    //             }
    //             const updatedList = calltoActionList.map((obj: any) => {
    //                 if (obj.value === "customAction") {
    //                   return { ...obj, ...newOption }; // Update the object's properties
    //                 }else{
    //                     return { ...obj, ...newOption }; 
    //                 }
    //               });
    //             console.log("setCalltoActionList---",updatedList)
    //             setCalltoActionList([...calltoActionList, ...updatedList])
    //         }
    //     }, 2000);
    // },[formValues.customAction])
    

    function handleChange({ target }:{target: any}) {
        setFormValues({ ...formValues, [target.name]: target.value});
    }

    const countCustomAction = formValues?.customAction?.length || 0


    console.log("formValues--->",formValues)

    return(
        <div className="">
            <div className="text-[#191C26] inline-flex items-center gap-2">
                Outro
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7.5" stroke="black"/>
                    <path d="M8 4V7.55556" stroke="#191C26" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 11.1133H8.00889" stroke="#191C26" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <div className="flex justify-between grid-cols-2 mt-10">
                <p className="text-[#191C26] font-light text-sm">Call to action</p>
                <p>
                    <select 
                    required
                        name="action" 
                        className="text-sm font-light h-[32px] border border-solid border-[#EBEBEB] rounded-md px-2 focus:outline-none focus:border-[#EBEBEB]"
                        onChange={handleChange}
                        >
                        <option value={""}>Select</option>
                        {calltoActionList?.map((action: ISelectOpions, idx: number) => (
                            <option key={idx} value={action.value}>{action.label}</option>
                        ))}
                        
                    </select>
                </p>

            </div>
            <div className="flex justify-between mt-10">
                <p className="text-[#191C26] font-light text-sm">Custom call to action</p>
                <p>
                    <textarea 
                        onChange={handleChange}
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