// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class EcsActivation extends pulumi.CustomResource {
    /**
     * Get an existing EcsActivation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EcsActivationState, opts?: pulumi.CustomResourceOptions): EcsActivation {
        return new EcsActivation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/ecsActivation:EcsActivation';

    /**
     * Returns true if the given object is an instance of EcsActivation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EcsActivation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EcsActivation.__pulumiType;
    }

    public readonly description!: pulumi.Output<string | undefined>;
    public readonly instanceCount!: pulumi.Output<number>;
    public readonly instanceName!: pulumi.Output<string | undefined>;
    public readonly ipAddressRange!: pulumi.Output<string>;
    public readonly timeToLiveInHours!: pulumi.Output<number>;
    public readonly timeouts!: pulumi.Output<outputs.EcsActivationTimeouts | undefined>;

    /**
     * Create a EcsActivation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: EcsActivationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EcsActivationArgs | EcsActivationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as EcsActivationState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["instanceCount"] = state ? state.instanceCount : undefined;
            resourceInputs["instanceName"] = state ? state.instanceName : undefined;
            resourceInputs["ipAddressRange"] = state ? state.ipAddressRange : undefined;
            resourceInputs["timeToLiveInHours"] = state ? state.timeToLiveInHours : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as EcsActivationArgs | undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["instanceCount"] = args ? args.instanceCount : undefined;
            resourceInputs["instanceName"] = args ? args.instanceName : undefined;
            resourceInputs["ipAddressRange"] = args ? args.ipAddressRange : undefined;
            resourceInputs["timeToLiveInHours"] = args ? args.timeToLiveInHours : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(EcsActivation.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering EcsActivation resources.
 */
export interface EcsActivationState {
    description?: pulumi.Input<string>;
    instanceCount?: pulumi.Input<number>;
    instanceName?: pulumi.Input<string>;
    ipAddressRange?: pulumi.Input<string>;
    timeToLiveInHours?: pulumi.Input<number>;
    timeouts?: pulumi.Input<inputs.EcsActivationTimeouts>;
}

/**
 * The set of arguments for constructing a EcsActivation resource.
 */
export interface EcsActivationArgs {
    description?: pulumi.Input<string>;
    instanceCount?: pulumi.Input<number>;
    instanceName?: pulumi.Input<string>;
    ipAddressRange?: pulumi.Input<string>;
    timeToLiveInHours?: pulumi.Input<number>;
    timeouts?: pulumi.Input<inputs.EcsActivationTimeouts>;
}
