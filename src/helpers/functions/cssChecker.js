import { expect } from '@playwright/test';
export async function checkColor(el, cssProps, rgbColors){
    await expect (el).toHaveCSS(cssProps, `rgb(${rgbColors.red}, ${rgbColors.green}, ${rgbColors.blue})`)
}

export async function checkFont(el, font){
    await expect (el).toHaveCSS('font', font)
}