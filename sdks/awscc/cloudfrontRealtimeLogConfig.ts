// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CloudfrontRealtimeLogConfig extends pulumi.CustomResource {
    /**
     * Get an existing CloudfrontRealtimeLogConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CloudfrontRealtimeLogConfigState, opts?: pulumi.CustomResourceOptions): CloudfrontRealtimeLogConfig {
        return new CloudfrontRealtimeLogConfig(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/cloudfrontRealtimeLogConfig:CloudfrontRealtimeLogConfig';

    /**
     * Returns true if the given object is an instance of CloudfrontRealtimeLogConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CloudfrontRealtimeLogConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CloudfrontRealtimeLogConfig.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly endPoints!: pulumi.Output<outputs.CloudfrontRealtimeLogConfigEndPoint[]>;
    public readonly fields!: pulumi.Output<string[]>;
    public readonly name!: pulumi.Output<string>;
    public readonly samplingRate!: pulumi.Output<number>;

    /**
     * Create a CloudfrontRealtimeLogConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CloudfrontRealtimeLogConfigArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CloudfrontRealtimeLogConfigArgs | CloudfrontRealtimeLogConfigState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CloudfrontRealtimeLogConfigState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["endPoints"] = state ? state.endPoints : undefined;
            resourceInputs["fields"] = state ? state.fields : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["samplingRate"] = state ? state.samplingRate : undefined;
        } else {
            const args = argsOrState as CloudfrontRealtimeLogConfigArgs | undefined;
            if ((!args || args.endPoints === undefined) && !opts.urn) {
                throw new Error("Missing required property 'endPoints'");
            }
            if ((!args || args.fields === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fields'");
            }
            if ((!args || args.samplingRate === undefined) && !opts.urn) {
                throw new Error("Missing required property 'samplingRate'");
            }
            resourceInputs["endPoints"] = args ? args.endPoints : undefined;
            resourceInputs["fields"] = args ? args.fields : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["samplingRate"] = args ? args.samplingRate : undefined;
            resourceInputs["arn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CloudfrontRealtimeLogConfig.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CloudfrontRealtimeLogConfig resources.
 */
export interface CloudfrontRealtimeLogConfigState {
    arn?: pulumi.Input<string>;
    endPoints?: pulumi.Input<pulumi.Input<inputs.CloudfrontRealtimeLogConfigEndPoint>[]>;
    fields?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    samplingRate?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a CloudfrontRealtimeLogConfig resource.
 */
export interface CloudfrontRealtimeLogConfigArgs {
    endPoints: pulumi.Input<pulumi.Input<inputs.CloudfrontRealtimeLogConfigEndPoint>[]>;
    fields: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    samplingRate: pulumi.Input<number>;
}
