 
export interface INavMenu {
    activeMenuItem: string;
    setActiveMenuItem: (activeMenuItem: string) => void

}

export interface IOutroView {
    handleChange: ((formValues: any) => void)
}

export interface ISelectOpions {
    label: string;
    value: string;
}