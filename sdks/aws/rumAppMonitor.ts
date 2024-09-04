// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class RumAppMonitor extends pulumi.CustomResource {
    /**
     * Get an existing RumAppMonitor resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RumAppMonitorState, opts?: pulumi.CustomResourceOptions): RumAppMonitor {
        return new RumAppMonitor(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/rumAppMonitor:RumAppMonitor';

    /**
     * Returns true if the given object is an instance of RumAppMonitor.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RumAppMonitor {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RumAppMonitor.__pulumiType;
    }

    public readonly appMonitorConfiguration!: pulumi.Output<outputs.RumAppMonitorAppMonitorConfiguration | undefined>;
    public /*out*/ readonly appMonitorId!: pulumi.Output<string>;
    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly customEvents!: pulumi.Output<outputs.RumAppMonitorCustomEvents | undefined>;
    public readonly cwLogEnabled!: pulumi.Output<boolean | undefined>;
    public /*out*/ readonly cwLogGroup!: pulumi.Output<string>;
    public readonly domain!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tagsAll!: pulumi.Output<{[key: string]: string}>;

    /**
     * Create a RumAppMonitor resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RumAppMonitorArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RumAppMonitorArgs | RumAppMonitorState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RumAppMonitorState | undefined;
            resourceInputs["appMonitorConfiguration"] = state ? state.appMonitorConfiguration : undefined;
            resourceInputs["appMonitorId"] = state ? state.appMonitorId : undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["customEvents"] = state ? state.customEvents : undefined;
            resourceInputs["cwLogEnabled"] = state ? state.cwLogEnabled : undefined;
            resourceInputs["cwLogGroup"] = state ? state.cwLogGroup : undefined;
            resourceInputs["domain"] = state ? state.domain : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
        } else {
            const args = argsOrState as RumAppMonitorArgs | undefined;
            if ((!args || args.domain === undefined) && !opts.urn) {
                throw new Error("Missing required property 'domain'");
            }
            resourceInputs["appMonitorConfiguration"] = args ? args.appMonitorConfiguration : undefined;
            resourceInputs["customEvents"] = args ? args.customEvents : undefined;
            resourceInputs["cwLogEnabled"] = args ? args.cwLogEnabled : undefined;
            resourceInputs["domain"] = args ? args.domain : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tagsAll"] = args ? args.tagsAll : undefined;
            resourceInputs["appMonitorId"] = undefined /*out*/;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["cwLogGroup"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RumAppMonitor.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RumAppMonitor resources.
 */
export interface RumAppMonitorState {
    appMonitorConfiguration?: pulumi.Input<inputs.RumAppMonitorAppMonitorConfiguration>;
    appMonitorId?: pulumi.Input<string>;
    arn?: pulumi.Input<string>;
    customEvents?: pulumi.Input<inputs.RumAppMonitorCustomEvents>;
    cwLogEnabled?: pulumi.Input<boolean>;
    cwLogGroup?: pulumi.Input<string>;
    domain?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a RumAppMonitor resource.
 */
export interface RumAppMonitorArgs {
    appMonitorConfiguration?: pulumi.Input<inputs.RumAppMonitorAppMonitorConfiguration>;
    customEvents?: pulumi.Input<inputs.RumAppMonitorCustomEvents>;
    cwLogEnabled?: pulumi.Input<boolean>;
    domain: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
