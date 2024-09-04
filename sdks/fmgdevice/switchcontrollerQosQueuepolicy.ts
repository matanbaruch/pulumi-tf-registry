// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SwitchcontrollerQosQueuepolicy extends pulumi.CustomResource {
    /**
     * Get an existing SwitchcontrollerQosQueuepolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SwitchcontrollerQosQueuepolicyState, opts?: pulumi.CustomResourceOptions): SwitchcontrollerQosQueuepolicy {
        return new SwitchcontrollerQosQueuepolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/switchcontrollerQosQueuepolicy:SwitchcontrollerQosQueuepolicy';

    /**
     * Returns true if the given object is an instance of SwitchcontrollerQosQueuepolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SwitchcontrollerQosQueuepolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SwitchcontrollerQosQueuepolicy.__pulumiType;
    }

    public readonly cosQueues!: pulumi.Output<outputs.SwitchcontrollerQosQueuepolicyCosQueue[] | undefined>;
    public readonly deviceName!: pulumi.Output<string>;
    public readonly deviceVdom!: pulumi.Output<string>;
    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly rateBy!: pulumi.Output<string>;
    public readonly schedule!: pulumi.Output<string>;

    /**
     * Create a SwitchcontrollerQosQueuepolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SwitchcontrollerQosQueuepolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SwitchcontrollerQosQueuepolicyArgs | SwitchcontrollerQosQueuepolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SwitchcontrollerQosQueuepolicyState | undefined;
            resourceInputs["cosQueues"] = state ? state.cosQueues : undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["deviceVdom"] = state ? state.deviceVdom : undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["rateBy"] = state ? state.rateBy : undefined;
            resourceInputs["schedule"] = state ? state.schedule : undefined;
        } else {
            const args = argsOrState as SwitchcontrollerQosQueuepolicyArgs | undefined;
            resourceInputs["cosQueues"] = args ? args.cosQueues : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["deviceVdom"] = args ? args.deviceVdom : undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["rateBy"] = args ? args.rateBy : undefined;
            resourceInputs["schedule"] = args ? args.schedule : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SwitchcontrollerQosQueuepolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SwitchcontrollerQosQueuepolicy resources.
 */
export interface SwitchcontrollerQosQueuepolicyState {
    cosQueues?: pulumi.Input<pulumi.Input<inputs.SwitchcontrollerQosQueuepolicyCosQueue>[]>;
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    rateBy?: pulumi.Input<string>;
    schedule?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SwitchcontrollerQosQueuepolicy resource.
 */
export interface SwitchcontrollerQosQueuepolicyArgs {
    cosQueues?: pulumi.Input<pulumi.Input<inputs.SwitchcontrollerQosQueuepolicyCosQueue>[]>;
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    rateBy?: pulumi.Input<string>;
    schedule?: pulumi.Input<string>;
}
