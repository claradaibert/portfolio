import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        background_primary: string;
        background_secondary: string;
        font_primary: string;
        icon_primary: string;
    }
}