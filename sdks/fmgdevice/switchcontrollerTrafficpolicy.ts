// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SwitchcontrollerTrafficpolicy extends pulumi.CustomResource {
    /**
     * Get an existing SwitchcontrollerTrafficpolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SwitchcontrollerTrafficpolicyState, opts?: pulumi.CustomResourceOptions): SwitchcontrollerTrafficpolicy {
        return new SwitchcontrollerTrafficpolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/switchcontrollerTrafficpolicy:SwitchcontrollerTrafficpolicy';

    /**
     * Returns true if the given object is an instance of SwitchcontrollerTrafficpolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SwitchcontrollerTrafficpolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SwitchcontrollerTrafficpolicy.__pulumiType;
    }

    public readonly cosQueue!: pulumi.Output<number | undefined>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly deviceName!: pulumi.Output<string>;
    public readonly deviceVdom!: pulumi.Output<string>;
    public readonly fosid!: pulumi.Output<number | undefined>;
    public readonly guaranteedBandwidth!: pulumi.Output<number>;
    public readonly guaranteedBurst!: pulumi.Output<number>;
    public readonly maximumBurst!: pulumi.Output<number>;
    public readonly name!: pulumi.Output<string>;
    public readonly policerStatus!: pulumi.Output<string>;
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a SwitchcontrollerTrafficpolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SwitchcontrollerTrafficpolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SwitchcontrollerTrafficpolicyArgs | SwitchcontrollerTrafficpolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SwitchcontrollerTrafficpolicyState | undefined;
            resourceInputs["cosQueue"] = state ? state.cosQueue : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["deviceVdom"] = state ? state.deviceVdom : undefined;
            resourceInputs["fosid"] = state ? state.fosid : undefined;
            resourceInputs["guaranteedBandwidth"] = state ? state.guaranteedBandwidth : undefined;
            resourceInputs["guaranteedBurst"] = state ? state.guaranteedBurst : undefined;
            resourceInputs["maximumBurst"] = state ? state.maximumBurst : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["policerStatus"] = state ? state.policerStatus : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as SwitchcontrollerTrafficpolicyArgs | undefined;
            resourceInputs["cosQueue"] = args ? args.cosQueue : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["deviceVdom"] = args ? args.deviceVdom : undefined;
            resourceInputs["fosid"] = args ? args.fosid : undefined;
            resourceInputs["guaranteedBandwidth"] = args ? args.guaranteedBandwidth : undefined;
            resourceInputs["guaranteedBurst"] = args ? args.guaranteedBurst : undefined;
            resourceInputs["maximumBurst"] = args ? args.maximumBurst : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["policerStatus"] = args ? args.policerStatus : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SwitchcontrollerTrafficpolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SwitchcontrollerTrafficpolicy resources.
 */
export interface SwitchcontrollerTrafficpolicyState {
    cosQueue?: pulumi.Input<number>;
    description?: pulumi.Input<string>;
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    guaranteedBandwidth?: pulumi.Input<number>;
    guaranteedBurst?: pulumi.Input<number>;
    maximumBurst?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    policerStatus?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SwitchcontrollerTrafficpolicy resource.
 */
export interface SwitchcontrollerTrafficpolicyArgs {
    cosQueue?: pulumi.Input<number>;
    description?: pulumi.Input<string>;
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    guaranteedBandwidth?: pulumi.Input<number>;
    guaranteedBurst?: pulumi.Input<number>;
    maximumBurst?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    policerStatus?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
}
