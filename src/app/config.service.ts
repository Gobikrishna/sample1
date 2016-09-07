import {OpaqueToken, NgZone, Injectable} from '@angular/core';

export let OAppConfig = new OpaqueToken('app.config');

export interface IAppConfig {
    settings: {
        "header": {
            "background-color": string
        },
        "footer": {
            "background-color": string
        }
    }
}

export const APP_CONFIG: IAppConfig = {
    settings: null
};