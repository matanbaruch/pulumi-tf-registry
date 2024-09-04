// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class HealthMonitorMethodUdp extends pulumi.CustomResource {
    /**
     * Get an existing HealthMonitorMethodUdp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: HealthMonitorMethodUdpState, opts?: pulumi.CustomResourceOptions): HealthMonitorMethodUdp {
        return new HealthMonitorMethodUdp(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/healthMonitorMethodUdp:HealthMonitorMethodUdp';

    /**
     * Returns true if the given object is an instance of HealthMonitorMethodUdp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is HealthMonitorMethodUdp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === HealthMonitorMethodUdp.__pulumiType;
    }

    /**
     * Force Up with no response at the first time
     */
    public readonly forceUpWithSingleHealthcheck!: pulumi.Output<number | undefined>;
    /**
     * Name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * UDP type
     */
    public readonly udp!: pulumi.Output<number | undefined>;
    /**
     * Specify UDP port (Specify port number)
     */
    public readonly udpPort!: pulumi.Output<number | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a HealthMonitorMethodUdp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: HealthMonitorMethodUdpArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: HealthMonitorMethodUdpArgs | HealthMonitorMethodUdpState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as HealthMonitorMethodUdpState | undefined;
            resourceInputs["forceUpWithSingleHealthcheck"] = state ? state.forceUpWithSingleHealthcheck : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["udp"] = state ? state.udp : undefined;
            resourceInputs["udpPort"] = state ? state.udpPort : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as HealthMonitorMethodUdpArgs | undefined;
            resourceInputs["forceUpWithSingleHealthcheck"] = args ? args.forceUpWithSingleHealthcheck : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["udp"] = args ? args.udp : undefined;
            resourceInputs["udpPort"] = args ? args.udpPort : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(HealthMonitorMethodUdp.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering HealthMonitorMethodUdp resources.
 */
export interface HealthMonitorMethodUdpState {
    /**
     * Force Up with no response at the first time
     */
    forceUpWithSingleHealthcheck?: pulumi.Input<number>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * UDP type
     */
    udp?: pulumi.Input<number>;
    /**
     * Specify UDP port (Specify port number)
     */
    udpPort?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a HealthMonitorMethodUdp resource.
 */
export interface HealthMonitorMethodUdpArgs {
    /**
     * Force Up with no response at the first time
     */
    forceUpWithSingleHealthcheck?: pulumi.Input<number>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * UDP type
     */
    udp?: pulumi.Input<number>;
    /**
     * Specify UDP port (Specify port number)
     */
    udpPort?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
