import { QueryFormData, supersetTheme } from "@superset-ui/core";
export interface SupersetPluginAntdchartTestStylesProps {
    height: number;
    width: number;
    headerFontSize: keyof typeof supersetTheme.typography.sizes;
    boldText: boolean;
}
interface SupersetPluginAntdchartTestCustomizeProps {
    pageSize: number;
    titleText: string;
}
export declare type SupersetPluginAntdchartTestQueryFormData = QueryFormData & SupersetPluginAntdchartTestStylesProps & SupersetPluginAntdchartTestCustomizeProps;
export declare type SupersetPluginAntdchartTestProps = SupersetPluginAntdchartTestStylesProps & SupersetPluginAntdchartTestCustomizeProps & {
    data: TableDataType[];
    colNames: string[];
};
export declare type TableDataType = {
    key: number;
    [key: string]: any;
};
export {};
//# sourceMappingURL=types.d.ts.map