// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SwitchcontrollerTrafficsnifferTargetip extends pulumi.CustomResource {
    /**
     * Get an existing SwitchcontrollerTrafficsnifferTargetip resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SwitchcontrollerTrafficsnifferTargetipState, opts?: pulumi.CustomResourceOptions): SwitchcontrollerTrafficsnifferTargetip {
        return new SwitchcontrollerTrafficsnifferTargetip(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/switchcontrollerTrafficsnifferTargetip:SwitchcontrollerTrafficsnifferTargetip';

    /**
     * Returns true if the given object is an instance of SwitchcontrollerTrafficsnifferTargetip.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SwitchcontrollerTrafficsnifferTargetip {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SwitchcontrollerTrafficsnifferTargetip.__pulumiType;
    }

    public readonly description!: pulumi.Output<string | undefined>;
    public readonly deviceName!: pulumi.Output<string>;
    public readonly deviceVdom!: pulumi.Output<string>;
    public readonly dstEntryId!: pulumi.Output<number | undefined>;
    public readonly ip!: pulumi.Output<string | undefined>;
    public readonly srcEntryId!: pulumi.Output<number | undefined>;

    /**
     * Create a SwitchcontrollerTrafficsnifferTargetip resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SwitchcontrollerTrafficsnifferTargetipArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SwitchcontrollerTrafficsnifferTargetipArgs | SwitchcontrollerTrafficsnifferTargetipState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SwitchcontrollerTrafficsnifferTargetipState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["deviceVdom"] = state ? state.deviceVdom : undefined;
            resourceInputs["dstEntryId"] = state ? state.dstEntryId : undefined;
            resourceInputs["ip"] = state ? state.ip : undefined;
            resourceInputs["srcEntryId"] = state ? state.srcEntryId : undefined;
        } else {
            const args = argsOrState as SwitchcontrollerTrafficsnifferTargetipArgs | undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["deviceVdom"] = args ? args.deviceVdom : undefined;
            resourceInputs["dstEntryId"] = args ? args.dstEntryId : undefined;
            resourceInputs["ip"] = args ? args.ip : undefined;
            resourceInputs["srcEntryId"] = args ? args.srcEntryId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SwitchcontrollerTrafficsnifferTargetip.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SwitchcontrollerTrafficsnifferTargetip resources.
 */
export interface SwitchcontrollerTrafficsnifferTargetipState {
    description?: pulumi.Input<string>;
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    dstEntryId?: pulumi.Input<number>;
    ip?: pulumi.Input<string>;
    srcEntryId?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a SwitchcontrollerTrafficsnifferTargetip resource.
 */
export interface SwitchcontrollerTrafficsnifferTargetipArgs {
    description?: pulumi.Input<string>;
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    dstEntryId?: pulumi.Input<number>;
    ip?: pulumi.Input<string>;
    srcEntryId?: pulumi.Input<number>;
}
