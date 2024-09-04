// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AntiddosPacketFilterConfig extends pulumi.CustomResource {
    /**
     * Get an existing AntiddosPacketFilterConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AntiddosPacketFilterConfigState, opts?: pulumi.CustomResourceOptions): AntiddosPacketFilterConfig {
        return new AntiddosPacketFilterConfig(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/antiddosPacketFilterConfig:AntiddosPacketFilterConfig';

    /**
     * Returns true if the given object is an instance of AntiddosPacketFilterConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AntiddosPacketFilterConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AntiddosPacketFilterConfig.__pulumiType;
    }

    /**
     * resource id.
     */
    public readonly instanceId!: pulumi.Output<string>;
    /**
     * Feature filtering configuration.
     */
    public readonly packetFilterConfig!: pulumi.Output<outputs.AntiddosPacketFilterConfigPacketFilterConfig>;

    /**
     * Create a AntiddosPacketFilterConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AntiddosPacketFilterConfigArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AntiddosPacketFilterConfigArgs | AntiddosPacketFilterConfigState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AntiddosPacketFilterConfigState | undefined;
            resourceInputs["instanceId"] = state ? state.instanceId : undefined;
            resourceInputs["packetFilterConfig"] = state ? state.packetFilterConfig : undefined;
        } else {
            const args = argsOrState as AntiddosPacketFilterConfigArgs | undefined;
            if ((!args || args.instanceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceId'");
            }
            if ((!args || args.packetFilterConfig === undefined) && !opts.urn) {
                throw new Error("Missing required property 'packetFilterConfig'");
            }
            resourceInputs["instanceId"] = args ? args.instanceId : undefined;
            resourceInputs["packetFilterConfig"] = args ? args.packetFilterConfig : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AntiddosPacketFilterConfig.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AntiddosPacketFilterConfig resources.
 */
export interface AntiddosPacketFilterConfigState {
    /**
     * resource id.
     */
    instanceId?: pulumi.Input<string>;
    /**
     * Feature filtering configuration.
     */
    packetFilterConfig?: pulumi.Input<inputs.AntiddosPacketFilterConfigPacketFilterConfig>;
}

/**
 * The set of arguments for constructing a AntiddosPacketFilterConfig resource.
 */
export interface AntiddosPacketFilterConfigArgs {
    /**
     * resource id.
     */
    instanceId: pulumi.Input<string>;
    /**
     * Feature filtering configuration.
     */
    packetFilterConfig: pulumi.Input<inputs.AntiddosPacketFilterConfigPacketFilterConfig>;
}
