

export interface Defaults {
    rels: string;
    xml: string;
}

export interface Directory {
    workbooks: string[];
    sheets: string[];
    charts: any[];
    dialogs: any[];
    macros: any[];
    rels: any[];
    strs: string[];
    comments: any[];
    links: any[];
    coreprops: string[];
    extprops: string[];
    custprops: any[];
    themes: string[];
    styles: string[];
    vba: any[];
    drawings: any[];
    TODO: any[];
    xmlns: string;
    calcchain: string;
    sst: string;
    style: string;
    defaults: Defaults;
}

export interface AppVersion {
    appName: string;
    appname: string;
    lastEdited: string;
    lastedited: string;
    lowestEdited: string;
    lowestedited: string;
    rupBuild: string;
    rupbuild: string;
}

export interface WBProps {
    defaultThemeVersion: number;
    allowRefreshQuery: boolean;
    autoCompressPictures: boolean;
    backupFile: boolean;
    checkCompatibility: boolean;
    CodeName: string;
    date1904: boolean;
    filterPrivacy: boolean;
    hidePivotFieldList: boolean;
    promptedSolutions: boolean;
    publishItems: boolean;
    refreshAllConnections: boolean;
    saveExternalLinkValues: boolean;
    showBorderUnselectedTables: boolean;
    showInkAnnotation: boolean;
    showObjects: string;
    showPivotChartFilter: boolean;
    updateLinks: string;
}

export interface WBView {
    xWindow: string;
    xwindow: string;
    yWindow: string;
    ywindow: string;
    windowWidth: string;
    windowwidth: string;
    windowHeight: string;
    windowheight: string;
    activeTab: number;
    autoFilterDateGrouping: boolean;
    firstSheet: number;
    minimized: boolean;
    showHorizontalScroll: boolean;
    showSheetTabs: boolean;
    showVerticalScroll: boolean;
    tabRatio: number;
    visibility: string;
}

export interface Sheet {
    name: string;
    sheetId: string;
    sheetid: string;
    id: string;
    Hidden: number;
}

export interface CalcPr {
    calcId: string;
    calcid: string;
    calcCompleted: string;
    calcMode: string;
    calcOnSave: string;
    concurrentCalc: string;
    fullCalcOnLoad: string;
    fullPrecision: string;
    iterate: string;
    iterateCount: string;
    iterateDelta: string;
    refMode: string;
}

export interface Workbook {
    AppVersion: AppVersion;
    WBProps: WBProps;
    WBView: WBView[];
    Sheets: Sheet[];
    CalcPr: CalcPr;
    Names: any[];
    xmlns: string;
}

export interface Props {
    LastAuthor: string;
    Author: string;
    CreatedDate: Date;
    ModifiedDate: Date;
    Application: string;
    AppVersion: string;
    Company: string;
    DocSecurity: string;
    HyperlinksChanged: boolean;
    SharedDoc: boolean;
    LinksUpToDate: boolean;
    ScaleCrop: boolean;
    Worksheets: number;
    SheetNames: string[];
}

export interface Custprops {
}

export interface Deps {
}

export interface A1 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B1 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C1 {
    t: string;
    v: number;
    w: string;
}

export interface D1 {
    t: string;
    v: number;
    w: string;
}

export interface E1 {
    t: string;
    v: number;
    w: string;
}

export interface A2 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B2 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C2 {
    t: string;
    v: number;
    w: string;
}

export interface D2 {
    t: string;
    v: number;
    w: string;
}

export interface E2 {
    t: string;
    v: number;
    w: string;
}

export interface A3 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B3 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C3 {
    t: string;
    v: number;
    w: string;
}

export interface D3 {
    t: string;
    v: number;
    w: string;
}

export interface E3 {
    t: string;
    v: number;
    w: string;
}

export interface A4 {
    t: string;
    v: number;
    w: string;
}

export interface B4 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C4 {
    t: string;
    v: number;
    w: string;
}

export interface D4 {
    t: string;
    v: number;
    w: string;
}

export interface E4 {
    t: string;
    v: number;
    w: string;
}

export interface A5 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B5 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C5 {
    t: string;
    v: number;
    w: string;
}

export interface D5 {
    t: string;
    v: number;
    w: string;
}

export interface E5 {
    t: string;
    v: number;
    w: string;
}

export interface A6 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B6 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C6 {
    t: string;
    v: number;
    w: string;
}

export interface D6 {
    t: string;
    v: number;
    w: string;
}

export interface E6 {
    t: string;
    v: number;
    w: string;
}

export interface A7 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B7 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C7 {
    t: string;
    v: number;
    w: string;
}

export interface D7 {
    t: string;
    v: number;
    w: string;
}

export interface E7 {
    t: string;
    v: number;
    w: string;
}

export interface A8 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B8 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C8 {
    t: string;
    v: number;
    w: string;
}

export interface D8 {
    t: string;
    v: number;
    w: string;
}

export interface E8 {
    t: string;
    v: number;
    w: string;
}

export interface A9 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B9 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C9 {
    t: string;
    v: number;
    w: string;
}

export interface D9 {
    t: string;
    v: number;
    w: string;
}

export interface E9 {
    t: string;
    v: number;
    w: string;
}

export interface A10 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B10 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C10 {
    t: string;
    v: number;
    w: string;
}

export interface D10 {
    t: string;
    v: number;
    w: string;
}

export interface E10 {
    t: string;
    v: number;
    w: string;
}

export interface A11 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B11 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C11 {
    t: string;
    v: number;
    w: string;
}

export interface D11 {
    t: string;
    v: number;
    w: string;
}

export interface E11 {
    t: string;
    v: number;
    w: string;
}

export interface A12 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B12 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C12 {
    t: string;
    v: number;
    w: string;
}

export interface D12 {
    t: string;
    v: number;
    w: string;
}

export interface E12 {
    t: string;
    v: number;
    w: string;
}

export interface A13 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B13 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C13 {
    t: string;
    v: number;
    w: string;
}

export interface D13 {
    t: string;
    v: number;
    w: string;
}

export interface E13 {
    t: string;
    v: number;
    w: string;
}

export interface A14 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B14 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C14 {
    t: string;
    v: number;
    w: string;
}

export interface D14 {
    t: string;
    v: number;
    w: string;
}

export interface E14 {
    t: string;
    v: number;
    w: string;
}

export interface A15 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B15 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C15 {
    t: string;
    v: number;
    w: string;
}

export interface D15 {
    t: string;
    v: number;
    w: string;
}

export interface E15 {
    t: string;
    v: number;
    w: string;
}

export interface A16 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B16 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C16 {
    t: string;
    v: number;
    w: string;
}

export interface D16 {
    t: string;
    v: number;
    w: string;
}

export interface E16 {
    t: string;
    v: number;
    w: string;
}

export interface A17 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B17 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C17 {
    t: string;
    v: number;
    w: string;
}

export interface D17 {
    t: string;
    v: number;
    w: string;
}

export interface E17 {
    t: string;
    v: number;
    w: string;
}

export interface A18 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B18 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C18 {
    t: string;
    v: number;
    w: string;
}

export interface D18 {
    t: string;
    v: number;
    w: string;
}

export interface E18 {
    t: string;
    v: number;
    w: string;
}

export interface A19 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B19 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C19 {
    t: string;
    v: number;
    w: string;
}

export interface D19 {
    t: string;
    v: number;
    w: string;
}

export interface E19 {
    t: string;
    v: number;
    w: string;
}

export interface A20 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B20 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C20 {
    t: string;
    v: number;
    w: string;
}

export interface D20 {
    t: string;
    v: number;
    w: string;
}

export interface E20 {
    t: string;
    v: number;
    w: string;
}

export interface A21 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B21 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C21 {
    t: string;
    v: number;
    w: string;
}

export interface D21 {
    t: string;
    v: number;
    w: string;
}

export interface E21 {
    t: string;
    v: number;
    w: string;
}

export interface A22 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B22 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C22 {
    t: string;
    v: number;
    w: string;
}

export interface D22 {
    t: string;
    v: number;
    w: string;
}

export interface E22 {
    t: string;
    v: number;
    w: string;
}

export interface A23 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B23 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C23 {
    t: string;
    v: number;
    w: string;
}

export interface D23 {
    t: string;
    v: number;
    w: string;
}

export interface E23 {
    t: string;
    v: number;
    w: string;
}

export interface A24 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B24 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C24 {
    t: string;
    v: number;
    w: string;
}

export interface D24 {
    t: string;
    v: number;
    w: string;
}

export interface E24 {
    t: string;
    v: number;
    w: string;
}

export interface A25 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B25 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C25 {
    t: string;
    v: number;
    w: string;
}

export interface D25 {
    t: string;
    v: number;
    w: string;
}

export interface E25 {
    t: string;
    v: number;
    w: string;
}

export interface A26 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B26 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C26 {
    t: string;
    v: number;
    w: string;
}

export interface D26 {
    t: string;
    v: number;
    w: string;
}

export interface E26 {
    t: string;
    v: number;
    w: string;
}

export interface A27 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B27 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C27 {
    t: string;
    v: number;
    w: string;
}

export interface D27 {
    t: string;
    v: number;
    w: string;
}

export interface E27 {
    t: string;
    v: number;
    w: string;
}

export interface A28 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B28 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C28 {
    t: string;
    v: number;
    w: string;
}

export interface D28 {
    t: string;
    v: number;
    w: string;
}

export interface E28 {
    t: string;
    v: number;
    w: string;
}

export interface A29 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B29 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C29 {
    t: string;
    v: number;
    w: string;
}

export interface D29 {
    t: string;
    v: number;
    w: string;
}

export interface E29 {
    t: string;
    v: number;
    w: string;
}

export interface A30 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B30 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C30 {
    t: string;
    v: number;
    w: string;
}

export interface D30 {
    t: string;
    v: number;
    w: string;
}

export interface E30 {
    t: string;
    v: number;
    w: string;
}

export interface A31 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B31 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C31 {
    t: string;
    v: number;
    w: string;
}

export interface D31 {
    t: string;
    v: number;
    w: string;
}

export interface E31 {
    t: string;
    v: number;
    w: string;
}

export interface A32 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B32 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C32 {
    t: string;
    v: number;
    w: string;
}

export interface D32 {
    t: string;
    v: number;
    w: string;
}

export interface E32 {
    t: string;
    v: number;
    w: string;
}

export interface A33 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B33 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C33 {
    t: string;
    v: number;
    w: string;
}

export interface D33 {
    t: string;
    v: number;
    w: string;
}

export interface E33 {
    t: string;
    v: number;
    w: string;
}

export interface A34 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B34 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C34 {
    t: string;
    v: number;
    w: string;
}

export interface D34 {
    t: string;
    v: number;
    w: string;
}

export interface E34 {
    t: string;
    v: number;
    w: string;
}

export interface A35 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B35 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C35 {
    t: string;
    v: number;
    w: string;
}

export interface D35 {
    t: string;
    v: number;
    w: string;
}

export interface E35 {
    t: string;
    v: number;
    w: string;
}

export interface A36 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B36 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C36 {
    t: string;
    v: number;
    w: string;
}

export interface D36 {
    t: string;
    v: number;
    w: string;
}

export interface E36 {
    t: string;
    v: number;
    w: string;
}

export interface A37 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B37 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C37 {
    t: string;
    v: number;
    w: string;
}

export interface D37 {
    t: string;
    v: number;
    w: string;
}

export interface E37 {
    t: string;
    v: number;
    w: string;
}

export interface A38 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B38 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C38 {
    t: string;
    v: number;
    w: string;
}

export interface D38 {
    t: string;
    v: number;
    w: string;
}

export interface E38 {
    t: string;
    v: number;
    w: string;
}

export interface A39 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B39 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C39 {
    t: string;
    v: number;
    w: string;
}

export interface D39 {
    t: string;
    v: number;
    w: string;
}

export interface E39 {
    t: string;
    v: number;
    w: string;
}

export interface A40 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B40 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C40 {
    t: string;
    v: number;
    w: string;
}

export interface D40 {
    t: string;
    v: number;
    w: string;
}

export interface E40 {
    t: string;
    v: number;
    w: string;
}

export interface A41 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B41 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C41 {
    t: string;
    v: number;
    w: string;
}

export interface D41 {
    t: string;
    v: number;
    w: string;
}

export interface E41 {
    t: string;
    v: number;
    w: string;
}

export interface A42 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B42 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C42 {
    t: string;
    v: number;
    w: string;
}

export interface D42 {
    t: string;
    v: number;
    w: string;
}

export interface E42 {
    t: string;
    v: number;
    w: string;
}

export interface A43 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B43 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C43 {
    t: string;
    v: number;
    w: string;
}

export interface D43 {
    t: string;
    v: number;
    w: string;
}

export interface E43 {
    t: string;
    v: number;
    w: string;
}

export interface A44 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B44 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C44 {
    t: string;
    v: number;
    w: string;
}

export interface D44 {
    t: string;
    v: number;
    w: string;
}

export interface E44 {
    t: string;
    v: number;
    w: string;
}

export interface A45 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B45 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C45 {
    t: string;
    v: number;
    w: string;
}

export interface D45 {
    t: string;
    v: number;
    w: string;
}

export interface E45 {
    t: string;
    v: number;
    w: string;
}

export interface A46 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B46 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C46 {
    t: string;
    v: number;
    w: string;
}

export interface D46 {
    t: string;
    v: number;
    w: string;
}

export interface E46 {
    t: string;
    v: number;
    w: string;
}

export interface A47 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B47 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C47 {
    t: string;
    v: number;
    w: string;
}

export interface D47 {
    t: string;
    v: number;
    w: string;
}

export interface E47 {
    t: string;
    v: number;
    w: string;
}

export interface A48 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B48 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C48 {
    t: string;
    v: number;
    w: string;
}

export interface D48 {
    t: string;
    v: number;
    w: string;
}

export interface E48 {
    t: string;
    v: number;
    w: string;
}

export interface A49 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B49 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C49 {
    t: string;
    v: number;
    w: string;
}

export interface D49 {
    t: string;
    v: number;
    w: string;
}

export interface E49 {
    t: string;
    v: number;
    w: string;
}

export interface A50 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B50 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C50 {
    t: string;
    v: number;
    w: string;
}

export interface D50 {
    t: string;
    v: number;
    w: string;
}

export interface E50 {
    t: string;
    v: number;
    w: string;
}

export interface A51 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B51 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C51 {
    t: string;
    v: number;
    w: string;
}

export interface D51 {
    t: string;
    v: number;
    w: string;
}

export interface E51 {
    t: string;
    v: number;
    w: string;
}

export interface A52 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B52 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C52 {
    t: string;
    v: number;
    w: string;
}

export interface D52 {
    t: string;
    v: number;
    w: string;
}

export interface E52 {
    t: string;
    v: number;
    w: string;
}

export interface A53 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B53 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C53 {
    t: string;
    v: number;
    w: string;
}

export interface D53 {
    t: string;
    v: number;
    w: string;
}

export interface E53 {
    t: string;
    v: number;
    w: string;
}

export interface A54 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B54 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C54 {
    t: string;
    v: number;
    w: string;
}

export interface D54 {
    t: string;
    v: number;
    w: string;
}

export interface E54 {
    t: string;
    v: number;
    w: string;
}

export interface A55 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B55 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C55 {
    t: string;
    v: number;
    w: string;
}

export interface D55 {
    t: string;
    v: number;
    w: string;
}

export interface E55 {
    t: string;
    v: number;
    w: string;
}

export interface A56 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B56 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C56 {
    t: string;
    v: number;
    w: string;
}

export interface D56 {
    t: string;
    v: number;
    w: string;
}

export interface E56 {
    t: string;
    v: number;
    w: string;
}

export interface A57 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B57 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C57 {
    t: string;
    v: number;
    w: string;
}

export interface D57 {
    t: string;
    v: number;
    w: string;
}

export interface E57 {
    t: string;
    v: number;
    w: string;
}

export interface A58 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B58 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C58 {
    t: string;
    v: number;
    w: string;
}

export interface D58 {
    t: string;
    v: number;
    w: string;
}

export interface E58 {
    t: string;
    v: number;
    w: string;
}

export interface A59 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B59 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C59 {
    t: string;
    v: number;
    w: string;
}

export interface D59 {
    t: string;
    v: number;
    w: string;
}

export interface E59 {
    t: string;
    v: number;
    w: string;
}

export interface A60 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B60 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C60 {
    t: string;
    v: number;
    w: string;
}

export interface D60 {
    t: string;
    v: number;
    w: string;
}

export interface E60 {
    t: string;
    v: number;
    w: string;
}

export interface A61 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B61 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C61 {
    t: string;
    v: number;
    w: string;
}

export interface D61 {
    t: string;
    v: number;
    w: string;
}

export interface E61 {
    t: string;
    v: number;
    w: string;
}

export interface A62 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B62 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C62 {
    t: string;
    v: number;
    w: string;
}

export interface D62 {
    t: string;
    v: number;
    w: string;
}

export interface E62 {
    t: string;
    v: number;
    w: string;
}

export interface A63 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B63 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C63 {
    t: string;
    v: number;
    w: string;
}

export interface D63 {
    t: string;
    v: number;
    w: string;
}

export interface E63 {
    t: string;
    v: number;
    w: string;
}

export interface A64 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B64 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C64 {
    t: string;
    v: number;
    w: string;
}

export interface D64 {
    t: string;
    v: number;
    w: string;
}

export interface E64 {
    t: string;
    v: number;
    w: string;
}

export interface A65 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B65 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C65 {
    t: string;
    v: number;
    w: string;
}

export interface D65 {
    t: string;
    v: number;
    w: string;
}

export interface E65 {
    t: string;
    v: number;
    w: string;
}

export interface A66 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B66 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C66 {
    t: string;
    v: number;
    w: string;
}

export interface D66 {
    t: string;
    v: number;
    w: string;
}

export interface E66 {
    t: string;
    v: number;
    w: string;
}

export interface A67 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B67 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C67 {
    t: string;
    v: number;
    w: string;
}

export interface D67 {
    t: string;
    v: number;
    w: string;
}

export interface E67 {
    t: string;
    v: number;
    w: string;
}

export interface A68 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B68 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C68 {
    t: string;
    v: number;
    w: string;
}

export interface D68 {
    t: string;
    v: number;
    w: string;
}

export interface E68 {
    t: string;
    v: number;
    w: string;
}

export interface A69 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B69 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C69 {
    t: string;
    v: number;
    w: string;
}

export interface D69 {
    t: string;
    v: number;
    w: string;
}

export interface E69 {
    t: string;
    v: number;
    w: string;
}

export interface A70 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B70 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C70 {
    t: string;
    v: number;
    w: string;
}

export interface D70 {
    t: string;
    v: number;
    w: string;
}

export interface E70 {
    t: string;
    v: number;
    w: string;
}

export interface A71 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B71 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C71 {
    t: string;
    v: number;
    w: string;
}

export interface D71 {
    t: string;
    v: number;
    w: string;
}

export interface E71 {
    t: string;
    v: number;
    w: string;
}

export interface A72 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B72 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C72 {
    t: string;
    v: number;
    w: string;
}

export interface D72 {
    t: string;
    v: number;
    w: string;
}

export interface E72 {
    t: string;
    v: number;
    w: string;
}

export interface A73 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B73 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C73 {
    t: string;
    v: number;
    w: string;
}

export interface D73 {
    t: string;
    v: number;
    w: string;
}

export interface E73 {
    t: string;
    v: number;
    w: string;
}

export interface A74 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B74 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C74 {
    t: string;
    v: number;
    w: string;
}

export interface D74 {
    t: string;
    v: number;
    w: string;
}

export interface E74 {
    t: string;
    v: number;
    w: string;
}

export interface A75 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B75 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C75 {
    t: string;
    v: number;
    w: string;
}

export interface D75 {
    t: string;
    v: number;
    w: string;
}

export interface E75 {
    t: string;
    v: number;
    w: string;
}

export interface A76 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B76 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C76 {
    t: string;
    v: number;
    w: string;
}

export interface D76 {
    t: string;
    v: number;
    w: string;
}

export interface E76 {
    t: string;
    v: number;
    w: string;
}

export interface A77 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B77 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C77 {
    t: string;
    v: number;
    w: string;
}

export interface D77 {
    t: string;
    v: number;
    w: string;
}

export interface E77 {
    t: string;
    v: number;
    w: string;
}

export interface A78 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B78 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C78 {
    t: string;
    v: number;
    w: string;
}

export interface D78 {
    t: string;
    v: number;
    w: string;
}

export interface E78 {
    t: string;
    v: number;
    w: string;
}

export interface A79 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B79 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C79 {
    t: string;
    v: number;
    w: string;
}

export interface D79 {
    t: string;
    v: number;
    w: string;
}

export interface E79 {
    t: string;
    v: number;
    w: string;
}

export interface A80 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B80 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C80 {
    t: string;
    v: number;
    w: string;
}

export interface D80 {
    t: string;
    v: number;
    w: string;
}

export interface E80 {
    t: string;
    v: number;
    w: string;
}

export interface A81 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B81 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C81 {
    t: string;
    v: number;
    w: string;
}

export interface D81 {
    t: string;
    v: number;
    w: string;
}

export interface E81 {
    t: string;
    v: number;
    w: string;
}

export interface A82 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B82 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C82 {
    t: string;
    v: number;
    w: string;
}

export interface D82 {
    t: string;
    v: number;
    w: string;
}

export interface E82 {
    t: string;
    v: number;
    w: string;
}

export interface A83 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B83 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C83 {
    t: string;
    v: number;
    w: string;
}

export interface D83 {
    t: string;
    v: number;
    w: string;
}

export interface E83 {
    t: string;
    v: number;
    w: string;
}

export interface A84 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B84 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C84 {
    t: string;
    v: number;
    w: string;
}

export interface D84 {
    t: string;
    v: number;
    w: string;
}

export interface E84 {
    t: string;
    v: number;
    w: string;
}

export interface A85 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B85 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C85 {
    t: string;
    v: number;
    w: string;
}

export interface D85 {
    t: string;
    v: number;
    w: string;
}

export interface E85 {
    t: string;
    v: number;
    w: string;
}

export interface A86 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B86 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C86 {
    t: string;
    v: number;
    w: string;
}

export interface D86 {
    t: string;
    v: number;
    w: string;
}

export interface E86 {
    t: string;
    v: number;
    w: string;
}

export interface A87 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B87 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C87 {
    t: string;
    v: number;
    w: string;
}

export interface D87 {
    t: string;
    v: number;
    w: string;
}

export interface E87 {
    t: string;
    v: number;
    w: string;
}

export interface A88 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B88 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C88 {
    t: string;
    v: number;
    w: string;
}

export interface D88 {
    t: string;
    v: number;
    w: string;
}

export interface E88 {
    t: string;
    v: number;
    w: string;
}

export interface A89 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B89 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C89 {
    t: string;
    v: number;
    w: string;
}

export interface D89 {
    t: string;
    v: number;
    w: string;
}

export interface E89 {
    t: string;
    v: number;
    w: string;
}

export interface A90 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B90 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C90 {
    t: string;
    v: number;
    w: string;
}

export interface D90 {
    t: string;
    v: number;
    w: string;
}

export interface E90 {
    t: string;
    v: number;
    w: string;
}

export interface A91 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B91 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C91 {
    t: string;
    v: number;
    w: string;
}

export interface D91 {
    t: string;
    v: number;
    w: string;
}

export interface E91 {
    t: string;
    v: number;
    w: string;
}

export interface A92 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B92 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C92 {
    t: string;
    v: number;
    w: string;
}

export interface D92 {
    t: string;
    v: number;
    w: string;
}

export interface E92 {
    t: string;
    v: number;
    w: string;
}

export interface A93 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B93 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C93 {
    t: string;
    v: number;
    w: string;
}

export interface D93 {
    t: string;
    v: number;
    w: string;
}

export interface E93 {
    t: string;
    v: number;
    w: string;
}

export interface A94 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B94 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C94 {
    t: string;
    v: number;
    w: string;
}

export interface D94 {
    t: string;
    v: number;
    w: string;
}

export interface E94 {
    t: string;
    v: number;
    w: string;
}

export interface A95 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B95 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C95 {
    t: string;
    v: number;
    w: string;
}

export interface D95 {
    t: string;
    v: number;
    w: string;
}

export interface E95 {
    t: string;
    v: number;
    w: string;
}

export interface A96 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B96 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C96 {
    t: string;
    v: number;
    w: string;
}

export interface D96 {
    t: string;
    v: number;
    w: string;
}

export interface E96 {
    t: string;
    v: number;
    w: string;
}

export interface A97 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B97 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C97 {
    t: string;
    v: number;
    w: string;
}

export interface D97 {
    t: string;
    v: number;
    w: string;
}

export interface E97 {
    t: string;
    v: number;
    w: string;
}

export interface A98 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B98 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C98 {
    t: string;
    v: number;
    w: string;
}

export interface D98 {
    t: string;
    v: number;
    w: string;
}

export interface E98 {
    t: string;
    v: number;
    w: string;
}

export interface A99 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B99 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C99 {
    t: string;
    v: number;
    w: string;
}

export interface D99 {
    t: string;
    v: number;
    w: string;
}

export interface E99 {
    t: string;
    v: number;
    w: string;
}

export interface A100 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B100 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C100 {
    t: string;
    v: number;
    w: string;
}

export interface D100 {
    t: string;
    v: number;
    w: string;
}

export interface E100 {
    t: string;
    v: number;
    w: string;
}

export interface A101 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B101 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C101 {
    t: string;
    v: number;
    w: string;
}

export interface D101 {
    t: string;
    v: number;
    w: string;
}

export interface E101 {
    t: string;
    v: number;
    w: string;
}

export interface A102 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B102 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C102 {
    t: string;
    v: number;
    w: string;
}

export interface D102 {
    t: string;
    v: number;
    w: string;
}

export interface E102 {
    t: string;
    v: number;
    w: string;
}

export interface A103 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B103 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C103 {
    t: string;
    v: number;
    w: string;
}

export interface D103 {
    t: string;
    v: number;
    w: string;
}

export interface E103 {
    t: string;
    v: number;
    w: string;
}

export interface A104 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B104 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C104 {
    t: string;
    v: number;
    w: string;
}

export interface D104 {
    t: string;
    v: number;
    w: string;
}

export interface E104 {
    t: string;
    v: number;
    w: string;
}

export interface A105 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B105 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C105 {
    t: string;
    v: number;
    w: string;
}

export interface D105 {
    t: string;
    v: number;
    w: string;
}

export interface E105 {
    t: string;
    v: number;
    w: string;
}

export interface A106 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B106 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C106 {
    t: string;
    v: number;
    w: string;
}

export interface D106 {
    t: string;
    v: number;
    w: string;
}

export interface E106 {
    t: string;
    v: number;
    w: string;
}

export interface A107 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B107 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C107 {
    t: string;
    v: number;
    w: string;
}

export interface D107 {
    t: string;
    v: number;
    w: string;
}

export interface E107 {
    t: string;
    v: number;
    w: string;
}

export interface A108 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B108 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C108 {
    t: string;
    v: number;
    w: string;
}

export interface D108 {
    t: string;
    v: number;
    w: string;
}

export interface E108 {
    t: string;
    v: number;
    w: string;
}

export interface A109 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B109 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C109 {
    t: string;
    v: number;
    w: string;
}

export interface D109 {
    t: string;
    v: number;
    w: string;
}

export interface E109 {
    t: string;
    v: number;
    w: string;
}

export interface A110 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B110 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C110 {
    t: string;
    v: number;
    w: string;
}

export interface D110 {
    t: string;
    v: number;
    w: string;
}

export interface E110 {
    t: string;
    v: number;
    w: string;
}

export interface A111 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B111 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C111 {
    t: string;
    v: number;
    w: string;
}

export interface D111 {
    t: string;
    v: number;
    w: string;
}

export interface E111 {
    t: string;
    v: number;
    w: string;
}

export interface A112 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B112 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C112 {
    t: string;
    v: number;
    w: string;
}

export interface D112 {
    t: string;
    v: number;
    w: string;
}

export interface E112 {
    t: string;
    v: number;
    w: string;
}

export interface A113 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B113 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C113 {
    t: string;
    v: number;
    w: string;
}

export interface D113 {
    t: string;
    v: number;
    w: string;
}

export interface E113 {
    t: string;
    v: number;
    w: string;
}

export interface A114 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B114 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C114 {
    t: string;
    v: number;
    w: string;
}

export interface D114 {
    t: string;
    v: number;
    w: string;
}

export interface E114 {
    t: string;
    v: number;
    w: string;
}

export interface A115 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B115 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C115 {
    t: string;
    v: number;
    w: string;
}

export interface D115 {
    t: string;
    v: number;
    w: string;
}

export interface E115 {
    t: string;
    v: number;
    w: string;
}

export interface A116 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B116 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C116 {
    t: string;
    v: number;
    w: string;
}

export interface D116 {
    t: string;
    v: number;
    w: string;
}

export interface E116 {
    t: string;
    v: number;
    w: string;
}

export interface A117 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B117 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C117 {
    t: string;
    v: number;
    w: string;
}

export interface D117 {
    t: string;
    v: number;
    w: string;
}

export interface E117 {
    t: string;
    v: number;
    w: string;
}

export interface A118 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B118 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C118 {
    t: string;
    v: number;
    w: string;
}

export interface D118 {
    t: string;
    v: number;
    w: string;
}

export interface E118 {
    t: string;
    v: number;
    w: string;
}

export interface A119 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B119 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C119 {
    t: string;
    v: number;
    w: string;
}

export interface D119 {
    t: string;
    v: number;
    w: string;
}

export interface E119 {
    t: string;
    v: number;
    w: string;
}

export interface A120 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B120 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C120 {
    t: string;
    v: number;
    w: string;
}

export interface D120 {
    t: string;
    v: number;
    w: string;
}

export interface E120 {
    t: string;
    v: number;
    w: string;
}

export interface A121 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B121 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C121 {
    t: string;
    v: number;
    w: string;
}

export interface D121 {
    t: string;
    v: number;
    w: string;
}

export interface E121 {
    t: string;
    v: number;
    w: string;
}

export interface A122 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B122 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C122 {
    t: string;
    v: number;
    w: string;
}

export interface D122 {
    t: string;
    v: number;
    w: string;
}

export interface E122 {
    t: string;
    v: number;
    w: string;
}

export interface A123 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B123 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C123 {
    t: string;
    v: number;
    w: string;
}

export interface D123 {
    t: string;
    v: number;
    w: string;
}

export interface E123 {
    t: string;
    v: number;
    w: string;
}

export interface A124 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B124 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C124 {
    t: string;
    v: number;
    w: string;
}

export interface D124 {
    t: string;
    v: number;
    w: string;
}

export interface E124 {
    t: string;
    v: number;
    w: string;
}

export interface A125 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B125 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C125 {
    t: string;
    v: number;
    w: string;
}

export interface D125 {
    t: string;
    v: number;
    w: string;
}

export interface E125 {
    t: string;
    v: number;
    w: string;
}

export interface A126 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B126 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C126 {
    t: string;
    v: number;
    w: string;
}

export interface D126 {
    t: string;
    v: number;
    w: string;
}

export interface E126 {
    t: string;
    v: number;
    w: string;
}

export interface A127 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B127 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C127 {
    t: string;
    v: number;
    w: string;
}

export interface D127 {
    t: string;
    v: number;
    w: string;
}

export interface E127 {
    t: string;
    v: number;
    w: string;
}

export interface A128 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B128 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C128 {
    t: string;
    v: number;
    w: string;
}

export interface D128 {
    t: string;
    v: number;
    w: string;
}

export interface E128 {
    t: string;
    v: number;
    w: string;
}

export interface A129 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B129 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C129 {
    t: string;
    v: number;
    w: string;
}

export interface D129 {
    t: string;
    v: number;
    w: string;
}

export interface E129 {
    t: string;
    v: number;
    w: string;
}

export interface A130 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B130 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C130 {
    t: string;
    v: number;
    w: string;
}

export interface D130 {
    t: string;
    v: number;
    w: string;
}

export interface E130 {
    t: string;
    v: number;
    w: string;
}

export interface A131 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B131 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C131 {
    t: string;
    v: number;
    w: string;
}

export interface D131 {
    t: string;
    v: number;
    w: string;
}

export interface E131 {
    t: string;
    v: number;
    w: string;
}

export interface A132 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B132 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C132 {
    t: string;
    v: number;
    w: string;
}

export interface D132 {
    t: string;
    v: number;
    w: string;
}

export interface E132 {
    t: string;
    v: number;
    w: string;
}

export interface A133 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B133 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C133 {
    t: string;
    v: number;
    w: string;
}

export interface D133 {
    t: string;
    v: number;
    w: string;
}

export interface E133 {
    t: string;
    v: number;
    w: string;
}

export interface A134 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B134 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C134 {
    t: string;
    v: number;
    w: string;
}

export interface D134 {
    t: string;
    v: number;
    w: string;
}

export interface E134 {
    t: string;
    v: number;
    w: string;
}

export interface A135 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B135 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C135 {
    t: string;
    v: number;
    w: string;
}

export interface D135 {
    t: string;
    v: number;
    w: string;
}

export interface E135 {
    t: string;
    v: number;
    w: string;
}

export interface A136 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B136 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C136 {
    t: string;
    v: number;
    w: string;
}

export interface D136 {
    t: string;
    v: number;
    w: string;
}

export interface E136 {
    t: string;
    v: number;
    w: string;
}

export interface A137 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B137 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C137 {
    t: string;
    v: number;
    w: string;
}

export interface D137 {
    t: string;
    v: number;
    w: string;
}

export interface E137 {
    t: string;
    v: number;
    w: string;
}

export interface A138 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B138 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C138 {
    t: string;
    v: number;
    w: string;
}

export interface D138 {
    t: string;
    v: number;
    w: string;
}

export interface E138 {
    t: string;
    v: number;
    w: string;
}

export interface A139 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B139 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C139 {
    t: string;
    v: number;
    w: string;
}

export interface D139 {
    t: string;
    v: number;
    w: string;
}

export interface E139 {
    t: string;
    v: number;
    w: string;
}

export interface A140 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B140 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C140 {
    t: string;
    v: number;
    w: string;
}

export interface D140 {
    t: string;
    v: number;
    w: string;
}

export interface E140 {
    t: string;
    v: number;
    w: string;
}

export interface A141 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B141 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C141 {
    t: string;
    v: number;
    w: string;
}

export interface D141 {
    t: string;
    v: number;
    w: string;
}

export interface E141 {
    t: string;
    v: number;
    w: string;
}

export interface A142 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B142 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C142 {
    t: string;
    v: number;
    w: string;
}

export interface D142 {
    t: string;
    v: number;
    w: string;
}

export interface E142 {
    t: string;
    v: number;
    w: string;
}

export interface A143 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B143 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C143 {
    t: string;
    v: number;
    w: string;
}

export interface D143 {
    t: string;
    v: number;
    w: string;
}

export interface E143 {
    t: string;
    v: number;
    w: string;
}

export interface A144 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B144 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C144 {
    t: string;
    v: number;
    w: string;
}

export interface D144 {
    t: string;
    v: number;
    w: string;
}

export interface E144 {
    t: string;
    v: number;
    w: string;
}

export interface A145 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B145 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C145 {
    t: string;
    v: number;
    w: string;
}

export interface D145 {
    t: string;
    v: number;
    w: string;
}

export interface E145 {
    t: string;
    v: number;
    w: string;
}

export interface A146 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B146 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C146 {
    t: string;
    v: number;
    w: string;
}

export interface D146 {
    t: string;
    v: number;
    w: string;
}

export interface E146 {
    t: string;
    v: number;
    w: string;
}

export interface A147 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B147 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C147 {
    t: string;
    v: number;
    w: string;
}

export interface D147 {
    t: string;
    v: number;
    w: string;
}

export interface E147 {
    t: string;
    v: number;
    w: string;
}

export interface A148 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B148 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C148 {
    t: string;
    v: number;
    w: string;
}

export interface D148 {
    t: string;
    v: number;
    w: string;
}

export interface E148 {
    t: string;
    v: number;
    w: string;
}

export interface A149 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B149 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C149 {
    t: string;
    v: number;
    w: string;
}

export interface D149 {
    t: string;
    v: number;
    w: string;
}

export interface E149 {
    t: string;
    v: number;
    w: string;
}

export interface A150 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B150 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C150 {
    t: string;
    v: number;
    w: string;
}

export interface D150 {
    t: string;
    v: number;
    w: string;
}

export interface E150 {
    t: string;
    v: number;
    w: string;
}

export interface A151 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B151 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C151 {
    t: string;
    v: number;
    w: string;
}

export interface D151 {
    t: string;
    v: number;
    w: string;
}

export interface E151 {
    t: string;
    v: number;
    w: string;
}

export interface A152 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B152 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C152 {
    t: string;
    v: number;
    w: string;
}

export interface D152 {
    t: string;
    v: number;
    w: string;
}

export interface E152 {
    t: string;
    v: number;
    w: string;
}

export interface A153 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B153 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C153 {
    t: string;
    v: number;
    w: string;
}

export interface D153 {
    t: string;
    v: number;
    w: string;
}

export interface E153 {
    t: string;
    v: number;
    w: string;
}

export interface A154 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B154 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C154 {
    t: string;
    v: number;
    w: string;
}

export interface D154 {
    t: string;
    v: number;
    w: string;
}

export interface E154 {
    t: string;
    v: number;
    w: string;
}

export interface A155 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B155 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C155 {
    t: string;
    v: number;
    w: string;
}

export interface D155 {
    t: string;
    v: number;
    w: string;
}

export interface E155 {
    t: string;
    v: number;
    w: string;
}

export interface A156 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B156 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C156 {
    t: string;
    v: number;
    w: string;
}

export interface D156 {
    t: string;
    v: number;
    w: string;
}

export interface E156 {
    t: string;
    v: number;
    w: string;
}

export interface A157 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B157 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C157 {
    t: string;
    v: number;
    w: string;
}

export interface D157 {
    t: string;
    v: number;
    w: string;
}

export interface E157 {
    t: string;
    v: number;
    w: string;
}

export interface A158 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B158 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C158 {
    t: string;
    v: number;
    w: string;
}

export interface D158 {
    t: string;
    v: number;
    w: string;
}

export interface E158 {
    t: string;
    v: number;
    w: string;
}

export interface A159 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B159 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C159 {
    t: string;
    v: number;
    w: string;
}

export interface D159 {
    t: string;
    v: number;
    w: string;
}

export interface E159 {
    t: string;
    v: number;
    w: string;
}

export interface A160 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B160 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C160 {
    t: string;
    v: number;
    w: string;
}

export interface D160 {
    t: string;
    v: number;
    w: string;
}

export interface E160 {
    t: string;
    v: number;
    w: string;
}

export interface A161 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B161 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C161 {
    t: string;
    v: number;
    w: string;
}

export interface D161 {
    t: string;
    v: number;
    w: string;
}

export interface E161 {
    t: string;
    v: number;
    w: string;
}

export interface A162 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B162 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C162 {
    t: string;
    v: number;
    w: string;
}

export interface D162 {
    t: string;
    v: number;
    w: string;
}

export interface E162 {
    t: string;
    v: number;
    w: string;
}

export interface A163 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B163 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C163 {
    t: string;
    v: number;
    w: string;
}

export interface D163 {
    t: string;
    v: number;
    w: string;
}

export interface E163 {
    t: string;
    v: number;
    w: string;
}

export interface A164 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B164 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C164 {
    t: string;
    v: number;
    w: string;
}

export interface D164 {
    t: string;
    v: number;
    w: string;
}

export interface E164 {
    t: string;
    v: number;
    w: string;
}

export interface A165 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B165 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C165 {
    t: string;
    v: number;
    w: string;
}

export interface D165 {
    t: string;
    v: number;
    w: string;
}

export interface E165 {
    t: string;
    v: number;
    w: string;
}

export interface A166 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B166 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C166 {
    t: string;
    v: number;
    w: string;
}

export interface D166 {
    t: string;
    v: number;
    w: string;
}

export interface E166 {
    t: string;
    v: number;
    w: string;
}

export interface A167 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B167 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C167 {
    t: string;
    v: number;
    w: string;
}

export interface D167 {
    t: string;
    v: number;
    w: string;
}

export interface E167 {
    t: string;
    v: number;
    w: string;
}

export interface A168 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B168 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C168 {
    t: string;
    v: number;
    w: string;
}

export interface D168 {
    t: string;
    v: number;
    w: string;
}

export interface E168 {
    t: string;
    v: number;
    w: string;
}

export interface A169 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B169 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C169 {
    t: string;
    v: number;
    w: string;
}

export interface D169 {
    t: string;
    v: number;
    w: string;
}

export interface E169 {
    t: string;
    v: number;
    w: string;
}

export interface A170 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B170 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C170 {
    t: string;
    v: number;
    w: string;
}

export interface D170 {
    t: string;
    v: number;
    w: string;
}

export interface E170 {
    t: string;
    v: number;
    w: string;
}

export interface A171 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B171 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C171 {
    t: string;
    v: number;
    w: string;
}

export interface D171 {
    t: string;
    v: number;
    w: string;
}

export interface E171 {
    t: string;
    v: number;
    w: string;
}

export interface A172 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B172 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C172 {
    t: string;
    v: number;
    w: string;
}

export interface D172 {
    t: string;
    v: number;
    w: string;
}

export interface E172 {
    t: string;
    v: number;
    w: string;
}

export interface A173 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B173 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C173 {
    t: string;
    v: number;
    w: string;
}

export interface D173 {
    t: string;
    v: number;
    w: string;
}

export interface E173 {
    t: string;
    v: number;
    w: string;
}

export interface A174 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B174 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C174 {
    t: string;
    v: number;
    w: string;
}

export interface D174 {
    t: string;
    v: number;
    w: string;
}

export interface E174 {
    t: string;
    v: number;
    w: string;
}

export interface A175 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B175 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C175 {
    t: string;
    v: number;
    w: string;
}

export interface D175 {
    t: string;
    v: number;
    w: string;
}

export interface E175 {
    t: string;
    v: number;
    w: string;
}

export interface A176 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B176 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C176 {
    t: string;
    v: number;
    w: string;
}

export interface D176 {
    t: string;
    v: number;
    w: string;
}

export interface E176 {
    t: string;
    v: number;
    w: string;
}

export interface A177 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B177 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C177 {
    t: string;
    v: number;
    w: string;
}

export interface D177 {
    t: string;
    v: number;
    w: string;
}

export interface E177 {
    t: string;
    v: number;
    w: string;
}

export interface A178 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B178 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C178 {
    t: string;
    v: number;
    w: string;
}

export interface D178 {
    t: string;
    v: number;
    w: string;
}

export interface E178 {
    t: string;
    v: number;
    w: string;
}

export interface A179 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B179 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C179 {
    t: string;
    v: number;
    w: string;
}

export interface D179 {
    t: string;
    v: number;
    w: string;
}

export interface E179 {
    t: string;
    v: number;
    w: string;
}

export interface A180 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B180 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C180 {
    t: string;
    v: number;
    w: string;
}

export interface D180 {
    t: string;
    v: number;
    w: string;
}

export interface E180 {
    t: string;
    v: number;
    w: string;
}

export interface A181 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B181 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C181 {
    t: string;
    v: number;
    w: string;
}

export interface D181 {
    t: string;
    v: number;
    w: string;
}

export interface E181 {
    t: string;
    v: number;
    w: string;
}

export interface A182 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B182 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C182 {
    t: string;
    v: number;
    w: string;
}

export interface D182 {
    t: string;
    v: number;
    w: string;
}

export interface E182 {
    t: string;
    v: number;
    w: string;
}

export interface A183 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B183 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C183 {
    t: string;
    v: number;
    w: string;
}

export interface D183 {
    t: string;
    v: number;
    w: string;
}

export interface E183 {
    t: string;
    v: number;
    w: string;
}

export interface A184 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B184 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C184 {
    t: string;
    v: number;
    w: string;
}

export interface D184 {
    t: string;
    v: number;
    w: string;
}

export interface E184 {
    t: string;
    v: number;
    w: string;
}

export interface A185 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B185 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C185 {
    t: string;
    v: number;
    w: string;
}

export interface D185 {
    t: string;
    v: number;
    w: string;
}

export interface E185 {
    t: string;
    v: number;
    w: string;
}

export interface A186 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B186 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C186 {
    t: string;
    v: number;
    w: string;
}

export interface D186 {
    t: string;
    v: number;
    w: string;
}

export interface E186 {
    t: string;
    v: number;
    w: string;
}

export interface A187 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B187 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C187 {
    t: string;
    v: number;
    w: string;
}

export interface D187 {
    t: string;
    v: number;
    w: string;
}

export interface E187 {
    t: string;
    v: number;
    w: string;
}

export interface A188 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B188 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C188 {
    t: string;
    v: number;
    w: string;
}

export interface D188 {
    t: string;
    v: number;
    w: string;
}

export interface E188 {
    t: string;
    v: number;
    w: string;
}

export interface A189 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B189 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C189 {
    t: string;
    v: number;
    w: string;
}

export interface D189 {
    t: string;
    v: number;
    w: string;
}

export interface E189 {
    t: string;
    v: number;
    w: string;
}

export interface A190 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B190 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C190 {
    t: string;
    v: number;
    w: string;
}

export interface D190 {
    t: string;
    v: number;
    w: string;
}

export interface E190 {
    t: string;
    v: number;
    w: string;
}

export interface A191 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B191 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C191 {
    t: string;
    v: number;
    w: string;
}

export interface D191 {
    t: string;
    v: number;
    w: string;
}

export interface E191 {
    t: string;
    v: number;
    w: string;
}

export interface A192 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B192 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C192 {
    t: string;
    v: number;
    w: string;
}

export interface D192 {
    t: string;
    v: number;
    w: string;
}

export interface E192 {
    t: string;
    v: number;
    w: string;
}

export interface A193 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B193 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C193 {
    t: string;
    v: number;
    w: string;
}

export interface D193 {
    t: string;
    v: number;
    w: string;
}

export interface E193 {
    t: string;
    v: number;
    w: string;
}

export interface A194 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B194 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C194 {
    t: string;
    v: number;
    w: string;
}

export interface D194 {
    t: string;
    v: number;
    w: string;
}

export interface E194 {
    t: string;
    v: number;
    w: string;
}

export interface A195 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B195 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C195 {
    t: string;
    v: number;
    w: string;
}

export interface D195 {
    t: string;
    v: number;
    w: string;
}

export interface E195 {
    t: string;
    v: number;
    w: string;
}

export interface A196 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B196 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C196 {
    t: string;
    v: number;
    w: string;
}

export interface D196 {
    t: string;
    v: number;
    w: string;
}

export interface E196 {
    t: string;
    v: number;
    w: string;
}

export interface A197 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B197 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C197 {
    t: string;
    v: number;
    w: string;
}

export interface D197 {
    t: string;
    v: number;
    w: string;
}

export interface E197 {
    t: string;
    v: number;
    w: string;
}

export interface A198 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B198 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C198 {
    t: string;
    v: number;
    w: string;
}

export interface D198 {
    t: string;
    v: number;
    w: string;
}

export interface E198 {
    t: string;
    v: number;
    w: string;
}

export interface A199 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B199 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C199 {
    t: string;
    v: number;
    w: string;
}

export interface D199 {
    t: string;
    v: number;
    w: string;
}

export interface E199 {
    t: string;
    v: number;
    w: string;
}

export interface A200 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B200 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C200 {
    t: string;
    v: number;
    w: string;
}

export interface D200 {
    t: string;
    v: number;
    w: string;
}

export interface E200 {
    t: string;
    v: number;
    w: string;
}

export interface A201 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B201 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C201 {
    t: string;
    v: number;
    w: string;
}

export interface D201 {
    t: string;
    v: number;
    w: string;
}

export interface E201 {
    t: string;
    v: number;
    w: string;
}

export interface A202 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B202 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C202 {
    t: string;
    v: number;
    w: string;
}

export interface D202 {
    t: string;
    v: number;
    w: string;
}

export interface E202 {
    t: string;
    v: number;
    w: string;
}

export interface A203 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B203 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C203 {
    t: string;
    v: number;
    w: string;
}

export interface D203 {
    t: string;
    v: number;
    w: string;
}

export interface E203 {
    t: string;
    v: number;
    w: string;
}

export interface A204 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B204 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C204 {
    t: string;
    v: number;
    w: string;
}

export interface D204 {
    t: string;
    v: number;
    w: string;
}

export interface E204 {
    t: string;
    v: number;
    w: string;
}

export interface A205 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B205 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C205 {
    t: string;
    v: number;
    w: string;
}

export interface D205 {
    t: string;
    v: number;
    w: string;
}

export interface E205 {
    t: string;
    v: number;
    w: string;
}

export interface A206 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B206 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C206 {
    t: string;
    v: number;
    w: string;
}

export interface D206 {
    t: string;
    v: number;
    w: string;
}

export interface E206 {
    t: string;
    v: number;
    w: string;
}

export interface A207 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B207 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C207 {
    t: string;
    v: number;
    w: string;
}

export interface D207 {
    t: string;
    v: number;
    w: string;
}

export interface E207 {
    t: string;
    v: number;
    w: string;
}

export interface A208 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B208 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C208 {
    t: string;
    v: number;
    w: string;
}

export interface D208 {
    t: string;
    v: number;
    w: string;
}

export interface E208 {
    t: string;
    v: number;
    w: string;
}

export interface A209 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B209 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C209 {
    t: string;
    v: number;
    w: string;
}

export interface D209 {
    t: string;
    v: number;
    w: string;
}

export interface E209 {
    t: string;
    v: number;
    w: string;
}

export interface A210 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B210 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C210 {
    t: string;
    v: number;
    w: string;
}

export interface D210 {
    t: string;
    v: number;
    w: string;
}

export interface E210 {
    t: string;
    v: number;
    w: string;
}

export interface A211 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B211 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C211 {
    t: string;
    v: number;
    w: string;
}

export interface D211 {
    t: string;
    v: number;
    w: string;
}

export interface E211 {
    t: string;
    v: number;
    w: string;
}

export interface A212 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B212 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C212 {
    t: string;
    v: number;
    w: string;
}

export interface D212 {
    t: string;
    v: number;
    w: string;
}

export interface E212 {
    t: string;
    v: number;
    w: string;
}

export interface A213 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface B213 {
    t: string;
    v: string;
    r: string;
    h: string;
    w: string;
}

export interface C213 {
    t: string;
    v: number;
    w: string;
}

export interface D213 {
    t: string;
    v: number;
    w: string;
}

export interface E213 {
    t: string;
    v: number;
    w: string;
}

export interface Margins {
    left: number;
    right: number;
    top: number;
    bottom: number;
    header: number;
    footer: number;
}

export interface TestSansHeader {
    "!ref": string;
    A1: A1;
    B1: B1;
    C1: C1;
    D1: D1;
    E1: E1;
    A2: A2;
    B2: B2;
    C2: C2;
    D2: D2;
    E2: E2;
    A3: A3;
    B3: B3;
    C3: C3;
    D3: D3;
    E3: E3;
    A4: A4;
    B4: B4;
    C4: C4;
    D4: D4;
    E4: E4;
    A5: A5;
    B5: B5;
    C5: C5;
    D5: D5;
    E5: E5;
    A6: A6;
    B6: B6;
    C6: C6;
    D6: D6;
    E6: E6;
    A7: A7;
    B7: B7;
    C7: C7;
    D7: D7;
    E7: E7;
    A8: A8;
    B8: B8;
    C8: C8;
    D8: D8;
    E8: E8;
    A9: A9;
    B9: B9;
    C9: C9;
    D9: D9;
    E9: E9;
    A10: A10;
    B10: B10;
    C10: C10;
    D10: D10;
    E10: E10;
    A11: A11;
    B11: B11;
    C11: C11;
    D11: D11;
    E11: E11;
    A12: A12;
    B12: B12;
    C12: C12;
    D12: D12;
    E12: E12;
    A13: A13;
    B13: B13;
    C13: C13;
    D13: D13;
    E13: E13;
    A14: A14;
    B14: B14;
    C14: C14;
    D14: D14;
    E14: E14;
    A15: A15;
    B15: B15;
    C15: C15;
    D15: D15;
    E15: E15;
    A16: A16;
    B16: B16;
    C16: C16;
    D16: D16;
    E16: E16;
    A17: A17;
    B17: B17;
    C17: C17;
    D17: D17;
    E17: E17;
    A18: A18;
    B18: B18;
    C18: C18;
    D18: D18;
    E18: E18;
    A19: A19;
    B19: B19;
    C19: C19;
    D19: D19;
    E19: E19;
    A20: A20;
    B20: B20;
    C20: C20;
    D20: D20;
    E20: E20;
    A21: A21;
    B21: B21;
    C21: C21;
    D21: D21;
    E21: E21;
    A22: A22;
    B22: B22;
    C22: C22;
    D22: D22;
    E22: E22;
    A23: A23;
    B23: B23;
    C23: C23;
    D23: D23;
    E23: E23;
    A24: A24;
    B24: B24;
    C24: C24;
    D24: D24;
    E24: E24;
    A25: A25;
    B25: B25;
    C25: C25;
    D25: D25;
    E25: E25;
    A26: A26;
    B26: B26;
    C26: C26;
    D26: D26;
    E26: E26;
    A27: A27;
    B27: B27;
    C27: C27;
    D27: D27;
    E27: E27;
    A28: A28;
    B28: B28;
    C28: C28;
    D28: D28;
    E28: E28;
    A29: A29;
    B29: B29;
    C29: C29;
    D29: D29;
    E29: E29;
    A30: A30;
    B30: B30;
    C30: C30;
    D30: D30;
    E30: E30;
    A31: A31;
    B31: B31;
    C31: C31;
    D31: D31;
    E31: E31;
    A32: A32;
    B32: B32;
    C32: C32;
    D32: D32;
    E32: E32;
    A33: A33;
    B33: B33;
    C33: C33;
    D33: D33;
    E33: E33;
    A34: A34;
    B34: B34;
    C34: C34;
    D34: D34;
    E34: E34;
    A35: A35;
    B35: B35;
    C35: C35;
    D35: D35;
    E35: E35;
    A36: A36;
    B36: B36;
    C36: C36;
    D36: D36;
    E36: E36;
    A37: A37;
    B37: B37;
    C37: C37;
    D37: D37;
    E37: E37;
    A38: A38;
    B38: B38;
    C38: C38;
    D38: D38;
    E38: E38;
    A39: A39;
    B39: B39;
    C39: C39;
    D39: D39;
    E39: E39;
    A40: A40;
    B40: B40;
    C40: C40;
    D40: D40;
    E40: E40;
    A41: A41;
    B41: B41;
    C41: C41;
    D41: D41;
    E41: E41;
    A42: A42;
    B42: B42;
    C42: C42;
    D42: D42;
    E42: E42;
    A43: A43;
    B43: B43;
    C43: C43;
    D43: D43;
    E43: E43;
    A44: A44;
    B44: B44;
    C44: C44;
    D44: D44;
    E44: E44;
    A45: A45;
    B45: B45;
    C45: C45;
    D45: D45;
    E45: E45;
    A46: A46;
    B46: B46;
    C46: C46;
    D46: D46;
    E46: E46;
    A47: A47;
    B47: B47;
    C47: C47;
    D47: D47;
    E47: E47;
    A48: A48;
    B48: B48;
    C48: C48;
    D48: D48;
    E48: E48;
    A49: A49;
    B49: B49;
    C49: C49;
    D49: D49;
    E49: E49;
    A50: A50;
    B50: B50;
    C50: C50;
    D50: D50;
    E50: E50;
    A51: A51;
    B51: B51;
    C51: C51;
    D51: D51;
    E51: E51;
    A52: A52;
    B52: B52;
    C52: C52;
    D52: D52;
    E52: E52;
    A53: A53;
    B53: B53;
    C53: C53;
    D53: D53;
    E53: E53;
    A54: A54;
    B54: B54;
    C54: C54;
    D54: D54;
    E54: E54;
    A55: A55;
    B55: B55;
    C55: C55;
    D55: D55;
    E55: E55;
    A56: A56;
    B56: B56;
    C56: C56;
    D56: D56;
    E56: E56;
    A57: A57;
    B57: B57;
    C57: C57;
    D57: D57;
    E57: E57;
    A58: A58;
    B58: B58;
    C58: C58;
    D58: D58;
    E58: E58;
    A59: A59;
    B59: B59;
    C59: C59;
    D59: D59;
    E59: E59;
    A60: A60;
    B60: B60;
    C60: C60;
    D60: D60;
    E60: E60;
    A61: A61;
    B61: B61;
    C61: C61;
    D61: D61;
    E61: E61;
    A62: A62;
    B62: B62;
    C62: C62;
    D62: D62;
    E62: E62;
    A63: A63;
    B63: B63;
    C63: C63;
    D63: D63;
    E63: E63;
    A64: A64;
    B64: B64;
    C64: C64;
    D64: D64;
    E64: E64;
    A65: A65;
    B65: B65;
    C65: C65;
    D65: D65;
    E65: E65;
    A66: A66;
    B66: B66;
    C66: C66;
    D66: D66;
    E66: E66;
    A67: A67;
    B67: B67;
    C67: C67;
    D67: D67;
    E67: E67;
    A68: A68;
    B68: B68;
    C68: C68;
    D68: D68;
    E68: E68;
    A69: A69;
    B69: B69;
    C69: C69;
    D69: D69;
    E69: E69;
    A70: A70;
    B70: B70;
    C70: C70;
    D70: D70;
    E70: E70;
    A71: A71;
    B71: B71;
    C71: C71;
    D71: D71;
    E71: E71;
    A72: A72;
    B72: B72;
    C72: C72;
    D72: D72;
    E72: E72;
    A73: A73;
    B73: B73;
    C73: C73;
    D73: D73;
    E73: E73;
    A74: A74;
    B74: B74;
    C74: C74;
    D74: D74;
    E74: E74;
    A75: A75;
    B75: B75;
    C75: C75;
    D75: D75;
    E75: E75;
    A76: A76;
    B76: B76;
    C76: C76;
    D76: D76;
    E76: E76;
    A77: A77;
    B77: B77;
    C77: C77;
    D77: D77;
    E77: E77;
    A78: A78;
    B78: B78;
    C78: C78;
    D78: D78;
    E78: E78;
    A79: A79;
    B79: B79;
    C79: C79;
    D79: D79;
    E79: E79;
    A80: A80;
    B80: B80;
    C80: C80;
    D80: D80;
    E80: E80;
    A81: A81;
    B81: B81;
    C81: C81;
    D81: D81;
    E81: E81;
    A82: A82;
    B82: B82;
    C82: C82;
    D82: D82;
    E82: E82;
    A83: A83;
    B83: B83;
    C83: C83;
    D83: D83;
    E83: E83;
    A84: A84;
    B84: B84;
    C84: C84;
    D84: D84;
    E84: E84;
    A85: A85;
    B85: B85;
    C85: C85;
    D85: D85;
    E85: E85;
    A86: A86;
    B86: B86;
    C86: C86;
    D86: D86;
    E86: E86;
    A87: A87;
    B87: B87;
    C87: C87;
    D87: D87;
    E87: E87;
    A88: A88;
    B88: B88;
    C88: C88;
    D88: D88;
    E88: E88;
    A89: A89;
    B89: B89;
    C89: C89;
    D89: D89;
    E89: E89;
    A90: A90;
    B90: B90;
    C90: C90;
    D90: D90;
    E90: E90;
    A91: A91;
    B91: B91;
    C91: C91;
    D91: D91;
    E91: E91;
    A92: A92;
    B92: B92;
    C92: C92;
    D92: D92;
    E92: E92;
    A93: A93;
    B93: B93;
    C93: C93;
    D93: D93;
    E93: E93;
    A94: A94;
    B94: B94;
    C94: C94;
    D94: D94;
    E94: E94;
    A95: A95;
    B95: B95;
    C95: C95;
    D95: D95;
    E95: E95;
    A96: A96;
    B96: B96;
    C96: C96;
    D96: D96;
    E96: E96;
    A97: A97;
    B97: B97;
    C97: C97;
    D97: D97;
    E97: E97;
    A98: A98;
    B98: B98;
    C98: C98;
    D98: D98;
    E98: E98;
    A99: A99;
    B99: B99;
    C99: C99;
    D99: D99;
    E99: E99;
    A100: A100;
    B100: B100;
    C100: C100;
    D100: D100;
    E100: E100;
    A101: A101;
    B101: B101;
    C101: C101;
    D101: D101;
    E101: E101;
    A102: A102;
    B102: B102;
    C102: C102;
    D102: D102;
    E102: E102;
    A103: A103;
    B103: B103;
    C103: C103;
    D103: D103;
    E103: E103;
    A104: A104;
    B104: B104;
    C104: C104;
    D104: D104;
    E104: E104;
    A105: A105;
    B105: B105;
    C105: C105;
    D105: D105;
    E105: E105;
    A106: A106;
    B106: B106;
    C106: C106;
    D106: D106;
    E106: E106;
    A107: A107;
    B107: B107;
    C107: C107;
    D107: D107;
    E107: E107;
    A108: A108;
    B108: B108;
    C108: C108;
    D108: D108;
    E108: E108;
    A109: A109;
    B109: B109;
    C109: C109;
    D109: D109;
    E109: E109;
    A110: A110;
    B110: B110;
    C110: C110;
    D110: D110;
    E110: E110;
    A111: A111;
    B111: B111;
    C111: C111;
    D111: D111;
    E111: E111;
    A112: A112;
    B112: B112;
    C112: C112;
    D112: D112;
    E112: E112;
    A113: A113;
    B113: B113;
    C113: C113;
    D113: D113;
    E113: E113;
    A114: A114;
    B114: B114;
    C114: C114;
    D114: D114;
    E114: E114;
    A115: A115;
    B115: B115;
    C115: C115;
    D115: D115;
    E115: E115;
    A116: A116;
    B116: B116;
    C116: C116;
    D116: D116;
    E116: E116;
    A117: A117;
    B117: B117;
    C117: C117;
    D117: D117;
    E117: E117;
    A118: A118;
    B118: B118;
    C118: C118;
    D118: D118;
    E118: E118;
    A119: A119;
    B119: B119;
    C119: C119;
    D119: D119;
    E119: E119;
    A120: A120;
    B120: B120;
    C120: C120;
    D120: D120;
    E120: E120;
    A121: A121;
    B121: B121;
    C121: C121;
    D121: D121;
    E121: E121;
    A122: A122;
    B122: B122;
    C122: C122;
    D122: D122;
    E122: E122;
    A123: A123;
    B123: B123;
    C123: C123;
    D123: D123;
    E123: E123;
    A124: A124;
    B124: B124;
    C124: C124;
    D124: D124;
    E124: E124;
    A125: A125;
    B125: B125;
    C125: C125;
    D125: D125;
    E125: E125;
    A126: A126;
    B126: B126;
    C126: C126;
    D126: D126;
    E126: E126;
    A127: A127;
    B127: B127;
    C127: C127;
    D127: D127;
    E127: E127;
    A128: A128;
    B128: B128;
    C128: C128;
    D128: D128;
    E128: E128;
    A129: A129;
    B129: B129;
    C129: C129;
    D129: D129;
    E129: E129;
    A130: A130;
    B130: B130;
    C130: C130;
    D130: D130;
    E130: E130;
    A131: A131;
    B131: B131;
    C131: C131;
    D131: D131;
    E131: E131;
    A132: A132;
    B132: B132;
    C132: C132;
    D132: D132;
    E132: E132;
    A133: A133;
    B133: B133;
    C133: C133;
    D133: D133;
    E133: E133;
    A134: A134;
    B134: B134;
    C134: C134;
    D134: D134;
    E134: E134;
    A135: A135;
    B135: B135;
    C135: C135;
    D135: D135;
    E135: E135;
    A136: A136;
    B136: B136;
    C136: C136;
    D136: D136;
    E136: E136;
    A137: A137;
    B137: B137;
    C137: C137;
    D137: D137;
    E137: E137;
    A138: A138;
    B138: B138;
    C138: C138;
    D138: D138;
    E138: E138;
    A139: A139;
    B139: B139;
    C139: C139;
    D139: D139;
    E139: E139;
    A140: A140;
    B140: B140;
    C140: C140;
    D140: D140;
    E140: E140;
    A141: A141;
    B141: B141;
    C141: C141;
    D141: D141;
    E141: E141;
    A142: A142;
    B142: B142;
    C142: C142;
    D142: D142;
    E142: E142;
    A143: A143;
    B143: B143;
    C143: C143;
    D143: D143;
    E143: E143;
    A144: A144;
    B144: B144;
    C144: C144;
    D144: D144;
    E144: E144;
    A145: A145;
    B145: B145;
    C145: C145;
    D145: D145;
    E145: E145;
    A146: A146;
    B146: B146;
    C146: C146;
    D146: D146;
    E146: E146;
    A147: A147;
    B147: B147;
    C147: C147;
    D147: D147;
    E147: E147;
    A148: A148;
    B148: B148;
    C148: C148;
    D148: D148;
    E148: E148;
    A149: A149;
    B149: B149;
    C149: C149;
    D149: D149;
    E149: E149;
    A150: A150;
    B150: B150;
    C150: C150;
    D150: D150;
    E150: E150;
    A151: A151;
    B151: B151;
    C151: C151;
    D151: D151;
    E151: E151;
    A152: A152;
    B152: B152;
    C152: C152;
    D152: D152;
    E152: E152;
    A153: A153;
    B153: B153;
    C153: C153;
    D153: D153;
    E153: E153;
    A154: A154;
    B154: B154;
    C154: C154;
    D154: D154;
    E154: E154;
    A155: A155;
    B155: B155;
    C155: C155;
    D155: D155;
    E155: E155;
    A156: A156;
    B156: B156;
    C156: C156;
    D156: D156;
    E156: E156;
    A157: A157;
    B157: B157;
    C157: C157;
    D157: D157;
    E157: E157;
    A158: A158;
    B158: B158;
    C158: C158;
    D158: D158;
    E158: E158;
    A159: A159;
    B159: B159;
    C159: C159;
    D159: D159;
    E159: E159;
    A160: A160;
    B160: B160;
    C160: C160;
    D160: D160;
    E160: E160;
    A161: A161;
    B161: B161;
    C161: C161;
    D161: D161;
    E161: E161;
    A162: A162;
    B162: B162;
    C162: C162;
    D162: D162;
    E162: E162;
    A163: A163;
    B163: B163;
    C163: C163;
    D163: D163;
    E163: E163;
    A164: A164;
    B164: B164;
    C164: C164;
    D164: D164;
    E164: E164;
    A165: A165;
    B165: B165;
    C165: C165;
    D165: D165;
    E165: E165;
    A166: A166;
    B166: B166;
    C166: C166;
    D166: D166;
    E166: E166;
    A167: A167;
    B167: B167;
    C167: C167;
    D167: D167;
    E167: E167;
    A168: A168;
    B168: B168;
    C168: C168;
    D168: D168;
    E168: E168;
    A169: A169;
    B169: B169;
    C169: C169;
    D169: D169;
    E169: E169;
    A170: A170;
    B170: B170;
    C170: C170;
    D170: D170;
    E170: E170;
    A171: A171;
    B171: B171;
    C171: C171;
    D171: D171;
    E171: E171;
    A172: A172;
    B172: B172;
    C172: C172;
    D172: D172;
    E172: E172;
    A173: A173;
    B173: B173;
    C173: C173;
    D173: D173;
    E173: E173;
    A174: A174;
    B174: B174;
    C174: C174;
    D174: D174;
    E174: E174;
    A175: A175;
    B175: B175;
    C175: C175;
    D175: D175;
    E175: E175;
    A176: A176;
    B176: B176;
    C176: C176;
    D176: D176;
    E176: E176;
    A177: A177;
    B177: B177;
    C177: C177;
    D177: D177;
    E177: E177;
    A178: A178;
    B178: B178;
    C178: C178;
    D178: D178;
    E178: E178;
    A179: A179;
    B179: B179;
    C179: C179;
    D179: D179;
    E179: E179;
    A180: A180;
    B180: B180;
    C180: C180;
    D180: D180;
    E180: E180;
    A181: A181;
    B181: B181;
    C181: C181;
    D181: D181;
    E181: E181;
    A182: A182;
    B182: B182;
    C182: C182;
    D182: D182;
    E182: E182;
    A183: A183;
    B183: B183;
    C183: C183;
    D183: D183;
    E183: E183;
    A184: A184;
    B184: B184;
    C184: C184;
    D184: D184;
    E184: E184;
    A185: A185;
    B185: B185;
    C185: C185;
    D185: D185;
    E185: E185;
    A186: A186;
    B186: B186;
    C186: C186;
    D186: D186;
    E186: E186;
    A187: A187;
    B187: B187;
    C187: C187;
    D187: D187;
    E187: E187;
    A188: A188;
    B188: B188;
    C188: C188;
    D188: D188;
    E188: E188;
    A189: A189;
    B189: B189;
    C189: C189;
    D189: D189;
    E189: E189;
    A190: A190;
    B190: B190;
    C190: C190;
    D190: D190;
    E190: E190;
    A191: A191;
    B191: B191;
    C191: C191;
    D191: D191;
    E191: E191;
    A192: A192;
    B192: B192;
    C192: C192;
    D192: D192;
    E192: E192;
    A193: A193;
    B193: B193;
    C193: C193;
    D193: D193;
    E193: E193;
    A194: A194;
    B194: B194;
    C194: C194;
    D194: D194;
    E194: E194;
    A195: A195;
    B195: B195;
    C195: C195;
    D195: D195;
    E195: E195;
    A196: A196;
    B196: B196;
    C196: C196;
    D196: D196;
    E196: E196;
    A197: A197;
    B197: B197;
    C197: C197;
    D197: D197;
    E197: E197;
    A198: A198;
    B198: B198;
    C198: C198;
    D198: D198;
    E198: E198;
    A199: A199;
    B199: B199;
    C199: C199;
    D199: D199;
    E199: E199;
    A200: A200;
    B200: B200;
    C200: C200;
    D200: D200;
    E200: E200;
    A201: A201;
    B201: B201;
    C201: C201;
    D201: D201;
    E201: E201;
    A202: A202;
    B202: B202;
    C202: C202;
    D202: D202;
    E202: E202;
    A203: A203;
    B203: B203;
    C203: C203;
    D203: D203;
    E203: E203;
    A204: A204;
    B204: B204;
    C204: C204;
    D204: D204;
    E204: E204;
    A205: A205;
    B205: B205;
    C205: C205;
    D205: D205;
    E205: E205;
    A206: A206;
    B206: B206;
    C206: C206;
    D206: D206;
    E206: E206;
    A207: A207;
    B207: B207;
    C207: C207;
    D207: D207;
    E207: E207;
    A208: A208;
    B208: B208;
    C208: C208;
    D208: D208;
    E208: E208;
    A209: A209;
    B209: B209;
    C209: C209;
    D209: D209;
    E209: E209;
    A210: A210;
    B210: B210;
    C210: C210;
    D210: D210;
    E210: E210;
    A211: A211;
    B211: B211;
    C211: C211;
    D211: D211;
    E211: E211;
    A212: A212;
    B212: B212;
    C212: C212;
    D212: D212;
    E212: E212;
    A213: A213;
    B213: B213;
    C213: C213;
    D213: D213;
    E213: E213;
    "!margins": Margins;
}

export interface Sheets {
    "Test-Sans-header": TestSansHeader;
}

export interface String {
    t: string;
    r: string;
    h: string;
}

export interface Color {
    theme: number;
}

export interface Font {
    sz: number;
    color: Color;
    name: string;
    family: number;
    scheme: string;
}

export interface Fill {
    patternType: string;
}

export interface Border {
}

export interface CellXf {
    numFmtId: number;
    numfmtid: string;
    fontId: number;
    fontid: string;
    fillId: number;
    fillid: string;
    borderId: number;
    borderid: string;
    xfId: number;
    xfid: string;
    applyNumberFormat?: boolean;
    applynumberformat: string;
    applyFont?: boolean;
    applyfont: string;
}

export interface Styles {
    NumberFmt: string[];
    Fonts: Font[];
    Fills: Fill[];
    Borders: Border[];
    CellXf: CellXf[];
}

export interface Themes {
}

export interface SSF {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    9: string;
    10: string;
    11: string;
    12: string;
    13: string;
    14: string;
    15: string;
    16: string;
    17: string;
    18: string;
    19: string;
    20: string;
    21: string;
    22: string;
    37: string;
    38: string;
    39: string;
    40: string;
    45: string;
    46: string;
    47: string;
    48: string;
    49: string;
    56: string;
    168: string;
    65535: string;
}

export interface Custom_XLXS {
    Directory: Directory;
    Workbook: Workbook;
    Props: Props;
    Custprops: Custprops;
    Deps: Deps;
    Sheets: Sheets;
    SheetNames: string[];
    Strings: String[];
    Styles: Styles;
    Themes: Themes;
    SSF: SSF;
}
export class ExcelResult {
    data: {}; sheetNames: string[]; fileName: any;
}


