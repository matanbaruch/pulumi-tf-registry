// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CoreInstancePoolInstance extends pulumi.CustomResource {
    /**
     * Get an existing CoreInstancePoolInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CoreInstancePoolInstanceState, opts?: pulumi.CustomResourceOptions): CoreInstancePoolInstance {
        return new CoreInstancePoolInstance(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/coreInstancePoolInstance:CoreInstancePoolInstance';

    /**
     * Returns true if the given object is an instance of CoreInstancePoolInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CoreInstancePoolInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CoreInstancePoolInstance.__pulumiType;
    }

    public readonly autoTerminateInstanceOnDelete!: pulumi.Output<boolean | undefined>;
    public /*out*/ readonly availabilityDomain!: pulumi.Output<string>;
    public /*out*/ readonly compartmentId!: pulumi.Output<string>;
    public readonly decrementSizeOnDelete!: pulumi.Output<boolean | undefined>;
    public /*out*/ readonly displayName!: pulumi.Output<string>;
    public /*out*/ readonly faultDomain!: pulumi.Output<string>;
    public /*out*/ readonly instanceConfigurationId!: pulumi.Output<string>;
    public readonly instanceId!: pulumi.Output<string>;
    public readonly instancePoolId!: pulumi.Output<string>;
    public /*out*/ readonly loadBalancerBackends!: pulumi.Output<outputs.CoreInstancePoolInstanceLoadBalancerBackend[]>;
    public /*out*/ readonly region!: pulumi.Output<string>;
    public /*out*/ readonly shape!: pulumi.Output<string>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.CoreInstancePoolInstanceTimeouts | undefined>;

    /**
     * Create a CoreInstancePoolInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CoreInstancePoolInstanceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CoreInstancePoolInstanceArgs | CoreInstancePoolInstanceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CoreInstancePoolInstanceState | undefined;
            resourceInputs["autoTerminateInstanceOnDelete"] = state ? state.autoTerminateInstanceOnDelete : undefined;
            resourceInputs["availabilityDomain"] = state ? state.availabilityDomain : undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["decrementSizeOnDelete"] = state ? state.decrementSizeOnDelete : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["faultDomain"] = state ? state.faultDomain : undefined;
            resourceInputs["instanceConfigurationId"] = state ? state.instanceConfigurationId : undefined;
            resourceInputs["instanceId"] = state ? state.instanceId : undefined;
            resourceInputs["instancePoolId"] = state ? state.instancePoolId : undefined;
            resourceInputs["loadBalancerBackends"] = state ? state.loadBalancerBackends : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["shape"] = state ? state.shape : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["timeCreated"] = state ? state.timeCreated : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as CoreInstancePoolInstanceArgs | undefined;
            if ((!args || args.instanceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceId'");
            }
            if ((!args || args.instancePoolId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instancePoolId'");
            }
            resourceInputs["autoTerminateInstanceOnDelete"] = args ? args.autoTerminateInstanceOnDelete : undefined;
            resourceInputs["decrementSizeOnDelete"] = args ? args.decrementSizeOnDelete : undefined;
            resourceInputs["instanceId"] = args ? args.instanceId : undefined;
            resourceInputs["instancePoolId"] = args ? args.instancePoolId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["availabilityDomain"] = undefined /*out*/;
            resourceInputs["compartmentId"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["faultDomain"] = undefined /*out*/;
            resourceInputs["instanceConfigurationId"] = undefined /*out*/;
            resourceInputs["loadBalancerBackends"] = undefined /*out*/;
            resourceInputs["region"] = undefined /*out*/;
            resourceInputs["shape"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CoreInstancePoolInstance.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CoreInstancePoolInstance resources.
 */
export interface CoreInstancePoolInstanceState {
    autoTerminateInstanceOnDelete?: pulumi.Input<boolean>;
    availabilityDomain?: pulumi.Input<string>;
    compartmentId?: pulumi.Input<string>;
    decrementSizeOnDelete?: pulumi.Input<boolean>;
    displayName?: pulumi.Input<string>;
    faultDomain?: pulumi.Input<string>;
    instanceConfigurationId?: pulumi.Input<string>;
    instanceId?: pulumi.Input<string>;
    instancePoolId?: pulumi.Input<string>;
    loadBalancerBackends?: pulumi.Input<pulumi.Input<inputs.CoreInstancePoolInstanceLoadBalancerBackend>[]>;
    region?: pulumi.Input<string>;
    shape?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    timeCreated?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.CoreInstancePoolInstanceTimeouts>;
}

/**
 * The set of arguments for constructing a CoreInstancePoolInstance resource.
 */
export interface CoreInstancePoolInstanceArgs {
    autoTerminateInstanceOnDelete?: pulumi.Input<boolean>;
    decrementSizeOnDelete?: pulumi.Input<boolean>;
    instanceId: pulumi.Input<string>;
    instancePoolId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.CoreInstancePoolInstanceTimeouts>;
}
