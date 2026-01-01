import { config as sharedConfig } from './wdio.shared.conf.js'

const isGui = process.env.GUI === 'true'
const chromeArgs = isGui
    ? ['--window-size=1920,1080']
    : ['--headless=new', '--disable-gpu', '--window-size=1920,1080']

export const config: WebdriverIO.Config = {
    ...sharedConfig,
    ...{
        capabilities: [{
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: chromeArgs
            }
        }]
    }
}
