// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ReportLayoutPageHeaderHeaderitem extends pulumi.CustomResource {
    /**
     * Get an existing ReportLayoutPageHeaderHeaderitem resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ReportLayoutPageHeaderHeaderitemState, opts?: pulumi.CustomResourceOptions): ReportLayoutPageHeaderHeaderitem {
        return new ReportLayoutPageHeaderHeaderitem(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/reportLayoutPageHeaderHeaderitem:ReportLayoutPageHeaderHeaderitem';

    /**
     * Returns true if the given object is an instance of ReportLayoutPageHeaderHeaderitem.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ReportLayoutPageHeaderHeaderitem {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ReportLayoutPageHeaderHeaderitem.__pulumiType;
    }

    public readonly content!: pulumi.Output<string | undefined>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly deviceName!: pulumi.Output<string>;
    public readonly deviceVdom!: pulumi.Output<string>;
    public readonly fosid!: pulumi.Output<number | undefined>;
    public readonly imgSrc!: pulumi.Output<string | undefined>;
    public readonly layout!: pulumi.Output<string>;
    public readonly styles!: pulumi.Output<string[]>;
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a ReportLayoutPageHeaderHeaderitem resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ReportLayoutPageHeaderHeaderitemArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ReportLayoutPageHeaderHeaderitemArgs | ReportLayoutPageHeaderHeaderitemState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ReportLayoutPageHeaderHeaderitemState | undefined;
            resourceInputs["content"] = state ? state.content : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["deviceVdom"] = state ? state.deviceVdom : undefined;
            resourceInputs["fosid"] = state ? state.fosid : undefined;
            resourceInputs["imgSrc"] = state ? state.imgSrc : undefined;
            resourceInputs["layout"] = state ? state.layout : undefined;
            resourceInputs["styles"] = state ? state.styles : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as ReportLayoutPageHeaderHeaderitemArgs | undefined;
            if ((!args || args.layout === undefined) && !opts.urn) {
                throw new Error("Missing required property 'layout'");
            }
            resourceInputs["content"] = args ? args.content : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["deviceVdom"] = args ? args.deviceVdom : undefined;
            resourceInputs["fosid"] = args ? args.fosid : undefined;
            resourceInputs["imgSrc"] = args ? args.imgSrc : undefined;
            resourceInputs["layout"] = args ? args.layout : undefined;
            resourceInputs["styles"] = args ? args.styles : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ReportLayoutPageHeaderHeaderitem.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ReportLayoutPageHeaderHeaderitem resources.
 */
export interface ReportLayoutPageHeaderHeaderitemState {
    content?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    imgSrc?: pulumi.Input<string>;
    layout?: pulumi.Input<string>;
    styles?: pulumi.Input<pulumi.Input<string>[]>;
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ReportLayoutPageHeaderHeaderitem resource.
 */
export interface ReportLayoutPageHeaderHeaderitemArgs {
    content?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    imgSrc?: pulumi.Input<string>;
    layout: pulumi.Input<string>;
    styles?: pulumi.Input<pulumi.Input<string>[]>;
    type?: pulumi.Input<string>;
}
