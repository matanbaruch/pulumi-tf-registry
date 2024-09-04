// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class XrayGroup extends pulumi.CustomResource {
    /**
     * Get an existing XrayGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: XrayGroupState, opts?: pulumi.CustomResourceOptions): XrayGroup {
        return new XrayGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/xrayGroup:XrayGroup';

    /**
     * Returns true if the given object is an instance of XrayGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is XrayGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === XrayGroup.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly filterExpression!: pulumi.Output<string>;
    public readonly groupName!: pulumi.Output<string>;
    public readonly insightsConfiguration!: pulumi.Output<outputs.XrayGroupInsightsConfiguration | undefined>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tagsAll!: pulumi.Output<{[key: string]: string}>;

    /**
     * Create a XrayGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: XrayGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: XrayGroupArgs | XrayGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as XrayGroupState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["filterExpression"] = state ? state.filterExpression : undefined;
            resourceInputs["groupName"] = state ? state.groupName : undefined;
            resourceInputs["insightsConfiguration"] = state ? state.insightsConfiguration : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
        } else {
            const args = argsOrState as XrayGroupArgs | undefined;
            if ((!args || args.filterExpression === undefined) && !opts.urn) {
                throw new Error("Missing required property 'filterExpression'");
            }
            if ((!args || args.groupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'groupName'");
            }
            resourceInputs["filterExpression"] = args ? args.filterExpression : undefined;
            resourceInputs["groupName"] = args ? args.groupName : undefined;
            resourceInputs["insightsConfiguration"] = args ? args.insightsConfiguration : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tagsAll"] = args ? args.tagsAll : undefined;
            resourceInputs["arn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(XrayGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering XrayGroup resources.
 */
export interface XrayGroupState {
    arn?: pulumi.Input<string>;
    filterExpression?: pulumi.Input<string>;
    groupName?: pulumi.Input<string>;
    insightsConfiguration?: pulumi.Input<inputs.XrayGroupInsightsConfiguration>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a XrayGroup resource.
 */
export interface XrayGroupArgs {
    filterExpression: pulumi.Input<string>;
    groupName: pulumi.Input<string>;
    insightsConfiguration?: pulumi.Input<inputs.XrayGroupInsightsConfiguration>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
