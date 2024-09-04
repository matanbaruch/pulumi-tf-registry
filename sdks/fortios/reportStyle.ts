// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ReportStyle extends pulumi.CustomResource {
    /**
     * Get an existing ReportStyle resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ReportStyleState, opts?: pulumi.CustomResourceOptions): ReportStyle {
        return new ReportStyle(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortios:index/reportStyle:ReportStyle';

    /**
     * Returns true if the given object is an instance of ReportStyle.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ReportStyle {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ReportStyle.__pulumiType;
    }

    public readonly align!: pulumi.Output<string>;
    public readonly bgColor!: pulumi.Output<string>;
    public readonly borderBottom!: pulumi.Output<string>;
    public readonly borderLeft!: pulumi.Output<string>;
    public readonly borderRight!: pulumi.Output<string>;
    public readonly borderTop!: pulumi.Output<string>;
    public readonly columnGap!: pulumi.Output<string>;
    public readonly columnSpan!: pulumi.Output<string>;
    public readonly fgColor!: pulumi.Output<string>;
    public readonly fontFamily!: pulumi.Output<string>;
    public readonly fontSize!: pulumi.Output<string>;
    public readonly fontStyle!: pulumi.Output<string>;
    public readonly fontWeight!: pulumi.Output<string>;
    public readonly height!: pulumi.Output<string>;
    public readonly lineHeight!: pulumi.Output<string>;
    public readonly marginBottom!: pulumi.Output<string>;
    public readonly marginLeft!: pulumi.Output<string>;
    public readonly marginRight!: pulumi.Output<string>;
    public readonly marginTop!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly options!: pulumi.Output<string>;
    public readonly paddingBottom!: pulumi.Output<string>;
    public readonly paddingLeft!: pulumi.Output<string>;
    public readonly paddingRight!: pulumi.Output<string>;
    public readonly paddingTop!: pulumi.Output<string>;
    public readonly vdomparam!: pulumi.Output<string>;
    public readonly width!: pulumi.Output<string>;

    /**
     * Create a ReportStyle resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ReportStyleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ReportStyleArgs | ReportStyleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ReportStyleState | undefined;
            resourceInputs["align"] = state ? state.align : undefined;
            resourceInputs["bgColor"] = state ? state.bgColor : undefined;
            resourceInputs["borderBottom"] = state ? state.borderBottom : undefined;
            resourceInputs["borderLeft"] = state ? state.borderLeft : undefined;
            resourceInputs["borderRight"] = state ? state.borderRight : undefined;
            resourceInputs["borderTop"] = state ? state.borderTop : undefined;
            resourceInputs["columnGap"] = state ? state.columnGap : undefined;
            resourceInputs["columnSpan"] = state ? state.columnSpan : undefined;
            resourceInputs["fgColor"] = state ? state.fgColor : undefined;
            resourceInputs["fontFamily"] = state ? state.fontFamily : undefined;
            resourceInputs["fontSize"] = state ? state.fontSize : undefined;
            resourceInputs["fontStyle"] = state ? state.fontStyle : undefined;
            resourceInputs["fontWeight"] = state ? state.fontWeight : undefined;
            resourceInputs["height"] = state ? state.height : undefined;
            resourceInputs["lineHeight"] = state ? state.lineHeight : undefined;
            resourceInputs["marginBottom"] = state ? state.marginBottom : undefined;
            resourceInputs["marginLeft"] = state ? state.marginLeft : undefined;
            resourceInputs["marginRight"] = state ? state.marginRight : undefined;
            resourceInputs["marginTop"] = state ? state.marginTop : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["options"] = state ? state.options : undefined;
            resourceInputs["paddingBottom"] = state ? state.paddingBottom : undefined;
            resourceInputs["paddingLeft"] = state ? state.paddingLeft : undefined;
            resourceInputs["paddingRight"] = state ? state.paddingRight : undefined;
            resourceInputs["paddingTop"] = state ? state.paddingTop : undefined;
            resourceInputs["vdomparam"] = state ? state.vdomparam : undefined;
            resourceInputs["width"] = state ? state.width : undefined;
        } else {
            const args = argsOrState as ReportStyleArgs | undefined;
            resourceInputs["align"] = args ? args.align : undefined;
            resourceInputs["bgColor"] = args ? args.bgColor : undefined;
            resourceInputs["borderBottom"] = args ? args.borderBottom : undefined;
            resourceInputs["borderLeft"] = args ? args.borderLeft : undefined;
            resourceInputs["borderRight"] = args ? args.borderRight : undefined;
            resourceInputs["borderTop"] = args ? args.borderTop : undefined;
            resourceInputs["columnGap"] = args ? args.columnGap : undefined;
            resourceInputs["columnSpan"] = args ? args.columnSpan : undefined;
            resourceInputs["fgColor"] = args ? args.fgColor : undefined;
            resourceInputs["fontFamily"] = args ? args.fontFamily : undefined;
            resourceInputs["fontSize"] = args ? args.fontSize : undefined;
            resourceInputs["fontStyle"] = args ? args.fontStyle : undefined;
            resourceInputs["fontWeight"] = args ? args.fontWeight : undefined;
            resourceInputs["height"] = args ? args.height : undefined;
            resourceInputs["lineHeight"] = args ? args.lineHeight : undefined;
            resourceInputs["marginBottom"] = args ? args.marginBottom : undefined;
            resourceInputs["marginLeft"] = args ? args.marginLeft : undefined;
            resourceInputs["marginRight"] = args ? args.marginRight : undefined;
            resourceInputs["marginTop"] = args ? args.marginTop : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["options"] = args ? args.options : undefined;
            resourceInputs["paddingBottom"] = args ? args.paddingBottom : undefined;
            resourceInputs["paddingLeft"] = args ? args.paddingLeft : undefined;
            resourceInputs["paddingRight"] = args ? args.paddingRight : undefined;
            resourceInputs["paddingTop"] = args ? args.paddingTop : undefined;
            resourceInputs["vdomparam"] = args ? args.vdomparam : undefined;
            resourceInputs["width"] = args ? args.width : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ReportStyle.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ReportStyle resources.
 */
export interface ReportStyleState {
    align?: pulumi.Input<string>;
    bgColor?: pulumi.Input<string>;
    borderBottom?: pulumi.Input<string>;
    borderLeft?: pulumi.Input<string>;
    borderRight?: pulumi.Input<string>;
    borderTop?: pulumi.Input<string>;
    columnGap?: pulumi.Input<string>;
    columnSpan?: pulumi.Input<string>;
    fgColor?: pulumi.Input<string>;
    fontFamily?: pulumi.Input<string>;
    fontSize?: pulumi.Input<string>;
    fontStyle?: pulumi.Input<string>;
    fontWeight?: pulumi.Input<string>;
    height?: pulumi.Input<string>;
    lineHeight?: pulumi.Input<string>;
    marginBottom?: pulumi.Input<string>;
    marginLeft?: pulumi.Input<string>;
    marginRight?: pulumi.Input<string>;
    marginTop?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    options?: pulumi.Input<string>;
    paddingBottom?: pulumi.Input<string>;
    paddingLeft?: pulumi.Input<string>;
    paddingRight?: pulumi.Input<string>;
    paddingTop?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
    width?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ReportStyle resource.
 */
export interface ReportStyleArgs {
    align?: pulumi.Input<string>;
    bgColor?: pulumi.Input<string>;
    borderBottom?: pulumi.Input<string>;
    borderLeft?: pulumi.Input<string>;
    borderRight?: pulumi.Input<string>;
    borderTop?: pulumi.Input<string>;
    columnGap?: pulumi.Input<string>;
    columnSpan?: pulumi.Input<string>;
    fgColor?: pulumi.Input<string>;
    fontFamily?: pulumi.Input<string>;
    fontSize?: pulumi.Input<string>;
    fontStyle?: pulumi.Input<string>;
    fontWeight?: pulumi.Input<string>;
    height?: pulumi.Input<string>;
    lineHeight?: pulumi.Input<string>;
    marginBottom?: pulumi.Input<string>;
    marginLeft?: pulumi.Input<string>;
    marginRight?: pulumi.Input<string>;
    marginTop?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    options?: pulumi.Input<string>;
    paddingBottom?: pulumi.Input<string>;
    paddingLeft?: pulumi.Input<string>;
    paddingRight?: pulumi.Input<string>;
    paddingTop?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
    width?: pulumi.Input<string>;
}
