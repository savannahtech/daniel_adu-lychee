
export interface INavMenu {
    activeMenuItem: string;
    setActiveMenuItem: (activeMenuItem: string) => void

}

export interface IOutroView {
    formValues:any,
    handleChange: ((formValues: any) => void),
}

export interface ISelectOpions {
    label: string;
    value: string;
}

export interface IToolTip {
    text: string;
}
